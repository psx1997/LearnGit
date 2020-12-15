# ES6的使用

#### 1、数组

~~~arr
1、map映射:
let arr = [12,5,8]
let result = arr.map(item=>{
	return item * 2;
});
alert(result);

let score = [19,85,99,25,90]
let result = score.map(item=>item>=60?'及格'?'不及格')
alert(result)

2、reduce汇总
let arr = [12,69,180,8763]
let result = arr.reduce(function(tmp,item,index){
	return tmp+item;
})
alert(result);总和

3、过滤filter
let arr = [12,69,180,8763]
let result = arr.filter(item=>item%3==0)
alert(result)

4、forEach遍历
let arr = [12,69,180,8763]
arr.forEach((item,index){
	alert(index+':'+item)
})
~~~

#### 2、字符串

~~~str
1、startsWith()方法
let str = 'abc'
alert(str.startsWith('a'))true

2、endsWith()方法
let str = '1.txt'
alert(str.endsWith('.txt'))true

3、字符串模板
let a = 12
let str = `a${a}bc`
alert(str)a12bc

let title = '标题'
let content = '内容'
let str2 = `<div>
	<h1>${title}</h1>
	<p>${content}</p>
	</div>
`
~~~

#### 3、面向对象

~~~obj
Class User{
	constructor(name,pass){
		this.name = name;
		this.pass = pass;
	}
	showName(){
		alert(this.name)
	}
	showPass(){
		alert(this.pass)
	}
}
var u1 = new User('blue','123456')
u1.showName()
u1.showPass()
继承
class VipUser extends User{
	constructor(name,pass,level){
		super(name,pass);
		this.level = level;
	}
	showLevel(){
		alert(this.level);
	}
}
var v1 = new User('blue','123456',3)
v1.showName()
v1.showPass()
v1.showLevel()
~~~

#### 4、json

~~~json
let json = {a:12,b:5}
alert(JSON.stringify(json))//json转化成字符串

json的标准写法
1、只能用双引号
2、所有的名字都必须用引号包起来
{"a":12,"b":5}
let str = '{"a":12,"b":5}'
alert(JSON.parse(str))

json简写
名字和值一样的
let a = 12;
let b = 5;
let json = {a,b,c:55};
console.log(json)

json{
    a:5,
    show(){
        alert(this.a)
    }
}
json.show()
~~~

#### 5、promise

~~~html
promise一次读取一堆
1、
let p = new Promise(function(resolve,reject){
	$.ajax({
		url:'arr.txt',
		dataType:'json',
		success(arr){
			resolve(arr)
		},
		error(arr){
			reject(arr)
		}
	})
})
let p2 = new Promise(function(resolve,reject){
	$.ajax({
		url:'arr.txt',
		dataType:'json',
		success(arr){
			resolve(arr)
		},
		error(arr){
			reject(arr)
		}
	})
})
p.then(function(arr){
	alert('成功'+arr)
},function(err){
	alert('失败'+err)
})

Promise.all([p1,p2]).then(function(arr){
	alert('全部成功了')
	console.log(arr)
},function(){
	alert('至少有一个失败了')
})

2、
function createPromise(url){
        let p = new Promise(function(resolve,reject){
        $.ajax({
            url,
            dataType:'json',
            success(arr){
                resolve(arr)
            },
            error(arr){
                reject(arr)
            }
        })
    })
}
Promise.all([
	createPromise('arr.txt'),
	createPromise('arr.txt')
	]).then(function(arr){
		alert('全部成功了')
		console.log(arr)
    },function(){
		alert('至少有一个失败了')
})
3、
Promise.all([
	$ajax({url:'arr.txt',dataType:'json'}),
	$ajax({url:'arr.txt',dataType:'json'})
	]).then(function(arr){
		let [arr,json] = results'
		alert('全部成功了')
		console.log(arr,json)
    },function(){
		alert('至少有一个失败了')
})
4、
Promise.race 竞速
谁先调用保存数据 
~~~

#### 6、generator生成器

~~~gen
generator-生成器 可以实现让函数走走停停
function *show(){
	alert('a')
	yield;放弃
	alert('b')
}
let genObj = show()
genObj.next()

yield:
传参
function *show(){
	alert('a')
	let a =yield;放弃
	alert('b')
	alert(a)5
}
let genObj = show()
genObj.next(12)没法给yield传参
genObj.next(5)
返回
function *show(){
	alert('a')
	yield 12;放弃
	alert('b')
	return 55;
}
let genObj = show()
let res1 = genObj.next()
{value:12,done:false}
let res2 = genObj.next()
{value:55,done:true}
~~~

#### 7、runner

~~~run
cnpm i yield-runner-blue
带逻辑的获取
runner(function *(){
	let data1 = yield $ajax({url:'1.txt',dataType:json})
	let data2 = yield $ajax({url:'2.txt',dataType:json})
	let data3 = yield $ajax({url:'3.txt',dataType:json})
	console.log(data1,data2.data3)
})
~~~

