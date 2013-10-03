var SCREEN_WIDTH = 1920,
    SCREEN_HEIGHT = 1080,
    BACKGROUND_COLOR = [255, 255, 255],
    innerContainer,
    container,
    artwork,
    artworkImg,
    postBtn,
    retryBtn;

init();

function init() {
    innerContainer = document.getElementById('artwork_container');
    
    container = document.createElement('div');
    container.className = 'artwork';
    innerContainer.appendChild(container);
    
    artwork = document.createElement('img');
    artwork.src = 'pleatsplease_slices/pleatsplease_bigscreen_creative_05preview.png';
    container.appendChild(artwork);
    
    artworkImg = document.createElement('div');
    artworkImg.className = 'artwork_img';
    container.appendChild(artworkImg);
    
    postBtn = document.createElement('span');
    postBtn.className = 'button post';
    postBtn.addEventListener('click', onPost, false);
    container.appendChild(postBtn);
    
    retryBtn = document.createElement('span');
    retryBtn.className = 'button retry';
    retryBtn.addEventListener('click', onRetry, false);
    container.appendChild(retryBtn);
}

function onPost() {
    //window.location = 'studio.php';
}

function onRetry() {
    //window.location = 'start.php';
    jQuery('#start_container').addClass('active').css('height', '1080px').css('width', '1920px').css('top', '0px').css('left', '0px');
    jQuery('#artwork_container').removeClass('active').css('height', '1080px').css('overflow', 'hidden').css('left', '-1920px');
}