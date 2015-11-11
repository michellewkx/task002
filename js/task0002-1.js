var button = document.getElementById('button');
var form = document.getElementsByTagName("form")[0];
var inf = document.getElementById('inf');
var result = document.getElementById('result');
var txtarea = document.getElementById('hobby');
button.addEventListener('click', showValue);

function delNull (Arr) {
	  for (var i = 0; i < Arr.length; i++) {
		if (Arr[i]=='') {
			Arr.splice(i,1);
		};
		};
		return Arr;
		}
function showValue (e) {
	// body...
	var hobby = document.getElementById('hobby').value;
	var hArr=hobby.split(/，|:|,|\s+|;|、|\r/); 
	hArr=uniqArray(hArr);
	delNull(hArr);
	for (var i = 0; i < hArr.length; i++) {
		hArr[i]=trim(hArr[i]);
	};
	if (hArr.length>10) {
		inf.innerHTML="爱好不能超过十个";
		result.innerHTML='';
		e.preventDefault();
		return;
	};
	if (hArr.length==0) {
		inf.innerHTML="爱好不能为空";
		e.preventDefault();
		result.innerHTML='';
		return;
	};
	inf.innerHTML="";
	result.innerHTML='';
	for (var i = 0; i < hArr.length; i++) {
		var cb=document.createElement('input');
	    cb.setAttribute('type', 'checkbox');
	    var label=document.createElement('label');
	    label.innerHTML=hArr[i];
	    result.appendChild(label);
	    cb=label.parentNode.insertBefore(cb, label);
	};
	e.preventDefault();
}
