(()=>{"use strict";var e={4767:(e,t,a)=>{a(6992),a(8674),a(9601),a(7727),a(9554),a(1539),a(4747);var i=a(144),r=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar fixed-top navbar-expand-lg"},[t("div",{staticClass:"container-fluid"},[t("form",{staticClass:"form-inline mr-auto",on:{submit:function(t){return t.preventDefault(),e.goToSearch.apply(null,arguments)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"form-control mr-sm-2",attrs:{type:"search",placeholder:"What would you like to cook today?","aria-label":"Search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),t("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[e._v("Search")])],1),t("div",{staticClass:"collapse navbar-collapse justify-content-center",attrs:{id:"navbarNav"}},[t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"main"}}},[e._v("All Recipes")])],1),t("li",{staticClass:"nav-item"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[e._v("About")])],1),e.$root.store.username?[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Personal Region ")]},proxy:!0}],null,!1,3934294191)},[t("b-dropdown-item",{attrs:{to:{name:"favorites"}}},[e._v("Favorite Recipes")]),t("b-dropdown-item",{attrs:{to:{name:"my-recipes"}}},[e._v("My Recipes")]),t("b-dropdown-item",{attrs:{to:{name:"family-recipes"}}},[e._v("My Family Recipes")])],1),t("ul",{staticClass:"navbar-nav"},[t("li",{staticClass:"nav-item"},[t("a",{staticClass:"nav-link",on:{click:e.openModal}},[e._v("Create New Recipe")])])]),t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Hello "+e._s(e.$root.store.username)+" ")]},proxy:!0}],null,!1,2076892747)},[t("b-dropdown-item",{on:{click:e.logout}},[e._v("Logout")])],1)]:e._e(),e.$root.store.username?e._e():t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Hello Guest ")]},proxy:!0}],null,!1,3312379677)},[t("b-dropdown-item",{attrs:{to:{name:"register"}}},[e._v("Register")]),t("b-dropdown-item",{attrs:{to:{name:"login"}}},[e._v("Login")])],1)],2)])])]),e.showModal?t("NewRecipeModal",{ref:"newRecipeModal"}):e._e(),t("div",{staticClass:"background-image"}),t("router-view")],1)},n=[],o=(a(7658),a(8309),function(){var e=this,t=e._self._c;return t("div",[t("b-modal",{attrs:{title:"Create New Recipe",size:"sm","no-backdrop":""},model:{value:e.showModal,callback:function(t){e.showModal=t},expression:"showModal"}},[t("form",{on:{submit:function(t){return t.preventDefault(),e.createRecipe.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"recipeName"}},[e._v("Recipe Name")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.name,expression:"newRecipe.name"}],staticClass:"form-control",attrs:{type:"text",id:"recipeName"},domProps:{value:e.newRecipe.name},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"name",t.target.value)}}})]),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create Recipe")]),t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.closeModal}},[e._v("Cancel")])])])])],1)}),s=[];const l={props:["showModal"],data:function(){return{modalOpen:!1,newRecipe:{name:""}}},methods:{openModal:function(){this.modalOpen=!0},closeModal:function(){this.modalOpen=!1},createRecipe:function(){this.modalOpen=!1}}},c=l;var u=a(1001),p=(0,u.Z)(c,o,s,!1,null,null,null);const m=p.exports,d={name:"App",data:function(){return{showModal:!1,searchQuery:""}},methods:{goToSearch:function(){this.$router.push({name:"search",query:{q:this.searchQuery}})},logout:function(){var e=this;this.$root.store.logout(),this.$router.push("/")["catch"]((function(){e.$forceUpdate()}))},openModal:function(){this.showModal=!0}},components:{NewRecipeModal:m}},h=d;var g=(0,u.Z)(h,r,n,!1,null,null,null);const v=g.exports;var f=a(1939),b=a.n(f),w=a(9669),y=a.n(w),_=(a(8783),a(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"background-image"}),t("div",{staticClass:"content"},[t("h1",{staticClass:"title"},[e._v("Main Page")]),t("RecipePreviewList",{staticClass:"RandomRecipes center",attrs:{title:"Random Recipes"}}),e.$root.store.username?e._e():t("router-link",{attrs:{to:"/login",tag:"button"}},[e._v("You need to Login to view this")]),e._v(" "+e._s(!e.$root.store.username)+" "),t("RecipePreviewList",{class:{RandomRecipes:!0,blur:!e.$root.store.username,center:!0},attrs:{title:"Last Viewed Recipes",disabled:""}})],1)])}),C=[],k=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(" "+e._s(e.title)+": "),e._t("default")],2),t("b-row",e._l(e.recipes,(function(e){return t("b-col",{key:e.id},[t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:e}})],1)})),1)],1)},S=[],L=a(6835),x=a(5957),O=a(8534),P=function(){var e=this,t=e._self._c;return t("router-link",{staticClass:"recipe-preview",attrs:{to:{name:"recipe",params:{recipeId:e.recipe.id}}}},[t("div",{staticClass:"recipe-body"},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image},on:{mouseover:e.showHoverEffect,mouseout:e.hideHoverEffect}}),e.hovered?t("div",{staticClass:"image-hover"},[e._v("Click to view recipe")]):e._e()]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[e.recipe.vegan?t("li",[e._v("Vegan")]):e.recipe.vegetarian?t("li",[e._v("Vegetarian")]):e._e()]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")]),e.recipe.glutenFree?t("li",[e._v("Gluten-Free")]):t("li",[e._v("Contains Gluten")])]),t("div",{staticClass:"recipe-actions"},[t("button",{on:{click:e.toggleFavorite}},[e._v(" "+e._s(e.isFavorite?"Favorited":"Add to Favorites")+" ")]),e.viewed?t("span",{staticClass:"viewed-indicator"},[e._v("Viewed")]):e._e()])])])},R=[];a(6647),a(3710),a(9714);const I={data:function(){return{hovered:!1,viewed:!1,isFavorite:!1}},methods:{showHoverEffect:function(){this.hovered=!0},hideHoverEffect:function(){this.hovered=!1},markAsViewed:function(){this.viewed=!0,localStorage.setItem("viewed_".concat(this.recipe.id),"true")},toggleFavorite:function(e){e.stopPropagation(),this.isFavorite=!this.isFavorite,localStorage.setItem("favorite_".concat(this.recipe.id),this.isFavorite.toString())}},props:{recipe:{type:Object,required:!0}}},T=I;var j=(0,u.Z)(T,P,R,!1,null,"58496ca9",null);const N=j.exports;var F=a(4293);const M={name:"RecipePreviewList",components:{RecipePreview:N},props:{title:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return(0,O.Z)((0,L.Z)().mark((function t(){var a,i,r,n;return(0,L.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:try{i=1,r=(0,F.j)(i),console.log(r),n=r.data.recipes,console.log(n),e.recipes=[],(a=e.recipes).push.apply(a,(0,x.Z)(n))}catch(o){console.log(o)}case 1:case"end":return t.stop()}}),t)})))()}}},E=M;var A=(0,u.Z)(E,k,S,!1,null,"5bac8397",null);const D=A.exports,G={components:{RecipePreviewList:D}},B=G;var $=(0,u.Z)(B,_,C,!1,null,"234c05c9",null);const Z=$.exports;var H=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},z=[],q={},Q=(0,u.Z)(q,H,z,!1,null,null,null);const V=Q.exports;var Y=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"slide-content",staticStyle:{"background-color":"#ffffff"}},[t("div",{staticClass:"text-content"},[t("h1",[e._v("Authors: Ofek Kachlon & Shir Mordechai")]),t("p",[t("b-list-group-item",[t("a",{staticClass:"links",attrs:{href:"https://github.com/shir",target:"_blank"}},[e._v("Shir's GitHub")])])],1),t("p",[t("b-list-group-item",[t("a",{staticClass:"links",attrs:{href:"https://github.com/ofek",target:"_blank"}},[e._v("Ofek's GitHub")])])],1),t("br"),t("h1",{staticClass:"shir"},[e._v("Shir's Responsibility:")]),t("h1",{staticClass:"ofek"},[e._v("Ofek's Responsibility:")]),t("br")])])])},U=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{flex:"1"}},[t("br"),t("br"),t("img",{staticStyle:{"max-width":"80%","margin-left":"20px"},attrs:{src:a(3172)}})]),t("div",{staticStyle:{flex:"2","padding-left":"0px"}},[t("br"),t("br"),t("br"),t("h1",{staticClass:"carousel-slide-title"},[t("b",[e._v("Welcome to Grandma's Recipes Website")])]),t("p",{staticClass:"carousel-slide-text"},[e._v(" Embark on a culinary adventure with us, where flavors know no bounds. Explore a diverse collection of recipes from around the world and unleash your creativity by crafting your own culinary masterpieces. "),t("br"),e._v(" Discover a rich tapestry of tastes, from treasured family recipes passed down through generations to innovative creations that push the boundaries of flavor. Found a favorite dish? Save it to your personal collection and savor it whenever the craving strikes. "),t("br"),e._v(" Searching for something specific? Our advanced recipe search feature allows you to explore recipes tailored to your preferences, whether it's dietary needs, culinary preferences, or ingredient restrictions. "),t("br"),e._v(" Join us as we celebrate the art of cooking and the joy of sharing meals with loved ones. Bon appétit! ")])])])}];const J={name:"About",data:function(){return{slide:0}}},W=J;var K=(0,u.Z)(W,Y,U,!1,null,"027c032e",null);const X=K.exports;var ee=[{path:"/",name:"main",component:Z},{path:"/register",name:"register",component:function(){return a.e(173).then(a.bind(a,4173))}},{path:"/login",name:"login",component:function(){return a.e(345).then(a.bind(a,4345))}},{path:"/search",name:"search",component:function(){return a.e(903).then(a.bind(a,4903))}},{path:"   ",name:"recipe",component:function(){return a.e(850).then(a.bind(a,7850))}},{path:"/about",name:"about",component:X},{path:"*",name:"notFound",component:V}];const te=ee;var ae=a(8345),ie=a(8620),re=(a(8702),a(7024),a(9301)),ne=a(7563),oe=a(5053),se=a(1869),le=a(8672),ce=a(4500),ue=a(8348),pe=a(4063),me=a(4167),de=a(8824);i["default"].use(ae.ZP);var he=new ae.ZP({routes:te});[re.E,ne.w6,oe.g,se.SY,le.xL,ce.u3,ue.v5,pe.F,me.m$,de.A6].forEach((function(e){return i["default"].use(e)})),i["default"].use(ie.ZP),y().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),y().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),i["default"].use(b(),y()),i["default"].config.productionTip=!1;var ge={server_domain:"http://localhost:3000",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ge),new i["default"]({router:he,data:function(){return{store:ge}},methods:{toast:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:a,solid:!0,appendToast:i,autoHideDelay:3e3})}},render:function(e){return e(v)}}).$mount("#app")},4293:(e,t,a)=>{a.d(t,{i:()=>o,j:()=>n});a(7658);const i=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>.","analyzedInstructions":[],"instructions":"","extendedIngredients":[{"id":1001,"aisle":"Milk, Eggs, Other Dairy","image":"butter-sliced.jpg","consistency":"SOLID","name":"butter","nameClean":"butter","original":"1 tbsp butter","originalName":"butter","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":10011135,"aisle":"Produce","image":"cauliflower.jpg","consistency":"SOLID","name":"cauliflower florets","nameClean":"cauliflower florets","original":"about 2 cups frozen cauliflower florets, thawed, cut into bite-sized pieces","originalName":"about frozen cauliflower florets, thawed, cut into bite-sized pieces","amount":2,"unit":"cups","meta":["frozen","thawed","cut into bite-sized pieces"],"measures":{"us":{"amount":2,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":200,"unitShort":"g","unitLong":"grams"}}},{"id":1038,"aisle":"Cheese","image":"parmesan.jpg","consistency":"SOLID","name":"cheese","nameClean":"pecorino romano","original":"2 tbsp grated cheese (I used romano)","originalName":"grated cheese (I used romano)","amount":2,"unit":"tbsp","meta":["grated","(I used romano)"],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":1034053,"aisle":"Oil, Vinegar, Salad Dressing","image":"olive-oil.jpg","consistency":"LIQUID","name":"extra virgin olive oil","nameClean":"extra virgin olive oil","original":"1-2 tbsp extra virgin olive oil","originalName":"extra virgin olive oil","amount":1,"unit":"tbsp","meta":[],"measures":{"us":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"},"metric":{"amount":1,"unitShort":"Tbsp","unitLong":"Tbsp"}}},{"id":11215,"aisle":"Produce","image":"garlic.png","consistency":"SOLID","name":"garlic","nameClean":"garlic","original":"5-6 cloves garlic","originalName":"garlic","amount":5,"unit":"cloves","meta":[],"measures":{"us":{"amount":5,"unitShort":"cloves","unitLong":"cloves"},"metric":{"amount":5,"unitShort":"cloves","unitLong":"cloves"}}},{"id":10720420,"aisle":"Pasta and Rice","image":"spaghetti.jpg","consistency":"SOLID","name":"pasta","nameClean":"linguine","original":"6-8 ounces pasta (I used linguine)","originalName":"pasta (I used linguine)","amount":6,"unit":"ounces","meta":["(I used linguine)"],"measures":{"us":{"amount":6,"unitShort":"oz","unitLong":"ounces"},"metric":{"amount":170.097,"unitShort":"g","unitLong":"grams"}}},{"id":1032009,"aisle":"Spices and Seasonings","image":"red-pepper-flakes.jpg","consistency":"SOLID","name":"couple of pepper flakes","nameClean":"red pepper flakes","original":"couple of pinches red pepper flakes, optional","originalName":"couple of red pepper flakes, optional","amount":2,"unit":"pinches","meta":["red"],"measures":{"us":{"amount":2,"unitShort":"pinches","unitLong":"pinches"},"metric":{"amount":2,"unitShort":"pinches","unitLong":"pinches"}}},{"id":1102047,"aisle":"Spices and Seasonings","image":"salt-and-pepper.jpg","consistency":"SOLID","name":"salt and pepper","nameClean":"salt and pepper","original":"salt and pepper, to taste","originalName":"salt and pepper, to taste","amount":2,"unit":"servings","meta":["to taste"],"measures":{"us":{"amount":2,"unitShort":"servings","unitLong":"servings"},"metric":{"amount":2,"unitShort":"servings","unitLong":"servings"}}},{"id":11291,"aisle":"Produce","image":"spring-onions.jpg","consistency":"SOLID","name":"scallions","nameClean":"spring onions","original":"3 scallions, chopped, white and green parts separated","originalName":"scallions, chopped, white and green parts separated","amount":3,"unit":"","meta":["white","green","separated","chopped"],"measures":{"us":{"amount":3,"unitShort":"","unitLong":""},"metric":{"amount":3,"unitShort":"","unitLong":""}}},{"id":14106,"aisle":"Alcoholic Beverages","image":"white-wine.jpg","consistency":"LIQUID","name":"white wine","nameClean":"dry white wine","original":"2-3 tbsp white wine","originalName":"white wine","amount":2,"unit":"tbsp","meta":[],"measures":{"us":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"},"metric":{"amount":2,"unitShort":"Tbsps","unitLong":"Tbsps"}}},{"id":99025,"aisle":"Pasta and Rice","image":"breadcrumbs.jpg","consistency":"SOLID","name":"bread crumbs","nameClean":"whole wheat breadcrumbs","original":"1/4 cup whole wheat bread crumbs (I used panko)","originalName":"whole wheat bread crumbs (I used panko)","amount":0.25,"unit":"cup","meta":["whole wheat","(I used panko)"],"measures":{"us":{"amount":0.25,"unitShort":"cups","unitLong":"cups"},"metric":{"amount":27,"unitShort":"g","unitLong":"grams"}}}],"servings":2}'),r=JSON.parse('{"id":716429,"image":"https://img.spoonacular.com/recipes/716429-556x370.jpg","title":"Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs","readyInMinutes":45,"aggregateLikes":209,"vegetarian":false,"vegan":false,"glutenFree":false,"summary":"You can never have too many main course recipes, so give Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs a try. One serving contains <b>543 calories</b>, <b>17g of protein</b>, and <b>16g of fat</b>. For <b>$1.57 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 2. A mixture of butter, white wine, pasta, and a handful of other ingredients are all it takes to make this recipe so yummy. 209 people have tried and liked this recipe. It is brought to you by fullbellysisters.blogspot.com. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is tremendous. If you like this recipe, take a look at these similar recipes: <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1230187\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229807\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>, and <a href=\\"https://spoonacular.com/recipes/pasta-with-garlic-scallions-cauliflower-breadcrumbs-1229669\\">Pasta with Garlic, Scallions, Cauliflower & Breadcrumbs</a>."}');function n(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=[],a=0;a<e;a++)t.push(r);return{data:{recipes:t}}}function o(e){return{data:{recipe:i}}}},3172:(e,t,a)=>{e.exports=a.p+"img/megan-bucknall-edyYnPwpcXQ-unsplash.4b6df3d4.jpg"}},t={};function a(i){var r=t[i];if(void 0!==r)return r.exports;var n=t[i]={exports:{}};return e[i].call(n.exports,n,n.exports,a),n.exports}a.m=e,(()=>{var e=[];a.O=(t,i,r,n)=>{if(!i){var o=1/0;for(u=0;u<e.length;u++){for(var[i,r,n]=e[u],s=!0,l=0;l<i.length;l++)(!1&n||o>=n)&&Object.keys(a.O).every((e=>a.O[e](i[l])))?i.splice(l--,1):(s=!1,n<o&&(o=n));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[i,r,n]}})(),(()=>{a.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return a.d(t,{a:t}),t}})(),(()=>{a.d=(e,t)=>{for(var i in t)a.o(t,i)&&!a.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}})(),(()=>{a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,i)=>(a.f[i](e,t),t)),[]))})(),(()=>{a.u=e=>"js/"+e+"."+{173:"fb484c51",345:"c1918e64",850:"07860852",903:"bf638e8d"}[e]+".js"})(),(()=>{a.miniCssF=e=>"css/"+e+"."+{173:"026d62c6",345:"f99c4ebb",850:"f952d6f2"}[e]+".css"})(),(()=>{a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";a.l=(i,r,n,o)=>{if(e[i])e[i].push(r);else{var s,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var p=c[u];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+n){s=p;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+n),s.src=i),e[i]=[r];var m=(t,a)=>{s.onerror=s.onload=null,clearTimeout(d);var r=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),(()=>{a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{a.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,a,i,r)=>{var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var o=a=>{if(n.onerror=n.onload=null,"load"===a.type)i();else{var o=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,n.parentNode&&n.parentNode.removeChild(n),r(l)}};return n.onerror=n.onload=o,n.href=t,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},t=(e,t)=>{for(var a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var r=a[i],n=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(n===e||n===t))return r}var o=document.getElementsByTagName("style");for(i=0;i<o.length;i++){r=o[i],n=r.getAttribute("data-href");if(n===e||n===t)return r}},i=i=>new Promise(((r,n)=>{var o=a.miniCssF(i),s=a.p+o;if(t(o,s))return r();e(i,s,null,r,n)})),r={143:0};a.f.miniCss=(e,t)=>{var a={173:1,345:1,850:1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=i(e).then((()=>{r[e]=0}),(t=>{throw delete r[e],t})))}}})(),(()=>{var e={143:0};a.f.j=(t,i)=>{var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)i.push(r[2]);else{var n=new Promise(((a,i)=>r=e[t]=[a,i]));i.push(r[2]=n);var o=a.p+a.u(t),s=new Error,l=i=>{if(a.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var n=i&&("load"===i.type?"missing":i.type),o=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",s.name="ChunkLoadError",s.type=n,s.request=o,r[1](s)}};a.l(o,l,"chunk-"+t,t)}},a.O.j=t=>0===e[t];var t=(t,i)=>{var r,n,[o,s,l]=i,c=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var u=l(a)}for(t&&t(i);c<o.length;c++)n=o[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},i=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))})();var i=a.O(void 0,[998],(()=>a(4767)));i=a.O(i)})();
//# sourceMappingURL=app.55f2a16c.js.map