window.onload =function () {
	var container=document.getElementById('container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev =document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var animated=false;
	var timer;

	function animate (offset) {
		animated=true;
		var time=100;
		var interval=1;
		var speed = offset/(time/interval);
		newLeft=parseInt(list.style.left)+offset;

		function go () {
			if (speed<0&&parseInt(list.style.left)>newLeft || speed>0&&parseInt(list.style.left)<newLeft) {
				list.style.left = parseInt(list.style.left)+speed+'px';
				setTimeout(go, interval);
			}
			else{
				list.style.left=newLeft+"px";
				if(newLeft>-1280){
					list.style.left=-7680+'px';
					}
				if(newLeft<-7680){
					list.style.left=-1280+'px';
					}
					animated=false;
				}			
			}	
			go();
		}
	function showButton () {
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i].className=='on') {
				buttons[i].className='';
				break;
			};
		};
		buttons[index-1].className='on';
	}

	function play () {
		timer = setInterval(function(){
			next.onclick();	
		}, 3000)
	}
	function stop(){
		clearInterval(timer);
	}

	prev.onclick=function () {
		
		if(animated){return;}
			if (index==1) {
				index=6;
			}
			else index-=1; 
			showButton();
			animate(1280);
		
		
	}
	next.onclick=function () {
		
		if (animated) {return;}
			if (index==6) {
				index=1;
			}
			else index+=1; 
			showButton();
			animate(-1280);
		
		
	}
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].onclick=function () {
			if (animated) {return};
			if (this.className=='on') {return};
			var myIndex = parseInt(this.getAttribute('index'));
			var offset = (myIndex-index)*(-1280);
				 animate(offset);
				 index=myIndex;
           		 showButton();
			}
           		
		}
	container.onmouseover = stop;
	container.onmouseout = play;
	play();
	};
	