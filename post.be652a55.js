function F(){}function Ue(e){return e()}function Pe(){return Object.create(null)}function te(e){e.forEach(Ue)}function qe(e){return typeof e=="function"}function He(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let ce;function We(e,t){return ce||(ce=document.createElement("a")),ce.href=t,e===ce.href}function tt(e){return Object.keys(e).length===0}let pe=!1;function it(){pe=!0}function at(){pe=!1}function nt(e,t,i,a){for(;e<t;){const n=e+(t-e>>1);i(n)<=a?e=n+1:t=n}return e}function ot(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const o=[];for(let s=0;s<t.length;s++){const y=t[s];y.claim_order!==void 0&&o.push(y)}t=o}const i=new Int32Array(t.length+1),a=new Int32Array(t.length);i[0]=-1;let n=0;for(let o=0;o<t.length;o++){const s=t[o].claim_order,y=(n>0&&t[i[n]].claim_order<=s?n+1:nt(1,n,v=>t[i[v]].claim_order,s))-1;a[o]=i[y]+1;const h=y+1;i[h]=o,n=Math.max(h,n)}const d=[],r=[];let l=t.length-1;for(let o=i[n]+1;o!=0;o=a[o-1]){for(d.push(t[o-1]);l>=o;l--)r.push(t[l]);l--}for(;l>=0;l--)r.push(t[l]);d.reverse(),r.sort((o,s)=>o.claim_order-s.claim_order);for(let o=0,s=0;o<r.length;o++){for(;s<d.length&&r[o].claim_order>=d[s].claim_order;)s++;const y=s<d.length?d[s]:null;e.insertBefore(r[o],y)}}function c(e,t){if(pe){for(ot(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function ee(e,t,i){pe&&!i?c(e,t):(t.parentNode!==e||t.nextSibling!=i)&&e.insertBefore(t,i||null)}function p(e){e.parentNode&&e.parentNode.removeChild(e)}function rt(e,t){for(let i=0;i<e.length;i+=1)e[i]&&e[i].d(t)}function g(e){return document.createElement(e)}function A(e){return document.createTextNode(e)}function C(){return A(" ")}function Ve(){return A("")}function m(e,t,i){i==null?e.removeAttribute(t):e.getAttribute(t)!==i&&e.setAttribute(t,i)}function _(e){return Array.from(e.childNodes)}function st(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Xe(e,t,i,a,n=!1){st(e);const d=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const l=e[r];if(t(l)){const o=i(l);return o===void 0?e.splice(r,1):e[r]=o,n||(e.claim_info.last_index=r),l}}for(let r=e.claim_info.last_index-1;r>=0;r--){const l=e[r];if(t(l)){const o=i(l);return o===void 0?e.splice(r,1):e[r]=o,n?o===void 0&&e.claim_info.last_index--:e.claim_info.last_index=r,l}}return a()})();return d.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,d}function lt(e,t,i,a){return Xe(e,n=>n.nodeName===t,n=>{const d=[];for(let r=0;r<n.attributes.length;r++){const l=n.attributes[r];i[l.name]||d.push(l.name)}d.forEach(r=>n.removeAttribute(r))},()=>a(t))}function b(e,t,i){return lt(e,t,i,g)}function $(e,t){return Xe(e,i=>i.nodeType===3,i=>{const a=""+t;if(i.data.startsWith(a)){if(i.data.length!==a.length)return i.splitText(a.length)}else i.data=a},()=>A(t),!0)}function M(e){return $(e," ")}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let Me;function K(e){Me=e}const Y=[],Be=[],ue=[],Re=[],ct=Promise.resolve();let Ee=!1;function dt(){Ee||(Ee=!0,ct.then(Qe))}function xe(e){ue.push(e)}const Ae=new Set;let de=0;function Qe(){const e=Me;do{for(;de<Y.length;){const t=Y[de];de++,K(t),ut(t.$$)}for(K(null),Y.length=0,de=0;Be.length;)Be.pop()();for(let t=0;t<ue.length;t+=1){const i=ue[t];Ae.has(i)||(Ae.add(i),i())}ue.length=0}while(Y.length);for(;Re.length;)Re.pop()();Ee=!1,Ae.clear(),K(e)}function ut(e){if(e.fragment!==null){e.update(),te(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(xe)}}const fe=new Set;let O;function ft(){O={r:0,c:[],p:O}}function pt(){O.r||te(O.c),O=O.p}function Z(e,t){e&&e.i&&(fe.delete(e),e.i(t))}function Ce(e,t,i,a){if(e&&e.o){if(fe.has(e))return;fe.add(e),O.c.push(()=>{fe.delete(e),a&&(i&&e.d(1),a())}),e.o(t)}else a&&a()}function mt(e){e&&e.c()}function ht(e,t){e&&e.l(t)}function Ye(e,t,i,a){const{fragment:n,after_update:d}=e.$$;n&&n.m(t,i),a||xe(()=>{const r=e.$$.on_mount.map(Ue).filter(qe);e.$$.on_destroy?e.$$.on_destroy.push(...r):te(r),e.$$.on_mount=[]}),d.forEach(xe)}function Ke(e,t){const i=e.$$;i.fragment!==null&&(te(i.on_destroy),i.fragment&&i.fragment.d(t),i.on_destroy=i.fragment=null,i.ctx=[])}function gt(e,t){e.$$.dirty[0]===-1&&(Y.push(e),dt(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Ze(e,t,i,a,n,d,r,l=[-1]){const o=Me;K(e);const s=e.$$={fragment:null,ctx:[],props:d,update:F,not_equal:n,bound:Pe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(o?o.$$.context:[])),callbacks:Pe(),dirty:l,skip_bound:!1,root:t.target||o.$$.root};r&&r(s.root);let y=!1;if(s.ctx=i?i(e,t.props||{},(h,v,...D)=>{const T=D.length?D[0]:v;return s.ctx&&n(s.ctx[h],s.ctx[h]=T)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](T),y&&gt(e,h)),v}):[],s.update(),y=!0,te(s.before_update),s.fragment=a?a(s.ctx):!1,t.target){if(t.hydrate){it();const h=_(t.target);s.fragment&&s.fragment.l(h),h.forEach(p)}else s.fragment&&s.fragment.c();t.intro&&Z(e.$$.fragment),Ye(e,t.target,t.anchor,t.customElement),at(),Qe()}K(o)}class et{$destroy(){Ke(this,1),this.$destroy=F}$on(t,i){if(!qe(i))return F;const a=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return a.push(i),()=>{const n=a.indexOf(i);n!==-1&&a.splice(n,1)}}$set(t){this.$$set&&!tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const bt=[{pages:1},{tags:["ECMAScript","Front-end development","Web development","Web design","HTML","CSS","DOM","JSON","ReactJS","Vue.js","Node.js","Express.js","GraphQL","Webpack","Babel","TypeScript","npm","Yarn","Gatsby","Next.js","Nuxt.js","Create-react-app","Vue-cli","Web Components","Shadow DOM","Virtual DOM","Fetch API","Server-side rendering","Isomorphic JavaScript","Progressive web apps","Single-page applications","PWA","SPA","React Native","Flutter","Angular","Bootstrap","Material-UI","React Router","Axios","Puppeteer","TailWind","Bun.js","Golang","Vite","Vite-Test","Capacitor","Astro","Svelte","Sveltekit","Three.js","MongoDb","Mongoose","BJDB","AssemblyScript","Nodemon","FFI"]},{Blog:[{id:1,url:"/tag/",title:"Astro",subject:"Static Site Generator",img:"/img/tags/astro.webp",tags:["Astro","Web framework","Speed optimization","SEO","Usability","Component island architecture","Static site generation","Performance","UI-agnostic","Tailwind","MDX"],description:"Astro.js is a tool for website development, it stands out for its focus on speed, SEO, and usability.",body1:"Astro.js is an all-in-one web framework for creating fast and content-focused websites. It is designed to help developers create sites optimized for speed, SEO, and usability. With Astro.js, developers can create websites with app-like capabilities without the need for a JavaScript runtime environment.",body2:"One of the main features of Astro.js is its component island architecture. This architecture allows developers to create faster websites by eliminating the costly process of hydration on user devices. Additionally, Astro.js is a static site generation tool that focuses on performance and SEO, providing interactivity with Astro components or using the power of JavaScript frameworks like React or Vue.",body3:"Another standout feature of Astro.js is its customization. Developers can use Tailwind, MDX, and over 100 integrations to customize their website. Astro.js is also UI-agnostic, meaning it is compatible with React, Preact, Solid, Svelte, Vue, Lit, and many other UI frameworks. This allows developers to mix and match different frameworks on the same page, making future migrations easier and avoiding project lock-in to a single framework.",body4:"In summary, Astro.js is a fantastic tool for developing websites.",page:1},{id:2,url:"/tag/",title:"ECMAScript: An Introduction to the Standard for Modern JavaScript",subject:"ECMAScript",img:"/img/tags/ecmascript.webp",tags:["ECMAScript","JavaScript","programming"],description:"ECMAScript is the standard for modern JavaScript, but what exactly is it and how does it impact your code? Read on to learn more about ECMAScript and its role in the world of programming.",body1:"ECMAScript, commonly referred to as JavaScript, is a programming language that is widely used to develop web applications and add interactivity to websites. It was initially created in 1995 by Netscape, but has since been updated and maintained by the European Computer Manufacturers Association (ECMA) and the TC39 committee responsible for preserving the ECMAScript standard. ECMAScript is a specification that defines the syntax, semantics, and runtime behavior of the JavaScript language. It acts as a guide for implementing JavaScript, and any language that adheres to this specification is referred to as an ECMAScript language. Over the years, ECMAScript has undergone several updates, with the latest version being ECMAScript 2020 (ES2020). Each new version introduces new features and enhancements that help to improve the functionality and performance of JavaScript.",body2:"One of the key features of ECMAScript is its object-oriented programming support. This enables developers to create complex and modular code by defining objects and their properties and methods. ECMAScript also supports functional programming, which is a programming paradigm that treats computation as the evaluation of mathematical functions. Additionally, ECMAScript is compatible with web browsers, so JavaScript code written in ECMAScript can be executed in any browser that supports the standard, making it a widely accessible language for building web applications. Outside of web development, ECMAScript is also used in the development of server-side applications and mobile app development frameworks, such as React Native.",body3:"While ECMAScript is a powerful and versatile language, it does have some limitations. One issue is that it is single-threaded, meaning that it can only execute one task at a time. This can lead to performance bottlenecks when dealing with complex or long-running tasks. Another limitation of ECMAScript is that it does not offer built-in support for features commonly used in other programming languages, such as networking or access to low-level system resources. These features must be implemented with the help of external libraries or APIs. Despite these limitations, ECMAScript is still popular among developers due to its simplicity, flexibility, and widespread support.",body4:"In conclusion, the ECMAScript standard is essential for modern JavaScript development and plays an important role in the development of web applications and other software. Its support for object-oriented and functional programming, as well as its compatibility with web browsers, make it a highly valuable tool for software developers. Despite its limitations, its simplicity and flexibility make it a popular choice for building a wide range of software applications.",page:1},{id:3,url:"/tag/",title:"Svelte: A Revolutionary Way of Developing Web Applications",subject:"Svelte",img:"/img/tags/svelte.webp",tags:["Svelte","JavaScript","Spa","Applications","Web development","Revolutionary way"],description:"Svelte is a modern and promising JavaScript framework that offers performance and simplicity in web application development.",body1:`In the world of web development, developers are constantly looking for innovative ways to improve the performance and simplicity of their projects. One of the latest trends in this field is Svelte, a revolutionary approach to JavaScript that promises to create incredibly reactive and fast applications.\r 	 






 What is Svelte?
 Svelte is a framework that uses a unique approach of compiling components into highly optimized JavaScript code, unlike traditional JavaScript frameworks like React, Angular and Vue. It allows for the creation of reactive web applications by eliminating the need for a Virtual DOM, resulting in increased performance compared to other frameworks.`,body2:"One of the key features of ECMAScript is its object-oriented programming support. This enables developers to create complex and modular code by defining objects and their properties and methods. ECMAScript also supports functional programming, which is a programming paradigm that treats computation as the evaluation of mathematical functions. Additionally, ECMAScript is compatible with web browsers, so JavaScript code written in ECMAScript can be executed in any browser that supports the standard, making it a widely accessible language for building web applications. Outside of web development, ECMAScript is also used in the development of server-side applications and mobile app development frameworks, such as React Native.",body3:"While ECMAScript is a powerful and versatile language, it does have some limitations. One issue is that it is single-threaded, meaning that it can only execute one task at a time. This can lead to performance bottlenecks when dealing with complex or long-running tasks. Another limitation of ECMAScript is that it does not offer built-in support for features commonly used in other programming languages, such as networking or access to low-level system resources. These features must be implemented with the help of external libraries or APIs. Despite these limitations, ECMAScript is still popular among developers due to its simplicity, flexibility, and widespread support.",body4:"In conclusion, the ECMAScript standard is essential for modern JavaScript development and plays an important role in the development of web applications and other software. Its support for object-oriented and functional programming, as well as its compatibility with web browsers, make it a highly valuable tool for software developers. Despite its limitations, its simplicity and flexibility make it a popular choice for building a wide range of software applications.",page:1}]},{Projects:[{id:1,url:"/project/",title:"Bunland | Webapp",subject:"Create Webapps with Bun.js and Chromium-based browsers",img:"https://user-images.githubusercontent.com/29004070/193175313-cca3836d-ed39-4fad-975e-2ef750b5c7c4.png",tags:["Webapp","Chromium","Dekstop Apps","Bun","Golang","Linux"],description:"Create Webapps with Bun.js and Chromium-based browsers.",page:1}]}];function _t(e){let t,i,a,n,d,r,l;return{c(){t=g("div"),i=g("div"),a=g("p"),n=A(Le),d=C(),r=g("a"),l=A("@Vital"),this.h()},l(o){t=b(o,"DIV",{class:!0});var s=_(t);i=b(s,"DIV",{class:!0});var y=_(i);a=b(y,"P",{});var h=_(a);n=$(h,Le),d=M(h),r=b(h,"A",{href:!0});var v=_(r);l=$(v,"@Vital"),v.forEach(p),h.forEach(p),y.forEach(p),s.forEach(p),this.h()},h(){m(r,"href","/"),m(i,"class","mx-auto container py-8 text-white text-center"),m(t,"class","w-full bg-zinc-900")},m(o,s){ee(o,t,s),c(t,i),c(i,a),c(a,n),c(a,d),c(a,r),c(r,l)},p:F,i:F,o:F,d(o){o&&p(t)}}}const Le="Made with love \u2764\uFE0F by:";function vt(e){return[]}class wt extends et{constructor(t){super(),Ze(this,t,vt,_t,He,{})}}function ze(e,t,i){const a=e.slice();return a[6]=t[i],a}function Fe(e){let t,i,a,n=e[0].title+"",d,r,l,o=e[0].subject+"",s,y,h,v,D,T,me,k,P,he,ge,J,be,W,G=e[0].smallDescription+"",ie,_e,x,V,U=e[0].body1+"",ae,ve,B,q=e[0].body2+"",ne,we,R,H=e[0].body3+"",oe,ye,L,X=e[0].body4+"",re,se,N,E,z=e[0].tags,S=[];for(let u=0;u<z.length;u+=1)S[u]=Ge(ze(e,z,u));return N=new wt({}),{c(){t=g("div"),i=g("div"),a=g("h1"),d=A(n),r=C(),l=g("h2"),s=A(o),y=C(),h=g("div"),v=g("img"),me=C(),k=g("div"),P=g("span"),he=A("Tags:"),ge=C(),J=g("ul");for(let u=0;u<S.length;u+=1)S[u].c();be=C(),W=g("p"),ie=A(G),_e=C(),x=g("div"),V=g("p"),ae=A(U),ve=C(),B=g("p"),ne=A(q),we=C(),R=g("p"),oe=A(H),ye=C(),L=g("p"),re=A(X),se=C(),mt(N.$$.fragment),this.h()},l(u){t=b(u,"DIV",{class:!0});var w=_(t);i=b(w,"DIV",{class:!0});var f=_(i);a=b(f,"H1",{class:!0});var Q=_(a);d=$(Q,n),Q.forEach(p),r=M(f),l=b(f,"H2",{class:!0});var $e=_(l);s=$($e,o),$e.forEach(p),y=M(f),h=b(f,"DIV",{class:!0});var ke=_(h);v=b(ke,"IMG",{src:!0,alt:!0,class:!0}),ke.forEach(p),me=M(f),k=b(f,"DIV",{class:!0});var le=_(k);P=b(le,"SPAN",{class:!0});var je=_(P);he=$(je,"Tags:"),je.forEach(p),ge=M(le),J=b(le,"UL",{class:!0});var Ie=_(J);for(let Se=0;Se<S.length;Se+=1)S[Se].l(Ie);Ie.forEach(p),le.forEach(p),be=M(f),W=b(f,"P",{class:!0});var De=_(W);ie=$(De,G),De.forEach(p),_e=M(f),x=b(f,"DIV",{class:!0});var j=_(x);V=b(j,"P",{class:!0});var Te=_(V);ae=$(Te,U),Te.forEach(p),ve=M(j),B=b(j,"P",{class:!0});var Je=_(B);ne=$(Je,q),Je.forEach(p),we=M(j),R=b(j,"P",{class:!0});var Ne=_(R);oe=$(Ne,H),Ne.forEach(p),ye=M(j),L=b(j,"P",{class:!0});var Oe=_(L);re=$(Oe,X),Oe.forEach(p),j.forEach(p),f.forEach(p),w.forEach(p),se=M(u),ht(N.$$.fragment,u),this.h()},h(){m(a,"class","mb-4 text-3xl font-bold leading-tight text-white"),m(l,"class","mb-4 text-xl font-bold text-gray-300"),We(v.src,D=e[0].img)||m(v,"src",D),m(v,"alt",T=e[0].title),m(v,"class","w-full sm:w-1/2 rounded-lg shadow-md"),m(h,"class","blog-post-image mb-8"),m(P,"class","mr-2 font-bold text-gray-400"),m(J,"class","flex flex-wrap"),m(k,"class","blog-post-tags mb-4"),m(W,"class","blog-post-small-description mb-8 text-sm font-light text-gray-400"),m(V,"class","mb-4 text-lg leading-relaxed"),m(B,"class","mb-4 text-lg leading-relaxed"),m(R,"class","mb-4 text-lg leading-relaxed"),m(L,"class","mb-4 text-lg leading-relaxed"),m(x,"class","blog-post-body text-white"),m(i,"class","blog-post rounded-lg bg-zinc-700 p-8 shadow-lg"),m(t,"class","container mx-auto mt-4 mb-4")},m(u,w){ee(u,t,w),c(t,i),c(i,a),c(a,d),c(i,r),c(i,l),c(l,s),c(i,y),c(i,h),c(h,v),c(i,me),c(i,k),c(k,P),c(P,he),c(k,ge),c(k,J);for(let f=0;f<S.length;f+=1)S[f].m(J,null);c(i,be),c(i,W),c(W,ie),c(i,_e),c(i,x),c(x,V),c(V,ae),c(x,ve),c(x,B),c(B,ne),c(x,we),c(x,R),c(R,oe),c(x,ye),c(x,L),c(L,re),ee(u,se,w),Ye(N,u,w),E=!0},p(u,w){if((!E||w&1)&&n!==(n=u[0].title+"")&&I(d,n),(!E||w&1)&&o!==(o=u[0].subject+"")&&I(s,o),(!E||w&1&&!We(v.src,D=u[0].img))&&m(v,"src",D),(!E||w&1&&T!==(T=u[0].title))&&m(v,"alt",T),w&1){z=u[0].tags;let f;for(f=0;f<z.length;f+=1){const Q=ze(u,z,f);S[f]?S[f].p(Q,w):(S[f]=Ge(Q),S[f].c(),S[f].m(J,null))}for(;f<S.length;f+=1)S[f].d(1);S.length=z.length}(!E||w&1)&&G!==(G=u[0].smallDescription+"")&&I(ie,G),(!E||w&1)&&U!==(U=u[0].body1+"")&&I(ae,U),(!E||w&1)&&q!==(q=u[0].body2+"")&&I(ne,q),(!E||w&1)&&H!==(H=u[0].body3+"")&&I(oe,H),(!E||w&1)&&X!==(X=u[0].body4+"")&&I(re,X)},i(u){E||(Z(N.$$.fragment,u),E=!0)},o(u){Ce(N.$$.fragment,u),E=!1},d(u){u&&p(t),rt(S,u),u&&p(se),Ke(N,u)}}}function Ge(e){let t,i,a,n=e[6]+"",d,r;return{c(){t=g("a"),i=g("li"),a=C(),d=A(n),this.h()},l(l){t=b(l,"A",{class:!0,href:!0});var o=_(t);i=b(o,"LI",{}),_(i).forEach(p),a=M(o),d=$(o,n),o.forEach(p),this.h()},h(){m(t,"class","mr-2 mb-2 rounded-full bg-gray-200 px-3 py-1 font-semibold"),m(t,"href",r="/tags?tag="+e[6])},m(l,o){ee(l,t,o),c(t,i),c(t,a),c(t,d)},p(l,o){o&1&&n!==(n=l[6]+"")&&I(d,n),o&1&&r!==(r="/tags?tag="+l[6])&&m(t,"href",r)},d(l){l&&p(t)}}}function yt(e){let t,i,a=e[0]&&Fe(e);return{c(){a&&a.c(),t=Ve()},l(n){a&&a.l(n),t=Ve()},m(n,d){a&&a.m(n,d),ee(n,t,d),i=!0},p(n,[d]){n[0]?a?(a.p(n,d),d&1&&Z(a,1)):(a=Fe(n),a.c(),Z(a,1),a.m(t.parentNode,t)):a&&(ft(),Ce(a,1,1,()=>{a=null}),pt())},i(n){i||(Z(a),i=!0)},o(n){Ce(a),i=!1},d(n){a&&a.d(n),n&&p(t)}}}function St(e,t,i){const n=new URL(window.location.href).search.split("="),d=n[0].split("?")[1],r=n[1],l=bt[1].Blog;let o;return d=="id"&&r&&(o=l.find(s=>s.id==r)),[o]}class At extends et{constructor(t){super(),Ze(this,t,St,yt,He,{})}}export{At as default};