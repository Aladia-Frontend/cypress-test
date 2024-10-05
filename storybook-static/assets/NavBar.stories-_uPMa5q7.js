import{A as _}from"./About-5A2I17qh.js";import{H as f}from"./Home-khd8FwLd.js";import{L as b}from"./LocatorTest-D9sSbUzh.js";import{b as n,F as v,g as B,j as N,o,k as g,l as k,d as y,t as h}from"./vue.esm-bundler-CZWzHQcl.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";const l={name:"NavBar",props:{routes:{type:Array,required:!0}},computed:{filteredRoutes(){return this.routes.filter(t=>{var r;return(r=t.meta)==null?void 0:r.label})}}};function A(t,r,H,F,G,i){const d=N("router-link");return o(),n("nav",null,[(o(!0),n(v,null,B(i.filteredRoutes,a=>(o(),g(d,{key:a.name,to:a.path},{default:k(()=>{var s;return[y("button",null,h(((s=a.meta)==null?void 0:s.label)||a.name),1)]}),_:2},1032,["to"]))),128))])}const u=x(l,[["render",A],["__scopeId","data-v-1b807b29"]]);l.__docgenInfo={displayName:"NavBar",exportName:"default",description:"",tags:{},props:[{name:"routes",type:{name:"array"},required:!0}],sourceFiles:["/Users/rr/DevOps/cypress-test/src/components/NavBar.vue"]};const E={title:"NavBar",component:u},L=[{path:"/",name:"Home",component:f,meta:{label:"Go to Home"}},{path:"/about",name:"About",component:_,meta:{label:"Go to About"}},{path:"/locator-test",name:"LocatorTest",component:b,meta:{label:"Go to Locator test"}}],D=t=>({components:{NavBar:u},setup(){return{args:t}},template:'<NavBar v-bind="args" />'}),e=D.bind({});e.args={routes:L};var m,p,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    NavBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<NavBar v-bind="args" />'
})`,...(c=(p=e.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const I=["Default"];export{e as Default,I as __namedExportsOrder,E as default};
