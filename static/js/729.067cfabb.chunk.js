(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{955:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});r(791);var n="MovieList_movieList__uFrOZ",a=r(87),c="MovieCard_movieItem__UzN21",s="MovieCard_movieLink__+HjyM",u="MovieCard_movieImage__540ko",o="MovieCard_movieTitle__61Rqx",i=r(184);var p=function(e){var t=e.movie,r=e.prevLocation;return(0,i.jsx)("li",{className:c,children:(0,i.jsxs)(a.rU,{to:"/movies/".concat(t.id),state:{from:r},className:s,children:[(0,i.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w200/".concat(t.poster_path):{},alt:t.title||t.name,className:u}),(0,i.jsx)("p",{className:o,children:t.title||t.name})]})})},f=function(e){var t=e.movies,r=e.prevLocation;return(0,i.jsx)("ul",{className:n,children:null===t||void 0===t?void 0:t.map((function(e){return(0,i.jsx)(p,{movie:e,prevLocation:r},e.id)}))})}},729:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(854),o=r(955),i=r(791),p=r(7),f=r.n(p),l=r(689),h="SearchBar_searchForm__V6XO6",v="SearchBar_searchInput__S8ff+",m="SearchBar_searchButton__hgPYE",d=r(184),_=function(e){var t=e.onSearch,r=(0,l.TH)(),n=(0,i.useState)(""),c=(0,a.Z)(n,2),s=c[0],u=c[1];return(0,i.useEffect)((function(){var e=new URLSearchParams(r.search).get("query");e&&u(e)}),[r.search]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===s.trim()&&alert("Enter the film title"),t(s)},className:h,children:[(0,d.jsx)("input",{type:"text",name:"searchQuery",value:s,autoComplete:"off",autoFocus:!0,placeholder:"Search...",onChange:function(e){u(e.target.value.toLowerCase())},className:v}),(0,d.jsx)("button",{type:"submit",className:m,children:"Search"})]})})};_.protoType={onSearch:f().func.isRequired};var y=_,x=r(87),g=r(409);var b=function(){var e=(0,x.lr)(),t=(0,a.Z)(e,2),r=t[0],c=t[1],p=(0,i.useState)([]),f=(0,a.Z)(p,2),h=f[0],v=f[1],m=(0,i.useState)(""),_=(0,a.Z)(m,2),b=_[0],w=_[1],S=(0,i.useState)(!1),Z=(0,a.Z)(S,2),k=Z[0],j=Z[1],T=(0,l.TH)(),C=r.get("query");return(0,i.useEffect)((function(){if(C){var e=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,j(!0),e.next=4,(0,g.pl)(C);case 4:t=e.sent,v(t),t.length||alert("Your movies were not found!"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),w(e.t0.message);case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}}),[C]),(0,d.jsxs)(d.Fragment,{children:[k&&(0,d.jsx)(u.Z,{}),b&&(0,d.jsx)("div",{children:b}),(0,d.jsx)(y,{onSearch:function(e){c({query:"".concat(e)})}}),h&&(0,d.jsx)(o.Z,{movies:h,prevLocation:T})]})}},409:function(e,t,r){"use strict";r.d(t,{Hx:function(){return m},Tg:function(){return u},Y5:function(){return f},pl:function(){return i},uV:function(){return h}});var n=r(861),a=r(757),c=r.n(a),s=r(759);function u(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(e){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(t,"?language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(t,"/credits?language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("movie/".concat(t,"/reviews?language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.Z.defaults.baseURL="https://api.themoviedb.org/3",s.Z.defaults.params={api_key:"fbdc642376dc1e27fcf8ce266154f176"}},888:function(e,t,r){"use strict";var n=r(47);function a(){}function c(){}c.resetWarningCache=a,e.exports=function(){function e(e,t,r,a,c,s){if(s!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:a};return r.PropTypes=r,r}},7:function(e,t,r){e.exports=r(888)()},47:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=729.067cfabb.chunk.js.map