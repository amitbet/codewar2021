(function () {

	// utilities ---------------------------------------------------------------------------------------------------------

	function getRnd(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// bot definitions --------------------------------------------------------------------------------------------------------------

	var ghostBot = function (ghostName, possibleMoves, gridPosition, pacmanGridPosition) {
		return possibleMoves['left'] ? 'left' : possibleMoves['down'] ? 'down' : possibleMoves['right'] ? 'right' : 'up';
	}

	var pacBot = function (position, direction, ghostPositions, elapsedMs, ghostModes) {
		let r = getRnd(1, 4);
		switch (r) {
			case 1:
				return 'right';
			case 2:
				return 'left';
			case 3:
				return 'up';
			case 4:
				return 'down';
		}
	}

	// init --------------------------------------------------------------------------------------------------------------
	setTimeout(function registerArmy() {
		window.registerBot(
			{
				name: "PacBot Alpha: Remember Clyde",
				icon: "robot",
				pacFunc: pacBot,
				ghostFunc: ghostBot
			})
	}, 0);

})();