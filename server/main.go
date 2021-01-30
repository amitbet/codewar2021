package main

import (
	"encoding/json"
	"flag"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"path"
	"strconv"
	"strings"

	"github.com/gorilla/mux"
)

type fileHandler struct {
	root string
}

func NewFileHandler(root string) http.Handler {
	return &fileHandler{root}
}

func (f *fileHandler) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	upath := r.URL.Path
	if !strings.HasPrefix(upath, "/") {
		upath = "/" + upath
		r.URL.Path = upath
	}
	fName := f.root + path.Clean(upath)
	//println("serving: ", fName)
	http.ServeFile(w, r, fName)
}

var rec = &GameRecord{}

func MatchLoggerHandler(w http.ResponseWriter, r *http.Request) {
	b, _ := ioutil.ReadAll(r.Body)
	var m Match
	err := json.Unmarshal(b, &m)
	if err != nil {
		fmt.Printf("MatchLoggerHandler, a problem in unmarshaling json: %v", err)
	}
	fmt.Printf("%s", m)
	rec.AddMatch(&m)
	err = ioutil.WriteFile("game.csv", []byte(rec.Csv()), 0644)
	if err != nil {
		fmt.Printf("MatchLoggerHandler, problem writing  csv: %v", err)
	}
}

func main() {

	var portFlag = flag.Int("p", 3000, "help message for flag n")
	flag.Parse()
	port := *portFlag
	fs := NewFileHandler("./")
	http.Handle("/", fs)

	r := mux.NewRouter()
	r.HandleFunc("/log-match", MatchLoggerHandler).Methods("POST")
	http.Handle("/log-match", r)

	log.Println("Listening on " + strconv.Itoa(port))
	err := http.ListenAndServe(":"+strconv.Itoa(port), nil)
	if err != nil {
		log.Fatal(err)
	}

}
