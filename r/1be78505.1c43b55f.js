(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{171:function(e,a,t){"use strict";t(49),t(23),t(18),t(19),t(70);var r=t(0),n=t.n(r),l=t(155),c=t.n(l),o=t(154),i=t(160),s=!1;a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),m=Object(o.a)().siteConfig,u=(void 0===m?{}:m).themeConfig.algolia,h=Object(i.c)(),d=function(){a.current||(window.docsearch({appId:u.appId,apiKey:u.apiKey,indexName:u.indexName,inputSelector:"#search_input_react",algoliaOptions:u.algoliaOptions,handleSelected:function(e,a,t){var r=document.createElement("a");r.href=t.url;var n="#__docusaurus"===r.hash?""+r.pathname:""+r.pathname+r.hash;h.push(n)}}),a.current=!0)},f=function(){s?d():Promise.all([t.e(29).then(t.t.bind(null,183,7)),t.e(17).then(t.t.bind(null,196,7))]).then((function(e){var a=e[0].default;s=!0,window.docsearch=a,d()}))},p=Object(r.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:f,onMouseOver:f,onFocus:p,onBlur:p,ref:l}))}},176:function(e,a,t){"use strict";var r=t(1),n=t(9),l=t(0),c=t.n(l),o=t(155),i=t.n(o),s=t(158),m=t(154),u=t(157),h=t(120),d=t.n(h);function f(e){var a=e.to,t=e.href,l=e.label,o=Object(n.a)(e,["to","href","label"]),i=Object(u.a)(a);return c.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:i},o),l)}var p=function(e){var a=e.url,t=e.alt;return c.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(m.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,r=t||{},n=r.copyright,l=r.links,o=void 0===l?[]:l,s=r.logo,h=void 0===s?{}:s,b=Object(u.a)(h.src);return t?c.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===t.style})},c.a.createElement("div",{className:"container"},o&&o.length>0&&c.a.createElement("div",{className:"row footer__links"},o.map((function(e,a){return c.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?c.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?c.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?c.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):c.a.createElement("li",{key:e.href||e.to,className:"footer__item"},c.a.createElement(f,e))}))):null)}))),c.a.createElement("div",{className:"footer__end text--center"},c.a.createElement("div",{className:"footer__madewith margin-bottom--md"},"Made with ",c.a.createElement("img",{src:Object(u.a)("img/heart-fill.png")})," in Kuala Lumpur, Malaysia"),c.a.createElement("div",null,"Released under the MIT license"),(h||n)&&c.a.createElement("div",{className:""},h&&h.src&&c.a.createElement("div",{className:"margin-bottom--sm"},h.href?c.a.createElement("a",{href:h.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},c.a.createElement(p,{alt:h.alt,url:b})):c.a.createElement(p,{alt:h.alt,url:b})),n),c.a.createElement("div",{className:"text--center margin-top--md"},c.a.createElement("a",{target:"_blank",href:"https://github.com/prevwong/craft.js"},c.a.createElement("img",{src:"https://img.shields.io/github/stars/prevwong/craft.js?color=%23000&logo=github&style=social"})))))):null}}}]);