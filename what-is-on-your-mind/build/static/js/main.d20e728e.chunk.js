(this["webpackJsonpwhat-is-on-your-mind"]=this["webpackJsonpwhat-is-on-your-mind"]||[]).push([[0],{32:function(e,t,n){},34:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(24),s=n.n(r),c=(n(32),n(14)),i=n.n(c),u=n(18),h=n(21),l=(n(34),n(26)),d=n(4),j=n(3),b=function(e){var t=e.onClick,n=e.text;return Object(j.jsx)("button",{className:"GenericButton",onClick:t,children:n})},p=function(e){var t=e.setText,n=e.defaultText,a=e.sendMessage;return Object(j.jsx)("input",{className:"TextInput",type:"Text",maxLength:"100",defaultValue:n,onChange:function(e){return t(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&a()}})},f=function(e){e.id;var t=e.thoughtText;return Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h3",{children:t})})},g=function(e){var t=e.thoughts,n=[];if(void 0!==t)if(t.length>8)for(var a=[];a.length<8;){var o=Math.floor(Math.random()*t.length);a.includes(o)||void 0===t[o]||(a.push(o),n.push(t[o]),console.log("A thought was added"),console.log(n))}else n=t;return console.log(n),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:"Other people have this in mind:"}),n.map((function(e,t){return Object(j.jsx)(f,{id:e.id,thoughtText:e.text})})),Object(j.jsx)(b,{onClick:function(){window.location.reload()},text:"Show me other thoughts!"})]})},x=n(15),m=(n(36),{apiKey:"AIzaSyAu3R_ZPSebhLYgZV3DghcSaA3vsBMq51o",authDomain:"whatisonyourmind-9b11d.firebaseapp.com",databaseURL:"https://whatisonyourmind-9b11d-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"whatisonyourmind-9b11d",storageBucket:"whatisonyourmind-9b11d.appspot.com",messagingSenderId:"589681057681",appId:"1:589681057681:web:158f9b5fef34078acc8430"}),O=function(){x.a.apps.length||(x.a.initializeApp(m),console.log("Firebase initialized"));var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)([]),s=Object(h.a)(r,2),c=s[0],f=s[1],O=x.a.database().ref("/messages");Object(a.useEffect)((function(){v()}),[]);var v=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O.on("value",(function(e){var t=e.val();f(t),console.log("messages retrieved"),console.log(t)})),e.abrupt("return");case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!==n&&(console.log(n),console.log(c),console.log(c.length),x.a.database().ref("messages/"+c.length).set({text:n}),window.location.href="./thoughts");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsx)(l.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)(d.a,{path:"/",exact:!0,render:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"What's on your mind?"}),Object(j.jsx)("h2",{children:"Write a joke, an idea, or just something random."}),Object(j.jsx)(p,{setText:o,defaultText:n,sendMessage:w}),Object(j.jsx)(b,{onClick:w,text:"Share it with the world!"})]})}}),Object(j.jsx)(d.a,{path:"/thoughts",render:function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{thoughts:c})})}}),Object(j.jsx)("a",{className:"App-link",href:"https://github.com/LewisGRobotics",target:"_blank",rel:"noopener noreferrer",children:"About"})]})})})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),o(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()}},[[44,1,2]]]);
//# sourceMappingURL=main.d20e728e.chunk.js.map