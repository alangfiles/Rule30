Rule 30
Based off of Stephen Wolfram's experiments with cellular automaton, and then trying to golf it down a bit.

See it in action here: http://alangfiles.github.io/Rule30/

Here's the code: 
```
<meta charset="utf-8" /> 
<body style='line-height:.7'onload=d=1;setInterval('m="";c="00"+d+"00";b.innerHTML+=c.replace(/1/g,"■").replace(/0/g,"□")+"\\n";d="";for(i=0;i<c.length-2;i++)d+=(x=c.substr(i,3)*1)==0?0:x<101?1:0',100)><center><pre id=b>```

Basically, we're just following some very simple rules, and generating a shape out of it, and as we progress, the generations look half random, the right side of the triangle obeying some sort of order, and the left side going into madness. Even the middle is treacherous to follow...

https://en.wikipedia.org/wiki/Rule_30

Index's the pretty one, but some of them explode the logic out, or try to collapse it down.