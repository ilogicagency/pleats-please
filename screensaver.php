<html lang="en">
	<head>
		<title>Pleats Please</title>
		<meta charset="utf-8"/>
		<meta name="description" content="Pleats Please Activation - Issey Miyake Art Studio"/>
		<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"/>
		<meta name="apple-mobile-web-app-capable" content="yes" />
		<link rel="stylesheet" href="styles.css" />
		<link rel="stylesheet" href="fonts/stylesheet.css" />
		<script type="text/javascript" src="src/js/jquery-1.10.2.min.js"></script>

		<style type="text/css">
			body{
				background: #000;
			}

			#register,
			#video-wrapper{
				position: absolute;
			}

			#register{
				z-index: 1;
			}

			#video-wrapper{
				z-index: 0;
			}
		</style>
	</head>
	<body>
		<img id="register" src="src/img/register.png" />
		<div id="video-wrapper">
			<video id="video" width="1920" height="1080" loop>
				<source src="src/vid/screensaver.mp4" type="video/mp4">
				Your browser does not support the video tag.
			</video>
		</div>
		<script type="text/javascript">
			(function($) {
				$(document).ready(function() {
					var screensaver = new Screensaver();

					$('body').on('mousemove', function() {
						if (!$('#register').is(':visible'))
							screensaver.reset();
					});
				});
			})(jQuery);

			(function($) {
				function Screensaver() {
					this.delay = 3000;
					this.timeout;
					this.__construct();
				}

				Screensaver.prototype = {
					__construct: function() {
						this.reset();
					},
					reset: function() {
						clearInterval(this.timeout);

						var video = document.getElementById("video");

						video.pause();

						$('#register').clearQueue().fadeIn(1000);
						$('#video-wrapper').clearQueue().fadeOut();

						this.timeout = setTimeout(function() {
							$('#register').clearQueue().fadeOut(1000);
							video.load();

							video.addEventListener('loadeddata', function() {
								$('#video-wrapper').clearQueue().fadeIn();
								video.play();
							}, false);

						}, this.delay);
					}
				};

				window.Screensaver = Screensaver;
			})(jQuery);
		</script>
	</body>
</html>

