(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=m(r),u=n,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return r?a.a.createElement(d,c(c({ref:t},l),{},{components:r})):a.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},91:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return m}));var n=r(3),a=r(7),o=(r(0),r(109)),i={id:"frame-processors",title:"Frame Processors",sidebar_label:"Frame Processors"},c={unversionedId:"frame-processors",id:"frame-processors",isDocsHomePage:!1,title:"Frame Processors",description:"FRAME PROCESSORS ARE STILL WORK IN PROGRESS - SEE #2",source:"@site/docs/FRAME_PROCESSORS.md",slug:"/frame-processors",permalink:"/react-native-vision-camera/docs/frame-processors",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/FRAME_PROCESSORS.md",version:"current",sidebar_label:"Frame Processors",sidebar:"someSidebar",previous:{title:"Camera Formats",permalink:"/react-native-vision-camera/docs/formats"},next:{title:"Zooming with Reanimated",permalink:"/react-native-vision-camera/docs/animated"}},s=[{value:"What are frame processors?",id:"what-are-frame-processors",children:[]},{value:"Technical",id:"technical",children:[]},{value:"Example",id:"example",children:[]},{value:"Plugins",id:"plugins",children:[]}],l={toc:s};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"FRAME PROCESSORS ARE STILL WORK IN PROGRESS - SEE ",Object(o.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/pull/2"},"#2")))),Object(o.b)("div",null,Object(o.b)("img",{align:"right",width:"35%",src:"../img/ultra-wide-demo.gif"})),Object(o.b)("h3",{id:"what-are-frame-processors"},"What are frame processors?"),Object(o.b)("p",null,"Frame processors are functions that are written in JavaScript (or TypeScript) which can be used to ",Object(o.b)("strong",{parentName:"p"},'process frames the camera "sees"'),"."),Object(o.b)("p",null,"For example, you might want to create a QR code scanner ",Object(o.b)("em",{parentName:"p"},"without ever writing native code while still achieving almost-native performance"),". Since you can write the scanning part yourself, you can implement a custom QR code system like the one Snapchat uses for Snap-codes."),Object(o.b)("div",{align:"center"},Object(o.b)("img",{src:"../img/snap-code.png",width:"15%"})),Object(o.b)("br",null),Object(o.b)("p",null,"Frame processors are by far not limited to QR code detection, other examples include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AI")," for ",Object(o.b)("strong",{parentName:"li"},"facial recognition")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"AI")," for ",Object(o.b)("strong",{parentName:"li"},"object detection")),Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("strong",{parentName:"li"},"Tensorflow"),", ",Object(o.b)("strong",{parentName:"li"},"MLKit Vision"),' or other libraries (if they provide React Native JSI bindings in the form of "react-native-vision-camera plugins")'),Object(o.b)("li",{parentName:"ul"},"Creating ",Object(o.b)("strong",{parentName:"li"},"realtime video-chats")," since you can directly send the camera frames over the network"),Object(o.b)("li",{parentName:"ul"},"Creating ",Object(o.b)("strong",{parentName:"li"},"snapchat-like filters"),", e.g. draw a dog-mask filter over the user's face (WIP)"),Object(o.b)("li",{parentName:"ul"},"Creating ",Object(o.b)("strong",{parentName:"li"},"color filters")," with depth-detection"),Object(o.b)("li",{parentName:"ul"},"Using ",Object(o.b)("strong",{parentName:"li"},"custom C++ processors")," exposed to JS for maximum performance")),Object(o.b)("h3",{id:"technical"},"Technical"),Object(o.b)("p",null,"Frame processors are JS functions that will be ",Object(o.b)("strong",{parentName:"p"},"workletized")," using ",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated"),". They are created on a ",Object(o.b)("strong",{parentName:"p"},"separate thread")," using a separate Hermes/JSC Runtime and are ",Object(o.b)("strong",{parentName:"p"},"invoked synchronously")," (using JSI) without ever going over the bridge."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-tsx"},"function App() {\n  const frameProcessor = useFrameProcessor((frame) => {\n    const qrCodes = scanQrCodes(frame)\n    console.log(qrCodes)\n  }, [])\n\n  return (\n    <Camera frameProcessor={frameProcessor} {...cameraProps} />\n  )\n}\n")),Object(o.b)("h3",{id:"plugins"},"Plugins"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO")),Object(o.b)("br",null),Object(o.b)("h4",{id:"-next-section-zooming-with-reanimated"},"\ud83d\ude80 Next section: ",Object(o.b)("a",{parentName:"h4",href:"animated"},"Zooming with Reanimated")))}m.isMDXComponent=!0}}]);