function imgSwitch(){
	if(!document.getElementById)return false;
	if(!document.getElementsByTagName)return false;
	var container = document.getElementsByClassName("container")[0];
	var imgshow = document.getElementById("imgShow");
	imgshow.style.left = "0px";
	imgshow.style.top = "0px";
	if(parseInt(container.clientWidth) <= 960){
		/*自动轮播*/
	setInterval(function(){
		if(imgshow.movement){
			clearTimeout(imgshow.movement);
		}
		var ypos = parseInt(imgshow.style.top);
		var dist;
		if(ypos == -166){
			ypos = 0;
			moveElement("imgShow",0,ypos,10);			
		}else if(ypos > -166){
			ypos -= 83;
			moveElement("imgShow",0,ypos,10);			
		}else if(ypos < -166){
			ypos += 83;
			moveElement("imgShow",0,ypos,10);	
		}
	},6000);
	/*点击轮播*/
	var ol = document.getElementById("liClick");
	var lis = ol.getElementsByTagName("li");
	
	for(var i=0;i<lis.length;i++){
		(function(e){
			lis[e].onclick = function(){		   
			   moveElement("imgShow",0,-83*e,10);
		    }
		})(i);
	}
	}else{
	/*自动轮播*/
	setInterval(function(){
		if(imgshow.movement){
			clearTimeout(imgshow.movement);
		}
		var ypos = parseInt(imgshow.style.top);
		var dist;
		if(ypos == -206){
			ypos = 0;
			moveElement("imgShow",0,ypos,10);			
		}else if(ypos > -206){
			ypos -= 103;
			moveElement("imgShow",0,ypos,10);			
		}else if(ypos < -206){
			ypos += 103;
			moveElement("imgShow",0,ypos,10);	
		}
	},6000);
	/*点击轮播*/
	var ol = document.getElementById("liClick");
	var lis = ol.getElementsByTagName("li");
	
	for(var i=0;i<lis.length;i++){
		(function(e){
			lis[e].onclick = function(){		   
			   moveElement("imgShow",0,-103*e,10);
		    }
		})(i);
	}
	}
}    
function subLinkA(){
	if(!document.getElementById)return false;
	if(!document.getElementsByTagName)return false;
	var imgshow = document.getElementById("subLinkA");
	var container = document.getElementsByClassName("container")[0];
	
	var container6 = document.getElementsByClassName("container6")[0];
	var linka = container6.getElementsByClassName("linkA");
	if(parseInt(container.clientWidth) <= 960){
		for(var i=0;i<linka.length;i++){
			(function(e){
				if(e%3==2){
					var subDiv = linka[e].getElementsByClassName("sub")[0];
					subDiv.setAttribute("class","subLinkB");
				}else{
					var subDiv = linka[e].getElementsByClassName("sub")[0];
				    subDiv.setAttribute("class","subLinkA");
				}
			})(i);
		}
	}
	else{
		for(var i=0;i<linka.length;i++){
			(function(e){
				if(e%4==3){
					var subDiv = linka[e].getElementsByClassName("sub")[0];
					subDiv.setAttribute("class","subLinkB");
				}else{
					var subDiv = linka[e].getElementsByClassName("sub")[0];
				    subDiv.setAttribute("class","subLinkA");
				}
			})(i);
		}
	}
}
function addLoadEvent(func){
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}
addLoadEvent(imgSwitch);
addLoadEvent(subLinkA);