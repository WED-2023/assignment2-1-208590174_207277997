(self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[]).push([[874],{6874:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>g});r(1249),r(7327),r(1539),r(9753),r(2222),r(7042);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"search-container"},[t("div",{staticClass:"search-bar"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Search for recipes..."},domProps:{value:e.query},on:{input:[function(t){t.target.composing||(e.query=t.target.value)},e.onInput],focus:function(t){e.showRecentSearches=!0},blur:e.hideRecentSearches}}),e.showRecentSearches&&e.recentSearches.length?t("ul",{staticClass:"recent-searches"},e._l(e.recentSearches,(function(r,n){return t("li",{key:n,on:{mousedown:function(t){return e.selectRecentSearch(r)}}},[e._v(" "+e._s(r)+" ")])})),0):e._e(),t("div",{staticClass:"amount-container"},[t("label",{staticClass:"amount-label",attrs:{for:"amount"}},[e._v("Number of results:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],staticClass:"amount-input",attrs:{id:"amount"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.amount=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"5"}},[e._v("5")]),t("option",{attrs:{value:"10"}},[e._v("10")]),t("option",{attrs:{value:"15"}},[e._v("15")])])]),t("button",{staticClass:"action-button",on:{click:e.searchRecipes}},[e._v("Search")])]),t("div",{staticClass:"search-bar-options"},[t("div",{staticClass:"action-buttons"},[t("button",{staticClass:"action-button",on:{click:e.toggleFilters}},[e._v(e._s(e.showFilters?"Hide Filters":"Show Filters"))]),t("label",{staticClass:"sort-label",attrs:{for:"sort"}},[e._v("Sort by:")]),t("select",{directives:[{name:"model",rawName:"v-model",value:e.sortCriteria,expression:"sortCriteria"}],staticClass:"sort-input",attrs:{id:"sort"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sortCriteria=t.target.multiple?r:r[0]}}},[t("option",{attrs:{value:"preparationTime"}},[e._v("Preparation Time")]),t("option",{attrs:{value:"popularity"}},[e._v("Popularity")])])])]),t("div",{staticClass:"main-content"},[e.showFilters?t("div",{staticClass:"filter-toolbar"},[t("h3",{staticClass:"filter-title"},[e._v("Filters")]),t("div",{staticClass:"filters-columns"},[t("div",{staticClass:"filter-category"},[t("h4",[e._v("Cuisine")]),e._l(e.cuisineOptions,(function(r,n){return t("div",{key:n,staticClass:"filter-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedCuisines,expression:"selectedCuisines"}],attrs:{type:"checkbox",id:"cuisine-"+r.value},domProps:{value:r.value,checked:Array.isArray(e.selectedCuisines)?e._i(e.selectedCuisines,r.value)>-1:e.selectedCuisines},on:{change:function(t){var n=e.selectedCuisines,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=r.value,c=e._i(n,i);a.checked?c<0&&(e.selectedCuisines=n.concat([i])):c>-1&&(e.selectedCuisines=n.slice(0,c).concat(n.slice(c+1)))}else e.selectedCuisines=s}}}),t("label",{attrs:{for:"cuisine-"+r.value}},[e._v(e._s(r.text))])])}))],2),t("div",{staticClass:"filter-category"},[t("h4",[e._v("Diet")]),e._l(e.dietOptions,(function(r,n){return t("div",{key:n,staticClass:"filter-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedDiets,expression:"selectedDiets"}],attrs:{type:"checkbox",id:"diet-"+r.value},domProps:{value:r.value,checked:Array.isArray(e.selectedDiets)?e._i(e.selectedDiets,r.value)>-1:e.selectedDiets},on:{change:function(t){var n=e.selectedDiets,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=r.value,c=e._i(n,i);a.checked?c<0&&(e.selectedDiets=n.concat([i])):c>-1&&(e.selectedDiets=n.slice(0,c).concat(n.slice(c+1)))}else e.selectedDiets=s}}}),t("label",{attrs:{for:"diet-"+r.value}},[e._v(e._s(r.text))])])}))],2),t("div",{staticClass:"filter-category"},[t("h4",[e._v("Intolerances")]),e._l(e.intoleranceOptions,(function(r,n){return t("div",{key:n,staticClass:"filter-option"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedIntolerances,expression:"selectedIntolerances"}],attrs:{type:"checkbox",id:"intolerance-"+r.value},domProps:{value:r.value,checked:Array.isArray(e.selectedIntolerances)?e._i(e.selectedIntolerances,r.value)>-1:e.selectedIntolerances},on:{change:function(t){var n=e.selectedIntolerances,a=t.target,s=!!a.checked;if(Array.isArray(n)){var i=r.value,c=e._i(n,i);a.checked?c<0&&(e.selectedIntolerances=n.concat([i])):c>-1&&(e.selectedIntolerances=n.slice(0,c).concat(n.slice(c+1)))}else e.selectedIntolerances=s}}}),t("label",{attrs:{for:"intolerance-"+r.value}},[e._v(e._s(r.text))])])}))],2)])]):e._e(),t("b-container",{staticClass:"recipes-container"},e._l(e.sortedRecipes,(function(e){return t("b-row",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)])},a=[],s=r(6835),i=r(8534),c=r(5957),o=(r(3210),r(2707),r(7658),r(6699),r(5684),r(541),r(8862),r(2564),r(584)),l=r(9805),u=[{value:"",text:"No filter"},{value:"african",text:"African"},{value:"american",text:"American"},{value:"chinese",text:"Chinese"},{value:"french",text:"French"},{value:"indian",text:"Indian"},{value:"italian",text:"Italian"},{value:"japanese",text:"Japanese"},{value:"mexican",text:"Mexican"},{value:"thai",text:"Thai"}],v=[{value:"",text:"No filter"},{value:"gluten free",text:"Gluten Free"},{value:"ketogenic",text:"Ketogenic"},{value:"vegetarian",text:"Vegetarian"},{value:"vegan",text:"Vegan"},{value:"paleo",text:"Paleo"},{value:"whole30",text:"Whole30"}],d=[{value:"",text:"No filter"},{value:"dairy",text:"Dairy"},{value:"egg",text:"Egg"},{value:"gluten",text:"Gluten"},{value:"peanut",text:"Peanut"},{value:"seafood",text:"Seafood"},{value:"sesame",text:"Sesame"},{value:"soy",text:"Soy"},{value:"sulfite",text:"Sulfite"},{value:"tree nut",text:"Tree Nut"},{value:"wheat",text:"Wheat"}];const p={name:"RecipePreviewList",components:{RecipePreview:o.Z},data:function(){return{query:"",recipes:[],amount:5,selectedCuisines:[],selectedDiets:[],selectedIntolerances:[],cuisineOptions:u,dietOptions:v,intoleranceOptions:d,showFilters:!1,sortCriteria:"preparationTime",recentSearches:JSON.parse(localStorage.getItem("recentSearches"))||[],showRecentSearches:!1}},mounted:function(){this.query=this.$route.query.q||"",""!==this.query.trim()&&this.searchRecipes()},computed:{sortedRecipes:function(){return"preparationTime"===this.sortCriteria?(0,c.Z)(this.recipes).sort((function(e,t){return e.preparationTime-t.preparationTime})):"popularity"===this.sortCriteria?(0,c.Z)(this.recipes).sort((function(e,t){return t.popularity-e.popularity})):this.recipes}},methods:{searchRecipes:function(){var e=this;return(0,i.Z)((0,s.Z)().mark((function t(){var r,n,a;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!==e.query.trim()){t.next=2;break}return t.abrupt("return");case 2:return e.updateRecentSearches(e.query),t.prev=3,t.next=6,(0,l.J1)(e.query,e.amount,e.selectedCuisines,e.selectedDiets,e.selectedIntolerances);case 6:n=t.sent,a=n.data.recipes,e.recipes=[],(r=e.recipes).push.apply(r,(0,c.Z)(a)),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[3,12]])})))()},updateRecentSearches:function(e){this.recentSearches.includes(e)||(this.recentSearches.unshift(e),this.recentSearches.length>5&&this.recentSearches.pop(),localStorage.setItem("recentSearches",JSON.stringify(this.recentSearches)))},selectRecentSearch:function(e){this.query=e,this.searchRecipes(),this.showRecentSearches=!1},onInput:function(){this.showRecentSearches=!0},hideRecentSearches:function(){var e=this;setTimeout((function(){e.showRecentSearches=!1}),200)},toggleFilters:function(){this.showFilters=!this.showFilters}}},h=p;var f=r(1001),x=(0,f.Z)(h,n,a,!1,null,"cbcb358a",null);const g=x.exports},8457:(e,t,r)=>{"use strict";var n=r(9974),a=r(6916),s=r(7908),i=r(3411),c=r(7659),o=r(4411),l=r(6244),u=r(6135),v=r(4121),d=r(1246),p=Array;e.exports=function(e){var t=s(e),r=o(this),h=arguments.length,f=h>1?arguments[1]:void 0,x=void 0!==f;x&&(f=n(f,h>2?arguments[2]:void 0));var g,m,y,b,C,w,_=d(t),S=0;if(!_||this===p&&c(_))for(g=l(t),m=r?new this(g):p(g);g>S;S++)w=x?f(t[S],S):t[S],u(m,S,w);else for(b=v(t,_),C=b.next,m=r?new this:[];!(y=a(C,b)).done;S++)w=x?i(b,f,[y.value,S],!0):y.value,u(m,S,w);return m.length=S,m}},4362:(e,t,r)=>{var n=r(1589),a=Math.floor,s=function(e,t){var r=e.length,o=a(r/2);return r<8?i(e,t):c(e,s(n(e,0,o),t),s(n(e,o),t),t)},i=function(e,t){var r,n,a=e.length,s=1;while(s<a){n=s,r=e[s];while(n&&t(e[n-1],r)>0)e[n]=e[--n];n!==s++&&(e[n]=r)}return e},c=function(e,t,r,n){var a=t.length,s=r.length,i=0,c=0;while(i<a||c<s)e[i+c]=i<a&&c<s?n(t[i],r[c])<=0?t[i++]:r[c++]:i<a?t[i++]:r[c++];return e};e.exports=s},3411:(e,t,r)=>{var n=r(9670),a=r(9212);e.exports=function(e,t,r,s){try{return s?t(n(r)[0],r[1]):t(r)}catch(i){a(e,"throw",i)}}},4964:(e,t,r)=>{var n=r(5112),a=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[a]=!1,"/./"[e](t)}catch(n){}}return!1}},8886:(e,t,r)=>{var n=r(8113),a=n.match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},9363:e=>{e.exports="function"==typeof Bun&&Bun&&"string"==typeof Bun.version},256:(e,t,r)=>{var n=r(8113);e.exports=/MSIE|Trident/.test(n)},8008:(e,t,r)=>{var n=r(8113),a=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},7850:(e,t,r)=>{var n=r(111),a=r(4326),s=r(5112),i=s("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},3929:(e,t,r)=>{var n=r(7850),a=TypeError;e.exports=function(e){if(n(e))throw a("The method doesn't accept regular expressions");return e}},2261:(e,t,r)=>{"use strict";var n=r(6916),a=r(1702),s=r(1340),i=r(7066),c=r(2999),o=r(2309),l=r(30),u=r(9909).get,v=r(9441),d=r(7168),p=o("native-string-replace",String.prototype.replace),h=RegExp.prototype.exec,f=h,x=a("".charAt),g=a("".indexOf),m=a("".replace),y=a("".slice),b=function(){var e=/a/,t=/b*/g;return n(h,e,"a"),n(h,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),C=c.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],_=b||w||C||v||d;_&&(f=function(e){var t,r,a,c,o,v,d,_=this,S=u(_),I=s(e),A=S.raw;if(A)return A.lastIndex=_.lastIndex,t=n(f,A,I),_.lastIndex=A.lastIndex,t;var R=S.groups,k=C&&_.sticky,E=n(i,_),T=_.source,D=0,N=I;if(k&&(E=m(E,"y",""),-1===g(E,"g")&&(E+="g"),N=y(I,_.lastIndex),_.lastIndex>0&&(!_.multiline||_.multiline&&"\n"!==x(I,_.lastIndex-1))&&(T="(?: "+T+")",N=" "+N,D++),r=new RegExp("^(?:"+T+")",E)),w&&(r=new RegExp("^"+T+"$(?!\\s)",E)),b&&(a=_.lastIndex),c=n(h,k?r:_,N),k?c?(c.input=y(c.input,D),c[0]=y(c[0],D),c.index=_.lastIndex,_.lastIndex+=c[0].length):_.lastIndex=0:b&&c&&(_.lastIndex=_.global?c.index+c[0].length:a),w&&c&&c.length>1&&n(p,c[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(c[o]=void 0)})),c&&R)for(c.groups=v=l(null),o=0;o<R.length;o++)d=R[o],v[d[0]]=c[d[1]];return c}),e.exports=f},2999:(e,t,r)=>{var n=r(7293),a=r(7854),s=a.RegExp,i=n((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),c=i||n((function(){return!s("a","y").sticky})),o=i||n((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:o,MISSED_STICKY:c,UNSUPPORTED_Y:i}},9441:(e,t,r)=>{var n=r(7293),a=r(7854),s=a.RegExp;e.exports=n((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},7168:(e,t,r)=>{var n=r(7293),a=r(7854),s=a.RegExp;e.exports=n((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7152:(e,t,r)=>{"use strict";var n=r(7854),a=r(2104),s=r(614),i=r(9363),c=r(8113),o=r(206),l=r(8053),u=n.Function,v=/MSIE .\./.test(c)||i&&function(){var e=n.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();e.exports=function(e,t){var r=t?2:1;return v?function(n,i){var c=l(arguments.length,1)>r,v=s(n)?n:u(n),d=c?o(arguments,r):[],p=c?function(){a(v,this,d)}:v;return t?e(p,i):e(p)}:e}},1038:(e,t,r)=>{var n=r(2109),a=r(8457),s=r(7072),i=!s((function(e){Array.from(e)}));n({target:"Array",stat:!0,forced:i},{from:a})},6699:(e,t,r)=>{"use strict";var n=r(2109),a=r(1318).includes,s=r(7293),i=r(1223),c=s((function(){return!Array(1).includes()}));n({target:"Array",proto:!0,forced:c},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},2707:(e,t,r)=>{"use strict";var n=r(2109),a=r(1702),s=r(9662),i=r(7908),c=r(6244),o=r(5117),l=r(1340),u=r(7293),v=r(4362),d=r(9341),p=r(8886),h=r(256),f=r(7392),x=r(8008),g=[],m=a(g.sort),y=a(g.push),b=u((function(){g.sort(void 0)})),C=u((function(){g.sort(null)})),w=d("sort"),_=!u((function(){if(f)return f<70;if(!(p&&p>3)){if(h)return!0;if(x)return x<603;var e,t,r,n,a="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(n=0;n<47;n++)g.push({k:t+n,v:r})}for(g.sort((function(e,t){return t.v-e.v})),n=0;n<g.length;n++)t=g[n].k.charAt(0),a.charAt(a.length-1)!==t&&(a+=t);return"DGBEFHACIJK"!==a}})),S=b||!C||!w||!_,I=function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:l(t)>l(r)?1:-1}};n({target:"Array",proto:!0,forced:S},{sort:function(e){void 0!==e&&s(e);var t=i(this);if(_)return void 0===e?m(t):m(t,e);var r,n,a=[],l=c(t);for(n=0;n<l;n++)n in t&&y(a,t[n]);v(a,I(e)),r=c(a),n=0;while(n<r)t[n]=a[n++];while(n<l)o(t,n++);return t}})},541:(e,t,r)=>{"use strict";var n=r(2109),a=r(7908),s=r(6244),i=r(3658),c=r(5117),o=r(7207),l=1!==[].unshift(0),u=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},v=l||!u();n({target:"Array",proto:!0,arity:1,forced:v},{unshift:function(e){var t=a(this),r=s(t),n=arguments.length;if(n){o(r+n);var l=r;while(l--){var u=l+n;l in t?t[u]=t[l]:c(t,u)}for(var v=0;v<n;v++)t[v]=arguments[v]}return i(t,r+n)}})},4916:(e,t,r)=>{"use strict";var n=r(2109),a=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},7601:(e,t,r)=>{"use strict";r(4916);var n=r(2109),a=r(6916),s=r(614),i=r(9670),c=r(1340),o=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),l=/./.test;n({target:"RegExp",proto:!0,forced:!o},{test:function(e){var t=i(this),r=c(e),n=t.exec;if(!s(n))return a(l,t,r);var o=a(n,t,r);return null!==o&&(i(o),!0)}})},5684:(e,t,r)=>{"use strict";var n=r(2109),a=r(1702),s=r(3929),i=r(4488),c=r(1340),o=r(4964),l=a("".indexOf);n({target:"String",proto:!0,forced:!o("includes")},{includes:function(e){return!!~l(c(i(this)),c(s(e)),arguments.length>1?arguments[1]:void 0)}})},6815:(e,t,r)=>{var n=r(2109),a=r(7854),s=r(7152),i=s(a.setInterval,!0);n({global:!0,bind:!0,forced:a.setInterval!==i},{setInterval:i})},8417:(e,t,r)=>{var n=r(2109),a=r(7854),s=r(7152),i=s(a.setTimeout,!0);n({global:!0,bind:!0,forced:a.setTimeout!==i},{setTimeout:i})},2564:(e,t,r)=>{r(6815),r(8417)},5957:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});r(9753);function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e){if(Array.isArray(e))return n(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r(7042),r(8309),r(4916),r(7601);function i(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}r(1703),r(6647);function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return a(e)||s(e)||i(e)||c()}}}]);
//# sourceMappingURL=874.1316774b.js.map