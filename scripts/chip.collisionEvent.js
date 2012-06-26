var cIds = 0;
function CollisionEvent(inCollidesWithType,inFunctionName)
{
	if (inCollidesWithType != undefined)
		this.collidesWithType = inCollidesWithType;
	else
		this.collidesWithType = "";
		
	if (inFunctionName != undefined)
		this.functionName = inFunctionName;
	else
		this.functionName = "";
	
	this.id = cIds;
	cIds++;
}