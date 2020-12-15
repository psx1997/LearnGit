# Date日期对象的使用

#### 1、Date总的毫秒数

~~~date
1、通过valueof() getTime()
var date = new Date();
console.log(date.valueof());
console.log(date.getTime());
2、简单写法
var date1 = +new Date();+new Date()返回的是总的毫秒数
console.log(date1);
3、H5新增的获取总的毫秒数
console.log(Date.now());
~~~

#### 2、倒计时案例的使用

~~~date
function countDown(time){
	var nowTime = +new Date();//返回当前事件的毫秒数
	var inputTime = +new Date(time);//返回的是用户输入时间的毫秒数
	var times = (inputTime - nowTime)/1000;//times是剩余时间的秒数
	var d = parseInt(times/60/60/24);//天
	d = d < 10?'0'+d:d;
	var h = parseInt(times/60/60%24);//时
	h = h < 10?'0'+h:h;
	var m = parseInt(times/60%60);//分
	m = m < 10?'0'+m:m;
	var s = parseInt(times%60);//秒
	s = s < 10?'0'+s:s;
	return d+'天'+h+'时'+m+'分'+s+'秒';
}
~~~

# 数组对象的使用

#### 1、创建数组

~~~array
1、利用字面量创建数组
var arr = [1,2,3];
2、利用new Array()
var arr1 = new Array();创建了一个空数组
var arr1 = new Array(2);创建了一个长度为2的数组,里面有两个空的元素
var arr1 = new Array(2,3);创建了元素为2和3的数组,等价与[2,3]
~~~

#### 2、检查是否为数组

~~~array
1、instanceof 运算符
var arr = [];
var obj = {};
console.log(arr instanceof Array);
2、Array.isArray(参数) H5新增的方法，适用于ie9以上的版本
console.log(Array.isArray(arr));
~~~

#### 3、添加数组元素

~~~array
1、push()在数组的末尾 添加一个或者多个数组元素
var arr = [1,2,3];
arr.push(4,'pink');
console.log(arr.push(4,'pink'));
(1)、push()参数直接写数组元素就好了
(2)、push完毕以后,返回的是新数组的长度
(3)、push是可以给数组末尾追加新的元素
(4)、原数组也会发生变化

2、unshift 在我们数组的开头添加一个或者多个数组元素
arr.unshift('red','purple');
(1)、unshift()参数直接写数组元素就好了
(2)、unshift完毕以后,返回的是新数组的长度
(3)、unshift是可以给数组前面追加新的元素
(4)、原数组也会发生变化
~~~

#### 4、删除数组元素

~~~array
1、pop()可以删除数组的最后一个元素
arr.pop();
(1)、pop()是可以删除数组的最后一个元素 一次只能删除一个元素
(2)、pop()没有参数
(3)、pop()完毕后返回的是删除的那个元素
(4)、原数组也会发生变化

2、shift()可以删除数组的第一个元素
arr.shift();
(1)、shift()是可以删除数组的第一个元素 一次只能删除一个元素
(2)、shift()没有参数
(3)、shift()完毕后返回的是删除的那个元素
(4)、原数组也会发生变化
~~~

#### 5、筛选数组

~~~array
//要求把数组中工资超过2000的删除放在新数组里面
var arr = [1500,1200,2000,2100,1800];
var newArr = [];
for(int i = 0;i<arr.length;i++){
	if(arr[i]<2000){
		//newArr[newArr.length] = arr[i];
		newArr.push(arr[i]);
	}
}
~~~

#### 6、数组排序

~~~array
数组排序
1、翻转数组
var arr = ['pink','red','blue'];
arr.reverse();
2、数组排序
var arr1 = [3,2,7,1];
arr1.sort(function(a,b){
	return a-b;//按照升序的顺序排序
});//不能对多位数进行排序
~~~

#### 7、获取数组元素的索引

~~~array
1、indexof(数组元素) 作用就是返回数组元素的索引号
   只返回第一个满足条件的索引号
   如果数组里面没有该元素则返回-1
   从前面往后面查找
arr.indexof('blue')
2、lastindexof(数组元素) 返回数组元素的索引号 从后往前查找
~~~

#### 8、数组去重

