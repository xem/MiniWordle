w=W[new Date%W.length],g=7,i.onkeyup=n=>{if(13==n.which&&W.includes(v=i.value)&&--g>0){for(l in f=[0,0,0,0,0],c=[...w],v)w[l]==v[l]&&(f[l]=595,c[l]="");for(l in v)!f[l]&&~(x=c.indexOf(v[l]))&&(f[l]=985,c[x]="");for(l in v)p.innerHTML+=`<tt style='background:#${f[l]}'>&nbsp;${v[l]} </tt>&nbsp;`;p.innerHTML+="<p>",i.value=f.every((l=>595==l))?":)":1==g?":(":""}}

w=W[new Date%W.length],g=7,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&--g>0){for(l in f=[0,0,0,0,0],c=[...w],v)w[l]==v[l]?(f[l]=595,c[l]=0):~(x=c.indexOf(v[l]))&&c[x]!=v[x]&&(f[l]=985,c[x]=0),p.innerHTML+=`<tt style='background:#${f[l]}'>&nbsp;${v[l]} </tt>&nbsp;`+(l>3?"<p>":"");i.value=f.every((l=>595==l))?":)":1==g?":(":""}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=j[e]=o[e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&"🟩"!=s[q]&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+--g+o+v,i.value=v==w?":)":g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(e.which<14&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=j[e]=o[e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&"🟩"!=s[q]&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+--g+o+v,i.value=v==w?":)":g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(e.which<14&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=j[e]=o[e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&"🟩"!=s[q]&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+o+v,i.value=v==w?":)":--g?"":":("}}

w=W[new Date%W.length],g=6,i.onkeyup=e=>{if(13==e.which&&W.includes(v=i.value)&&g){for(o=[],s=[...w],j=[...v],e=5;e--;j[e]==s[e]&&(s[e]=o[j[e]=e]="🟩"))o[e]="⬛";for(e=5;e--;~q&&(s[q]=j[q]=o[q]="🟨"))q=j.indexOf(s[e]);p.innerHTML+="<p>"+o+v,i.value=v==w?":)":--g?"":":("}}