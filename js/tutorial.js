var SCREEN_WIDTH = 1920,
    SCREEN_HEIGHT = 1080,
    BACKGROUND_COLOR = [255, 255, 255],
    innerContainer,
    container,
    tutorial,
    continueBtn;

init();

function init() {
    innerContainer = document.getElementById('tutorial_container');
    
    container = document.createElement('div');
    container.className = 'tutorial';
    innerContainer.appendChild(container);
    
    tutorial = document.createElement('img');
    tutorial.src = 'pleatsplease_slices/pleatsplease_bigscreen_creative_02tutorial.png';
    container.appendChild(tutorial);
    
    continueBtn = document.createElement('span');
    continueBtn.className = 'button continue';
    continueBtn.addEventListener('click', onContinue, false);
    container.appendChild(continueBtn);
}

function onContinue() {
    //window.location = 'start.php';
    jQuery('#start_container').addClass('active').css('height', '1080px').css('width', '1920px').css('top', '0px').css('left', '0px');
    jQuery('#tutorial_container').removeClass('active').css('height', '1080px').css('overflow', 'hidden').css('left', '-1920px');
}