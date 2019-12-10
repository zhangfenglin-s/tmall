$(function(){
	class Banner {
			constructor(obj) {
				this.box = obj.box;
				this.oLi = obj.oLi;
				this.time = obj.time;
				this.index = $(".banner").length-1;
				this.li = 0;
				this.autoPlay();
				this.bindEvent();
				
			}
			// 自动播放
			autoPlay() {
				clearInterval(this.time);
				this.time = setInterval(() => {
					this.index--;
					this.li++;
					if (this.index == -1 && this.li == $(".banner").length) {
						this.index = $(".banner").length-1;
						this.li = 0;
					}
					this.changeImg(this.index,this.li);
				}, 1000)
				
			}
			// 事件
			bindEvent() {
				let that = this;
				this.oLi.mouseover(function(){
					clearInterval(that.time);
					that.changeImg($(".banner").length-1-$(this).index(),$(this).index())
				})
				
				this.box.mouseenter(()=>{
					clearInterval(this.time);
				})
				this.box.mouseleave(()=>{
					this.autoPlay();
				})
			}
			changeImg(index,li) {
				if(li==0){
					this.box.eq(index).load("menuNav/bannerFloat0.html");
				}else if(li==2){
					this.box.eq(index).load("menuNav/bannerFloat2.html");
				}else if(li==4){
					this.box.eq(index).load("menuNav/bannerFloat4.html");
				}
				this.box.eq(index).fadeIn().siblings().fadeOut();
				this.oLi.css({backgroundColor: "#000",opacity:".3"});
				this.oLi.eq(li).css({backgroundColor: "white",opacity:".3"});
				
			}
			
			
		}
		
		$(".banner-a-label-button li").eq(0).css({backgroundColor:"white"});
		let obj = {
			box: $('.banner'),
			oLi: $('.banner-a-label-button li'),
			time: null
		}
		let b = new Banner(obj);
})
