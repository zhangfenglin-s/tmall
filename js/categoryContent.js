	// 详细商品菜单
		$(function(){
			$("#left-nav ul li").mouseover(function(){
				let index = $(this).index("#left-nav ul li");
				$(".categoryContent").css({display:'block'});
				$(".block"+index).css({display:'block'});
	// 				其他变回来
				$("#left-nav li").css({background:"rgb(0,0,0,.55)",color:"white",fontWeight:100});
				$("#left-nav li i").removeClass("change");//裙子图标变色
				$("#left-nav li a").css({color:"white",fontWeight:100});//列表变色
	// 				// 选中变色
				$("#left-nav li:eq("+`${index}`+") i").addClass("change");//裙子图标变色
				
				if(index==0||index==3){
					$("#left-nav li").eq(index).css({background:"white",color:"#e54077",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#e54077",fontWeight:900});//列表变色
				}else if(index==1||index==5||index==9||index==11){
					$("#left-nav li").eq(index).css({background:"white",color:"#427def",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#427def",fontWeight:900});//列表变色
				}else if(index==2||index==4){
					$("#left-nav li").eq(index).css({background:"white",color:"#6347ed",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#6347ed",fontWeight:900});//列表变色
				}else if(index==6){
					$("#left-nav li").eq(index).css({background:"white",color:"#fa5c5c",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#fa5c5c",fontWeight:900});//列表变色
				}else if(index==7||index==8||index==12){
					$("#left-nav li").eq(index).css({background:"white",color:"#f7a831",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#f7a831",fontWeight:900});//列表变色
				}else if(index==10){
					$("#left-nav li").eq(index).css({background:"white",color:"#dd2727",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#dd2727",fontWeight:900});//列表变色
				}else if(index==13||index==15){
					$("#left-nav li").eq(index).css({background:"white",color:"#3bc7b0",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#3bc7b0",fontWeight:900});//列表变色
				}else if(index==14){
					$("#left-nav li").eq(index).css({background:"white",color:"#dd2727",fontWeight:900});
					$("#left-nav li:eq("+`${index}`+") a").css({color:"#dd2727",fontWeight:900});//列表变色
				}
				$(".categoryContent").load("menuNav/menuNav"+`${index}`+".html");
				
				$(".bottom-hidden").mouseleave(function(){
					$(".categoryContent").css({display:"none"});
					$("#left-nav li").eq(index).css({background:"rgb(0,0,0,.55)",color:"white",fontWeight:100});
					$("#left-nav li:eq("+`${index}`+") i").removeClass("change");//裙子图标变色
					$("#left-nav li:eq("+`${index}`+") a").css({color:"white",fontWeight:100});//列表变色
				})
				
				
				$(".categoryContent").mouseover(function(){
					$(".categoryContent-left-list-content a").each(function () {
						$(this).mouseover(function () {
							$(".categoryContent-left-list-content a").css({color:""});
								if(index==0||index==3){
									$(this).css({color:"#e54077"});
							}else if(index==1||index==5||index==9||index==11){
								$(this).css({color:"#427def"});
							}else if(index==2||index==4){
								$(this).css({color:"#6347ed"});
							}else if(index==6){
								$(this).css({color:"#fa5c5c"});
							}else if(index==7||index==8||index==12){
								$(this).css({color:"#f7a831"});
							}else if(index==10){
								$(this).css({color:"#dd2727"});
							}else if(index==13||index==15){
								$(this).css({color:"#3bc7b0"});
							}else if(index==14){
								$(this).css({color:"#dd2727"});
							}
							
						})
					})
				})
			});
				
				
		})
				
	