!function(t){var e={};function i(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){var n,o;n=[i,e,i(1)],void 0===(o=function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});new i.default}.apply(e,n))||(t.exports=o)},function(t,e,i){var n;void 0===(n=function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=document.getElementById("point"),n=document.getElementById("name"),o=document.getElementById("endBtn"),r=document.getElementById("startBtn"),s=function(){function t(){this._maxPointString="_maxPoint",this._point=0,this._dividend=0,this._divisor=0,this._count=0,this._end=!1,this._timer=void 0,this._maxPoint=-1,this._init()}return t.prototype._init=function(){var t=this;i.innerText="当前分数0",n.innerText="等待开始",o.style.display="none",r.style.display="block";var e=localStorage.getItem(this._maxPointString);r.addEventListener("click",(function(){t._start()})),o.addEventListener("click",(function(){t._giveResult()})),e?this._maxPoint=Number(e):localStorage.setItem(this._maxPointString,String(this._maxPoint))},t.prototype._start=function(){for(var t=this,e="",i="",s=0;s<6;s++){var d=Math.floor(10*Math.random());if(e+=String(d),s<3){var a=Math.floor(10*Math.random());i+=String(a)}}o.style.display="block",r.style.display="none",this._dividend=Number(e),this._divisor=Number(i),n.innerText="公式"+this._dividend+"/"+this._divisor,this._timer=setInterval((function(){t._count++,t._count>90&&t._giveResult(!0)}),1e3)},t.prototype._finishAnswer=function(t){n.innerText=(t?"超时,":"")+"结果"+(this._dividend/this._divisor).toFixed(1),clearInterval(this._timer),this._count=0},t.prototype._endGame=function(){this._point>this._maxPoint&&(this._maxPoint=this._point,localStorage.setItem(this._maxPointString,String(this._point))),i.innerText="最终分数"+this._point+",历史最高分"+this._maxPoint,this._end=!0,o.style.display="none",r.style.display="block"},t.prototype._giveResult=function(t){this._end||(this._finishAnswer(t),Number(document.getElementById("field1").value)!==Number((this._dividend/this._divisor).toFixed(1))||t?this._endGame():(this._point+=1,i.innerText="当前分数"+this._point,this._start()))},t}();e.default=s}.apply(e,[i,e]))||(t.exports=n)}]);