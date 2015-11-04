<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
	<title>Document</title>
	<style>
	 *{margin:0;padding:0;}
     .head{font-size:12px;padding:6px 0 0 10px;}
     #login_box{width:300px;height:150px;background:#eee;
     border:1px solid #ccc;position:absolute;left:50%;top:50%;margin-left:-150px;margin-top:-75px;display:none;}
     #login_box p{height:20px;border-bottom:1px solid #ccc;font-size:12px;padding:6px 0 0 5px;font-weight:bold;}
     #close{width:14px;height:14px;position:absolute;right:4px;top:6px;}
     #close a:link,#close a:hover,#close a:visited,#close a:focus{text-decoration: none;color: #ccc;}
	</style>
	<script>
      window.onload=function(){
      	var login_btn=document.getElementById('login'),
      	    login_box=document.getElementById('login_box'),
      	    close=document.getElementById('close');
      	// 封装添加事件监听程序
        function addEvent(ele,type,handler){
           // 执行代码
           if(ele.addEventListener){
               ele.addEventListener(type,handler,false);
           }else if (ele.attachEvent){
               ele.attachEvent('on'+type,handler);
           }else{
               ele['on'+type]=handler;
           }
      	}

        // 显示登录层函数
      	function showLogin(){
            login_box.style.display='block';
        }
        // 隐藏登录层函数
        function hideLogin(){
          // 执行代码
            login_box.style.display='none';
        }
        addEvent(login_btn,'click',showLogin);
        addEvent(close,'click',hideLogin);

        //点击登录按钮显示登录层 
        // 执行代码
        //点击关闭按钮隐藏登录层
        // 执行代码
      };
	</script>
</head>
<body>
	<div class="head">亲，您好！<input type="button" value="登 录" id="login"></div>
	<div id="login_box">
		<p>用户登录</p><span id="close"><a href="#">x</a></span>
	</div>
</body>
</html>