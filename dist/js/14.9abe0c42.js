(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[14],{8014:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>d});var n=function(){var e=this,r=e._self._c;return r("div",{staticClass:"container"},[e.recipe?r("div",[r("div",{staticClass:"recipe-header mt-3 mb-4"},[r("h1",[e._v(e._s(e.recipe.title))]),r("b-container",[r("b-col",[r("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e.recipe}})],1)],1)],1),r("div",{staticClass:"recipe-body"},[r("div",{staticClass:"wrapper"},[r("div",{staticClass:"wrapped"},[r("div",{staticClass:"mb-3"},[r("div",[e._v("Ready in "+e._s(e.recipe.readyInMinutes)+" minutes")]),r("div",[e._v("Likes: "+e._s(e.recipe.aggregateLikes)+" likes")])]),e._v(" Ingredients: "),r("ul",e._l(e.recipe.extendedIngredients,(function(t,n){return r("li",{key:n+"_"+t.id},[e._v(" "+e._s(t.original)+" ")])})),0)]),r("div",{staticClass:"wrapped"},[e._v(" Instructions: "),r("ol",e._l(e.recipe._instructions,(function(t){return r("li",{key:t.number},[e._v(" "+e._s(t.step)+" ")])})),0)])])])]):e._e()])},i=[],a=t(6835),s=t(9584),c=t(8534),u=(t(4916),t(5306),t(5827),t(1539),t(1249),t(8309),t(2222),t(9805));const o={data:function(){return{recipe:null}},created:function(){var e=this;return(0,c.Z)((0,a.Z)().mark((function r(){var t,n,i,c,o,l,v,p,d,f,g;return(0,a.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.prev=0,r.prev=1,t=(0,u.iG)(e.$route.params.recipeId),r.next=10;break;case 5:return r.prev=5,r.t0=r["catch"](1),console.log("error.response.status",r.t0.response.status),e.$router.replace("/NotFound"),r.abrupt("return");case 10:n=t.data.recipe,i=n.analyzedInstructions,c=n.instructions,o=n.extendedIngredients,l=n.aggregateLikes,v=n.readyInMinutes,p=n.image,d=n.title,f=i.map((function(e){return e.steps[0].step=e.name+e.steps[0].step,e.steps})).reduce((function(e,r){return[].concat((0,s.Z)(e),(0,s.Z)(r))}),[]),g={instructions:c,_instructions:f,analyzedInstructions:i,extendedIngredients:o,aggregateLikes:l,readyInMinutes:v,image:p,title:d},e.recipe=g,r.next=19;break;case 16:r.prev=16,r.t1=r["catch"](0),console.log(r.t1);case 19:case"end":return r.stop()}}),r,null,[[0,16],[1,5]])})))()}},l=o;var v=t(1001),p=(0,v.Z)(l,n,i,!1,null,"75ff6814",null);const d=p.exports},1530:(e,r,t)=>{"use strict";var n=t(8710).charAt;e.exports=function(e,r,t){return r+(t?n(e,r).length:1)}},3671:(e,r,t)=>{var n=t(9662),i=t(7908),a=t(8361),s=t(6244),c=TypeError,u=function(e){return function(r,t,u,o){n(t);var l=i(r),v=a(l),p=s(l),d=e?p-1:0,f=e?-1:1;if(u<2)while(1){if(d in v){o=v[d],d+=f;break}if(d+=f,e?d<0:p<=d)throw c("Reduce of empty array with no initial value")}for(;e?d>=0:p>d;d+=f)d in v&&(o=t(o,v[d],d,l));return o}};e.exports={left:u(!1),right:u(!0)}},7007:(e,r,t)=>{"use strict";t(4916);var n=t(1470),i=t(8052),a=t(2261),s=t(7293),c=t(5112),u=t(8880),o=c("species"),l=RegExp.prototype;e.exports=function(e,r,t,v){var p=c(e),d=!s((function(){var r={};return r[p]=function(){return 7},7!=""[e](r)})),f=d&&!s((function(){var r=!1,t=/a/;return"split"===e&&(t={},t.constructor={},t.constructor[o]=function(){return t},t.flags="",t[p]=/./[p]),t.exec=function(){return r=!0,null},t[p](""),!r}));if(!d||!f||t){var g=n(/./[p]),h=r(p,""[e],(function(e,r,t,i,s){var c=n(e),u=r.exec;return u===a||u===l.exec?d&&!s?{done:!0,value:g(r,t,i)}:{done:!0,value:c(t,r,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(l,p,h[1])}v&&u(l[p],"sham",!0)}},647:(e,r,t)=>{var n=t(1702),i=t(7908),a=Math.floor,s=n("".charAt),c=n("".replace),u=n("".slice),o=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,r,t,n,v,p){var d=t+e.length,f=n.length,g=l;return void 0!==v&&(v=i(v),g=o),c(p,g,(function(i,c){var o;switch(s(c,0)){case"$":return"$";case"&":return e;case"`":return u(r,0,t);case"'":return u(r,d);case"<":o=v[u(c,1,-1)];break;default:var l=+c;if(0===l)return i;if(l>f){var p=a(l/10);return 0===p?i:p<=f?void 0===n[p-1]?s(c,1):n[p-1]+s(c,1):i}o=n[l-1]}return void 0===o?"":o}))}},7651:(e,r,t)=>{var n=t(6916),i=t(9670),a=t(614),s=t(4326),c=t(2261),u=TypeError;e.exports=function(e,r){var t=e.exec;if(a(t)){var o=n(t,e,r);return null!==o&&i(o),o}if("RegExp"===s(e))return n(c,e,r);throw u("RegExp#exec called on incompatible receiver")}},5827:(e,r,t)=>{"use strict";var n=t(2109),i=t(3671).left,a=t(9341),s=t(7392),c=t(5268),u=!c&&s>79&&s<83,o=u||!a("reduce");n({target:"Array",proto:!0,forced:o},{reduce:function(e){var r=arguments.length;return i(this,e,r,r>1?arguments[1]:void 0)}})},5306:(e,r,t)=>{"use strict";var n=t(2104),i=t(6916),a=t(1702),s=t(7007),c=t(7293),u=t(9670),o=t(614),l=t(8554),v=t(9303),p=t(7466),d=t(1340),f=t(4488),g=t(1530),h=t(8173),x=t(647),y=t(7651),m=t(5112),b=m("replace"),_=Math.max,k=Math.min,w=a([].concat),I=a([].push),$=a("".indexOf),C=a("".slice),Z=function(e){return void 0===e?e:String(e)},A=function(){return"$0"==="a".replace(/./,"$0")}(),E=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),M=!c((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,r,t){var a=E?"$":"$0";return[function(e,t){var n=f(this),a=l(e)?void 0:h(e,b);return a?i(a,e,n,t):i(r,d(n),e,t)},function(e,i){var s=u(this),c=d(e);if("string"==typeof i&&-1===$(i,a)&&-1===$(i,"$<")){var l=t(r,s,c,i);if(l.done)return l.value}var f=o(i);f||(i=d(i));var h=s.global;if(h){var m=s.unicode;s.lastIndex=0}var b=[];while(1){var A=y(s,c);if(null===A)break;if(I(b,A),!h)break;var E=d(A[0]);""===E&&(s.lastIndex=g(c,p(s.lastIndex),m))}for(var M="",R=0,S=0;S<b.length;S++){A=b[S];for(var L=d(A[0]),T=_(k(v(A.index),c.length),0),z=[],P=1;P<A.length;P++)I(z,Z(A[P]));var j=A.groups;if(f){var F=w([L],z,T,c);void 0!==j&&I(F,j);var G=d(n(i,void 0,F))}else G=x(L,c,T,z,j,i);T>=R&&(M+=C(c,R,T)+G,R=T+L.length)}return M+C(c,R)}]}),!M||!A||E)},9584:(e,r,t)=>{"use strict";t.d(r,{Z:()=>u});t(9753);var n=t(9227);function i(e){if(Array.isArray(e))return(0,n.Z)(e)}t(2526),t(1817),t(1539),t(2165),t(8783),t(3948),t(1038);function a(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var s=t(2780);t(1703),t(6647);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return i(e)||a(e)||(0,s.Z)(e)||c()}}}]);
//# sourceMappingURL=14.9abe0c42.js.map