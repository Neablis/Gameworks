var ids = 0;
function CObj(inImageName,inImageStartTitle,inX,inY,inZ,inType,inWidth,inHeight,inVelocity,inDirection)
{
	if (inImageName != undefined)
		this.imageName = inImageName;
	else
		this.imageName = "";
		
	if (inImageStartTitle != undefined)
		this.imageTitle = inImageStartTitle;
	else
		this.imageTitle = "";
		
	if (inX != undefined)
		this.x = inX;
	else
		this.x = 0;
	
	if (inY != undefined)
		this.y = inY;
	else
		this.y = 0;
	
	if (inZ != undefined)
		this.z = inZ;
	else
		this.z = 0;
	
	if (inType != undefined)
		this.type = inType;
	else
		this.type = 0;
	
	if (inWidth != undefined)
		this.width = inWidth;
	else
		this.width = 1;
	
	if (inHeight != undefined)
		this.height = inHeight;
	else
		this.height = 1;
	
	if (inVelocity != undefined)
		this.velocity = inVelocity;
	else
		this.velocity = 1;
	
	if (inDirection != undefined)
		this.direction = inDirection;
	else
		this.direction = SOUTH;
	
	this.imageFrame = 0;
	
	this.collisionCalls = new Array();
	
	this.deleted = false;
	
	this.id = ids;
	ids++;
}