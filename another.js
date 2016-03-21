for(var i = 0; i < 1000; i++){
	c="□□"+d+"□□";
              b.innerHTML+=c+"<br>";
              d="";
              for(i=0;i<c.length-2;i++)
                d+=(["□□■","□■□","□■■","■□□"].indexOf(c[i]+c[i+1]+c[i+2])>-1?"■":"□")}             