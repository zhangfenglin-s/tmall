	// load头和尾部
	$(".top-nav").load("menuNav/topNAV.html")
	$(function() {
		$("#title1").mouseover(function() {
			$(".floater").stop().animate({
				left: "35px"
			}, 1000);
		})
		$("#title2").mouseover(function() {
			$(".floater").stop().animate({
				left: "250px"
			}, 1000);
		})
		$("#title3").mouseover(function() {
			$(".floater").stop().animate({
				left: "441px"
			}, 1000);
		})
	})
	$("#footer").load("menuNav/footer.html")
	
	
	// 购物车部分
	class Cart {
		constructor() {
			this.render();
			
		}
		render(){
			// 获取localStorage
			let ProductData = JSON.parse(localStorage.getItem('data1'));
			let allproduct = document.getElementsByClassName("all-product")[0];
			let noproduct = document.getElementsByClassName("no-product")[0];
			console.log(ProductData);
			console.log(allproduct);

			// 获取存放商品的大盒子
			if (ProductData == null) { // 没存进来值
				noproduct.style.display = 'block';
				allproduct.style.display = 'none';
			} else {
				noproduct.style.display = 'none';
				allproduct.style.display = 'block';
				// 循环每一条数据 有几条数据 创建几个小盒子

				for (var i = 0; i < ProductData.length; i++) {
					// 将小盒子添加到大盒子中 修改数据
					allproduct.innerHTML +=
						`
				<div class="product-item-one-info-all-content">
						<div class="shop-info">
							<div class="cart-checkbox">
								<input id="J_CheckShop_s" type="checkbox">
								<span class="icon-B"></span>
								店铺：<a href="####" target="_blank" title="华为官方旗舰店">
									华为官方旗舰店
								</a>
								<span></span>
							</div>
						</div>
						<div class="product-item-content">
							<ul>
								<li>
									<input type="checkbox">
								</li>
								<li class="img-loaded">
									<a href="####"><img src="${ProductData[i].imgSrc}" alt=""></a>
								</li>
								<li class="item-basic-info">
									<a href="####">${ProductData[i].title}</a>
									<div class="small-photo">
										<a href="####"><img src="tmall/product/xcard.png"></a>
										<a href="####"><img src="tmall/product/T1Vyl6FCBlXXaSQP_X-16-16.png" alt=""></a>
										<a href="####"><img src="tmall/product/T1BCidFrNlXXaSQP_X-16-16.png" alt=""></a>
									</div>
								</li>
								<li class="item-props-can">
									<span class="sku-line-opacity0">${ProductData[i].attr1}${ProductData[i].attr2}${ProductData[i].attr3}${ProductData[i].attr4}</span>
								
									<p class="sku-line">${ProductData[i].attr1}</p>
									<p class="sku-line">${ProductData[i].attr2}</p>
									<p class="sku-line">${ProductData[i].attr3}</p>
									<p class="sku-line">${ProductData[i].attr4}</p>
								</li>
								<li class="price">
									<em>￥</em><span class="price-now">${ProductData[i].price}</span>
								</li>
								<li class="td-amount">
									<a href="####" class="no-minus">-</a>
									<input type="text" value="${ProductData[i].num}" class="J-ItemAmount">
									<a href="####" class="plus">+</a>
								</li>
								<li class="td-sum">
									<em tabindex="0">￥</em><span class="J-ItemSum-number">${ProductData[i].totalPrice}</span>
								</li>
								<li class="td-op">
									<a class="J_Del">删除</a>
								</li>
							</ul>
						</div>
					</div>`
				}<!-- for -->
			}<!-- else -->
			this.getTotalPrice();
			this.getTotalNum();
		}<!-- render -->
		// 改变存储数据
			changeNumStorage(value, productId) {
				// 获取localStorage
				let ProductData = JSON.parse(localStorage.getItem('data1'));
				// 循环取出每一条数据
				for (var i = 0; i < ProductData.length; i++) {
					console.log(productId);
					// 根据当前点击按钮的数据对应的id和所有的数据进行比对
					if (ProductData[i].productId == productId) { // 有相等的
						ProductData[i].num = value; // 改变这条数据对应的数量
						ProductData[i].totalPrice = ProductData[i].price * ProductData[i].num; // 以及总价
					}
				}
				// 重新存
				localStorage.setItem('data1', JSON.stringify(ProductData));
				console.log(ProductData);
			}
			// 改变总数量
			getTotalNum() {
				let nums = document.getElementsByClassName('J-ItemAmount');
				let totalNum = document.getElementById('goods-total-nums');
				let sum = 0;
				for (let i = 0; i < nums.length; i++) {
					sum += +nums[i].value;
				}
				totalNum.innerHTML = sum;
			}
			// 改变总价格
			getTotalPrice() {
				let price = document.getElementsByClassName('J-ItemSum-number');
				let totalPrice = document.getElementsByClassName('get-sum-span')[0];
				let sum = 0;
				for (let i = 0; i < price.length; i++) {
					sum += +price[i].innerHTML;
				}
				totalPrice.innerHTML = sum;
			}
			// 增加数量
			addGoodsNum(btn) {
				let num = btn.previousElementSibling;
				let productId = btn.parentNode.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
				
				
				num.value = Number(num.value) + 1;
				this.getXiaoji(btn, num.value);
				this.getTotalNum();
				this.getTotalPrice();
				// 增加数量的去增加productId对应的那条数据的数量
				this.changeNumStorage(num.value, productId);
			}
			// 减少数量
			reduceGoodsNum(btn) {
				let num = btn.nextElementSibling;
				let productId = btn.parentNode.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
				if (num.value <= 1) {
					alert('至少选择一个物品')
				} else {
					num.value = Number(num.value) - 1;
					this.getXiaoji(btn,num.value);
					this.getTotalNum();
					this.getTotalPrice();
					// 减少数量的去减少productId对应的那条数据的数量
					this.changeNumStorage(num.value, productId);
				}
			}
			// 删除货物
			deleteGoods(btn) {
				let tr = btn.parentNode.parentNode.parentNode.parentNode;
				let productId = btn.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerHTML;
				tr.remove();
				this.getTotalNum();
				this.getTotalPrice();
				// 取出所有的数据
				let ProductData = JSON.parse(localStorage.getItem('data1'));
				for (var i = 0; i < ProductData.length; i++) {
					// 根据删除的当前这条数的id和数据库进行比对
					if (ProductData[i].productId == productId) { // 找到后
						// localStorage.removeItem();
						ProductData.splice(i,1); // 从整个数据中删除中条数据
					}
				}
				// 重新存
				localStorage.setItem('data1', JSON.stringify(ProductData));
			}
			// 获取小计
			getXiaoji(btn, num) {
				// 单价
				let price = btn.parentNode.previousElementSibling.lastElementChild.innerHTML;
				// 小计
				let xiaoji = btn.parentNode.nextElementSibling.lastElementChild;
				// 小计的值
				xiaoji.innerHTML = price * num;
			}
			bindEvent() {
				let that = this;
		
				// 增加按钮
				let addBtn = document.getElementsByClassName('plus');
				for (let i = 0; i < addBtn.length; i++) {
					addBtn[i].onclick = function () {
						// this=》加号 
						that.addGoodsNum(this);
					}
				}
				// 减少数量 
				let reduceBtn = document.getElementsByClassName('no-minus');
				for (let i = 0; i < reduceBtn.length; i++) {
					reduceBtn[i].onclick = function () {
						that.reduceGoodsNum(this); // 删除 } }
					}
				}
				// 删除按钮
				let deleteBtn = document.getElementsByClassName('J_Del');
				for (let i = 0; i < deleteBtn.length; i++) {
					deleteBtn[i].onclick = function () {
						that.deleteGoods(this);
					}
				}
			}
		}
		<!-- Cart -->

	let c = new Cart();
	c.bindEvent();
	
// 	changenum(){
// 		// 将所有商品总和在上方展示
// 		let sum = 0;
// 		let allproduct = document.getElementById("title1");
// 		let ItemAmount = document.getElementsByClassName("J-ItemAmount");
// 		for(let i=0;i<ItemAmount.length;i++){
// 			sum += Number(ItemAmount[i].value);
// 		}
// 		let allP = allproduct.lastElementChild;
// 		allP.innerHTML = sum;
// 		
// 		
// 		let add = document.getElementsByClassName("plus");
// 		for(let a = 0;a<add.length;a++){
// 			add[a].onclick = function(){
// 				this.previousElementSibling.value = Number(this.previousElementSibling.value)+1;
// 			}
// 		}
// 	}

