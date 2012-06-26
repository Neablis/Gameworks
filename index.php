<!DOCTYPE html>
<HTML>
<HEAD>
<TITLE>Gamework</TITLE>
<script type="text/javascript" src="scripts/jq.js"></script>
<script type="text/javascript" src="scripts/chip.constants.js"></script>
<script type="text/javascript" src="scripts/chip.images.js"></script>
<script type="text/javascript" src="scripts/chip.objects.js"></script>
<script type="text/javascript" src="scripts/chip.levels.js"></script>
<script type="text/javascript" src="scripts/chip.model.js"></script>
<script type="text/javascript" src="scripts/chip.view.js"></script>
<script type="text/javascript" src="scripts/chip.controller.js"></script>
<script type="text/javascript" src="scripts/chip.collisionEvent.js"></script>
<link rel="stylesheet" type="text/css" href="styles/style.css" />
<link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/base/jquery-ui.css" rel="stylesheet" type="text/css"/>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script>
</HEAD>
<body onload="CloadImages();">
<div id="progressbarContainer" class="progressContainer">
	<div id="progressbar"></div>
</div>
<div id="wrapper" class="wrapper">
	<div id="game" class="game">
		<canvas id="gameCanvas">
		</canvas>
	</div>
</div>
</body>
</HTML>