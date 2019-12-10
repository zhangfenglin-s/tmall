class Magnifier{
		constructor(newSmallBox,newMask,newBigBox){
			this.small = newSmallBox;
			this.mask = newMask
			this.big = newBigBox;
		}
		move(){
			let that = this;
			this.small.onmouseover = function(){
				that.mask.style.display = "block";
				that.big.style.display = "block";
			}
			this.small.onmousemove = function(evt){
				let e = evt ||event;
				let left = e.pageX - that.small.offsetLeft - that.mask.offsetWidth/2;
				let top = e.pageY - that.small.offsetTop - that.mask.offsetHeight/2;
				if(left < 0){
					left = 0;
				}
				if(top < 0){
					top = 0;
				}
				let maxleft = that.small.offsetWidth - that.mask.offsetWidth;
				let maxtop = that.small.offsetHeight - that.mask.offsetHeight;
				
				if(left > maxleft){
					left = maxleft;
				}
				if(top > maxtop){
					top = maxtop;
				}
				
				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";
				
				let x = left * (that.big.offsetWidth/that.mask.offsetWidth);
				let y = top * (that.big.offsetHeight/that.mask.offsetHeight);
				
				that.big.style.backgroundPositionX = -x+"px";
				that.big.style.backgroundPositionY = -y+"px";
				
				
			}
			this.small.onmouseout = function(){
				that.mask.style.display = "none";
				that.big.style.display = "none";
			}
		}
		
	}