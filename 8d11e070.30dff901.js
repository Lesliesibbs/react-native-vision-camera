(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,b=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(109)),o={id:"cameraposition",title:"Module: CameraPosition",sidebar_label:"CameraPosition",custom_edit_url:null,hide_title:!0},c={unversionedId:"api/modules/cameraposition",id:"api/modules/cameraposition",isDocsHomePage:!1,title:"Module: CameraPosition",description:"Module: CameraPosition",source:"@site/docs/api/modules/cameraposition.md",slug:"/api/modules/cameraposition",permalink:"/react-native-vision-camera/docs/api/modules/cameraposition",editUrl:null,version:"current",sidebar_label:"CameraPosition",sidebar:"someSidebar",previous:{title:"Module: CameraError",permalink:"/react-native-vision-camera/docs/api/modules/cameraerror"},next:{title:"Module: CameraPreset",permalink:"/react-native-vision-camera/docs/api/modules/camerapreset"}},l=[{value:"Type aliases",id:"type-aliases",children:[{value:"CameraPosition",id:"cameraposition",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"module-cameraposition"},"Module: CameraPosition"),Object(i.b)("h2",{id:"type-aliases"},"Type aliases"),Object(i.b)("h3",{id:"cameraposition"},"CameraPosition"),Object(i.b)("p",null,"\u01ac ",Object(i.b)("strong",{parentName:"p"},"CameraPosition"),": ",Object(i.b)("em",{parentName:"p"},"front")," ","|"," ",Object(i.b)("em",{parentName:"p"},"back")," ","|"," ",Object(i.b)("em",{parentName:"p"},"unspecified")," ","|"," ",Object(i.b)("em",{parentName:"p"},"external")),Object(i.b)("p",null,"Represents the camera device position."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"back"'),": Indicates that the device is physically located on the back of the system hardware"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"front"'),": Indicates that the device is physically located on the front of the system hardware")),Object(i.b)("h4",{id:"ios-only"},"iOS only"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"unspecified"'),": Indicates that the device's position relative to the system hardware is unspecified")),Object(i.b)("h4",{id:"android-only"},"Android only"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},'"external"'),": The camera device is an external camera, and has no fixed facing relative to the device's screen. (Android only)")),Object(i.b)("p",null,"Defined in: ",Object(i.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/e54276a/src/CameraPosition.ts#L13"},"src/CameraPosition.ts:13")))}p.isMDXComponent=!0}}]);