function Timer()
{
    this.init();
}

Timer.prototype =
        {
            container: null,
            countdownTimer: null,
            seconds: null,
            txt: null,
            startTimer: null,
            startBtn: null,
            beginTimer: null,
            init: function()
            {
                this.create();
                this.reset();
            },
            create: function() {
                this.container = document.createElement("div");
                this.container.className = 'timer_container'
                this.container.style.position = 'absolute';
//            this.container.style.right = "-176px";
                this.container.style.right = "64px";
                this.container.style.top = '87px';

                this.countdownTimer = document.createElement("div");
                this.countdownTimer.className = 'timer';

                this.seconds = document.createElement("span");
                this.seconds.className = 'seconds';
                this.countdownTimer.appendChild(this.seconds);

                this.txt = document.createElement("div");
                this.txt.className = 'text';
                this.txt.innerHTML = 'SECONDS';

                this.startTimer = document.createElement('div');
                this.startTimer.className = 'start';

                this.startBtn = document.createElement('span');
                this.startBtn.className = 'button start';
                this.startBtn.innerHTML = "Start";
                //this.startTimer.appendChild(this.startBtn);

                this.container.appendChild(this.countdownTimer);
                this.container.appendChild(this.txt);
                this.container.appendChild(document.createElement('br'));
                //this.container.appendChild(this.startTimer);
            },
            reset: function() {
                this.killTimer();
                this.seconds.innerHTML = '60';
            },
            killTimer: function() {
                clearInterval(this.beginTimer);
            },
            countdown: function() {
                this.beginTimer = setInterval(function() {
                    if (timer.seconds.innerHTML > '-1') {
                        timer.seconds.innerHTML = timer.seconds.innerHTML - 1;
                        if (parseInt(timer.seconds.innerHTML) < 10) {
                            timer.seconds.innerHTML = '0' + timer.seconds.innerHTML;
                        }
                    }

                    if (timer.seconds.innerHTML === '00') {
                        clearInterval(timer.beginTimer);
                        var imgCreator = new ImageCreator();
                        //window.location = 'artwork.php';
//                    jQuery('#artwork_container').addClass('active').css('height', '1080px').css('width', '1920px').css('top', '0px').css('left', '0px');
//                    jQuery('#studio_container').removeClass('active').css('height', '1080px').css('overflow', 'hidden').css('left', '-1920px');
                        //onMenuExportImage();
                    }
                }, 1000);
            }
        };

function ImageCreator() {
    this.init();
}

ImageCreator.prototype = {
    init: function() {
        var img = new Image();
        img.save();
    }
};
