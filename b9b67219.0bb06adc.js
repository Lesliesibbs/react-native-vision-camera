(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{109:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,d=u["".concat(o,".").concat(m)]||u[m]||p[m]||a;return r?i.a.createElement(d,l(l({ref:t},s),{},{components:r})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(3),i=r(7),a=(r(0),r(109)),o={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting"},l={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Before opening an issue, make sure you try the following:",source:"@site/docs/TROUBLESHOOTING.md",slug:"/troubleshooting",permalink:"/react-native-vision-camera/docs/troubleshooting",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/TROUBLESHOOTING.md",version:"current",sidebar_label:"Troubleshooting",sidebar:"someSidebar",previous:{title:"Camera Errors",permalink:"/react-native-vision-camera/docs/errors"}},c=[{value:"iOS",id:"ios",children:[]},{value:"Android",id:"android",children:[]},{value:"Issues",id:"issues",children:[]}],s={toc:c};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("div",null,Object(a.b)("img",{align:"right",width:"35%",src:"../img/11_back.png"})),Object(a.b)("p",null,"Before opening an issue, make sure you try the following:"),Object(a.b)("h2",{id:"ios"},"iOS"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Try cleaning and rebuilding ",Object(a.b)("strong",{parentName:"li"},"everything"),":",Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",{parentName:"pre",className:"language-sh"},'rm -rf package-lock.json && rm -rf yarn.lock && rm -rf node_modules && rm -rf ios/Podfile.lock && rm -rf ios/Pods\nnpm i  # or "yarn"\ncd ios && pod repo update && pod update && pod install\n'))),Object(a.b)("li",{parentName:"ol"},"Check your minimum iOS version. VisionCamera requires a minimum iOS version of ",Object(a.b)("strong",{parentName:"li"},"11.0"),".",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Open your ",Object(a.b)("inlineCode",{parentName:"li"},"Podfile")),Object(a.b)("li",{parentName:"ol"},"Make sure ",Object(a.b)("inlineCode",{parentName:"li"},"platform :ios")," is set to ",Object(a.b)("inlineCode",{parentName:"li"},"11.0")," or higher"))),Object(a.b)("li",{parentName:"ol"},"Check your Swift version. VisionCamera requires a minimum Swift version of ",Object(a.b)("strong",{parentName:"li"},"5.2"),".",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Open ",Object(a.b)("inlineCode",{parentName:"li"},"project.pbxproj")," in a Text Editor"),Object(a.b)("li",{parentName:"ol"},"If the ",Object(a.b)("inlineCode",{parentName:"li"},"LIBRARY_SEARCH_PATH")," value is set, make sure there is no explicit reference to Swift-5.0. If there is, remove it. See ",Object(a.b)("a",{parentName:"li",href:"https://stackoverflow.com/a/66281846/1123156"},"this StackOverflow answer"),"."),Object(a.b)("li",{parentName:"ol"},"If the ",Object(a.b)("inlineCode",{parentName:"li"},"SWIFT_VERSION")," value is set, make sure it is set to ",Object(a.b)("inlineCode",{parentName:"li"},"5.2")," or higher."))),Object(a.b)("li",{parentName:"ol"},"Make sure you have created a Swift bridging header in your project.",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"Open your project (",Object(a.b)("inlineCode",{parentName:"li"},".xcworkspace"),") in Xcode"),Object(a.b)("li",{parentName:"ol"},"Press ",Object(a.b)("strong",{parentName:"li"},"File")," > ",Object(a.b)("strong",{parentName:"li"},"New")," > ",Object(a.b)("strong",{parentName:"li"},"File")," (",Object(a.b)("kbd",null,"\u2318"),"+",Object(a.b)("kbd",null,"N"),")"),Object(a.b)("li",{parentName:"ol"},"Select ",Object(a.b)("strong",{parentName:"li"},"Swift File")," and press ",Object(a.b)("strong",{parentName:"li"},"Next")),Object(a.b)("li",{parentName:"ol"},"Choose whatever name you want, e.g. ",Object(a.b)("inlineCode",{parentName:"li"},"File.swift")," and press ",Object(a.b)("strong",{parentName:"li"},"Create")),Object(a.b)("li",{parentName:"ol"},"Press ",Object(a.b)("strong",{parentName:"li"},"Create Bridging Header")," when promted."))),Object(a.b)("li",{parentName:"ol"},"If you're experiencing weird behaviour, check the logs in Xcode to find out more.")),Object(a.b)("h2",{id:"android"},"Android"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Since the Android implementation uses the not-yet fully stable ",Object(a.b)("strong",{parentName:"li"},"CameraX")," API, make sure you've browsed the ",Object(a.b)("a",{parentName:"li",href:"https://issuetracker.google.com/issues?q=componentid:618491%20status:open"},"CameraX issue tracker")," to find out if your issue is a limitation by the ",Object(a.b)("strong",{parentName:"li"},"CameraX")," library even I cannot get around."),Object(a.b)("li",{parentName:"ol"},"If you're experiencing weird behaviour, check the logs in Android Studio/Logcat (",Object(a.b)("kbd",null,"\u2318")," + ",Object(a.b)("kbd",null,"6"),") to find out more."),Object(a.b)("li",{parentName:"ol"},"If a camera device is not being returned by ",Object(a.b)("inlineCode",{parentName:"li"},"getAvailableCameraDevices()"),", make sure it meets the minimum requirements - that is minum supported harwdware level of ",Object(a.b)("inlineCode",{parentName:"li"},"LIMITED")," and above. See ",Object(a.b)("a",{parentName:"li",href:"https://developer.android.com/reference/android/hardware/camera2/CameraDevice"},"this section in the Android docs")," for more information.")),Object(a.b)("h2",{id:"issues"},"Issues"),Object(a.b)("p",null,"If nothing has helped so far, try browsing the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/issues?q=is%3Aissue"},"GitHub issues"),". If your issue doesn't exist, ",Object(a.b)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/issues/new/choose"},"create a new one"),". Make sure to fill out the template and include as many details as possible."))}b.isMDXComponent=!0}}]);