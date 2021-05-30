(this["webpackJsonpstatic-vs-dynamic-aria-activedescendant"]=this["webpackJsonpstatic-vs-dynamic-aria-activedescendant"]||[]).push([[0],{13:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var i=t(1),r=t(5),s=t.n(r),n=t(3),d=(t(13),t(0));function j(e){var c=[Object(i.unstable_useOpaqueIdentifier)(),Object(i.unstable_useOpaqueIdentifier)(),Object(i.unstable_useOpaqueIdentifier)(),Object(i.unstable_useOpaqueIdentifier)(),Object(i.unstable_useOpaqueIdentifier)()],t=c.length,r=Object(i.useReducer)((function(e,c){return(e+c+t)%t}),0),s=Object(n.a)(r,2),j=s[0],l=s[1];return Object(d.jsxs)("ul",{role:"listbox","aria-activedescendant":c[j],"aria-labelledby":e["aria-labelledby"],onKeyDown:function(e){var c=null;switch(e.key){case"ArrowDown":c=1;break;case"ArrowUp":c=-1;break;case"Home":c=-j;break;case"End":c=t-1-j}null!==c&&(e.preventDefault(),l(c))},tabIndex:"0",children:[Object(d.jsx)("li",{role:"option","aria-selected":0===j,id:c[0],children:"alpha"}),Object(d.jsx)("li",{role:"option","aria-selected":1===j,id:c[1],children:"beta"}),Object(d.jsx)("li",{role:"option","aria-selected":2===j,id:c[2],children:"gamma"}),Object(d.jsx)("li",{role:"option","aria-selected":3===j,id:c[3],children:"delta"}),Object(d.jsx)("li",{role:"option","aria-selected":4===j,id:c[4],children:"epsilon"})]})}function l(e){var c=Object(i.unstable_useOpaqueIdentifier)(),t=Object(i.useReducer)((function(e,c){return(e+c+5)%5}),0),r=Object(n.a)(t,2),s=r[0],j=r[1];return Object(d.jsxs)("ul",{role:"listbox","aria-activedescendant":c,"aria-labelledby":e["aria-labelledby"],onKeyDown:function(e){var c=null;switch(e.key){case"ArrowDown":c=1;break;case"ArrowUp":c=-1;break;case"Home":c=-s;break;case"End":c=4-s}null!==c&&(e.preventDefault(),j(c))},tabIndex:"0",children:[Object(d.jsx)("li",{role:"option","aria-selected":0===s,id:0===s?c:void 0,children:"alpha"}),Object(d.jsx)("li",{role:"option","aria-selected":1===s,id:1===s?c:void 0,children:"beta"}),Object(d.jsx)("li",{role:"option","aria-selected":2===s,id:2===s?c:void 0,children:"gamma"}),Object(d.jsx)("li",{role:"option","aria-selected":3===s,id:3===s?c:void 0,children:"delta"}),Object(d.jsx)("li",{role:"option","aria-selected":4===s,id:4===s?c:void 0,children:"epsilon"})]})}function a(){var e=Object(i.unstable_useOpaqueIdentifier)(),c=Object(i.unstable_useOpaqueIdentifier)();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Static vs dynamic aria-acivedescendant"}),Object(d.jsx)("h2",{children:"Implementations"}),Object(d.jsxs)("p",{children:["Both listboxes implement ",Object(d.jsx)("kbd",{children:"ArrowUp"}),", ",Object(d.jsx)("kbd",{children:"ArrowDown"}),","," ",Object(d.jsx)("kbd",{children:"Home"}),", and ",Object(d.jsx)("kbd",{children:"End"})," as described in"," ",Object(d.jsx)("a",{href:"https://www.w3.org/TR/wai-aria-practices/#listbox_kbd_interaction",children:"Listbox in WAI-ARIA authoring practices 1.1."}),"."]}),Object(d.jsx)("h3",{id:c,children:"dynamic aria-activedescendant"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("code",{children:"aria-activedescant"})," changes to the id of the static"," ",Object(d.jsx)("code",{children:"id"})," of the currently active ",Object(d.jsx)("code",{children:"option"}),"."]}),Object(d.jsxs)("p",{children:["This is how ",Object(d.jsx)("code",{children:"aria-activedescendant"})," is commonly documented."]}),Object(d.jsx)(j,{"aria-labelledby":c}),Object(d.jsx)("h3",{id:e,children:"static aria-activedescendant"}),Object(d.jsxs)("p",{children:[Object(d.jsx)("code",{children:"aria-activedescant"})," is static and the currently active"," ",Object(d.jsx)("code",{children:"option"})," takes that ",Object(d.jsx)("code",{children:"id"})," i.e. ",Object(d.jsx)("code",{children:"id"})," of"," ",Object(d.jsx)("code",{children:"option"})," is dynamic."]}),Object(d.jsx)(l,{"aria-labelledby":c}),Object(d.jsx)("h2",{children:"results"}),Object(d.jsxs)("p",{children:["All experiments were performed on"," ",Object(d.jsx)("time",{dateTime:"2021-05-30",children:"30th May 2021"})," with a production build of this app."]}),Object(d.jsx)("h3",{children:"Screen readers"}),Object(d.jsxs)("p",{children:["Screen reader + browser combination was chosen based on what screen readers I'm familiar with/have access to (NVDA, JAWS, VoiceOver) and their most popular browser combination according to"," ",Object(d.jsx)("a",{href:"https://webaim.org/projects/screenreadersurvey8/",children:"WebAIM Screen Reader User Survey #8"}),"."]}),Object(d.jsx)("h3",{children:"NVDA + Firefox"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("caption",{children:"environment"}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"name"}),Object(d.jsx)("th",{children:"version"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"NVDA"}),Object(d.jsx)("td",{children:"2020.04"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Firefox"}),Object(d.jsx)("td",{children:"??"})]})]})]}),Object(d.jsx)(b,{speech:[]}),Object(d.jsx)("h3",{children:"JAWS + Chrome"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("caption",{children:"environment"}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"name"}),Object(d.jsx)("th",{children:"version"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"JAWS"}),Object(d.jsx)("td",{children:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Chrome"}),Object(d.jsx)("td",{children:"??"})]})]})]}),Object(d.jsx)(b,{speech:[]}),Object(d.jsx)("h3",{children:"VoiceOver + Safari"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("caption",{children:"environment"}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"name"}),Object(d.jsx)("th",{children:"version"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"VoiceOver"}),Object(d.jsx)("td",{children:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Safari"}),Object(d.jsx)("td",{children:"??"})]})]})]}),Object(d.jsx)(b,{speech:[]})]})}function b(e){var c,t,i,r,s,n,j=e.speech,l=void 0===j?[]:j;return Object(d.jsxs)("table",{children:[Object(d.jsx)("caption",{children:"recorded speech"}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Action"}),Object(d.jsx)("th",{children:"Speech"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Press tab"}),Object(d.jsx)("td",{children:null!==(c=l[0])&&void 0!==c?c:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Press ",Object(d.jsx)("kbd",{children:"ArrowDown"})]}),Object(d.jsx)("td",{children:null!==(t=l[1])&&void 0!==t?t:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Press ",Object(d.jsx)("kbd",{children:"ArrowDown"})]}),Object(d.jsx)("td",{children:null!==(i=l[2])&&void 0!==i?i:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Press ",Object(d.jsx)("kbd",{children:"ArrowUp"})]}),Object(d.jsx)("td",{children:null!==(r=l[3])&&void 0!==r?r:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Press ",Object(d.jsx)("kbd",{children:"Home"})]}),Object(d.jsx)("td",{children:null!==(s=l[4])&&void 0!==s?s:"??"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsxs)("td",{children:["Press ",Object(d.jsx)("kbd",{children:"End"})]}),Object(d.jsx)("td",{children:null!==(n=l[5])&&void 0!==n?n:"??"})]})]})]})}var h=document.getElementById("root");s.a.render(Object(d.jsx)(i.StrictMode,{children:Object(d.jsx)(a,{})}),h)}},[[15,1,2]]]);
//# sourceMappingURL=main.2c3071a7.chunk.js.map