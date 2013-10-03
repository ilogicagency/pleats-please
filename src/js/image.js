(function($, window) {
    function Image() {
    }

    Image.prototype = {
        artwork: null,
        save: function() {
            var screenshot = Canvas2Image.saveAsPNG(canvas, true);

            canvas.parentNode.appendChild(screenshot);
            screenshot.id = "canvasimage";
            imgData = $('#canvasimage').attr('src');
            canvas.parentNode.removeChild(screenshot);

            $.ajax({
                type: "POST",
                url: 'src/php/save.php',
                dataType: 'text',
                data: {
                    base64data: imgData,
                    userId: '1'
                }
            }).done(function(image) {
                this.artwork = document.createElement('img');
                this.artwork.src = 'assets/' + image;
                artworkImg.appendChild(this.artwork);
                jQuery('#artwork_container').addClass('active').css('height', '1080px').css('width', '1920px').css('top', '0px').css('left', '0px');
                jQuery('#studio_container').removeClass('active').css('height', '1080px').css('overflow', 'hidden').css('left', '-1920px');
            });
        }
    };

    window.Image = Image;
})(jQuery, window);