(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a.p+"static/media/spotify-logo.96a319e0.png"},,,,,function(e,t,a){"use strict";(function(e){var l=a(13),n=a(14),r=a(20),i=a(19),s=a(0),o=a.n(s),c=(a(32),a(15)),u=a(7),f=a.n(u),m=a(18),d=a.n(m),p=function(t){Object(r.a)(s,t);var a=Object(i.a)(s);function s(){var t;Object(l.a)(this,s);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=a.call.apply(a,[this].concat(r))).state={playlists:[],filteredPlaylists:[],filters:{},inputValue:"",filterHidden:!0},t.getPlaylistsFromAPI=function(a){var l="https://api.spotify.com/v1/browse/featured-playlists",n=!1;if(a)for(var r in a)""!==r&&a[r].value&&""!==a[r].value&&(n||(l+="?"),n=!0,l="".concat(l,"&").concat(r,"=").concat(a[r].value));fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:{Authorization:"Basic "+e.from("e65a6aeace1d4884bf64fa55845d2cdc:5657b8b206f145569ce0a6909ddf84b3").toString("base64"),"Content-Type":"application/x-www-form-urlencoded"},body:["grant_type=client_credentials"]}).then((function(e){return e.json()})).then((function(e){fetch(l,{method:"GET",headers:{Authorization:e.token_type+" "+e.access_token}}).then((function(e){if(200===e.status)return e.json();var t="Error while processing the request.";switch(e.status){case 400:t=t.concat(" Try choosing different options for your search.");break;case 404:t="No results found."}return{playlists:{items:[],errorMessage:t}}})).then((function(e){return t.setState({playlists:e.playlists,filteredPlaylists:e.playlists})}))})).catch(console.log)},t.onSearchPlaylist=function(e){var a=e.target.value;if(t.setState({inputValue:a}),0===a.length)t.setState({filteredPlaylists:t.state.playlists});else{var l=t.state.playlists.items.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));l.length>0?t.setState({filteredPlaylists:{items:l}}):t.setState({filteredPlaylists:{items:[],errorMessage:"No results found."}})}},t.toggleSearchClass=function(){t.setState({filterHidden:!t.state.filterHidden})},t}return Object(n.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.getPlaylistsFromAPI(),fetch("http://www.mocky.io/v2/5a25fade2e0000213aa90776").then((function(e){return e.json()})).then((function(t){e.setState({filters:t.filters})})),window.selects={country:{},locale:{},limit:20,offset:0},setInterval(this.getPlaylistsFromAPI.bind(this,window.selects),3e4)}},{key:"render",value:function(){return o.a.createElement("div",{className:"app"},o.a.createElement("header",null,o.a.createElement("img",{src:f.a,alt:"spotify logo",width:"100"}),o.a.createElement("span",{className:"app-name"}," SPOT",o.a.createElement("span",{className:"orange"},"IF"),o.a.createElement("span",{className:"red"},"OOD")),o.a.createElement("img",{src:d.a,alt:"ifood logo",width:"100",className:"ifood-logo"})),o.a.createElement("div",{className:"app-body"},o.a.createElement(c.a,{playlists:this.state.playlists,filteredPlaylists:this.state.filteredPlaylists,filters:this.state.filters,inputValue:this.state.inputValue,onSearchPlaylist:this.onSearchPlaylist,getPlaylistsFromAPI:this.getPlaylistsFromAPI,filterHidden:this.state.filterHidden,toggleSearchClass:this.toggleSearchClass})),o.a.createElement("footer",{className:"footer"},"Data provided by Spotify."))}}]),s}(s.Component);t.a=p}).call(this,a(28).Buffer)},,,function(e,t,a){"use strict";var l=a(2),n=a(0),r=a.n(n),i=(a(33),a(4)),s=a(5),o=a(16),c=a.n(o),u=a(7),f=a.n(u),m=a(8);t.a=function(e){var t=e.filteredPlaylists.items||[],a=Array.from(e.filters)||[],n=function(t,a){window.selects[t]=a,e.getPlaylistsFromAPI(window.selects)},o={en_AU:"English (Australia)",de_DE:"German",pt_BR:"Portuguese (Brazil)",fr_FR:"French",en_US:"English (United States)",es_AR:"Spanish (Argentina)"},u={AU:"Australia",DE:"Germany",BR:"Brazil",PT:"Portugal",en_US:"United States",RU:"Russia"},d={option:function(e,t){return Object(l.a)(Object(l.a)({},e),{},{color:"black",backgroundColor:t.isFocused?"rgb(63, 255, 36)":"rgb(28, 112, 17)"})},container:function(e){return Object(l.a)(Object(l.a)({},e),{},{marginRight:"2rem"})},control:function(e){return Object(l.a)(Object(l.a)({},e),{},{width:"100%",minWidth:"200px",border:"1px solid rgb(28, 112, 17)",backgroundColor:"rgb(28, 112, 17)",boxShadow:"none",borderColor:"rgb(28, 112, 17)","&:hover":{borderColor:"rgb(28, 112, 17)"}})},valueContainer:function(e){return Object(l.a)(Object(l.a)({},e),{},{width:"100%"})},placeholder:function(e){return Object(l.a)(Object(l.a)({},e),{},{color:"black"})},singleValue:function(e){return Object(l.a)(Object(l.a)({},e),{},{color:"black"})},indicatorSeparator:function(e){return Object(l.a)(Object(l.a)({},e),{},{backgroundColor:"black"})},indicatorContainer:function(e){return Object(l.a)(Object(l.a)({},e),{},{color:"black"})},Svg:function(e){return Object(l.a)(Object(l.a)({},e),{},{fill:"black"})},menu:function(e){return Object(l.a)(Object(l.a)({},e),{},{backgroundColor:"rgb(28, 112, 17)"})}},p=[];a.filter((function(e){return"country"===e.id})).length>0&&(p.push({value:"",label:"All"}),a.find((function(e){return"country"===e.id})).values.forEach((function(e){return p.push({value:e.value,label:u[e.value]||e.name})})));var h=[];a.filter((function(e){return"locale"===e.id})).length>0&&a.find((function(e){return"locale"===e.id})).values.forEach((function(e){return h.push({value:e.value,label:o[e.value]||e.name})}));return r.a.createElement("div",null,r.a.createElement("div",{className:"search"},r.a.createElement("div",null,r.a.createElement(i.a,{className:"search-icon",icon:s.e,name:"search icon"})),r.a.createElement("div",null,r.a.createElement("input",{className:"search-name",type:"text",value:e.inputValue,onChange:function(t){e.onSearchPlaylist(t)},placeholder:"Search playlist by name",name:"search playlist by name"}))),r.a.createElement("div",{className:"search filters-api"},r.a.createElement("button",{type:"button",title:"Show more filter options",className:"btn more-btn",onClick:e.toggleSearchClass},r.a.createElement("span",{className:"".concat(e.filterHidden?"show-el-inline":"hide-el")},r.a.createElement(i.a,{className:"plus-icon",icon:s.d}),r.a.createElement("span",{className:"more"},"Click for more filter options")),r.a.createElement("span",{className:"".concat(e.filterHidden?"hide-el":"show-el-inline")},r.a.createElement(i.a,{className:"minus-icon",icon:s.c}))),r.a.createElement("div",{className:"".concat(e.filterHidden?"hide-el":"show-el-flex")},a.filter((function(e){return"country"===e.id})).length>0&&r.a.createElement("div",{name:"select country"},r.a.createElement("span",null,"Country:"),r.a.createElement(m.a,{options:p,styles:d,onChange:n.bind(void 0,"country"),defaultValue:{value:"",label:"All"}})),a.filter((function(e){return"locale"===e.id})).length>0&&r.a.createElement("div",{name:"select language"},r.a.createElement("span",null,"Language:"),r.a.createElement(m.a,{options:h,styles:d,onChange:n.bind(void 0,"locale"),defaultValue:{value:"en_US",label:"English (Unites States)"}})),r.a.createElement("div",{name:"select limit results"},r.a.createElement("span",null,"Limit results to: "),r.a.createElement(m.a,{options:[{value:"1",label:"1"},{value:"5",label:"5"},{value:"10",label:"10"},{value:"15",label:"15"},{value:"20",label:"20"},{value:"25",label:"25"},{value:"30",label:"30"},{value:"35",label:"35"},{value:"40",label:"40"},{value:"45",label:"45"},{value:"50",label:"50"}],styles:d,onChange:n.bind(void 0,"limit"),defaultValue:{value:"20",label:"20"}})))),0===t.length&&r.a.createElement("div",{className:"no-results"},e.filteredPlaylists.errorMessage),r.a.createElement("div",{className:"grid","data-testid":"grid"},t.map((function(e,t){return r.a.createElement("div",{className:"grid-item",key:"playlist-".concat(t)},r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.external_urls.spotify},r.a.createElement("img",{key:"{i}",alt:e.name,src:e.images.length>0?e.images[0].url:c.a,className:"img-center image",title:e.name})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.external_urls.spotify,className:"title"},e.name),r.a.createElement("div",{className:"owner"},"by ",e.owner.display_name),r.a.createElement("div",{className:"description"},e.description.replace(/<[^>]*>/g,""))),r.a.createElement("div",{className:"bottom"},e.external_urls&&e.external_urls.spotify?r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.external_urls.spotify},r.a.createElement("img",{alt:"open playlist on spotify web",src:f.a,width:"20",height:"20",title:"Open playlist on Spotify Web"})):"No URL Available"))}))),(null!=e.filteredPlaylists.next||null!=e.filteredPlaylists.previous)&&r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",{className:"pagination"},null!=e.filteredPlaylists.previous&&r.a.createElement("td",null,r.a.createElement("button",{onClick:n.bind(void 0,"offset",{value:e.filteredPlaylists.offset-e.filteredPlaylists.limit})},"Previous ",r.a.createElement(i.a,{className:"page-icon",icon:s.a}))),null!=e.filteredPlaylists.next&&r.a.createElement("td",null,r.a.createElement("button",{onClick:n.bind(void 0,"offset",{value:e.filteredPlaylists.offset+t.length})},r.a.createElement(i.a,{className:"page-icon",icon:s.b})," Next"))))))}},function(e,t,a){e.exports=a.p+"static/media/no-image.c3122a41.jpg"},,function(e,t,a){e.exports=a.p+"static/media/ifood-logo.807fcd77.PNG"},,,function(e,t,a){e.exports=a(22)},function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(3),i=a.n(r),s=(a(27),a(12));i.a.render(n.a.createElement(s.a,null),document.getElementById("root"))},,,,,function(e,t,a){},,,,,function(e,t,a){},function(e,t,a){}],[[21,1,2]]]);
//# sourceMappingURL=main.28e5627f.chunk.js.map