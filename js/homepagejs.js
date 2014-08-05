var home-ths = document.getElementByid("home-directory-table").getElementByTagName("th");

function mOver(obj){
	if(home-ths.indexOf(obj)!=-1){
		obj.style.opacity = 1.00;
	}
}

function mOut(obj){
	if(home-ths.indexOf(obj)!=-1){
		obj.style.opacity = 0.50;
	}
}

for( i=0; i<home-ths.length; i++){
	home-ths[i].onmouseover=mOver(home-ths[i]);
	home-ths[i].onmouseout=mOut(home-ths[i]);
}
