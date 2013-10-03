<?php

?>

<html lang="en">
	<head>
		<title>Pleats Please</title>
		<meta charset="utf-8"/>
		<meta name="description" content="Pleats Please Activation - Issey Miyake Art Studio"/>
		<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<link rel="stylesheet" href="styles.css" />
                <link rel="stylesheet" href="fonts/stylesheet.css" />
                <script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	</head>
	<body>
            <div class="inner_container active" id="tutorial_container">
                <script type="text/javascript" src="js/tutorial.js"></script>
            </div>
            <div class="inner_container" id="start_container" style="left:-1920px; height:1080px; overflow:hidden;">
                <?php include('start.php'); ?>
            </div>
            <div class="inner_container" id="studio_container" style="left:-1920px; height:1080px; overflow:hidden;">
                <?php include('studio.php'); ?>
            </div>
            <div class="inner_container" id="artwork_container" style="left:-1920px; height:1080px; overflow:hidden;">
                <?php include('artwork.php'); ?>
            </div>
	</body>
</html>
