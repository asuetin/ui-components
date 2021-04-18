/*! For license information please see index.js.LICENSE.txt */
!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["react","styled-components"],r):"object"==typeof exports?exports["ui-components"]=r(require("react"),require("styled-components")):e["ui-components"]=r(e[void 0],e[void 0])}(self,(function(e,r){return(()=>{"use strict";var o={418:e=>{var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},o=0;o<10;o++)r["_"+String.fromCharCode(o)]=o;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var s,n,l=i(e),c=1;c<arguments.length;c++){for(var d in s=Object(arguments[c]))o.call(s,d)&&(l[d]=s[d]);if(r){n=r(s);for(var u=0;u<n.length;u++)t.call(s,n[u])&&(l[n[u]]=s[n[u]])}}return l}},251:(e,r,o)=>{o(418);var t=o(704),i=60103;if("function"==typeof Symbol&&Symbol.for){var a=Symbol.for;i=a("react.element"),a("react.fragment")}var s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var t,a={},c=null,d=null;for(t in void 0!==o&&(c=""+o),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(d=r.ref),r)n.call(r,t)&&!l.hasOwnProperty(t)&&(a[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===a[t]&&(a[t]=r[t]);return{$$typeof:i,type:e,key:c,ref:d,props:a,_owner:s.current}}r.jsx=c,r.jsxs=c},893:(e,r,o)=>{e.exports=o(251)},704:r=>{r.exports=e},885:e=>{e.exports=r}},t={};function i(e){var r=t[e];if(void 0!==r)return r.exports;var a=t[e]={exports:{}};return o[e](a,a.exports,i),a.exports}i.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return i.d(r,{a:r}),r},i.d=(e,r)=>{for(var o in r)i.o(r,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};return(()=>{i.r(a),i.d(a,{ComboBox:()=>y,ComboBoxStyles:()=>m,Icon:()=>v,IconStyles:()=>n,List:()=>g,ListStyles:()=>h});var e=i(893);const r=e=>parseFloat(String(e))/parseFloat(window.getComputedStyle(document.body).getPropertyValue("font-size")),o=(()=>{let e=0;return r=>`${r}${++e}`})();var t=i(885),s=i.n(t);const n={Icon:s().svg((({stroke:e="rgb(0,0,0)",fill:r="rgb(0,0,0)"})=>t.css`
	stroke: ${e};
	fill: ${r};

	transition: ${["stroke","fill"].map((e=>`${e} 125ms ease-in-out`)).join()};
`))},l={fillOpacity:0},c={strokeOpacity:0},d={strokeLinecap:"round",strokeLinejoin:"round"},u={user:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({},l,{transform:"translate(0 -1098.52)"},{children:[(0,e.jsx)("circle",{cx:"12",cy:"1106.52",r:"7"},void 0),(0,e.jsx)("path",Object.assign({},d,{d:"M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"}),void 0)]}),void 0)},logout:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({},l,d,{children:[(0,e.jsx)("path",{d:"M14 16v7H1V1h13v7"},void 0),(0,e.jsx)("path",{d:"M10 12h13"},void 0),(0,e.jsx)("path",{d:"M19 8l4 4-4 4"},void 0)]}),void 0)},gear:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({transform:"translate(0 -1098.52)"},d,{children:[(0,e.jsx)("circle",Object.assign({cx:"12",cy:"1110.52",r:"8"},l),void 0),(0,e.jsx)("path",{d:"M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"},void 0)]}),void 0)},forward:{viewBoxSize:16,path:(0,e.jsx)("path",Object.assign({d:"M5 1l7 7-7 7"},d,l),void 0)},down:{viewBoxSize:16,path:(0,e.jsx)("path",Object.assign({d:"M15 4.5l-7 7-7-7"},d,l),void 0)},undo:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},l,d,{children:[(0,e.jsx)("path",{d:"M3 4h6"},void 0),(0,e.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,e.jsx)("path",{d:"M9 14H5"},void 0),(0,e.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0)},save:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},l,d,{children:[(0,e.jsx)("path",{d:"M1 1v14h14V4l-3-3H8v8"},void 0),(0,e.jsx)("path",{d:"M5 6l3 3 3-3"},void 0)]}),void 0)},reset:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},d,{children:[(0,e.jsxs)("g",Object.assign({},l,{children:[(0,e.jsx)("path",{d:"M3 4h6"},void 0),(0,e.jsx)("path",{d:"M9 4a5 5 0 015 5 5 5 0 01-5 5"},void 0),(0,e.jsx)("path",{d:"M9 14H5"},void 0),(0,e.jsx)("path",{d:"M6 1L3 4l3 3"},void 0)]}),void 0),(0,e.jsx)("circle",Object.assign({},c,{r:"1.5",cy:"9",cx:"9"}),void 0)]}),void 0)},order:{viewBoxSize:24,path:(0,e.jsxs)("g",{children:[(0,e.jsx)("circle",Object.assign({},c,{r:"1.5",cy:"22.5",cx:"5.5"}),void 0),(0,e.jsx)("circle",Object.assign({},c,{cx:"14.5",cy:"22.5",r:"1.5"}),void 0),(0,e.jsx)("path",Object.assign({},l,d,{d:"M17 15H3L1 7h13m9-4h-3l-4 16H4"}),void 0)]},void 0)},group:{viewBoxSize:24,path:(0,e.jsxs)("g",Object.assign({},l,{transform:"translate(0 -1098.52)"},{children:[(0,e.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1102.7",cx:"5.499"},void 0),(0,e.jsx)("path",Object.assign({},d,{d:"M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"}),void 0),(0,e.jsx)("ellipse",{cx:"18.516",cy:"1102.7",rx:"3.152",ry:"3.18"},void 0),(0,e.jsx)("path",Object.assign({},d,{d:"M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"}),void 0),(0,e.jsx)("ellipse",{ry:"3.18",rx:"3.152",cy:"1114.703",cx:"12"},void 0),(0,e.jsx)("path",Object.assign({},d,{d:"M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"}),void 0)]}),void 0)},plus:{viewBoxSize:16,path:(0,e.jsx)("path",Object.assign({},l,d,{d:"M8 1v14M15 8H1"}),void 0)},search:{viewBoxSize:16,path:(0,e.jsxs)("g",Object.assign({},l,d,{children:[(0,e.jsx)("ellipse",{ry:"5.459",rx:"5.432",cy:"6.459",cx:"6.432"},void 0),(0,e.jsx)("path",{d:"M15 15l-4.5-4.5"},void 0)]}),void 0)}},v=({className:o,presetName:t,path:i,viewBoxSize:a,size:s,color:l="black",strokeWidth:c=2})=>{const d=[i,a].every((e=>!(e=>void 0===e)(e))),v=d?a:u[t].viewBoxSize,p=d?i:u[t].path,b=`${r(v*((s||v)/v))}rem`;return(0,e.jsx)(n.Icon,Object.assign({className:o,width:b,height:b,xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${v} ${v}`,xmlnsXlink:"http://www.w3.org/1999/xlink",fill:l,stroke:l,strokeWidth:`${r(c)}rem`},{children:p}),void 0)};var p=i(704);const b=(e,r,o=window,t=!1)=>{const i=(0,p.useRef)(r);i.current=r,(0,p.useEffect)((()=>{if(o){const r=e=>i.current(e);return o.addEventListener(e,r,t),()=>o.removeEventListener(e,r)}}),[e,o,t])},h={List:s().ul`
	position: relative;
	overflow: auto;
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
`},g=(0,p.forwardRef)((({className:o,rowHeight:t=32,rowCount:i,rowRenderer:a},s)=>{const n=((...e)=>{const r=(0,p.useRef)();return(0,p.useEffect)((()=>{for(const o of e)"function"==typeof o?o(r.current):o&&(o.current=r.current)}),[e]),r})(s),[l,c]=(0,p.useState)([0,0]),d=(0,p.useMemo)((()=>((e,r)=>{let o;return(...e)=>{o&&clearTimeout(o),o=setTimeout((()=>{(()=>{if(n.current){const{scrollTop:e,offsetHeight:r}=n.current,o=Math.floor((e-r)/t),a=Math.ceil((e+2*r)/t);c([o>0?o:0,a>i?i:a])}})(...e),o=null}),5)}})()),[t,i,n]);return b("scroll",d,n.current),b("animationend",d,n.current),(0,p.useEffect)((()=>{d()}),[d]),(0,e.jsx)(h.List,Object.assign({className:o,ref:n,role:"listbox"},{children:Array.from({length:l[1]-l[0]},((e,o)=>a(l[0]+o,{height:`${r(t)}rem`,marginTop:0==o?`${r(t*l[0])}rem`:void 0,marginBottom:o==l[1]-l[0]-1?`${r(t*(i-l[1]))}rem`:void 0})))}),void 0)})),f=s().li`
	cursor: pointer;

	display: flex;
	align-items: center;
	padding: 0 0 0 var(--padding);

	&:hover {
		background-color: var(--color-option-background-hover);
	}

	&[aria-selected='true']{
		background-color: var(--color-option-background-selected);
	}
`,x=s()(g)((({height:e})=>t.css`
	position: absolute;
	width: 100%;
	top: 100%;
	height: ${r(e)}rem;

	background-color: var(--color-dropdown-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	border-top-left-radius: 0;
	border-top-right-radius: 0;

	::-webkit-scrollbar {
		width: var(--width-scrollbar);
	}

	::-webkit-scrollbar-button {
		display: none;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--color-scrollbar);
		border-radius: var(--border-radius);
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: var(--color-scrollbar-hover);
	}

	::-webkit-scrollbar-track,
	::-webkit-scrollbar-track-piece,
	::-webkit-resizer,
	::-webkit-scrollbar-corner {
		display: none;
	}

	animation: ${t.keyframes`
		0% {
			height: 0;
		}
		100% {
			height: ${r(e)}rem;
		}
	`} 125ms ease-in-out;
`)),j=s().button`
	position: relative;
	cursor: pointer;
	border: none;
	outline: none;

	background-color: inherit;
	border-radius: inherit;

	display: flex;
	align-items: center;
	padding: 0 var(--padding) 0 var(--padding);

	> * {
		transition: ${["stroke","fill","transform"].map((e=>`${e} 125ms ease-in-out`)).join()};
	}
`,w=s().input`
	position: relative;
	width: 100%;
	flex-grow: 1;
	padding: 0 0 0 var(--padding);

	background-color: inherit;
	border: none;
	border-radius: inherit;
	outline: none;
	font: inherit;
	transition: color 125ms ease-in-out;

	display: flex;
	align-items: center;
`,m={ComboBox:s().div`
	--color-background: rgb(240,240,240);
	--color-dropdown-background: rgb(230,230,230);
	--color-option-background-hover: rgb(220,220,220);
	--color-option-background-selected: rgb(210,210,210);

	--color-text: rgb(60,60,60);
	--color-text-hover: rgb(140,140,140);

	--color-arrow: rgb(60,60,60);
	--color-arrow-hover: rgb(140,140,140);

	--color-scrollbar: rgb(150,150,150);
	--color-scrollbar-hover: rgb(160,160,160);

	--box-shadow: 0 0.375rem 1.25rem 0 rgb(150,150,150);
	--box-shadow-focus: 0 0.375rem 1.25rem 0 rgb(150,150,150),
		0 0 0 0.125rem rgb(130,160,230);

	--border-radius: 0.375rem;
	--padding: 0.5rem;
	--width-scrollbar: 0.25rem;

	position: relative;
	height: ${({height:e})=>r(e)}rem;

	background-color: var(--color-background);
	box-shadow: var(--box-shadow);
	border-radius: var(--border-radius);
	font-family: 'Open Sans', sans-serif;

	display: flex;

	&, ${w}{
		color: var(--color-text);
	}

	svg {
		stroke: var(--color-arrow);
		fill: var(--color-arrow);
	}

	*:focus {
		outline: none;
	}

	&:focus, &[aria-expanded='true']{
		outline: none;
		box-shadow: var(--box-shadow-focus);

		${x}{
			box-shadow: var(--box-shadow-focus);
		}
	}

	&[aria-expanded='false']:hover {
		&, ${w}{
			color: var(--color-text-hover);
		}

		svg {
			stroke: var(--color-arrow-hover);
			fill: var(--color-arrow-hover);
		}
	}

	&[aria-expanded='true']{
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		${j}{
			> * {
				transform: rotate(180deg);
			}

			&:hover svg {
				stroke: var(--color-arrow-hover);
				fill: var(--color-arrow-hover);
			}
		}
	}
`,Input:w,Button:j,Dropdown:x,Option:f},y=({className:r,height:t=32,options:i=[],value:a,onChange:s,visibleOptionCount:n=5,arrowIcon:l=(0,e.jsx)(v,{presetName:"down"},void 0),labelledBy:c})=>{var d;const u=(0,p.useRef)(o("combobox-")),h=(0,p.useRef)(),g=(0,p.useRef)(),f=(0,p.useRef)(),[x,j]=(0,p.useState)(!1),[w,y]=(0,p.useState)(""),[O,k]=(0,p.useState)(),[S,M]=(0,p.useState)(0),$=O||i,z=$.length,B=`${u.current}-dropdown`;return b("keydown",(e=>{switch(e.code){case"ArrowDown":x&&(M((e=>e<$.length-1?e+1:0)),e.preventDefault());break;case"ArrowUp":x&&(M((e=>e>0?e-1:$.length-1)),e.preventDefault());break;case"Enter":x&&z&&(s($[S].value),h.current.focus()),j((e=>!e));break;case"Escape":x?h.current.focus():h.current.blur(),j(!1)}})),b("click",(e=>{x&&!((e,r)=>{let o=e;for(;o;)if(o=o.parentNode,o==r)return!0;return!1})(e.target,h.current)&&j(!1)})),(0,p.useEffect)((()=>{x&&(y(""),g.current.focus()),M(0)}),[x]),(0,p.useEffect)((()=>{let e=null;""!=w&&(e=i.filter((({label:e,value:r})=>{if(e){if(e.toLowerCase().includes(w.toLowerCase()))return!0}else if(String(r).toLowerCase().includes(w.toLowerCase()))return!0;return!1}))),k(e),M(0)}),[w,i]),(0,p.useEffect)((()=>{if(f.current){let e=t*S;const{scrollTop:r}=f.current,o=r+t*(n-1)<=e,i=r>=e+t;i&&(e-=t*(n-1)),(o||i)&&f.current.scrollTo({top:e,behavior:"smooth"})}}),[S,t,n]),(0,e.jsxs)(m.ComboBox,Object.assign({ref:h,className:r,height:t,role:"combobox",tabIndex:x?-1:0,"aria-expanded":x,"aria-owns":B,"aria-haspopup":"listbox"},{children:[x&&(0,e.jsx)(m.Dropdown,{ref:f,rowCount:z||1,rowHeight:t,rowRenderer:(r,o)=>{const{value:t,label:i}=$[r]||{},a=`${B}-option-${r}`;return(0,e.jsx)(m.Option,Object.assign({style:o,onClick:z?()=>{s(t),j(!1)}:void 0,role:"option",id:a,"aria-selected":!(!z||S!=r)||void 0},{children:i||t||"No results"}),`${r}-${t}`)},height:t*Math.min(n,z||1),id:B,"aria-labelledby":c},void 0),(0,e.jsx)(m.Input,{ref:g,value:x?w:(null===(d=i.find((e=>e.value==a)))||void 0===d?void 0:d.label)||a,placeholder:"Enter search query",onChange:e=>y(e.target.value),onClick:x?void 0:()=>j((e=>!e)),type:"text",tabIndex:x?0:-1,"aria-autocomplete":"both","aria-controls":x?B:void 0,"aria-activedescendant":x?`${B}-option-${S}`:void 0,"aria-labelledby":c},void 0),(0,e.jsx)(m.Button,Object.assign({onClick:()=>j((e=>!e)),role:"button",tabIndex:-1,"aria-label":"Expand dropdown menu"},{children:l}),void 0)]}),void 0)}})(),a})()}));