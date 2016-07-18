$(document).ready(function() {
	addPhoto();
	console.log(data);
});

var data  = data;
//翻转函数
function turn (elem) {
	//var element = $(strs);
	//console.log(elem);
	var str = $(elem).attr("class");
	var id = $(elem).attr("id");
	var n = id.split("_");
	if(!(/photo_center/).test(str)){
		return rsort(n[1]);
	}else{
		if(str.match(/front/)){
			str  = str.replace(/front/,"back");
			//alert(1);
		}else{
			str = str.replace(/back/,"front");
		}
	}
	return $(elem).attr('class', str);
}
//排序函数
function rsort(n) {
	var elem = $("#test_"+n);
	var elems = $(".photo");
	var elems_left = [];
	var elems_right = [];
	var X = parseInt(elem.css("left")+elem.width()/2);
	console.log(typeof elem.width()/2);
	var Y = parseInt(elem.css('top')+elem.height()/2);
	var R = parseInt($(window).width())*0.4;
	var r = parseInt($(window).width())*0.2;
	var y = parseInt($(".gallery").height());
	console.log(typeof y);

	var left_num = Math.ceil((elems.length-1)/2);
	for (var i = 0; i < left_num; i++) {
		if(i!=n){
			elems_left.push(elems[i]);
		}
	}
	console.log(elems_left);
	for (var i = left_num; i < elems.length; i++) {
		if(i!=n){
			elems_right.push(elems[i]);
		}
	}
	for (var i = 0; i < elems_left.length; i++) {
		$(elems_left[i]).removeClass('photo_center');
		var y_left_top = random(0,y);
		console.log(y_left_top);
		var x_left_left = random(X-Math.ceil(Math.sqrt(R*R-(y_left_top-Y)*(y_left_top-Y))),
			X-Math.ceil(Math.sqrt(r*r-(y_left_top-Y)*(y_left_top-Y))));
		//console.log(X-Math.ceil(Math.sqrt(R*R-(y_top-Y)*(y_top-Y))));
		console.log(x_left_left);
		$(elems_left[i]).css('top', y_left_top+'px');
		$(elems_left[i]).css('left', x_left_left+'px');
		$(elems_left[i]).css('-webkit-transform', 'rotateZ('+random(0,270)+'deg)');
		//  $(elems_left[i]).css('-webkit-transform', 'traslateZ('+random(0,-500)+'px)');
	}
	for (var i = 0; i < elems_right.length; i++) {
		$(elems_right[i]).removeClass('photo_center');
		var y_right_top = random(0,y);
		console.log(y_right_top);
		var x_right_left = random(X+Math.ceil(Math.sqrt(R*R-(y_right_top-Y)*(y_right_top-Y))),
			X+Math.ceil(Math.sqrt(r*r-(y_right_top-Y)*(y_right_top-Y))));
		//console.log(X-Math.ceil(Math.sqrt(R*R-(y_top-Y)*(y_top-Y))));
		console.log(x_right_left);
		$(elems_right[i]).css('top', y_right_top+'px');
		$(elems_right[i]).css('left', x_right_left+'px');
		$(elems_right[i]).css('-webkit-transform', 'rotateZ('+random(0,270)+'deg)');
	}
	elem.removeAttr('style');
	elem.addClass('photo_center');

}
//随机函数
function random(x,y) {
	var max = Math.max(x,y);
	var min = Math.min(x,y);

	var diff = max - min;
	var number =Math.ceil( Math.random()*diff+min );
	//console.log(number);
	return number;

}

//添加图片，从images的data.js
function addPhoto() {
	var photos = [];
	photos = data;
	var photo_html = [];
	//console.log(photos.length);
	var photoHtml = $(".gallery").html();
	for (var i = 0; i < photos.length; i++) {
		var _html = photoHtml.replace("{{index}}",i)
							 .replace("{{img}}",photos[i].img)
							 .replace("{{caption}}",photos[i].caption)
							 .replace("{{desc}}",photos[i].desc);
		photo_html.push(_html);
	}
	$(".gallery").html(photo_html.join(" "));
	rsort(random(0,6));
}

// function turn (elem) {
// 	var cls = elem.className;
// 	//alert(cls);
// 	//var n=elem.id.split('_')[1];
// 		if(/front/.test( cls )){
// 			cls = cls.replace(/front/,'back');
// 		}else{
// 			cls = cls.replace(/back/,'front');
// 		}
// 	return elem.className = cls;
// }
