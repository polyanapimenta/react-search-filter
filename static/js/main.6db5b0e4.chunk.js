(this.webpackJsonpsearching_cats=this.webpackJsonpsearching_cats||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),r=c.n(a),s=c(3),i=c.n(s),h=(c(13),c(4)),o=c(5),j=c(7),l=c(6),u=(c(14),function(e){return Object(n.jsxs)("div",{className:"card-container",children:[Object(n.jsx)("img",{alt:"character",src:"https://robohash.org/".concat(e.character.id,"?set=set4&size=180x200")}),Object(n.jsx)("h2",{children:e.character.username}),Object(n.jsx)("p",{children:e.character.website})]})}),d=(c(15),function(e){return Object(n.jsx)(n.Fragment,{children:0==e.characters?Object(n.jsx)("p",{children:"\ud83e\uddd0 Ops! nothing was found."}):Object(n.jsx)("div",{className:"card-list",children:e.characters.map((function(e){return Object(n.jsx)(u,{character:e},e.id)}))})})}),p=(c(16),function(e){var t=e.placeholder,c=e.onSearchChange;return Object(n.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:c})}),b=c.p+"static/media/logo.6ce24c58.svg",f=(c(17),function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(h.a)(this,c),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={characters:[],searchField:""},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({characters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.characters,c=e.searchField,a=t.filter((function(e){return e.username.toLowerCase().includes(c.toLowerCase())}));return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("h1",{children:"Searching Cats!"}),Object(n.jsx)(p,{placeholder:"Find Your Cat Here \ud83d\udc08",onSearchChange:this.onSearchChange}),Object(n.jsx)(d,{characters:a}),Object(n.jsxs)("footer",{className:"footer",children:[Object(n.jsxs)("p",{children:["Made with ",Object(n.jsx)("img",{alt:"reactjs.org",src:b,width:"34px",height:"34px"})," React"]}),Object(n.jsxs)("p",{children:["Copyright \xa9 2021 \xa0",Object(n.jsx)("a",{href:"mailto:polyana.pimenta@gmail.com",children:"Polyana Pimenta"})]})]})]})}}]),c}(r.a.Component)),g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g()}],[[18,1,2]]]);
//# sourceMappingURL=main.6db5b0e4.chunk.js.map