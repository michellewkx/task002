/*
	Description:
	util.js,written by Michelle.
*/

//－－－－－－－－－－判断arr是否为一个数组，返回一个bool值－－－－－－－－－－
function isArray (arr) {
	return Object.prototype.toString.call(arr)==="[object Array]";
}

//－－－－－－－－－－ 判断fn是否为一个函数，返回一个bool值－－－－－－－－－－
function isFunction (fn) {
	return typeof(fn)==='function';
}

//－－－－－－－－－－－js递归实现深拷贝－－－－－－－－－－－－－－－－－－－－
function cloneObject (src) {
	if(typeof(src)!='object')
		return src;
	var newObj=new Object();
	for(attr in src){
		newObj[attr]=cloneObject(src[attr]);
	}
	return newObj;
}

//－－－－－－－－－－－－－－－－数组去重－－－－－－－－－－－－－－－－－－－
function uniqArray(arr) {
    var newArr = new Array;
    for(i in arr){
    	if(newArr.indexOf(arr[i])==-1)
    		newArr.push(arr[i]);
    }
    return newArr;
}

//-----------------------trim函数，去除字符串空格-----------------------
function simpletrim(str){
    for (var i = 0; i < str.length; i++) {
        if(str.charAt(i)!=" " && str.charAt(i)!="   "){
            break;
        }
    };
    var str1=str.substring(i,str.length);

    for (var j = str1.length-1; j >=0; j--) {
        if(str1.charAt(j)!=" " && str1.charAt(j)!="   "){
            break;
        }
    };
    var str2=str1.substring(0,j+1);
    return str2;
} 

//------------------------正则表达式trim----------------------------------
function trim (str) {
	return str.replace(/\s+/,'');
}


// 实现一个遍历数组的方法，针对数组中每一个元素执行fn函数，并将数组索引和元素作为参数传递
// 其中fn函数可以接受两个参数：item和index
function each(arr, fn) {
    for(i in arr){
    	fn(arr[i],i);
    }
}

// 获取一个对象里面第一层元素的数量，返回一个整数
function getObjectLength(obj) {
	var i=0;
	for(index in obj){
		i++;
	}
	return i;
}


// 正则表达式判断是否为邮箱地址
function isEmail(emailStr) {
    var pattern=/\w+@\w+.com/;
    console.log(pattern.test(emailStr));
}

// 正则表达式判断是否为手机号
function isMobilePhone(phone) {
    var pattern = /1[3,5,8]\d{9}/;
    console.log(pattern.test(phone));
}

//DOM

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    var oldClassName = element.className.split(' ');
    for (var i = 0; i < oldClassName.length; i++) {
    	if(oldClassName[i]==newClassName)
    		return;
    };
        oldClassName.push(newClassName);
        oldClassName.join(' ');
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
	var newClassNames=[];
    var className=oldClassName.split(' ');
    for (var i = 0; i < className.length; i++) {
    	if (className[i]==oldClassName) {
    		continue;
    	}
    	newClassNames.push(className[i]);
    };
    element.className=newClassNames.join(' ');

}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    return element.parentNode===siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    var obj=element.getBoundingClientRect();
    var x=obj.left;
    var y=obj.top;
    return {'x':x,'y':y};
}


//---------------实现一个简单的Query----------------------------
function $(selector) {
  return document.querySelector(selector);
}


//事件处理
// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if(event.addEventListener){
    	element.addEventListener(event,listener,false);
    }else if(event.attachEvent){
    	element.attachEvent('on'+event,listener);
    }else{
    	element["on"+event]=listener;
    }
}


// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if(element.removeEventListener){
    	element.removeEventListener(event,listener,false);
    }else if (element.detachEvent){
    	element.detachEvent('on'+event,listener)
    }else {
    	element['on'+event]=null;
    }
}

// 实现对click事件的绑定
function addClickEvent(element, listener) {
    if(element.addEventListener){
    	element.addEventListener('click',listener,false);
    }else if(element.attachEvent){
    	element.attachEvent('onclick',listener);
    }
    else{
    	element['on'+click]=listener;
    }
}

// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    if(element.addEventListener){
    	element.addEventListener('keydown',keyfun,false)
    }
    else if(element.attachEvent){
    	element.attachEvent('onkeydown',keyfun);
    }else{
    	element.onkeydown=listener;
    }
    function keyfun (e) {
    	// body...
    	var e = e || window.event;
    	if (e.keyCode==13) {
    		listener();
    	};
    }
	}


// 事件代理
function delegateEvent(element, tag, eventName, listener) {
    addEvent(element,eventName,delegateFun);
    function delegateFun(e){
    	var e = e || window.event;
    	var target=e.target || e.srcElement;
    	if(target.nodeName.toLowerCase()==tag)
    		listener.apply(target,arguments);
    }
}

//BOM
// 判断是否为IE浏览器，返回-1或者版本号
function isIE() {
    if (navigator.appName=='IE') {
    	return navigator.appVersion;
    };
    return -1;
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    ddocument.cookie=cookieName+'='+cookieValue+'; expries='+((expiredays==null) ? "":exdate.toGMTString())+'; path=/';
}

// 获取cookie值
function getCookie(cookieName) {
    var cookies=document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var userData=cookies[i].split('=');
        if (userData[0]==cookieName) {
            return userData[1];
        };
    };
    return '';
}

//ajax
function ajax(url,options,type){
    var oAjax=null;
    var type=type || "GET";
    //alert(type);
    if(window.XMLHttpRequest){
        oAjax=new XMLHttpRequest();

    }
    else{
        oAjax=new ActiveXObject('Microsoft.XMLHTTP');
    }

    oAjax.onreadystatechange=function(){
        if (oAjax.readyState==4) {
            if (oAjax.status==200) {
                options.onsuccess(oAjax.responseText);
            } 
            else{
                options.onfail();
            };
        };
    }

    url=url+"?name="+options.data.name+"&password="+options.data.password+"&t="+Math.random();
    oAjax.open(type,url,true);
    oAjax.send();
}


// 接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
// addEvent(element, event, listener) -> $.on(element, event, listener);
// removeEvent(element, event, listener) -> $.un(element, event, listener);
// addClickEvent(element, listener) -> $.click(element, listener);
// addEnterEvent(element, listener) -> $.enter(element, listener);
// degetateEvent(element, tag, eventName, listener)->$.delegate(element, tag, eventName, listener);
var $ = {
	//// 给一个element绑定一个针对event事件的响应，响应函数为listener
			on:function(element, event, listener) {
				    if(element.addEventListener){
				    	element.addEventListener(event,listener,false);
				    }else if(element.attachEvent){
				    	element.attachEvent('on'+event,listener);
				    }else{
				    	element["on"+event]=listener;
				    }
				},
	//移除element对象对于event事件发生时执行listener的响应
			un:function(element, event, listener) {
				    if(element.removeEventListener){
				    	element.removeEventListener(event,listener,false);
				    }else if (element.detachEvent){
				    	element.detachEvent('on'+event,listener)
				    }else {
				    	element['on'+event]=null;
				    }
				},
			

	// 实现对click事件的绑定
  			click:function(element, listener) {
    				if(element.addEventListener){
			    	element.addEventListener('click',listener,false);
			    }else if(element.attachEvent){
			    	element.attachEvent('onclick',listener);
			    }
			    else{
			    	element['on'+click]=listener;
			    }
			},

// 实现对于按Enter键时的事件绑定
			enter:function(element, listener) {
				    if(element.addEventListener){
				    	element.addEventListener('keydown',keyfun,false)
				    }
				    else if(element.attachEvent){
				    	element.attachEvent('onkeydown',keyfun);
				    }else{
				    	element.onkeydown=listener;
				    }
				    function keyfun (e) {
				    	// body...
				    	var e = e || window.event;
				    	if (e.keyCode==13) {
				    		listener();
				    	};
				    }
	   		},

//事件代理   
			delegate:function(element, tag, eventName, listener) {
			    addEvent(element,eventName,delegateFun);
			    function delegateFun(e){
			    	var e = e || window.event;
			    	var target=e.target || e.srcElement;
			    	if(target.nodeName.toLowerCase()==tag)
			    		listener.apply(target,arguments);
			    }
			  }
	   	    }

