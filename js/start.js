var SCREEN_WIDTH = 1920,
    SCREEN_HEIGHT = 1080,
    BACKGROUND_COLOR = [255, 255, 255],
    innerContainer,
    container,
    start,
    startBtn;

init();

function init() {
    innerContainer = document.getElementById('start_container');
    
    container = document.createElement('div');
    container.className = 'start';
    innerContainer.appendChild(container);
    
    start = document.createElement('img');
    start.src = 'pleatsplease_slices/pleatsplease_bigscreen_creative_popup.png';
    container.appendChild(start);
    
    startBtn = document.createElement('span');
    startBtn.className = 'button start';
    startBtn.addEventListener('click', onStart, false);
    container.appendChild(startBtn);
}

function onStart() {
    //window.location = 'studio.php';
    timer.reset();
    timer.countdown();
    onMenuClear();
    jQuery('#studio_container').addClass('active').css('height', '1080px').css('width', '1920px').css('top', '0px').css('left', '0px');
    jQuery('#start_container').removeClass('active').css('height', '1080px').css('overflow', 'hidden').css('left', '-1920px');
}