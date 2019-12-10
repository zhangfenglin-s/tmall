	//获取点击按钮
	let cart = document.getElementsByClassName("addToCart")[0];
	let arr = [];
	if(JSON.parse(localStorage.getItem('data1'))){
		arr = JSON.parse(localStorage.getItem('data1'));
	}
	
	let CanAddToCartAttr0 = false;
	let CanAddToCartAttr1 = false;
	let CanAddToCartAttr2 = false;
	let CanAddToCartAttr3 = false;
	$(".tb-sku dl:eq(0) li").click(function(){
		CanAddToCartAttr0 = true;
	})
	$(".tb-sku dl:eq(1) li").click(function(){
		CanAddToCartAttr1 = true;
	})
	$(".tb-sku dl:eq(2) li").click(function(){
		CanAddToCartAttr2 = true;
	})
	$(".tb-sku dl:eq(3) li").click(function(){
		CanAddToCartAttr3 = true;
	})
	
	$(cart).click(function(){
		if(CanAddToCartAttr0&&CanAddToCartAttr1&&CanAddToCartAttr2&&CanAddToCartAttr3){
			let flag = false;
				//1.获取到背景图片img1，获取到的背景图有网址;
			//let imgSrc = ($(this).parents("#product-information-container").children(".tb-sku").children("dl").children("dd").children("ul:eq(1)").children("li").children(".bg").children(".right-mark:visible").parent().css("backgroundImage"));
					let img1 = $(".tb-sku dl:eq(1) .bg .right-mark:visible").parent().css("backgroundImage");
					let imgSrc = img1.slice(40,-2);
					// console.log(imgSrc);
					//2.获取商品标题
					let title = $(".tb-detail-hd h3 a").html();
					// console.log(title);
					//3.获取网络类型
					let attr1 = $(".tb-sku dl:eq(0) dt").html()+":"+$(".net-style li .right-mark:visible").prev().html();
					// console.log(attr1);
					// 4.获取机身颜色
					let attr2 = $(".tb-sku dl:eq(1) dt").html()+":"+$(".cellphone-body-color .bg .right-mark:visible").prev().html();
					// console.log(attr2);
					//5.套餐类型
					let attr3 = $(".tb-sku dl:eq(2) dt").html()+":"+$(".Official-standard .bg .right-mark:visible").prev().html();
					// console.log(attr3);
					//6.存储容量
					let attr4 = $(".tb-sku dl:eq(3) dt").html()+":"+$(".RamRom .bg .right-mark:visible").prev().html();
					// console.log(attr4);
					//7.获取数量
					let num = $("#count").val();
					// console.log(num);
					//8.获取价格
					let priceAttrP = $(".information-price span").html();
					let priceAttr6 = priceAttrP.slice(10,-1)+0;
					// console.log(priceAttr6);
					//9.存入总价
					let totalPrice = priceAttr6*num;
					// console.log(totalPrice);
					//10.获取Id；
					let productId = attr1+attr2+attr3+attr4;
					// console.log(productId);
					//存入数据
					
					let obj = {
						"imgSrc":imgSrc,
						"title":title,//2.获取商品标题
						"attr1":attr1,//3.获取网络类型
						"attr2":attr2,// 4.获取机身颜色
						"attr3":attr3,//5.套餐类型
						"attr4":attr4,//6.存储容量
						"num":num,//7.获取数量
						"price":priceAttr6, // 8.获取价格
						"totalPrice":totalPrice,//9.存入总价
						"productId":productId, //10.获取Id；
					}
					for(let x = 0;x<arr.length;x++){
						// 判断当前要存的这个条数据在整个数据存在与否
						if(arr[x].productId == productId){
							arr[x].num++;
							arr[x].totalPrice = arr[x].price*arr[x].num;
							flag = true;
						}
					}
					if(flag == false){
						arr.push(obj);
					}
					localStorage.setItem('data1', JSON.stringify(arr));
					console.log(arr);
					alert("已加入购物车，请点击上方购物车按钮查看");
		}else{
			alert("请选择完毕全部属性");
		}
	});
	
	
	
	//点击不同内存，显示不同价格
	$(".RamRom li:eq(0)").click(function(){
		$(".information-price span").html(`<em>¥</em>3999.00`)
	})
	$(".RamRom li:eq(1)").click(function(){
		$(".information-price span").html(`<em>¥</em>4299.00`)
	})
	
	//限购10件，最少一件。
	let i =1;
	$(".product-count-button span:eq(0)").click(function(){
		i = Number($("#count").val());
		$("#count").val(i+1);
		if(i==10){
			$("#count").val(10);
			alert("限购10件");
		}
	})
	$(".product-count-button span:eq(1)").click(function(){
		i = Number($("#count").val());
		$("#count").val(i-1);
		if(i==1){
			$("#count").val(1);
			alert("至少下单一件物品");
		}
	})
	
	
	