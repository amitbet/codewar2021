(function() {

	// utilities ---------------------------------------------------------------------------------------------------------

	function getRnd(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// bot definitions --------------------------------------------------------------------------------------------------------------

	var ghostBot = function gbot(ghostName, possibleMoves, position, pacmanGridPosition) {
	
    };
    
    var pacBot = function pbot(position, direction, elapsedMs) {
	
    };
	// init --------------------------------------------------------------------------------------------------------------
	var bot = bots[1];
	setTimeout(function registerArmy() {
		window.registerArmy({
			name: "PacBot Alpha",
			icon: "robot",
			cb: pacBot
        });
        window.registerArmy({
			name: "Remember Clyde",
			icon: "robot",
			cb: ghostBot
		});
	}, 2000);

})();