(this.webpackJsonpsailing=this.webpackJsonpsailing||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"checklist":["Des chaussures ferm\xe9es qui ne craignent pas l\'eau et \xe0 semelle blanche (pour ne pas marquer le pont)","Veste de quart ou coupe vent","Cr\xe8me solaire et lunettes de soleil","Casquette ou chapeau","Sac de couchage + serviette de toilette","Pull ou polaire","Anti-moustiques,","Jeux de carte, tarot, yams...","Boules quies","Lunette de soleil et de quoi les attacher si besoin","Masque et tuba","Cd (sur \xe0 100% qu\'il y ait un lecteur cd, pas sur pour USB) / tel portable avec de la musique","Mat\xe9riel de p\xeache"]}')},function(e,t,a){e.exports=a.p+"static/media/ico_cold.3dd47cb7.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_hot.4133c074.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_rain.4e7656c4.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_sunny.beeb96cd.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_nowind.6e797807.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_wind.e7d4c6b6.svg"},function(e,t,a){e.exports=a.p+"static/media/checklist.86b77469.svg"},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),l=a.n(c),s=(a(19),a(20),a(2)),i=a(13),o=function(e){var t=e.val,a=(Object(i.a)(e,["val"]),Object(n.useState)(!1)),c=Object(s.a)(a,2),l=c[0],o=c[1];return r.a.createElement(r.a.Fragment,null,l?r.a.createElement("div",{onClick:function(){return o(!1)},className:"item checked"},r.a.createElement("div",{className:"contentZone"},r.a.createElement("div",{className:"checkZone"},r.a.createElement("div",{className:"check"})),r.a.createElement("div",{className:"valueZone"},r.a.createElement("span",null,t)))):r.a.createElement("div",{onClick:function(){return o(!0)},className:"item"},r.a.createElement("div",{className:"contentZone"},r.a.createElement("div",{className:"checkZone"},r.a.createElement("div",{className:"check"})),r.a.createElement("div",{className:"valueZone"},r.a.createElement("span",null,t)))))},u=a(5),m=function(){var e=u.checklist;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"checkListZone"},r.a.createElement("h2",null,"\xc0 Emporter"),r.a.createElement("div",{className:"checkList"},e.map((function(e,t){return r.a.createElement(o,{key:t,val:e})})))))};function d(e,t,a){var n,r,c;if(e/=360,a/=100,0===(t/=100))n=r=c=a;else{var l=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},s=a<.5?a*(1+t):a+t-a*t,i=2*a-s;n=l(i,s,e+1/3),r=l(i,s,e),c=l(i,s,e-1/3)}var o=function(e){var t=Math.round(255*e).toString(16);return 1===t.length?"0"+t:t};return"#".concat(o(n)).concat(o(r)).concat(o(c))}function E(e){var t=0,a=0,n=0;4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],n="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],n="0x"+e[5]+e[6]),t/=255,a/=255,n/=255;var r=Math.min(t,a,n),c=Math.max(t,a,n),l=c-r,s=0,i=0;return s=0===l?0:c===t?(a-n)/l%6:c===a?(n-t)/l+2:(t-a)/l+4,(s=Math.round(60*s))<0&&(s+=360),i=(c+r)/2,{hue:s,sat:+(100*(0===l?0:l/(1-Math.abs(2*i-1)))).toFixed(1),lum:i=+(100*i).toFixed(1)}}var v=a(6),p=a.n(v),h=a(7),N=a.n(h),b=a(8),f=a.n(b),g=a(9),w=a.n(g),S=a(10),y=a.n(S),_=a(11),O=a.n(_),R=function(){var e={hue:getComputedStyle(document.documentElement).getPropertyValue("--default-color-h"),sat:getComputedStyle(document.documentElement).getPropertyValue("--default-color-s").replace("%",""),lum:getComputedStyle(document.documentElement).getPropertyValue("--default-color-l").replace("%","")},t=getComputedStyle(document.documentElement).getPropertyValue("--font-ital-title"),a=getComputedStyle(document.documentElement).getPropertyValue("--font-wght-title"),c=Object(n.useState)(d(e.hue,e.sat,e.lum)),l=Object(s.a)(c,2),i=l[0],o=l[1],u=Object(n.useState)(e.hue),m=Object(s.a)(u,2),v=m[0],h=m[1],b=Object(n.useState)(e.sat),g=Object(s.a)(b,2),S=g[0],_=g[1],R=Object(n.useState)(e.lum),T=Object(s.a)(R,2),j=T[0],C=T[1],k=Object(n.useState)(t),Z=Object(s.a)(k,1)[0],x=Object(n.useState)(a),q=Object(s.a)(x,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"colorSchemePickerZone"},r.a.createElement("h2",null,"Quelle m\xe9t\xe9o"),r.a.createElement("div",{className:"hidden"},r.a.createElement("label",{htmlFor:"colorSchemePicker"},"Color scheme"),r.a.createElement("input",{id:"colorSchemePicker",type:"color",value:i,onChange:function(e){return t=e.target.value,a="default",o(t),h(E(t).hue),_(E(t).sat),C(E(t).lum),document.documentElement.style.setProperty("--".concat(a,"-color-h"),E(t).hue),document.documentElement.style.setProperty("--".concat(a,"-color-s"),E(t).sat+"%"),void document.documentElement.style.setProperty("--".concat(a,"-color-l"),E(t).lum+"%");var t,a}})),r.a.createElement("div",{className:"fieldZone temperatureZone"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"sliderTemperature",min:"-200",max:"200",className:"slider",type:"range",onChange:function(t){return function(t){var a=Number(v)+Number(t)/10;document.documentElement.style.setProperty("--default-color-h",a),o(d(a,e.sat,e.lum))}(t.target.value)}})),r.a.createElement("div",{className:"labelZone"},r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:p.a,alt:""})),r.a.createElement("label",{htmlFor:"sliderTemperature",id:"ital"},"Temp\xe9rature"),r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:N.a,alt:""})))),r.a.createElement("div",{className:"fieldZone skyZone"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"sliderSky",className:"slider",min:"-100",max:"100",type:"range",onChange:function(t){return function(t){var a,n,r=Number(t);-1===Math.sign(r)?(a=Number(S)- -1*r*Number(S)/100,n=Number(j)- -1*r*5/100/2):(a=Number(S)+r*(100-Number(S))/100,n=Number(j)+5*r/100/2),document.documentElement.style.setProperty("--default-color-s",a+"%"),o(d(e.hue,a,n))}(t.target.value)}})),r.a.createElement("div",{className:"labelZone"},r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:f.a,alt:""})),r.a.createElement("label",{htmlFor:"sliderSky",id:"sky"},"Ensoleillement"),r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:w.a,alt:""})))),r.a.createElement("div",{className:"fieldZone skyZone"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"windTest",className:"slider",min:"-100",max:"100",type:"range",onChange:function(e){return function(e){var t,a,n=Number(e);-1===Math.sign(n)?(t=Number(Z)- -1*n*1/100,a=Number(q)- -1*n*400/100):(t=Number(Z)+1*n/100,a=Number(q)+400*n/100),document.documentElement.style.setProperty("--font-ital-title",t),document.documentElement.style.setProperty("--font-wght-title",a)}(e.target.value)}})),r.a.createElement("div",{className:"labelZone"},r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:y.a,alt:""})),r.a.createElement("label",{htmlFor:"windTest",id:"ital"},"Vent"),r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:O.a,alt:""}))))))},T=a(12),j=a.n(T),C=function(e){return r.a.createElement("h2",null,"Question ",e.current," sur ",e.total)},k=Object(n.createContext)(),Z=function(){var e=Object(n.useContext)(k).state,t=e.currentQuestion,a=e.questions[t];return r.a.createElement("h1",null,a.question)},x=function(e){var t=["answer"];return e.selected&&t.push("selected"),r.a.createElement("button",{value:e.letter,className:t.join(" "),onClick:function(t){e.dispatch({type:"SET_CURRENT_ANSWER",currentAnswer:t.target.value}),e.dispatch({type:"SET_ERROR",error:""})}},r.a.createElement("span",null,e.letter),e.answer)},q=function(){var e=Object(n.useContext)(k),t=e.state,a=e.dispatch,c=t.currentAnswer,l=t.currentQuestion,s=t.questions[l];return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{letter:"a",answer:s.answer_a,selected:"a"===c,dispatch:a}),r.a.createElement(x,{letter:"b",answer:s.answer_b,selected:"b"===c,dispatch:a}),r.a.createElement(x,{letter:"c",answer:s.answer_c,selected:"c"===c,dispatch:a}),r.a.createElement(x,{letter:"d",answer:s.answer_d,selected:"d"===c,dispatch:a}))},P=a(1);var F=function(e,t){switch(t.type){case"SET_CURRENT_ANSWER":return Object(P.a)(Object(P.a)({},e),{},{currentAnswer:t.currentAnswer});case"SET_CURRENT_QUESTION":return Object(P.a)(Object(P.a)({},e),{},{currentQuestion:t.currentQuestion});case"SET_ERROR":return Object(P.a)(Object(P.a)({},e),{},{error:t.error});case"SET_SHOW_RESULTS":return Object(P.a)(Object(P.a)({},e),{},{showResults:t.showResults});case"SET_ANSWERS":return Object(P.a)(Object(P.a)({},e),{},{answers:t.answers});case"RESET_QUIZ":return Object(P.a)(Object(P.a)({},e),{},{answers:[],currentQuestion:0,currentAnswer:"",showResults:!1,error:""});default:return e}},A=function(){var e=[{id:1,question:"C'est qui le plus beau ?",answer_a:"Ton p\xe8re",answer_b:"Ta m\xe8re",answer_c:"Ta soeur",answer_d:"Je vois pas...",correct_answer:"d"},{id:2,question:"C'est qui le plus fort ?",answer_a:"Ton p\xe8re",answer_b:"Ta m\xe8re",answer_c:"Ta soeur",answer_d:"Je vois pas...",correct_answer:"d"},{id:3,question:"C'est qui le plus intelligent ?",answer_a:"Ton p\xe8re",answer_b:"Ta m\xe8re",answer_c:"Ta soeur",answer_d:"Bein je vois vraiment pas...",correct_answer:"d"}],t={questions:e,currentQuestion:0,currentAnswer:"",answers:[],showResults:!1,error:""},a=Object(n.useReducer)(F,t),c=Object(s.a)(a,2),l=c[0],i=c[1],o=l.currentQuestion,u=l.currentAnswer,m=l.answers,d=l.showResults,E=l.error,v=e[o];return d?r.a.createElement("div",{className:"resultsZone"},r.a.createElement("h2",null,"Results"),m.map((function(t){var a=e.find((function(e){return e.id===t.questionID}));return r.a.createElement("div",{key:a.id},r.a.createElement("div",{className:"questionZone"},a.question," - ",function(e,t){return e.correct_answer===t.answer?r.a.createElement("span",null,"Correct !!"):r.a.createElement("span",null,"Failed !")}(a,t)),r.a.createElement("div",{className:"answerZone"}))})),r.a.createElement("button",{onClick:function(){i({type:"RESET_QUIZ"})}},"Restart")):r.a.createElement(r.a.Fragment,null,r.a.createElement(k.Provider,{value:{state:l,dispatch:i}},r.a.createElement(C,{total:e.length,current:o+1}),r.a.createElement(Z,null),function(){if(E)return r.a.createElement("div",{className:"error"},E)}(),r.a.createElement(q,null),r.a.createElement("button",{onClick:function(){var t={questionID:v.id,answer:u};u?(m.push(t),i({type:"SET_ANSWERS",answers:m}),i({type:"SET_CURRENT_ANSWER",currentAnswer:""}),o+1<e.length?i({type:"SET_CURRENT_QUESTION",currentQuestion:o+1}):i({type:"SET_SHOW_RESULTS",showResults:!0})):i({type:"SET_ERROR",error:"Please select an option"})}},"Confirm and continue")))};var Q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"debbug hidden"},r.a.createElement("div",{className:"colorScheme","data-theme":"triade"},r.a.createElement("div",{className:"item default"}),r.a.createElement("div",{className:"item variant1"}),r.a.createElement("div",{className:"item variant2"}),r.a.createElement("div",{className:"item variant3"}),r.a.createElement("div",{className:"item variant4"})),r.a.createElement("div",{className:"colorScheme","data-theme":"similar"},r.a.createElement("div",{className:"item default"}),r.a.createElement("div",{className:"item variant1"}),r.a.createElement("div",{className:"item variant2"}),r.a.createElement("div",{className:"item variant3"}),r.a.createElement("div",{className:"item variant4"}))),r.a.createElement("div",{className:"layoutFX","data-theme":"triade"},r.a.createElement("div",{className:"mainLayoutGrid"},r.a.createElement("div",{className:"cel content"},r.a.createElement(A,null)),r.a.createElement("div",{className:"cel content"},r.a.createElement(R,null)),r.a.createElement("div",{className:"cel figure"}),r.a.createElement("div",{className:"cel content"},r.a.createElement(m,null)),r.a.createElement("div",{className:"cel figure"},r.a.createElement("img",{src:j.a,alt:""}))),r.a.createElement("div",{className:"gradientFX"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[14,1,2]]]);
//# sourceMappingURL=main.a07bd267.chunk.js.map