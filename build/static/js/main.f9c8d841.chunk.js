(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},19:function(e,t){e.exports={keys:{openweathermap_API_KEY:"d6e0e85a41968aaf6240b5ed27522ebd"}}},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(3),l=n.n(i),c=(n(15),n(4)),o=n(5),u=n(7),m=n(6),s=n(8),d=(n(16),n(1)),p=(n(17),function(e){var t="";return"undefined"!==typeof e.responseObj.cod&&(t="Location not found!"),r.a.createElement("div",null,200===e.responseObj.cod?r.a.createElement("div",null,r.a.createElement("h3",null,"at ",e.responseObj.name,":"),r.a.createElement("p",null,"It is currently ",Math.round(e.responseObj.main.temp)," degrees ","metric"===e.unit?" Celcius":"Fahrenheit"," out with ",e.responseObj.weather[0].description,"."),r.a.createElement("p",null,"Wind speed is ",e.responseObj.wind.speed," ","metric"===e.unit?"km/hr":"ml/hr"," with humidity at ",e.responseObj.main.humidity,"%.")):r.a.createElement("div",null,r.a.createElement("h3",null," ",t)))}),h=(n(19).keys,function(e){var t=Object(a.useState)({}),n=Object(d.a)(t,2),i=n[0],l=n[1];var c=Object(a.useState)(""),o=Object(d.a)(c,2),u=o[0],m=o[1],s=Object(a.useState)("metric"),h=Object(d.a)(s,2),b=h[0],f=h[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Currentt Weather Conditions"),r.a.createElement("div",null,r.a.createElement(p,{responseObj:i,unit:b})),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&q=durban&appid=d6e0e85a41968aaf6240b5ed27522ebd").then(function(e){return e.json()}).then(function(e){l(e)},function(e){alert("Error in fetching weather data : "+e.message)})}},r.a.createElement("input",{type:"text",placeholder:"Enter City",maxLength:"50",value:u,onChange:function(e){return m(e.target.value)}}),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"units",checked:"metric"===b,value:"metric",onChange:function(e){return f(e.target.value)}}),"Celcius"),r.a.createElement("label",null,r.a.createElement("input",{type:"radio",name:"units",checked:"imperial"===b,value:"imperial",onChange:function(e){return f(e.target.value)}}),"Fahrenheit"),r.a.createElement("button",{type:"submit"},"Get Forecast")))}),b=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={city:"",unit:"imperial"},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("main",null,r.a.createElement("h1",null,"Weather Forecast App"),r.a.createElement(h,null)),r.a.createElement("footer",null,"Created by Tunde Bello"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(20)}},[[9,1,2]]]);
//# sourceMappingURL=main.f9c8d841.chunk.js.map