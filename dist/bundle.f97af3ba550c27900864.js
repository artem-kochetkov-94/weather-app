!function(a){function t(t){for(var e,n,r=t[0],o=t[1],i=t[2],u=0,c=[];u<r.length;u++)n=r[u],l[n]&&c.push(l[n][0]),l[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(a[e]=o[e]);for(p&&p(t);c.length;)c.shift()();return s.push.apply(s,i||[]),f()}function f(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==l[i]&&(r=!1)}r&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var n={},l={0:0},s=[];function u(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=a,u.c=n,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var e=window.webpackJsonp=window.webpackJsonp||[],r=e.push.bind(e);e.push=t,e=e.slice();for(var o=0;o<e.length;o++)t(e[o]);var p=r;s.push([53,1]),f()}([,,,,,function(t,e,n){"use strict";n.d(e,"d",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return u});var r=Symbol("SET_DATE"),o=Symbol("FETCH_CITY_WEATHER_REQUEST"),i=Symbol("FETCH_CITY_WEATHER_SUCCESS"),u=Symbol("FETCH_CITY_WEATHER_FAILURE")},,function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"getWeather",function(){return f}),n.d(r,"isFetching",function(){return l}),n.d(r,"getCountDate",function(){return s}),n.d(r,"getWeatherByDate",function(){return p}),n.d(r,"getTempArray",function(){return y});var o={};n.r(o),n.d(o,"getCityWeather",function(){return h});var i=n(5),u=n(4),c={weather:null,date:+new Date,isFetching:!1,countDate:5},a=Object(u.c)({weather:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c.weather,e=1<arguments.length?arguments[1]:void 0;switch(e.type){case i.c:return e.payload.weather;default:return t}},date:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c.date,e=1<arguments.length?arguments[1]:void 0;switch(e.type){case i.d:return e.payload.date;default:return t}},isFetching:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c.isFetching;switch((1<arguments.length?arguments[1]:void 0).type){case i.b:return!0;case i.c:case i.a:return!1;default:return t}},countDate:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:c.countDate;return(1<arguments.length?arguments[1]:void 0).type,t}}),f=function(t){return t.weather},l=function(t){return t.isFetching},s=function(t){return t.countDate},p=function(t){var u=t.date;return t.weather.list.filter(function(t){var e,n,r=new Date(t.dt_txt),o=((e=new Date(u)).setHours(0,0,0,0),e.getTime()),i=((n=new Date(u)).setHours(24,0,0,0),n.getTime());return o<=r&&r<i})},y=function(t){return t.map(function(t){return{date:t.dt_txt,temp:(e=t.main.temp,e-273.15^0)};var e})},b=n(11),h=function(n){return function(e,t){if(t().weather.isFetching)return Promise.resolve();e(b.b(n)),fetch("http://api.openweathermap.org/data/2.5/forecast?id=".concat(n,"&appid=35d82edac62a9f06a197cbeaf62eaf8d")).then(function(t){return t.json()}).then(function(t){return e(b.c(t))}).catch(function(t){return e(b.a(t))})}};n.d(e,"c",function(){return r}),n.d(e,"b",function(){return o});e.a=a},,,,function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"b",function(){return i}),n.d(e,"c",function(){return u}),n.d(e,"a",function(){return c});var r=n(5),o=function(t){return{type:r.d,payload:{date:+t}}},i=function(t){return{type:r.b,payload:{id:t}}},u=function(t){return{type:r.c,payload:{weather:t}}},c=function(t){return{type:r.a,payload:{response:t}}}},,,,function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"getCountryById",function(){return c});var o=n(4),i={allIds:["0","1","2"],byIds:{0:{id:"0",title:"country 0",cities:["2950159","524901"]},1:{id:"1",title:"country 1",cities:["515003","4119617"]},2:{id:"2",title:"country 2",cities:["551487","1496153"]}}},u=Object(o.c)({allIds:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.allIds;return(1<arguments.length?arguments[1]:void 0).type,t},byIds:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.byIds;return(1<arguments.length?arguments[1]:void 0).type,t}}),c=function(t,e){return t.byIds[e]};n(24),n(25);n.d(e,"a",function(){return r});e.b=u},function(t,e,n){"use strict";var r={};n.r(r),n.d(r,"getCityById",function(){return c});var o=n(4),i=(n(17),{allIds:["2950159","524901","515003","4119617","551487","1496153"],byIds:{2950159:{id:"2950159",title:"Berlin"},524901:{id:"524901",title:"Moscow"},515003:{id:"515003",title:"Orenburg"},4119617:{id:"4119617",title:"London"},551487:{id:"551487",title:"Kazan"},1496153:{id:"1496153",title:"Omsk"}}}),u=Object(o.c)({allIds:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.allIds;return(1<arguments.length?arguments[1]:void 0).type,t},byIds:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:i.byIds;return(1<arguments.length?arguments[1]:void 0).type,t}}),c=function(t,e){return t.byIds[e]};n(23);n.d(e,"a",function(){return r});e.b=u},function(t,e){},,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e,r){"use strict";(function(i){r.d(e,"a",function(){return t});var u=r(27),c=r(36),a=r(41);r(70);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var t=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,s(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i.PureComponent),n=e,(r=[{key:"render",value:function(){return i.createElement("div",{className:"app"},i.createElement(u.a,null),i.createElement("div",{className:"app__content"},i.createElement(c.a,null),i.createElement(a.a,null)))}}])&&f(n.prototype,r),o&&f(n,o),e}()}).call(this,r(1))},function(t,n,r){"use strict";(function(t){var e=r(28);r(67);n.a=function(){return t.createElement("header",{className:"header"},t.createElement(e.a,null))}}).call(this,r(1))},function(t,e,n){"use strict";var r=n(6),o=n(4),i=n(7),u=n(11),c=n(30);e.a=Object(r.b)(function(t){return{countDate:i.c.getCountDate(t.weather)}},function(t){return Object(o.b)({setDate:u.d},t)})(c.a)},,function(t,e,n){"use strict";(function(i){var u=n(31),c=n(35);function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var t=function(t){function o(t){var e,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(e=!(r=l(o).call(this,t))||"object"!==a(r)&&"function"!=typeof r?s(n):r).handleChange=e.handleChange.bind(s(e)),e}var e,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,i.PureComponent),e=o,(n=[{key:"handleChange",value:function(t){(0,this.props.setDate)(t)}},{key:"render",value:function(){return i.createElement(u.a,{onChange:this.handleChange,minDate:new Date,maxDate:Object(c.a)(new Date,5)})}}])&&f(e.prototype,n),r&&f(e,r),o}();e.a=t}).call(this,n(1))},function(t,e,n){"use strict";(function(i){var u=n(51);n(66);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var t=function(t){function o(t){var e,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(e=!(r=f(o).call(this,t))||"object"!==c(r)&&"function"!=typeof r?l(n):r).state={startDate:new Date},e.handleChange=e.handleChange.bind(l(e)),e}var e,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(o,i.PureComponent),e=o,(n=[{key:"handleChange",value:function(t){this.setState({startDate:t}),"function"==typeof this.props.onChange&&this.props.onChange(t)}},{key:"render",value:function(){return i.createElement(u.a,{selected:this.state.startDate,onChange:this.handleChange,minDate:this.props.minDate,maxDate:this.props.maxDate})}}])&&a(e.prototype,n),r&&a(e,r),o}();e.a=t}).call(this,n(1))},,,,function(t,e,n){"use strict";e.a=function(t,e){var n=new Date(t);return n.setDate(n.getDate()+e),n}},function(t,n,r){"use strict";(function(t){r(68);var e=r(37);n.a=function(){return t.createElement("div",{className:"content"},t.createElement(e.a,null))}}).call(this,r(1))},function(t,r,y){"use strict";(function(i){var t=y(6),o=y(7),u=y(38),c=y(39),a=y(40);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var e=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,s(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i.PureComponent),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.isFetching,n=t.weather;return e?i.createElement(c.a,null):n?i.createElement(u.a,this.props):null}}])&&f(n.prototype,r),o&&f(n,o),e}();r.a=Object(t.b)(function(t){var e=o.c.isFetching(t.weather),n=o.c.getWeather(t.weather);if(e&&null===n)return{isFetching:e};if(null===n)return{};var r=Object(a.a)(o.c.getWeatherByDate,o.c.getTempArray)(t.weather);return{weather:n,cityName:n.city.name,tempArray:r,isFetching:e}},{})(e)}).call(this,y(1))},function(t,o,i){"use strict";(function(r){var t=i(0),e=i.n(t),n=function(t){var e=t.tempArray,n=t.cityName;return r.createElement("div",{className:"weather"},r.createElement("p",null,"город: ",n),e&&e.map(function(t){return r.createElement("p",{key:t.date},t.date," : ",t.temp," по цельсию")}))};n.propTypes={tempArray:e.a.array.isRequired,cityName:e.a.string.isRequired},n.defaultProps={tempArray:[],cityName:""},o.a=n}).call(this,i(1))},function(t,e,n){"use strict";(function(t){e.a=function(){return t.createElement("p",null,"загрузка...")}}).call(this,n(1))},function(t,e,n){"use strict";e.a=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}}},function(t,n,r){"use strict";(function(t){var e=r(42);r(69);n.a=function(){return t.createElement("div",{className:"sidebar"},t.createElement("h1",null,"Sidebar"),t.createElement(e.a,null))}}).call(this,r(1))},function(t,e,n){"use strict";var r=n(6),o=n(43);e.a=Object(r.b)(function(t){return{items:t.countries.allIds}},{})(o.a)},function(t,o,i){"use strict";(function(n){var r=i(44),t=i(0),e=function(t){var e=t.items;return e?n.createElement("ul",{className:"countries"},e.map(function(t){return n.createElement(r.a,{key:t,id:t})})):null};e.propTypes={items:i.n(t).a.array.isRequired},e.defaultProps={items:[]},o.a=e}).call(this,i(1))},function(t,r,o){"use strict";(function(i){var t=o(6),u=o(45),c=o(15);function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var e=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),f(this,l(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,i.PureComponent),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.countries,n=t.id,r=c.a.getCountryById(e,n);return i.createElement(u.a,r)}}])&&a(n.prototype,r),o&&a(n,o),e}();r.a=Object(t.b)(function(t){return{countries:t.countries}},{})(e)}).call(this,o(1))},function(t,o,c){"use strict";(function(i){var u=c(46),t=c(49),e=c(0),n=c.n(e),r=function(t){var e=t.title,n=t.cities,r=t.isOpen,o=t.toggleOpen;return i.createElement("li",{className:"country"},i.createElement("span",{onClick:o},e),n&&r&&i.createElement(u.a,{items:n}))};r.propTypes={title:n.a.string.isRequired,cities:n.a.array.isRequired,isOpen:n.a.bool.isRequired,toggleOpen:n.a.func.isRequired},r.defaultProps={title:"",cities:[],isOpen:!1,toggleOpen:function(t){return t}},o.a=Object(t.a)(r)}).call(this,c(1))},function(t,o,i){"use strict";(function(n){var r=i(47),t=i(0),e=function(t){var e=t.items;return e?n.createElement("ul",{className:"cities"},e.map(function(t){return n.createElement(r.a,{key:t,id:t})})):null};e.propTypes={items:i.n(t).a.array.isRequired},e.defaultProps={items:[]},o.a=e}).call(this,i(1))},function(t,y,b){"use strict";(function(i){var t=b(6),e=b(4),u=b(48),c=b(16),n=b(7);function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?function(t){if(void 0!==t)return t;throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var o=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,s(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,i.PureComponent),n=e,(r=[{key:"render",value:function(){var t=this.props,e=t.cities,n=t.id,r=t.getCityWeather,o=c.a.getCityById(e,n);return i.createElement(u.a,a({},o,{getCityWeather:function(){return r(n)}}))}}])&&f(n.prototype,r),o&&f(n,o),e}();y.a=Object(t.b)(function(t){return{cities:t.cities}},function(t){return Object(e.b)(n.b,t)})(o)}).call(this,b(1))},function(t,o,i){"use strict";(function(r){var t=i(0),e=i.n(t),n=function(t){var e=t.title,n=t.getCityWeather;return r.createElement("li",{className:"city",onClick:n},e)};n.propTypes={title:e.a.string.isRequired,getCityWeather:e.a.func.isRequired},n.defaultProps={title:"",getCityWeather:function(t){return t}},o.a=n}).call(this,i(1))},function(t,e,n){"use strict";(function(u){function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}e.a=function(i){return function(t){function o(t){var e,n,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),n=this,(e=!(r=l(o).call(this,t))||"object"!==c(r)&&"function"!=typeof r?s(n):r).state={isOpen:!1},e.toggleOpen=e.toggleOpen.bind(s(e)),e}var e,n,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(o,u.PureComponent),e=o,(n=[{key:"render",value:function(){return u.createElement(i,a({},this.props,this.state,{toggleOpen:this.toggleOpen}))}},{key:"toggleOpen",value:function(){this.setState({isOpen:!this.state.isOpen})}}])&&f(e.prototype,n),r&&f(e,r),o}()}}).call(this,n(1))},,,function(t,e,n){"use strict";var r=n(4),o=n(15),i=n(16),u=n(7),c=Object(r.c)({countries:o.b,cities:i.b,weather:u.a}),a=n(50),f=(n(71),[a.a]);var l=Object(r.d)(c,r.a.apply(void 0,f));e.a=l},function(t,e,i){"use strict";i.r(e),function(t,e){var n=i(26),r=i(6),o=i(52);i(72);t.render(e.createElement(r.a,{store:o.a},e.createElement(n.a,null)),document.getElementById("app"))}.call(this,i(14),i(1))},,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){}]);
//# sourceMappingURL=bundle.f97af3ba550c27900864.js.map