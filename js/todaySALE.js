//今日量贩换图
$(function(){
		$(".tmall-mart-right-today-a a:eq(0)").css({color:"white",background:"#00B262"});
		class Today{
			constructor(a){
				this.a1 = a.a1;
				this.a2 = a.a2;
				this.img = a.img;
				this.box = a.box;
				this.time = a.time;
				this.change();
				this.stop();
				this.leave();
			}
			change(){
				let index =-1;
				this.time = setInterval(()=>{
					index++;
					if(index==2){
						index=0;
					}
					if(index==0){
						this.a1.css({color:"white",background:"#00B262"});
						this.a2.css({color:"",background:""});
						this.img.attr({src:"tmall/TB19Ujcd3HqK1RjSZFkXXX.WFXa-400-400.jpg"});
						$("#today-sale-img-hidden").load("menuNav/todaySALE0.html");
					}
					if(index==1){
						this.a2.css({color:"white",background:"#00B262"});
						this.a1.css({color:"",background:""});
						this.img.attr({src:"tmall/TB1jNScP6TpK1RjSZKPXXa3UpXa-400-400.jpg"});
						$("#today-sale-img-hidden").load("menuNav/todaySALE1.html");
					}
				},1000)
			}
			stop(){
				this.img.mouseover(()=>{
					clearInterval(this.time);
				})
				
				let that = this;
				$(".tmall-mart-right-today-a a").mouseover(function(){
					clearInterval(that.time);
					$(".tmall-mart-right-today-a a").css({color:"",background:""});
					$(this).css({color:"white",background:"#00B262"});
					if($(this).index()==0){
						that.img.attr({src:"tmall/TB19Ujcd3HqK1RjSZFkXXX.WFXa-400-400.jpg"})
					}
					else if($(this).index()==1){
						that.img.attr({src:"tmall/TB1jNScP6TpK1RjSZKPXXa3UpXa-400-400.jpg"})
					}
				})
			}
			
			leave(){
				this.box.mouseleave(()=>{
					this.change();	
				})
			}
		}
		let a = {
			time: null,
			a1 : $(".tmall-mart-right-today-a a:eq(0)"),
			a2 : $(".tmall-mart-right-today-a a:eq(1)"),
			img : $(".tmall-mart-right-today-img img"),
			box : $(".tmall-mart-right-today")
		}
		let t = new Today(a);
	})