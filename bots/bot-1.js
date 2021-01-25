(function () {

	// utilities ---------------------------------------------------------------------------------------------------------

	function getRnd(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// bot definitions --------------------------------------------------------------------------------------------------------------

	var ghostBot = function (ghostName, possibleMoves, gridPosition, pacmanGridPosition) {
		let r = getRnd(0, Object.keys(possibleMoves).length-1);
		return Object.keys(possibleMoves)[r];
		//return possibleMoves['left'] ? 'left' : possibleMoves['down'] ? 'down' : possibleMoves['right'] ? 'right' : 'up';
	}

	var pacBot = function (position, direction, ghostPositions, elapsedMs) {
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
				name: "PacBot Beta: 30% Iron",
				icon: "robot",
				pacFunc: pacBot,
				ghostFunc: ghostBot
			})
	}, 0);

})();