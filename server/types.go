package main

type Player struct {
	Role  string `json:"role"`
	Score string `json:"score"`
	Name  string `json:"name"`
}

func (p Player) String() string {
	return p.Role + ": " + p.Name + "\n" + p.Score + "\n"
}

type Match struct {
	Player1 Player `json:"player1"`
	Player2 Player `json:"player2"`
}

func (m Match) String() string {
	return "----------------------------\n" +
		m.Player1.String() +
		m.Player2.String() +
		"----------------------------\n"
}
func (m Match) Csv() string {
	return "\"" + m.Player1.Name + "\",\"" + m.Player1.Role + "\"," + m.Player1.Score +
		",\"" + m.Player2.Name + "\",\"" + m.Player2.Role + "\"," + m.Player2.Score

}

type GameRecord struct {
	MatchArr []*Match
}

func (g *GameRecord) AddMatch(m *Match) {
	g.MatchArr = append(g.MatchArr, m)
}

func (g *GameRecord) Csv() string {
	csvStr := "Player1,Role,Score,Player2,Role,Score\n"
	for _, m := range g.MatchArr {
		csvStr += m.Csv() + "\n"
	}
	return csvStr
}
