w=W[new Date%W.length],g=7,i.onkeyup=n=>{if(13==n.which&&W.includes(v=i.value)&&--g>0){for(l in f=[0,0,0,0,0],c=[...w],v)w[l]==v[l]&&(f[l]=595,c[l]="");for(l in v)!f[l]&&~(x=c.indexOf(v[l]))&&(f[l]=985,c[x]="");for(l in v)p.innerHTML+=`<tt style='background:#${f[l]}'>&nbsp;${v[l]} </tt>&nbsp;`;p.innerHTML+="<p>",i.value=f.every((l=>595==l))?":)":1==g?":(":""}}

