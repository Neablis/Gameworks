var cPlayer = new CObj();
var cLevel = new Level();
var gcInt = 50;

function CMgetLevel(inLevel)
{
	levelObj = new Level();
	levelPlayerInfo = new Array();
	if (inLevel == 1)
	{
		levelObj.id = 1;
		levelObj = loadLevel(levelObj);
		this.cPlayer = levelObj[1];
		this.cLevel = levelObj[0];
		levelPlayerInfo.push(this.cLevel);
		levelPlayerInfo.push(this.cPlayer);
	}
	return levelPlayerInfo;
}

function CMgarbageCollection()
{
	for (i = 0; i < this.cLevel.objects.length; i++)
	{
		if (curLevel.objects[i].deleted)
	    {
			curLevel.objects.splice(i,1);
	    }
	}
	setTimeout("CMgarbageCollection()",gcInt);
}

function CMprocessTurn(inKey)
{
	var collidesWith = new Array();
	var tempPlayer = $.extend(true, {}, this.cPlayer);
	var newImage;
	var newDirection;
	if (inKey == 37)
	{
		newDirection = WEST;
		newImage = "west";
		tempPlayer.x -= tempPlayer.velocity;
	}
	else if (inKey == 38)
	{
		newDirection = NORTH;
		newImage = "north";
		tempPlayer.y -= tempPlayer.velocity;
	}
	if (inKey == 39)
	{
		newDirection = EAST;
		newImage = "east";
		tempPlayer.x += tempPlayer.velocity;
	}
	if (inKey == 40)
	{
		newDirection = SOUTH;
		newImage = "south";
		tempPlayer.y += tempPlayer.velocity;
	}
	tempPlayer.direction = newDirection;
	collidesWith = CcheckCollision(this.cLevel,tempPlayer);
	canMove = !CcheckBoundary(this.cLevel,tempPlayer);
	if (canMove && collidesWith.length > 0)
	{
		for (j = 0; j < collidesWith.length; j++)
		{
			if (collidesWith[j].type == 1)
				canMove = false;
			for (i = 0; i < tempPlayer.collisionCalls.length; i++)
			{
				if (tempPlayer.collisionCalls[i].collidesWithType == collidesWith[j].type)
				{
					eval(tempPlayer.collisionCalls[i].functionName + "(this.cLevel,tempPlayer,collidesWith[j])");
				}
			}
		}
	}
	if (canMove)
	{
		this.cPlayer = tempPlayer;
		directionInt = CgetNewView(this.cLevel,this.cPlayer);
		this.cLevel.viewX += directionInt[0];
		this.cLevel.viewY += directionInt[1];
		if (this.cLevel.viewX <= 0)
			this.cLevel.viewX = 0;
		if (this.cLevel.viewX + this.cLevel.canvasWidth >= this.cLevel.width)
			this.cLevel.viewX = this.cLevel.width - this.cLevel.canvasWidth;
		if (this.cLevel.viewY <= 0)
			this.cLevel.viewY = 0;
		if (this.cLevel.viewY + this.cLevel.canvasHeight >= this.cLevel.height)
			this.cLevel.viewY = this.cLevel.height - this.cLevel.canvasHeight;
	}
	if (this.cPlayer.imageTitle == newImage)
	{
		this.cPlayer.imageFrame++;
		if (objectImages[this.cPlayer.imageName][this.cPlayer.imageTitle].length < (this.cPlayer.imageFrame+1))
			this.cPlayer.imageFrame = 0;
	}
	else
		this.cPlayer.imageFrame = 0;
	this.cPlayer.direction = newDirection;
	this.cPlayer.imageTitle = newImage;
	return [this.cLevel,this.cPlayer];
}

// moveRandomly exists here to get access to player and level
function CMmoveRandomly(inObj,timeout)
{
	var imgKey = "";
	collidesWith = new Array();
	if (inObj.type == 2)
		imgKey = "bug";
	else if (inObj.type == 3)
		imgKey = "glider";
	else if (inObj.type == 4)
		imgKey = "tank";
	else if (inObj.type == 5)
		imgKey = "teeth";
	var tempObject = $.extend(true, {}, inObj);
	randomMove = Math.floor((Math.random()*5));
	var newImage;
	if (randomMove == 1)
	{
		tempObject.x--;
		newImage = "west";
	}
	else if (randomMove == 2)
	{
		tempObject.y--;
		newImage = "north";
	}
	else if (randomMove == 3)
	{
		tempObject.x++;
		newImage = "east";
	}
	else if (randomMove == 4)
	{
		tempObject.y++;
		newImage = "south";
	}
	// check same collision against boundaries
	canMove = false;
	if (randomMove > 0)
		canMove = !CcheckBoundary(this.cLevel,tempObject);
	if (canMove)
		collidesWith = CcheckCollision(this.cLevel,tempObject);
	if (canMove && collidesWith.length == 0)
	{
		if (randomMove == 1)
			inObj.x--;
		else if (randomMove == 2)
			inObj.y--;
		else if (randomMove == 3)
			inObj.x++;
		else if (randomMove == 4)
			inObj.y++;
		inObj.imageTitle = newImage;
	}
	else if (collidesWith.length > 0)
	{
		for (j = 0; j < collidesWith.length; j++)
		{
			for (i = 0; i < inObj.collisionCalls.length; i++)
			{
				if (inObj.collisionCalls[i].collidesWithType == collidesWith[j].type)
				{
					eval(inObj.collisionCalls[i].functionName + "(this.cLevel,this.cPlayer,collidesWith[j])");
				}
			}
		}
	}
	setTimeout(function(){CMmoveRandomly(inObj,timeout);},timeout);
}