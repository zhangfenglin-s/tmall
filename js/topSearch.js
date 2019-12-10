$(function(){
	$("#search-top-content").css({display:"none",position:"fixed"})
	window.onscroll = function(){
			if($(window).scrollTop()>570){
				$("#search-top-content").css({display:"block",position:"fixed"})
			}else if($(window).scrollTop()<570){
				$("#search-top-content").css({display:"none",position:""})
			}
		}
})
