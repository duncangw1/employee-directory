(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(2),s=n.n(r),o=n(13),a=n.n(o),i=(n(21),n(4));n(22);var l=function(e){return Object(c.jsx)("main",{className:"wrapper",children:e.children})};n(23);var j=function(){return Object(c.jsxs)("div",{className:"jumbotron",children:[Object(c.jsx)("h1",{children:"Employee Directory"}),Object(c.jsx)("p",{children:"Click on carrots to filter by heading or use the search box to narrow your results."})]})},d=n(15);n(24);var u=function(e){return Object(c.jsx)("div",{className:"card p-3 align-items-center",children:Object(c.jsx)("form",{className:"search",children:Object(c.jsx)("input",Object(d.a)({id:"searchbox",type:"search",className:"form-control"},e))})})};n(25);var h=function(){return Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Image"}),Object(c.jsx)("th",{scope:"col",onClick:function(){return console.log("name clicked")},children:"Name"}),Object(c.jsx)("th",{scope:"col",children:"Phone"}),Object(c.jsx)("th",{scope:"col",children:"Email"}),Object(c.jsx)("th",{scope:"col",children:"DOB"})]})})};var b=function(e){var t=e.ssn,n=e.image,r=e.firstName,s=e.lastName,o=e.phone,a=e.email,i=e.dob;return Object(c.jsx)("tbody",{children:Object(c.jsxs)("tr",{id:r.toLowerCase(),children:[Object(c.jsx)("th",{scope:"row",children:Object(c.jsx)("img",{src:n,alt:r+" "+s+" thumbnail image"})},t),Object(c.jsx)("td",{children:r+" "+s}),Object(c.jsx)("td",{children:o}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:i})]})})},m=n(14),O=n.n(m),p={randomUsers:function(){return O.a.get("https://randomuser.me/api/?results=15&nat=us")}};n(44);var f=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],o=Object(r.useState)(""),a=Object(i.a)(o,2),d=a[0],m=a[1];function O(e){var t=e.split("-"),n=t[0];return[t[1],t[2].split("T")[0],n].join("-")}return Object(r.useEffect)((function(){p.randomUsers().then((function(e){s(e.data.results)}))}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(l,{children:[Object(c.jsx)(j,{}),Object(c.jsx)(u,{value:d,onChange:function(e){var t=e.target.value;console.log("value: ",t),m(t),console.log("userSearch: ",d);for(var c=0;c<n.length;c++){var r=n[c].name.first.toLowerCase();console.log("userName: ",r);var s=r.startsWith(t);if(console.log("startingFilter: ",s),!1===s){var o=n[c];console.log("user to hide: ",o),document.getElementById(r).style.display="none"}else document.getElementById(r).style.display="";""===t&&(document.getElementById(r).style.display="")}},placeholder:"Search Employee...",name:"employee"}),Object(c.jsx)("div",{className:"container",children:Object(c.jsxs)("table",{className:"table mt-4 table-hover table-bordered",children:[Object(c.jsx)(h,{}),n.map((function(e){return Object(c.jsx)(b,{image:e.picture.thumbnail,firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,dob:O(e.dob.date)},e.id.value)}))]})})]})})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))};n(45);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),x()}},[[46,1,2]]]);
//# sourceMappingURL=main.d25d9c3e.chunk.js.map