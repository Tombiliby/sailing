(this.webpackJsonpsailing=this.webpackJsonpsailing||[]).push([[0],[,,,,,,,,,,function(e){e.exports=JSON.parse('{"checklist":["Des chaussures ferm\xe9es qui ne craignent pas l\'eau et \xe0 semelle blanche (pour ne pas marquer le pont)","Veste de quart ou coupe vent","Cr\xe8me solaire et lunettes de soleil","Casquette ou chapeau","Sac de couchage + serviette de toilette","Pull ou polaire","Anti-moustiques,","Jeux de carte, tarot, yams...","Boules quies","Lunette de soleil et de quoi les attacher si besoin","Masque et tuba","Cd (sur \xe0 100% qu\'il y ait un lecteur cd, pas sur pour USB) / tel portable avec de la musique","Mat\xe9riel de p\xeache"]}')},function(e,t,a){e.exports=a.p+"static/media/checklist.86b77469.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_cold.3dd47cb7.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_hot.4133c074.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_rain.4e7656c4.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_sunny.beeb96cd.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_nowind.6e797807.svg"},function(e,t,a){e.exports=a.p+"static/media/ico_wind.e7d4c6b6.svg"},,,,function(e,t,a){e.exports=a(30)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),l=a.n(c),s=(a(26),a(27),a(3)),i=a(19),m=function(e){var t=e.val,a=(Object(i.a)(e,["val"]),Object(n.useState)(!1)),c=Object(s.a)(a,2),l=c[0],m=c[1];return r.a.createElement(r.a.Fragment,null,l?r.a.createElement("div",{onClick:function(){return m(!1)},className:"item checked"},r.a.createElement("div",{className:"contentZone"},r.a.createElement("div",{className:"checkZone"},r.a.createElement("div",{className:"check"})),r.a.createElement("div",{className:"valueZone"},r.a.createElement("span",null,t)))):r.a.createElement("div",{onClick:function(){return m(!0)},className:"item"},r.a.createElement("div",{className:"contentZone"},r.a.createElement("div",{className:"checkZone"},r.a.createElement("div",{className:"check"})),r.a.createElement("div",{className:"valueZone"},r.a.createElement("span",null,t)))))},o=a(10),u=a(11),d=a.n(u),E=function(){var e=o.checklist;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"checkListZone"},r.a.createElement("div",{className:"titleZone"},r.a.createElement("h2",{className:"h2"},"\xc0 Emporter")),r.a.createElement("div",{className:"figureZone"},r.a.createElement("img",{src:d.a,alt:""})),r.a.createElement("div",{className:"checkList"},e.map((function(e,t){return r.a.createElement(m,{key:t,val:e})})))))};function v(e,t,a){var n,r,c;if(e/=360,a/=100,0===(t/=100))n=r=c=a;else{var l=function(e,t,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?e+6*(t-e)*a:a<.5?t:a<2/3?e+(t-e)*(2/3-a)*6:e},s=a<.5?a*(1+t):a+t-a*t,i=2*a-s;n=l(i,s,e+1/3),r=l(i,s,e),c=l(i,s,e-1/3)}var m=function(e){var t=Math.round(255*e).toString(16);return 1===t.length?"0"+t:t};return"#".concat(m(n)).concat(m(r)).concat(m(c))}function N(e){var t=0,a=0,n=0;4===e.length?(t="0x"+e[1]+e[1],a="0x"+e[2]+e[2],n="0x"+e[3]+e[3]):7===e.length&&(t="0x"+e[1]+e[2],a="0x"+e[3]+e[4],n="0x"+e[5]+e[6]),t/=255,a/=255,n/=255;var r=Math.min(t,a,n),c=Math.max(t,a,n),l=c-r,s=0,i=0;return s=0===l?0:c===t?(a-n)/l%6:c===a?(n-t)/l+2:(t-a)/l+4,(s=Math.round(60*s))<0&&(s+=360),i=(c+r)/2,{hue:s,sat:+(100*(0===l?0:l/(1-Math.abs(2*i-1)))).toFixed(1),lum:i=+(100*i).toFixed(1)}}var p=a(12),h=a.n(p),g=a(13),b=a.n(g),f=a(14),w=a.n(f),y=a(15),S=a.n(y),_=a(16),q=a.n(_),Z=a(17),O=a.n(Z),R=function(){var e={hue:getComputedStyle(document.documentElement).getPropertyValue("--default-color-h"),sat:getComputedStyle(document.documentElement).getPropertyValue("--default-color-s").replace("%",""),lum:getComputedStyle(document.documentElement).getPropertyValue("--default-color-l").replace("%","")},t=getComputedStyle(document.documentElement).getPropertyValue("--font-ital-title"),a=getComputedStyle(document.documentElement).getPropertyValue("--font-wght-title"),c=Object(n.useState)(v(e.hue,e.sat,e.lum)),l=Object(s.a)(c,2),i=l[0],m=l[1],o=Object(n.useState)(e.hue),u=Object(s.a)(o,2),d=u[0],E=u[1],p=Object(n.useState)(e.sat),g=Object(s.a)(p,2),f=g[0],y=g[1],_=Object(n.useState)(e.lum),Z=Object(s.a)(_,2),R=Z[0],T=Z[1],j=Object(n.useState)(t),k=Object(s.a)(j,1)[0],C=Object(n.useState)(a),x=Object(s.a)(C,1)[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"colorSchemePickerZone"},r.a.createElement("div",{className:"titleZone"},r.a.createElement("h2",{className:"h2"},"Quelle m\xe9t\xe9o")),r.a.createElement("div",{className:"hidden"},r.a.createElement("label",{htmlFor:"colorSchemePicker"},"Color scheme"),r.a.createElement("input",{id:"colorSchemePicker",type:"color",value:i,onChange:function(e){return t=e.target.value,a="default",m(t),E(N(t).hue),y(N(t).sat),T(N(t).lum),document.documentElement.style.setProperty("--".concat(a,"-color-h"),N(t).hue),document.documentElement.style.setProperty("--".concat(a,"-color-s"),N(t).sat+"%"),void document.documentElement.style.setProperty("--".concat(a,"-color-l"),N(t).lum+"%");var t,a}})),r.a.createElement("div",{className:"fieldZone temperatureZone"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"sliderTemperature",min:"-200",max:"200",className:"slider",type:"range",onChange:function(t){return function(t){var a=Number(d)+Number(t)/10;document.documentElement.style.setProperty("--default-color-h",a),m(v(a,e.sat,e.lum))}(t.target.value)}})),r.a.createElement("div",{className:"labelZone"},r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:h.a,alt:""})),r.a.createElement("label",{htmlFor:"sliderTemperature",id:"ital"},"Temp\xe9rature"),r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:b.a,alt:""})))),r.a.createElement("div",{className:"fieldZone skyZone"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"sliderSky",className:"slider",min:"-100",max:"100",type:"range",onChange:function(t){return function(t){var a,n,r=Number(t);-1===Math.sign(r)?(a=Number(f)- -1*r*Number(f)/100,n=Number(R)- -1*r*5/100/2):(a=Number(f)+r*(100-Number(f))/100,n=Number(R)+5*r/100/2),document.documentElement.style.setProperty("--default-color-s",a+"%"),m(v(e.hue,a,n))}(t.target.value)}})),r.a.createElement("div",{className:"labelZone"},r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:w.a,alt:""})),r.a.createElement("label",{htmlFor:"sliderSky",id:"sky"},"Ensoleillement"),r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:S.a,alt:""})))),r.a.createElement("div",{className:"fieldZone skyZone"},r.a.createElement("div",{className:"field"},r.a.createElement("input",{id:"windTest",className:"slider",min:"-100",max:"100",type:"range",onChange:function(e){return function(e){var t,a,n=Number(e);-1===Math.sign(n)?(t=Number(k)- -1*n*1/100,a=Number(x)- -1*n*400/100):(t=Number(k)+1*n/100,a=Number(x)+400*n/100),document.documentElement.style.setProperty("--font-ital-title",t),document.documentElement.style.setProperty("--font-wght-title",a)}(e.target.value)}})),r.a.createElement("div",{className:"labelZone"},r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:q.a,alt:""})),r.a.createElement("label",{htmlFor:"windTest",id:"ital"},"Vent"),r.a.createElement("div",{className:"icoZone"},r.a.createElement("img",{src:O.a,alt:""}))))))},T=a(32),j=a(33),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T.a,{mode:"out-in"},r.a.createElement(j.a,{key:e.current,addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade"},r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"inner"},r.a.createElement("span",{className:"currentQuestion"},e.current,"/"),r.a.createElement("span",{className:"questions"},e.total))))))},C=Object(n.createContext)(),x=function(){var e=Object(n.useContext)(C).state,t=e.currentQuestion,a=e.questions[t];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"h2"},"Question : ",a.category),r.a.createElement("p",null,a.question))},Q=function(e){var t=["answer","item"];return e.selected&&t.push("checked"),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{"data-value":e.letter,className:t.join(" "),onClick:function(t){e.dispatch({type:"SET_CURRENT_ANSWER",currentAnswer:t.currentTarget.dataset.value}),e.dispatch({type:"SET_ERROR",error:""})}},r.a.createElement("div",{className:"contentZone"},r.a.createElement("div",{className:"letterZone"},r.a.createElement("span",{className:"letter"},e.letter)),r.a.createElement("div",{className:"valueZone"},r.a.createElement("span",{className:"answer"},e.answer)))))},F=function(){var e=Object(n.useContext)(C),t=e.state,a=e.dispatch,c=t.currentAnswer,l=t.currentQuestion,s=t.questions[l];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"answerListZone"},r.a.createElement("div",{className:"answerList"},r.a.createElement(Q,{letter:"a",answer:s.answer_a,selected:"a"===c,dispatch:a}),r.a.createElement(Q,{letter:"b",answer:s.answer_b,selected:"b"===c,dispatch:a}),r.a.createElement(Q,{letter:"c",answer:s.answer_c,selected:"c"===c,dispatch:a}),r.a.createElement(Q,{letter:"d",answer:s.answer_d,selected:"d"===c,dispatch:a}))))},P=a(1);var A=function(e,t){switch(t.type){case"SET_CURRENT_ANSWER":return Object(P.a)(Object(P.a)({},e),{},{currentAnswer:t.currentAnswer});case"SET_CURRENT_QUESTION":return Object(P.a)(Object(P.a)({},e),{},{currentQuestion:t.currentQuestion});case"SET_ERROR":return Object(P.a)(Object(P.a)({},e),{},{error:t.error});case"SET_SHOW_RESULTS":return Object(P.a)(Object(P.a)({},e),{},{showResults:t.showResults});case"SET_ANSWERS":return Object(P.a)(Object(P.a)({},e),{},{answers:t.answers});case"START_QUIZ":return Object(P.a)(Object(P.a)({},e),{},{startQuiz:t.startQuiz});case"RESET_QUIZ":return Object(P.a)(Object(P.a)({},e),{},{answers:[],currentQuestion:0,currentAnswer:"",showResults:!1,error:""});default:return e}},L=function(){var e=[{id:1,image:"/quiz/1.png",category:"Signalisation",question:"Dans un chenal en Europe. De la mer vers le port, la balise verte doit marquer :",answer_a:"La gauche",answer_b:"Un danger isol\xe9",answer_c:"Tribord",answer_d:"Un c\xe2ble sous marin",correct_answer:"c"},{id:2,image:"/quiz/2.png",category:"Signalisation",question:"R\xe8gles de croisement, lorsque les voiliers re\xe7oivent le vent d'un bord diff\xe9rent. Lequel doit s'\xe9carter ?",answer_a:"Les deux",answer_b:"Celui qui re\xe7ois le vent b\xe2bord",answer_c:"Le plus grand voilier",answer_d:"Celui qui re\xe7oit le vent tribord",correct_answer:"b"},{id:3,image:"/quiz/3.png",category:"Signalisation",question:"R\xe8gles de croisement, lorsque les voiliers re\xe7oivent le vent du m\xeame bord. Qui a la priorit\xe9 (vire ou passe derri\xe8re) ?",answer_a:"Le plus cher",answer_b:"Celui qui est sous le vent",answer_c:"Celui qui est au vent",answer_d:"Celui qui crie le plus fort",correct_answer:"c"},{id:4,image:"/quiz/4.png",category:"Signalisation",question:"Vous \xeates face \xe0 face, comment d\xe9vier ?",answer_a:"D\xe9vier \xe0 droite",answer_b:"D\xe9vier \xe0 gauche",answer_c:"Freiner",answer_d:"Celui qui crie le plus fort",correct_answer:"c"}],t={questions:e,currentQuestion:0,currentAnswer:"",answers:[],showResults:!1,startQuiz:!1,error:""},a=Object(n.useReducer)(A,t),c=Object(s.a)(a,2),l=c[0],i=c[1],m=l.currentQuestion,o=l.currentAnswer,u=l.answers,d=l.showResults,E=l.error,v=l.startQuiz,N=e[m];return v?d?r.a.createElement("div",{className:"quizZone"},r.a.createElement("div",{className:"resultsZone"},r.a.createElement("div",{className:"titleZone"},r.a.createElement("h2",{className:"h2"},"Results")),u.map((function(t){var a=e.find((function(e){return e.id===t.questionID}));return r.a.createElement("div",{key:a.id},r.a.createElement("div",{className:"questionZone"},a.question," - ",function(e,t){return e.correct_answer===t.answer?r.a.createElement("span",null,"Correct !!"):r.a.createElement("span",null,"Failed !")}(a,t)),r.a.createElement("div",{className:"answerZone"}))})),r.a.createElement("button",{onClick:function(){i({type:"RESET_QUIZ"})}},"Restart"))):r.a.createElement(r.a.Fragment,null,r.a.createElement(C.Provider,{value:{state:l,dispatch:i}},r.a.createElement("div",{className:"quizZone"},r.a.createElement("div",{className:"cardZone"},r.a.createElement("div",{className:"card"},r.a.createElement(k,{total:e.length,current:m+1}),r.a.createElement("div",{className:"inner"},r.a.createElement(x,null),function(){if(E)return r.a.createElement("div",{className:"error"},E)}()))),r.a.createElement(F,null),r.a.createElement("div",{className:"actionZone"},o?r.a.createElement("div",{className:"btn btn_validAnswer",onClick:function(){var t={questionID:N.id,answer:o};o?(u.push(t),i({type:"SET_ANSWERS",answers:u}),i({type:"SET_CURRENT_ANSWER",currentAnswer:""}),m+1<e.length?i({type:"SET_CURRENT_QUESTION",currentQuestion:m+1}):i({type:"SET_SHOW_RESULTS",showResults:!0})):i({type:"SET_ERROR",error:"Please select an option"})}},"Valider ma r\xe9ponse"):null)))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"quizZone"},r.a.createElement("button",{onClick:function(){i({type:"START_QUIZ",startQuiz:!0})}},"START !!")))},U=a(18),z=a.n(U),M=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"titleZone"},r.a.createElement("h2",{className:"h2"},"Playlist")),r.a.createElement(z.a,{uri:"spotify:playlist:5GgzOd1oVqgWgqSV0DE4DC",size:{width:"100%",height:"500"},view:"list"}))},V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"counter"},r.a.createElement("div",{className:"inner"},r.a.createElement("span",{className:"currentQuestion"},"1/"),r.a.createElement("span",{className:"questions"},"3"))),r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"titleZone"},r.a.createElement("h2",{className:"h2"},"Hello")),r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim feugiat dolor, eget gravida diam ullamcorper vel. Integer hendrerit, purus in posuere gravida, quam ex fringilla tellus, quis porta nisl augue ut enim"))))},W=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"h1"},r.a.createElement("span",{className:"item1"},"Se pr\xe9parer pour"),r.a.createElement("br",null),r.a.createElement("span",{className:"item2"},"naviguer \xe0 la voile")))};var I=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"debbug hidden"},r.a.createElement("div",{className:"colorScheme","data-theme":"triade"},r.a.createElement("div",{className:"item default"}),r.a.createElement("div",{className:"item variant1"}),r.a.createElement("div",{className:"item variant2"}),r.a.createElement("div",{className:"item variant3"}),r.a.createElement("div",{className:"item variant4"})),r.a.createElement("div",{className:"colorScheme","data-theme":"similar"},r.a.createElement("div",{className:"item default"}),r.a.createElement("div",{className:"item variant1"}),r.a.createElement("div",{className:"item variant2"}),r.a.createElement("div",{className:"item variant3"}),r.a.createElement("div",{className:"item variant4"}))),r.a.createElement("div",{className:"layoutFX","data-theme":"triade"},r.a.createElement("div",{className:"mainLayoutGrid"},r.a.createElement("div",{className:"cel sectionMainTitle"},r.a.createElement("div",{className:"inner"},r.a.createElement(W,null))),r.a.createElement("div",{className:"cel sectionWeather"},r.a.createElement("div",{className:"inner"},r.a.createElement(R,null))),r.a.createElement("div",{className:"cel sectionQuiz"},r.a.createElement("div",{className:"inner sticky"},r.a.createElement(L,null))),r.a.createElement("div",{className:"cel sectionChecklist"},r.a.createElement("div",{className:"inner"},r.a.createElement(E,null))),r.a.createElement("div",{className:"cel"},r.a.createElement("div",{className:"inner"},r.a.createElement("div",{className:"sticky sectionPlaylist"},r.a.createElement(M,null),"Bonjour sticky 2"))),r.a.createElement("div",{className:"cel "},r.a.createElement("div",{className:"inner"})),r.a.createElement("div",{className:"cel"},r.a.createElement("div",{className:"inner"})),r.a.createElement("div",{className:"cel"},r.a.createElement("div",{className:"inner"},r.a.createElement(V,null))),r.a.createElement("div",{className:"cel"},r.a.createElement("div",{className:"inner"}))),r.a.createElement("div",{className:"gradientFX"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("main")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[21,1,2]]]);
//# sourceMappingURL=main.83ac7385.chunk.js.map