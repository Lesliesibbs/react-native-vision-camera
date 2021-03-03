(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=a,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?r.a.createElement(m,p(p({ref:t},s),{},{components:n})):r.a.createElement(m,p({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return p})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(109)),o={id:"snapshot.takesnapshotoptions",title:"Interface: TakeSnapshotOptions",sidebar_label:"TakeSnapshotOptions",custom_edit_url:null,hide_title:!0},p={unversionedId:"api/interfaces/snapshot.takesnapshotoptions",id:"api/interfaces/snapshot.takesnapshotoptions",isDocsHomePage:!1,title:"Interface: TakeSnapshotOptions",description:"Interface: TakeSnapshotOptions",source:"@site/docs/api/interfaces/snapshot.takesnapshotoptions.md",slug:"/api/interfaces/snapshot.takesnapshotoptions",permalink:"/react-native-vision-camera/docs/api/interfaces/snapshot.takesnapshotoptions",editUrl:null,version:"current",sidebar_label:"TakeSnapshotOptions",sidebar:"someSidebar",previous:{title:"Interface: Point",permalink:"/react-native-vision-camera/docs/api/interfaces/point.point-1"},next:{title:"Interface: RecordVideoOptions",permalink:"/react-native-vision-camera/docs/api/interfaces/videofile.recordvideooptions"}},c=[{value:"Properties",id:"properties",children:[{value:"quality",id:"quality",children:[]},{value:"skipMetadata",id:"skipmetadata",children:[]}]}],s={toc:c};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-takesnapshotoptions"},"Interface: TakeSnapshotOptions"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/snapshot"},"Snapshot"),".TakeSnapshotOptions"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"quality"},"quality"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"quality"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Specifies the quality of the JPEG. (0-100, where 100 means best quality (no compression))"),Object(i.b)("p",null,"It is recommended to set this to ",Object(i.b)("inlineCode",{parentName:"p"},"90")," or even ",Object(i.b)("inlineCode",{parentName:"p"},"80"),", since the user probably won't notice a difference between ",Object(i.b)("inlineCode",{parentName:"p"},"90"),"/",Object(i.b)("inlineCode",{parentName:"p"},"80")," and ",Object(i.b)("inlineCode",{parentName:"p"},"100"),"."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"default"))," 100"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/Snapshot.ts#L9"},"src/Snapshot.ts:9")),Object(i.b)("hr",null),Object(i.b)("h3",{id:"skipmetadata"},"skipMetadata"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"skipMetadata"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"When set to ",Object(i.b)("inlineCode",{parentName:"p"},"true"),", metadata reading and mapping will be skipped. (",Object(i.b)("inlineCode",{parentName:"p"},"PhotoFile.metadata")," will be null)"),Object(i.b)("p",null,"This might result in a faster capture, as metadata reading and mapping requires File IO."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"default"))," false"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"platform"))," Android"),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/f843680/src/Snapshot.ts#L20"},"src/Snapshot.ts:20")))}l.isMDXComponent=!0}}]);