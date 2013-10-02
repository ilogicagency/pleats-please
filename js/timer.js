function Timer()
{	
	this.init();
}

Timer.prototype = 
{
	countdownTimer: null,
	
	minute: null,
        colon: null,
	seconds: null,
	txt: null,
	
	init: function()
	{
		var option, space, separator, color_width = 48, color_height = 20;

		this.container = document.createElement("div");
		this.container.style.position = 'absolute';
                this.container.style.right = "50px";
		this.container.style.top = '11%';
                
                this.countdownTimer = document.createElement("div");
                this.countdownTimer.className = 'timer';
                
                this.minute = document.createElement("span");
                this.minute.className = 'minute';
                this.minute.innerHTML = '1';
                this.countdownTimer.appendChild(this.minute);
                
                this.colon = document.createElement("span");
                this.colon.className = 'colon';
                this.colon.innerHTML = ':';
                this.countdownTimer.appendChild(this.colon);
                
                this.seconds = document.createElement("span");
                this.seconds.className = 'seconds';
                this.seconds.innerHTML = '00';
                this.countdownTimer.appendChild(this.seconds);
                
                this.txt = document.createElement("span");
                this.txt.className = 'text';
                this.txt.innerHTML = 'SECONDS';
                
                this.container.appendChild(this.countdownTimer);
                this.container.appendChild(this.txt);
		
	}
}
