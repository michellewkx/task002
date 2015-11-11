var button=document.getElementsByTagName('button')[0];
var myDate=new Date();
var oDate=myDate.getDate();
var oMonth=myDate.getMonth()+1;
var oYear=myDate.getFullYear();
var curDate=document.createElement('p');
var result=document.getElementById('result');
curDate.innerHTML=("当前日期为:"+oYear+'-'+oMonth+'-'+oDate);
document.getElementsByTagName('body')[0].appendChild(curDate);
$.on(button,'click',showTimeBysec);
function showTimeBysec () {
	window.setInterval(showTime, 1000);
	}
function showTime () {
	if(document.getElementById('timer').focus==true){
		return;
	}
	//获取文本框内输入的内容
	var oInput=document.getElementById('timer').value;
	//转化为时间
	var dateArr = oInput.split('-');
	var dateStr=dateArr.join(',');
	var inDate=new Date(dateStr);
	var start=new Date();
	//计算与输入时间的差值
	var elapsed=inDate-start;
	var eDay=Math.floor(elapsed/1000/60/60/24);
	var eHour=Math.floor((elapsed-eDay*1000*60*60*24)/1000/60/60);
	var eMin=Math.floor((elapsed-eDay*1000*60*60*24-eHour*1000*60*60)/1000/60);
	var eSec=Math.floor((elapsed-eDay*1000*60*60*24-eHour*1000*60*60-eMin*1000*60)/1000);
	//转换成标准格式，并插入文本
	result.innerHTML=('距离'+oInput+'还有'+eDay+"天"+eHour+"小时"+eMin+"分钟"+eSec+"秒");
}