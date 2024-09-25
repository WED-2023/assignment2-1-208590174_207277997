(()=>{"use strict";var e={940:(e,t,r)=>{r.d(t,{Z:()=>p});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"recipe-preview"},[t("div",{on:{click:function(t){return e.navigateToViewPage(e.recipe.id)}}},[t("img",{staticClass:"recipe-image",attrs:{src:e.recipe.image},on:{mouseover:e.showHoverEffect,mouseout:e.hideHoverEffect}}),e.hovered?t("div",{staticClass:"image-hover"},[e._v("Click to view recipe")]):e._e()]),t("div",{staticClass:"recipe-footer"},[t("div",{staticClass:"recipe-title",attrs:{title:e.recipe.title}},[e._v(" "+e._s(e.recipe.title)+" ")]),t("ul",{staticClass:"recipe-overview"},[e.recipe.vegan?t("li",[t("img",{staticClass:"diet-logo",attrs:{src:r(1846),alt:"Vegan"}})]):e._e(),e.recipe.vegetarian?t("li",{staticClass:"vegetarian"},[t("img",{staticClass:"diet-logo",attrs:{src:r(7159),alt:"Vegetarian"}})]):e._e(),!1===e.recipe.glutenFree?t("li",[t("img",{staticClass:"diet-logo",attrs:{src:r(6720),alt:"Contains Gluten"}})]):e._e()]),t("ul",{staticClass:"recipe-overview"},[t("li",[e._v(e._s(e.recipe.readyInMinutes)+" minutes")]),t("li",[e._v(e._s(e.recipe.aggregateLikes)+" likes")])]),t("div",{staticClass:"recipe-actions"},[t("button",{staticClass:"favorite-button",class:{"enabled-button":e.isButtonEnabled,"disabled-button":!e.isButtonEnabled},attrs:{disabled:e.isButtonDisabled()},on:{click:function(t){return t.stopPropagation(),e.toggleFavorite(t,e.recipe.recipe_id)}}},[e._v(" Add to favorites "),e.isFavorite?t("i",{staticClass:"fas fa-heart heart-icon-filled"}):t("i",{staticClass:"far fa-heart heart-icon-unfilled"})]),e.viewed?t("span",{staticClass:"viewed-indicator"},[e._v("Viewed")]):e._e()])])])},a=[],i=r(124),s=r(8534);r(7658),r(8309),r(6647),r(3710),r(1539),r(9714);const o={name:"RecipePreview",data:function(){return{hovered:!1,isFavorite:"true"===localStorage.getItem("favorite_".concat(this.recipe.id)),isButtonEnabled:!1}},props:{recipe:{type:Object,required:!0}},computed:{viewed:function(){return"true"===localStorage.getItem("viewed_".concat(this.recipe.id))}},methods:{navigateToViewPage:function(e){e&&this.$router.push({name:"recipe",params:{recipeId:e}})},like:function(e){var t=this;return(0,s.Z)((0,i.Z)().mark((function r(){var n;return(0,i.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,t.axios.defaults.withCredentials=!0,r.next=4,t.axios.post(t.$root.store.server_domain+"/users/favorites",{recipeId:e});case 4:return n=r.sent,t.isButtonEnabled=!0,r.abrupt("return",n);case 9:r.prev=9,r.t0=r["catch"](0),console.log(r.t0.response);case 12:case"end":return r.stop()}}),r,null,[[0,9]])})))()},isButtonDisabled:function(){return!0===this.isButtonEnabled||"favorite-recipes"===this.$route.name},showHoverEffect:function(){this.hovered=!0},hideHoverEffect:function(){this.hovered=!1},markAsViewed:function(){this.viewed=!0,localStorage.setItem("viewed_".concat(this.recipe.id),"true")},toggleFavorite:function(e,t){if(e.stopPropagation(),this.isFavorite=!this.isFavorite,localStorage.setItem("favorite_".concat(this.recipe.id),this.isFavorite.toString()),1==this.isFavorite){var r=this.like(t);r&&this.$bvToast.toast("Successfully added to favorites",{title:"Notification",autoHideDelay:5e3,toaster:"b-toaster-bottom-right",appendToast:!0,variant:"success"})}}}},c=o;var l=r(1001),u=(0,l.Z)(c,n,a,!1,null,"52863409",null);const p=u.exports},5273:(e,t,r)=>{r.d(t,{Z:()=>d});var n=function(){var e=this,t=e._self._c;return t("b-container",[t("h3",[e._v(e._s(e.title))]),e._l(e.recipes,(function(r){return t("b-col",{key:r.recipe_id},[t("br"),t("RecipePreview",{staticClass:"recipePreview",attrs:{recipe:r},nativeOn:{click:function(t){return e.viewRecipe(r.recipe_id)}}})],1)}))],2)},a=[],i=r(124),s=r(8534),o=(r(7658),r(940));const c={name:"RecipePreviewList",components:{RecipePreview:o.Z},props:{title:{type:String,required:!0},username:{type:String,required:!1},recipes:{type:Array,required:!0}},data:function(){return{page_title:" ",localRecipes:this.recipes}},methods:{updateRecipes:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r,n,a;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,"Explore these recipes"!==e.title){t.next=8;break}return t.next=4,e.axios.get(e.$root.store.server_domain+"/recipes/random",{withCredentials:!0});case 4:r=t.sent,e.recipes=r.data,t.next=20;break;case 8:if("Last viewed recipes"!==e.title){t.next=15;break}return t.next=11,e.axios.get(e.$root.store.server_domain+"/users/lastViewed",{withCredentials:!0});case 11:n=t.sent,e.recipes=n.data,t.next=20;break;case 15:if("Users Favorite Recipes"!==e.title){t.next=20;break}return t.next=18,e.axios.get(e.$root.store.server_domain+"/users/favorites",{withCredentials:!0});case 18:a=t.sent,e.recipes=a.data;case 20:t.next=25;break;case 22:t.prev=22,t.t0=t["catch"](0),console.error("Error fetching recipes:",t.t0);case 25:case"end":return t.stop()}}),t,null,[[0,22]])})))()},viewRecipe:function(e){e?this.$router.push({name:"recipe",params:{recipeId:e}}):console.error("Recipe ID is missing")}},mounted:function(){this.updateRecipes()}},l=c;var u=r(1001),p=(0,u.Z)(l,n,a,!1,null,"be58568a",null);const d=p.exports},8260:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("b-card",{staticClass:"login-card"},[t("h1",{staticClass:"title"},[e._v("Login")]),t("b-form",{on:{submit:function(t){return t.preventDefault(),e.onLogin.apply(null,arguments)}}},[t("b-form-group",{attrs:{id:"input-group-Username","label-cols-sm":"3",label:"Username:","label-for":"Username"}},[t("b-form-input",{attrs:{id:"Username",type:"text",state:e.validateState("username")},model:{value:e.$v.form.username.$model,callback:function(t){e.$set(e.$v.form.username,"$model",t)},expression:"$v.form.username.$model"}}),t("b-form-invalid-feedback",[e._v(" Username is required ")])],1),t("b-form-group",{attrs:{id:"input-group-Password","label-cols-sm":"3",label:"Password:","label-for":"Password"}},[t("b-form-input",{attrs:{id:"Password",type:"password",state:e.validateState("password")},model:{value:e.$v.form.password.$model,callback:function(t){e.$set(e.$v.form.password,"$model",t)},expression:"$v.form.password.$model"}}),t("b-form-invalid-feedback",[e._v(" Password is required ")])],1),t("b-button",{staticClass:"mx-auto w-100",staticStyle:{width:"100px",display:"block"},attrs:{type:"submit",variant:"primary"}},[e._v("Login")]),t("div",{staticClass:"mt-2"},[e._v(" Do not have an account yet? "),t("router-link",{attrs:{to:"register"}},[e._v(" Register in here")])],1)],1),e.form.submitError?t("b-alert",{staticClass:"mt-2",attrs:{variant:"warning",dismissible:"",show:""}},[e._v(" Login failed: "+e._s(e.form.submitError)+" ")]):e._e()],1)],1)},a=[],i=r(124),s=r(8534),o=(r(7658),r(379));r(9239);const c={name:"Login",data:function(){return{form:{username:"",password:"",submitError:void 0}}},validations:{form:{username:{required:o.C1},password:{required:o.C1}}},methods:{validateState:function(e){var t=this.$v.form[e],r=t.$dirty,n=t.$error;return r?!n:null},Login:function(){var e=this;return(0,s.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/Login",{username:e.form.username,password:e.form.password});case 3:r=t.sent,r&&(console.log(e.$root.store.login),e.$root.store.login(e.form.username),e.$router.push("/")),t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 11:case"end":return t.stop()}}),t,null,[[0,7]])})))()},onLogin:function(){this.form.submitError=void 0,this.$v.form.$touch(),this.$v.form.$anyError||this.Login()}}},l=c;var u=r(1001),p=(0,u.Z)(l,n,a,!1,null,"db641d06",null);const d=p.exports},5424:(e,t,r)=>{r(6992),r(8674),r(9601),r(7727),r(9554),r(1539),r(4747);var n=r(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",{staticClass:"navbar fixed-top navbar-expand-lg"},[t("div",{staticClass:"container-fluid"},[t("form",{staticClass:"enhanced-search form-inline mr-auto",on:{submit:function(t){return t.preventDefault(),e.goToSearch.apply(null,arguments)}}},[t("div",{staticClass:"search-wrapper"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"form-control form-control-search",attrs:{type:"search",placeholder:"Search recipes...","aria-label":"Search"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._m(0)])]),t("router-link",{staticClass:"navbar-brand mx-auto",attrs:{to:"/"}},[t("img",{staticClass:"navbar-logo",attrs:{src:r(2890),alt:"Logo"}})]),t("div",{staticClass:"navbar-nav"},[t("router-link",{staticClass:"nav-link",attrs:{to:{name:"main"}}},[e._v("All Recipes")]),t("router-link",{staticClass:"nav-link",attrs:{to:{name:"about"}}},[e._v("About")]),e.$root.store.username?[t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Personal Region ")]},proxy:!0}],null,!1,3934294191)},[t("b-dropdown-item",{staticClass:"custom-dropdown-item",attrs:{to:{name:"favorite-recipes"}}},[e._v("Favorite Recipes")]),t("b-dropdown-item",{staticClass:"custom-dropdown-item",attrs:{to:{name:"my-recipes"}}},[e._v("My Recipes")]),t("b-dropdown-item",{staticClass:"custom-dropdown-item",attrs:{to:{name:"family-recipes"}}},[e._v("My Family Recipes")])],1),t("a",{staticClass:"nav-link create-recipe-link",on:{click:e.openModal}},[e._v("Create New Recipe")]),t("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._v(" Hello "+e._s(e.$root.store.username)+" ")]},proxy:!0}],null,!1,2076892747)},[t("b-dropdown-item",{on:{click:e.logout}},[e._v("Logout")])],1)]:[t("router-link",{staticClass:"btn-link",attrs:{to:{name:"register"}}},[e._v("Register")]),t("router-link",{staticClass:"btn-link",attrs:{to:{name:"login"}}},[e._v("Log In")])]],2)],1)]),t("NewRecipeModal",{ref:"NewRecipeModal"}),t("div",{staticClass:"background-image"}),t("router-view")],1)},i=[function(){var e=this,t=e._self._c;return t("button",{staticClass:"btn btn-search",attrs:{type:"submit"}},[t("i",{staticClass:"fas fa-search"})])}],s=r(124),o=r(8534),c=(r(7658),r(3210),r(9753),r(2222),r(7042),r(8309),r(1249),r(7327),function(){var e=this,t=e._self._c;return t("div",[t("b-modal",{staticClass:"modal-footer",attrs:{title:"Create New Recipe",size:"lg","no-backdrop":"","hide-footer":""},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[t("form",{staticClass:"recipe-form",on:{submit:function(t){return t.preventDefault(),e.createRecipe.apply(null,arguments)}}},[t("h2",[e._v("Add a New Recipe")]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"recipeTitle"}},[e._v("Recipe Title")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.title,expression:"newRecipe.title"}],staticClass:"form-control",attrs:{type:"text",id:"recipeTitle"},domProps:{value:e.newRecipe.title},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"title",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"image"}},[e._v("Image URL")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.image,expression:"newRecipe.image"}],staticClass:"form-control",attrs:{type:"text",id:"image"},domProps:{value:e.newRecipe.image},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"image",t.target.value)}}})]),t("div",{staticClass:"form-row"},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"readyInMinutes"}},[e._v("Ready In Minutes")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.readyInMinutes,expression:"newRecipe.readyInMinutes"}],staticClass:"form-control",attrs:{type:"number",id:"readyInMinutes"},domProps:{value:e.newRecipe.readyInMinutes},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"readyInMinutes",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"aggregateLikes"}},[e._v("Aggregate Likes")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.aggregateLikes,expression:"newRecipe.aggregateLikes"}],staticClass:"form-control",attrs:{type:"number",id:"aggregateLikes"},domProps:{value:e.newRecipe.aggregateLikes},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"aggregateLikes",t.target.value)}}})])]),t("div",{staticClass:"form-group form-check-row"},[t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.vegetarian,expression:"newRecipe.vegetarian"}],attrs:{type:"checkbox",id:"vegetarian"},domProps:{checked:Array.isArray(e.newRecipe.vegetarian)?e._i(e.newRecipe.vegetarian,null)>-1:e.newRecipe.vegetarian},on:{change:function(t){var r=e.newRecipe.vegetarian,n=t.target,a=!!n.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);n.checked?s<0&&e.$set(e.newRecipe,"vegetarian",r.concat([i])):s>-1&&e.$set(e.newRecipe,"vegetarian",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.newRecipe,"vegetarian",a)}}}),t("label",{attrs:{for:"vegetarian"}},[e._v("Vegetarian")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.vegan,expression:"newRecipe.vegan"}],attrs:{type:"checkbox",id:"vegan"},domProps:{checked:Array.isArray(e.newRecipe.vegan)?e._i(e.newRecipe.vegan,null)>-1:e.newRecipe.vegan},on:{change:function(t){var r=e.newRecipe.vegan,n=t.target,a=!!n.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);n.checked?s<0&&e.$set(e.newRecipe,"vegan",r.concat([i])):s>-1&&e.$set(e.newRecipe,"vegan",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.newRecipe,"vegan",a)}}}),t("label",{attrs:{for:"vegan"}},[e._v("Vegan")])]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.glutenFree,expression:"newRecipe.glutenFree"}],attrs:{type:"checkbox",id:"glutenFree"},domProps:{checked:Array.isArray(e.newRecipe.glutenFree)?e._i(e.newRecipe.glutenFree,null)>-1:e.newRecipe.glutenFree},on:{change:function(t){var r=e.newRecipe.glutenFree,n=t.target,a=!!n.checked;if(Array.isArray(r)){var i=null,s=e._i(r,i);n.checked?s<0&&e.$set(e.newRecipe,"glutenFree",r.concat([i])):s>-1&&e.$set(e.newRecipe,"glutenFree",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.newRecipe,"glutenFree",a)}}}),t("label",{attrs:{for:"glutenFree"}},[e._v("Gluten Free")])])]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"summary"}},[e._v("Summary")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.summary,expression:"newRecipe.summary"}],staticClass:"form-control",attrs:{id:"summary"},domProps:{value:e.newRecipe.summary},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"summary",t.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",[e._v("Ingredients")]),e._l(e.newRecipe.extendedIngredients,(function(r,n){return t("div",{key:n,staticClass:"ingredient-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"ingredient.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Ingredient Name"},domProps:{value:r.name},on:{input:function(t){t.target.composing||e.$set(r,"name",t.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:r.amount,expression:"ingredient.amount"}],staticClass:"form-control",attrs:{type:"number",placeholder:"Amount"},domProps:{value:r.amount},on:{input:function(t){t.target.composing||e.$set(r,"amount",t.target.value)}}}),t("select",{directives:[{name:"model",rawName:"v-model",value:r.unit,expression:"ingredient.unit"}],staticClass:"form-control",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(r,"unit",t.target.multiple?n:n[0])}}},[t("option",{attrs:{value:""}},[e._v("Measure Unit")]),t("option",{attrs:{value:"Tbsp"}},[e._v("tablespoon")]),t("option",{attrs:{value:"Spoon"}},[e._v("teaspoon")]),t("option",{attrs:{value:"Cups"}},[e._v("cups")]),t("option",{attrs:{value:"Grams"}},[e._v("grams")]),t("option",{attrs:{value:"ml"}},[e._v("ounces")])]),t("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(t){return e.removeIngredient(n)}}},[e._v("Remove")])])})),t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.addIngredient}},[e._v("Add Ingredient")])],2),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"instructions"}},[e._v("Instructions")]),t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newRecipe.instructions,expression:"newRecipe.instructions"}],staticClass:"form-control",attrs:{id:"instructions"},domProps:{value:e.newRecipe.instructions},on:{input:function(t){t.target.composing||e.$set(e.newRecipe,"instructions",t.target.value)}}})]),t("div",{staticClass:"modal-footer"},[t("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("Create Recipe")]),t("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:e.closeModal}},[e._v("Close")])])])])],1)}),l=[],u=r(6347);r(561),r(7941),r(199),r(5352);r(3162);const p={data:function(){return{modalOpen:!1,newRecipe:{title:"",image:"",readyInMinutes:0,aggregateLikes:0,vegetarian:!1,vegan:!1,glutenFree:!1,summary:"",instructions:"",extendedIngredients:[],mappedIngredients:[]}}},methods:{openModal:function(){this.modalOpen=!0},closeModal:function(){this.modalOpen=!1},addIngredient:function(){this.newRecipe.extendedIngredients.push({name:"",amount:1,unit:""})},removeIngredient:function(e){this.newRecipe.extendedIngredients.splice(e,1)},transformIngredients:function(e){return e.map((function(e){return{name:e.name,amount:e.amount,unit:e.unit}}))},createRecipe:function(){if(this.newRecipe.title&&this.newRecipe.image&&0!=this.newRecipe.readyInMinutes&&this.newRecipe.summary&&this.newRecipe.instructions&&0!==this.newRecipe.extendedIngredients.length){var e,t=(0,u.Z)(this.newRecipe.extendedIngredients);try{for(t.s();!(e=t.n()).done;){var r=e.value;if(!r.name||!r.amount||!r.unit)return void alert("Please fill in all ingredient fields.")}}catch(n){t.e(n)}finally{t.f()}this.create()}else alert("Please fill in all required fields.")},create:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.mappedIngredients=e.transformIngredients(e.newRecipe.extendedIngredients),t.prev=1,t.next=4,e.axios.post(e.$root.store.server_domain+"/users/createRecipes",{title:e.newRecipe.title,readyInMinutes:e.newRecipe.readyInMinutes,image:e.newRecipe.image,summary:e.newRecipe.summary,instructions:e.newRecipe.instructions,popularity:e.newRecipe.aggregateLikes,vegan:e.newRecipe.vegan,vegetarian:e.newRecipe.vegetarian,glutenFree:e.newRecipe.glutenFree,ingredients:e.mappedIngredients});case 4:r=t.sent,r&&(e.$bvToast.toast("New Recipe was successfully added",{title:"Notification",autoHideDelay:5e3,toaster:"b-toaster-bottom-right",appendToast:!0,variant:"success"}),e.modalOpen=!1),t.next=12;break;case 8:t.prev=8,t.t0=t["catch"](1),console.log(t.t0.response),e.form.submitError=t.t0.response.data.message;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}},d=p;var v=r(1001),m=(0,v.Z)(d,c,l,!1,null,"5c381ecc",null);const f=m.exports;var g=r(9669),h=r.n(g);const b={name:"App",data:function(){return{searchQuery:""}},methods:{logout:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.post(e.$root.store.server_domain+"/Logout");case 3:r=t.sent,r&&(e.$root.store.logout(),e.$router.push("/")["catch"]((function(){e.$forceUpdate()}))),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.error("Error logging out:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},goToSearch:function(){""!==this.searchQuery.trim()&&this.$router.push({name:"search",query:{q:this.searchQuery}})},openModal:function(){this.$refs.NewRecipeModal.openModal()}},components:{NewRecipeModal:f}},w=b;var y=(0,v.Z)(w,a,i,!1,null,null,null);const _=y.exports;var R=r(1939),k=r.n(R),C=r(6123),x=r.n(C),$=(r(8783),r(3948),function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("div",{staticClass:"background-image"}),t("div",{staticClass:"content"},[t("div",{staticClass:"columns"},[t("div",{staticClass:"left-column"},[t("RecipePreviewList",{ref:"randomRecipesList",staticClass:"RandomRecipes center",attrs:{title:"Explore these recipes",initialRecipes:e.randomRecipes,username:e.$root.store.username}}),t("b-button",{staticClass:"more-recipes-button",attrs:{variant:"outline-primary"},on:{click:e.fetchRandomRecipes}},[e._v("More Recipes")])],1),t("div",{staticClass:"right-column"},[t("div",{staticClass:"right-column-inner"},[e.$root.store.username?[t("RecipePreviewList",{ref:"lastViewedRecipesList",staticClass:"LastViewedRecipes center",attrs:{title:"Last viewed recipes",initialRecipes:e.lastViewedRecipes,username:e.$root.store.username}})]:[t("div",{staticClass:"login-card-wrapper"},[t("LoginPage")],1)]],2)])])])])}),P=[],L=r(5273),I=(r(8260),r(5193));const S={components:{RecipePreviewList:L.Z,BButton:I.T},data:function(){return{randomRecipes:[],lastViewedRecipes:[]}},mounted:function(){this.$root.store.username&&this.fetchLastViewedRecipes()},methods:{fetchRandomRecipes:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.randomRecipesList.updateRecipes(3);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error("Error fetching random recipes:",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()},fetchLastViewedRecipes:function(){var e=this;return(0,o.Z)((0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$refs.lastViewedRecipesList.updateRecipes(3);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t["catch"](0),console.error("Error fetching last viewed recipes:",t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}},E=S;var F=(0,v.Z)(E,$,P,!1,null,"6088f660",null);const Z=F.exports;var A=function(){var e=this,t=e._self._c;return t("div",{staticClass:"container"},[t("h1",[e._v("Four Oh Four you didn't")]),t("router-link",{attrs:{to:"/",exact:""}},[e._v("ET Go Home")])],1)},N=[],M={},O=(0,v.Z)(M,A,N,!1,null,null,null);const T=O.exports;var j=function(){var e=this,t=e._self._c;return t("div",[e._m(0),t("div",{staticClass:"slide-content",staticStyle:{"background-color":"#ffffff"}},[t("div",{staticClass:"text-content"},[t("h1",[e._v("Authors: Ofek Kachlon & Shir Mordechai")]),t("p",[t("b-list-group-item",[t("a",{staticClass:"links",attrs:{href:"https://github.com/shirmor",target:"_blank"}},[e._v("Shir's GitHub")])])],1),t("p",[t("b-list-group-item",[t("a",{staticClass:"links",attrs:{href:"https://github.com/ofekkah",target:"_blank"}},[e._v("Ofek's GitHub")])])],1),t("br"),t("h1",{staticClass:"shir"},[e._v("Shir's Responsibility: Logic & Design")]),t("h1",{staticClass:"ofek"},[e._v("Ofek's Responsibility: Logic & Design")]),t("br"),t("p",[t("b-list-group-item",[t("a",{staticClass:"links",attrs:{href:"https://wed-2023.github.io/207277997/",target:"_blank"}},[e._v("Shir's Preview Project")])])],1),t("p",[t("b-list-group-item",[t("a",{staticClass:"links",attrs:{href:"https://wed-2023.github.io/208590174/",target:"_blank"}},[e._v("Ofek's Preview Project")])])],1)])])])},D=[function(){var e=this,t=e._self._c;return t("div",{staticStyle:{display:"flex"}},[t("div",{staticStyle:{flex:"1"}},[t("br"),t("br"),t("img",{staticStyle:{"max-width":"80%","margin-left":"20px"},attrs:{src:r(3172)}})]),t("div",{staticStyle:{flex:"2","padding-left":"0px"}},[t("br"),t("br"),t("br"),t("h1",{staticClass:"carousel-slide-title"},[t("b",[e._v("Welcome to D'Foodie Recipes Website")])]),t("p",{staticClass:"carousel-slide-text"},[e._v(" Embark on a culinary adventure with us, where flavors know no bounds. Explore a diverse collection of recipes from around the world and unleash your creativity by crafting your own culinary masterpieces. "),t("br"),e._v(" Discover a rich tapestry of tastes, from treasured family recipes passed down through generations to innovative creations that push the boundaries of flavor. Found a favorite dish? Save it to your personal collection and savor it whenever the craving strikes. "),t("br"),e._v(" Searching for something specific? Our advanced recipe search feature allows you to explore recipes tailored to your preferences, whether it's dietary needs, culinary preferences, or ingredient restrictions. "),t("br"),e._v(" Join us as we celebrate the art of cooking and the joy of sharing meals with loved ones. Bon appétit! ")])])])}];const V={name:"About",data:function(){return{slide:0}}},q=V;var B=(0,v.Z)(q,j,D,!1,null,"93af0d52",null);const H=B.exports;var U=[{path:"/",name:"main",component:Z},{path:"/register",name:"register",component:function(){return r.e(407).then(r.bind(r,9407))}},{path:"/login",name:"login",component:function(){return Promise.resolve().then(r.bind(r,8260))}},{path:"/search",name:"search",component:function(){return r.e(42).then(r.bind(r,9042))}},{path:"/recipeViewPage",name:"recipe",component:function(){return Promise.all([r.e(723),r.e(306)]).then(r.bind(r,1306))}},{path:"/about",name:"about",component:H},{path:"*",name:"notFound",component:T},{path:"/my-recipes",name:"my-recipes",component:function(){return r.e(350).then(r.bind(r,9350))}},{path:"/favorite-recipes",name:"favorite-recipes",component:function(){return r.e(515).then(r.bind(r,2515))}},{path:"/family-recipes",name:"family-recipes",component:function(){return Promise.all([r.e(723),r.e(331)]).then(r.bind(r,9331))}}];const Q=U;var G=r(8345),K=r(8620),W=(r(8702),r(7024),r(508)),X=r(7563),Y=r(7419),z=r(1869),J=r(295),ee=r(3090),te=r(794),re=r(4063),ne=r(8793),ae=r(7772),ie=r(869),se=r(3017);n["default"].use(G.ZP),n["default"].use(x());var oe=new G.ZP({routes:Q});h().defaults.withCredentials=!0,[W.E,X.w6,Y.g,z.SY,J.xL,ee.u3,te.v5,re.F,ne.m$,ae.A6,ie.XG7,se.A7].forEach((function(e){return n["default"].use(e)})),n["default"].use(K.ZP),h().interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),h().interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),n["default"].use(k(),h()),n["default"].config.productionTip=!1;var ce={server_domain:"https://Dfoodie.cs.bgu.ac.il",username:localStorage.username,login:function(e){localStorage.setItem("username",e),this.username=e,console.log("login",this.username)},logout:function(){console.log("logout"),localStorage.removeItem("username"),this.username=void 0}};console.log(ce),new n["default"]({router:oe,data:function(){return{store:ce}},methods:{toast:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];this.$bvToast.toast("".concat(t),{title:"".concat(e),toaster:"b-toaster-top-center",variant:r,solid:!0,appendToast:n,autoHideDelay:3e3})}},render:function(e){return e(_)}}).$mount("#app")},9239:(e,t,r)=>{r(124),r(8534),r(9669)},6720:(e,t,r)=>{e.exports=r.p+"img/glutenfree-removebg-preview.dd7fc468.png"},2890:(e,t,r)=>{e.exports=r.p+"img/logonavbar.d78f8e5d.png"},3172:(e,t,r)=>{e.exports=r.p+"img/megan-bucknall-edyYnPwpcXQ-unsplash.4b6df3d4.jpg"},1846:(e,t,r)=>{e.exports=r.p+"img/veganLogo.1bc50455.png"},7159:(e,t,r)=>{e.exports=r.p+"img/vegetarianism-vegan-friendly-veganism-logo-brand-vegetarian-logo-removebg-preview (1).79ad1477.png"},199:e=>{e.exports={}},5352:e=>{e.exports={}}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,(()=>{var e=[];r.O=(t,n,a,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,a,i]=e[u],o=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(o=!1,i<s&&(s=i));if(o){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,a,i]}})(),(()=>{r.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return r.d(t,{a:t}),t}})(),(()=>{r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}})(),(()=>{r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[]))})(),(()=>{r.u=e=>"js/"+e+"."+{42:"c1f60fc6",306:"af4e4576",331:"cda405ea",350:"68973966",407:"63bc5120",515:"48ddbe41",723:"09d091d6"}[e]+".js"})(),(()=>{r.miniCssF=e=>"css/"+e+"."+{42:"7ab679d0",306:"501926ad",331:"e3a0ffa6",350:"0aecdb1f",407:"7e81e689",515:"727b8d62"}[e]+".css"})(),(()=>{r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="assignment-2-1:";r.l=(n,a,i,s)=>{if(e[n])e[n].push(a);else{var o,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var p=l[u];if(p.getAttribute("src")==n||p.getAttribute("data-webpack")==t+i){o=p;break}}o||(c=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,r.nc&&o.setAttribute("nonce",r.nc),o.setAttribute("data-webpack",t+i),o.src=n),e[n]=[a];var d=(t,r)=>{o.onerror=o.onload=null,clearTimeout(v);var a=e[n];if(delete e[n],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(r))),t)return t(r)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=d.bind(null,o.onerror),o.onload=d.bind(null,o.onload),c&&document.head.appendChild(o)}}})(),(()=>{r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{r.p="/"})(),(()=>{if("undefined"!==typeof document){var e=(e,t,r,n,a)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var s=r=>{if(i.onerror=i.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=s,c.request=o,i.parentNode&&i.parentNode.removeChild(i),a(c)}};return i.onerror=i.onload=s,i.href=t,r?r.parentNode.insertBefore(i,r.nextSibling):document.head.appendChild(i),i},t=(e,t)=>{for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var a=r[n],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var s=document.getElementsByTagName("style");for(n=0;n<s.length;n++){a=s[n],i=a.getAttribute("data-href");if(i===e||i===t)return a}},n=n=>new Promise(((a,i)=>{var s=r.miniCssF(n),o=r.p+s;if(t(s,o))return a();e(n,o,null,a,i)})),a={143:0};r.f.miniCss=(e,t)=>{var r={42:1,306:1,331:1,350:1,407:1,515:1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=n(e).then((()=>{a[e]=0}),(t=>{throw delete a[e],t})))}}})(),(()=>{var e={143:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(((r,n)=>a=e[t]=[r,n]));n.push(a[2]=i);var s=r.p+r.u(t),o=new Error,c=n=>{if(r.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",o.name="ChunkLoadError",o.type=i,o.request=s,a[1](o)}};r.l(s,c,"chunk-"+t,t)}},r.O.j=t=>0===e[t];var t=(t,n)=>{var a,i,[s,o,c]=n,l=0;if(s.some((t=>0!==e[t]))){for(a in o)r.o(o,a)&&(r.m[a]=o[a]);if(c)var u=c(r)}for(t&&t(n);l<s.length;l++)i=s[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(u)},n=self["webpackChunkassignment_2_1"]=self["webpackChunkassignment_2_1"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=r.O(void 0,[998],(()=>r(5424)));n=r.O(n)})();
//# sourceMappingURL=app.f2ec128b.js.map