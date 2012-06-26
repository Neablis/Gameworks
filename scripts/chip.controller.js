var gameInfo;
function CCstartGame()
{
	CloadImages();
	// CloadImages will draw the board upon completion
}

function CCloadGame()
{
	$(document).bind("keydown", function(e){
		setTimeout(function(){
			CCkeyPressed(e);
		},1);
	});
	gameLevel = CMgetLevel(1);
	CVdrawGame(gameLevel);
	CMgarbageCollection();
}

function CCkeyPressed(inKey)
{
	allowedKeys = [37,38,39,40];
	if ($.inArray(inKey.keyCode,allowedKeys) == -1)
		return false;
	gameInfo = CMprocessTurn(inKey.keyCode);
	setGameInfo(gameInfo);
}