~~~array
//封装一个去重的函数
function unique(arr){
	var newArr = [];
	//遍历旧数组
	for(int i = 0;i<arr.length;i++){
		//查询新数组
		if(newArr.indexof(arr[i])===-1){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
var demo = unique(['c','a','z','a','x','a','x','z','b'])
console.log(demo)
~~~

#### 9、数组转化为字符串

~~~array
1、toString()
var arr = [1,2,3]
console.log(arr.toString());//1,2,3
2、join(分隔符)
consol.log(arr.join('-'));
~~~

# 字符串对象的使用

#### 1、基本包装类型

~~~str
基本包装类型:就是把简单数据类型包装成为了复杂数据类型
var str = 'andy'
console.log(str.length)

//创建临时变量
var temp = new String('andy')
str = temp
//销毁
temp = null
~~~

#### 2、字符串的不可变

~~~str
不可变指的是里面的值不可变，虽然看上去可以改变内容，但是其实地址变了，内存中开辟了一个内存空间
不要大量的拼接字符
~~~

#### 3、根据字符返回位置

~~~str
str.indexof('要查找的字符',[起始位置])
~~~

#### 4、求字符出现的次数和返回位置

~~~str
查找字符串'abcoefoxyozzopp'中o出现的次数和返回位置
1、核心算法：先查找第一个o出现的位置
2、只要indexof返回的不是-1就继续往下查找
3、后面查找的时候利用第二个参数，当前索引加1，从而继续查找

var str = 'abcoefoxyozzopp';
var index = str.index('o');
while(index!==-1){
	console.log(index);
	index = str.indexof('o',index+1);
}
~~~

#### 5、根据位置返回字符

~~~str
1、charAt(index)
str.charAt(3);
2、charCodeAt(index) 返回相应索引号的AscII值 目的:判断用户按下了什么键
3、str[index] H5新增方法
~~~

#### 6、统计出现最多的字符

~~~str
//判断对象是否有该属性 对象['属性']

统计字符串'abcoefoxyozzopp'出现最多的字符，统计次数
1、核心算法:利用charAt()遍历这个字符串
2、把每个字符都存储给对象，如果没有就=1，如果有就+1
3、遍历对象，得到最大值和字符

var Str = 'abcoefoxyozzopp'
var o = {}
for(var i = 0;i<str.length;i++){
	var chars = str.charAt(i)
	if(o[chars]){
		o[chars]++;
	}else{
		o[chars] = 1;
	}
}
var max = 0
var ch = ''
for(var k in o){
	if(o[k]>max){
		max = o[k]
		ch = k
	}
}
输出max ch
~~~

#### 7、字符串操作方法

~~~str
1、str.conact('red')连接字符
2、str.substr('起始位置','截取几个字符')截取字符
3、str.replace('被替换的字符','新字符')替换字符 只会替换第一个字符
4、替换字符串中的字母o
str1 = 'abcoefoxyozzopp'
while(str1.indexof('o')!==-1){
	str1 = str1.replace('o','*')
}
5、字符串转化为数组str.split('分隔符')
~~~

#### 8、简单数据类型和复杂数据类型

~~~str
简单类型叫做基本数据类型或者值类型,复杂类型又叫做引用类型
值类型:
string,number,boolean,undefined,null
null返回的是一个空的对象 object
如果一个对象没想好放啥，可以定义为null
引用类型:(存储的仅仅是地址)
通过new关键词创建的对象(系统对象、自定义对象),如object、Array、Date等

栈和堆
栈:简单数据类型存放到栈里面，存放的是值
堆:复杂数据类型存放到堆里面，真正的对象存放在堆里面
~~~

# Web Api的使用

#### 1、Dom简介

~~~dom
文档对象模型(document object model)简称DOM,是W3C组织推荐的处理可扩展标记语言的标准编程接口。
通过DOM接口可以改变网页的内容、结构和样式。
文档:一个页面就是一个文档,DOM中使用document表示
元素:页面中所有的标签都是元素,DOM中使用element表示
节点:网页中的所有内容都是节点(标签、属性、文本、注释等),DOM中使用node表示

下面显示的是dom树结构
~~~

![QQ截图20201120105124](C:\Users\庞苏兴\Desktop\psx\QQ截图20201120105124.png)

#### 2、获取对象

~~~dom
获取页面元素的几张方式:
    根据ID获取 getElementById()    
 	var timer = document.getElementById('id') id大小写敏感
 	返回的是一个字符串对象
 	console.dir返回的是一个元素对象  更好的查看里面的属性和方法
 
 根据标签名获取
  	根据标签名获取 getElementByTagName()返回带有指定标签的对象的集合,以伪数组的形式储存的
  	var lis = document.getElementByTagName('li');
  	获取父元素指定标签名的子元素
  	var ol = document.getElementByTagName('ol');
  	console.log(ol[0].getElementByTagName('li'))
  	
 通过HTML5新增的方法获取
    1、根据类名返回元素对象的集合 getElementByClassName('类名')返回的是一个伪数组
    var boxs = document.getElementByClassName('box')
    2、指定选择器的第一个对象 querySelector
    var firstBox = document.querySelector('.box')
    var nav = document.querySelector('#nav')
    var li = document.querySelector('li')
    3、指定选择器的所有对象 querySelectorAll
    
 特殊元素获取
    获取body元素
    document.body
    获取html元素
    document.documentElement
~~~

#### 3、事件基础

~~~dom
事件是由三部分组成  事件源、事件类型、事件处理程序
事件源:事件被触发的对象
var btn = document.getElementById('btn')
事件类型:事件如何触发
事件处理程序:通过一个函数赋值的方式完成
btn.onClick = function(){
	alert();
}

鼠标事件：onclick 鼠标左键点击事件、onmouseover 鼠标经过事件、onmouseout 鼠标离开触发、onfocus 获得鼠标焦点触发、onblur 失去鼠标焦点触发、onmousemove 鼠标移动触发、onmouseup 鼠标弹起触发、onmousedown 鼠标按下触发
~~~

#### 4、操作元素

~~~dom
改变元素内容 
element.innerText去除html标签,不能识别css样式，同时空格和换行也会去掉
element.innerHTML包括HTML,识别css样式，同时保留空格和换行
这两个元素是可以读写的 可以获取里面的内容

//点击了按钮,div里面的文本会发生变化
获取对象
var btn = document.querySelector('button')
var div = document.querySelector('div')
注册事件
btn.onclick = function(){
	div.innerText = '2020-2-2'
}
~~~

#### 5、修改元素属性

~~~dom
1、修改元素属性 src
   获取元素
   var ldh = document.getElementById('ldh')
   var zxy = document.getElementById('zxy')
   var img = document.querySelector('img')
   注册事件
   zxy.onclick = function(){
   		img.src = 'images/zxy.jpg'
   }
~~~

#### 6、分时问候

~~~dom
1、获取元素
   var img = document.querySelector('img')
   var div = document.querySelectot('div')
2、得到当前的小时数
   var date = new Date()
   var h = date.getHours()
3、判断小时数
   采用if分支结构
~~~

#### 7、表单属性设计

~~~dom
1、获取元素
   var btn = document.querySelector('button')
   var input = document.querySelectot('input')
2、注册事件
   btn.onclick = function(){
   		//表单里面的值通常使用value来实现
   		input.value = '被点击了'
   		//如果想要某个表单点击被禁用
   		this.disabled = true
   		//this指向的是事件函数的调用者
   }
~~~

#### 8、仿京东显示隐藏密码

~~~dom
1、获取元素
   var eye = document.getElementById('eye') //图片
   var pwd = document.getElementById('pwd') //密码框
2、注册事件
   var flag = 0;
   eye.onclick = function(){
   		if(flag == 0){
   			pwd.type = text;
   			eye.src = 'open';
   			flag = 1;
   		}else{
   			pwd.type = password;
   			eye.src = 'close';
   			flag = 0;
   		}
   }
~~~

#### 9、修改样式属性

~~~dom
注册事件,里面的属性采取驼峰命名法
this.style.backgroundColor = 'purple'
~~~

#### 10、关闭淘宝二维码案例

~~~dom
注册事件
btn.onclick = function(){
	this.style.display = none;
}
~~~

#### 11、循环精灵图案例

~~~dom
for(int i = 0;i<lis.length;i++){
	var index = i*44;
	lis[i].backgroundPosition = '0 -'+index+'px'
}
~~~

#### 12、显示和隐藏文本框内容

~~~dom
//得到焦点事件
text.onfocus = function(){
	if(this.value === '手机'){
		this.value = '';
	}
	this.style.color = '#333';
}
//失去焦点事件
text.onblur = function(){
	if(this.value === ''){
		this.value = '手机';
	}
	this.style.color = '#999';
}
~~~

#### 13、修改元素属性

~~~dom
通过className修改元素的大小、颜色、位置等样式,适合与样式比较多或者功能比较复杂的情况
如果想要保留原来的类名，可以使用 this.className = 'first change'
test.onclick() = function(){
	//让我们当前元素的类名改为了change
	this.className = 'change'
}
~~~

#### 14、密码框验证案例

~~~dom
<input type="password" class="ipt">
<p class="message">请输入6-16位密码</p>
获取元素
var ipt = document.querySelector('.ipt')
var message = document.querySelector('.message')
注册事件 失去焦点
ipt.onblur = function(){
	if(this.value.length < 6 || this.value.length > 16){
		message.className = 'message wrong'
		message.innerHTML = '您输入的位数要求不对'
	}else{
	
	}
}
~~~

# 实战小案例

#### 1、排他思想

~~~test
<li><button></button></li>
<li><button></button></li>
<li><button></button></li>
<li><button></button></li>
<li><button></button></li>
获取所有的按钮元素
var btns = document.getElementByTagName('button')
for(var i = 0;i<btns.length;i++){
	btns[i].onclick = function(){
		1、首先把所有的背景色去除
		for(var i = 0;i<btns.length;i++){
			btns[i].style.backgroundColor = ''
		}
		2、让当前元素的背景色变化
		this.style.backgroundColor = 'pink'
	}
}

思想:
1、所有元素全部清除样式
2、给当前元素设置样式
3、注意顺序不能颠倒，首先干掉其他人，在设置自己
~~~

#### 2、百度换肤

~~~test
<ul class="baidu">
<li><img src="images/1.jpg"></li>
<li><img src="images/1.jpg"></li>
<li><img src="images/1.jpg"></li>
<li><img src="images/1.jpg"></li>
获取元素
var imgs = document.querySelector('.baidu').querySelectorAll('img')
循环注册事件
for(var i = 0;i < imgs.length;i++){
	imgs[i].onclick = function(){
		//this.src就是我们点击图片的路径
		//把这个路径给body就行了
		document.body.style.backgroundImage = 'url('+this.src+')';
	}
}
~~~

#### 3、表格隔行换色

~~~test
<table>
	<thead></thead>
	<tbody></tbody>
</table>
var trs = document.querySelector('tbody').querySelectAll('tr')
利用循环绑定注册事件
for(var i = 0;i < trs.length;i++){
	trs[i].onmouseover = function(){
		this.className = 'bg';
	}
	trs[i].onmouseout = function(){
		this.className = '';
	}
}
~~~

#### 4、表单全选取消全选

~~~test
获取元素
var	j_cbAll = document.getElementById('j_cbAll');//全选按钮
var j_tbs = document.getElementById('j_tb').getElementByTagName('input');//下面所有的复选框
注册事件
j_cbAll.onclick = function(){
	for(var i = 0;i<j_tbs.length;i++){
		j_tbs[i].checked = this.checked;
	}
}
每次点击都要进行一次循环
for(var i = 0;i<j_tbs.length;i++){
	j_tbs[i].onclick = function(){
		//flag控制全选按钮是否选中
		var flag = true;
		for(var i = 0;i<j_tbs.length;i++){
			if(!j_tbs[i].checked){
				flag = false
				break
			}
		}
		j_cbAll.checked = flag
	}
~~~

#### 5、自定义属性的操作

~~~test
1、获取元素的属性值
   element.属性 获取元素的内部(自身带)属性
   var div = document.querySelector('div')
   console.log(div.id)
   element.getAttribute('属性') 主要用于获取自定义的属性值
2、设置属性值
   element.属性 = '值' 设置内置属性值
   element.getAttribute('属性','值') 主要针对自定义属性
3、移除属性
   element.removeAttribute('属性')
~~~

#### 6、Tab栏切换案例

~~~test
<div class="tab">
	<div class="tab_list">
		<div class="tab_con">
			<div class="item">
			
获取元素
var tab_list = document.querySelector('.tab_list')
var lis = tab_list.querySelectorAll('li')
var items = document.querySelectorAll('.item')
for循环绑定点击事件
for(var i = 0;i<lis.length;i++){
	lis[i].onclick = function(){
		//1、上面选项卡点击效果(排他思想)
		设置li的索引号
		lis[i].setAttribute('index',i);
		for(var i = 0;i<lis.length;i++){
			lis[i].className = "";
		}
		this.className = 'current'
		//2、下面的显示内容模块
		var index = this.getAttribute('index')
		for(var i = 0;i<items.length;i++){
			items[i].style.display = "none";
		}
		items[index].style.display = "block"
	}
}
~~~

#### 7、自定义属性

~~~test
自定义属性的目的是为了保存并使用数据，有些数据可以保存到页面中而不用保存到数据库中
自定义属性可以通过getAttribute('属性')获取、setAttribute('属性','属性值')

H5的新规范:设置自定义属性date-开头作为属性名并且赋值
H5新增的方法获取自定义属性值,只能获取date-开头
支持驼峰命名法例如获取 date-list-name的值为: div.dateset.listName
dateset中存放了所有以date开头的自定义属性
div.dateset.index、div.dateset['index']
~~~

#### 8、节点操作

~~~test
1、节点概述
节点是由nodeType(节点类型)、nodeName(节点名称)、nodeValue(节点值)组成
元素节点nodeType:1
属性节点nodeType:2
文本节点nodeType:3(包括文本、空格、换行等)
主要操作的节点是元素节点

2、父节点操作
得到的是离元素最近的父级节点
如果指定的节点没有父节点则返回null
element.parentNode

3、子节点操作
childNodes所有的子节点 包括元素节点 文本节点
element.childNodes
children获取子节点所有的元素节点 实际开发常用的方法
element.children
firstChild第一个子节点 不管是文本节点还是元素节点
lastChild最后一个子节点 不管是文本节点还是元素节点
element.firstChild
firstElementChild、lastElementChild获取第一个和最后一个子元素节点
element.firstElementChild 存在兼容问题
在实际开发中，既没有兼容性问题又返回第一个子元素节点
解决:element.children[0]、element.children[elemeng.children.length-1]
~~~

#### 9、下拉操作

~~~test
<ul class="nav">
	<li>
		<a href>微博</a>
		<ul>下拉的菜单</ul>
1、导航栏的li都要有鼠标经过效果,循环注册鼠标事件
2、当鼠标经过li的时候第二个孩子ul显示，当鼠标离开隐藏

var nav = document.querySelector('.nav')
var lis = nav.children
for(var i = 0;i<lis.length;i++){
	lis[i].onmouseover = function{
		this.children[1].style.display = 'block'
	}
	lis[i].onmouseout = function{
		this.children[1].style.display = 'none'
	}
}
~~~

#### 10、兄弟节点

~~~test
nextSibling返回当前元素的下一个兄弟节点,找不到则返回null。包括文本节点、元素节点
priviousSibling返回当前元素的上一个兄弟节点
div.nextSibling

nextElementSibling返回的是下一个兄弟元素节点
priviousElementSibling返回的是上一个兄弟元素节点
两个方法有兼容性问题,iE9以上才支持
解决封装一个兼容性函数
~~~

#### 11、节点添加和创建、删除

~~~test
<ul></ul>
1、创建节点元素节点
var li = document.createElement('li')
2、添加节点
node.appendChild(child)
node.appendChild()方法将一个节点添加到父亲节点的子节点列表的末尾，类似伪元素after
node.insertBefore(child,指定元素)将一个节点添加到指定子节点的前面，类似伪元素before
3、删除节点
node.removeChild(child)
btn.onclick = function(){
	if(ul.children.length == 0){
		this.disabled = true
	}else{
		ul.removeChild(ul.children[0])
	}
}
~~~

#### 12、发布留言案例

~~~test
<textarea></textarea>
<button></button>
<ul>
<li></li>
</ul>
1、获取元素
var btn = document.querySelector('button')
var text = document.querySelector('textarea')
var ul = document.querySelector('ul')
2、注册事件
btn.onclick() = function(){
	if(text.value == ''){
		alert('您没有输入内容')
		return false
	}else{
		(1)创建元素
		var li = document.createElement('li')
		li.innerHTML = text.value
		(2)添加元素
		//ul.appendChild(li)最后一个添加
		ul.insertBefore(li,ul.children[0])第一个前面添加
	}
}
~~~

#### 13、删除留言案例

~~~test
案例分析：
当我们把文本域的值赋值给li的时候，多添加一个删除的连接
javascript:阻止链接跳转
<textarea></textarea>
<button></button>
<ul>
<li></li>
</ul>
1、获取元素
var btn = document.querySelector('button')
var text = document.querySelector('textarea')
var ul = document.querySelector('ul')
2、注册事件
btn.onclick() = function(){
	if(text.value == ''){
		alert('您没有输入内容')
		return false
	}else{
		(1)创建元素
		var li = document.createElement('li')
		li.innerHTML = text.value + "<a href='javascript:;'>删除</a>"
		(2)添加元素
		//ul.appendChild(li)最后一个添加
		ul.insertBefore(li,ul.children[0])第一个前面添加
		(3)删除元素
		var as = document.querySelectorAll('a')
		for(var i = 0;i<as.length;i++){
			as[i].onclick = function(){
				ul.removeChild(this.parentNode)
			}
		}
	}
}
~~~

#### 14、复制节点

~~~node
node.cloneNode()返回的是该方法的节点的一个副本
注意：
1、如果参数为空或者false，则是浅拷贝，只克隆复制节点本身，不克隆里面的子节点，只复制标签不复制内容
2、如果参数为空或者true，则是深拷贝，只复制标签复制内容
克隆节点
var lili = ul.children[0].cloneChild(true)
添加节点
ul.appendChild(lili)
~~~

#### 15、动态生成表格

~~~table
<table>
	<thead>
		<tr>
			<th>
	<tbody>
		<tr>
			<td>
1、先准备好数据
var dates = [
	{
		name:'',
		subject:'',
		score:''
	},
	{
		name:'',
		subject:'',
		score:''
	}
]
2、往tbody里面创建行
var tbody = document.querySelector('tbody')
for(var i = 0;i<dates.length;i++){
	//创建tr行
	var tr = document.createElement('tr')
	tbody.appendChild(tr)
	//行里面创建单元格td  for循环遍历对象
	for(var k in dates[i]){
		var td = document.createElement('td')
		td.innerHTML = dates[i][k]
		tr.appendchild(td)
	}
	//创建删除单元格
	var td = document.createElement('td')
	td.innerHTML = '<a href = 'javascript:;'>删除</a>'
	tr.appendchild(td)
}
3、删除操作
var as = document.querySelectorAll('a')
for(var i = 0;i<as.length;i++){
	as[i].onclick = function(){
		tbody.removeChild(this.parentNode.parentNode)
	}
}
~~~

#### 15、write创建元素

~~~write
document.write();
创建完元素以后，当页面加载完成时，页面会发生重绘，即页面中只剩下这个标签
~~~

#### 16、innerHTML和createElement效率对比

~~~test
innerHTML创建多个元素效率更高(不要使用拼接，采用数组形式拼接),结构稍微复杂
createElement()创建多个元素效率会稍微低一点点,但是结构更清晰
~~~

# 事件高级

#### 1、注册事件

~~~event
注册事件两种方式:传统事件和方法监听注册事件
传统注册事件:
利用onclick开头的事件
特点:注册事件的唯一性
同一个元素同一个事件只能设置一个处理函数
方法监听注册事件:
w3c标准推荐方式
addEventListener()是一个方法
IE9以前不支持，使用attachEvent()代替
同一个元素同一个事件可以注册多个监听器

btns[1].addEventListener('click',function(){
	alert(22)
})
btns[1].addEventListener('click',function(){
	alert(33)
})
~~~

![QQ截图20201122131914](C:\Users\庞苏兴\Desktop\psx\QQ截图20201122131914.png)

#### 2、attachEvent()事件监听方式

~~~event
eventTarget.attachEvent(eventNameWithOn,callback)
eventNameWithOn:事件类型字符串，比如onclick,onmouseover,这里要带on
callback:事件处理函数，当目标触发事件时回调被调用
ie9以前才兼容
btns[2].addEventListener('onclick',function(){
	alert(33)
})
~~~

![QQ截图20201122132924](C:\Users\庞苏兴\Desktop\psx\QQ截图20201122132924.png)

#### 3、删除事件

~~~event
传统方式删除事件:
divs[0].onclick = function(){
	alert(11);
	divs[0].onclick = null;
}

removeEventListener删除事件
divs[1].addEventListener('click',fn)
function fn(){
	alert(11)
	divs[1].removeEventListener('click',fn)
}

attachEvent删除事件
divs[2].attachEvent('onclick',fn1)
function fn1(){
	alert(33)
	divs[2].detachEvent('onclick',fn1)
}
~~~

![QQ截图20201122134555](C:\Users\庞苏兴\Desktop\psx\QQ截图20201122134555.png)

#### 4、DOM事件流

~~~event
事件流描述的是接收事件的顺序，这个传播的过程称为事件流
DOM事件流分为3个阶段：
1、捕获阶段
2、当前目标阶段
3、冒泡阶段
~~~

#### 5、DOM事件流代码验证

~~~event
捕获阶段 如果addEventListener的第三个参数为true，则处于捕获阶段，document->html->body->father->son
son.addEventListener('click',function(){
	alert('son')
},true)
father.addEventListener('click',function(){
	alert('father')
},true)

冒泡阶段 如果addEventListener的第三个参数为false获取省略，则处于冒泡阶段，son->father->body->html->document
son.addEventListener('click',function(){
	alert('son')
},false)
father.addEventListener('click',function(){
	alert('father')
},false)

在实际开发中，我们更关注事件冒泡，有些事件是没有冒泡的
onblur onfocus onmouseenter onmouseleave
~~~

#### 6、事件对象

~~~event
事件对象
div.onclick = function(event)
event就是一个事件对象 写到侦听函数的 当形参来看
事件对象只有有了事件才会存在 它是系统给我们自动创建的  不需要我们自己传递参数
这个事件我们可以自己来命名
事件也有兼容性的问题 ie678通过window.event
e = e || window.event
~~~

#### 7、常见事件对象属性和方法

~~~event
1、e.target返回的是触发事件的对象(元素)
this返回的是绑定事件的对象(元素)
console.log(e.target)
例如:ul绑定了事件,那么this指向的是ul
	e.target返回的是我们点击的对象
存在兼容性问题:ie678(了解)
e = e|| window.event
var target = e.target || e.srcElement
2、了解 跟this有一个非常相似的属性currentTarget ie678不认识
~~~

#### 8、事件对象阻止默认行为

~~~event
e.type返回事件类型 不带on
阻止默认的行为 让连接不跳转
var a = document.querySelector('a')
a.addEventListener('click',function(e){
	e.preventDefault();
})
传统的注册方式
a.onclick = function(e){
	e.preventDefault();
	//低版本浏览器
	e.returnValue;
	//我们可以利用return false也能阻止默认行为 没有兼容性问题
	特点：return 后面有代码就不再执行了
}
~~~

#### 9、阻止事件冒泡

~~~event
阻止冒泡dom推荐stopPropagetion()
ie678 window.event.cancelBubble = true;
son.addEventListener('click',function(){
	alert('son')
	e.stopPropagetion()
},false)
father.addEventListener('click',function(){
	alert('father')
},false)
~~~

#### 10、事件委托

~~~event
事件委托的原理：
不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响每个子节点
事件委托的作用:
我们只操作了一次DOM,提高了程序的性能
ul.addEventListener('click',function(e){
	alert()
	e.target.style.backgroundColor = "pink"
})
~~~

#### 11、常用的鼠标事件

~~~event
1、禁止鼠标右键菜单
document.addEventListener('contextmenu',function(e){
	e.preventDafault();
})
2、禁止鼠标选中
document.addEventListener('selectstart',function(e){
	e.preventDafault();
})
~~~

#### 12、鼠标事件对象

![QQ截图20201122152014](C:\Users\庞苏兴\Desktop\psx\QQ截图20201122152014.png)

#### 13、鼠标跟随天使的案例

~~~test
案例分析:
1、鼠标不断的移动，使用鼠标移动事件:mousemove
2、在页面中移动,给document注册事件
3、图片要加绝对定位
核心:
每次移动鼠标，我们都会获得最新的鼠标坐标，把这个x和y作为图片的top和left值就可以移动图片了
document.addEventListener('mousemove',function(e){
	var x = e.pageX;
	var y = e.pageY;
	不要忘记加px
	pic.style.left = x - 50 + 'px';
	pic.style.top = y - 40 + 'px';
})
~~~

#### 14、常用的键盘事件

~~~event
1、keyup按键弹起的时候触发
document.addEventListener('keyup',function())
2、keydown按键按下的时候触发
3、keypress按键按下的时候触发 不识别功能键比如ctrl shift 箭头等
三个执行顺序 keydown keypress keyup

keyCode属性
1、keyup和keydown事件不区分字母大小写，a和A得到的都是65
2、keypress事件区分字母大小写
if(e.keyCode === 65){
	alert('你按下了a键')
}
~~~

#### 15、模拟京东输入内容案例

~~~test
案例分析:
检测用户是否按下了s键,如果按下了就把光标定位到搜索框
使用键盘事件里面的keyCode判断用户是否按下了s键
搜索框获得焦点：focus()方法
var search = document.querySelector('input')
document.addEventListener('keyup',function(e){
	if(e.keyCode === 83){
		search.focus();
	}
})
~~~

#### 16、模拟京东快递单号查询

~~~test
案例分析:
1、快递单号输入内容时,上面的大号字体盒子显示
2、表单检测用户输入,给表单添加键盘事件
3、把快递单号里面的值(value)获取过来赋值给con盒子
4、如果快递单号为空就隐藏这个盒子
5、失去焦点的时候就隐藏这个con盒子
<div class="search">
	<div class="con">123</div>
	<input/>
var con = document.querySelector('.con')
var jd_input = document.querySelector('.jd')
jd_input.addEventListener('keyup',function(){
	if(this.value == ''){
		con.style.display = "none"
	}else{
		con.style.display = "block"
		con.innerText = this.value
	}
})
jd_input.addEventListener('blur',function(){
	con.style.display = "none"
}
jd_input.addEventListener('focus',function(){
	if(this.value !== ""){
		con.style.display = "block"
	}
}
~~~

# BOM浏览器对象模型

#### 1、BOM概述

~~~bom
BOM即浏览器对象模型,它提供了独立于内容而与浏览器窗口进行交互的对象,其核心对象是window
BOM是由一系列相关的对象构成,并且每个对象提供了很多的方法和属性
BOM缺乏标准,javascript语法的标准化组织是ECMA,DOM的标准化组织是W3C

window对象是浏览器的顶级对象,它具有双重角色
它是js访问浏览器窗口的一个接口
它是一个全局对象。即window对象的属性和方法
在调用的时候可以省略window
window下的一个特殊属性window.name本身存在含义
~~~

#### 2、window对象常见的事件

~~~bom
窗口加载事件 
包含dom元素、所有的样式表、图片等等加载完成以后才会执行
window.onload = function()如果存在多个只会执行最后一个
如果使用的是addEventListener则是没有限制的

dom元素加载完成即可以实现,不包括所有的样式表、图片加载等等
加载速度比load更快一些
documment.addEventListener('DOMContentLoaded',function(){})
~~~

#### 3、跳转窗口大小事件

~~~bom
documment.addEventListener('resize',function(){})
只要窗口大小发生像素变化,就会触发这个事件
配合window.innerWidth完成响应式布局
~~~

#### 4、定时器

~~~timer
1、setTimeout(调用函数,延迟时间)
  setTimeout('函数()',延迟时间)不提倡这个方法
可以给不同的定时器命名来区别不同的定时器
这个延迟时间是毫秒，也可以省略，默认为0
这个函数调用可以直接写函数，或者写函数名

5秒钟后自动隐藏图片
var ad = document.querySelector('.ad')
setTimeout(function(){
	ad.style.display = "none"
},5000);

2、停止定时器
里面的参数就是定时器的标识符
window.clearTimeout(timeoutID)
var btn = document.querySelector('button')
var timer = setTimeout(function(){
	console.log('爆炸了')
},5000)
btn.addEventListener('click',function(){
	clearTimeout(timer)
})
~~~

#### 5、setInterval()定时器

~~~time
setInterval()方法重复调用一个函数,每隔这个时间就去调用一次回调函数
var time = setInterval(function(){
	console.log('输出')
},1000)
与setTimeout的区别:
setTimeout是延迟时间到了才会去调用这个回调函数，只调用一次就结束这个定时器
setInterval重复调用一个函数,每隔这个时间就去调用一次回调函数
~~~

#### 6、倒计时案例

~~~test
案例分析
1、这个倒计时是不断变化的，因此需要定时器来自动变化(setInterval)
2、三个盒子分别存放的是时分秒
3、三个盒子的innerHTML存放
<span class="hour">1
<span class="minute">2
<span class="second">3
1、获取元素
var hour = document.querySelector('.hour')
var minute = document.querySelector('.miniute')
var second = document.querySelector('second')
var inputTime = +new Date('2019-5-1 18:00:00');//返回的是用户输入时间的毫秒数
countDown();我们先调用一次这个函数,防止页面刷新的时候有空白
2、开启定时器
setInterval(countDown,1000)
function countDown(){
	var nowTime = +new Date();//返回当前事件的毫秒数
	var times = (inputTime - nowTime)/1000;//times是剩余时间的秒数
	var h = parseInt(times/60/60%24);//时
	h = h < 10?'0'+h:h;
	hour.innerHTML = h;
	var m = parseInt(times/60%60);//分
	m = m < 10?'0'+m:m;
	minute.innerHTML = m;
	var s = parseInt(times%60);//秒
	s = s < 10?'0'+s:s;
	second.innerHTML = s;
}
~~~

#### 7、清除定时器

~~~time
var begin = document.querySelector('.begin')
var stop = document.querySelector('.stop')
var timer = null //定义一个全局变量
begin.addEventListener('click',function(){
	timer = setInterval(function(){
		console.log()
	},1000)
})
stop.addEventListener('click',function(){
	clearInterval(timer)
})
~~~

#### 8、发送短信案例

~~~test
案例分析
1、点击按钮以后,会禁用按钮,设置disabled为true
2、button里面的内容用innerHTML修改
3、里面的秒数是有变化的,因此用到定时器
4、定义一个变量不断递减
5、如果变量为0,我们需要停止定时器,并且恢复原始按钮状态
var btn = document.querySelector('button')
var time = 10
btn.addEventListener('click',function(){
	btn.disabled = true
	var timer = setInterval(function(){
		if(time == 0){
			//清除定时器
			clearInterval(timer)
			btn.disabled = false
			btn.innerHTML = "发送"
			time = 3//这里需要重新开始
		}else{
			btn.innerHTML = "还剩下'+time+'秒"
			time--
		}
	},1000)
})
~~~

#### 9、this指向问题

~~~this
一般情况下this指向的都是那个调用它的对象
1、全局作用域或者普通函数中的this指向全局对象window
2、方法调用中谁调用this指向谁
3、构造函数中this指向构造函数的实例对象
~~~

#### 10、js同步和异步

~~~js
同步:
前一个任务结束后再执行后一个任务,程序的执行顺序与任务顺序是一致的、同步的。
异步:
在执行一个任务的同时,还可以执行其他的任务

同步任务:
同步任务都在主线程上执行,形成一个执行栈
异步任务:
JS的异步是通过回调函数来实现
一般而言,异步任务有一下三种类型:
1、普通事件，如click、resize等
2、资源加载，如load、error等
3、定时器，包括setInterval，setTimeout等
异步任务是添加到任务队列当中，任务队列也称消息队列

JS执行机制:
1、先执行执行栈中的同步任务
2、异步任务放入任务队列中
3、一旦执行栈中的同步任务完成,系统会按次序读取任务队列中的异步任务
执行栈类似于主车道，任务队列类似于应急车道

由于主线程不断的重复获得任务、执行任务、在获取任务、再执行，这种机制被称为事件循环(event loop)
~~~

#### 11、location对象常见属性

~~~bom
url:是互联网上标准资源的地址，称为统一资源定位符。
协议+域名+文件路径+端口+参数
~~~

![QQ截图20201123155525](C:\Users\庞苏兴\Desktop\psx\QQ截图20201123155525.png)

#### 12、5秒钟后调转到首页

~~~bom
<button>点击
<div>
var btn = document.querySelector('button')
var div = document.querySelector('div')
btn.addEventListener('click',function(){
	location.href = 'url'
})
var time = 5
setInterval(function(){
	if(time==0){
		location.href = 'url'
	}else{
		div.innerHTML = '您将在'+time+'秒后跳转到首页'
		time --
	}
},1000)
~~~

#### 13、获取url参数

~~~bom
1、第一个登录页面，里面有提交表单，action表单提交到index.html页面
2、第二个页面可以使用第一个页面的参数,这样实现了一个数据不同页面之间的传递效果
3、第二个页面之所以使用第一个页面的数据,是利用了URL里面的location.search参数
1、先去掉? substr('起始位置'，截取几个字符)
var param = location.search.substr(1)
2、利用分隔符把字符串分割成数组
var arr = param.split('=')
div.innerHTML = arr[1]
~~~

#### 14、location对象的方法

~~~bom
location.assign() 也成为重定向页面//记录浏览器历史，可以实现后退功能
location.replace() //替换当前页面,因为不记录历史,不可以实现后退功能
location.reload() 相当于刷新按钮f5
~~~

![QQ截图20201123161230](C:\Users\庞苏兴\Desktop\psx\QQ截图20201123161230.png)

#### 15、navigator对象 

![QQ截图20201123163537](C:\Users\庞苏兴\Desktop\psx\QQ截图20201123163537.png)

#### 16、history对象

~~~bom
back()可以后退功能
forward()前进功能
go(参数)前进后退功能 参数如果是1前进1个页面如果是-1后退1个页面
btn.addEventListener('click',function(){
	history.forward()
})
~~~

# PC网页特效

#### 1、元素偏移量offset

~~~pc
offset可以动态的得到该元素的位置、大小等
1、获得元素距离带有定位的父元素的位置
2、获取元素自身的大小(宽度高度)
注意返回的数值是不带单位的
offsetParent返回带有定位的父级元素，如果没有定位则返回body
element.parentNode返回最近一级的父亲
offsetWidth动态的获取盒子的大小,包含padding+border+width
~~~

![QQ截图20201123164406](C:\Users\庞苏兴\Desktop\psx\QQ截图20201123164406.png)

#### 2、offset和style的区别

![QQ截图20201123165402](C:\Users\庞苏兴\Desktop\psx\QQ截图20201123165402.png)

#### 3、获取鼠标在盒子内的坐标

~~~pc
案例分析:
1、我们在盒子内点击，得到鼠标距离盒子左右的距离
2、首先得到鼠标在页面内的坐标e.pageX,e.pageY
3、其次得到盒子在页面中的距离(box.offsetLeft,box.offsetTop) 
4、如果想要移动一下鼠标就获取最新的坐标可以使用事件mousemove
var box = document.querySelector('.box')
box.addEventListener('mousemove',function(e){
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	this.innerHTML = 'x坐标是' + x + 'y坐标是' + y;
})
~~~

#### 4、模态框拖曳

~~~pc
弹出框,我们也称为模态框
1、点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层
2、点击关闭按钮，可以关闭模态框，同时关闭灰色半透明遮挡层
3、鼠标放到模态框最上面一行，可以按住鼠标拖曳模态框在页面中移动
4、鼠标松开，可以停止模态框拖动
触发拖曳效果 mousedown、mousemove、mouseup
鼠标在移动过程中不断把left和top赋值

1、获取元素
var login = document.querySelector(".login")
var mask = document.querySelector('.login-bg')
var link = document.querySelector('#link')
var closeBtn = document.querySelector('#closeBtn')
var title = document.querySelector("#title")
2、点击弹出层这个链接link 让mask和login显示出来
link.addEventListener('click',function(){
	mask.style.block = 'block'
	login.style.block = 'block'
})
3、点击关闭按钮closeBtn 让mask和login隐藏
closeBtn.addEventListener('click',function(){
	mask.style.block = 'none'
	login.style.block = 'none'
})
4、开始拖曳
//(1)当我们鼠标按下就获取鼠标在盒子内的坐标
title.addEventListener('mousedown',function(e){
	var x = e.pageX - login.offsetLeft
	var y = e.pageY - login.offsetTop
	(2)鼠标在移动的时候，把鼠标在页面中的坐标减去盒子内的坐标就是模态框的left和top
	document.addEventListener('mousemove',move)
	function move(e){
		login.style.left = e.pageX - x + 'px';
		login.style.top = e.pageY - y + 'px';
	}
	(3)鼠标弹起，就让鼠标移动事件移除
	document.addEventListener('mouseup',function(){
		document.removeEventListener('mousemove',move)
	})
})
~~~

#### 5、仿京东放大镜效果

~~~pc
var priview_img = document.querySelector('.priview_img')
var mask = document.querySelector('.mask')
var big = document.querySelector('.big')
1、当我们鼠标经过priview_img就显示和隐藏mask遮挡层和big大盒子
priview_img.addEventListener('mouseover',function(){
	mask.style.display = "block"
	big.style.display = "block"
})
priview_img.addEventListener('mouseout',function(){
	mask.style.display = "none"
	big.style.display = "none"
})
2、鼠标移动的时候让黄色的盒子跟着鼠标走
priview_img.addEventListener('mousemove',function(e){
	//1、先计算出鼠标在盒子内的坐标
	var x = e.pageX - this.offsetLeft
	var y = e.pageY - this.offsetTop
	var maskX = x -mask.offsetWidth/2
	var maskY = y -mask.offsetHeight/2
	2、让黄色盒子不能超出div
	if(maskX<=0){
		maskX = 0;
	}else if(maskX>=priview_img.offsetWidth-mask.offsetWidth){
		maskX = 100
	}else if(maskY<=0){
		maskY = 0;
	}else if(maskY>=priview_img.offsetHeight-mask.offsetHeight){
		maskY = 100
	}
	mask.style.left = maskX + 'px'
	mask.style.top = maskY + 'px'
	//大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离  / 遮挡层的最大移动距离
	var maskMax = priview_img.offsetWidth-mask.offsetWidth;
	var bigImg = document.querySelector('.bigImg')
	var bigMax = bigImg.offsetWidth - big.offsetWidth;
	var bigX = maskX * bigMax / maskMax
	var bigY = maskY * bigMax / maskMax
	不要忘记给大图片定位
	bigImg.style.left = -bigX + 'px'
	bigImg.style.top = -bigY + 'px'
})
~~~

#### 6、client系列

~~~pc
client宽度和offsetWidth最大的区别:不包含边框
~~~

#### 7、立即执行函数

~~~pc
1、立即执行函数:不需要调用,立马能够自己执行的函数	
2、写法:(function(){})()、(function(){}())
可以传递参数进来
(function(a){
	console.log(a)
})(1)第二个小括号可以看作是调用函数

(function count(a){
	console.log(a)
}(1))
3、立即执行函数最大的作用就是独立创建了一个作用域，里面所有的变量都是局部变量,不会有命名冲突
~~~

#### 8、flexible分析

~~~pc
物理像素比:window.devicePixelRatio
pc和手机的物理像素比都是不同的
setBodyFontSize() 设置body的字体大小
setRemUnit() 设置html元素的文字大小
当页面尺寸大小发生变化的时候，我们要重新设置下rem的大小
pageshow()是重新加载页面触发的事件，这个事件在页面显示时触发,无论页面是否来自缓存
e.persisted返回的时true就是说如果这个页面从缓存取过来的页面也需要重新计算rem的大小
~~~

#### 9、scroll系列

![QQ截图20201124101512](C:\Users\庞苏兴\Desktop\psx\QQ截图20201124101512.png)

~~~pc
scrollHeight是真正的内容大小
scrollTop是被卷去的上部距离到边框下沿的距离
onscroll滚动条滚动事件
~~~

#### 10、仿淘宝固定右侧侧边栏

~~~pc
案例分析:
1、原先侧边栏是绝对定位
2、当页面滚动到一定的距离改为固定定位
3、页面继续滚动显示返回顶部
页面被卷去的头部可以通过window.pageYOffset获得，元素被卷去的头部是element.scrollTop获得

1、获取元素
var slidebar = document.querySelector('.slide-bar')
var banner = document.querySelector('.banner')
var main = document.querySelector('.main')
var goBack = document.querySelector('.goBack')
//一定要写到滚动的外面
var bannerTop = banner.offsetTop
//固定后应该变化的值
var slidebarTop = slidebar.offsetTop - bannerTop
var mainTop = main.offsetTop
2、页面滚动事件
document.addEventListener('scroll',function(){
	if(window.pageYOffset >= bannerTop){
		slidebar.style.position = "fixed"
		slidebar.style.top = slidebarTop + 'px'
	}else{
		slidebar.style.position = "absolute"
		slidebar.style.top = '300px'
	}
	4、当页面滚动到main盒子就显示goBack模块
	if(window.pageYOffset >= mainTop){
		goBack.style.display = "block"
	}else{
		goBack.style.display = "none"
	}
})
~~~

![QQ截图20201124104625](C:\Users\庞苏兴\Desktop\psx\QQ截图20201124104625.png)

#### 11、三大系列总结

~~~pc
element.offsetWidth: 返回自身包括padding、边框、内容的宽度
element.clientWidth:返回自身包括padding、不含边框、内容的宽度
element.scrollWidth:返回自身实际内容的宽度、不含边框
页面的滚动距离通过window.pageXOffset获得
~~~

![QQ截图20201124105117](C:\Users\庞苏兴\Desktop\psx\QQ截图20201124105117.png)

#### 12、mouseenter和mouseover的区别

~~~pc
mouseover鼠标经过自身盒子会触发,经过子盒子还会触发。mouseenter只会经过自身盒子触发
之所以这样是因为mouseenter不会冒泡
跟mouseenter搭配的鼠标离开mouseleave同样不会冒泡
~~~

# 动画

#### 1、动画原理

~~~dh
核心原理:通过定时器setInterval()不断移动盒子位置
实现步骤:
1、获得盒子当前位置
2、在当前位置的基础上加一个移动距离
3、利用定时器不断的重复这个操作
4、加一个结束定时器的条件
5、注意:此元素一定要添加定位

var div = document.querySelector('div')
var timer = setInterval(function(){
	if(div.offsetLeft >= 400){
		//停止动画 本质是停止定时器
		clearInterval(timer);
	}
	div.style.left = div.offsetLeft + 5 + 'px'
},30)
~~~

#### 2、动画函数封装

~~~dh
注意函数需要传递2个参数,动画对象和移动到的距离
function animate(obj,target){
        var timer = setInterval(function(){
        if(obj.offsetLeft >= target){
            //停止动画 本质是停止定时器
            clearInterval(timer);
        }
        obj.style.left = obj.offsetLeft + 5 + 'px'
    },30)
}
var div = document.querySelector('div')
animate(div,300)
~~~

#### 3、给不同对象添加不同的定时器

~~~dh
var obj = {}
注意函数需要传递2个参数,动画对象和移动到的距离
好处:给不同的元素添加了不同的定时器
function animate(obj,target){
		当我们不断的点击按钮这个元素的速度会越来越快,因为开启了越来越多的定时器
		解决方案:让我们元素只有一个定时器执行
		先清除以前的定时器,只保留当前的一个定时器执行
		clearInterval(obj.timer)
        var obj.timer = setInterval(function(){
        if(obj.offsetLeft >= target){
            //停止动画 本质是停止定时器
            clearInterval(timer);
        }
        obj.style.left = obj.offsetLeft + 5 + 'px'
    },30)
}
var div = document.querySelector('div')
animate(div,300)
~~~

#### 4、缓动动画原理

~~~dh
缓动动画就是让元素运动速度有所变化,最常见的是让速度慢慢停下来
思路:
1、让盒子每次移动的距离慢慢变小,速度就会慢慢落下来
2、核心算法:(目标值-现在的位置) / 10 做为每次移动的距离步长
3、停止的条件:让当前盒子位置等于目标位置就停止定时器

function animate(obj,target,callback){
		当我们不断的点击按钮这个元素的速度会越来越快,因为开启了越来越多的定时器
		解决方案:让我们元素只有一个定时器执行
		先清除以前的定时器,只保留当前的一个定时器执行
		clearInterval(obj.timer)
        var obj.timer = setInterval(function(){
        (目标值-现在的位置) / 10 做为每次移动的距离步长,把步长改为整数
        var step = (target-obj.offsetLeft) / 10
        step = step > 0 ? Math.ceil(step):Math.floor(step)
        if(obj.offsetLeft == target){
            //停止动画 本质是停止定时器
            clearInterval(timer);
            if(callback){
            	callback()
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px'
    },30)
}
var div = document.querySelector('div')
animate(div,300,function(){
	span.style.backgroundColor = "red"
})
//匀速动画就是盒子当前的位置 + 固定的值 10
//缓动动画就是盒子当前的位置 + 变化的值 (目标值-现在的位置) / 10 
回调函数要写到定时器结束的地方
~~~

#### 5、动画滑动

~~~dh
1、获取元素
var sliderbar = document.querySelector('.sliderbar')
var con = document.querySelector('.con')
sliderbar.addEventListener('mouseenter',function(){
	animate(con,-160,function(){
		当动画执行完毕,就把箭头改了
		sliderbar.children[0].innerHTML = "→"
	})
})
sliderbar.addEventListener('mouseleave',function(){
	animate(con,0function(){
		当动画执行完毕,就把箭头改了
		sliderbar.children[0].innerHTML = "←"
	})
})
~~~

#### 6、网页轮播图

~~~dh
<div class="focus f1">
左侧按钮
<a class="arrow-l">
右侧按钮
<a class="arrow-r">
核心滚动区域
<ul>
	<li>
		<a><img src="">
小圆圈
<ol class="circle">
	<li>
	<li class="current">
功能需求:
1、鼠标经过轮播图模块,左右按钮显示,离开隐藏
2、点击右侧按钮一次,图片往左边一次
3、图片在播放的同时,下面小圆圈也跟随一起变化
4、点击小圆圈可以播放相应图片
5、鼠标不经过轮播图，也会自动播放
6、鼠标经过，轮播图停止播放

动态生成小圆圈:小圆圈的个数跟图片张树一致
利用for循环动态生成小圆圈放入ol里面
1、动态创建一个li createElement('li')
2、插入节点 ol.appendChild(li)

滚动图片的算法:点击某个小圆圈，就让图片滚动 小圆圈的索引号乘以图片的宽度作为ul移动距离
注意是-值
无缝滚动原理:把ul第一个li复制一份放在ul最后面
当图片滚动到最后一张图片时,让ul快速的不做动画的跳到最左侧left:0
num=0
左右侧按钮算法:声明一个变量num,点击一次num+1,让这个变量乘以图片的宽度,就是ul的距离
克隆算法:克隆ul第一个li cloneChild()加true深克隆,添加到ul最后面
小圆圈跟随变化:声明一个变量circle,每次点击+1
window.addEventListener('load',function(){
	//1、获取元素
	var arrow-l = document.querySelector('.arrow-l')
	var arrow-r = document.querySelector('.arrow-r')
	var focus = document.querySelector('.focus')
	var focusWidth = focus.offsetWidth
	//鼠标经过focus就显示隐藏左右按钮
	focus.addEventListener('mouseenter',function(){
		arrow-l.style.display = "block"
		arrow-r.style.display = "block"
		clearInterval(timer)
		timer = null//清除定时器变量
	})
	focus.addEventListener('mouseleave',function(){
		arrow-l.style.display = "none"
		arrow-r.style.display = "none"
		timer = setInterval(function(){
			手动调用点击事件
			arrow_r.click()
		})
	})
	3、动态生成小圆圈
	var ul = focus.querySelector('ul')
	var ol = focus.querySelector('.circle')
	for(var i = 0;i<ul.children.length;i++){
		通过自定义属性记录索引号
		li.setAttribute('index',i)
		创建一个li
		var li = document.createElement('li')
		ol.appendChild(li)
		li.addEventListener('click',function(){
			for(var i = 0;i<ol.children.length;i++){
				ol.children[i].className = ""
			}
			this.className = "current"
			//点击获取索引号
			var index = this.getAttribute('index')
			//当我们点击某个li就要把li的index给num
			num = index
			circle = index
			//点击小圆圈移动图片
			animate(ul,-index*focusWidth)
		})
	}
	ol.children[0].className = "current"
	//克隆第一张图片放到最后
	var first = ul.children[0].cloneNode(true)
	ul.appendChild(first)
	//节流阀
	var flag = true
	//点击右侧按钮图片滚动一张
	var num = 0
	circle控制小圆圈的播放
	var circle = 0
	arrow_r.addEventListener('click',function(){
		if(flag){
			flag = false 关闭节流阀
			如果到了最后复制的一张图片，我们的ul快速复原left为0
			if(num==ul.children.length-1){
				ul.style.left = 0
				num = 0
			}
			num++
            animate(ul,-num*focusWidth，function(){
            	flag = true 打开节流阀
            })
            点击右侧按钮,小圆圈跟随变化
            circle++
            if(circle==ol.children.length){
                circle = 0
            }
            for(var i = 0;i<ol.children.length;i++){
                ol.children[i].className = ""
            }
           		ol.children[circle].className = "current"
           }
	})
	
	左侧按钮
	arrow_l.addEventListener('click',function(){
		if(flag){
			flag = false
			如果到了最后复制的一张图片，我们的ul快速复原left为0
            if(num==0){
                ul.style.left = - (ul.children.length-1)*focusWidth+'px'
                num = ul.children.length-1
            }
            num--
            animate(ul,-num*focusWidth,function(){
            	flag = true
            })
            点击右侧按钮,小圆圈跟随变化
            circle--
            if(circle<0){
                circle = ul.children.length-1
            }
            for(var i = 0;i<ol.children.length;i++){
                ol.children[i].className = ""
            }
            ol.children[circle].className = "current"
		}
	})
	10、自动播放
	var timer = setInterval(function(){
		手动调用点击事件
		arrow_r.click()
	})
})
~~~

#### 7、节流阀

~~~dh
防止轮播图按钮连续点击造成播放过快
目的:当上一个函数动画内容执行完毕,再去执行下一个函数动画
核心思路:利用回调函数,添加一个变量来控制,锁住和解锁函数
var flag = true
利用回调函数 重新设置flag
~~~

#### 8、返回顶部

~~~dh
案例分析:
1、原先侧边栏是绝对定位
2、当页面滚动到一定的距离改为固定定位
3、页面继续滚动显示返回顶部
页面被卷去的头部可以通过window.pageYOffset获得，元素被卷去的头部是element.scrollTop获得

1、获取元素
var slidebar = document.querySelector('.slide-bar')
var banner = document.querySelector('.banner')
var main = document.querySelector('.main')
var goBack = document.querySelector('.goBack')
//一定要写到滚动的外面
var bannerTop = banner.offsetTop
//固定后应该变化的值
var slidebarTop = slidebar.offsetTop - bannerTop
var mainTop = main.offsetTop
2、页面滚动事件
document.addEventListener('scroll',function(){
	if(window.pageYOffset >= bannerTop){
		slidebar.style.position = "fixed"
		slidebar.style.top = slidebarTop + 'px'
	}else{
		slidebar.style.position = "absolute"
		slidebar.style.top = '300px'
	}
	4、当页面滚动到main盒子就显示goBack模块
	if(window.pageYOffset >= mainTop){
		goBack.style.display = "block"
	}else{
		goBack.style.display = "none"
	}
})
goBack.addeventListener('click',function(){
	//滚动窗口到文档中的指定位置
	animate(window,0)
})
function animate(obj,target,callback){
		当我们不断的点击按钮这个元素的速度会越来越快,因为开启了越来越多的定时器
		解决方案:让我们元素只有一个定时器执行
		先清除以前的定时器,只保留当前的一个定时器执行
		clearInterval(obj.timer)
        var obj.timer = setInterval(function(){
        (目标值-现在的位置) / 10 做为每次移动的距离步长,把步长改为整数
        var step = (target-window.pageYOffset) / 10
        step = step > 0 ? Math.ceil(step):Math.floor(step)
        if(window.pageYOffset == target){
            //停止动画 本质是停止定时器
            clearInterval(timer);
            if(callback){
            	callback()
            }
        }
        //obj.style.left = window.pageYOffset + step + 'px'
        window.scroll(0,window.pageYOffset + step)
    },30)
}
~~~

#### 9、筋斗云案例

~~~dh
1、利用动画函数做动画效果
2、原先筋斗云的起始位置是0
3、鼠标经过li的时候,把当前li的offsetLeft位置作为目标值即可
<div class="c-nav">
	<span class="cloud">
	<ul>
		<li class="current">
		<li>
		<li>
		
window.addEventListener('load',function(){
	var cloud = document.querySelector('.cloud')
	var c_nav = document.querySelector('.c-nav')
	var lis = c_nav.querySelectorAll('li')
	这个作为筋斗云的起始位置
	var current = 0
	2、给每个小li绑定事件
	for(var i = 0;i < lis.length;i++){
		(1)、鼠标经过把当前的li的位置作为目标值
		lis[i].addEventListener('mouseenter',function(){
			animate(cloud,this.offsetLeft)
		})
		鼠标离开就回到起始位置
		lis[i].addEventListener('mouseleave',function(){
			animate(cloud,current)
		})
		(2)鼠标点击的时候就把当前的位置作为目标值
		lis[i].addEventListener('click',function(){
			current = this.offsetLeft
		})
	}
})
~~~

# 移动端网页特效

#### 1、触屏事件

~~~mobile
1、常见的触屏事件
touchstart：手指触摸到一个dom元素时触发
touchmove:手指在dom元素上滑动时触发
touchend:手指从dom元素上离开时触发

2、事件对象
这类事件用于描述一个或多个触摸点，使开发者可以检测触摸点的移动,触点的增加或减少
touches:正在触摸屏幕的所有手指的列表
targetTouches:正在触摸当前DOM元素上的手指的一个列表
changedTouches:手指状态发生改变的列表
当手指离开的时候touches和targetTouches列表就没有了
重点记住targetTouches
~~~

#### 2、移动端拖动元素

~~~mobile
拖动原理:
手指移动中,计算出手指移动的距离。然后用盒子原来的位置+手指移动的距离
手指移动的距离:手指滑动的位置减去手指开始触摸的位置
var div = document.querySelector('div')
var startX = 0;//手指的初始位置
var startY = 0;
var x = 0//获得原来盒子的位置
var y = 0
div.addEventListener('touchstart',function(e){
	startX = e.targetTouches[0].pageX
	startY = e.targetTouches[0].pageY
	x = this.offsetLeft
	y = this.offsetTop
})
div.addEventListener('touchmove',function(e){
	var moveX = e.targetTouches[0].pageX - startX
	var moveY = e.targetTouches[0].pageY - startY
	this.style.left = x + moveX + 'px'
	this.style.top = y + moveY + 'px'
	e.preventDefault()阻止滚动屏幕
})
~~~

#### 3、移动端轮播图效果

~~~dh
classList返回元素的类名，该属性用于在元素中添加、移除及切换css类
element.classList.add('类名') 在后面添加不会覆盖以前的类名，前面不需要加.
element.classList.remove('类名') 删除类名
document.body.classList.toggle('bg') 点击切换类名

window.addEventListener('load',function(){
	1、获取元素
	var focus = document.querySelector('.focus')//焦点图模块
	var ul = focus.children[0]
	var ol = focus.children[1]
	//获取focus宽度
	var w = focus.offsetWidth
	2、利用定时器自动轮播图图片
	var index = 0
	var timer = setInterval(function(){
		index++
		var translateX = - index * w
		ul.style.transition = 'all .3s'
		ul.style.transform = 'translateX('+translateX+'px)'
	},2000)
	3、监听过渡完成的事件
	ul.addEventListener('transitionend',function(){
		//无缝滚动
		if(index >= 3){
			index = 0
			去掉过渡效果
			ul.style.transition = 'none'
			var translateX = - index * w
			ul.style.transform = 'translateX('+translateX+'px)'
		}else if(index<0){
			index = 2
			ul.style.transition = 'none'
			var translateX = - index * w
			ul.style.transform = 'translateX('+translateX+'px)'
		}
		小圆点跟随变化
		选出current类名 去掉
		ol.querySelector('li.current').remove('current')
		ol.children[index].classList.add('current')
	})
	4、手指滑动轮播图
	var startX = 0
	var moveX = 0
	var flag = false //如果用户手指移动过再去做判断否则不做判断效果
	ul.addEventListener('touchstart',function(e){
		startX = e.targetTouches[0].pageX
		手指触摸定制定时器
		clearInterval(timer)
	})
	ul.addEventListener('touchstart',function(e){
		moveX = e.targetTouches[0].pageX - startX
		var translatex = -index*w+moveX
		//手指拖动不需要过渡
		ul.style.transition = 'none'
		ul.style.transform = 'translateX('+translatex+'px)'
		flag = true
		e.preventDefault()//阻止滚动屏幕的行为
	})
	5、根据距离判断回弹还是播放上一张或者下一张
	ul.addEventListener('touchend',function(e){
		startX = e.targetTouches[0].pageX
		手指触摸定制定时器
		clearInterval(timer)
	})
	ul.addEventListener('touchstart',function(e){
		if(flag){
			if(Math.abs(moveX)>50){
				if(moveX>0){
					index--
				}else{
					index++
				}
				var translateX = -index*w+moveX
				ul.style.transition = 'all .3s'
				ul.style.transform = 'translateX('+translateX+'px)'
			}else{
				如果小于50就回弹
				var translateX = -index*w+moveX
				ul.style.transition = 'all 1s'
				ul.style.transform = 'translateX('+translateX+'px)'
			}
		}
		手指离开开启定时器
		clearInterval(timer)
		timer = setInterval(function(){
			index++
			var translateX = - index * w
			ul.style.transition = 'all .3s'
			ul.style.transform = 'translateX('+translateX+'px)'
		},2000)
	})
})
~~~

#### 4、移动端返回顶部效果

~~~dh
var goBack = document.querySelector('.goBack')
var nav = document.querySelector('nav')
window.addEventListener('scroll',function(){
	if(window.pageYOffset >= nav.offsetTop){
		goBack.style.display = "block"
	}else{
		goBack.style.display = "none"
	}
})
window.addEventListener('click',function(){
	window.scroll(0,0)
})
~~~

#### 5、click延迟

~~~dh
3、使用插件。fastclick插件解决300ms延迟
具体使用可以上github
~~~

![QQ截图20201125202750](C:\Users\庞苏兴\Desktop\psx\QQ截图20201125202750.png)

![QQ截图20201125202814](C:\Users\庞苏兴\Desktop\psx\QQ截图20201125202814.png)

#### 6、移动端开发插件

~~~dh
Swiper插件的使用 中文官网地址:https://www.swiper.com.cn
具体查看中文文档
~~~

![QQ截图20201125210651](C:\Users\庞苏兴\Desktop\psx\QQ截图20201125210651.png)

![QQ截图20201125213748](C:\Users\庞苏兴\Desktop\psx\QQ截图20201125213748.png)

#### 7、本地存储

~~~session
本地存储的特性:
1、数据存储在用户浏览器中
2、设置、读取方便、甚至页面刷新不丢失数据
3、容量比较大，sessionStroge约5M,localStroge约20M
4、只能存储字符串，可以将对象JSON.stringify()编码后存储

window.sessionStroge
生命周期为关闭浏览器窗口
在同一个窗口页面是可以共享的
以键值对的形式存储使用
sessionStroge.setItem('uname',val)
获取数据
sessionStroge.getItem('uname')
删除数据
sessionStroge.removeItem('uname')
删除所有数据
sessionStroge.clear()
~~~

# 面向对象

#### 1、面向对象编程的介绍

~~~obj
1、面向过程就是分析出解决问题所需要的步骤，然后用函数把这些步骤一步一步实现，使用的时候再一个一个的依次调用就好了。
2、面向对象就是把事务分解成一个一个对象，然后由对象之间分工与合作。
在面向对象程序开发思想中，每一个对象都是功能中心，具有明确分工
面向对象编程具有灵活、代码可复用、容易维护和开发的优点，更适合多个合作的大型软件项目
面向对象的特性:
封装、继承、多态

面向过程：
优点:
性能比面向对象高，适合跟硬件联系很紧密的东西
缺点:
没有面向对象易维护、复用、扩展
面向过程：
优点:
易维护、复用、扩展
缺点:
性能没有面向对象高
~~~

#### 2、ES6中的类和对象

~~~obj
面向对象的思维特点:
1、抽取对象共用的属性和行为组织(封装)成一个类
2、对类进行实例化，获取类的对象
在JavaScript中，对象是一组无序的相关属性和方法的集合，所有的事物都是对象。例如字符串、数值、数组、函数等
对象是由属性和方法组成:
属性:事物的特征
方法:事物的行为
在ES6中新增加了类的概念，可以使用class关键词声明一个类，之后以这个类来实例化对象
~~~

#### 3、创建类

~~~obj
语法:
class Name{
	constructor(a){
		this.a = a
	}
}
创建实例:
var xx = new name()
注意:类必须使用new实例化对象
类constructor构造函数，用于传递参数，返回实例化对象
var xx = new name('xx');
console.log(xx.a)
注意:
1、通过class关键字创建类，类名首字母大写
2、类里面有constructor函数用于接收参数
3、只要new的时候就会自动调用这个函数
~~~

#### 4、类中添加方法

~~~obj
class Name{
	constructor(a){
		this.a = a
	}
	say(song){
		console.log(this.name+song)
	}
}
var ldh = new Name('ldh')
ldg.say("冰雨")
~~~

#### 5、类的继承

~~~obj
class Father{
	constructor(x,y){
		this.x = x
		this.y = y
	}
	money(){
		console.log(100)
	}
	sum(){
		console.log(this.x+this.y)
	}
}
class Son extends Father{
	constructor(x,y){
		super(x,y);
	}
}
var son = new Son(1,2);
son.money();
son.sum();

super可以用于访问和调用对象父亲上的函数。也可以用于调用普通函数。
在继承中，先查看子类有没有这个方法，如果有先执行子类的，否则执行父类(就近原则)
class Father{
	say(){
		return '我是爸爸'
	}
}
class Son extends Father{
	say(){
		console.log(super.say()+'的儿子')
		//super.say()就是调用父亲中的普通函数
	}
}
var son = new Son();
son.say();

利用super调用父亲的构造函数
super必须在子类this之前调用
~~~

#### 6、使用类的注意事项

~~~obj
1、在ES6中类没有变量提升，所以必须先定义类，才能通过类实例化对象
2、类里面的共有的属性和方法一定要加this使用
3、类里面this的指向问题
4、constructor里面的this指向实例对象，方法里面的this指向这个方法的调用者
~~~

#### 7、面向对象tab栏案例

~~~obj
class Tab{
	constructor(id){
		//获取元素
		var that = this
		this.main = document.querySelector(id)
		this.add = this.main.querySelector('.tabadd')
		//li的父元素
		this.ul = this.main.querySelector('.firstnav ul:first-child')
		section父元素
		this.fsection = this.main.querySelector('.tabson')
		this.init()
	}
	init(){
		this.updateNode();
		this.add.onclick = this.addTab;
		for(var i = 0;i<this.lis.length;i++){
			this.lis[i].index = i
			this.lis[i].onclick = this.toggleTab;
			this.remove[i].onclick = this.removeTab;
			this.span[i].ondblclick = this.editTab;
			this.sections[i].ondblclick = this.editTab;
		}
	}
	因为我们动态添加元素,需要重新获取对应的元素
	updateNode(){
		this.lis = this.main.querySelectorAll('li')
		this.sections = this.main.querySelectorAll('section')
		this.remove = this.main.querySelectorAll('.icon-guanbi')
		this.span = this.main.querySelectorAll('.firstnav li span:first-child')
	}
	初始化让相关元素绑定事件
	1、切换功能
	toggleTab(){
		that.clearClass();
		this.className = 'liactive';
		that.sections[this.index].className = 'conactive';
	}
	clearClass(){
		for(var i = 0;i<this.lis.length;i++){
			this.lis[i].className = '';
			this.sections[i].className = '';
		}
	}
	2、添加功能
	addTab(){
		that.clearClass();
		var li = '<li class"liactive"><span>测试1</span><span class = "iconfont icon-guanbi></span></li>"';
		var section = '<section class="conactive">测试1</section>';
		把字符串追加到最后一个节点
		that.ul.insertAdjacentHTML('beforeend',li);
		that.fsection.insertAdjacentHTML('beforeend',section);
		that.init();
	}
	3、删除功能
	removeTab(e){
		e.stopPropagation();
		var index = this.parentNode.index;
		remove可以直接删除指定的元素
		that.lis[index].remove()
		that.sections[index].remove()
		that.init()
		当删除的不是选中的li的时候，原来选中的li保持不变
		if(document.querySelectot('.liactive')) return; 
		当我们删除了选中状态的li,让前一个li处于选中状态
		index--;
		手动调用点击事件
		that.lis[index] && that.lis[index].click();
	}
	4、修改功能
	edit(){
		var str = this.innerHTML;
		双击禁止选定文字
		window.getSelection ?window.getSelection().removeAllRanges():
		document.selection.empty();
		this.innerHTML = '<input type="text"/>';
		var input = this.children[0]
		input.value = str
		input.select();让文本框里面的文字处于选中状态
		当离开文本框的时候,就把文本框里面的值给span
		input.onblur = function(){
			this.parentNode.innerHTML = this.value
		}
		input.onkeyup = function(e){
			if(e.keyCode === 13){
				this.blur()
			}
		}
	}
}
~~~

![QQ截图20201129144833](C:\Users\庞苏兴\Desktop\psx\QQ截图20201129144833.png)

![QQ截图20201129145010](C:\Users\庞苏兴\Desktop\psx\QQ截图20201129145010.png)

#### 8、利用构造函数创建对象

~~~obj
function Star(uname,age){
	this.uname = uname
	this.age = age
	this.sing = function(){
		console.log('我会唱歌')
	}
}
var ldh = new Star('ldh',18);
1、实例成员就是构造函数内部通过this添加的成员，uname age sing就是实例成员
实例成员只能通过实例化的对象来访问
ldh.sing();
console.log(Star.uname)不可以通过构造函数来访问实例成员
console.log(ldh)
2、静态成员 在构造函数本身上添加的成员 sex就是静态成员
Star.sex = "男"
静态成员只能通过构造函数来访问,不能通过对象来访问
console.log(Star.sex);
注意:
1、构造函数用于创建某一类对象，首字母要大写
2、构造函数要和new一起使用
3、执行构造函数里面的代码，给新对象添加属性和方法
4、返回这个新对象(不需要return)
~~~

#### 9、构造函数的问题

~~~obj
构造函数很好用，但是存在浪费内存的问题

构造函数原型prototype
构造函数是通过原型分配的函数是所有对象所共享的，每一个构造函数都有一个prototype属性，指向另一个对象。我们可以把那些不变的方法，直接定义在prototype对象上，这样所有对象的实例就可以共享这些方法。
Star.prototype.sing = function(){
	console.log("我会唱歌")
}
一般情况下，我们的公共属性定义到构造函数里面，公共的方法我们放到原型对象上
~~~

#### 10、原型对象__proto__

~~~obj
对象会有一个属性__proto__指向构造函数的prototype原型对象
ldh.__proto__ === Star.prototype
~~~

#### 11、constructor构造函数

~~~obj
对象原型(__proto__)和构造函数(prototype)原型对象里面都有一个constructor属性，称为构造函数，因为他指回函数本身
constructor主要用于记录该对象引用于哪个构造函数，重新指回原来的构造函数
Star.prototype = {
	给原型对象赋值的是一个对象，则必须手动指回原来的构造函数
	constructor:Star,
	sing:function(){
		console.log("我会唱歌")
	}
}
console.log(Star.prototype.constructor)
console.log(ldh.__proto__.constructor)

~~~

![QQ截图20201201203417](C:\Users\庞苏兴\Desktop\psx\QQ截图20201201203417.png)

#### 12、原型链

~~~obj
1、只要是对象就有__proto__原型，指向原型对象
2、Star原型对象里面的__proto__原型指向的是Object.prototype
3、Object.prototype原型对象里面的__proto__原型指向为null
~~~

![QQ截图20201201204339](C:\Users\庞苏兴\Desktop\psx\QQ截图20201201204339.png)

#### 13、对象成员查找机制

~~~obj
查找机制遵循就近原则
~~~

![QQ截图20201201204733](C:\Users\庞苏兴\Desktop\psx\QQ截图20201201204733.png)

#### 14、原型对象中this指向问题

~~~obj
1、在构造函数中，里面的this指向的是对象实例 
2、原型对象函数里面的this 指向的是对象实例
~~~

#### 15、扩展内置对象

~~~obj
通过原型对象，对原来的内置对象进行扩展自定义方法。比如给数组增加自定义求和的功能
Array.prototype.sum = function(){
	var sum = 0
	for(var i = 0;i<this.length;i++){
		sum+=this[i]
	}
	return sum
}
var arr = [1,2,3]
console.log(arr.sum())
注意:在数组或者字符串内置对象不能给原型对象覆盖操作
~~~

#### 16、call()方法的作用

~~~obj
调用这个函数，并且修改函数运行时的this指向
1、call()可以调用函数
fn.call()
2、call()可以改变这个函数的this指向，此时这个函数的this就指向了o这个对象,同时接收传递参数
fn.call(o,1,2)
~~~

#### 17、利用父构造函数继承属性

~~~obj
1、父构造函数
function Father(uname,age){
	//this指向父构造函数的对象实例
	this.uname = uname
	this.age = age
}
function Son(uname,age,score){
	//this指向子构造函数的对象实例
	Father.call(this,uname,age)
	this.score = score
}
~~~

#### 18、利用原型对象继承方法

~~~obj
1、父构造函数
function Father(uname,age){
	//this指向父构造函数的对象实例
	this.uname = uname
	this.age = age
}
Father.prototype.money = function(){
	console.log(10000)
}
//Son.prototype = Father.prototype;这样的赋值会有问题，如果修改了子原型对象，父原型对象也会跟着改变
Son.prototype = new Father()
//如果利用对象的形式修改了原型对象，指回原来的原型对象
Son.prototype.constructor = Son
function Son(uname,age,score){
	//this指向子构造函数的对象实例
	Father.call(this,uname,age)
	this.score = score
}
Son.prototype.exam = function(){
	console.log("考试")
}
~~~

# 类的使用

#### 1、类的本质

~~~class
class本质还是函数，可以简单的认为类就是构造函数的另外一种写法
   类有原型对象prototype console.log(Star.prototype)
   同时有constructor指回构造函数本身 console.log(Star.prototype.constructor)
   类也可以通过原型对象添加方法 Star.prototype.sing = function(){}
   类创建的实例对象有__proto__原型指向 类的原型对象 console.log(ldh.__proto__==Star.prototype)
~~~

#### 2、ES5新增的方法

~~~class
数组方法():
迭代方法:forEach() map() filter() some() every();
array.foreach(function(currentValue,index,arr))
currentValue:数组当前项的值
index:数组当前项的索引
arr:数组对象本身
var arr = [1,2,3]
var sum = 0
arr.forEach(function(value,index,array){
	sum+=value
})
console.log(sum)

filter()方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有数组，主要用于筛选数组
直接返回的是一个新数组
array.filter(function(currentValue,index,arr))
currentValue:数组当前项的值
index:数组当前项的索引
arr:数组对象本身
var arr = [12,66,4,88]
var newArr = array.filter(function(value,index){
	return value>=20
})
console.log(newArr)

some()方法用于检测数组中的元素是否满足指定条件，查找数组中是否有满足条件的元素
返回值是布尔值，查到了就返回true，找不到就返回false
如果找到第一个满足条件的元素，则终止循环不在继续查找
currentValue:数组当前项的值
index:数组当前项的索引
arr:数组对象本身
var arr = [10,30,45]
var flag = arr.some(function(value){
	return value>=20
})
console.log(flag)

filter和some的区别
1、filter是查找满足条件的元素 返回的是一个数组 而且是把所有满足条件的元素返回出来
2、some也是查找满足条件的元素是否存在 返回的是一个布尔值 如果找到就终止循环
~~~

#### 3、查询商品案例

~~~class
1、获取相应的元素
var tbody = document.querySelector('tbody')
var search_price = document.querySelector('search_price')
var start = document.querySelector('start')
var end = document.querySelector('end')
var product = document.querySelector('.product')
var search_pro = document.querySelector('.search_pro')
setDate(data)
2、渲染数据到页面
function setDate(mydata){
	//先清空原来tbody的数据
	tbody.innerHTML = ''
	mydata.forEach(function(value){
	var tr = document.createElement('tr')
	tr.innerHTML = '<td>'+value.id+'</td><td>'+value.pname+'</td><td>'+value.price+'</td>'
	tbody.appendChild(tr)
})
}
search_price.addEventListener('click',function(){
	var newDate = data.filter(function(value){
		return value.price>=start.value && end.value<=end.value
		setDate(newDate)
	})
})
//根据商品名称查找商品
如果查询数组中唯一的元素,用some方法更合适，因为它找到这个元素就不再进行循环，效率更高
search_pro.addEventListener('click',function(){
	var arr = []
	data.some(function(value){
		if(value.pname === product.value){
			arr.push(value)
			return true
		}
	})
	//把拿到的数据渲染到页面
	setDate(arr)
})
~~~

#### 4、forEach和some区别

~~~class
1、在forEach中使用return不会终止迭代
2、在some里面遇到return true就是终止迭代 效率更高
~~~

#### 5、字符串方法

~~~class
1、trim()方法:去除字符串的两端的空白字符，这个方法不会影响源字符串本身，返回的是一个新的字符串 
console.log(str.trim())
btn.onclick = function(){
	var str = input.value.trim()
	if(str === '' ){
		alert('请输入内容')
	}else{
		console.log(str)
	}
}
~~~

#### 6、定义新属性或修改原来的属性

~~~class
Object.defineProperty(obj,prop,descriptor)
obj:必需。目标对象
prop:必需。需定义或修改属性的名字。
descriptor:必需。目标属性所拥有的特性。
第三个参数:
value:设置属性的值
writable:值是否可以重写 boolean
enumerable:目标属性是否可以被枚举 boolean
configurable:目标属性是否可以被修改或者再次修改特性 boolean

Object.defineProperty(obj,'num',{
	value:1000
})
Object.defineProperty(obj,'num',{
	writable:false
})
Object.defineProperty(obj,'address',{
	value:'aaa'
	writable:false
	如果enumerable为false 则不允许遍历 默认的值为false
	enumerable:false
	configurable为false 目标属性不能被修改
	configurable：false
})
~~~

# 函数进阶

#### 1、函数的定义和调用

~~~function
所有的函数都是FUnction对象的实例
1、自定义函数(命名函数)
function fn(){}
2、函数表达式(匿名函数)
var fun = function(){}
3、new Function('参数1','参数2'...,'函数体')
var fn = new Function('console.log(123)')
fn()

函数的调用
1、普通函数
function fn(){
	console.log('123')
}
fn()  fn.call()
2、对象的方法
var o = {
	sayHi:function(){
		console.log('123')
	}
}
o.sayHi()
3、构造函数
function Star(){}
new Star()
4、绑定事件的函数
btn.onclick = function(){}
5、定时器函数
setInterval(function(){},1000)
6、立即执行函数
(function(){
	console.log('123')
})()
~~~

#### 2、函数内this指向

![QQ截图20201206143542](C:\Users\庞苏兴\Desktop\psx\QQ截图20201206143542.png)

#### 3、改变函数内部this指向

~~~this
1、call方法调用一个对象，也可以改变函数this的指向
	call的主要作用可以实现继承
function Father(uname,age,sex){
	this.uname = uname
	this.age = age
	this.sex = sex
}
function Son(uname,age,sex){
	Father.call(this,uname,age,sex)
}	
	
var o = {
	name:"andy"
}
function fn(a,b){
	console.log(a+b)
}
fn.call(o,1,2)

2、apply方法调用一个函数，
fun.apply(thisArg,[argsArray])
thisArg:在fun函数运行时指定的this的值
argsArray:传递的值，必须包含在数组里面
返回值就是函数的返回值
但是它的参数必须是数组形式
var arr = [1,66,3,99,4]
var max = Math.max.apply(Math,arr)
console.log(max)

3、bind方法不会调用函数，但是能改变函数内部this指向
fun.bind(thisArg,arg1,arg2){
	thisArg:在fun函数运行时指定this的值
	arg:传递的参数
}
var o = {
	name:"andy"
}
function fn(a,b){
	console.log(a+b)
}
var f = fn.bind(o,1,2)
f()

如果有的函数我们不需要立即调用，但是又想改变this指向就用bind
var btn = document.querySelector('button')
btn.onclick = function(){
	this.disabled = true
	//var that = this
	setTimeout(function(){
		//that.disabled = false
		this.disabled = false
	}.bind(this),3000)
}

var btns = document.querySelector('button')
for(var i = 0;i < btns.length;i++){
	btns[i].onclick = function(){
		this.disabled = true
		setTimeout(function(){
			this.disabled = false
		}.bind(this),2000)
	}
}
~~~

#### 4、call apply bind总结

~~~function
相同点:
都可以改变函数内部this指向问题
区别点:
1、call和apply会调用函数，并且可以改变函数this指向
2、call在传递参数的时候是arg1、arg2的形式,apply必须是数组的形式[arg]
3、bind不会调用函数,可以改变this指向

主要应用场景:
1、call主要用于做继承
2、apply经常和数组有关系,借助于数学对象实现数组的最大值和最小值
3、bind不调用函数，但是想改变this指向。比如定时器内部的this指向
~~~

#### 5、严格模式

~~~function
在严格的条件下运行js代码
严格模式在ie10以上的版本的浏览器才会被支持，旧版本的会被忽略。
严格模式对正常的JavaScript语义做了一些修改:
1、消除了JavaScript语法的一些不合理、不严谨之处，减少一些怪异行为。
2、消除代码运行的一些不安全之处，保证代码运行的安全
3、提高编译器效率，增加运行速度
4、禁用了ECMAScript的未来版本可能会定义的一些语法，为未来新版本的JavaScript做好铺垫

严格模式可以应用到整个脚本或个别函数中。因此在使用时，我们可以将严格模式分为脚本开发严格模式和为函数开启严格模式两种情况。
1、为脚本开启严格模式:
为整个脚本文件开启严格模式，需要在语句之前放一个特定语句"use strict";或'use strict';
这样独立创建一个作用域而不影响其他script脚本文件:
<script>
	(function(){
		"use strict";
		var num = 10
		function fn(){}
	})()
</script>
2、给某个函数开启严格模式
<script>
	此时给fn函数开启了严格模式
    function fn(){
        "use strict";
    }
</script>
~~~

#### 6、严格模式的变化

~~~function
1、变量名必须先声明在使用
2、不能随意的删除已经定义好的变量
3、在严格模式下全局作用域中的函数this指向的是undefind
4、在严格模式下如果构造函数不加new调用，this会报错
5、new实例化的构造函数指向创建的对象实例
6、定时器里面的this指向的还是window
7、时间、对象还是指向调用者

函数变化
1、函数不能有重名的参数
2、不允许在非函数的代码块内声明函数
~~~

#### 7、高阶函数

~~~function
高阶函数是对其他函数进行操作的函数，它接收函数作为参数或将函数作为返回值输出。
<script>
	function fn(callback){
		callback&callback()
	}
	fn(function(){alert('hi')})
</script>
<script>
	function fn(callback){
		return function(){}
	}
	fn()
</script>

$("div").animate({
	left:500
},function(){
	$("div").css("backgroundColor","purple")
})
~~~

#### 8、闭包

~~~function
1、概念
闭包指有权访问另一个函数作用域中变量的函数。
简单理解就是一个作用域可以访问另外一个函数内部的局部变量
2、作用
延申了变量的作用范围
function fn(){
	var num = 10
	function fun(){
		console.log(num)
	}
	return fun;
	
	return function(){
		console.log(num)
	}
}
var f = fn()
f()
类似于 
var f = fun(){
	console.log(num)
}
~~~

#### 9、闭包案例

~~~function
1、点击li打印当前索引号
<ul class="nav">
	<li>榴莲</li>
	<li>臭豆腐</li>
	<li>鲱鱼罐头</li>
	<li>大猪蹄子</li>
</ul>
1、利用动态添加属性的方式
var lis = document.querySelector('.nav').querySelectorAll('li')
for(var i = 0;i<lis.length;i++){
	lis[i].index = i
	lis[i].onclick = function(){
		console.log(this.index)
	}
}
2、利用闭包的方式得到索引号
for(var i = 0;i<lis.length;i++){
	利用for循环创建了4个立即执行函数
	(function(i){
		lis[i].onclick = function(){
			console.log(i)
		}
	})(i)
}
2、3秒钟之后打印li内容
var lis = document.querySelector('.nav').querySelectorAll('li')
for(var i = 0;i<lis.length;i++){
	(function(i){
		setTimeout(function(){
			console.log(lis[i].innerHTML)
		},3000)
	})(i)
}
3、计算打车价格
var car = (function(){
	start = 13
	var total = 0
	return{
		price:function(n){
			if(n<=3){
				total = start
			}else{
				total = (n-3)*5+start
			}
			return total;
		},//正常价格
		yd:function(flag){
			return flag ? total+10:total;
		}//拥堵费用
	}
})()
console.log(car.price(5))
console.log(car.price(true))
~~~

#### 10、递归

~~~function
如果一个函数在内部可以调用其本身，那么这个函数就是递归函数
由于递归容易发生栈溢出，所以要加退出条件return
var num = 1;
function fn(){
	console.log()
	if(num == 6){
		return;里面必须加退出条件
	}
	num++
	fn()
}
fn();
~~~

#### 11、递归案例

~~~function
1、利用递归求1-n的阶乘
function fn(n){
	if(n==1){
		return 1;
	}
	return n * f(n-1)
}
console.log(fn(3));
2、利用递归求斐波那契数列
function fb(n){
	if(n===1||n===2){
		return 1;
	}
	return fb(n-1)+fb(n-2);
}
3、利用递归遍历数据
var data = [{
	id:1,
	name:'家电',
	goods:[{
		id:11,
		gname:'冰箱'
	},{
		id:12,
		gname:'洗衣机'
		}
	]
}，{
	id:2,
	name:'服饰'
}
]
1、利用forEach去遍历里面的每一个对象
function getID(){
	var o = {};
	json.forEach(function(item){
		if(item.id == id){
			o = item
			2、我们想要得到里层的数据
		}else if(item.goods && item.goods.length>0){
			o = getID(item.goods,id);
		}
	})
	return o
}
getID(data,1)
getID(data,2)
getID(data,11)
~~~

#### 12、浅拷贝和深拷贝

~~~function
1、浅拷贝知识拷贝一层，更深层次对象级别的只拷贝引用
2、深拷贝拷贝多层，每一级别的数据都会拷贝
var obj = {
	id:1,
	name:'andy',
	msg:{
		age:18
	}
};
1、浅拷贝
var o = {};
for(var k in obj){
	o[k] = obj[k]
}
//console.log(o)
Object.assign(o,obj);做浅拷贝
2、深拷贝
var o = {}
function deepCopy(newobj,oldobj){
	for(var k in oldobj){
		判断是那种数据类型
		var item = oldobj[k];
		判断是不是数组
		if(item instanceof Array){
			newobj[k] = []
			deepCopy(newobj[k],item)
		}else if(item instanceof Object){
			判断这个值是不是对象
			newobj[k] = {}
			deepCopy(newobj[k],item)
		}else{
			newobj[k] = item
		}
	}
}
deepCopy(o,obj)
console.log(o)
~~~

#### 13、正则表达式

~~~exp
概念:
正则表达式是用于匹配字符中字符组合的模式。在JavaScript中，正则表达式作为对象存在的。
作用:
匹配字符、过滤敏感词、获取想要的部分
特点:
1、灵活性、逻辑性和功能性非常的强
2、可以迅速地用极简的方式达到字符串的复杂控制

创建正则表达式:
1、通过调用RegExp对象的构造函数创建
var 变量名 = new RegExp(/表达式/)
2、利用正则表达式字面量创建
var rg = /123/
3、test()正则对象方法，用于检测字符串是否符合该规则。
regexobj.test(str)
regexobj:正则表达式
str:测试文本

特殊字符:
即在正则表达式中具有特殊意义的专用符号。如^、$、+
边界符:
^表示匹配首行的文本
$表示匹配行尾的文本
var rg = /^abc$/精准匹配
~~~

#### 14、字符类

~~~exp
字符类[]，表示有一系列字符可供选择，只要匹配其中一个就可以了
var rg = /[abc]/ 只要包含a b c都返回true
rg.test('andy')
rg.test('baby')
var rg = /^[abc]$/ 三选一
var rg = /^[a-z]$/ -表示一个范围，26个字母中的一个
var rg = /^[a-zA-Z0-9_-]$/ 26个字母中的一个不区分大小写 或者0-9 或者_-
var rg = /^[^a-zA-Z0-9_-]$/ 如果中括号里面有^表示取反的意思
~~~

#### 15、量词符

~~~function
量词符:用来设定某个模式出现的次数
量词:*(重复零次或者更多次)、+(重复一次或者更多次)、?(重复零次或者一次)
	{n}(重复n次)、{n,}(重复n次或者更多次)、{n,m}(重复n到m次)
var rg = /^[a-zA-Z0-9_-]{6,16}$/
{6,16}中间不能有空格
~~~

#### 16、用户名验证

~~~function
var rg = /^[a-zA-Z0-9_-]{6,16}$/
var uname = document.querySelector('.uname');
var span = document.querySelector('span')
uname.onblur = function(){
	if(rg.test(this.value)){
		span.className = "right"
		span.innerHTML = "用户名输入正确"
	}else{
		span.className = "wrong"
		span.innerHTML = "用户名输入错误"
	}
}
~~~

#### 17、括号总结

~~~function
中括号:字符集合，匹配方括号中的任意字符
大括号:量词符，里面表示重复次数
小括号:表示优先级
~~~

#### 18、正则表达式中的预定义类

~~~function
预定义类指的是某些常见模式的简写方式
\d 匹配0-9之间的任一数字 相当于[0-9]
\D 匹配除0-9以外的任一字符 相当于[^0-9]
\w 匹配任一的字母、数字和下划线 相当于[0-9a-zA-z_]
\W 匹配除任一的字母、数字和下划线任一字符 相当于[^0-9a-zA-z_]
\s 匹配空格(包括换行符、制表符、空格符)等 相当于[\t\r\n\v\f]
\S 匹配非空格的字符 相当于[^\t\r\n\v\f]

座机验证:两种格式(010-12345678) 或者 (0530-1234567)
var reg = /^\d{3}-\d{8} | \d{4}-\d{7}$/
~~~

#### 19、表单验证

~~~function
window.onload = function(){
	var regtel = /^1[3|4|5|7|8]\d{9}$/;手机验证
	var regqq = /^[1-9]{4,}$/qq验证 腾讯qq从10000开始
	var regnc = /^[\u4e00-\u9fa5]{2,8}$/昵称是中文
	var regmsg = /^\d{6}$/短信
	var regpwd = /^[a-zA-Z0-9_-]{6,16}$/登录密码
	var tel = document.querySelector('.tel');
	var qq = document.querySelector('.qq');
	var nc = document.querySelector('.nc')
	var msg = document.querySelector('.msg')
	var pwd = document.querySelector('.pwd')
	var surepwd = document.querySelector('.surepwd')
	regexp(tel,regtel);手机号码
	regexp(qq,regqq);qq
	regexp(nc,regnc);昵称
	regexp(msg,regmsg);短信验证
	regexp(pwd,regpwd);登录密码
	//表单验证的函数
	function regexp(ele,reg){
		ele.onblur = function(){
		if(reg.test(this.value)){
			//下一个兄弟添加样式
			this.nextElementSibling.className = 'success'
			this.nextElementSibling.innerHTML = '<i class = "success"></i>恭喜输入正确'
		}else{
			this.nextElementSibling.className = 'error'
			this.nextElementSibling.innerHTML = '<i class = "error"></i>格式输入错误'
			}
		}
	}
	surepwd.onblur = function(){
		if(this.value == pwd.value){
			this.nextElementSibling.className = 'success'
			this.nextElementSibling.innerHTML = '<i class = "success"></i>恭喜输入正确'
		}else{
			this.nextElementSibling.className = 'error'
			this.nextElementSibling.innerHTML = '<i class = "error"></i>密码输入不一致'
		}
	}
}
~~~

#### 20、正则替换

~~~function
replace返回的是一个替换新字符
/表达式/[switch]
g:全局匹配
i:忽略大小写
gi:
var text = document.querySelector('textarea')
var btn = document.querySelector('button')
var div = document.querySelector('div')
btn.onclick = function(){
	div.innerHTML = text.value.replace(/激情|gay/g,'**')
}
~~~

# ES6

#### 1、let关键字

~~~es
用于声明变量的关键字
1、let声明的变量处于块级有效
   var不具有这个特点
   防止循环变量变成全局变量
if(true){
	let b = 10
}
console.log(b)错误
2、不存在变量的提升
console.log(a)a is not defind
let a = 10
3、暂时性死区
var tmp = 123
if(true){
	tmp = "abc"
	let tmp
}
tmp is not defind
~~~

#### 2、let关键字面试题

~~~let
1、
var arr = []
for(var i = 0;i<2;i++){
	arr[i] = function(){
		console.log(i)
	}
}
arr[0]()
arr[1]()
此题的关键在于变量i是全局的，函数执行时输出的都是全局作用域下的值。
2、
let arr = []
for(let i = 0;i<2;i++){
	arr[i] = function(){
		console.log(i)
	}
}
arr[0]()
arr[1]()
此题的关键在于每次循环都会产生一个块级作用域，每个块级作用域中的变量都是不同的，函数执行时输出的是自己上一级作用域下的i值。
~~~

#### 3、const关键字

~~~const
作用:声明常量，就是值不能变化的量
1、具有块级作用域
if(true){
	const b = 10
}
console.log(b)b is not defind
2、声明常量时必须要赋值
const PI;
3、常量赋值以后，值是不可以修改的
const PI = 3.14;
PI = 100;
~~~

#### 4、let、const、var的区别

![QQ截图20201210185454](C:\Users\庞苏兴\Desktop\psx\QQ截图20201210185454.png)

#### 5、解构赋值

~~~es
let ary = [1,2,3]
let [a,b,c,d,e] = ary;
d,e=undefined
~~~

#### 6、对象解构

~~~es
let person = {name:'zhangsan',age:20}
let {name,age} = person
name = 'zhangsan'
age = 20

let {name:myName,age:myAge} = person //name 用于属性匹配
myName = 'zhangsan'
myAge = 20
~~~

#### 7、箭头函数

~~~es
箭头函数是用来简化函数定义语法的
const fn = ()=>{
	console.log()
}
fn()
函数体中只有一句代码，且函数的执行结果就是返回值，可以省略大括号
const sum = (num1,num2)=>num1+num2
如果形参只有一个,可以省略小括号
const fn = v =>v
~~~

#### 8、箭头函数中的this指向

~~~es
箭头函数不绑定this，箭头函数中的this，指向的就是函数定义位置的上下文this
const obj = {name:'张三'}
function fn(){
	console.log(this)
	return ()=>{
		console.log(this)
	}
}
const resFn = fn.call(obj)
resFn()

面试题:
var obj = {
	age:20,
	say:()=>{
		alert(this.age)
	}
}
obj.say()undefined
对象是不能产生作用域的，this指向的是window
~~~

#### 9、剩余参数

~~~es
将一个不定数量的参数表示为一个数组
function sum(first,...args){
	console.log(first) 10
	console.log(args) [20,30]
	let total = 0;
	args.forEach(item=>{
		total+=item
	})
	return total
}
sum(10,20,30)
~~~

#### 10、剩余参数和解构配合使用

~~~es
let students = ['wangwu','zhangsan','lisi']
let [s1,...s2] = students
console.log(s1) wangwu
console.log(s2) zhangsan、lisi
~~~

#### 11、扩展运算符

~~~es
扩展运算符可以将数组转化为用逗号分隔的参数序列
let ary = [1,2,3]
console.log(...ary) 1 2 3

合并数组:
方法一
let ary1 = [1,2,3]
let ary2 = [3,4,5]
let ary3 = [...ary1,...ary2]
方法二:
ary1.push(...ary2)

将伪数组转化为真正的数组
let oDivs = document.getElementsByTagName('div')
oDivs = [...oDivs]
let arr = {
	'0':'a',
	'1':'b',
	'2':'c',
	length:3
}
let arr2 = Array.from(arr)//['a','b','c']
let arr = {
	'0':1,
	'1':2,
	length:2
}
var ary = Array.from(arr,item=> item *2)//2,4
~~~

#### 12、find方法

~~~es
find用于找出第一个符合条件的数组成员，如果没有找到就返回undefined
输出对象
let ary = {[
	id:1,
	name:'zhangsan'
]}
let target = ary.find((item,index)=>item.id == 2)
~~~

#### 13、findIndex方法

~~~es
findIndex用于找出第一个符合条件的数组成员的位置，如果没有找到就返回-1
let ary = [1,5,10,15]
let index = ary.findIndex((value,index)=>value>9)
console.log(index)//2
~~~

#### 14、includes方法

~~~es
表示某个数组是否包含给定的值，返回布尔值
[1,2,3].includes(2)true
~~~

#### 15、模板字符串

~~~es
使用反引号定义模板字符串
let name = `zhangsan`
模板字符串可以解析变量
let name = '张三'
let sayhello = `hello,my name is ${name}`
模板字符串可以换行
let result = {
	name:'zhangsan',
	age:20
}
let html = `
	<div>
		<span>${result.name}</span>
		<span>${result.age}</span>
	</div>
`
在模板字符串中可以调用函数
let greet = `${sayhello()}`
~~~

#### 16、startsWith()和endsWith()

~~~es
let str = 'hello world!'
str.startsWith('hello') true
str.endsWith('!') true
~~~

#### 17、repeat方法

~~~es
repeat(n)重复n次
'x'.repeat(3) 'xxx'
console.log("y".repeat(5))
~~~

#### 18、set数据结构

~~~es
set数组里面的值是唯一的，不重复的
const set = new Set([1,2,1,5,3])
~~~

![QQ截图20201210200515](C:\Users\庞苏兴\Desktop\psx\QQ截图20201210200515.png)















