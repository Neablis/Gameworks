var objectImages = new Array();
var imagePrefix = "images/";
var imageObj = new Image();
var total = 0;
var totalLoaded = 0;
var loaded = false;
var imagesLocation = "images.php";
var countKey = "count";

function CloadImages()
{
	// get json
	// parse json and create objects
	// store array of objects to one object
	$("#progressbarContainer").dialog({modal:true});
	$("#progressbarContainer").show();
	$("#progressbarContainer").dialog("open");
	
	$.getJSON(imagesLocation, function(data) {
		$.each(data, function(key, val) {
			$.each(val, function(key2, val2) {
				$.each(val2, function(key3, val3)
				{
					total++;
				});
			});
		});
		checkLoad();
		$.each(data, function(key, val) {
			objectImages[key] = new Array();
			$.each(val, function(key2, val2) {
				var items = new Array();
				
				$.each(val2, function(key3, val3)
				{
					imageObj = new Image();
					imageObj.onload = function() {
				       totalLoaded++;
				    }
					imageObj.src = imagePrefix + key + "/" + key2 + "/" + val3;
					items.push(imageObj);
				});
				objectImages[key][key2] = items;
			});
		});
	});
}

function checkLoad()
{
    $("#progressbar").progressbar({ value: totalLoaded/total*100 });
	if (totalLoaded == total)
		loaded = true;
	if (!loaded)
		setTimeout("checkLoad();",50);
	else
	{
		$("#progressbarContainer").hide();
		$("#progressbarContainer").dialog("close");
		CCloadGame();
	}
}