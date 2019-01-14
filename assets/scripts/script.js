(function(window,document){
	let p1=[105,110,102,111],p2=[117,115,120,46,106,112];
	document.addEventListener("DOMContentLoaded",()=>document.getElementById("email").addEventListener("click",e=>e.currentTarget.setAttribute("href","mailto:"+String.fromCharCode.apply(String,p1)+"@"+String.fromCharCode.apply(String,p2))));
})(window,window.document);