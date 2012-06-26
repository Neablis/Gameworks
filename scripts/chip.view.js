var canvasWidth;
var canvasHeight;
var curLevel;
var curPlayer;
var refreshRate = 50;
var startViewX = 0;
var endViewX = 0;
var startViewY = 0;
var endViewY = 0;

function sortByZ()
{
	curLevel.objects.sort(function(a,b){return a.z - b.z});
}

function setPlayer(inPlayer)
{
	curPlayer = inPlayer;
}

function setLevel(inLevel)
{
	curLevel = inLevel;
	startViewX = curLevel.viewX;
	startViewY = curLevel.viewY;
    endViewX = startViewX + curLevel.canvasWidth - 1;
    endViewY = startViewY + curLevel.canvasHeight - 1;
}

function setGameInfo(inInfo)
{
	curLevel = inInfo[0];
	curPlayer = inInfo[1];
	startViewX = curLevel.viewX;
	startViewY = curLevel.viewY;
    endViewX = startViewX + curLevel.canvasWidth - 1;
    endViewY = startViewY + curLevel.canvasHeight - 1;
}

function CVdrawGame(inLevel)
{
	if (curLevel != inLevel[0]
		|| curPlayer != inLevel[1])
	{
		curLevel = inLevel[0];
		curPlayer = inLevel[1];
		sortByZ();
		startViewX = curLevel.viewX;
		startViewY = curLevel.viewY;
	    endViewX = startViewX + curLevel.canvasWidth - 1;
	    endViewY = startViewY + curLevel.canvasHeight - 1;
	}
    var canvas = document.getElementById("gameCanvas");
    canvas.width = curLevel.canvasWidth*curLevel.squareSizeX;
    canvas.height = curLevel.canvasHeight*curLevel.squareSizeY;
    var context = canvas.getContext("2d");
    CVclearCanvas(canvas.width,canvas.height,context);
	for (x = 0; x < curLevel.objects.length; x++)
	{
		if (
			!curLevel.objects[x].deleted &&
			((curLevel.objects[x].x >= startViewX
			&& curLevel.objects[x].x <= endViewX
			&& curLevel.objects[x].y >= startViewY
			&& curLevel.objects[x].y <= endViewY)
			||
			(curLevel.objects[x].x + curLevel.objects[x].width >= startViewX
			&& curLevel.objects[x].x <= endViewX
			&& curLevel.objects[x].y + curLevel.objects[x].height >= startViewY
			&& curLevel.objects[x].y <= endViewY)))
		{
	    	CVdrawToCanvas(context,objectImages[curLevel.objects[x].imageName][curLevel.objects[x].imageTitle][curLevel.objects[x].imageFrame],curLevel.squareSizeX*curLevel.objects[x].x-curLevel.squareSizeX*startViewX, curLevel.squareSizeY*curLevel.objects[x].y-curLevel.squareSizeY*startViewY,curLevel.objects[x].width*curLevel.squareSizeX,curLevel.objects[x].height*curLevel.squareSizeY);
	    }
	}
    CVdrawToCanvas(context,objectImages[curPlayer.imageName][curPlayer.imageTitle][curPlayer.imageFrame],curLevel.squareSizeX*curPlayer.x-curLevel.squareSizeX*startViewX, curLevel.squareSizeY*curPlayer.y-curLevel.squareSizeY*startViewY,curPlayer.width*curLevel.squareSizeX,curPlayer.height*curLevel.squareSizeY);
	setTimeout(function(){CVdrawGame([curLevel,curPlayer]);},refreshRate);
}











////////////////////////////////////////////////////////////////

function CVdrawToCanvas(context,image,locationX,locationY,width,height)
{
	context.drawImage(image, locationX, locationY, width, height);
}

function CVclearCanvas(canvasWidth,canvasHeight,context)
{
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	context.beginPath();
}