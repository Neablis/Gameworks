function Level(){
	this.id = 0;
	this.squareSizeX = 0;
	this.squareSizeY = 0;
	this.width = 0;
	this.height = 0;
	this.canScrollWidth = false;
	this.canScrollHeight = false;
	this.scrollAtWidth = 0;
	this.scrollAtHeight = 0;
	this.canvasWidth = 0;
	this.canvasHeight = 0;
	this.viewX = 0;
	this.viewY = 0;
	this.objects = new Array();
}

function loadLevel(inLevel)
{
	returnArray = new Array();
	if (inLevel.id == 1)
	{
		inLevel.width = 50;
		inLevel.height = 50;
		inLevel.squareSizeX = 32;
		inLevel.squareSizeY = 32;
		inLevel.canvasWidth = 24;
		inLevel.canvasHeight = 12;
		inLevel.viewX = 3;
		inLevel.viewY = 2;
		inLevel.canScrollWidth = true;
		inLevel.scrollAtWidth = 70;
		inLevel.canScrollHeight = true;
		inLevel.scrollAtHeight = 70;
		playerObj = new CObj("link","south",11,5,1,-2,1,1,0.25,SOUTH);
		colTestObj = new CObj("bug","south",11,6,1,2);
		inLevel.objects.push(colTestObj);
		
		triangleObj = new CObj("bug","south",0,0,1,2);
		CMmoveRandomly(triangleObj,500);
		inLevel.objects.push(triangleObj);
		triangleObj = new CObj("bug","south",23,0,1,2);
		CMmoveRandomly(triangleObj,1000);
		inLevel.objects.push(triangleObj);
		triangleObj = new CObj("bug","south",23,11,1,2);
		CMmoveRandomly(triangleObj,2000);
		inLevel.objects.push(triangleObj);
		triangleObj = new CObj("bug","south",0,11,1,2);
		CMmoveRandomly(triangleObj,250);
		inLevel.objects.push(triangleObj);
		
		
		triangleObj = new CObj("glider","south",10,0,1,3);
		CMmoveRandomly(triangleObj,500);
		
		inLevel.objects.push(triangleObj);
		triangleObj = new CObj("tank","south",11,0,1,4);
		CMmoveRandomly(triangleObj,3000);
		inLevel.objects.push(triangleObj);
		triangleObj = new CObj("teeth","south",12,0,1,5);
		CMmoveRandomly(triangleObj,3000);
		inLevel.objects.push(triangleObj);
		
		// create test walls
		wallObj = new CObj("wall","wall",0,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",1,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",2,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",3,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",4,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",7,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",8,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",9,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",10,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",12,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",13,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",14,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",15,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",18,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",19,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",20,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",21,3,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",22,3,1,1);
		inLevel.objects.push(wallObj);
		
		wallObj = new CObj("wall","wall",2,4,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",7,4,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",12,4,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",20,4,1,1);
		inLevel.objects.push(wallObj);
		
		wallObj = new CObj("wall","wall",2,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",7,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",8,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",9,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",10,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",12,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",13,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",14,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",15,5,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",20,5,1,1);
		inLevel.objects.push(wallObj);
		
		wallObj = new CObj("wall","wall",2,6,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",7,6,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",15,6,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",20,6,1,1);
		inLevel.objects.push(wallObj);
		
		wallObj = new CObj("wall","wall",2,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",7,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",8,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",9,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",10,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",12,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",13,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",14,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",15,7,1,1);
		inLevel.objects.push(wallObj);
		wallObj = new CObj("wall","wall",20,7,1,1);
		inLevel.objects.push(wallObj);
		
		wallObj = new CObj("curve-4","ice",30,30,1,1,2,2);
		inLevel.objects.push(wallObj);
		
		wallObj = new CObj("brick","brick",4,9,1,1,2,2);
		inLevel.objects.push(wallObj);
		
		inLevel.objects.push(new CObj("coin","coin",22,28,1,5,0.75,1));
		inLevel.objects.push(new CObj("coin","coin",25,28,1,5,0.75,1));
		inLevel.objects.push(new CObj("coin","coin",28,28,1,5,0.75,1));
		inLevel.objects.push(new CObj("coin","coin",31,28,1,5,0.75,1));
		
		inLevel.objects.push(new CObj("backgrounds","zelda_forest",0,0,0,0,50,50));
		
		for (i = 0; i < inLevel.width; i+=8)
		{
			for (j = 0; j < inLevel.height; j+=8)
			{
				randSize = Math.floor((Math.random()*5)+1);
				wallObj = new CObj("brick","brick",i,j,1,1,randSize,randSize);
				inLevel.objects.push(wallObj);
			}
		}
		playerHitCoin = new CollisionEvent(5,"hitCoin");
		playerObj.collisionCalls.push(playerHitCoin);
		playerHitEnemy = new CollisionEvent(2,"hitEnemy");
		playerObj.collisionCalls.push(playerHitEnemy);
		returnArray.push(inLevel);
		returnArray.push(playerObj);
	}
	return returnArray;
}

function hitCoin(inLevel,inThisObject,inObject)
{
	inObject.deleted = true;
}

function hitEnemy(inLevel,inThisObject,inObject)
{
	if (inThisObject.direction == NORTH)
	{
		inObject.y -= inThisObject.velocity;
	}
	else if (inThisObject.direction == EAST)
	{
		inObject.x += inThisObject.velocity;
	}
	else if (inThisObject.direction == SOUTH)
	{
		inObject.y += inThisObject.velocity;
	}
	else if (inThisObject.direction == WEST)
	{
		inObject.x -= inThisObject.velocity;
	}
}

function CgetNewView(inLevel,inObject)
{
	directionX = 0;
	directionY = 0;
	if (inLevel.canScrollWidth)
	{
		centerX = (inLevel.viewX + (inLevel.canvasWidth / 2));
		distanceX = (centerX - (inObject.width/2 + inObject.x)) / (inLevel.canvasWidth / 2);
		if (Math.abs(distanceX * 100) > inLevel.scrollAtWidth)
		{
			if (distanceX > 0)
				directionX = -inObject.velocity;
			else
				directionX = inObject.velocity;
		}
	}
	if (inLevel.canScrollHeight)
	{
		centerY = (inLevel.viewY + (inLevel.canvasHeight / 2));
		distanceY = (centerY - (inObject.height/2 + inObject.y)) / (inLevel.canvasHeight / 2);
		if (Math.abs(distanceY * 100) > inLevel.scrollAtHeight)
		{
			if (distanceY > 0)
				directionY = -inObject.velocity;
			else
				directionY = inObject.velocity;
		}
	}
	return [directionX,directionY];
}

function CcheckBoundary(inLevel,inObject)
{
	collides = false;
	if (inObject.x + inObject.width > inLevel.width
		|| inObject.x < 0
		|| inObject.y + inObject.height > inLevel.height
		|| inObject.y < 0)
		
	{
		collides = true;
		return collides;
	}
	return collides;
}

function CcheckCollision(inLevel,inObj)
{
	collides = false;
	collidesArray = new Array();
	for (x = 0; x < inLevel.objects.length; x++)
	{
		if (
			(
			(
			(inLevel.objects[x].x > inObj.x
			&& inLevel.objects[x].y > inObj.y
			&& inLevel.objects[x].x < inObj.x + inObj.width
			&& inLevel.objects[x].y < inObj.y + inObj.height)
			||
			(inLevel.objects[x].x + inLevel.objects[x].width < inObj.x + inObj.width
			&& inLevel.objects[x].y > inObj.y
			&& inLevel.objects[x].x + inLevel.objects[x].width > inObj.x
			&& inLevel.objects[x].y < inObj.y + inObj.height)
			||
			(inLevel.objects[x].x + inLevel.objects[x].width < inObj.x + inObj.width
			&& inLevel.objects[x].y + inLevel.objects[x].height < inObj.y + inObj.height
			&& inLevel.objects[x].x + inLevel.objects[x].width > inObj.x
			&& inLevel.objects[x].y + inLevel.objects[x].height > inObj.y)
			||
			(inLevel.objects[x].x > inObj.x
			&& inLevel.objects[x].y + inLevel.objects[x].height > inObj.y
			&& inLevel.objects[x].x < inObj.x + inObj.width
			&& inLevel.objects[x].y + inLevel.objects[x].height < inObj.y + inObj.height)
			||
			(inLevel.objects[x].x > inObj.x
			&& inLevel.objects[x].y == inObj.y
			&& inLevel.objects[x].x < inObj.x + inObj.width
			&& inLevel.objects[x].y + inLevel.objects[x].height == inObj.y + inObj.height)
			||
			(inLevel.objects[x].x == inObj.x
			&& inLevel.objects[x].y > inObj.y
			&& inLevel.objects[x].x + inLevel.objects[x].width == inObj.x + inObj.width
			&& inLevel.objects[x].y < inObj.y + inObj.height)
			||
			(inLevel.objects[x].x + inLevel.objects[x].width < inObj.x + inObj.width
			&& inLevel.objects[x].y + inLevel.objects[x].height == inObj.y + inObj.height
			&& inLevel.objects[x].x + inLevel.objects[x].width > inObj.x
			&& inLevel.objects[x].y == inObj.y)
			||
			(inLevel.objects[x].x == inObj.x
			&& inLevel.objects[x].y + inLevel.objects[x].height > inObj.y
			&& inLevel.objects[x].x + inLevel.objects[x].width == inObj.x + inObj.width
			&& inLevel.objects[x].y + inLevel.objects[x].height < inObj.y + inObj.height)
			||
			(inLevel.objects[x].x == inObj.x
			&& inLevel.objects[x].y == inObj.y
			&& inLevel.objects[x].x + inLevel.objects[x].width == inObj.x + inObj.width
			&& inLevel.objects[x].y + inLevel.objects[x].height == inObj.y + inObj.height)
			)
			||
			(
			(inObj.x > inLevel.objects[x].x
			&& inObj.y > inLevel.objects[x].y
			&& inObj.x < inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y < inLevel.objects[x].y + inLevel.objects[x].height)
			||
			(inObj.x + inObj.width < inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y > inLevel.objects[x].y
			&& inObj.x + inObj.width > inLevel.objects[x].x
			&& inObj.y < inLevel.objects[x].y + inLevel.objects[x].height)
			||
			(inObj.x + inObj.width < inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y + inObj.height < inLevel.objects[x].y + inLevel.objects[x].height
			&& inObj.x + inObj.width > inLevel.objects[x].x
			&& inObj.y + inObj.height > inLevel.objects[x].y)
			||
			(inObj.x > inLevel.objects[x].x
			&& inObj.y + inObj.height > inLevel.objects[x].y
			&& inObj.x < inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y + inObj.height < inLevel.objects[x].y + inLevel.objects[x].height)
			||
			(inObj.x > inLevel.objects[x].x
			&& inObj.y == inLevel.objects[x].y
			&& inObj.x < inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y + inObj.height == inLevel.objects[x].y + inLevel.objects[x].height)
			||
			(inObj.x + inObj.width == inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y > inLevel.objects[x].y
			&& inObj.x == inLevel.objects[x].x
			&& inObj.y < inLevel.objects[x].y + inLevel.objects[x].height)
			||
			(inObj.x + inObj.width < inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y + inObj.height == inLevel.objects[x].y + inLevel.objects[x].height
			&& inObj.x + inObj.width > inLevel.objects[x].x
			&& inObj.y == inLevel.objects[x].y)
			||
			(inObj.x == inLevel.objects[x].x
			&& inObj.y > inLevel.objects[x].y
			&& inObj.x == inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y + inObj.height < inLevel.objects[x].y + inLevel.objects[x].height)
			||
			(inObj.x == inLevel.objects[x].x
			&& inObj.y == inLevel.objects[x].y
			&& inObj.x == inLevel.objects[x].x + inLevel.objects[x].width
			&& inObj.y + inObj.height == inLevel.objects[x].y + inLevel.objects[x].height)
			)
			)
			&& inLevel.objects[x].type != 0)
		{
			collides = true;
			collidesArray.push(inLevel.objects[x]);
		}
	}
	return collidesArray;
}