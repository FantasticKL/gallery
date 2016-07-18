var data = [];
var dataStr = 'test_0<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
<br>\
<br>\
test_1<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
<br>\
<br>\
test_2<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
<br>\
<br>\
test_3<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
<br>\
<br>\
test_4<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
<br>\
<br>\
test_5<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
<br>\
<br>\
test_6<br>\
<br>\
美女你好！！！<br>\
<br>\
美女描述，哈哈啊哈哈哈<br>\
';

var d = dataStr.split('<br><br><br>');
for(var i=0;i<d.length;i++){
	var c = d[i].split('<br><br>');
	data.push({
		img: c[0]+'.jpg',
		caption:c[1],
		desc:c[2]
	});
}













