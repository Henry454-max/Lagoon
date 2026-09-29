"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[940],{117:(e,t,r)=>{r.d(t,{Y:()=>p});var n=r(88702),i=r(46488),o=r(90880),a=r(12825);async function s(e,{account:t=e.account,message:r}){if(!t)throw new o.T({docsPath:"/docs/actions/wallet/signMessage"});let n=(0,i.J)(t);if(n.signMessage)return n.signMessage({message:r});let l="string"==typeof r?(0,a.i3)(r):r.raw instanceof Uint8Array?(0,a.nj)(r.raw):r.raw;return e.request({method:"personal_sign",params:[l,n.address]},{retryCount:0})}var l=r(70843),c=r(20405);async function u(e,t){let r,{account:n,connector:i,...o}=t;return r="object"==typeof n&&"local"===n.type?e.getClient():await (0,c.r)(e,{account:n,connector:i}),(0,l.T)(r,s,"signMessage")({...o,...n?{account:n}:{}})}var d=r(40949);function p(e={}){var t;let{mutation:r}=e,i=(t=(0,d.U)(e),{mutationFn:e=>u(t,e),mutationKey:["signMessage"]}),{mutate:o,mutateAsync:a,...s}=(0,n.n)({...r,...i});return{...s,signMessage:o,signMessageAsync:a}}},155:(e,t,r)=>{r.d(t,{J:()=>o});var n=r(11437),i=r(70843);function o(e,t){let{chainId:r,...o}=t,a=e.getClient({chainId:r});return(0,i.T)(a,n.J,"readContract")(o)}},1467:(e,t,r)=>{r.d(t,{r:()=>c});var n=r(3390),i=r(23957),o=r(84256),a=r(85476),s=r(19981),l=r(14708);async function c(e,{address:t,blockHash:r,blockNumber:u,blockTag:d=e.experimental_blockTag??"latest",requireCanonical:p}){let h=(0,a.O)({blockHash:r,blockNumber:u,blockTag:d,requireCanonical:p});if(e.batch?.multicall&&e.chain?.contracts?.multicall3){let a=e.chain.contracts.multicall3.address,c=(0,o.p)({abi:n.v2,functionName:"getEthBalance",args:[t]}),{data:h}=await (0,s.T)(e,l.T,"call")({to:a,data:c,blockHash:r,blockNumber:u,blockTag:d,requireCanonical:p});return(0,i.e)({abi:n.v2,functionName:"getEthBalance",args:[t],data:h||"0x"})}return BigInt(await e.request({method:"eth_getBalance",params:[t,h]}))}},2149:(e,t,r)=>{r.d(t,{U:()=>n});function n(e){return e}},4077:(e,t,r)=>{r.d(t,{k:()=>C});var n=r(65160),i=r(26916);function o(e,t){return e.toString(2).padStart(t,"0")}function a(e,t){let r=e%t;return r>=0?r:t+r}function s(e,t){return Array(e).fill(t)}function l(...e){let t=0;for(let r of e)t=Math.max(t,r.length);let r=[];for(let n=0;n<t;n++)for(let t of e)n>=t.length||r.push(t[n]);return new Uint8Array(r)}function c(e,t,r){if(r<0||r+t.length>e.length)return!1;for(let n=0;n<t.length;n++)if(t[n]!==e[r+n])return!1;return!0}function u(e){return{has:t=>e.includes(t),decode:t=>{if(!Array.isArray(t)||t.length&&"string"!=typeof t[0])throw Error("alphabet.decode input should be array of strings");return t.map(t=>{if("string"!=typeof t)throw Error(`alphabet.decode: not string element=${t}`);let r=e.indexOf(t);if(-1===r)throw Error(`Unknown letter: "${t}". Allowed: ${e}`);return r})},encode:t=>{if(!Array.isArray(t)||t.length&&"number"!=typeof t[0])throw Error("alphabet.encode input should be an array of numbers");return t.map(t=>{if(!Number.isSafeInteger(t))throw Error(`integer expected: ${t}`);if(t<0||t>=e.length)throw Error(`Digit index outside alphabet: ${t} (alphabet: ${e.length})`);return e[t]})}}}class d{static size(e,t){if("number"==typeof e&&(e={height:e,width:e}),!Number.isSafeInteger(e.height)&&e.height!==1/0)throw Error(`Bitmap: invalid height=${e.height} (${typeof e.height})`);if(!Number.isSafeInteger(e.width)&&e.width!==1/0)throw Error(`Bitmap: invalid width=${e.width} (${typeof e.width})`);return void 0!==t&&(e={width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}),e}static fromString(e){let t,r=(e=e.replace(/^\n+/g,"").replace(/\n+$/g,"")).split("\n"),n=r.length,i=Array(n);for(let e of r){let r=e.split("").map(e=>{if("X"===e)return!0;if(" "===e)return!1;if("?"!==e)throw Error(`Bitmap.fromString: unknown symbol=${e}`)});if(t&&r.length!==t)throw Error(`Bitmap.fromString different row sizes: width=${t} cur=${r.length}`);t=r.length,i.push(r)}return t||(t=0),new d({height:n,width:t},i)}data;height;width;constructor(e,t){const{height:r,width:n}=d.size(e);this.data=t||Array.from({length:r},()=>s(n,void 0)),this.height=r,this.width=n}point(e){return this.data[e.y][e.x]}isInside(e){return 0<=e.x&&e.x<this.width&&0<=e.y&&e.y<this.height}size(e){if(!e)return{height:this.height,width:this.width};let{x:t,y:r}=this.xy(e);return{height:this.height-r,width:this.width-t}}xy(e){if("number"==typeof e&&(e={x:e,y:e}),!Number.isSafeInteger(e.x))throw Error(`Bitmap: invalid x=${e.x}`);if(!Number.isSafeInteger(e.y))throw Error(`Bitmap: invalid y=${e.y}`);return e.x=a(e.x,this.width),e.y=a(e.y,this.height),e}rect(e,t,r){let{x:n,y:i}=this.xy(e),{height:o,width:a}=d.size(t,this.size({x:n,y:i}));for(let e=0;e<o;e++)for(let t=0;t<a;t++)this.data[i+e][n+t]="function"==typeof r?r({x:t,y:e},this.data[i+e][n+t]):r;return this}rectRead(e,t,r){return this.rect(e,t,(e,t)=>(r(e,t),t))}hLine(e,t,r){return this.rect(e,{width:t,height:1},r)}vLine(e,t,r){return this.rect(e,{width:1,height:t},r)}border(e=2,t){let r=this.height+2*e,n=this.width+2*e,i=s(e,t),o=Array.from({length:e},()=>s(n,t));return new d({height:r,width:n},[...o,...this.data.map(e=>[...i,...e,...i]),...o])}embed(e,t){return this.rect(e,t.size(),({x:e,y:r})=>t.data[r][e])}rectSlice(e,t=this.size()){let r=new d(d.size(t,this.size(this.xy(e))));return this.rect(e,t,({x:e,y:t},n)=>r.data[t][e]=n),r}inverse(){let{height:e,width:t}=this;return new d({height:t,width:e}).rect({x:0,y:0},1/0,({x:e,y:t})=>this.data[e][t])}scale(e){if(!Number.isSafeInteger(e)||e>1024)throw Error(`invalid scale factor: ${e}`);let{height:t,width:r}=this;return new d({height:e*t,width:e*r}).rect({x:0,y:0},1/0,({x:t,y:r})=>this.data[Math.floor(r/e)][Math.floor(t/e)])}clone(){return new d(this.size()).rect({x:0,y:0},this.size(),({x:e,y:t})=>this.data[t][e])}assertDrawn(){this.rectRead(0,1/0,(e,t)=>{if("boolean"!=typeof t)throw Error(`Invalid color type=${typeof t}`)})}toString(){return this.data.map(e=>e.map(e=>void 0===e?"?":e?"X":" ").join("")).join("\n")}toASCII(){let{height:e,width:t,data:r}=this,n="";for(let i=0;i<e;i+=2){for(let o=0;o<t;o++){let t=r[i][o],a=i+1>=e||r[i+1][o];t||a?!t&&a?n+="▀":t&&!a?n+="▄":t&&a&&(n+=" "):n+="█"}n+="\n"}return n}toTerm(){let e="\x1b[0m",t="\x1b[1;47m  "+e,r="\x1b[40m  "+e;return this.data.map(e=>e.map(e=>e?r:t).join("")).join("\n")}toSVG(e=!0){let t,r=`<svg viewBox="0 0 ${this.width} ${this.height}" xmlns="http://www.w3.org/2000/svg">`,n="";return this.rectRead(0,1/0,(i,o)=>{if(!o)return;let{x:a,y:s}=i;if(!e){r+=`<rect x="${a}" y="${s}" width="1" height="1" />`;return}let l=`M${a} ${s}`;if(t){let e=`m${a-t.x} ${s-t.y}`;e.length<=l.length&&(l=e)}let c=a<10?`H${a}`:"h-1";n+=`${l}h1v1${c}Z`,t=i}),e&&(r+=`<path d="${n}"/>`),r+="</svg>"}toGIF(){let e=e=>[255&e,e>>>8&255],t=[...e(this.width),...e(this.height)],r=[];this.rectRead(0,1/0,(e,t)=>r.push(+(!0===t)));let n=[71,73,70,56,55,97,...t,246,0,0,255,255,255,...s(381,0),44,0,0,0,0,...t,0,7],i=Math.floor(r.length/126);for(let e=0;e<i;e++)n.push(127,128,...r.slice(126*e,126*(e+1)).map(e=>+e));return n.push(r.length%126+1,128,...r.slice(126*i).map(e=>+e)),n.push(1,129,0,59),new Uint8Array(n)}toImage(e=!1){let{height:t,width:r}=this.size(),n=new Uint8Array(t*r*(e?3:4)),i=0;for(let o=0;o<t;o++)for(let t=0;t<r;t++){let r=255*!this.data[o][t];n[i++]=r,n[i++]=r,n[i++]=r,e||(n[i++]=255)}return{height:t,width:r,data:n}}}let p=["low","medium","quartile","high"],h=["numeric","alphanumeric","byte","kanji","eci"],f=[26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706],w={low:[7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],medium:[10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],quartile:[13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],high:[17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]},m={low:[1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],medium:[1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],quartile:[1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],high:[1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]},g={size:{encode:e=>21+4*(e-1),decode:e=>(e-17)/4},sizeType:e=>Math.floor((e+7)/17),alignmentPatterns(e){if(1===e)return[];let t=g.size.encode(e)-6-1,r=t-6,n=Math.ceil(r/28),i=Math.floor(r/n);i%2?i+=1:r%n*2>=n&&(i+=2);let o=[6];for(let e=1;e<n;e++)o.push(t-(n-e)*i);return o.push(t),o},ECCode:{low:1,medium:0,quartile:3,high:2},formatMask:21522,formatBits(e,t){let r=g.ECCode[e]<<3|t,n=r;for(let e=0;e<10;e++)n=n<<1^(n>>9)*1335;return(r<<10|n)^g.formatMask},versionBits(e){let t=e;for(let e=0;e<12;e++)t=t<<1^(t>>11)*7973;return e<<12|t},alphabet:{numeric:u("0123456789"),alphanumerc:u("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:")},lengthBits:(e,t)=>({numeric:[10,12,14],alphanumeric:[9,11,13],byte:[8,16,16],kanji:[8,10,12],eci:[0,0,0]})[t][g.sizeType(e)],modeBits:{numeric:"0001",alphanumeric:"0010",byte:"0100",kanji:"1000",eci:"0111"},capacity(e,t){let r=f[e-1],n=w[t][e-1],i=m[t][e-1],o=Math.floor(r/i)-n,a=i-r%i;return{words:n,numBlocks:i,shortBlocks:a,blockLen:o,capacity:(r-n*i)*8,total:(n+o)*i+i-a}}},b=[(e,t)=>(e+t)%2==0,(e,t)=>t%2==0,(e,t)=>e%3==0,(e,t)=>(e+t)%3==0,(e,t)=>(Math.floor(t/2)+Math.floor(e/3))%2==0,(e,t)=>e*t%2+e*t%3==0,(e,t)=>(e*t%2+e*t%3)%2==0,(e,t)=>((e+t)%2+e*t%3)%2==0],y={tables:(()=>{let e=s(256,0),t=s(256,0);for(let r=0,n=1;r<256;r++)e[r]=n,t[n]=r,256&(n<<=1)&&(n^=285);return{exp:e,log:t}})(),exp:e=>y.tables.exp[e],log(e){if(0===e)throw Error(`GF.log: invalid arg=${e}`);return y.tables.log[e]%255},mul:(e,t)=>0===e||0===t?0:y.tables.exp[(y.tables.log[e]+y.tables.log[t])%255],add:(e,t)=>e^t,pow:(e,t)=>y.tables.exp[y.tables.log[e]*t%255],inv(e){if(0===e)throw Error(`GF.inverse: invalid arg=${e}`);return y.tables.exp[255-y.tables.log[e]]},polynomial(e){if(0==e.length)throw Error("GF.polymomial: invalid length");if(0!==e[0])return e;let t=0;for(;t<e.length-1&&0==e[t];t++);return e.slice(t)},monomial(e,t){if(e<0)throw Error(`GF.monomial: invalid degree=${e}`);if(0==t)return[0];let r=s(e+1,0);return r[0]=t,y.polynomial(r)},degree:e=>e.length-1,coefficient:(e,t)=>e[y.degree(e)-t],mulPoly(e,t){if(0===e[0]||0===t[0])return[0];let r=s(e.length+t.length-1,0);for(let n=0;n<e.length;n++)for(let i=0;i<t.length;i++)r[n+i]=y.add(r[n+i],y.mul(e[n],t[i]));return y.polynomial(r)},mulPolyScalar(e,t){if(0==t)return[0];if(1==t)return e;let r=s(e.length,0);for(let n=0;n<e.length;n++)r[n]=y.mul(e[n],t);return y.polynomial(r)},mulPolyMonomial(e,t,r){if(t<0)throw Error("GF.mulPolyMonomial: invalid degree");if(0==r)return[0];let n=s(e.length+t,0);for(let t=0;t<e.length;t++)n[t]=y.mul(e[t],r);return y.polynomial(n)},addPoly(e,t){if(0===e[0])return t;if(0===t[0])return e;let r=e,n=t;r.length>n.length&&([r,n]=[n,r]);let i=s(n.length,0),o=n.length-r.length,a=n.slice(0,o);for(let e=0;e<a.length;e++)i[e]=a[e];for(let e=o;e<n.length;e++)i[e]=y.add(r[e-o],n[e]);return y.polynomial(i)},remainderPoly(e,t){let r=Array.from(e);for(let n=0;n<e.length-t.length+1;n++){let e=r[n];if(0!==e)for(let i=1;i<t.length;i++)0!==t[i]&&(r[n+i]=y.add(r[n+i],y.mul(t[i],e)))}return r.slice(e.length-t.length+1,r.length)},divisorPoly(e){let t=[1];for(let r=0;r<e;r++)t=y.mulPoly(t,[1,y.pow(2,r)]);return t},evalPoly(e,t){if(0==t)return y.coefficient(e,0);let r=e[0];for(let n=1;n<e.length;n++)r=y.add(y.mul(t,r),e[n]);return r},euclidian(e,t,r){y.degree(e)<y.degree(t)&&([e,t]=[t,e]);let n=e,i=t,o=[0],a=[1];for(;2*y.degree(i)>=r;){let e=n,t=o;if(n=i,o=a,0===n[0])throw Error("rLast[0] === 0");i=e;let r=[0],s=y.inv(n[0]);for(;y.degree(i)>=y.degree(n)&&0!==i[0];){let e=y.degree(i)-y.degree(n),t=y.mul(i[0],s);r=y.addPoly(r,y.monomial(e,t)),i=y.addPoly(i,y.mulPolyMonomial(n,e,t))}if(r=y.mulPoly(r,o),a=y.addPoly(r,t),y.degree(i)>=y.degree(n))throw Error(`Division failed r: ${i}, rLast: ${n}`)}let s=y.coefficient(a,0);if(0==s)throw Error("sigmaTilde(0) was zero");let l=y.inv(s);return[y.mulPolyScalar(a,l),y.mulPolyScalar(i,l)]}};function A(e,t,r,n){let i="",a=r.length;if("numeric"===n){let e=g.alphabet.numeric.decode(r.split("")),t=e.length;for(let r=0;r<t-2;r+=3)i+=o(100*e[r]+10*e[r+1]+e[r+2],10);t%3==1?i+=o(e[t-1],4):t%3==2&&(i+=o(10*e[t-2]+e[t-1],7))}else if("alphanumeric"===n){let e=g.alphabet.alphanumerc.decode(r.split("")),t=e.length;for(let r=0;r<t-1;r+=2)i+=o(45*e[r]+e[r+1],11);t%2==1&&(i+=o(e[t-1],6))}else if("byte"===n){let e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(r);a=e.length,i=Array.from(e).map(e=>o(e,8)).join("")}else throw Error("encode: unsupported type");let{capacity:c}=g.capacity(e,t),u=o(a,g.lengthBits(e,n)),d=g.modeBits[n]+u+i;if(d.length>c)throw Error("Capacity overflow");(d+="0".repeat(Math.min(4,Math.max(0,c-d.length)))).length%8&&(d+="0".repeat(8-d.length%8));let p="1110110000010001";for(let e=0;d.length!==c;e++)d+=p[e%p.length];let h=Uint8Array.from(d.match(/(.{8})/g).map(e=>Number(`0b${e}`)));return(function(e,t){let{words:r,shortBlocks:n,numBlocks:i,blockLen:o,total:a}=g.capacity(e,t),c={encode(e){let t=y.divisorPoly(r),n=Array.from(e);return n.push(...t.slice(0,-1).fill(0)),Uint8Array.from(y.remainderPoly(n,t))},decode(e){let t=e.slice(),n=y.polynomial(Array.from(e)),i=s(r,0),o=!1;for(let e=0;e<r;e++){let t=y.evalPoly(n,y.exp(e));i[i.length-1-e]=t,0!==t&&(o=!0)}if(!o)return t;i=y.polynomial(i);let a=y.monomial(r,1),[l,c]=y.euclidian(a,i,r),u=s(y.degree(l),0),d=0;for(let e=1;e<256&&d<u.length;e++)0===y.evalPoly(l,e)&&(u[d++]=y.inv(e));if(d!==u.length)throw Error("RS.decode: invalid errors number");for(let e=0;e<u.length;e++){let r=t.length-1-y.log(u[e]);if(r<0)throw Error("RS.decode: invalid error location");let n=y.inv(u[e]),i=1;for(let t=0;t<u.length;t++)e!==t&&(i=y.mul(i,y.add(1,y.mul(u[t],n))));t[r]=y.add(t[r],y.mul(y.evalPoly(c,n),y.inv(i)))}return t}};return{encode(e){let t=[],r=[];for(let a=0;a<i;a++){let i=o+ +!(a<n);t.push(e.subarray(0,i)),r.push(c.encode(e.subarray(0,i))),e=e.subarray(i)}let a=l(...t),s=l(...r),u=new Uint8Array(a.length+s.length);return u.set(a),u.set(s,a.length),u},decode(e){if(e.length!==a)throw Error(`interleave.decode: len(data)=${e.length}, total=${a}`);let t=[];for(let e=0;e<i;e++){let i=e<n;t.push(new Uint8Array(r+o+ +!i))}let s=0;for(let r=0;r<o;r++)for(let n=0;n<i;n++)t[n][r]=e[s++];for(let r=n;r<i;r++)t[r][o]=e[s++];for(let a=o;a<o+r;a++)for(let r=0;r<i;r++){let i=r<n;t[r][a+ +!i]=e[s++]}let l=[];for(let e of t)l.push(...Array.from(c.decode(e)).slice(0,-r));return Uint8Array.from(l)}}})(e,t).encode(h)}function v(e,t,r,n,i=!1){let o=function(e,t,r,n=!1){let i=g.size.encode(e),o=new d(i+2),a=new d(3).rect(0,3,!0).border(1,!1).border(1,!0).border(1,!1);o=(o=o.embed(0,a).embed({x:-a.width,y:0},a).embed({x:0,y:-a.height},a)).rectSlice(1,i);let s=new d(1).rect(0,1,!0).border(1,!1).border(1,!0),l=g.alignmentPatterns(e);for(let e of l)for(let t of l)void 0===o.data[e][t]&&o.embed({x:t-2,y:e-2},s);o=o.hLine({x:0,y:6},1/0,({x:e},t)=>void 0===t?e%2==0:t).vLine({x:6,y:0},1/0,({y:e},t)=>void 0===t?e%2==0:t);{let e=g.formatBits(t,r),a=t=>!n&&(e>>t&1)==1;for(let e=0;e<6;e++)o.data[e][8]=a(e);for(let e=6;e<8;e++)o.data[e+1][8]=a(e);for(let e=8;e<15;e++)o.data[i-15+e][8]=a(e);for(let e=0;e<8;e++)o.data[8][i-e-1]=a(e);for(let e=8;e<9;e++)o.data[8][15-e-1+1]=a(e);for(let e=9;e<15;e++)o.data[8][15-e-1]=a(e);o.data[i-8][8]=!n}if(e>=7){let t=g.versionBits(e);for(let e=0;e<18;e+=1){let r=!n&&(t>>e&1)==1,a=Math.floor(e/3),s=e%3+i-8-3;o.data[a][s]=r,o.data[s][a]=r}}return o}(e,t,n,i),a=0,s=8*r.length;if(!function(e,t,r){let n=e.height,i=b[t],o=-1,a=n-1;for(let t=n-1;t>0;t-=2){for(6==t&&(t=5);;a+=o){for(let n=0;n<2;n+=1){let o=t-n;void 0===e.data[a][o]&&r(o,a,i(o,a))}if(a+o<0||a+o>=n)break}o=-o}}(o,n,(e,t,n)=>{let i=!1;a<s&&(i=(r[a>>>3]>>(7-a&7)&1)!=0,a++),o.data[t][e]=i!==n}),a!==s)throw Error("QR: bytes left after draw");return o}function C(e){let{arena:t,...r}=e;return(0,n.jsxs)(C.Root,{...r,children:[(0,n.jsx)(C.Finder,{}),(0,n.jsx)(C.Cells,{}),t&&(0,n.jsx)(C.Arena,{children:"string"==typeof t?(0,n.jsx)("img",{alt:"Arena",src:t,style:{borderRadius:1,height:"100%",objectFit:"cover",width:"100%"}}):t})]})}!function(e){function t(t){let{children:r,size:o="100%",value:a,version:s,errorCorrection:l,...u}=t,d=i.useMemo(()=>(i.Children.map(r,e=>i.isValidElement(e)&&"string"!=typeof e.type&&"displayName"in e.type&&"Arena"===e.type.displayName||null)??[]).some(Boolean),[r]),f=i.useMemo(()=>{let e=l;return d&&"low"===l&&(e="medium"),function(e,t={}){let{errorCorrection:r,version:n}=t,i=function(e,t="raw",r={}){let n=void 0!==r.ecc?r.ecc:"medium";if(!p.includes(n))throw Error(`Invalid error correction mode=${n}. Expected: ${p}`);let i=void 0!==r.encoding?r.encoding:function(e){let t="numeric";for(let r of e)if(!g.alphabet.numeric.has(r)&&(t="alphanumeric",!g.alphabet.alphanumerc.has(r)))return"byte";return t}(e);if(!h.includes(i))throw Error(`Encoding: invalid mode=${i}. Expected: ${h}`);if("kanji"===i||"eci"===i)throw Error(`Encoding: ${i} is not supported (yet?).`);void 0!==r.mask&&function(e){if(![0,1,2,3,4,5,6,7].includes(e)||!b[e])throw Error(`Invalid mask=${e}. Expected number [0..7]`)}(r.mask);let o=r.version,a,s=Error("Unknown error");if(void 0!==o){var l=o;if(!Number.isSafeInteger(l)||l<1||l>40)throw Error(`Invalid version=${l}. Expected number [1..40]`);a=A(o,n,e,i)}else for(let t=1;t<=40;t++)try{a=A(t,n,e,i),o=t;break}catch(e){s=e}if(!o||!a)throw s;let u=function(e,t,r,n){if(void 0===n){let i,o,a=(o=1/0,{add(e,t){e>=o||(i=t,o=e)},get:()=>i,score:()=>o});for(let n=0;n<b.length;n++)a.add(function(e){let t=e.inverse(),r=e=>{let t=0;for(let r=0,n=1,i;r<e.length;r++)(i!==e[r]||(n++,r===e.length-1))&&(n>=5&&(t+=3+(n-5)),i=e[r],n=1);return t},n=0;e.data.forEach(e=>n+=r(e)),t.data.forEach(e=>n+=r(e));let i=0,o=e.data,a=e.width-1,s=e.height-1;for(let e=0;e<a;e++)for(let t=0;t<s;t++){let r=e+1,n=t+1;o[e][t]===o[r][t]&&o[r][t]===o[e][n]&&o[r][t]===o[r][n]&&(i+=3)}let l=e=>{let t=[!0,!1,!0,!0,!0,!1,!0],r=[!1,!1,!1,!1],n=[...t,...r],i=[...r,...t],o=0;for(let t=0;t<e.length;t++)c(e,n,t)&&(o+=40),c(e,i,t)&&(o+=40);return o},u=0;for(let t of e.data)u+=l(t);for(let e of t.data)u+=l(e);let d=0;e.rectRead(0,1/0,(e,t)=>d+=+!!t);let p=10*Math.floor(Math.abs(d/(e.height*e.width)*100-50)/5);return n+i+u+p}(v(e,t,r,n,!0)),n);n=a.get()}if(void 0===n)throw Error("Cannot find mask");return v(e,t,r,n)}(o,n,a,r.mask);u.assertDrawn();let d=void 0===r.border?2:r.border;if(!Number.isSafeInteger(d))throw Error(`invalid border type=${typeof d}`);if(u=u.border(d,!1),void 0!==r.scale&&(u=u.scale(r.scale)),"raw"===t)return u.data;if("ascii"===t)return u.toASCII();if("svg"===t)return u.toSVG(r.optimize);if("gif"===t)return u.toGIF();if("term"===t)return u.toTerm();else throw Error(`Unknown output: ${t}`)}(e,"raw",{border:0,ecc:r,scale:1,version:n});return{edgeLength:i.length,finderLength:7,grid:i,value:e}}(a,{errorCorrection:e,version:s})},[a,d,l,s]),w=+f.edgeLength,m=f.finderLength/2,y=d?Math.floor(w/4):0,C=i.useMemo(()=>({arenaSize:y,cellSize:1,edgeSize:w,qrcode:f,finderSize:m}),[y,w,f,m]);return(0,n.jsx)(e.Context.Provider,{value:C,children:(0,n.jsxs)("svg",{...u,width:o,height:o,viewBox:`0 0 ${w} ${w}`,xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("title",{children:"QR Code"}),r]})})}function r(t){let{className:r,fill:o,innerClassName:a,radius:s=.25}=t,{cellSize:l,edgeSize:c,finderSize:u}=i.useContext(e.Context);function d({position:e}){let t=u-(u-l)-l/2;"top-right"===e&&(t=c-u-(u-l)-l/2);let i=u-(u-l)-l/2;"bottom-left"===e&&(i=c-u-(u-l)-l/2);let p=u-1.5*l;"top-right"===e&&(p=c-u-1.5*l);let h=u-1.5*l;return"bottom-left"===e&&(h=c-u-1.5*l),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("rect",{className:r,stroke:o??"currentColor",fill:"transparent",x:t,y:i,width:l+(u-l)*2,height:l+(u-l)*2,rx:2*s*(u-l),ry:2*s*(u-l),strokeWidth:l}),(0,n.jsx)("rect",{className:a,fill:o??"currentColor",x:p,y:h,width:3*l,height:3*l,rx:2*s*l,ry:2*s*l})]})}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d,{position:"top-left"}),(0,n.jsx)(d,{position:"top-right"}),(0,n.jsx)(d,{position:"bottom-left"})]})}function o(t){let{className:r,fill:o="currentColor",inset:a=!0,radius:s=1}=t,{arenaSize:l,cellSize:c,qrcode:u}=i.useContext(e.Context),{edgeLength:d,finderLength:p}=u,h=i.useMemo(()=>{let e="";for(let t=0;t<u.grid.length;t++){let r=u.grid[t];if(r)for(let n=0;n<r.length;n++){if(!r[n])continue;let i=d/2-l/2,o=i+l;if(t>=i&&t<=o&&n>=i&&n<=o)continue;let u=t<p&&n<p,h=t<p&&n>=d-p,f=t>=d-p&&n<p;if(u||h||f)continue;let w=a?.1*c:0,m=(c-2*w)/2,g=n*c+c/2,b=t*c+c/2,y=g-m,A=g+m,v=b-m,C=b+m,x=s*m;e+=`M ${y+x},${v} L ${A-x},${v} A ${x},${x} 0 0,1 ${A},${v+x} L ${A},${C-x} A ${x},${x} 0 0,1 ${A-x},${C} L ${y+x},${C} A ${x},${x} 0 0,1 ${y},${C-x} L ${y},${v+x} A ${x},${x} 0 0,1 ${y+x},${v} z`}}return e},[l,c,d,p,u.grid,a,s]);return(0,n.jsx)("path",{className:r,d:h,fill:o})}function a(t){let{children:r}=t,{arenaSize:o,cellSize:a,edgeSize:s}=i.useContext(e.Context),l=Math.ceil(s/2-o/2),c=o+o%2;return(0,n.jsx)("foreignObject",{x:l,y:l,width:c,height:c,children:(0,n.jsx)("div",{style:{alignItems:"center",display:"flex",fontSize:1,justifyContent:"center",height:"100%",overflow:"hidden",width:"100%",padding:a/2,boxSizing:"border-box"},children:r})})}e.Context=i.createContext(null),e.Root=t,(t=e.Root||(e.Root={})).displayName="Root",e.Finder=r,(r=e.Finder||(e.Finder={})).displayName="Finder",e.Cells=o,(o=e.Cells||(e.Cells={})).displayName="Cells",e.Arena=a,(a=e.Arena||(e.Arena={})).displayName="Arena"}(C||(C={}))},4975:(e,t,r)=>{r.d(t,{o:()=>l,q:()=>s});var n=r(2149),i=r(75150);function o(e){let t="u">typeof window?window:void 0;if(void 0===t||void 0===t.ethereum)return;let r=t.ethereum.providers;return r?r.find(t=>t[e]):t.ethereum[e]?t.ethereum:void 0}function a(e){let t=(e,r)=>{let[n,...i]=r.split("."),o=e[n];if(o)return 0===i.length?o:t(o,i.join("."))};if("u">typeof window)return t(window,e)}function s({flag:e,namespace:t}){return!!t&&void 0!==a(t)||!!e&&void 0!==o(e)}function l({flag:e,namespace:t,target:r}){var s;return s=r||function({flag:e,namespace:t}){let r="u">typeof window?window:void 0;if(void 0===r)return;if(t){let e=a(t);if(e)return e}let n=r.ethereum?.providers;if(e){let t=o(e);if(t)return t}if(!t&&!e)return void 0!==n&&n.length>0?n[0]:r.ethereum}({flag:e,namespace:t}),e=>{let t=s?{target:()=>({id:e.rkDetails.id,name:e.rkDetails.name,provider:s})}:{};return(0,n.U)(r=>({...(0,i.b)(t)(r),...e}))}}},6171:(e,t,r)=>{r.d(t,{k:()=>l});var n=r(42906),i=r(18003),o=r(12825),a=r(43313),s=r(12145);function l(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,o.My)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let o=(0,s.q)(r[e]),l=o?(0,i.ZJ)(o):(0,a.S)((0,i.Af)(r[e]),"bytes");t=(0,a.S)((0,n.xW)([t,l]),"bytes")}return(0,o.My)(t)}},7420:(e,t,r)=>{r.d(t,{I:()=>l});var n=r(25800),i=r(62684),o=r(70843);async function a(e,t){let{allowFailure:r=!0,chainId:n,contracts:a,...s}=t,l=e.getClient({chainId:n});return(0,o.T)(l,i.C,"multicall")({allowFailure:r,contracts:a,...s})}var s=r(155);async function l(e,t){let{allowFailure:r=!0,blockNumber:i,blockTag:o,...l}=t,c=t.contracts;try{let t={};for(let[r,n]of c.entries()){let i=n.chainId??e.state.chainId;t[i]||(t[i]=[]),t[i]?.push({contract:n,index:r})}let n=(await Promise.all(Object.entries(t).map(([t,n])=>a(e,{...l,allowFailure:r,blockNumber:i,blockTag:o,chainId:Number.parseInt(t,10),contracts:n.map(({contract:e})=>e)})))).flat(),s=Object.values(t).flatMap(e=>e.map(({index:e})=>e));return n.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(a){if(a instanceof n.bG)throw a;let t=()=>c.map(t=>(0,s.J)(e,{...t,blockNumber:i,blockTag:o}));if(r)return(await Promise.allSettled(t())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(t())}}},7769:(e,t,r)=>{function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){!function(e,t,r){var n;(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:String(n))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{U:()=>a});var o=e=>e,a=function(){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=Object.assign({},...t.map(e=>e.styles)),a=Object.keys(n),s=a.filter(e=>"mappings"in n[e]);return Object.assign(e=>{var t=[],r={},a=i({},e),l=!1;for(var c of s){var u=e[c];if(null!=u)for(var d of(l=!0,n[c].mappings))r[d]=u,null==a[d]&&delete a[d]}var p=l?i(i({},r),a):e;for(var h in p)if(function(){var e=p[h],r=n[h];try{if(r.mappings)return 1;if("string"==typeof e||"number"==typeof e)t.push(r.values[e].defaultClass);else if(Array.isArray(e))for(var i=0;i<e.length;i++){var o=e[i];if(null!=o){var a=r.responsiveArray[i];t.push(r.values[o].conditions[a])}}else for(var s in e){var l=e[s];null!=l&&t.push(r.values[l].conditions[s])}}catch(e){throw e}}())continue;return o(t.join(" "))},{properties:new Set(a)})}(...arguments)}},11437:(e,t,r)=>{r.d(t,{J:()=>l});var n=r(23957),i=r(84256),o=r(19695),a=r(19981),s=r(14708);async function l(e,t){let{abi:r,address:l,args:c,functionName:u,...d}=t,p=(0,i.p)({abi:r,args:c,functionName:u});try{let{data:t}=await (0,a.T)(e,s.T,"call")({...d,data:p,to:l});return(0,n.e)({abi:r,args:c,functionName:u,data:t||"0x"})}catch(e){throw(0,o.j)(e,{abi:r,address:l,args:c,docsPath:"/docs/contract/readContract",functionName:u})}}},12145:(e,t,r)=>{r.d(t,{q:()=>i});var n=r(69251);function i(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,n.q)(t)?t:null}},14917:(e,t,r)=>{r.d(t,{x:()=>n});function n(e){let t={formatters:void 0,fees:void 0,serializers:void 0,...e};return Object.assign(t,{extend:function e(t){return r=>{let n="function"==typeof r?r(t):r,i={...t,...n};return Object.assign(i,{extend:e(i)})}}(t)})}},21966:(e,t,r)=>{r.d(t,{u:()=>u});var n=r(88702);async function i(e,t={}){let r;if(t.connector)r=t.connector;else{let{connections:t,current:n}=e.state,i=t.get(n);r=i?.connector}let n=e.state.connections;r&&(await r.disconnect(),r.emitter.off("change",e._internal.events.change),r.emitter.off("disconnect",e._internal.events.disconnect),r.emitter.on("connect",e._internal.events.connect),n.delete(r.uid)),e.setState(e=>{if(0===n.size)return{...e,connections:new Map,current:null,status:"disconnected"};let t=n.values().next().value;return{...e,connections:new Map(n),current:t.connector.uid}});{let t=e.state.current;if(!t)return;let r=e.state.connections.get(t)?.connector;if(!r)return;await e.storage?.setItem("recentConnectorId",r.id)}}var o=r(40949),a=r(80307);let s=[];function l(e){let t=[...e.state.connections.values()];return"reconnecting"===e.state.status||(0,a.b)(s,t)?s:(s=t,t)}var c=r(26916);function u(e={}){let{mutation:t}=e,r=(0,o.U)(e),s={mutationFn:e=>i(r,e),mutationKey:["disconnect"]},{mutate:d,mutateAsync:p,...h}=(0,n.n)({...t,...s});return{...h,connectors:(function(e={}){let t=(0,o.U)(e);return(0,c.useSyncExternalStore)(e=>(function(e,t){let{onChange:r}=t;return e.subscribe(()=>l(e),r,{equalityFn:a.b})})(t,{onChange:e}),()=>l(t),()=>l(t))})({config:r}).map(e=>e.connector),disconnect:d,disconnectAsync:p}}},22083:(e,t,r)=>{r.d(t,{p:()=>n});let n=(0,r(14917).x)({id:9745,name:"Plasma",blockTime:1e3,nativeCurrency:{name:"Plasma",symbol:"XPL",decimals:18},rpcUrls:{default:{http:["https://rpc.plasma.to"]}},blockExplorers:{default:{name:"PlasmaScan",url:"https://plasmascan.to"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:0}}})},27880:(e,t,r)=>{r.d(t,{J:()=>l});var n=r(52909),i=r(22952),o=r(89142),a=r(59683),s=r(52782);function l(e){let{abi:t,data:r}=e,l=(0,i.di)(r,0,4),c=t.find(e=>"function"===e.type&&l===(0,o.V)((0,s.B)(e)));if(!c)throw new n.EB(l,{docsPath:"/docs/contract/decodeFunctionData"});return{functionName:c.name,args:"inputs"in c&&c.inputs&&c.inputs.length>0?(0,a.n)(c.inputs,(0,i.di)(r,4)):void 0}}},28305:(e,t,r)=>{r.d(t,{_:()=>p});var n=r(46488),i=r(90880),o=r(12825),a=r(71373),s=r(87332),l=r(29334),c=r(81175);async function u(e,t){let{account:r=e.account}=t;if(!r)throw new i.T;let u=(0,n.J)(r);try{let{accessList:r,blockNumber:n,blockTag:i,data:a,gas:d,gasPrice:p,maxFeePerGas:h,maxPriorityFeePerGas:f,nonce:w,to:m,value:g,...b}=t,y=("bigint"==typeof n?(0,o.cK)(n):void 0)||i;(0,c.c)(t);let A=e.chain?.formatters?.transactionRequest?.format,v=(A||l.Bv)({...(0,s.o)(b,{format:A}),account:u,accessList:r,data:a,gas:d,gasPrice:p,maxFeePerGas:h,maxPriorityFeePerGas:f,nonce:w,to:m,value:g},"estimateGas"),{baseFeePerGas:C,gasLimit:x,priorityFeePerGas:k}=await e.request({method:"linea_estimateGas",params:y?[v,y]:[v]});return{baseFeePerGas:BigInt(C),gasLimit:BigInt(x),priorityFeePerGas:BigInt(k)}}catch(r){throw(0,a.d)(r,{...t,account:u,chain:e.chain})}}async function d({client:e,multiply:t,request:r,type:n}){try{let i=await u(e,{...r,account:r?.account}),{priorityFeePerGas:o}=i,a=t(BigInt(i.baseFeePerGas))+o;if("legacy"===n)return{gasPrice:a};return{maxFeePerGas:a,maxPriorityFeePerGas:o}}catch{return null}}let p=(0,r(14917).x)({fees:{estimateFeesPerGas:d,async maxPriorityFeePerGas({block:e,client:t,request:r}){let n=await d({block:e,client:t,multiply:e=>e,request:r,type:"eip1559"});return n?.maxPriorityFeePerGas?n.maxPriorityFeePerGas:null}},id:59144,name:"Linea Mainnet",blockTime:2e3,nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://lineascan.build",apiUrl:"https://api.lineascan.build/api"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:42},ensRegistry:{address:"0x50130b669B28C339991d8676FA73CF122a121267",blockCreated:6682888},ensUniversalResolver:{address:"0x4D41762915F83c76EcaF6776d9b08076aA32b492",blockCreated:0x1531547}},ensTlds:[".linea.eth"],testnet:!1})},28755:(e,t,r)=>{r.d(t,{F:()=>s});var n=r(18003),i=r(12825),o=r(43313),a=r(12145);function s(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,n.Af)(t).byteLength+2),s=0,l=t.split(".");for(let e=0;e<l.length;e++){var c;let t=(0,n.Af)(l[e]);t.byteLength>255&&(t=(0,n.Af)((c=function(e){let t=new Uint8Array(32).fill(0);return e?(0,a.q)(e)||(0,o.S)((0,n.Af)(e)):(0,i.My)(t)}(l[e]),`[${c.slice(2)}]`))),r[s]=t.length,r.set(t,s+1),s+=t.length+1}return r.byteLength!==s+1?r.slice(0,s+1):r}},29653:(e,t,r)=>{r.d(t,{A:()=>g});var n=r(56466),i=r(27294),o=r(12110),a=r(1467),s=r(70843);let l={ether:-18,gwei:-9};function c(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(l[e])}var u=r(7420);async function d(e,t){let{address:r,blockNumber:l,blockTag:u,chainId:d,token:h,unit:f="ether"}=t;if(h)try{return await p(e,{balanceAddress:r,chainId:d,symbolType:"string",tokenAddress:h})}catch(t){if("ContractFunctionExecutionError"===t.name){let t=await p(e,{balanceAddress:r,chainId:d,symbolType:"bytes32",tokenAddress:h}),o=(0,n.IQ)((0,i.B)(t.symbol,{dir:"right"}));return{...t,symbol:o}}throw t}let w=e.getClient({chainId:d}),m=(0,s.T)(w,a.r,"getBalance"),g=await m(l?{address:r,blockNumber:l}:{address:r,blockTag:u}),b=e.chains.find(e=>e.id===d)??w.chain;return{decimals:b.nativeCurrency.decimals,formatted:(0,o.J)(g,c(f)),symbol:b.nativeCurrency.symbol,value:g}}async function p(e,t){let{balanceAddress:r,chainId:n,symbolType:i,tokenAddress:a,unit:s}=t,l={abi:[{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:i}]}],address:a},[d,p,h]=await (0,u.I)(e,{allowFailure:!1,contracts:[{...l,functionName:"balanceOf",args:[r],chainId:n},{...l,functionName:"decimals",chainId:n},{...l,functionName:"symbol",chainId:n}]}),f=(0,o.J)(d??"0",c(s??p));return{decimals:p,formatted:f,symbol:h,value:d}}var h=r(70061),f=r(47573),w=r(58063),m=r(40949);function g(e={}){let{address:t,query:r={}}=e,n=(0,m.U)(e),i=(0,w.i)({config:n}),o=function(e,t={}){return{async queryFn({queryKey:t}){let{address:r,scopeKey:n,...i}=t[1];if(!r)throw Error("address is required");return await d(e,{...i,address:r})??null},queryKey:function(e={}){return["balance",(0,h.xO)(e)]}(t)}}(n,{...e,chainId:e.chainId??i}),a=!!(t&&(r.enabled??!0));return(0,f.IT)({...r,...o,enabled:a})}},29929:(e,t,r)=>{r.d(t,{R:()=>n});function n(e){let{chain:t}=e,r=t.rpcUrls.default.http[0];if(!e.transports)return[r];let n=e.transports?.[t.id]?.({chain:t});return(n?.value?.transports||[n]).map(({value:e})=>e?.url||r)}},31411:(e,t,r)=>{r.d(t,{U:()=>a});var n=r(88479),i=r(26916),o=r(40949);function a(e={}){let{onConnect:t,onDisconnect:r}=e,s=(0,o.U)(e);(0,i.useEffect)(()=>(0,n.F)(s,{onChange(e,n){if(("reconnecting"===n.status||"connecting"===n.status&&void 0===n.address)&&"connected"===e.status){let{address:r,addresses:i,chain:o,chainId:a,connector:s}=e,l="reconnecting"===n.status||void 0===n.status;t?.({address:r,addresses:i,chain:o,chainId:a,connector:s,isReconnected:l})}else"connected"===n.status&&"disconnected"===e.status&&r?.()}}),[s,t,r])}},32083:(e,t,r)=>{r.d(t,{N:()=>n});let n=(0,r(14917).x)({id:56,name:"BNB Smart Chain",blockTime:750,nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://56.rpc.thirdweb.com"]}},blockExplorers:{default:{name:"BscScan",url:"https://bscscan.com",apiUrl:"https://api.bscscan.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0xf2f12c}}})},32669:(e,t,r)=>{r.d(t,{e:()=>h});var n=r(2149),i=r(29929),o=r(28134),a=r(96269),s=r(95568),l=r(41720),c=r(12825),u=r(39639),d=r(46074),p=r(56466);function h(e={}){let t,f,w,m,g,b,y,A;return(0,n.U)(n=>({id:"metaMaskSDK",name:"MetaMask",rdns:["io.metamask","io.metamask.mobile"],type:h.type,async setup(){let e=await this.getProvider();e?.on&&(b||(b=this.onConnect.bind(this),e.on("connect",b)),m||(m=this.onAccountsChanged.bind(this),e.on("accountsChanged",m)))},async connect({chainId:r,isReconnecting:n,withCapabilities:i}={}){let o=await this.getProvider();y||(y=this.onDisplayUri,o.on("display_uri",y));let a=[];n&&(a=await this.getAccounts().catch(()=>[]));try{let n,c;a?.length||(e.connectAndSign||e.connectWith?(e.connectAndSign?n=await t.connectAndSign({msg:e.connectAndSign}):e.connectWith&&(c=await t.connectWith({method:e.connectWith.method,params:e.connectWith.params})),a=await this.getAccounts()):a=(await t.connect()).map(e=>(0,s.b)(e)));let u=await this.getChainId();if(r&&u!==r){let e=await this.switchChain({chainId:r}).catch(e=>{if(e.code===l.vx.code)throw e;return{id:u}});u=e?.id??u}return y&&(o.removeListener("display_uri",y),y=void 0),n?o.emit("connectAndSign",{accounts:a,chainId:u,signResponse:n}):c&&o.emit("connectWith",{accounts:a,chainId:u,connectWithResponse:c}),b&&(o.removeListener("connect",b),b=void 0),m||(m=this.onAccountsChanged.bind(this),o.on("accountsChanged",m)),g||(g=this.onChainChanged.bind(this),o.on("chainChanged",g)),A||(A=this.onDisconnect.bind(this),o.on("disconnect",A)),{accounts:i?a.map(e=>({address:e,capabilities:{}})):a,chainId:u}}catch(e){if(e.code===l.vx.code)throw new l.vx(e);if(e.code===l.qZ.code)throw new l.qZ(e);throw e}},async disconnect(){let e=await this.getProvider();g&&(e.removeListener("chainChanged",g),g=void 0),A&&(e.removeListener("disconnect",A),A=void 0),b||(b=this.onConnect.bind(this),e.on("connect",b)),await t.terminate()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,s.b)(e))},async getChainId(){let e=await this.getProvider();return Number(e.getChainId()||await e?.request({method:"eth_chainId"}))},async getProvider(){async function a(){let a=await (async()=>{let{default:e}=await Promise.all([r.e(7535),r.e(561)]).then(r.bind(r,61116));return"function"!=typeof e&&"function"==typeof e.default?e.default:e})(),s={};for(let e of n.chains)s[(0,c.cK)(e.id)]=(0,i.R)({chain:e,transports:n.transports})?.[0];t=new a({_source:"wagmi",forceDeleteProvider:!1,forceInjectProvider:!1,injectProvider:!1,...e,readonlyRPCMap:s,dappMetadata:{...e.dappMetadata,name:e.dappMetadata?.name?e.dappMetadata?.name:"wagmi",url:e.dappMetadata?.url?e.dappMetadata?.url:"u">typeof window?window.location.origin:"https://wagmi.sh"},useDeeplink:e.useDeeplink??!0});let l=await t.init(),u=l?.activeProvider?l.activeProvider:t.getProvider();if(!u)throw new o.N;return u}return f||(w||(w=a()),f=await w),f},async isAuthorized(){try{return!!(await (0,u.b)(()=>(0,d.w)(()=>this.getAccounts(),{timeout:200}),{delay:201,retryCount:3})).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider(),i=n.chains.find(e=>e.id===t);if(!i)throw new l.ch(new a.nk);try{return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.cK)(t)}]}),await o(),await s(t),i}catch(n){if(n.code===l.vx.code)throw new l.vx(n);if(4902===n.code||n?.data?.originalError?.code===4902)try{return await r.request({method:"wallet_addEthereumChain",params:[{blockExplorerUrls:(()=>{let{default:t,...r}=i.blockExplorers??{};return e?.blockExplorerUrls?e.blockExplorerUrls:t?[t.url,...Object.values(r).map(e=>e.url)]:void 0})(),chainId:(0,c.cK)(t),chainName:e?.chainName??i.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??i.nativeCurrency,rpcUrls:e?.rpcUrls?.length?e.rpcUrls:[i.rpcUrls.default?.http[0]??""]}]}),await o(),await s(t),i}catch(e){if(e.code===l.vx.code)throw new l.vx(e);throw new l.ch(e)}throw new l.ch(n)}async function o(){await (0,u.b)(async()=>{let e=(0,p.ME)(await r.request({method:"eth_chainId"}));if(e!==t)throw Error("User rejected switch after adding network.");return e},{delay:50,retryCount:20})}async function s(e){await new Promise(t=>{let r=i=>{"chainId"in i&&i.chainId===e&&(n.emitter.off("change",r),t())};n.emitter.on("change",r),n.emitter.emit("change",{chainId:e})})}},async onAccountsChanged(e){if(0===e.length)if(!t.isExtensionActive())return;else this.onDisconnect();else if(n.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e})}else n.emitter.emit("change",{accounts:e.map(e=>(0,s.b)(e))})},onChainChanged(e){let t=Number(e);n.emitter.emit("change",{chainId:t})},async onConnect(e){let t=await this.getAccounts();if(0===t.length)return;let r=Number(e.chainId);n.emitter.emit("connect",{accounts:t,chainId:r});let i=await this.getProvider();b&&(i.removeListener("connect",b),b=void 0),m||(m=this.onAccountsChanged.bind(this),i.on("accountsChanged",m)),g||(g=this.onChainChanged.bind(this),i.on("chainChanged",g)),A||(A=this.onDisconnect.bind(this),i.on("disconnect",A))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(n.emitter.emit("disconnect"),g&&(t.removeListener("chainChanged",g),g=void 0),A&&(t.removeListener("disconnect",A),A=void 0),b||(b=this.onConnect.bind(this),t.on("connect",b)))},onDisplayUri(e){n.emitter.emit("message",{type:"display_uri",data:e})}}))}h.type="metaMask"},32919:(e,t,r)=>{r.d(t,{r:()=>n});let n=(0,r(14917).x)({id:1,name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockTime:12e3,rpcUrls:{default:{http:["https://ethereum.reth.rs/rpc"]}},blockExplorers:{default:{name:"Etherscan",url:"https://etherscan.io",apiUrl:"https://api.etherscan.io/api"}},contracts:{ensUniversalResolver:{address:"0xeeeeeeee14d718c2b47d9923deab1335e144eeee",blockCreated:0x16041f6},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0xdb04c1}}})},39204:(e,t,r)=>{r.d(t,{_:()=>a});var n=r(68153),i={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},o=i.blue,a=({accentColor:e=o.accentColor,accentColorForeground:t=o.accentColorForeground,...r}={})=>({...(0,n.$)(r),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});a.accentColors=i},40615:(e,t,r)=>{let n,i,o,a,s,l,c,u,d,p,h,f,w,m,g;r.d(t,{S:()=>G});let b=new Map([[8217,"apostrophe"],[8260,"fraction slash"],[12539,"middle dot"]]);function y(e){var t;let r;return t=function(e){let t=0;function r(){return e[t++]<<8|e[t++]}let n=r(),i=1,o=[0,1];for(let e=1;e<n;e++)o.push(i+=r());let a=r(),s=t;t+=a;let l=0,c=0;function u(){return 0==l&&(c=c<<8|e[t++],l=8),c>>--l&1}let d=0x80000000-1,p=0;for(let e=0;e<31;e++)p=p<<1|u();let h=[],f=0,w=0x80000000;for(;;){let e=Math.floor(((p-f+1)*i-1)/w),t=0,r=n;for(;r-t>1;){let n=t+r>>>1;e<o[n]?r=n:t=n}if(0==t)break;h.push(t);let a=f+Math.floor(w*o[t]/i),s=f+Math.floor(w*o[t+1]/i)-1;for(;((a^s)&0x40000000)==0;)p=p<<1&d|u(),a=a<<1&d,s=s<<1&d|1;for(;a&~s&0x20000000;)p=0x40000000&p|p<<1&d>>>1|u(),a=a<<1^0x40000000,s=(0x40000000^s)<<1|0x40000001;f=a,w=1+s-a}let m=n-4;return h.map(t=>{switch(t-m){case 3:return m+65792+(e[s++]<<16|e[s++]<<8|e[s++]);case 2:return m+256+(e[s++]<<8|e[s++]);case 1:return m+e[s++];default:return t-1}})}(function(e){let t=[];[..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((e,r)=>t[e.charCodeAt(0)]=r);let r=e.length,n=new Uint8Array(6*r>>3);for(let i=0,o=0,a=0,s=0;i<r;i++)s=s<<6|t[e.charCodeAt(i)],(a+=6)>=8&&(n[o++]=s>>(a-=8));return n}(e)),r=0,()=>t[r++]}function A(e,t=0){let r=[];for(;;){let n=e(),i=e();if(!i)break;t+=n;for(let e=0;e<i;e++)r.push(t+e);t+=i+1}return r}function v(e){return x(()=>{let t=A(e);if(t.length)return t})}function C(e){let t=[];for(;;){let r=e();if(0==r)break;t.push(function(e,t){let r=1+t(),n=t(),i=x(t);return k(i.length,1+e,t).flatMap((e,t)=>{let[o,...a]=e;return Array(i[t]).fill().map((e,t)=>{let i=t*n;return[o+t*r,a.map(e=>e+i)]})})}(r,e))}for(;;){var r,n;let i=e()-1;if(i<0)break;t.push((r=i,k(1+(n=e)(),1+r,n).map(e=>[e[0],e.slice(1)])))}return t.flat()}function x(e){let t=[];for(;;){let r=e(t.length);if(!r)break;t.push(r)}return t}function k(e,t,r){let n=Array(e).fill().map(()=>[]);for(let i=0;i<t;i++)(function(e,t){let r=Array(e);for(let i=0,o=0;i<e;i++){var n;r[i]=o+=1&(n=t())?~n>>1:n>>1}return r})(e,r).forEach((e,t)=>n[t].push(e));return n}function B(e){return`{${e.toString(16).toUpperCase().padStart(2,"0")}}`}function E(e){let t=e.length;if(t<4096)return String.fromCodePoint(...e);let r=[];for(let n=0;n<t;)r.push(String.fromCodePoint(...e.slice(n,n+=4096)));return r.join("")}function I(e,t){let r=e.length,n=r-t.length;for(let i=0;0==n&&i<r;i++)n=e[i]-t[i];return n}let P=55204;function S(e){return e>>24&255}function M(e){return 0xffffff&e}function T(e){return e>=44032&&e<P}function N(e){n||function(){let e=y("AEUDWAHSCGYATwDVADIAdgAiADQAFAAtABQAIQAPACcADQASAAsAGQAJABIACQARAAUACwAFAAwABQAQAAMABwAEAAoABQAJAAIACgABAAQAFAALAAIACwABAAIAAQAHAAMAAwAEAAsADAAMAAwACwANAA0AAwAKAAkABAAdAAYAZwDTAecDNACxCmIB8xhZAqfoC190UGcThgBurwf7PT09Pb09AjgJum8OjDllxHYUKXAPxzq6tABAxgK8ysUvWAgMPT09PT09PSs6LT2HcgWXWwFLoSMEEEl5RFVMKvO0XQ8ExDdJMnIgPi89uj00MsvBXxEPAGPCDwBnQKoEbwRwBHEEcgRzBHQEdQR2BHcEeAR6BHsEfAR+BIAEgfndBQoBYgULAWIFDAFiBNcE2ATZBRAFEQUvBdALFAsVDPcNBw13DYcOMA4xDjMB4BllHI0B2grbAMDpHLkQ7QHVAPRNQQFnGRUEg0yEB2uaJEMAJpIBpob5AERSMAKNoAXqaQLRBMCzEiC+AZ4EWRJJFbEu7QDQLARtEbgECxDwAb/RyAk1AV4nD2cEQQKTAzsAGpobPgAahAGPCrysdy0OAKwAfFIcBAQFUmoA/PtZADkBIadVj2UMUgx5Il4ANQC9vLIBDAHUGVsQ8wCzfQIbGVcCHBZHAZ8CBAgXOhG7AqMZ4M7+1M0UAPDNAWsC+mcJDe8AAQA99zkEXLICyQozAo6lAobcP5JvjQLFzwKD9gU/OD8FEQCtEQL6bW+nAKUEvzjDHsuRyUvOFHcacUz5AqIFRSE2kzsBEQCuaQL5DQTlcgO6twSpTiUgCwIFCAUXBHQEqQV6swAVxUlmTmsCwjqsP/wKJQmXb793UgZBEBsnpRD3DDMBtQE7De1L2ATxBjsEyR99GRkPzZWcCKUt3QztJuMuoYBaI/UqgwXtS/Q83QtNUWgPWQtlCeM6Y4FOAyEBDSKLCt0NOQhtEPMKyWsN5RFFBzkD1UmaAKUHAQsRHTUVtSYQYqwLCTl3Bvsa9guPJq8TKXr8BdMaIQZNASka/wDPLueFsFoxXBxPXwYDCyUjxxSoUCANJUC3eEgaGwcVJakCkUNwSodRNh6TIfY8PQ1mLhNRfAf1PAUZTwuBPJ5Gq0UOEdI+jT1IIklMLAQ1fywvJ4sJzw+FDLl8cgFZCSEJsQxxEzERFzfFCDkHGS2XJCcVCCFGlWCaBPefA/MT0QMLBT8JQQcTA7UcLRMuFSkFDYEk1wLzNtUuswKPVoABFwXLDyUf3xBQR+AO6QibAmUDgyXrAC0VIQAXIpsIQ2MAX4/YUwUuywjHamwjdANnFOdhEXMHkQ5XB6ccMxW/HOFwyF4Lhggoo68JWwF1CZkBXwTjCAk1W4ygIEFnU4tYGJsgYUE/XfwCMQxlFZ9EvYd4AosPaxIbATUBcwc5DQECdxHtEWsQlQjrhgQ1tTP4OiUETyGDIBEKJwNPbM4LJyb5DPhpAaMSYgMMND137merYLYkF/0HGTLFQWAh8QuST80MnBrBGEJULhnkB78D8xrzJ+pBVwX/A6MDEzpNM+4EvQtpCIsJPwBJDqMXB9cYagpxjNABMYsBt5kDV5GDAm+PBjcHCwBnC4cFeeUAHQKnCKMABQDPA1cAOQKtB50AGQCFQQE9AycvASHlAo8DkwgxywGVLwHzKQQbwwwVAPc3bkoCw7ECgGpmogXdWAKOAkk1AU0lBAVOR1EDr3HhANsASwYT30cBFatKyxrjQwHfbysAxwD7AAU1BwVBAc0B820AtwFfCzEJorO1AU3pKQCDABVrAdcCiQDdADUAf/EBUwBNBVn5BdMCT0kBETEYK1dhAbsDHwEzAQ0AeQbLjaXJBx8EbQfTAhAbFeEC7y4HtQEDIt8TzULFAr3eVaFgAmSBAmJCW02vWzcgAqH3AmiYAmYJAp+EOBsLAmY7AmYmBG4EfwN/EwN+kjkGOXcXOYI6IyMCbB0CMjY4CgJtxwJtru+KM2dFKwFnAN4A4QBKBQeYDI0A/gvCAA21AncvAnaiPwJ5S0MCeLodXNtFrkbXAnw/AnrIAn0JAnzwBVkFIEgASH1jJAKBbQKAAAKABQJ/rklYSlsVF0rMAtEBAtDMSycDiE8Dh+ZExZEyAvKhXQMDA65LzkwtJQPPTUxNrwKLPwKK2MEbBx1DZwW3Ao43Ao5cQJeBAo7ZAo5ceFG0UzUKUtRUhQKT+wKTDADpABxVHlWvVdAGLBsplYYy4XhmRTs5ApefAu+yWCGoAFklApaPApZ8nACpWaxaCYFNADsClrUClk5cRFzRApnLAplkXMpdBxkCnJs5wjqdApwWAp+bAp64igAdDzEqDwKd8QKekgC1PWE0Ye8CntMCoG4BqQKenx8Cnk6lY8hkJyUrAievAiZ+AqD7AqBMAqLdAqHEAqYvAqXOAqf/AH0Cp/JofGixAANJahxq0QKs4wKsrgKtZwKtAgJXHQJV3AKx4dcDH05slwKyvQ0CsugXbOBtY21IXwMlzQK2XDs/bpADKUUCuF4CuUcVArkqd3A2cOECvRkCu9pwlgMyEQK+iHICAzNxAr4acyJzTwLDywLDBHOCdEs1RXTgAzynAzyaAz2/AsV8AsZHAsYQiQLIaVECyEQCyU8CyS4CZJ0C3dJ4eWF4rnklS9ADGKNnAgJh9BnzlSR7C16SXrsRAs9rAs9sL0tT0vMTnwDGrQLPcwEp6gNOEn5LBQLcJwLbigLSTwNSXANTXwEBA1WMgIk/AMsW7WBFghyC04LOg40C2scC2d6EEIRJpzwDhqUALwNkDoZxWfkAVQLfZQLeuHN3AuIv7RQB8zAnAfSbAfLShwLr8wLpcHkC6vkC6uQA+UcBuQLuiQLrnJaqlwMC7j8DheCYeXDgcaEC8wMAaQOOFpmTAvcTA5FuA5KHAveYAvnZAvhmmhyaq7s3mx4DnYMC/voBGwA5nxyfswMFjQOmagOm2QDRxQMGaqGIogUJAwxJAtQAPwMA4UEXUwER8wNrB5dnBQCTLSu3r73bAYmZFH8RBDkB+ykFIQ6dCZ8Akv0TtRQrxQL3LScApQC3BbmOkRc/xqdtQS4UJo0uAUMBgPwBtSYAdQMOBG0ALAIWDKEAAAoCPQJqA90DfgSRASBFBSF8CgAFAEQAEwA2EgJ3AQAF1QNr7wrFAgD3Cp8nv7G35QGRIUFCAekUfxE0wIkABAAbAFoCRQKEiwAGOlM6lI1tALg6jzrQAI04wTrcAKUA6ADLATqBOjs5/Dn5O3aJOls7nok6bzkYAVYBMwFsBS81XTWeNa01ZjV1NbY1xTWCNZE10jXhNZ41rTXuNf01sjXBNgI2ETXGNdU2FjYnNd417TYuNj02LjUtITY6Nj02PDbJNwgEkDxXNjg23TcgNw82yiA3iTcwCgSwPGc2JDcZN2w6jTchQtRDB0LgQwscDw8JmyhtKFFVBgDpfwDpsAD+mxQ91wLpNSMArQC9BbeOkRdLxptzBL8MDAMMAQgDAAkKCwsLCQoGBAVVBI/DvwDz9b29kaUCb0QtsRTNLt4eGBcSHAMZFhYZEhYEARAEBUEcQRxBHEEcQRxBHEEaQRxBHEFCSTxBPElISUhBNkM2QTYbNklISVmBVIgELgEaJZkC7aMAoQCjBcGOmxdNxrsBvwGJAaQcEZ0ePCklMAAhMvAIMAL54gC7Bm8EescjzQMpARQpKgDUHqSvAj5Gqwr7YrMUACT9AN3rpF27H7fsd/twPt4l+UW1yQYKBt2Cgy7qJpGiLcdE2P1cQSImUbqJ6ICH27H4knQMIRMrFkHu3sx6tC35Y+eLIh4e4CMKJ4DfyV+8mfta499RCAJ0xfeZR8PsoYOApva9pjGn4PhvyZS7/h5JLuhaucfjuU+Z584wwqNO4hWYmaBCcjgQPale1bjoHzMUbut/zTgxHxBnAyrdKpF4IRMASLBtD/jviyLeCgj8twWjAd3HchN/uqaeRYeHJgl7JEY9/cTrvtfybx/r3Y/NtxJ9dp+MTVmiS9bwBH73s8Di56/Ma+mTPMHq4T1yEG1fWcqr0u+hrGnJEvU1JJAm/maQSrKrazIyvSkDFkj8UUlfBq8baniTGPng6YZRL661rDNw4w/1g2figG0IhXnL7wosd/sVNo5dYSmMBTP5c7rYLjRdCwg8quwljOMPf63D8ICAL0r71XRiyFHdgwHbwfgnPOf4Lzjf2v+j+IiDHG2isp5yUnzSDyDRb4i/Vs0qHSHq8PiEQ/JnBP7PxnjN0j6gT4AVAeRx/1o9VnEUlUwvFrzJqHk9jxAw4sYxCnrxaeBdCFFKbnE7z+x54F5W7ZZsU6kx8Qocul6FoAHHy01FGL/nne61mn4+uYXfQ1Uccn+HMLKE+cZzT8BB1E3FRskOgJrRsq25rauLm8+uamXpkS/bTy6y1wDbCrW4eD532kTWrtNUmVVZOIn/C+/JR9KVR5iG9TY8iaT67ubm/whL1xbKZoqtY+a6fNxMJrg211bGYJDUkYMNWA0BMB++9zOm6Eik4roqs9CCEFW0lyAK0PbvlzvoxrZuY/OEhNW/l/63U15Od/RSvmDvXpGLiVmeGi5PDSH2bYz5o2g6wFDQ2FbZgYgTF8rPlvA1ifjZD3NLtFdXdpSIJvgKR7GpjJWG7GZGawPomIH8B5tUmtHH9LpM+/KQKunEPa1GiQkCXv4Cnm9DLORo2joicHdPDZ64obQrPZ5bgqckkj0G6/NEiPYBY4bCkL7W8G5YzsUb6GakFjykSPkT7JGeLeB6uJOGMm+x7N381BCDfbJFx0dtLgV9Q477BfL1fvitX5anV/oYfxeYl+eF5x5bB8+Ep/L2nsmd56aKF4aAD4GbJWsdKyBW22xEmAD3XdbtsMyAFoR5mOla0gEd9U/YVB7zvHGpHbQonay9Sv0bQ8iZ8piaXVrKc5AG1AmqqgaEvzHSP2Wux7aZTWh6quVDVU01JtMIVRdCFwlSbbqqhoFlyzsotQzRexFvZ/MqUSFu3OhRIuNBbufvBpdVgb8XdGJ48/lJPCZ7dsOujTTbKPSEvGXkOnG2Xdi8/nM3EMRqITd5QeU7iOjKqC7URJY6TnLsHij22xAHKnVRD5MDtBYnoGFqZGMDmXCW6Oj+BAWw14hESY/xLF6bLku06AHkiXTHPCFZ0f9YSqqo27eAhhS67OrA2Het4M9JM3jm/yRX6bYxnfmzYl5qQdHxN08FsNuWDrWd4vMUY2QD3hr8vS73SCTkFoXZR3xNzOQt8d/6HfjBmXqvrE6EGkLzK6YK2U2/ksU/iUH+LvVIsJI+ri2AL/klo+ShdDyfs5A83i2prkMs51IKR7ZcqjZJi5X3+bd8GlyWvtddxKEoEqSgEO7A8jIgf2nH0h8FjM7oB6yte3X5mpL0i/E4Rx0CotKnILJj/vJqo4VkPQ93jRtRVfaitQPqldl5xRYPq8387Z0DcnZvOeION0Ht1+P27kFLGQIcLBX4FG3sffccNHh5cPfzp9INoRtqVtdViJfg8RjnXiIz/MNqEN6zvzX3hMzyWC7oSoXIT14ubc0abPX8Rp9GVa5NI/8iv+6ela1oTncbdimRKnrbRffDR/X4nH+bgqAuHWl7hOaeXPWVzIeRl7ga+JzD4Sx3mlj/q6Ra/E2HhDf21eEzTLNGfCZsY+/yxZzQzIAuijG65ii4O/waAJCrEJaWd/DRAKMQ5678Dw5AT7RCKzdadIwd8LsD+DgPBASmWsUlf8R0k1w/2k4lO2Wpb4zMI6EJVJs0xk/wn8/fRUPqrDKhbjHR41SqgFMx5RGMPuduFwlu5lK89tW11sTqiX/5EfGs5nO+y9FKvgXKPOEmgE05EKNL6Sjb3xS40H3BVPhm0ESOZgAjZoymc8be0inDVo4JdJVf+NKd3tN/CaB7GShhH27qf95NoFZVX/6ZkR2lX+CgWrQ2INgkh+bbMz68+uJ3Clsh8HSMPEQtAt+BBE6fXDab7KIlsKxU1lIXW/KWVstpdPanJ0pdXpQinDyUQjtY7ZVcfiecRxRDMAUhHFU2cEaciQ+htiPMPx1kdvtWG9T44w3r037ljHBFJdYR0r55qvMRixtAEFJAqA4T1ES87FAx7UozXasytg8MftZYt0rjYgLe6EJ5aWvy2qscBSBQ7yehoJIA3wIIZ9ukfkyBb6qnue5ko8W50rpV4kXqWjI5nbGRXrNW0tBZHXlY48nSgcUXBHWT4GcgLZJoLlKJnV96kCYpq9eWHh7xJzkCAyrQuQ5AJ0qq/uZ3toJglNterev+Qm0KXxPg/+YbFRJdfhbp1wOnVOEYdVHTya6CtO0afhEaBhx3oHwCb5Kq6RwHDzFMl2vfjL8GwzcCoTj7wZe+UFnYDV2yKpPU9dba29gYBdNqJg/KXozO+CJTlKmlKhnqTf5doeS35DZFV+cYJQVjd+oVY/Gtc/6XPzUxb1gMqf6cEjNNoRC8AObrp+fx0cVtGu4ffC2TgXRC8zPl8moUHCB5HZ25d87mlsiiK0aNwBtcEQjRNBT/QrXbw/8aVXdKMHn9EqYEKEyxSGTpYQOaes1G1Qq8pDgqkZtlO2HRyCXpmeM7TSrRPkAh004BfisVpF6zP44n2Jvxz/gOVocNCyy9V6lkod28QM4pbaMvVJigD/w3BrsjSJrXlqc4ulBYOCceiBN4b/gHajYyupbhEt63a619Ay4wsL6a6w6B+A7TnoyE7BliWHJfzVxxIKM/W3M/J8Bx99Op863Q8eNuIMGRx++VbYfjm+VGYBA3Ap/KEu/wxBNBpJJncwHPG45V8Gh98ZIrGCc20MwijGowZbcS7d1nEgcOW5cddZpHL2XPAIRbColiheZzXTvBxZOY3iMSDSKDrICyJ/iQs1vdplVdH/JrLJsQ2jtTnfCrITIghq3KFX3qAgLWAIp8IffNSdTYptnbGfc8s+qcr3zyzyHp1aJg+jxTF4kD1ry5Wauv5V3xnOGwTFecNzXSLHBW20/pCQjk4uorD0plIhMSTc79+/r4RKPClRYTBYex1Ob5crtfvRQBBv6re/6FhtCqtduag67glqRA77/3ulblh9YRtMdDxkCyJDeNnAuCLPQFmdRRWJtH20Z8DstfJf+5oj5SSB64d0iF5/Ya4KfTWxfivj9Ap2/zbYaTo/1gO3tM6RYsCZharMBFr7Fm61mLSrQnEI4OF1gbVS4k/JE9UotOrnLJZuswoWodCSV8zbybkJSVIP7n8UaE9xCR39rJZmf27HOAPVOGc9pdkQUcRrI0qyVF9Z3j1RHDbxIfwbWzmPVjwIdPJvtmBYwEQIUsIW1S939hcVikK00ozPRI02cqhzVUNzpOxVdrwRPvlh1aIOf0xFEqD3YkGnCnFah/cFN3J2gB7N+bZSGawwkKFu1tpQMrp1W+27YNkyT0TpcFpTqgOqqLabrgcCUPxh97mREOGy4xItzQ9xSl6rq+8BZsHcrQFReS+QeMxJ3P6CnL9EP/eOLDjumLhvrcQrpPiknsofbzBv9gTP0lU+TIVwE6E7CcKfT36q+ZiEOHJ9ayf0dyUJLezAb2M8aNHwd0+OJmsVgTzRWA");for(let[t,r]of(n=new Map(v(e).flatMap((e,t)=>e.map(e=>[e,t+1<<24]))),i=new Set(A(e)),o=new Map,a=new Map,C(e))){if(!i.has(t)&&2==r.length){let[e,n]=r,i=a.get(e);i||(i=new Map,a.set(e,i)),i.set(n,t)}o.set(t,r.reverse())}}();let t=[],r=[],s=!1;function l(e){let r=n.get(e);r&&(s=!0,e|=r),t.push(e)}for(let n of e)for(;;){if(n<128)t.push(n);else if(T(n)){let e=n-44032,t=e/588|0,r=e%588/28|0,i=e%28;l(4352+t),l(4449+r),i>0&&l(4519+i)}else{let e=o.get(n);e?r.push(...e):l(n)}if(!r.length)break;n=r.pop()}if(s&&t.length>1){let e=S(t[0]);for(let r=1;r<t.length;r++){let n=S(t[r]);if(0==n||e<=n){e=n;continue}let i=r-1;for(;;){let r=t[i+1];if(t[i+1]=t[i],t[i]=r,!i||(e=S(t[--i]))<=n)break}e=S(t[r])}}return t}function W(e){return function(e){let t=[],r=[],n=-1,i=0;for(let o of e){let e=S(o),s=M(o);if(-1==n)0==e?n=s:t.push(s);else if(i>0&&i>=e)0==e?(t.push(n,...r),r.length=0,n=s):r.push(s),i=e;else{let o=function(e,t){if(e>=4352&&e<4371&&t>=4449&&t<4470)return 44032+(e-4352)*588+(t-4449)*28;{if(T(e)&&t>4519&&t<4547&&(e-44032)%28==0)return e+(t-4519);let r=a.get(e);return r&&(r=r.get(t))?r:-1}}(n,s);o>=0?n=o:0==i&&0==e?(t.push(n),n=s):(r.push(s),i=e)}}return n>=0&&t.push(n,...r),t}(N(e))}let F=e=>Array.from(e);function U(e,t){return e.P.has(t)||e.Q.has(t)}class R extends Array{get is_emoji(){return!0}}function O(){let e,t;if(s)return;let r=y("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"),n=()=>new Set(A(r)),i=(e,t)=>t.forEach(t=>e.add(t));s=new Map(C(r)),l=n(),c=A(r),u=new Set(A(r).map(e=>c[e])),c=new Set(c),d=n(),n();let o=v(r),a=r(),b=()=>{let e=new Set;return A(r).forEach(t=>i(e,o[t])),i(e,A(r)),e};p=x(e=>{let t=x(r).map(e=>e+96);if(t.length){let n=e>=a;t[0]-=32,t=E(t),n&&(t=`Restricted[${t}]`);let i=b();return{N:t,P:i,Q:b(),M:!r(),R:n}}}),h=n(),f=new Map;let k=A(r).concat(F(h)).sort((e,t)=>e-t);for(let{V:e,M:t}of(k.forEach((e,t)=>{let n=r(),i=k[t]=n?k[t-n]:{V:[],M:new Map};i.V.push(e),h.has(e)||f.set(e,i)}),new Set(f.values()))){let r=[];for(let t of e){let e=p.filter(e=>U(e,t)),n=r.find(({G:t})=>e.some(e=>t.has(e)));n||(n={G:new Set,V:[]},r.push(n)),n.V.push(t),i(n.G,e)}let n=r.flatMap(e=>F(e.G));for(let{G:e,V:i}of r){let r=new Set(n.filter(t=>!e.has(t)));for(let e of i)t.set(e,r)}}w=new Set;let B=new Set,P=e=>w.has(e)?B.add(e):w.add(e);for(let e of p){for(let t of e.P)P(t);for(let t of e.Q)P(t)}for(let e of w)f.has(e)||B.has(e)||f.set(e,1);for(let n of(i(w,N(w).map(M)),m=(e=[],t=A(r),function t({S:r,B:n},i,o){if(!(4&r)||o!==i[i.length-1])for(let a of(2&r&&(o=i[i.length-1]),1&r&&e.push(i),n))for(let e of a.Q)t(a,[...i,e],o)}(function e(n){return{S:r(),B:x(()=>{let n=A(r).map(e=>t[e]);if(n.length)return e(n)}),Q:n}}([]),[]),e).map(e=>R.from(e)).sort(I),g=new Map,m)){let e=[g];for(let t of n){let r=e.map(e=>{let r=e.get(t);return r||(r=new Map,e.set(t,r)),r});65039===t?e.push(...r):e=r}for(let t of e)t.V=n}}function D(e){return(L(e)?"":`${Q(q([e]))} `)+B(e)}function Q(e){return`"${e}"\u200E`}function q(e,t=1/0,r=B){var n;let i=[];n=e[0],O(),c.has(n)&&i.push("◌"),e.length>t&&(t>>=1,e=[...e.slice(0,t),8230,...e.slice(-t)]);let o=0,a=e.length;for(let t=0;t<a;t++){let n=e[t];L(n)&&(i.push(E(e.slice(o,t))),i.push(r(n)),o=t+1)}return i.push(E(e.slice(o,a))),i.join("")}function L(e){return O(),d.has(e)}function j(e){return Error(`disallowed character: ${D(e)}`)}function J(e,t){let r=D(t),n=p.find(e=>e.P.has(t));return n&&(r=`${n.N} ${r}`),Error(`illegal mixture: ${e.N} + ${r}`)}function K(e){return Error(`illegal placement: ${e}`)}function H(e){return e.filter(e=>65039!=e)}function G(e){var t=function(e,t,r){if(!e)return[];O();let n=0;return e.split(".").map(e=>{let i=function(e){let t=[];for(let r=0,n=e.length;r<n;){let n=e.codePointAt(r);r+=n<65536?1:2,t.push(n)}return t}(e),o={input:i,offset:n};n+=i.length+1;try{let e,n=o.tokens=function(e,t,r){let n=[],i=[];for(e=e.slice().reverse();e.length;){let o=function(e){let t,r=g,n=e.length;for(;n&&(r=r.get(e[--n]));){let{V:i}=r;i&&(t=i,e.length=n)}return t}(e);if(o)i.length&&(n.push(t(i)),i=[]),n.push(r(o));else{let t=e.pop();if(w.has(t))i.push(t);else{let e=s.get(t);if(e)i.push(...e);else if(!l.has(t))throw j(t)}}}return i.length&&n.push(t(i)),n}(i,t,r),a=n.length;if(!a)throw Error("empty label");let d=o.output=n.flat();for(let e=d.lastIndexOf(95);e>0;)if(95!==d[--e])throw Error("underscore allowed only at start");if(!(o.emoji=a>1||n[0].is_emoji)&&d.every(e=>e<128)){if(d.length>=4&&45==d[2]&&45==d[3])throw Error(`invalid label extension: "${E(d.slice(0,4))}"`);e="ASCII"}else{let t=n.flatMap(e=>e.is_emoji?[]:e);if(t.length){if(c.has(d[0]))throw K("leading combining mark");for(let e=1;e<a;e++){let t=n[e];if(!t.is_emoji&&c.has(t[0]))throw K(`emoji + combining mark: "${E(n[e-1])} + ${q([t[0]])}"`)}!function(e){let t=e[0],r=b.get(t);if(r)throw K(`leading ${r}`);let n=e.length,i=-1;for(let o=1;o<n;o++){t=e[o];let n=b.get(t);if(n){if(i==o)throw K(`${r} + ${n}`);i=o+1,r=n}}if(i==n)throw K(`trailing ${r}`)}(d);let r=F(new Set(t)),[i]=function(e){let t=p;for(let r of e){let e=t.filter(e=>U(e,r));if(!e.length)if(p.some(e=>U(e,r)))throw J(t[0],r);else throw j(r);if(t=e,1==e.length)break}return t}(r);(function(e,t){for(let r of t)if(!U(e,r))throw J(e,r);if(e.M){let e=N(t).map(M);for(let t=1,r=e.length;t<r;t++)if(u.has(e[t])){let n=t+1;for(let i;n<r&&u.has(i=e[n]);n++)for(let r=t;r<n;r++)if(e[r]==i)throw Error(`duplicate non-spacing marks: ${D(i)}`);if(n-t>4)throw Error(`excessive non-spacing marks: ${Q(q(e.slice(t-1,n)))} (${n-t}/4)`);t=n}}})(i,t),function(e,t){let r,n=[];for(let e of t){let t=f.get(e);if(1===t)return;if(t){let n=t.M.get(e);if(!(r=r?r.filter(e=>n.has(e)):F(n)).length)return}else n.push(e)}if(r){for(let t of r)if(n.every(e=>U(t,e)))throw Error(`whole-script confusable: ${e.N}/${t.N}`)}}(i,r),e=i.N}else e="Emoji"}o.type=e}catch(e){o.error=e}return o})}(e,W,H);return t.map(({input:e,error:r,output:n})=>{if(r){let n=r.message;throw Error(1==t.length?n:`Invalid label ${Q(q(e,63))}: ${n}`)}return E(n)}).join(".")}},41783:(e,t,r)=>{r.d(t,{o:()=>T});var n=r(56466),i=r(32424),o=r(71829),a=r(43011);let s={block:(0,i.R)({format:e=>({transactions:e.transactions?.map(e=>{if("string"==typeof e)return e;let t=(0,o.uP)(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,n.uU)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}),stateRoot:e.stateRoot})}),transaction:(0,o.gU)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,n.uU)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,a.WB)({format:e=>({...e.depositNonce?{depositNonce:(0,n.uU)(e.depositNonce)}:{},...e.depositReceiptVersion?{depositReceiptVersion:(0,n.ME)(e.depositReceiptVersion)}:{},l1GasPrice:e.l1GasPrice?(0,n.uU)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,n.uU)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,n.uU)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})};var l=r(97915),c=r(75992),u=r(42906),d=r(12825),p=r(47162),h=r(31079),f=r(3238),w=r(551),m=r(6387),g=r(52785),b=r(27294),y=r(87677),A=r(16472),v=r(29879),C=r(33362),x=r(12422),k=r(84537),B=r(26943),E=r(22952);function I(e){let{chainId:t,maxPriorityFeePerGas:r,maxFeePerGas:n,to:i}=e;if(t<=0)throw new x.qD({chainId:t});if(i&&!(0,c.P)(i))throw new l.M({address:i});if(n&&n>A.Ao)throw new k.BG({maxFeePerGas:n});if(r&&n&&r>n)throw new k.lN({maxFeePerGas:n,maxPriorityFeePerGas:r})}var P=r(39928);function S(e){if(!e||0===e.length)return[];let t=[];for(let r=0;r<e.length;r++){let{address:n,storageKeys:i}=e[r];for(let e=0;e<i.length;e++)if(i[e].length-2!=64)throw new h.fZ({storageKey:i[e]});if(!(0,c.P)(n,{strict:!1}))throw new l.M({address:n});t.push([n,i])}return t}function M(e,t){let r=t??e,{v:n,yParity:i}=r;if(void 0===r.r||void 0===r.s||void 0===n&&void 0===i)return[];let o=(0,b.B)(r.r),a=(0,b.B)(r.s);return["number"==typeof i?i?(0,d.cK)(1):"0x":0n===n?"0x":1n===n?(0,d.cK)(1):27n===n?"0x":(0,d.cK)(1),"0x00"===o?"0x":o,"0x00"===a?"0x":a]}let T={blockTime:2e3,contracts:{gasPriceOracle:{address:"0x420000000000000000000000000000000000000F"},l1Block:{address:"0x4200000000000000000000000000000000000015"},l2CrossDomainMessenger:{address:"0x4200000000000000000000000000000000000007"},l2Erc721Bridge:{address:"0x4200000000000000000000000000000000000014"},l2StandardBridge:{address:"0x4200000000000000000000000000000000000010"},l2ToL1MessagePasser:{address:"0x4200000000000000000000000000000000000016"}},formatters:s,serializers:{transaction:function(e,t){var r;let i;return"deposit"===(r=e).type||void 0!==r.sourceHash?function(e){!function(e){let{from:t,to:r}=e;if(t&&!(0,c.P)(t))throw new l.M({address:t});if(r&&!(0,c.P)(r))throw new l.M({address:r})}(e);let{sourceHash:t,data:r,from:n,gas:i,isSystemTx:o,mint:a,to:s,value:h}=e,f=[t,n,s??"0x",a?(0,d.nj)(a):"0x",h?(0,d.nj)(h):"0x",i?(0,d.nj)(i):"0x",o?"0x1":"0x",r??"0x"];return(0,u.aP)(["0x7e",(0,p.EQ)(f)])}(e):"eip1559"===(i=(0,P.L)(e))?function(e,t){let{chainId:r,gas:n,nonce:i,to:o,value:a,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:c,data:h}=e;I(e);let f=S(c),w=[(0,d.cK)(r),i?(0,d.cK)(i):"0x",l?(0,d.cK)(l):"0x",s?(0,d.cK)(s):"0x",n?(0,d.cK)(n):"0x",o??"0x",a?(0,d.cK)(a):"0x",h??"0x",f,...M(e,t)];return(0,u.aP)(["0x02",(0,p.EQ)(w)])}(e,t):"eip2930"===i?function(e,t){let{chainId:r,gas:n,data:i,nonce:o,to:a,value:s,accessList:h,gasPrice:f}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:o}=e;if(t<=0)throw new x.qD({chainId:t});if(o&&!(0,c.P)(o))throw new l.M({address:o});if(r||i)throw new v.C("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>A.Ao)throw new k.BG({maxFeePerGas:n})}(e);let w=S(h),m=[(0,d.cK)(r),o?(0,d.cK)(o):"0x",f?(0,d.cK)(f):"0x",n?(0,d.cK)(n):"0x",a??"0x",s?(0,d.cK)(s):"0x",i??"0x",w,...M(e,t)];return(0,u.aP)(["0x01",(0,p.EQ)(m)])}(e,t):"eip4844"===i?function(e,t){let{chainId:r,gas:i,nonce:o,to:a,value:s,maxFeePerBlobGas:l,maxFeePerGas:c,maxPriorityFeePerGas:h,accessList:b,data:A}=e;!function(e){let{blobVersionedHashes:t}=e;if(t){if(0===t.length)throw new C.zF;for(let e of t){let t=(0,B.E)(e),r=(0,n.ME)((0,E.di)(e,0,1));if(32!==t)throw new C.uP({hash:e,size:t});if(r!==y.E)throw new C.PK({hash:e,version:r})}}I(e)}(e);let v=e.blobVersionedHashes,x=e.sidecars;if(e.blobs&&(void 0===v||void 0===x)){let t="string"==typeof e.blobs[0]?e.blobs:e.blobs.map(e=>(0,d.My)(e)),r=e.kzg,n=(0,f.S)({blobs:t,kzg:r});if(void 0===v&&(v=(0,m.d)({commitments:n})),void 0===x){let e=(0,w.t)({blobs:t,commitments:n,kzg:r});x=(0,g.T)({blobs:t,commitments:n,proofs:e})}}let k=S(b),P=[(0,d.cK)(r),o?(0,d.cK)(o):"0x",h?(0,d.cK)(h):"0x",c?(0,d.cK)(c):"0x",i?(0,d.cK)(i):"0x",a??"0x",s?(0,d.cK)(s):"0x",A??"0x",k,l?(0,d.cK)(l):"0x",v??[],...M(e,t)],T=[],N=[],W=[];if(x)for(let e=0;e<x.length;e++){let{blob:t,commitment:r,proof:n}=x[e];T.push(t),N.push(r),W.push(n)}return(0,u.aP)(["0x03",x?(0,p.EQ)([P,T,N,W]):(0,p.EQ)(P)])}(e,t):"eip7702"===i?function(e,t){let{authorizationList:r,chainId:n,gas:i,nonce:o,to:a,value:s,maxFeePerGas:h,maxPriorityFeePerGas:f,accessList:w,data:m}=e;!function(e){let{authorizationList:t}=e;if(t)for(let e of t){let{chainId:t}=e,r=e.address;if(!(0,c.P)(r))throw new l.M({address:r});if(t<0)throw new x.qD({chainId:t})}I(e)}(e);let g=S(w),b=function(e){if(!e||0===e.length)return[];let t=[];for(let r of e){let{chainId:e,nonce:n,...i}=r,o=r.address;t.push([e?(0,d.nj)(e):"0x",o,n?(0,d.nj)(n):"0x",...M({},i)])}return t}(r);return(0,u.aP)(["0x04",(0,p.EQ)([(0,d.cK)(n),o?(0,d.cK)(o):"0x",f?(0,d.cK)(f):"0x",h?(0,d.cK)(h):"0x",i?(0,d.cK)(i):"0x",a??"0x",s?(0,d.cK)(s):"0x",m??"0x",g,b,...M(e,t)])])}(e,t):function(e,t){let{chainId:r=0,gas:n,data:i,nonce:o,to:a,value:s,gasPrice:u}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:o}=e;if(o&&!(0,c.P)(o))throw new l.M({address:o});if(void 0!==t&&t<=0)throw new x.qD({chainId:t});if(r||i)throw new v.C("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>A.Ao)throw new k.BG({maxFeePerGas:n})}(e);let f=[o?(0,d.cK)(o):"0x",u?(0,d.cK)(u):"0x",n?(0,d.cK)(n):"0x",a??"0x",s?(0,d.cK)(s):"0x",i??"0x"];if(t){let e=(()=>{if(t.v>=35n)return(t.v-35n)/2n>0?t.v:27n+(35n===t.v?0n:1n);if(r>0)return BigInt(2*r)+BigInt(35n+t.v-27n);let e=27n+(27n===t.v?0n:1n);if(t.v!==e)throw new h.zW({v:t.v});return e})(),n=(0,b.B)(t.r),i=(0,b.B)(t.s);f=[...f,(0,d.cK)(e),"0x00"===n?"0x":n,"0x00"===i?"0x":i]}else r>0&&(f=[...f,(0,d.cK)(r),"0x","0x"]);return(0,p.EQ)(f)}(e,t)}}}},44039:(e,t,r)=>{r.d(t,{v:()=>c});var n=r(98533),i=r(70843),o=r(70061),a=r(47573),s=r(58063),l=r(40949);function c(e={}){let{address:t,query:r={}}=e,u=(0,l.U)(e),d=(0,s.i)({config:u}),p=function(e,t={}){return{async queryFn({queryKey:t}){let{address:r,scopeKey:o,...a}=t[1];if(!r)throw Error("address is required");return function(e,t){let{chainId:r,...o}=t,a=e.getClient({chainId:r});return(0,i.T)(a,n.s,"getEnsName")(o)}(e,{...a,address:r})},queryKey:function(e={}){return["ensName",(0,o.xO)(e)]}(t)}}(u,{...e,chainId:e.chainId??d}),h=!!(t&&(r.enabled??!0));return(0,a.IT)({...r,...p,enabled:h})}},44515:(e,t,r)=>{r.d(t,{R:()=>i});var n=r(41783);let i=(0,r(14917).x)({...n.o,id:10,name:"OP Mainnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.optimism.io"]}},blockExplorers:{default:{name:"Optimism Explorer",url:"https://optimistic.etherscan.io",apiUrl:"https://api-optimistic.etherscan.io/api"}},contracts:{...n.o.contracts,disputeGameFactory:{1:{address:"0xe5965Ab5962eDc7477C8520243A95517CD252fA9"}},l2OutputOracle:{1:{address:"0xdfe97868233d1aa22e815a266982f2cf17685a27"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263},portal:{1:{address:"0xbEb5Fc579115071764c7423A4f12eDde41f106Ed"}},l1StandardBridge:{1:{address:"0x99C9fc46f92E8a1c0deC1b1747d010903E884bE1"}}},sourceId:1})},45057:(e,t,r)=>{r.d(t,{m:()=>f});var n=r(3390),i=r(23957),o=r(84256),a=r(79416),s=r(12825),l=r(77155),c=r(62008),u=r(6171),d=r(28755),p=r(19981),h=r(11437);async function f(e,t){let{blockNumber:r,blockTag:f,key:w,name:m,gatewayUrls:g,strict:b}=t,{chain:y}=e,A=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!y)throw Error("client chain not configured. universalResolverAddress is required.");return(0,a.M)({blockNumber:r,chain:y,contract:"ensUniversalResolver"})})(),v=y?.ensTlds;if(v&&!v.some(e=>m.endsWith(e)))return null;try{let t={address:A,abi:n.Ag,args:[(0,s.nj)((0,d.F)(m)),(0,o.p)({abi:n.SJ,functionName:"text",args:[(0,u.k)(m),w]}),g??[c.J]],functionName:"resolveWithGateways",blockNumber:r,blockTag:f},a=(0,p.T)(e,h.J,"readContract"),l=await a(t);if("0x"===l[0])return null;let b=(0,i.e)({abi:n.SJ,functionName:"text",data:l[0]});return""===b?null:b}catch(e){if(b)throw e;if((0,l.J)(e))return null;throw e}}},46074:(e,t,r)=>{r.d(t,{w:()=>i});var n=r(55746);function i(e,{errorInstance:t=Error("timed out"),timeout:r,signal:o}){return new Promise((i,a)=>{(async()=>{let s,l=new AbortController;try{r>0&&(s=setTimeout(()=>{o?l.abort():a(t)},r)),i(await e({signal:l?.signal||null}))}catch(e){if(l?.signal.aborted&&(0,n.zf)(e))return void a(t);a(e)}finally{clearTimeout(s)}})()})}},46120:(e,t,r)=>{r.d(t,{W:()=>n});let n=(0,r(14917).x)({id:43111,name:"Hemi",network:"Hemi",blockTime:12e3,nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.hemi.network/rpc"]}},blockExplorers:{default:{name:"blockscout",url:"https://explorer.hemi.xyz"}},testnet:!1})},47457:(e,t,r)=>{r.d(t,{O:()=>ej});var n,i="user-agent",o="function",a="object",s="string",l="undefined",c="browser",u="device",d="engine",p="result",h="name",f="type",w="vendor",m="version",g="architecture",b="major",y="model",A="console",v="mobile",C="tablet",x="smarttv",k="wearable",B="embedded",E="inapp",I="brands",P="formFactors",S="fullVersionList",M="platform",T="platformVersion",N="bitness",W="sec-ch-ua",F=W+"-full-version-list",U=W+"-arch",R=W+"-"+N,O=W+"-form-factors",D=W+"-"+v,Q=W+"-"+y,q=W+"-"+M,L=q+"-version",j=[I,S,v,y,M,T,g,P,N],J="Amazon",K="Apple",H="ASUS",G="BlackBerry",z="Google",V="Huawei",Y="Lenovo",Z="Honor",X="Microsoft",_="Motorola",$="Nvidia",ee="OnePlus",et="OPPO",er="Samsung",en="Sharp",ei="Sony",eo="Xiaomi",ea="Zebra",es="Chrome",el="Chromium",ec="Chromecast",eu="Edge",ed="Firefox",ep="Opera",eh="Facebook",ef="Sogou",ew="Mobile ",em=" Browser",eg="Windows",eb=typeof window!==l&&window.navigator?window.navigator:void 0,ey=eb&&eb.userAgentData?eb.userAgentData:void 0,eA=function(e,t){var r={},n=t;if(!ex(t))for(var i in n={},t)for(var o in t[i])n[o]=t[i][o].concat(n[o]?n[o]:[]);for(var a in e)r[a]=n[a]&&n[a].length%2==0?n[a].concat(e[a]):e[a];return r},ev=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},eC=function(e,t){if(typeof e===a&&e.length>0){for(var r in e)if(eE(t)==eE(e[r]))return!0;return!1}return!!ek(e)&&eE(t)==eE(e)},ex=function(e,t){for(var r in e)return/^(browser|cpu|device|engine|os)$/.test(r)||!!t&&ex(e[r])},ek=function(e){return typeof e===s},eB=function(e){if(e){for(var t=[],r=eP(e).split(","),n=0;n<r.length;n++)if(r[n].indexOf(";")>-1){var i=eT(r[n]).split(";v=");t[n]={brand:i[0],version:i[1]}}else t[n]=eT(r[n]);return t}},eE=function(e){return ek(e)?e.toLowerCase():e},eI=function(e){return ek(e)?eM(/[^\d\.]/g,e).split(".")[0]:void 0},eP=function(e){return ek(e)?eT(eM(/\\?\"/g,e),500):void 0},eS=function(e){for(var t in e)if(e.hasOwnProperty(t)){var r=e[t];typeof r==a&&2==r.length?this[r[0]]=r[1]:this[r]=void 0}return this},eM=function(e,t){return ek(t)?t.replace(e,""):t},eT=function(e,t){return e=eM(/^\s\s*/,String(e)),typeof t===l?e:e.substring(0,t)},eN=function(e,t){if(e&&t)for(var r,n,i,s,l,c,u=0;u<t.length&&!l;){var d=t[u],p=t[u+1];for(r=n=0;r<d.length&&!l&&d[r];)if(l=d[r++].exec(e))for(i=0;i<p.length;i++)c=l[++n],typeof(s=p[i])===a&&s.length>0?2===s.length?typeof s[1]==o?this[s[0]]=s[1].call(this,c):this[s[0]]=s[1]:s.length>=3&&(typeof s[1]!==o||s[1].exec&&s[1].test?3==s.length?this[s[0]]=c?c.replace(s[1],s[2]):void 0:4==s.length?this[s[0]]=c?s[3].call(this,c.replace(s[1],s[2])):void 0:s.length>4&&(this[s[0]]=c?s[3].apply(this,[c.replace(s[1],s[2])].concat(s.slice(4))):void 0):s.length>3?this[s[0]]=c?s[1].apply(this,s.slice(2)):void 0:this[s[0]]=c?s[1].call(this,c,s[2]):void 0):this[s]=c||void 0;u+=2}},eW=function(e,t){for(var r in t)if(typeof t[r]===a&&t[r].length>0){for(var n=0;n<t[r].length;n++)if(eC(t[r][n],e))return"?"===r?void 0:r}else if(eC(t[r],e))return"?"===r?void 0:r;return t.hasOwnProperty("*")?t["*"]:e},eF={ME:"4.90","NT 3.51":"3.51","NT 4.0":"4.0",2e3:["5.0","5.01"],XP:["5.1","5.2"],Vista:"6.0",7:"6.1",8:"6.2","8.1":"6.3",10:["6.4","10.0"],NT:""},eU={embedded:"Automotive",mobile:"Mobile",tablet:["Tablet","EInk"],smarttv:"TV",wearable:"Watch",xr:["VR","XR"],"?":["Desktop","Unknown"],"*":void 0},eR={Chrome:"Google Chrome",Edge:"Microsoft Edge","Edge WebView2":"Microsoft Edge WebView2","Chrome WebView":"Android WebView","Chrome Headless":"HeadlessChrome","Huawei Browser":"HuaweiBrowser","MIUI Browser":"Miui Browser","Opera Mobi":"OperaMobile",Yandex:"YaBrowser"},eO={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[m,[h,ew+"Chrome"]],[/webview.+edge\/([\w\.]+)/i],[m,[h,eu+" WebView"],[f,E]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[m,[h,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[h,m],[/opios[\/ ]+([\w\.]+)/i],[m,[h,ep+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[m,[h,ep+" GX"]],[/\bopr\/([\w\.]+)/i],[m,[h,ep]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[m,[h,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[m,[h,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,/(brave)(?: chrome)?\/([\d\.]+)/i,/(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,/(qwant)(?:ios|mobile)\/([\d\.]+)/i,/(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i],[h,m],[/quark(?:pc)?\/([-\w\.]+)/i],[m,[h,"Quark"]],[/\bddg\/([\w\.]+)/i],[m,[h,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb| ucpc)[\/ ]?([\w\.]+)/i],[m,[h,"UCBrowser"]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[m,[h,"WeChat"]],[/konqueror\/([\w\.]+)/i],[m,[h,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[m,[h,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[m,[h,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[m,[h,"Smart "+Y+em]],[/(av(?:ast|g|ira))\/([\w\.]+)/i],[[h,/(.+)/,"$1 Secure"+em],m],[/norton\/([\w\.]+)/i],[m,[h,"Norton Private"+em]],[/\bfocus\/([\w\.]+)/i],[m,[h,ed+" Focus"]],[/ mms\/([\w\.]+)$/i],[m,[h,ep+" Neon"]],[/ opt\/([\w\.]+)$/i],[m,[h,ep+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[m,[h,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[m,[h,"Dolphin"]],[/coast\/([\w\.]+)/i],[m,[h,ep+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[m,[h,"MIUI"+em]],[/fxios\/([\w\.-]+)/i],[m,[h,ew+ed]],[/\bqihoobrowser\/?([\w\.]*)/i],[m,[h,"360"]],[/\b(qq)\/([\w\.]+)/i],[[h,/(.+)/,"$1Browser"],m],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[h,/(.+)/,"$1"+em],m],[/ HBPC\/([\w\.]+)/],[m,[h,V+em]],[/samsungbrowser\/([\w\.]+)/i],[m,[h,er+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[m,[h,ef+" Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[h,ef+" Mobile"],m],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[h,m],[/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],[h],[/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],[m,h],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[h,eh],m,[f,E]],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/(daum)apps[\/ ]([\w\.]+)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(bing)(?:web|sapphire)\/([\w\.]+)/i,/(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i],[h,m,[f,E]],[/\bgsa\/([\w\.]+) .*safari\//i],[m,[h,"GSA"],[f,E]],[/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],[m,[h,"TikTok"],[f,E]],[/\[(linkedin)app\]/i],[h,[f,E]],[/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],[[h,/(.+)/,"Zalo"],m,[f,E]],[/(chromium)[\/ ]([-\w\.]+)/i],[h,m],[/ome-(lighthouse)$/i],[h,[f,"fetcher"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[m,[h,es+" Headless"]],[/wv\).+chrome\/([\w\.]+).+edgw\//i],[m,[h,eu+" WebView2"],[f,E]],[/; wv\).+(chrome)\/([\w\.]+)/i],[[h,es+" WebView"],m,[f,E]],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[m,[h,"Android"+em]],[/chrome\/([\w\.]+) mobile/i],[m,[h,ew+"Chrome"]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[h,m],[/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],[m,[h,ew+"Safari"]],[/iphone .*mobile(?:\/\w+ | ?)safari/i],[[h,ew+"Safari"]],[/version\/([\w\.\,]+) .*(safari)/i],[m,h],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[h,[m,"1"]],[/(webkit|khtml)\/([\w\.]+)/i],[h,m],[/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],[[h,ew+ed],m],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[h,"Netscape"],m],[/(wolvic|librewolf)\/([\w\.]+)/i],[h,m],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[m,[h,ed+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,/(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/\b(links) \(([\w\.]+)/i],[h,[m,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[h,[m,/[^\d\.]+./,""]]],cpu:[[/\b((amd|x|x86[-_]?|wow|win)64)\b/i],[[g,"amd64"]],[/(ia32(?=;))/i,/\b((i[346]|x)86)(pc)?\b/i],[[g,"ia32"]],[/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],[[g,"arm64"]],[/\b(arm(v[67])?ht?n?[fl]p?)\b/i],[[g,"armhf"]],[/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],[[g,"arm"]],[/ sun4\w[;\)]/i],[[g,"sparc"]],[/\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,/((ppc|powerpc)(64)?)( mac|;|\))/i,/(?:osf1|[freopnt]{3,4}bsd) (alpha)/i],[[g,/ower/,"",eE]],[/mc680.0/i],[[g,"68k"]],[/winnt.+\[axp/i],[[g,"alpha"]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[y,[w,er],[f,C]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,/sec-(sgh\w+)/i],[y,[w,er],[f,v]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],[y,[w,K],[f,v]],[/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i,/\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],[y,[w,K],[f,C]],[/(macintosh);/i],[y,[w,K]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[y,[w,en],[f,v]],[/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],[y,[w,Z],[f,C]],[/honor([-\w ]+)[;\)]/i],[y,[w,Z],[f,v]],[/\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i],[y,[w,V],[f,C]],[/(?:huawei) ?([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],[y,[w,V],[f,v]],[/oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,/\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i],[[y,/_/g," "],[w,eo],[f,C]],[/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,/; ([\w ]+) miui\/v?\d/i],[[y,/_/g," "],[w,eo],[f,v]],[/droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[y,[w,ee],[f,v]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[y,[w,et],[f,v]],[/\b(opd2(\d{3}a?))(?: bui|\))/i],[y,[w,eW,{OnePlus:["203","304","403","404","413","415"],"*":et}],[f,C]],[/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],[y,[w,"BLU"],[f,v]],[/; vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[y,[w,"Vivo"],[f,v]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[y,[w,"Realme"],[f,v]],[/(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,/lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i],[y,[w,Y],[f,C]],[/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],[y,[w,Y],[f,v]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,/((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i],[y,[w,_],[f,v]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[y,[w,_],[f,C]],[/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[y,[w,"LG"],[f,C]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,/\blg-?([\d\w]+) bui/i],[y,[w,"LG"],[f,v]],[/(nokia) (t[12][01])/i],[w,y,[f,C]],[/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i,/nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],[[y,/_/g," "],[f,v],[w,"Nokia"]],[/(pixel (c|tablet))\b/i],[y,[w,z],[f,C]],[/droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i],[y,[w,z],[f,v]],[/(google) (pixelbook( go)?)/i],[w,y],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[y,[w,ei],[f,v]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[y,"Xperia Tablet"],[w,ei],[f,C]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[y,[w,J],[f,C]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[y,/(.+)/g,"Fire Phone $1"],[w,J],[f,v]],[/(playbook);[-\w\),; ]+(rim)/i],[y,w,[f,C]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/(?:blackberry|\(bb10;) (\w+)/i],[y,[w,G],[f,v]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[y,[w,H],[f,C]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[y,[w,H],[f,v]],[/(nexus 9)/i],[y,[w,"HTC"],[f,C]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[w,[y,/_/g," "],[f,v]],[/tcl (xess p17aa)/i,/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i],[y,[w,"TCL"],[f,C]],[/droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i],[y,[w,"TCL"],[f,v]],[/(itel) ((\w+))/i],[[w,eE],y,[f,eW,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[y,[w,"Acer"],[f,C]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[y,[w,"Meizu"],[f,v]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[y,[w,"Ulefone"],[f,v]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[y,[w,"Energizer"],[f,v]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[y,[w,"Cat"],[f,v]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[y,[w,"Smartfren"],[f,v]],[/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],[y,[w,"Nothing"],[f,v]],[/; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,/archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i],[y,[w,"Archos"],[f,C]],[/archos ([\w ]+)( b|\))/i,/; (ac[3-6]\d\w{2,8})( b|\))/i],[y,[w,"Archos"],[f,v]],[/blackview ([-\w ]+)( b|\))/i,/; (bv\d{4}[-\w ]*)( b|\))/i],[y,[w,"Blackview"],[f,v]],[/; (n159v)/i],[y,[w,"HMD"],[f,v]],[/((revvl[ \w\+]+|tm(?:rv|af)\w*[45]g(?:tb)?))( b|\))/i],[y,[f,function(e,t){return t.test.test(e)?t.ifTrue:t.ifFalse},{test:/ta?b/i,ifTrue:C,ifFalse:v}],[w,"T-Mobile"]],[/(imo) (tab \w+)/i,/(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],[w,y,[f,C]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (blu|coolpad|cubot|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([-\w\+ ]+?)(?: bui|\)|; r)/i,/(hp) ([\w ]+\w)/i,/(microsoft); (lumia[\w ]+)/i,/(oppo) ?([\w ]+) bui/i,/(hisense) ([ehv][\w ]+)\)/i,/droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i],[w,y,[f,v]],[/(kobo)\s(ereader|touch)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i],[w,y,[f,C]],[/(surface duo)/i],[y,[w,X],[f,C]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[y,[w,"Fairphone"],[f,v]],[/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],[y,[w,$],[f,C]],[/(sprint) (\w+)/i],[w,y,[f,v]],[/(kin\.[onetw]{3})/i],[[y,/\./g," "],[w,X],[f,v]],[/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[y,[w,ea],[f,C]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[y,[w,ea],[f,v]],[/(philips)[\w ]+tv/i,/smart-tv.+(samsung)/i],[w,[f,x]],[/hbbtv.+maple;(\d+)/i],[[y,/^/,"SmartTV"],[w,er],[f,x]],[/(vizio)(?: |.+model\/)(\w+-\w+)/i,/tcast.+(lg)e?. ([-\w]+)/i],[w,y,[f,x]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[w,"LG"],[f,x]],[/(apple) ?tv/i],[w,[y,K+" TV"],[f,x]],[/crkey.*devicetype\/chromecast/i],[[y,ec+" Third Generation"],[w,z],[f,x]],[/crkey.*devicetype\/([^/]*)/i],[[y,/^/,"Chromecast "],[w,z],[f,x]],[/fuchsia.*crkey/i],[[y,ec+" Nest Hub"],[w,z],[f,x]],[/crkey/i],[[y,ec],[w,z],[f,x]],[/(portaltv)/i],[y,[w,eh],[f,x]],[/droid.+aft(\w+)( bui|\))/i],[y,[w,J],[f,x]],[/(shield \w+ tv)/i],[y,[w,$],[f,x]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[y,[w,en],[f,x]],[/(bravia[\w ]+)( bui|\))/i],[y,[w,ei],[f,x]],[/(mi(tv|box)-?\w+) bui/i],[y,[w,eo],[f,x]],[/Hbbtv.*(technisat) (.*);/i],[w,y,[f,x]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[w,/.+\/(\w+)/,"$1",eW,{LG:"lge"}],[y,eT],[f,x]],[/(playstation \w+)/i],[y,[w,ei],[f,A]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[y,[w,X],[f,A]],[/(ouya)/i,/(nintendo) (\w+)/i,/(retroid) (pocket ([^\)]+))/i,/(valve).+(steam deck)/i,/droid.+; ((shield|rgcube|gr0006))( bui|\))/i],[[w,eW,{Nvidia:"Shield",Anbernic:"RGCUBE",Logitech:"GR0006"}],y,[f,A]],[/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],[y,[w,er],[f,k]],[/((pebble))app/i,/(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],[w,y,[f,k]],[/(ow(?:19|20)?we?[1-3]{1,3})/i],[y,[w,et],[f,k]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[y,[w,K],[f,k]],[/(opwwe\d{3})/i],[y,[w,ee],[f,k]],[/(moto 360)/i],[y,[w,_],[f,k]],[/(smartwatch 3)/i],[y,[w,ei],[f,k]],[/(g watch r)/i],[y,[w,"LG"],[f,k]],[/droid.+; (wt63?0{2,3})\)/i],[y,[w,ea],[f,k]],[/droid.+; (glass) \d/i],[y,[w,z],[f,"xr"]],[/(pico) ([\w ]+) os\d/i],[w,y,[f,"xr"]],[/(quest( \d| pro)?s?).+vr/i],[y,[w,eh],[f,"xr"]],[/mobile vr; rv.+firefox/i],[[f,"xr"]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[w,[f,B]],[/(aeobc)\b/i],[y,[w,J],[f,B]],[/(homepod).+mac os/i],[y,[w,K],[f,B]],[/windows iot/i],[[f,B]],[/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],[y,[f,x]],[/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],[[f,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],[y,[f,eW,{mobile:"Mobile",xr:"VR","*":C}]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[f,C]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[f,v]],[/droid .+?; ([\w\. -]+)( bui|\))/i],[y,[w,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[m,[h,eu+"HTML"]],[/(arkweb)\/([\w\.]+)/i],[h,m],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[m,[h,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[h,m],[/ladybird\//i],[[h,"LibWeb"]],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[m,h]],os:[[/(windows nt) (6\.[23]); arm/i],[[h,/N/,"R"],[m,eW,eF]],[/(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,/(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i],[h,m],[/windows nt ?([\d\.\)]*)(?!.+xbox)/i,/\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],[[m,/(;|\))/g,"",eW,eF],[h,eg]],[/(windows ce)\/?([\d\.]*)/i],[h,m],[/[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,/\btvos ?([\w\.]+)/i,/cfnetwork\/.+darwin/i],[[m,/_/g,"."],[h,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],[[h,"macOS"],[m,/_/g,"."]],[/android ([\d\.]+).*crkey/i],[m,[h,ec+" Android"]],[/fuchsia.*crkey\/([\d\.]+)/i],[m,[h,ec+" Fuchsia"]],[/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],[m,[h,ec+" SmartSpeaker"]],[/linux.*crkey\/([\d\.]+)/i],[m,[h,ec+" Linux"]],[/crkey\/([\d\.]+)/i],[m,[h,ec]],[/droid ([\w\.]+)\b.+(android[- ]x86)/i],[m,h],[/(ubuntu) ([\w\.]+) like android/i],[[h,/(.+)/,"$1 Touch"],m],[/(harmonyos)[\/ ]?([\d\.]*)/i,/(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i],[h,m],[/\(bb(10);/i],[m,[h,G]],[/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],[m,[h,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i],[m,[h,ed+" OS"]],[/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i,/webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],[m,[h,"webOS"]],[/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],[[m,eW,{25:"120",24:"108",23:"94",22:"87",6:"79",5:"68",4:"53",3:"38",2:"538",1:"537","*":"TV"}],[h,"webOS"]],[/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],[m,[h,"watchOS"]],[/cros [\w]+(?:\)| ([\w\.]+)\b)/i],[m,[h,"Chrome OS"]],[/kepler ([\w\.]+); (aft|aeo)/i],[m,[h,"Vega OS"]],[/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) (\w+)/i,/(xbox); +xbox ([^\);]+)/i,/(pico) .+os([\w\.]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/linux.+(mint)[\/\(\) ]?([\w\.]*)/i,/(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/\b(aix)[; ]([1-9\.]{0,4})/i,/(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) ?(r\d)?/i],[h,m],[/(sunos) ?([\d\.]*)/i],[[h,"Solaris"],m],[/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[h,m]]},eD=(n={init:{},isIgnore:{},isIgnoreRgx:{},toString:{}},eS.call(n.init,[[c,[h,m,b,f]],["cpu",[g]],[u,[f,y,w]],[d,[h,m]],["os",[h,m]]]),eS.call(n.isIgnore,[[c,[m,b]],[d,[m]],["os",[m]]]),eS.call(n.isIgnoreRgx,[[c,/ ?browser$/i],["os",/ ?os$/i]]),eS.call(n.toString,[[c,[h,m]],["cpu",[g]],[u,[w,y]],[d,[h,m]],["os",[h,m]]]),n),eQ=function(e,t){var r=eD.init[t],n=eD.isIgnore[t]||0,i=eD.isIgnoreRgx[t]||0,o=eD.toString[t]||0;function a(){eS.call(this,r)}return a.prototype.getItem=function(){return e},a.prototype.withClientHints=function(){return ey?ey.getHighEntropyValues(j).then(function(t){return e.setCH(new eq(t,!1)).parseCH().get()}):e.parseCH().get()},a.prototype.withFeatureCheck=function(){return e.detectFeature().get()},t!=p&&(a.prototype.is=function(e){var t=!1;for(var r in this)if(this.hasOwnProperty(r)&&!eC(n,r)&&eE(i?eM(i,this[r]):this[r])==eE(i?eM(i,e):e)){if(t=!0,e!=l)break}else if(e==l&&t){t=!t;break}return t},a.prototype.toString=function(){var e="";for(var t in o)typeof this[o[t]]!==l&&(e+=(e?" ":"")+this[o[t]]);return e||l}),a.prototype.then=function(e){var t=this,r=function(){for(var e in t)t.hasOwnProperty(e)&&(this[e]=t[e])};r.prototype={is:a.prototype.is,toString:a.prototype.toString,withClientHints:a.prototype.withClientHints,withFeatureCheck:a.prototype.withFeatureCheck};var n=new r;return e(n),n},new a};function eq(e,t){if(e=e||{},eS.call(this,j),t)eS.call(this,[[I,eB(e[W])],[S,eB(e[F])],[v,/\?1/.test(e[D])],[y,eP(e[Q])],[M,eP(e[q])],[T,eP(e[L])],[g,eP(e[U])],[P,eB(e[O])],[N,eP(e[R])]]);else for(var r in e)this.hasOwnProperty(r)&&typeof e[r]!==l&&(this[r]=e[r])}function eL(e,t,r,n){return eS.call(this,[["itemType",e],["ua",t],["uaCH",n],["rgxMap",r],["data",eQ(this,e)]]),this}function ej(e,t,r){if(typeof e===a?(ex(e,!0)?(typeof t===a&&(r=t),t=e):(r=e,t=void 0),e=void 0):typeof e!==s||ex(t,!0)||(r=t,t=void 0),r)if(typeof r.append===o){var n={};r.forEach(function(e,t){n[String(t).toLowerCase()]=e}),r=n}else{var l={};for(var h in r)r.hasOwnProperty(h)&&(l[String(h).toLowerCase()]=r[h]);r=l}if(!(this instanceof ej))return new ej(e,t,r).getResult();var f=typeof e===s?e:r&&r[i]?r[i]:eb&&eb.userAgent?eb.userAgent:"",w=new eq(r,!0),m=eO,g=function(e){return e==p?function(){return new eL(e,f,m,w).set("ua",f).set(c,this.getBrowser()).set("cpu",this.getCPU()).set(u,this.getDevice()).set(d,this.getEngine()).set("os",this.getOS()).get()}:function(){return new eL(e,f,m[e],w).parseUA().get()}};return eS.call(this,[["getBrowser",g(c)],["getCPU",g("cpu")],["getDevice",g(u)],["getEngine",g(d)],["getOS",g("os")],["getResult",g(p)],["getUA",function(){return f}],["setUA",function(e){return ek(e)&&(f=eT(e,500)),this}],["useExtension",function(e){return e&&(m=eA(m,e)),this}]]).setUA(f).useExtension(t),this}eL.prototype.get=function(e){return e?this.data.hasOwnProperty(e)?this.data[e]:void 0:this.data},eL.prototype.set=function(e,t){return this.data[e]=t,this},eL.prototype.setCH=function(e){return this.uaCH=e,this},eL.prototype.detectFeature=function(){if(eb&&eb.userAgent==this.ua)switch(this.itemType){case c:eb.brave&&typeof eb.brave.isBrave==o&&this.set(h,"Brave");break;case u:!this.get(f)&&ey&&ey[v]&&this.set(f,v),"Macintosh"==this.get(y)&&eb&&typeof eb.standalone!==l&&eb.maxTouchPoints&&eb.maxTouchPoints>2&&this.set(y,"iPad").set(f,C);break;case"os":!this.get(h)&&ey&&ey[M]&&this.set(h,ey[M]);break;case p:var e=this.data,t=function(t){return e[t].getItem().detectFeature().get()};this.set(c,t(c)).set("cpu",t("cpu")).set(u,t(u)).set(d,t(d)).set("os",t("os"))}return this},eL.prototype.parseUA=function(){switch(this.itemType!=p&&eN.call(this.data,this.ua,this.rgxMap),this.itemType){case c:this.set(b,eI(this.get(m)));break;case"os":if("iOS"==this.get(h)&&this.get(m)&&/^1[89][^\d]/.exec(this.get(m))){var e=/\) Version\/((\d+)[\d\.]*)/.exec(this.ua);e&&parseInt(e[2],10)>=26&&this.set(m,e[1])}}return this},eL.prototype.parseCH=function(){var e=this.uaCH,t=this.rgxMap;switch(this.itemType){case c:case d:var r,n=e[S]||e[I];if(n)for(var i=0;i<n.length;i++){var o=n[i].brand||n[i],a=n[i].version;this.itemType==c&&!/not.a.brand/i.test(o)&&(!r||/Chrom/.test(r)&&o!=el||r==eu&&/WebView2/.test(o))&&(o=eW(o,eR),(r=this.get(h))&&!/Chrom/.test(r)&&/Chrom/.test(o)||this.set(h,o).set(m,a).set(b,eI(a)),r=o),this.itemType==d&&o==el&&this.set(m,a)}break;case"cpu":var s=e[g];s&&(s&&"64"==e[N]&&(s+="64"),eN.call(this.data,s+";",t));break;case u:if(e[v]&&this.set(f,v),e[y]&&(this.set(y,e[y]),!this.get(f)||!this.get(w))){var l,A={};eN.call(A,"droid 9; "+e[y]+")",t),!this.get(f)&&A.type&&this.set(f,A.type),!this.get(w)&&A.vendor&&this.set(w,A.vendor)}if(e[P]){if("string"!=typeof e[P])for(var C=0;!l&&C<e[P].length;)l=eW(e[P][C++],eU);else l=eW(e[P],eU);this.set(f,l)}break;case"os":var x=e[M];if(x){var k=e[T];x==eg&&(k=parseInt(eI(k),10)>=13?"11":"10"),this.set(h,x).set(m,k)}this.get(h)==eg&&"Xbox"==e[y]&&this.set(h,"Xbox").set(m,void 0);break;case p:var B=this.data,E=function(t){return B[t].getItem().setCH(e).parseCH().get()};this.set(c,E(c)).set("cpu",E("cpu")).set(u,E(u)).set(d,E(d)).set("os",E("os"))}return this},ej.VERSION="2.0.10",ej.BROWSER=ev([h,m,b,f]),ej.CPU=ev([g]),ej.DEVICE=ev([y,w,f,A,v,x,C,k,B]),ej.ENGINE=ej.OS=ev([h,m])},50645:(e,t,r)=>{r.d(t,{$:()=>r5});var n=r(3390),i=r(23957),o=r(84256),a=r(95568),s=r(79416),l=r(26943),c=r(27294),u=r(12825),d=r(77155),p=r(62008),h=r(6171),f=r(28755),w=r(19981),m=r(11437);async function g(e,t){let{blockNumber:r,blockTag:g,coinType:b,name:y,gatewayUrls:A,strict:v}=t,{chain:C}=e,x=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!C)throw Error("client chain not configured. universalResolverAddress is required.");return(0,s.M)({blockNumber:r,chain:C,contract:"ensUniversalResolver"})})(),k=C?.ensTlds;if(k&&!k.some(e=>y.endsWith(e)))return null;let B=null!=b?[(0,h.k)(y),BigInt(b)]:[(0,h.k)(y)];try{let t=(0,o.p)({abi:n.Rm,functionName:"addr",args:B}),s={address:x,abi:n.Ag,functionName:"resolveWithGateways",args:[(0,u.nj)((0,f.F)(y)),t,A??[p.J]],blockNumber:r,blockTag:g},d=(0,w.T)(e,m.J,"readContract"),h=await d(s);if("0x"===h[0])return null;let v=function({coinType:e,data:t,args:r}){try{return(0,i.e)({abi:n.Rm,args:r,functionName:"addr",data:t})}catch(n){if(null==e)throw n;let r=(0,c.B)(t);if(20===(0,l.E)(r))return(0,a.b)(r);throw n}}({coinType:b,data:h[0],args:B});if("0x"===v||"0x00"===(0,c.B)(v))return null;return v}catch(e){if(v)throw e;if((0,d.J)(e))return null;throw e}}var b=r(63940),y=r(98533);async function A(e,t){let{blockNumber:r,blockTag:n,name:i}=t,{chain:o}=e,a=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!o)throw Error("client chain not configured. universalResolverAddress is required.");return(0,s.M)({blockNumber:r,chain:o,contract:"ensUniversalResolver"})})(),l=o?.ensTlds;if(l&&!l.some(e=>i.endsWith(e)))throw Error(`${i} is not a valid ENS TLD (${l?.join(", ")}) for chain "${o.name}" (id: ${o.id}).`);let[c]=await (0,w.T)(e,m.J,"readContract")({address:a,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"},{type:"uint256"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,u.nj)((0,f.F)(i))],blockNumber:r,blockTag:n});return c}var v=r(45057),C=r(14708),x=r(46488),k=r(29879),B=r(71373),E=r(87332),I=r(29334),P=r(81175);async function S(e,t){let{account:r=e.account,blockNumber:n,blockTag:i="latest",blobs:o,data:a,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:d,maxPriorityFeePerGas:p,to:h,value:f,...w}=t,m=r?(0,x.J)(r):void 0;try{(0,P.c)(t);let r="bigint"==typeof n?(0,u.cK)(n):void 0,g=e.chain?.formatters?.transactionRequest?.format,b=(g||I.Bv)({...(0,E.o)(w,{format:g}),account:m,blobs:o,data:a,gas:s,gasPrice:l,maxFeePerBlobGas:c,maxFeePerGas:d,maxPriorityFeePerGas:p,to:h,value:f},"createAccessList"),y=await e.request({method:"eth_createAccessList",params:[b,r||i]});if(y.error)throw new k.C(y.error,{details:y.error});return{accessList:y.accessList,gasUsed:BigInt(y.gasUsed)}}catch(r){throw(0,B.d)(r,{...t,account:m,chain:e.chain})}}function M(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:n,status:i,transport:o})=>{"success"===i&&t===e&&(r[n]=o.request)}),t=>r[t]||e.request}async function T(e){let t=M(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}var N=r(52909);class W extends k.C{constructor(e){super(`Filter type "${e}" is not supported.`,{name:"FilterTypeNotSupportedError"})}}var F=r(18003),U=r(43313),R=r(99504),O=r(16338),D=r(52782),Q=r(88203);let q="/docs/contract/encodeEventTopics";function L(e){let{abi:t,eventName:r,args:n}=e,i=t[0];if(r){let e=(0,Q.iY)({abi:t,name:r});if(!e)throw new N.M_(r,{docsPath:q});i=e}if("event"!==i.type)throw new N.M_(void 0,{docsPath:q});let o=[];if(n&&"inputs"in i){let e=i.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(n)?n:Object.values(n).length>0?e?.map(e=>n[e.name])??[]:[];t.length>0&&(o=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((n,i)=>j({param:e,value:t[r][i]})):void 0!==t[r]&&null!==t[r]?j({param:e,value:t[r]}):null)??[])}if(i.anonymous)return o;let a=(0,D.B)(i);return[(0,R.h)(a),...o]}function j({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,U.S)((0,F.ZJ)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new W(e.type);return(0,O.h)([e],[t])}async function J(e,t){let{address:r,abi:n,args:i,eventName:o,fromBlock:a,strict:s,toBlock:l}=t,c=M(e,{method:"eth_newFilter"}),d=o?L({abi:n,args:i,eventName:o}):void 0,p=await e.request({method:"eth_newFilter",params:[{address:r,fromBlock:"bigint"==typeof a?(0,u.cK)(a):a,toBlock:"bigint"==typeof l?(0,u.cK)(l):l,topics:d}]});return{abi:n,args:i,eventName:o,id:p,request:c(p),strict:!!s,type:"event"}}async function K(e,{address:t,args:r,event:n,events:i,fromBlock:o,strict:a,toBlock:s}={}){let l=i??(n?[n]:void 0),c=M(e,{method:"eth_newFilter"}),d=[];l&&(d=[l.flatMap(e=>L({abi:[e],eventName:e.name,args:r}))],n&&(d=d[0]));let p=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof o?(0,u.cK)(o):o,toBlock:"bigint"==typeof s?(0,u.cK)(s):s,...d.length?{topics:d}:{}}]});return{abi:l,args:r,eventName:n?n.name:void 0,fromBlock:o,id:p,request:c(p),strict:!!a,toBlock:s,type:"event"}}async function H(e){let t=M(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var G=r(19695),z=r(62607);async function V(e,t){let{abi:r,address:n,args:i,functionName:a,dataSuffix:s="string"==typeof e.dataSuffix?e.dataSuffix:e.dataSuffix?.value,...l}=t,c=(0,o.p)({abi:r,args:i,functionName:a});try{return await (0,w.T)(e,z.Q,"estimateGas")({data:`${c}${s?s.replace("0x",""):""}`,to:n,...l})}catch(t){let e=l.account?(0,x.J)(l.account):void 0;throw(0,G.j)(t,{abi:r,address:n,args:i,docsPath:"/docs/contract/estimateContractGas",functionName:a,sender:e?.address})}}var Y=r(43580),Z=r(13495),X=r(82554),_=r(1467);async function $(e){return BigInt(await e.request({method:"eth_blobBaseFee"}))}var ee=r(17746),et=r(63630),er=r(21922),en=r(43011);async function ei(e,{blockHash:t,blockNumber:r,blockTag:n=e.experimental_blockTag??"latest"}={}){let i=void 0!==r?(0,u.cK)(r):void 0,o=await e.request({method:"eth_getBlockReceipts",params:[t||i||n]},{dedupe:!!(t||i)});if(!o)throw new er.l({blockHash:t,blockNumber:r});let a=e.chain?.formatters?.transactionReceipt?.format||en.uL;return o.map(e=>a(e,"getBlockReceipts"))}var eo=r(56466);async function ea(e,{blockHash:t,blockNumber:r,blockTag:n="latest"}={}){let i,o=void 0!==r?(0,u.cK)(r):void 0;return i=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]},{dedupe:!0}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[o||n]},{dedupe:!!o}),(0,eo.ME)(i)}var es=r(89207),el=r(28604),ec=r(8212),eu=r(57335),ed=r(17291),ep=r(59683);let eh="/docs/contract/decodeEventLog";function ef(e){let{abi:t,data:r,strict:n,topics:i}=e,o=n??!0,[a,...s]=i;if(!a)throw new N._z({docsPath:eh});let c=t.find(e=>"event"===e.type&&a===(0,R.h)((0,D.B)(e)));if(!(c&&"name"in c)||"event"!==c.type)throw new N.kE(a,{docsPath:eh});let{name:u,inputs:d}=c,p=d?.some(e=>!("name"in e&&e.name)),h=p?[]:{},f=d.map((e,t)=>[e,t]).filter(([e])=>"indexed"in e&&e.indexed),w=[];for(let e=0;e<f.length;e++){let[t,r]=f[e],n=s[e];if(!n){if(o)throw new N.l3({abiItem:c,param:t});w.push([t,r]);continue}h[p?r:t.name||r]=function({param:e,value:t}){return"string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/)?t:((0,ep.n)([e],t)||[])[0]}({param:t,value:n})}let m=d.filter(e=>!("indexed"in e&&e.indexed)),g=o?m:[...w.map(([e])=>e),...m];if(g.length>0){if(r&&"0x"!==r)try{let e=(0,ep.n)(g,r);if(e){let t=0;if(!o)for(let[r,n]of w)h[p?n:r.name||n]=e[t++];if(p)for(let r=0;r<d.length;r++)void 0===h[r]&&t<e.length&&(h[r]=e[t++]);else for(let r=0;r<m.length;r++)h[m[r].name]=e[t++]}}catch(e){if(o){if(e instanceof N.Iy||e instanceof ed.SK)throw new N.fo({abiItem:c,data:r,params:g,size:(0,l.E)(r)});throw e}}else if(o)throw new N.fo({abiItem:c,data:"0x",params:g,size:0})}return{eventName:u,args:Object.values(h).length>0?h:void 0}}function ew(e){let{abi:t,args:r,logs:n,strict:i=!0}=e,o=(()=>{if(e.eventName)return Array.isArray(e.eventName)?e.eventName:[e.eventName]})(),a=t.filter(e=>"event"===e.type).map(e=>({abi:e,selector:(0,R.h)(e)}));return n.map(e=>{let t,n,s="string"==typeof e.blockNumber?(0,eu.e)(e):e,l=a.filter(e=>s.topics[0]===e.selector);if(0===l.length)return null;for(let e of l)try{t=ef({...s,abi:[e.abi],strict:!0}),n=e;break}catch{}if(!t&&!i){n=l[0];try{t=ef({data:s.data,topics:s.topics,abi:[n.abi],strict:!1})}catch{let e=n.abi.inputs?.some(e=>!("name"in e&&e.name));return{...s,args:e?[]:{},eventName:n.abi.name}}}return t&&n&&(!o||o.includes(t.eventName))&&function(e){let{args:t,inputs:r,matchArgs:n}=e;if(!n)return!0;if(!t)return!1;function i(e,t,r){try{if("address"===e.type)return(0,ec.h)(t,r);if("string"===e.type||"bytes"===e.type)return(0,U.S)((0,F.ZJ)(t))===r;return t===r}catch{return!1}}return Array.isArray(t)&&Array.isArray(n)?n.every((e,n)=>{if(null==e)return!0;let o=r[n];return!!o&&(Array.isArray(e)?e:[e]).some(e=>i(o,e,t[n]))}):!("object"!=typeof t||Array.isArray(t)||"object"!=typeof n||Array.isArray(n))&&Object.entries(n).every(([e,n])=>{if(null==n)return!0;let o=r.find(t=>t.name===e);return!!o&&(Array.isArray(n)?n:[n]).some(r=>i(o,r,t[e]))})}({args:t.args,inputs:n.abi.inputs,matchArgs:r})?{...t,...s}:null}).filter(Boolean)}async function em(e,{address:t,blockHash:r,fromBlock:n,toBlock:i,event:o,events:a,args:s,strict:l}={}){let c=a??(o?[o]:void 0),d=[];c&&(d=[c.flatMap(e=>L({abi:[e],eventName:e.name,args:a?void 0:s}))],o&&(d=d[0]));let p=(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:"bigint"==typeof n?(0,u.cK)(n):n,toBlock:"bigint"==typeof i?(0,u.cK)(i):i}]})).map(e=>(0,eu.e)(e));return c?ew({abi:c,args:s,logs:p,strict:l??!1}):p}async function eg(e,t){let{abi:r,address:n,args:i,blockHash:o,eventName:a,fromBlock:s,toBlock:l,strict:c}=t,u=a?(0,Q.iY)({abi:r,name:a}):void 0,d=u?void 0:r.filter(e=>"event"===e.type);return(0,w.T)(e,em,"getLogs")({address:n,args:i,blockHash:o,event:u,events:d,fromBlock:s,toBlock:l,strict:c})}var eb=r(22952);async function ey(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=await (0,el.Q)(e,{address:t,...void 0!==r?{blockNumber:r}:{blockTag:n}});if(i&&23===(0,l.E)(i)&&i.startsWith("0xef0100"))return(0,a.b)((0,eb.di)(i,3,23))}class eA extends k.C{constructor({address:e}){super(`No EIP-712 domain found on contract "${e}".`,{metaMessages:["Ensure that:",`- The contract is deployed at the address "${e}".`,"- `eip712Domain()` function exists on the contract.","- `eip712Domain()` function matches signature to ERC-5267 specification."],name:"Eip712DomainNotFoundError"})}}async function ev(e,t){let{address:r,factory:n,factoryData:i}=t;try{let[t,o,a,s,l,c,u]=await (0,w.T)(e,m.J,"readContract")({abi:eC,address:r,functionName:"eip712Domain",factory:n,factoryData:i});return{domain:{name:o,version:a,chainId:Number(s),verifyingContract:l,salt:c},extensions:u,fields:t}}catch(e){if("ContractFunctionExecutionError"===e.name&&"ContractFunctionZeroDataError"===e.cause.name)throw new eA({address:r});throw e}}let eC=[{inputs:[],name:"eip712Domain",outputs:[{name:"fields",type:"bytes1"},{name:"name",type:"string"},{name:"version",type:"string"},{name:"chainId",type:"uint256"},{name:"verifyingContract",type:"address"},{name:"salt",type:"bytes32"},{name:"extensions",type:"uint256[]"}],stateMutability:"view",type:"function"}];async function ex(e,{blockCount:t,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){var o;let a="bigint"==typeof r?(0,u.cK)(r):void 0;return{baseFeePerGas:(o=await e.request({method:"eth_feeHistory",params:[(0,u.cK)(t),a||n,i]},{dedupe:!!a})).baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:o.gasUsedRatio,oldestBlock:BigInt(o.oldestBlock),reward:o.reward?.map(e=>e.map(e=>BigInt(e)))}}async function ek(e,{filter:t}){let r="strict"in t&&t.strict,n=await t.request({method:"eth_getFilterChanges",params:[t.id]});if("string"==typeof n[0])return n;let i=n.map(e=>(0,eu.e)(e));return"abi"in t&&t.abi?ew({abi:t.abi,logs:i,strict:r}):i}async function eB(e,{filter:t}){let r=t.strict??!1,n=(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(e=>(0,eu.e)(e));return t.abi?ew({abi:t.abi,logs:n,strict:r}):n}var eE=r(73235),eI=r(85476);async function eP(e,{address:t,blockHash:r,blockNumber:n,blockTag:i="latest",requireCanonical:o,storageKeys:a}){let s=(0,eI.O)({blockHash:r,blockNumber:n,blockTag:i,requireCanonical:o});var l=await e.request({method:"eth_getProof",params:[t,a,s]});return{...l,balance:l.balance?BigInt(l.balance):void 0,nonce:l.nonce?(0,eo.ME)(l.nonce):void 0,storageProof:l.storageProof?l.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}var eS=r(31079);async function eM(e,{hash:t}){let r=await e.request({method:"eth_getRawTransactionByHash",params:[t]},{dedupe:!0});if(!r)throw new eS.Kz({hash:t});return r}async function eT(e,{address:t,blockHash:r,blockNumber:n,blockTag:i="latest",requireCanonical:o,slot:a}){let s=(0,eI.O)({blockHash:r,blockNumber:n,blockTag:i,requireCanonical:o});return await e.request({method:"eth_getStorageAt",params:[t,a,s]})}var eN=r(17015);async function eW(e,{hash:t,transactionReceipt:r}){let[n,i]=await Promise.all([(0,w.T)(e,et.G,"getBlockNumber")({}),t?(0,w.T)(e,eN.x,"getTransaction")({hash:t}):void 0]),o=r?.blockNumber||i?.blockNumber;return o?n-o+1n:0n}var eF=r(83002),eU=r(31241),eR=r(62684),eO=r(93354),eD=r(25800),eQ=r(84537),eq=r(42906),eL=r(30269),ej=r(32424),eJ=r(82970);async function eK(e,t){let{blockNumber:r,blockTag:n=e.experimental_blockTag??"latest",blocks:a,returnFullTransactions:s,traceTransfers:l,validation:c}=t;try{let t=[];for(let e of a){let r=e.blockOverrides?eO.J(e.blockOverrides):void 0,n=e.calls.map(e=>{let t=e.account?(0,x.J)(e.account):void 0,r=e.abi?(0,o.p)(e):e.data,n={...e,account:t,data:e.dataSuffix?(0,eq.xW)([r||"0x",e.dataSuffix]):r,from:e.from??t?.address};return(0,P.c)(n),(0,I.Bv)(n)}),i=e.stateOverrides?(0,eJ.yH)(e.stateOverrides):void 0;t.push({blockOverrides:r,calls:n,stateOverrides:i})}let d="bigint"==typeof r?(0,u.cK)(r):void 0;return(await e.request({method:"eth_simulateV1",params:[{blockStateCalls:t,returnFullTransactions:s,traceTransfers:l,validation:c},d||n]})).map((e,t)=>({...(0,ej.$)(e),calls:e.calls.map((e,r)=>{let{abi:n,args:o,functionName:s,to:l}=a[t].calls[r],c=e.error?.data??e.returnData,u=BigInt(e.gasUsed),d=e.logs?.map(e=>(0,eu.e)(e)),p="0x1"===e.status?"success":"failure",h=n&&"success"===p&&"0x"!==c?(0,i.e)({abi:n,data:c,functionName:s}):null,f=(()=>{let e;if("success"!==p&&("0x"===c?e=new N.O:c&&(e=new eD.$S({data:c})),e))return(0,G.j)(e,{abi:n??[],address:l??"0x",args:o,functionName:s??"<unknown>"})})();return{data:c,gasUsed:u,logs:d,status:p,..."success"===p?{result:h}:{error:f}}})}))}catch(t){let e=(0,eL.l)(t,{});if(e instanceof eQ.RM)throw t;throw e}}var eH=r(38527),eG=r(63864),ez=r(10964),eV=r(65030),eY=r(64230),eZ=r(95609),eX=r(7614),e_=r(14939);function e$(e,t){if(e4(e)>t)throw new tt({givenSize:e4(e),maxSize:t})}function e0(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:void 0}function e1(e,t={}){let{dir:r="left"}=t,n=e,i=0;for(let e=0;e<n.length-1;e++)if("0"===n["left"===r?e:n.length-e-1].toString())i++;else break;return"left"===r?n.slice(i):n.slice(0,n.length-i)}var e2=r(5005),e3=r(98544);let e6=new TextDecoder,e5=new TextEncoder;function e8(e,t={}){let{size:r}=t,n=e;r&&(e2.Sl(e,r),n=e_.M7(e,r));let i=n.slice(2);i.length%2&&(i=`0${i}`);let o=i.length/2,a=new Uint8Array(o);for(let e=0,t=0;e<o;e++){let r=e0(i.charCodeAt(t++)),n=e0(i.charCodeAt(t++));if(void 0===r||void 0===n)throw new eZ.C(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);a[e]=r<<4|n}return a}function e4(e){return e.length}function e9(e,t={}){let{size:r}=t;void 0!==r&&e$(e,r);let n=e_.uK(e,t);return e_.Ro(n,t)}function e7(e){return e1(e,{dir:"left"})}class te extends eZ.C{constructor(e){super(`Bytes value \`${e}\` is not a valid boolean.`,{metaMessages:["The bytes array must contain a single byte of either a `0` or `1` value."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.InvalidBytesBooleanError"})}}eZ.C;class tt extends eZ.C{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed \`${t}\` bytes. Given size: \`${e}\` bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeOverflowError"})}}class tr extends eZ.C{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset \`${e}\` is out-of-bounds (size: \`${r}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SliceOffsetOutOfBoundsError"})}}class tn extends eZ.C{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (\`${e}\`) exceeds padding size (\`${t}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Bytes.SizeExceedsPaddingSizeError"})}}function ti(e,t={}){var r;let{as:n="string"==typeof e?"Hex":"Bytes"}=t,i=(0,eX.lY)(e instanceof Uint8Array?e:"string"==typeof e?e8(e):(r=e)instanceof Uint8Array?r:new Uint8Array(r));return"Bytes"===n?i:e_.uK(i)}class to extends Map{constructor(e){super(),Object.defineProperty(this,"maxSize",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.maxSize=e}get(e){let t=super.get(e);return super.has(e)&&void 0!==t&&(this.delete(e),super.set(e,t)),t}set(e,t){if(super.set(e,t),this.maxSize&&this.size>this.maxSize){let e=this.keys().next().value;e&&this.delete(e)}return this}}let ta={checksum:new to(8192)}.checksum,ts=/^0x[a-fA-F0-9]{40}$/;function tl(e,t={}){let{strict:r=!0}=t;if(!ts.test(e))throw new td({address:e,cause:new tp});if(r){if(e.toLowerCase()===e)return;if(tc(e)!==e)throw new td({address:e,cause:new th})}}function tc(e){if(ta.has(e))return ta.get(e);tl(e,{strict:!1});let t=e.substring(2).toLowerCase(),r=ti(function(e,t={}){let{size:r}=t,n=e5.encode(e);return"number"==typeof r?(e$(n,r),function(e,t={}){let{dir:r,size:n=32}=t;if(0===n)return e;if(e.length>n)throw new tn({size:e.length,targetSize:n,type:"Bytes"});let i=new Uint8Array(n);for(let t=0;t<n;t++){let o="right"===r;i[o?t:n-t-1]=e[o?t:e.length-t-1]}return i}(n,{dir:"right",size:r})):n}(t),{as:"Bytes"}),n=t.split("");for(let e=0;e<40;e+=2)r[e>>1]>>4>=8&&n[e]&&(n[e]=n[e].toUpperCase()),(15&r[e>>1])>=8&&n[e+1]&&(n[e+1]=n[e+1].toUpperCase());let i=`0x${n.join("")}`;return ta.set(e,i),i}function tu(e,t={}){let{strict:r=!0}=t??{};try{return tl(e,{strict:r}),!0}catch{return!1}}class td extends eZ.C{constructor({address:e,cause:t}){super(`Address "${e}" is invalid.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidAddressError"})}}class tp extends eZ.C{constructor(){super("Address is not a 20 byte (40 hexadecimal character) value."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidInputError"})}}class th extends eZ.C{constructor(){super("Address does not match its checksum counterpart."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Address.InvalidChecksumError"})}}function tf(e){let t=!0,r="",n=0,i="",o=!1;for(let a=0;a<e.length;a++){let s=e[a];if(["(",")",","].includes(s)&&(t=!0),"("===s&&n++,")"===s&&n--,t){if(0===n){if(" "===s&&["event","function","error",""].includes(i))i="";else if(i+=s,")"===s){o=!0;break}continue}if(" "===s){","!==e[a-1]&&","!==r&&",("!==r&&(r="",t=!1);continue}i+=s,r+=s}}if(!o)throw new eZ.C("Unable to normalize signature.");return i}function tw(e,t={}){let{prepare:r=!0}=t,n=Array.isArray(e)||"string"==typeof e?function(e){let t;if("string"==typeof e)t=(0,eV.uT)(e);else{let r=(0,ez.e)(e),n=e.length;for(let i=0;i<n;i++){let n=e[i];if(!(0,eG.WL)(n)){t=(0,eV.uT)(n,r);break}}}if(!t)throw new eH.xo({signature:e});return t}(e):e;return{...n,...r?{hash:tb(n)}:{}}}function tm(e,t,r){let n,{args:i=[],prepare:o=!0}=r??{},a=e_.tf(t,{strict:!1}),s=e.filter(e=>a?"function"===e.type||"error"===e.type?tg(e)===e_.di(t,0,4):"event"===e.type&&tb(e)===t:"name"in e&&e.name===t);if(0===s.length)throw new tA({name:t});if(1===s.length)return{...s[0],...o?{hash:tb(s[0])}:{}};for(let e of s){if("inputs"in e){if(!i||0===i.length){if(!e.inputs||0===e.inputs.length)return{...e,...o?{hash:tb(e)}:{}};continue}if(e.inputs&&0!==e.inputs.length&&e.inputs.length===i.length&&i.every((t,r)=>{let n="inputs"in e&&e.inputs[r];return!!n&&function e(t,r){let n=typeof t,i=r.type;switch(i){case"address":return tu(t,{strict:!1});case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:if("tuple"===i&&"components"in r)return Object.values(r.components).every((r,n)=>e(Object.values(t)[n],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i))return"number"===n||"bigint"===n;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))return"string"===n||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:i.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,n)})){if(n&&"inputs"in n&&n.inputs){let t=function e(t,r,n){for(let i in t){let o=t[i],a=r[i];if("tuple"===o.type&&"tuple"===a.type&&"components"in o&&"components"in a)return e(o.components,a.components,n[i]);let s=[o.type,a.type];if(s.includes("address")&&s.includes("bytes20")||(s.includes("address")&&s.includes("string")||s.includes("address")&&s.includes("bytes"))&&tu(n[i],{strict:!1}))return s}}(e.inputs,n.inputs,i);if(t)throw new ty({abiItem:e,type:t[0]},{abiItem:n,type:t[1]})}n=e}}}let l=(()=>{if(n)return n;let[e,...t]=s;return{...e,overloads:t}})();if(!l)throw new tA({name:t});return{...l,...o?{hash:tb(l)}:{}}}function tg(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,r]=e;return tm(t,r)}return e[0]})();return e_.di(tb(t),0,4)}function tb(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,r]=e;return tm(t,r)}return e[0]})();return"string"!=typeof t&&"hash"in t&&t.hash?t.hash:ti(e_.sH(function(...e){let t=(()=>{if(Array.isArray(e[0])){let[t,r]=e;return tm(t,r)}return e[0]})();return tf("string"==typeof t?t:eY.B(t))}(t)))}class ty extends eZ.C{constructor(e,t){super("Found ambiguous types in overloaded ABI Items.",{metaMessages:[`\`${e.type}\` in \`${tf(eY.B(e.abiItem))}\`, and`,`\`${t.type}\` in \`${tf(eY.B(t.abiItem))}\``,"","These types encode differently and cannot be distinguished at runtime.","Remove one of the ambiguous items in the ABI."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItem.AmbiguityError"})}}class tA extends eZ.C{constructor({name:e,data:t,type:r="item"}){const n=e?` with name "${e}"`:t?` with data "${t}"`:"";super(`ABI ${r}${n} not found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiItem.NotFoundError"})}}eZ.C;var tv=r(49876),tC=r(60691);let tx=/^(.*)\[([0-9]*)\]$/,tk=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,tB=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/,tE=2n**256n-1n;function tI(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:n,encoded:i}=e[r];n?t+=32:t+=e_.Ej(i)}let r=[],n=[],i=0;for(let o=0;o<e.length;o++){let{dynamic:a,encoded:s}=e[o];a?(r.push(e_.oB(t+i,{size:32})),n.push(s),i+=e_.Ej(s)):r.push(s)}return e_.xW(...r,...n)}function tP(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}function tS(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(tS);let r=tP(e.type);return!!(r&&tS({...e,type:r[1]}))}let tM={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,positionReadCount:new Map,recursiveReadCount:0,recursiveReadLimit:1/0,assertReadLimit(){if(this.recursiveReadCount>=this.recursiveReadLimit)throw new tW({count:this.recursiveReadCount+1,limit:this.recursiveReadLimit})},assertPosition(e){if(e<0||e>this.bytes.length-1)throw new tN({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new tT({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},getReadCount(e){return this.positionReadCount.get(e||this.position)||0},incrementPosition(e){if(e<0)throw new tT({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){this.assertReadLimit(),this._touch();let e=this.inspectByte();return this.position++,e},readBytes(e,t){this.assertReadLimit(),this._touch();let r=this.inspectBytes(e);return this.position+=t??e,r},readUint8(){this.assertReadLimit(),this._touch();let e=this.inspectUint8();return this.position+=1,e},readUint16(){this.assertReadLimit(),this._touch();let e=this.inspectUint16();return this.position+=2,e},readUint24(){this.assertReadLimit(),this._touch();let e=this.inspectUint24();return this.position+=3,e},readUint32(){this.assertReadLimit(),this._touch();let e=this.inspectUint32();return this.position+=4,e},get remaining(){return this.bytes.length-this.position},setPosition(e){let t=this.position;return this.assertPosition(e),this.position=e,()=>this.position=t},_touch(){if(this.recursiveReadLimit===1/0)return;let e=this.getReadCount();this.positionReadCount.set(this.position,e+1),e>0&&this.recursiveReadCount++}};class tT extends eZ.C{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cursor.NegativeOffsetError"})}}class tN extends eZ.C{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cursor.PositionOutOfBoundsError"})}}class tW extends eZ.C{constructor({count:e,limit:t}){super(`Recursive read limit of \`${t}\` exceeded (recursive read count: \`${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Cursor.RecursiveReadLimitExceededError"})}}function tF(e,t,r={}){let{as:n="Array",checksumAddress:i=!1}=r,o="string"==typeof t?e8(t):t,a=function(e,{recursiveReadLimit:t=8192}={}){let r=Object.create(tM);return r.bytes=e,r.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),r.positionReadCount=new Map,r.recursiveReadLimit=t,r}(o);if(0===e4(o)&&e.length>0)throw new tQ;if(e4(o)&&32>e4(o))throw new tD({data:"string"==typeof t?t:e_.uK(t),parameters:e,size:e4(o)});let s=0,l="Array"===n?[]:{};for(let t=0;t<e.length;++t){let r=e[t];s<o.length&&a.setPosition(s);let[c,u]=function e(t,r,n){let{checksumAddress:i,staticPosition:o}=n,a=tP(r.type);if(a){let[n,s]=a;return function(t,r,n){let{checksumAddress:i,length:o,staticPosition:a}=n;if(null===o){let n=a+e9(t.readBytes(32)),o=n+32;t.setPosition(n);let s=e9(t.readBytes(32)),l=tS(r),c=0,u=[];for(let n=0;n<s;++n){t.setPosition(o+(l?32*n:c));let[a,s]=e(t,r,{checksumAddress:i,staticPosition:o});c+=s,u.push(a),0===s&&(t.assertReadLimit(),t._touch())}return t.setPosition(a+32),[u,32]}if(tS(r)){let n=a+e9(t.readBytes(32)),s=[];for(let a=0;a<o;++a){t.setPosition(n+32*a);let[o]=e(t,r,{checksumAddress:i,staticPosition:n});s.push(o)}return t.setPosition(a+32),[s,32]}let s=0,l=[];for(let n=0;n<o;++n){let[n,o]=e(t,r,{checksumAddress:i,staticPosition:a+s});s+=o,l.push(n),0===o&&(t.assertReadLimit(),t._touch())}return[l,s]}(t,{...r,type:s},{checksumAddress:i,length:n,staticPosition:o})}if("tuple"===r.type)return function(t,r,n){let{checksumAddress:i,staticPosition:o}=n,a=0===r.components.length||r.components.some(({name:e})=>!e),s=a?[]:{},l=0;if(tS(r)){let n=o+e9(t.readBytes(32));for(let o=0;o<r.components.length;++o){let c=r.components[o];t.setPosition(n+l);let[u,d]=e(t,c,{checksumAddress:i,staticPosition:n});l+=d,s[a?o:c?.name]=u}return t.setPosition(o+32),[s,32]}for(let n=0;n<r.components.length;++n){let c=r.components[n],[u,d]=e(t,c,{checksumAddress:i,staticPosition:o});s[a?n:c?.name]=u,l+=d}return[s,l]}(t,r,{checksumAddress:i,staticPosition:o});if("address"===r.type)return function(e,t={}){let r,{checksum:n=!1}=t,i=e.readBytes(32);return[(r=e_.uK(function(e,t={}){let{strict:r}=t;!1;let n=e.slice(-20,void 0);return r&&function(e,t){if("number"==typeof t&&e4(e)!==t- -20)throw new tr({offset:t,position:"end",size:e4(e)})}(n,void 0),n}(i)),n?tc(r):r),32]}(t,{checksum:i});if("bool"===r.type)return[function(e,t={}){let{size:r}=t,n=e;if(void 0!==r&&(e$(n,r),n=e7(n)),n.length>1||n[0]>1)throw new te(n);return!!n[0]}(t.readBytes(32),{size:32}),32];if(r.type.startsWith("bytes"))return function(e,t,{staticPosition:r}){let[n,i]=t.type.split("bytes");if(!i){let t=e9(e.readBytes(32));e.setPosition(r+t);let n=e9(e.readBytes(32));if(0===n)return e.setPosition(r+32),["0x",32];let i=e.readBytes(n);return e.setPosition(r+32),[e_.uK(i),32]}return[e_.uK(e.readBytes(Number.parseInt(i,10),32)),32]}(t,r,{staticPosition:o});if(r.type.startsWith("uint")||r.type.startsWith("int")){var s,l;let e,n,i;return s=t,e=(l=r).type.startsWith("int"),n=Number.parseInt(l.type.split("int")[1]||"256",10),i=s.readBytes(32),[n>48?function(e,t={}){let{size:r}=t;void 0!==r&&e$(e,r);let n=e_.uK(e,t);return e_.Dg(n,t)}(i,{signed:e}):e9(i,{signed:e}),32]}if("string"===r.type)return function(e,{staticPosition:t}){let r=e9(e.readBytes(32));e.setPosition(t+r);let n=e9(e.readBytes(32));if(0===n)return e.setPosition(t+32),["",32];let i=function(e,t={}){let{size:r}=t,n=e;return void 0!==r&&(e$(n,r),n=e1(n,{dir:"right"})),e6.decode(n)}(e7(e.readBytes(n,32)));return e.setPosition(t+32),[i,32]}(t,{staticPosition:o});throw new tK(r.type)}(a,r,{checksumAddress:i,staticPosition:0});s+=u,"Array"===n?l.push(c):l[r.name??t]=c}return l}function tU(e,t,r){let{checksumAddress:n=!1}=r??{};if(e.length!==t.length)throw new tj({expectedLength:e.length,givenLength:t.length});let i=tI(function({checksumAddress:e,parameters:t,values:r}){let n=[];for(let i=0;i<t.length;i++)n.push(function e({checksumAddress:t=!1,parameter:r,value:n}){let i=tP(r.type);if(i){let[o,a]=i;return function(t,r){let{checksumAddress:n,length:i,parameter:o}=r,a=null===i;if(!Array.isArray(t))throw new tJ(t);if(!a&&t.length!==i)throw new tq({expectedLength:i,givenLength:t.length,type:`${o.type}[${i}]`});let s=0===t.length&&tS(o),l=[];for(let r=0;r<t.length;r++){let i=e({checksumAddress:n,parameter:o,value:t[r]});i.dynamic&&(s=!0),l.push(i)}if(a||s){let e=tI(l);if(a){let t=e_.oB(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?e_.xW(t,e):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:e_.xW(...l.map(({encoded:e})=>e))}}(n,{checksumAddress:t,length:o,parameter:{...r,type:a}})}if("tuple"===r.type)return function(t,r){let{checksumAddress:n,parameter:i}=r,o=!1,a=[];for(let r=0;r<i.components.length;r++){let s=i.components[r],l=Array.isArray(t)?r:s.name,c=e({checksumAddress:n,parameter:s,value:t[l]});a.push(c),c.dynamic&&(o=!0)}return{dynamic:o,encoded:o?tI(a):e_.xW(...a.map(({encoded:e})=>e))}}(n,{checksumAddress:t,parameter:r});if("address"===r.type)return function(e,t){let{checksum:r=!1}=t;return tl(e,{strict:r}),{dynamic:!1,encoded:e_.Ho(e.toLowerCase())}}(n,{checksum:t});if("bool"===r.type){var o=n;if("boolean"!=typeof o)throw new eZ.C(`Invalid boolean value: "${o}" (type: ${typeof o}). Expected: \`true\` or \`false\`.`);return{dynamic:!1,encoded:e_.Ho(e_.xb(o))}}if(r.type.startsWith("uint")||r.type.startsWith("int")){let e=r.type.startsWith("int"),[,,t="256"]=tB.exec(r.type)??[];return function(e,{signed:t,size:r}){if("number"==typeof r){let n=2n**(BigInt(r)-(t?1n:0n))-1n,i=t?-n-1n:0n;if(e>n||e<i)throw new e_.Ty({max:n.toString(),min:i.toString(),signed:t,size:r/8,value:e.toString()})}return{dynamic:!1,encoded:e_.oB(e,{size:32,signed:t})}}(n,{signed:e,size:Number(t)})}if(r.type.startsWith("bytes"))return function(e,{type:t}){let[,r]=t.split("bytes"),n=e_.Ej(e);if(!r){let t=e;return n%32!=0&&(t=e_.M7(t,32*Math.ceil((e.length-2)/2/32))),{dynamic:!0,encoded:e_.xW(e_.Ho(e_.oB(n,{size:32})),t)}}if(n!==Number.parseInt(r,10))throw new tL({expectedSize:Number.parseInt(r,10),value:e});return{dynamic:!1,encoded:e_.M7(e)}}(n,{type:r.type});if("string"===r.type){var a=n;let e=e_.sH(a),t=Math.ceil(e_.Ej(e)/32),r=[];for(let n=0;n<t;n++)r.push(e_.M7(e_.di(e,32*n,(n+1)*32)));return{dynamic:!0,encoded:e_.xW(e_.M7(e_.oB(e_.Ej(e),{size:32})),...r)}}throw new tK(r.type)}({checksumAddress:e,parameter:t[i],value:r[i]}));return n}({checksumAddress:n,parameters:e,values:t}));return 0===i.length?"0x":i}function tR(e,t){if(e.length!==t.length)throw new tj({expectedLength:e.length,givenLength:t.length});let r=[];for(let n=0;n<e.length;n++){let i=e[n],o=t[n];r.push(tR.encode(i,o))}return e_.xW(...r)}function tO(e){return Array.isArray(e)&&"string"==typeof e[0]||"string"==typeof e?function(e){let t=[];if("string"==typeof e){let r=(0,eV.NV)(e),n=r.length;for(let e=0;e<n;e++)t.push((0,eV.Pj)(r[e],{modifiers:eG.Dv}))}else{let r=(0,ez.e)(e),n=e.length;for(let i=0;i<n;i++){let n=e[i];if((0,eG.WL)(n))continue;let o=(0,eV.NV)(n),a=o.length;for(let e=0;e<a;e++)t.push((0,eV.Pj)(o[e],{modifiers:eG.Dv,structs:r}))}}if(0===t.length)throw new tC.A9({params:e});return t}(e):e}(tR||(tR={})).encode=function e(t,r,n=!1){if("address"===t)return tl(r),e_.Ho(r.toLowerCase(),32*!!n);if("string"===t)return e_.sH(r);if("bytes"===t)return r;if("bool"===t)return e_.Ho(e_.xb(r),n?32:1);let i=t.match(tB);if(i){let[e,t,o="256"]=i,a=Number.parseInt(o,10)/8;return e_.oB(r,{size:n?32:a,signed:"int"===t})}let o=t.match(tk);if(o){let[e,t]=o;if(Number.parseInt(t,10)!==(r.length-2)/2)throw new tL({expectedSize:Number.parseInt(t,10),value:r});return e_.M7(r,32*!!n)}let a=t.match(tx);if(a&&Array.isArray(r)){let[t,n]=a,i=[];for(let t=0;t<r.length;t++)i.push(e(n,r[t],!0));return 0===i.length?"0x":e_.xW(...i)}throw new tK(t)};class tD extends eZ.C{constructor({data:e,parameters:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${tv.Q(t)})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.DataSizeTooSmallError"})}}class tQ extends eZ.C{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.ZeroDataError"})}}class tq extends eZ.C{constructor({expectedLength:e,givenLength:t,type:r}){super(`Array length mismatch for type \`${r}\`. Expected: \`${e}\`. Given: \`${t}\`.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.ArrayLengthMismatchError"})}}class tL extends eZ.C{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${e_.Ej(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.BytesSizeMismatchError"})}}class tj extends eZ.C{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding parameters/values length mismatch.
Expected length (parameters): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.LengthMismatchError"})}}class tJ extends eZ.C{constructor(e){super(`Value \`${e}\` is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidArrayError"})}}class tK extends eZ.C{constructor(e){super(`Type \`${e}\` is not a valid ABI Type.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiParameters.InvalidTypeError"})}}r(14317);function tH(...e){let[t,r=[]]=(()=>{if(Array.isArray(e[0])){let[t,r,n]=e;return[tz(t,r,{args:n}),n]}let[t,r]=e;return[t,r]})(),{overloads:n}=t,i=n?tz([t,...n],t.name,{args:r}):t,o=tg(i),a=r.length>0?tU(i.inputs,r):void 0;return a?e_.xW(o,a):o}function tG(e,t={}){return tw(e,t)}function tz(e,t,r){let n=tm(e,t,r);if("function"!==n.type)throw new tA({name:t,type:"function"});return n}eZ.C,eZ.C,eZ.C,eZ.C,eZ.C,eZ.C;var tV=r(54671),tY=r(81368),tZ=r(28819);let tX="0x608060405234801561000f575f5ffd5b5060043610610029575f3560e01c8063fd00430c1461002d575b5f5ffd5b6100476004803603810190610042919061012b565b610049565b005b80825f375f5f825f865afa610060573d5f5f3e3d5ffd5b3d5f5f3e3d5ff35b5f5ffd5b5f5ffd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f61009982610070565b9050919050565b6100a98161008f565b81146100b3575f5ffd5b50565b5f813590506100c4816100a0565b92915050565b5f5ffd5b5f5ffd5b5f5ffd5b5f5f83601f8401126100eb576100ea6100ca565b5b8235905067ffffffffffffffff811115610108576101076100ce565b5b602083019150836001820283011115610124576101236100d2565b5b9250929050565b5f5f5f6040848603121561014257610141610068565b5b5f61014f868287016100b6565b935050602084013567ffffffffffffffff8111156101705761016f61006c565b5b61017c868287016100d6565b9250925050925092509256fea2646970667358221220635ed99185cacf3f2acba6921f23687c969cec2bbaf5f9ad599f507e6e105e6964736f6c63430008230033",t_=tb(function(e,t={}){return tw(e,t)}("event Transfer(address indexed from, address indexed to, uint256 value)")),t$=tG("function balanceOf(address) returns (uint256)"),t0=tG("function decimals() returns (uint256)"),t1=tG("function tokenURI(uint256) returns (string)"),t2=tG("function symbol() returns (string)"),t3=tG("function query(address target, bytes data)");async function t6(e,t){var r,n;let i,{blockNumber:o,blockTag:a,calls:s,stateOverrides:l,traceAssetChanges:c,traceTransfers:u,validation:d}=t,p=t.account?(0,x.J)(t.account):void 0;if(c&&!p)throw new k.C("`account` is required when `traceAssetChanges` is true");let h=p?function(...e){let[t,r]=(()=>{if(Array.isArray(e[0])){let[t,r]=e;return[function(e){let t=e.find(e=>"constructor"===e.type);if(!t)throw new tA({name:"constructor"});return t}(t),r]}return e})(),{bytecode:n,args:i}=r;return e_.xW(n,t.inputs?.length&&i?.length?tU(t.inputs,i):"0x")}(tw("constructor(bytes, bytes)"),{bytecode:tY.LX,args:["0x6080604052348015600e575f80fd5b5061016d8061001c5f395ff3fe608060405234801561000f575f80fd5b5060043610610029575f3560e01c8063f8b2cb4f1461002d575b5f80fd5b610047600480360381019061004291906100db565b61005d565b604051610054919061011e565b60405180910390f35b5f8173ffffffffffffffffffffffffffffffffffffffff16319050919050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6100aa82610081565b9050919050565b6100ba816100a0565b81146100c4575f80fd5b50565b5f813590506100d5816100b1565b92915050565b5f602082840312156100f0576100ef61007d565b5b5f6100fd848285016100c7565b91505092915050565b5f819050919050565b61011881610106565b82525050565b5f6020820190506101315f83018461010f565b9291505056fea26469706673582212203b9fe929fe995c7cf9887f0bdba8a36dd78e8b73f149b17d2d9ad7cd09d2dc6264736f6c634300081a0033",tH(tG("function getBalance(address)"),[p.address])]}):void 0,f=a??e.experimental_blockTag??"latest",w=o;if(c&&"bigint"!=typeof w&&"earliest"!==f&&"pending"!==f)if("latest"===f)w=await (0,et.G)(e,{cacheTime:0});else{let t=await (0,ee.g)(e,{blockTag:f});if("bigint"!=typeof t.number)throw new k.C(`Block tag \`${f}\` did not resolve to a number.`);w=t.number}let m="bigint"==typeof w?{blockNumber:w}:{blockTag:f},g=c?await eK(e,{...m,blocks:[{calls:s.map(e=>({...e,from:p.address})),stateOverrides:l}],traceTransfers:u,validation:d}):void 0,b=g?[...new Set([...(r=g[0].calls.flatMap(e=>e.logs??[]),n=p.address,i=(0,tZ.eV)(n.toLowerCase(),{size:32}),r.filter(e=>e.topics[0]?.toLowerCase()===t_&&e.address.toLowerCase()!==tV.m&&(e.topics[1]?.toLowerCase()===i||e.topics[2]?.toLowerCase()===i)).map(e=>e.address.toLowerCase())),...t.calls.map(e=>e.to?.toLowerCase())])].filter(e=>!!e&&e!==tV.m&&e!==tV.X):[],y=function(e){let t=new Set(e.map(e=>e.toLowerCase())),r=3735928559n;for(;t.has(`0x${r.toString(16).padStart(40,"0")}`);)r++;return`0x${r.toString(16).padStart(40,"0")}`}([...p?[p.address]:[],...b,...l?.map(({address:e})=>e)??[]]),A=[{address:y,code:tX}],[v,C]=await Promise.all([c?Promise.all([t9(e,{account:p.address,...m,data:h,stateOverride:l}),...b.map(t=>t9(e,{account:p.address,address:t,...m,data:tH(t$,[p.address]),staticCallAddress:y,stateOverride:l}))]):[],eK(e,{...m,blocks:[{calls:[...s,{to:tV.X}].map(e=>({...e,from:p?.address})),stateOverrides:l},...c?[{calls:[{data:h}]},{calls:b.map(e=>({to:y,data:t5(e,tH(t$,[p.address]))})),stateOverrides:A},{calls:b.map(e=>({to:y,data:t5(e,tH(t0))})),stateOverrides:A},{calls:b.map(e=>({to:y,data:t5(e,tH(t1,[0n]))})),stateOverrides:A},{calls:b.map(e=>({to:y,data:t5(e,tH(t2))})),stateOverrides:A}]:[]],traceTransfers:u,validation:d})]),B=C[0],[E,I,P,S,M]=c?C.slice(1):[],{calls:T,...N}=B,W=T.slice(0,-1),F=v.map(e=>t8(e)?(0,eo.uU)(e.data):null),U=[...E?.calls??[],...I?.calls??[]].map(e=>t8(e)?(0,eo.uU)(e.data):null),R=(P?.calls??[]).map(e=>t4(e,t0)),O=(M?.calls??[]).map(e=>t4(e,t2)),D=(S?.calls??[]).map(e=>t4(e,t1)),Q=[];for(let[e,t]of U.entries()){let r=F[e],n=v[e],i="bigint"==typeof r?r:e>0&&n?.status==="success"&&"0x"===n.data?0n:null;if("bigint"!=typeof t||"bigint"!=typeof i)continue;let o=R[e-1],a=O[e-1],s=D[e-1],l=0===e?{address:tV.m,decimals:18,symbol:"ETH"}:{address:b[e-1],decimals:s||o?Number(o??1):void 0,symbol:a??void 0};Q.push({token:l,value:{pre:i,post:t,diff:t-i}})}return{assetChanges:Q,block:N,results:W}}function t5(e,t){return tH(t3,[e,t])}function t8(e){return"success"===e.status&&/^0x[\da-f]{64}$/i.test(e.data)}function t4(e,t){if("failure"===e.status||"0x"===e.data)return null;try{return function(...e){let[t,r,n={}]=(()=>{if(Array.isArray(e[0])){let[t,r,n,i]=e;return[tz(t,r),n,i]}return e})(),i=tF(t.outputs,r,n);if(!i||0!==Object.keys(i).length)return i&&1===Object.keys(i).length?Array.isArray(i)?i[0]:Object.values(i)[0]:i}(t,e.data)}catch{return null}}async function t9(e,t){let{account:r,address:n,blockNumber:i,blockTag:o,data:a,staticCallAddress:s,stateOverride:l}=t;try{return{data:(await (0,C.T)({...e,ccipRead:!1},{account:n?tV.X:r,data:n?t5(n,a):a,stateOverride:n&&s?[...l??[],{address:s,code:tX}]:l,...n?{to:s}:{},..."bigint"==typeof i?{blockNumber:i}:{blockTag:o}})).data??"0x",status:"success"}}catch(e){if(!(e instanceof eD.zX)||!(e.cause instanceof eQ.A7))throw e;return{data:"0x",status:"failure"}}}async function t7(e,t){let{abi:r,address:n,args:a,functionName:s,dataSuffix:l="string"==typeof e.dataSuffix?e.dataSuffix:e.dataSuffix?.value,...c}=t,u=c.account?(0,x.J)(c.account):e.account,d=(0,o.p)({abi:r,args:a,functionName:s});try{let{data:o}=await (0,w.T)(e,C.T,"call")({batch:!1,data:`${d}${l?l.replace("0x",""):""}`,to:n,...c,account:u}),p=(0,i.e)({abi:r,args:a,functionName:s,data:o||"0x"}),h=r.filter(e=>"name"in e&&e.name===t.functionName);return{result:p,request:{abi:h,address:n,args:a,dataSuffix:l,functionName:s,...c,account:u}}}catch(e){throw(0,G.j)(e,{abi:r,address:n,args:a,docsPath:"/docs/contract/simulateContract",functionName:s,sender:u?.address})}}async function re(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}let rt="0x6492649264926492649264926492649264926492649264926492649264926492";class rr extends eZ.C{constructor(e){super(`Value \`${e}\` is an invalid ERC-6492 wrapped signature.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SignatureErc6492.InvalidWrappedSignatureError"})}}function rn(e,t={}){let{recovered:r}=t;if(void 0===e.r||void 0===e.s||r&&void 0===e.yParity)throw new rs({signature:e});if(e.r<0n||e.r>tE)throw new rl({value:e.r});if(e.s<0n||e.s>tE)throw new rc({value:e.s});if("number"==typeof e.yParity&&0!==e.yParity&&1!==e.yParity)throw new ru({value:e.yParity})}function ri(e){if(130!==e.length&&132!==e.length)throw new ra({signature:e});let t=BigInt(e_.di(e,0,32)),r=BigInt(e_.di(e,32,64)),n=(()=>{let t=Number(`0x${e.slice(130)}`);if(!Number.isNaN(t))try{return ro(t)}catch{throw new ru({value:t})}})();return void 0===n?{r:t,s:r}:{r:t,s:r,yParity:n}}function ro(e){if(0===e||27===e)return 0;if(1===e||28===e)return 1;if(e>=35)return+(e%2==0);throw new rd({value:e})}class ra extends eZ.C{constructor({signature:e}){super(`Value \`${e}\` is an invalid signature size.`,{metaMessages:["Expected: 64 bytes or 65 bytes.",`Received ${e_.Ej(e_.HT(e))} bytes.`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidSerializedSizeError"})}}class rs extends eZ.C{constructor({signature:e}){super(`Signature \`${e3.As(e)}\` is missing either an \`r\`, \`s\`, or \`yParity\` property.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.MissingPropertiesError"})}}class rl extends eZ.C{constructor({value:e}){super(`Value \`${e}\` is an invalid r value. r must be a positive integer less than 2^256.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidRError"})}}class rc extends eZ.C{constructor({value:e}){super(`Value \`${e}\` is an invalid s value. s must be a positive integer less than 2^256.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidSError"})}}class ru extends eZ.C{constructor({value:e}){super(`Value \`${e}\` is an invalid y-parity value. Y-parity must be 0 or 1.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidYParityError"})}}class rd extends eZ.C{constructor({value:e}){super(`Value \`${e}\` is an invalid v value. v must be 27, 28 or >=35.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Signature.InvalidVError"})}}let rp=tO("(uint256 chainId, address delegation, uint256 nonce, uint8 yParity, uint256 r, uint256 s), address to, bytes data");function rh(e){if("string"==typeof e){if("0x8010801080108010801080108010801080108010801080108010801080108010"!==e_.di(e,-32))throw new rf(e)}else rn(e.authorization)}class rf extends eZ.C{constructor(e){super(`Value \`${e}\` is an invalid ERC-8010 wrapped signature.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SignatureErc8010.InvalidWrappedSignatureError"})}}var rw=r(75771),rm=r(84993);async function rg({address:e,authorization:t,signature:r}){return(0,ec.h)((0,a.b)(e),await (0,rm.g)({authorization:t,signature:r}))}var rb=r(69251),ry=r(99863),rA=r(32601);async function rv(e,t){let r,{address:n,chain:i=e.chain,hash:o,erc6492VerifierAddress:s=t.universalSignatureVerifierAddress??i?.contracts?.erc6492Verifier?.address,multicallAddress:l=t.multicallAddress??i?.contracts?.multicall3?.address,mode:c="auto"}=t;if(i?.verifyHash)return await i.verifyHash(e,t);let d=(r=t.signature,(0,rb.q)(r)?r:"object"==typeof r&&"r"in r&&"s"in r?function({r:e,s:t,to:r="hex",v:n,yParity:i}){let o=(()=>{if(0===i||1===i)return i;if(n&&(27n===n||28n===n||n>=35n))return+(n%2n===0n);throw Error("Invalid `v` or `yParity` value")})(),a=`0x${new rA.secp256k1.Signature((0,eo.uU)(e),(0,eo.uU)(t)).toCompactHex()}${0===o?"1b":"1c"}`;return"hex"===r?a:(0,F.aT)(a)}(r):(0,u.My)(r));try{if("eoa"===c)try{if((0,ec.h)((0,a.b)(n),await (0,ry.x)({hash:o,signature:d})))return!0}catch{}if(function(e){try{return rh(e),!0}catch{return!1}}(d))return await rC(e,{...t,multicallAddress:l,signature:d});return await rx(e,{...t,verifierAddress:s,signature:d})}catch(e){if("eoa"!==c)try{if((0,ec.h)((0,a.b)(n),await (0,ry.x)({hash:o,signature:d})))return!0}catch{}if(e instanceof rB)return!1;throw e}}async function rC(e,t){let{address:r,blockHash:i,blockNumber:a,blockTag:s,hash:l,multicallAddress:c,requireCanonical:d}=t,{authorization:p,data:h,signature:f,to:g}=function(e){rh(e);let t=e_.Ro(e_.di(e,-64,-32)),r=e_.di(e,-t-64,-64),n=e_.di(e,0,-t-64),[i,o,a]=tF(rp,r);return{authorization:function(e,t={}){return"string"==typeof e.chainId?function(e){let{address:t,chainId:r,nonce:n}=e,i=function(e){if(void 0!==e.r&&void 0!==e.s){var t;let r;return t=e,rn(r=(()=>{var e,r;let n;if("string"==typeof t)return ri(t);if(t instanceof Uint8Array)return ri(e_.uK(t));return"string"==typeof t.r?(e=t,n=(()=>{let t=e.v?Number(e.v):void 0,r=e.yParity?Number(e.yParity):void 0;if("number"==typeof t&&"number"!=typeof r&&(r=ro(t)),"number"!=typeof r)throw new ru({value:e.yParity});return r})(),{r:BigInt(e.r),s:BigInt(e.s),yParity:n}):t.v?{r:(r=t).r,s:r.s,yParity:ro(r.v)}:{r:t.r,s:t.s,...void 0!==t.yParity?{yParity:t.yParity}:{}}})()),r}}(e);return{address:t,chainId:Number(r),nonce:BigInt(n),...i}}(e):{...e,...t.signature}}({address:i.delegation,chainId:Number(i.chainId),nonce:i.nonce,yParity:i.yParity,r:i.r,s:i.s}),signature:n,...a&&"0x"!==a?{data:a,to:o}:{}}}(t.signature);if(await (0,el.Q)(e,{address:r,blockHash:i,blockNumber:a,blockTag:s,requireCanonical:d})===(0,eq.aP)(["0xef0100",p.address]))return await rk(e,{...t,signature:f});let b={address:p.address,chainId:Number(p.chainId),nonce:Number(p.nonce),r:(0,u.cK)(p.r,{size:32}),s:(0,u.cK)(p.s,{size:32}),yParity:p.yParity};if(!await rg({address:r,authorization:b}))throw new rB;let y=await (0,w.T)(e,m.J,"readContract")({...c?{address:c}:{code:tY.Ez},authorizationList:[b],abi:n.v2,blockHash:i,blockNumber:a,blockTag:"pending",functionName:"aggregate3",requireCanonical:d,args:[[...h?[{allowFailure:!0,target:g??r,callData:h}]:[],{allowFailure:!0,target:r,callData:(0,o.p)({abi:n.UW,functionName:"isValidSignature",args:[l,f]})}]]}),A=y[y.length-1]?.returnData;if(A?.startsWith("0x1626ba7e"))return!0;throw new rB}async function rx(e,t){let{address:r,factory:i,factoryData:a,hash:s,signature:l,verifierAddress:c,...u}=t,d=await (async()=>!i&&!a||function(e){try{if(e_.di(e,-32)!==rt)throw new rr(e);return!0}catch{return!1}}(l)?l:function(e){let{data:t,signature:r,to:n}=e;return e_.xW(tU(tO("address, bytes, bytes"),[n,t,r]),rt)}({data:a,signature:l,to:i}))(),p=c?{to:c,data:(0,o.p)({abi:n.E5,functionName:"isValidSig",args:[r,s,d]}),...u}:{data:(0,rw.m)({abi:n.E5,args:[r,s,d],bytecode:tY.fT}),...u},{data:h}=await (0,w.T)(e,C.T,"call")(p).catch(e=>{if(e instanceof eD.zX)throw new rB;throw e});if((0,eo.Nx)(h??"0x0"))return!0;throw new rB}async function rk(e,t){let{address:r,blockHash:i,blockNumber:o,blockTag:a,hash:s,requireCanonical:l,signature:c}=t;if((await (0,w.T)(e,m.J,"readContract")({address:r,abi:n.UW,args:[s,c],blockHash:i,blockNumber:o,blockTag:a,functionName:"isValidSignature",requireCanonical:l}).catch(e=>{if(e instanceof eD.bG)throw new rB;throw e})).startsWith("0x1626ba7e"))return!0;throw new rB}class rB extends Error{}var rE=r(18353);async function rI(e,{address:t,message:r,factory:n,factoryData:i,signature:o,...a}){let s=(0,rE.A)(r);return(0,w.T)(e,rv,"verifyHash")({address:t,factory:n,factoryData:i,hash:s,signature:o,...a})}var rP=r(43154);async function rS(e,t){let{address:r,factory:n,factoryData:i,signature:o,message:a,primaryType:s,types:l,domain:c,...u}=t,d=(0,rP.Zh)({message:a,primaryType:s,types:l,domain:c});return(0,w.T)(e,rv,"verifyHash")({address:r,factory:n,factoryData:i,hash:d,signature:o,...u})}var rM=r(55705),rT=r(52335),rN=r(79870);let rW=["size","totalDifficulty","transactions","uncles","withdrawals"];var rF=r(74958),rU=r(43884),rR=r(41720);let rO=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/;function rD(e){return new Date(!rO.test(e)||Number.isNaN(new Date(e).getTime())?NaN:e)}let rQ=/^(?:(?<scheme>[a-zA-Z][a-zA-Z0-9+-.]*):\/\/)?(?<domain>[a-zA-Z0-9+-.]*(?::[0-9]{1,5})?) (?:wants you to sign in with your Ethereum account:\n)(?<address>0x[a-fA-F0-9]{40})\n\n(?:(?<statement>.*)\n\n)?/,rq=/(?:URI: (?<uri>.+))\n(?:Version: (?<version>.+))\n(?:Chain ID: (?<chainId>\d+))\n(?:Nonce: (?<nonce>[a-zA-Z0-9]+))\n(?:Issued At: (?<issuedAt>.+))(?:\nExpiration Time: (?<expirationTime>.+))?(?:\nNot Before: (?<notBefore>.+))?(?:\nRequest ID: (?<requestId>.+))?/;var rL=r(75992);async function rj(e,t){let{address:r,domain:n,message:i,nonce:o,scheme:a,signature:s,time:l=new Date,...c}=t,u=function(e){let{scheme:t,statement:r,...n}=e.match(rQ)?.groups??{},{chainId:i,expirationTime:o,issuedAt:a,notBefore:s,requestId:l,...c}=e.match(rq)?.groups??{},u=e.split("Resources:")[1]?.split("\n- ").slice(1);return{...n,...c,...i?{chainId:Number(i)}:{},...o?{expirationTime:rD(o)}:{},...a?{issuedAt:rD(a)}:{},...s?{notBefore:rD(s)}:{},...l?{requestId:l}:{},...u?{resources:u}:{},...t?{scheme:t}:{},...r?{statement:r}:{}}}(i);if(!u.address||!function(e){let{address:t,domain:r,message:n,nonce:i,scheme:o,time:a=new Date}=e;if(r&&n.domain!==r||i&&n.nonce!==i||o&&n.scheme!==o||Number.isNaN(a.getTime())||n.expirationTime&&(Number.isNaN(n.expirationTime.getTime())||a>=n.expirationTime)||n.notBefore&&(Number.isNaN(n.notBefore.getTime())||a<n.notBefore))return!1;try{if(!n.address||!(0,rL.P)(n.address,{strict:!1})||t&&!(0,ec.h)(n.address,t))return!1}catch{return!1}return!0}({address:r,domain:n,message:u,nonce:o,scheme:a,time:l}))return!1;let d=(0,rE.A)(i);return rv(e,{address:u.address,hash:d,signature:s,...c})}var rJ=r(12110);function rK(e,t){return{amount:e,decimals:t,formatted:(0,rJ.J)(e,t)}}function rH(e,t){let{decimals:r,token:n}=t,i=rG(e,n);if(i)return{address:i.address,decimals:r??i.decimals};if((0,rL.P)(n,{strict:!1}))return{address:n,decimals:r??function(e,t){let r=e.tokens,n=e.chain?.id;if(r&&void 0!==n)for(let e of r){let r=rz(e,n);if(r&&(0,ec.h)(r.address,t))return r.decimals}}(e,n)};throw Error(`Token "${n}" is not a declared ERC-20 token on the client's \`tokens\` array (with an address for the client's chain), and is not a valid address.`)}function rG(e,t){let r=e.tokens,n=e.chain?.id;if(!r||void 0===n)return;let i=function(e,t){let r=t.toLowerCase();for(let t of e)if(t.symbol?.toLowerCase()===r)return t}(r,t);if(i)return rz(i,n);if((0,rL.P)(t,{strict:!1}))for(let e of r){let r=rz(e,n);if(r&&(0,ec.h)(r.address,t))return r}}function rz(e,t){let r=e.addresses[t];if(r)return{address:r,currency:e.currency,decimals:e.decimals,name:e.name,popular:e.popular,symbol:e.symbol}}async function rV(e,t){let{address:r,decimals:i}=rH(e,t);return void 0!==i?{address:r,decimals:i}:{address:r,decimals:await (0,m.J)(e,{abi:n.xw,address:r,functionName:"decimals"})}}function rY(e){return{...e,data:(0,o.p)(e),to:e.address}}async function rZ(e,t){let{account:r,decimals:n,spender:i,token:o,...a}=t,[s,{decimals:l}]=await Promise.all([(0,m.J)(e,{...a,...rZ.call(e,{account:r,spender:i,token:o})}),rV(e,{decimals:n,token:o})]);return rK(s,l)}(rZ||(rZ={})).call=function(e,t){return rY({address:rH(e,t).address,abi:n.xw,functionName:"allowance",args:[t.account,t.spender]})};var rX=r(90880);async function r_(e,t){let{account:r=e.account,decimals:n,token:i,...o}=t;if(!r)throw new rX.T;let a=(0,x.J)(r).address,[s,{decimals:l}]=await Promise.all([(0,m.J)(e,{...o,...r_.call(e,{account:a,token:i})}),rV(e,{decimals:n,token:i})]);return rK(s,l)}async function r$(e,t){let{token:r,...i}=t,{address:o}=rH(e,{token:r}),a=rG(e,r),[s,l,c]=await Promise.all([a?.decimals??(0,m.J)(e,{...i,abi:n.xw,address:o,functionName:"decimals"}),a?.name??(0,m.J)(e,{...i,abi:n.xw,address:o,functionName:"name"}),a?.symbol??(0,m.J)(e,{...i,abi:n.xw,address:o,functionName:"symbol"})]);return{decimals:s,name:l,symbol:c}}async function r0(e,t){let{decimals:r,token:n,...i}=t,[o,{decimals:a}]=await Promise.all([(0,m.J)(e,{...i,...r0.call(e,{token:n})}),rV(e,{decimals:r,token:n})]);return rK(o,a)}(r_||(r_={})).call=function(e,t){let r=t.account??e.account;if(!r)throw new rX.T;let i=(0,x.J)(r).address;return rY({address:rH(e,t).address,abi:n.xw,functionName:"balanceOf",args:[i]})},(r0||(r0={})).call=function(e,t){return rY({address:rH(e,t).address,abi:n.xw,args:[],functionName:"totalSupply"})};var r1=r(61487),r2=r(24219);async function r3(e,{serializedTransaction:t,throwOnReceiptRevert:r,timeout:n}){let i=await e.request({method:"eth_sendRawTransactionSync",params:n?[t,n]:[t]},{retryCount:0}),o=(e.chain?.formatters?.transactionReceipt?.format||en.uL)(i);if("reverted"===o.status&&r)throw new eS.Sq({receipt:o});return o}var r6=r(29353);function r5(e){var t;return{call:t=>(0,C.T)(e,t),createAccessList:t=>S(e,t),createBlockFilter:()=>T(e),createContractEventFilter:t=>J(e,t),createEventFilter:t=>K(e,t),createPendingTransactionFilter:()=>H(e),estimateContractGas:t=>V(e,t),estimateGas:t=>(0,z.Q)(e,t),getBalance:t=>(0,_.r)(e,t),getBlobBaseFee:()=>$(e),getBlock:t=>(0,ee.g)(e,t),getBlockNumber:t=>(0,et.G)(e,t),getBlockReceipts:t=>ei(e,t),getBlockTransactionCount:t=>ea(e,t),getBytecode:t=>(0,el.Q)(e,t),getChainId:()=>(0,es.T)(e),getCode:t=>(0,el.Q)(e,t),getContractEvents:t=>eg(e,t),getDelegation:t=>ey(e,t),getEip712Domain:t=>ev(e,t),getEnsAddress:t=>g(e,t),getEnsAvatar:t=>(0,b.i)(e,t),getEnsName:t=>(0,y.s)(e,t),getEnsResolver:t=>A(e,t),getEnsText:t=>(0,v.m)(e,t),getFeeHistory:t=>ex(e,t),estimateFeesPerGas:t=>(0,Y._)(e,t),getFilterChanges:t=>ek(e,t),getFilterLogs:t=>eB(e,t),getGasPrice:()=>(0,eE.L)(e),getLogs:t=>em(e,t),getProof:t=>eP(e,t),estimateMaxPriorityFeePerGas:t=>(0,Z.b)(e,t),fillTransaction:t=>(0,X.a)(e,t),getRawTransaction:t=>eM(e,t),getStorageAt:t=>eT(e,t),getTransaction:t=>(0,eN.x)(e,t),getTransactionConfirmations:t=>eW(e,t),getTransactionCount:t=>(0,eF.y)(e,t),getTransactionReceipt:t=>(0,eU.h)(e,t),multicall:t=>(0,eR.C)(e,t),prepareTransactionRequest:t=>(0,r1.ft)(e,t),readContract:t=>(0,m.J)(e,t),sendRawTransaction:t=>(0,r2.L)(e,t),sendRawTransactionSync:t=>r3(e,t),simulate:t=>eK(e,t),simulateBlocks:t=>eK(e,t),simulateCalls:t=>t6(e,t),simulateContract:t=>t7(e,t),verifyHash:t=>rv(e,t),verifyMessage:t=>rI(e,t),verifySiweMessage:t=>rj(e,t),verifyTypedData:t=>rS(e,t),uninstallFilter:t=>re(e,t),waitForTransactionReceipt:t=>(0,rM.n)(e,t),watchBlockHeaders:t=>(function(e,{onBlockHeader:t,onError:r}){let n,i=(0,rN.A)(["watchBlockHeaders",e.uid]);return(0,rT.lB)(i,{onBlockHeader:t,onError:r},t=>{let r=!0,i=!1,o=()=>r=!1;return(async()=>{try{let a=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type||"ipc"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:s}=await a.subscribe({params:["newHeads"],onData(i){if(!r)return;let o=(e.chain?.formatters?.block?.format||ej.$)(i.result,"watchBlockHeaders");for(let e of rW)delete o[e];t.onBlockHeader(o,n),n=o},onError(e){i&&t.onError?.(e)}});i=!0,o=s,r||o()}catch(e){t.onError?.(e)}})(),()=>o()})})(e,t),watchBlocks:t=>(function(e,{blockTag:t=e.experimental_blockTag??"latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:o,includeTransactions:a,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,d,p,h,f=void 0!==s?s:"webSocket"!==e.transport.type&&"ipc"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type&&"ipc"!==e.transport.transports[0].config.type),m=a??!1;return f?(u=(0,rN.A)(["watchBlocks",e.uid,t,r,n,m,l]),(0,rT.lB)(u,{onBlock:i,onError:o},i=>(0,rU.w)(async()=>{try{let n=await (0,w.T)(e,ee.g,"getBlock")({blockTag:t,includeTransactions:m});if(null!==n.number&&c?.number!=null){if(n.number===c.number)return;if(n.number-c.number>1&&r)for(let t=c?.number+1n;t<n.number;t++){let r=await (0,w.T)(e,ee.g,"getBlock")({blockNumber:t,includeTransactions:m});i.onBlock(r,c),c=r}}(c?.number==null||"pending"===t&&n?.number==null||null!==n.number&&n.number>c.number)&&(i.onBlock(n,c),c=n)}catch(e){i.onError?.(e)}},{emitOnBegin:n,interval:l}))):(d=!0,p=!0,h=()=>d=!1,(async()=>{try{n&&(0,w.T)(e,ee.g,"getBlock")({blockTag:t,includeTransactions:m}).then(e=>{!d||p&&(i(e,void 0),p=!1)}).catch(o);let r=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type||"ipc"===e.config.type);return t?t.value:e.transport}return e.transport})(),{unsubscribe:a}=await r.subscribe({params:["newHeads"],async onData(t){if(!d)return;let r=await (0,w.T)(e,ee.g,"getBlock")({blockNumber:t.result?.number,includeTransactions:m}).catch(()=>{});d&&(i(r,c),p=!1,c=r)},onError(e){o?.(e)}});h=a,d||h()}catch(e){o?.(e)}})(),()=>h())})(e,t),watchBlockNumber:t=>(0,rF.q)(e,t),watchContractEvent:t=>(function(e,t){let r,n,i,o,a,{abi:s,address:l,args:c,batch:u=!0,eventName:d,fromBlock:p,onError:h,onLogs:f,poll:m,pollingInterval:g=e.pollingInterval,strict:b}=t;return(void 0!==m?m:"bigint"==typeof p||"webSocket"!==e.transport.type&&"ipc"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type&&"ipc"!==e.transport.transports[0].config.type))?(r=b??!1,n=(0,rN.A)(["watchContractEvent",l,c,u,e.uid,d,g,r,p]),(0,rT.lB)(n,{onLogs:f,onError:h},t=>{let n,i;void 0!==p&&(n=p-1n);let o=!1,a=(0,rU.w)(async()=>{if(!o){try{i=await (0,w.T)(e,J,"createContractEventFilter")({abi:s,address:l,args:c,eventName:d,strict:r,fromBlock:p})}catch{}o=!0;return}try{let o;if(i)o=await (0,w.T)(e,ek,"getFilterChanges")({filter:i});else{let t=await (0,w.T)(e,et.G,"getBlockNumber")({});o=n&&n<t?await (0,w.T)(e,eg,"getContractEvents")({abi:s,address:l,args:c,eventName:d,fromBlock:n+1n,toBlock:t,strict:r}):[],n=t}if(0===o.length)return;if(u)t.onLogs(o);else for(let e of o)t.onLogs([e])}catch(e){i&&e instanceof rR.Di&&(o=!1),t.onError?.(e)}},{emitOnBegin:!0,interval:g});return async()=>{i&&await (0,w.T)(e,re,"uninstallFilter")({filter:i}),a()}})):(i=(0,rN.A)(["watchContractEvent",l,c,u,e.uid,d,g,b??!1]),o=!0,a=()=>o=!1,(0,rT.lB)(i,{onLogs:f,onError:h},t=>((async()=>{try{let r=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type||"ipc"===e.config.type);return t?t.value:e.transport}return e.transport})(),n=d?L({abi:s,eventName:d,args:c}):[],{unsubscribe:i}=await r.subscribe({params:["logs",{address:l,topics:n}],onData(e){if(!o)return;let r=e.result;try{let{eventName:e,args:n}=ef({abi:s,data:r.data,topics:r.topics,strict:b}),i=(0,eu.e)(r,{args:n,eventName:e});t.onLogs([i])}catch(o){let e,n;if(o instanceof N.fo||o instanceof N.l3){if(b)return;e=o.abiItem.name,n=o.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let i=(0,eu.e)(r,{args:n?[]:{},eventName:e});t.onLogs([i])}},onError(e){t.onError?.(e)}});a=i,o||a()}catch(e){h?.(e)}})(),()=>a())))})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:n=!0,event:i,events:o,fromBlock:a,onError:s,onLogs:l,poll:c,pollingInterval:u=e.pollingInterval,strict:d}){let p,h,f,m=void 0!==c?c:"bigint"==typeof a||"webSocket"!==e.transport.type&&"ipc"!==e.transport.type&&("fallback"!==e.transport.type||"webSocket"!==e.transport.transports[0].config.type&&"ipc"!==e.transport.transports[0].config.type),g=d??!1;return m?(p=(0,rN.A)(["watchEvent",t,r,n,e.uid,i,u,a]),(0,rT.lB)(p,{onLogs:l,onError:s},s=>{let l,c;void 0!==a&&(l=a-1n);let d=!1,p=(0,rU.w)(async()=>{if(!d){try{c=await (0,w.T)(e,K,"createEventFilter")({address:t,args:r,event:i,events:o,strict:g,fromBlock:a})}catch{}d=!0;return}try{let a;if(c)a=await (0,w.T)(e,ek,"getFilterChanges")({filter:c});else{let n=await (0,w.T)(e,et.G,"getBlockNumber")({});a=l&&l!==n?await (0,w.T)(e,em,"getLogs")({address:t,args:r,event:i,events:o,fromBlock:l+1n,toBlock:n}):[],l=n}if(0===a.length)return;if(n)s.onLogs(a);else for(let e of a)s.onLogs([e])}catch(e){c&&e instanceof rR.Di&&(d=!1),s.onError?.(e)}},{emitOnBegin:!0,interval:u});return async()=>{c&&await (0,w.T)(e,re,"uninstallFilter")({filter:c}),p()}})):(h=!0,f=()=>h=!1,(async()=>{try{let n=(()=>{if("fallback"===e.transport.type){let t=e.transport.transports.find(e=>"webSocket"===e.config.type||"ipc"===e.config.type);return t?t.value:e.transport}return e.transport})(),a=o??(i?[i]:void 0),c=[];a&&(c=[a.flatMap(e=>L({abi:[e],eventName:e.name,args:r}))],i&&(c=c[0]));let{unsubscribe:u}=await n.subscribe({params:["logs",{address:t,topics:c}],onData(e){if(!h)return;let t=e.result;try{let{eventName:e,args:r}=ef({abi:a??[],data:t.data,topics:t.topics,strict:g}),n=(0,eu.e)(t,{args:r,eventName:e});l([n])}catch(i){let e,r;if(i instanceof N.fo||i instanceof N.l3){if(d)return;e=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=(0,eu.e)(t,{args:r?[]:{},eventName:e});l([n])}},onError(e){s?.(e)}});f=u,h||f()}catch(e){s?.(e)}})(),()=>f())})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:n,poll:i,pollingInterval:o=e.pollingInterval}){let a,s,l;return(void 0!==i?i:"webSocket"!==e.transport.type&&"ipc"!==e.transport.type)?(a=(0,rN.A)(["watchPendingTransactions",e.uid,t,o]),(0,rT.lB)(a,{onTransactions:n,onError:r},r=>{let n,i=(0,rU.w)(async()=>{try{if(!n)try{n=await (0,w.T)(e,H,"createPendingTransactionFilter")({});return}catch(e){throw i(),e}let o=await (0,w.T)(e,ek,"getFilterChanges")({filter:n});if(0===o.length)return;if(t)r.onTransactions(o);else for(let e of o)r.onTransactions([e])}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:o});return async()=>{n&&await (0,w.T)(e,re,"uninstallFilter")({filter:n}),i()}})):(s=!0,l=()=>s=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!s)return;let t=e.result;n([t])},onError(e){r?.(e)}});l=t,s||l()}catch(e){r?.(e)}})(),()=>l())})(e,t),token:(t=e,{getAllowance:(0,r6.Ai)(t,rZ),getBalance:(0,r6.Ai)(t,r_),getMetadata:(0,r6.Ai)(t,r$),getTotalSupply:(0,r6.Ai)(t,r0)})}}},54359:(e,t,r)=>{r.d(t,{Np:()=>s});var n=r(84537),i=r(41720),o=r(76100),a=r(72163);function s(e,t={}){let{key:r="fallback",name:n="Fallback",rank:i=!1,shouldThrow:c=l,retryCount:u,retryDelay:d}=t;return({chain:t,pollingInterval:s=4e3,timeout:l,...p})=>{let h=e,f=()=>{},w=(0,a.o)({key:r,name:n,async request({method:e,params:r}){let n,i=async(o=0)=>{let a=h[o]({...p,chain:t,retryCount:0,timeout:l});try{let t=await a.request({method:e,params:r});return f({method:e,params:r,response:t,transport:a,status:"success"}),t}catch(s){if(f({error:s,method:e,params:r,transport:a,status:"error"}),c(s)||o===h.length-1||!(n??=h.slice(o+1).some(r=>{let{include:n,exclude:i}=r({chain:t}).config.methods||{};return n?n.includes(e):!i||!i.includes(e)})))throw s;return i(o+1)}};return i()},retryCount:u,retryDelay:d,type:"fallback"},{onResponse:e=>f=e,transports:h.map(e=>e({chain:t,retryCount:0}))});if(i){let e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,ping:n,sampleCount:i=10,timeout:a=1e3,transports:s,weights:l={}}){let{stability:c=.7,latency:u=.3}=l,d=[],p=async()=>{let l=await Promise.all(s.map(async t=>{let r,i,o=t({chain:e,retryCount:0,timeout:a}),s=Date.now();try{await (n?n({transport:o}):o.request({method:"net_listening"})),i=1}catch{i=0}finally{r=Date.now()}return{latency:r-s,success:i}}));d.push(l),d.length>i&&d.shift();let h=Math.max(...d.map(e=>Math.max(...e.map(({latency:e})=>e))));r(s.map((e,t)=>{let r=d.map(e=>e[t].latency),n=r.reduce((e,t)=>e+t,0)/r.length,i=d.map(e=>e[t].success),o=i.reduce((e,t)=>e+t,0)/i.length;return 0===o?[0,t]:[u*(1-n/h)+c*o,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>s[e])),await (0,o.u)(t),p()};p()}({chain:t,interval:e.interval??s,onTransports:e=>h=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:h,weights:e.weights})}return w}}function l(e){return!!("code"in e&&"number"==typeof e.code&&(e.code===i.YW.code||e.code===i.vx.code||e.code===i.nR.code||n.A7.nodeMessage.test(e.message)||5e3===e.code))}},55079:(e,t,r)=>{r.d(t,{b:()=>n});var n=r(91976)},57438:(e,t,r)=>{r.d(t,{G:()=>a});var n=r(63388),i=r(4975),o=r(79682),a=({projectId:e,walletConnectParameters:t})=>{let a=(0,i.q)({flag:"isRainbow"}),s=!a,l=e=>(0,n.m0)()?e:(0,n.un)()?`rainbow://wc?uri=${encodeURIComponent(e)}&connector=rainbowkit`:`https://rnbwapp.com/wc?uri=${encodeURIComponent(e)}&connector=rainbowkit`;return{id:"rainbow",name:"Rainbow",rdns:"me.rainbow",iconUrl:async()=>(await r.e(5542).then(r.bind(r,95542))).default,iconBackground:"#0c2f78",installed:s?void 0:a,downloadUrls:{android:"https://play.google.com/store/apps/details?id=me.rainbow&referrer=utm_source%3Drainbowkit&utm_source=rainbowkit",ios:"https://apps.apple.com/app/apple-store/id1457119021?pt=119997837&ct=rainbowkit&mt=8",mobile:"https://rainbow.download?utm_source=rainbowkit",qrCode:"https://rainbow.download?utm_source=rainbowkit&utm_medium=qrcode",browserExtension:"https://rainbow.me/extension?utm_source=rainbowkit"},mobile:{getUri:s?l:void 0},qrCode:s?{getUri:l,instructions:{learnMoreUrl:"https://learn.rainbow.me/connect-to-a-website-or-app?utm_source=rainbowkit&utm_medium=connector&utm_campaign=learnmore",steps:[{description:"wallet_connectors.rainbow.qr_code.step1.description",step:"install",title:"wallet_connectors.rainbow.qr_code.step1.title"},{description:"wallet_connectors.rainbow.qr_code.step2.description",step:"create",title:"wallet_connectors.rainbow.qr_code.step2.title"},{description:"wallet_connectors.rainbow.qr_code.step3.description",step:"scan",title:"wallet_connectors.rainbow.qr_code.step3.title"}]}}:void 0,createConnector:s?(0,o.Z)({projectId:e,walletConnectParameters:t}):(0,i.o)({flag:"isRainbow"})}}},58362:(e,t,r)=>{r.d(t,{e:()=>u});var n=r(88702),i=r(96269);async function o(e,t){let r;if((r="function"==typeof t.connector?e._internal.connectors.setup(t.connector):t.connector).uid===e.state.current)throw new i.nM;try{e.setState(e=>({...e,status:"connecting"})),r.emitter.emit("message",{type:"connecting"});let{connector:n,...i}=t,o=await r.connect(i);return r.emitter.off("connect",e._internal.events.connect),r.emitter.on("change",e._internal.events.change),r.emitter.on("disconnect",e._internal.events.disconnect),await e.storage?.setItem("recentConnectorId",r.id),e.setState(e=>({...e,connections:new Map(e.connections).set(r.uid,{accounts:i.withCapabilities?o.accounts.map(e=>"object"==typeof e?e.address:e):o.accounts,chainId:o.chainId,connector:r}),current:r.uid,status:"connected"})),{accounts:i.withCapabilities?o.accounts.map(e=>"object"==typeof e?e:{address:e,capabilities:{}}):o.accounts,chainId:o.chainId}}catch(t){throw e.setState(e=>({...e,status:e.current?"connected":"disconnected"})),t}}var a=r(26916),s=r(40949);let l=[];function c(e){let t=e.connectors;return l.length===t.length&&l.every((e,r)=>e===t[r])?l:(l=t,t)}function u(e={}){let{mutation:t}=e,r=(0,s.U)(e),i={mutationFn:e=>o(r,e),mutationKey:["connect"]},{mutate:l,mutateAsync:d,...p}=(0,n.n)({...t,...i});return(0,a.useEffect)(()=>r.subscribe(({status:e})=>e,(e,t)=>{"connected"===t&&"disconnected"===e&&p.reset()}),[r,p.reset]),{...p,connect:l,connectAsync:d,connectors:function(e={}){let t=(0,s.U)(e);return(0,a.useSyncExternalStore)(e=>(function(e,t){let{onChange:r}=t;return e._internal.connectors.subscribe((e,t)=>{r(Object.values(e),t)})})(t,{onChange:e}),()=>c(t),()=>c(t))}({config:r})}}},59800:(e,t,r)=>{function n(e,t){return Object.defineProperty(e,"__recipe__",{value:t,writable:!1}),e}function i(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");return n(function(e){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return{[t.defaultCondition]:e}}if(Array.isArray(e)){if(!("responsiveArray"in t))throw Error("Responsive arrays are not supported");var r={};for(var n in t.responsiveArray)null!=e[n]&&(r[t.responsiveArray[n]]=e[n]);return r}return e},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:e.conditions}]})}function o(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");var r=i(e);return n(function(e,n){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return n(e,t.defaultCondition)}var i=Array.isArray(e)?r(e):e,o={};for(var a in i)null!=i[a]&&(o[a]=n(i[a],a));return o},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:e.conditions}]})}r.d(t,{q:()=>o,f:()=>i})},60559:(e,t,r)=>{r.d(t,{J:()=>n});let n=(0,r(14917).x)({id:5042,name:"Arc",nativeCurrency:{name:"USDC",symbol:"USDC",decimals:18},rpcUrls:{default:{http:[]}}})},62008:(e,t,r)=>{r.d(t,{X:()=>m,J:()=>w});var n=r(3390),i=r(85948),o=r(27880),a=r(52909),s=r(42906),l=r(89142),c=r(16338),u=r(52782),d=r(88203);let p="/docs/contract/encodeErrorResult";function h(e){let{abi:t,errorName:r,args:n}=e,i=t[0];if(r){let e=(0,d.iY)({abi:t,args:n,name:r});if(!e)throw new a.yy(r,{docsPath:p});i=e}if("error"!==i.type)throw new a.yy(void 0,{docsPath:p});let o=(0,u.B)(i),h=(0,l.V)(o),f="0x";if(n&&n.length>0){if(!i.inputs)throw new a.ZP(i.name,{docsPath:p});f=(0,c.h)(i.inputs,n)}return(0,s.aP)([h,f])}let f="/docs/contract/encodeFunctionResult",w="x-batch-gateway:true";async function m(e){let{data:t,ccipRequest:r}=e,{args:[s]}=(0,o.J)({abi:n.b2,data:t}),l=[],u=[];return await Promise.all(s.map(async(e,t)=>{try{u[t]=e.urls.includes(w)?await m({data:e.data,ccipRequest:r}):await r(e),l[t]=!1}catch(e){var o;l[t]=!0,u[t]="HttpRequestError"===(o=e).name&&o.status?h({abi:n.b2,errorName:"HttpError",args:[o.status,o.shortMessage]}):h({abi:[i.Mc],errorName:"Error",args:["shortMessage"in o?o.shortMessage:o.message]})}})),function(e){let{abi:t,functionName:r,result:n}=e,i=t[0];if(r){let e=(0,d.iY)({abi:t,name:r});if(!e)throw new a.Iz(r,{docsPath:f});i=e}if("function"!==i.type)throw new a.Iz(void 0,{docsPath:f});if(!i.outputs)throw new a.MR(i.name,{docsPath:f});let o=(()=>{if(0===i.outputs.length)return[];if(1===i.outputs.length)return[n];if(Array.isArray(n))return n;throw new a.dm(n)})();return(0,c.h)(i.outputs,o)}({abi:n.b2,functionName:"query",result:[l,u]})}},62684:(e,t,r)=>{r.d(t,{C:()=>m});var n=r(3390),i=r(81368),o=r(52909),a=r(29879),s=r(25800),l=r(23957),c=r(84256),u=r(79416),d=r(19695),p=r(19981),h=r(81414),f=r(79870),w=r(11437);async function m(e,t){let{account:r,authorizationList:h,allowFailure:f=!0,blockHash:m,blockNumber:b,blockOverrides:y,blockTag:A,requireCanonical:v,stateOverride:C}=t,x=t.contracts,k="object"==typeof e.batch?.multicall?e.batch.multicall:{},B=t.batchSize??k.batchSize??1024,E=t.deployless??k.deployless??!1,I=(()=>{if(t.multicallAddress)return t.multicallAddress;if(E)return null;if(e.chain)return(0,u.M)({blockNumber:b,chain:e.chain,contract:"multicall3"});throw Error("client chain not configured. multicallAddress is required.")})(),P=[[]],S=0,M=0;for(let e=0;e<x.length;e++){let{abi:t,address:n,args:i,functionName:o}=x[e];try{let e=(0,c.p)({abi:t,args:i,functionName:o});M+=(e.length-2)/2,B>0&&M>B&&P[S].length>0&&(S++,M=(e.length-2)/2,P[S]=[]),P[S]=[...P[S],{allowFailure:!0,callData:e,target:n}]}catch(a){let e=(0,d.j)(a,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:o,sender:r});if(!f)throw e;P[S]=[...P[S],{allowFailure:!0,callData:"0x",target:n}]}}let T=!!e.batch?.multicall,N=T?P.flatMap(e=>e.map(e=>[e])):P,W=await Promise.allSettled(N.map(t=>T?g(e,{account:r,authorizationList:h,batchSize:B,blockHash:m,blockNumber:b,blockOverrides:y,blockTag:A,call:t[0],multicallAddress:I,requireCanonical:v,stateOverride:C}).then(e=>[e]):(0,p.T)(e,w.J,"readContract")({...null===I?{code:i.Ez}:{address:I},abi:n.v2,account:r,args:[t],authorizationList:h,blockHash:m,blockNumber:b,blockOverrides:y,blockTag:A,functionName:"aggregate3",requireCanonical:v,stateOverride:C}))),F=[];for(let e=0;e<W.length;e++){let t=W[e];if("rejected"===t.status){if(!f)throw t.reason;for(let r=0;r<N[e].length;r++)F.push({status:"failure",error:t.reason,result:void 0});continue}let r=t.value;for(let t=0;t<r.length;t++){let{returnData:n,success:i}=r[t],{callData:a}=N[e][t],{abi:c,address:u,functionName:p,args:h}=x[F.length];try{if("0x"===a)throw new o.O;if(!i)throw new s.$S({data:n});let e=(0,l.e)({abi:c,args:h,data:n,functionName:p});F.push(f?{result:e,status:"success"}:e)}catch(t){let e=(0,d.j)(t,{abi:c,address:u,args:h,docsPath:"/docs/contract/multicall",functionName:p});if(!f)throw e;F.push({error:e,result:void 0,status:"failure"})}}}if(F.length!==x.length)throw new a.C("multicall results mismatch");return F}async function g(e,t){let{batchSize:r,call:o,multicallAddress:a,...s}=t,{wait:l=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{schedule:c}=(0,h.u)({id:(0,f.A)(["multicall",e.uid,r,a,s]),wait:l,shouldSplitBatch:e=>0!==r&&e.reduce((e,{callData:t})=>e+(t.length-2)/2,0)>r,fn:t=>(0,p.T)(e,w.J,"readContract")({...null===a?{code:i.Ez}:{address:a},...s,abi:n.v2,args:[t],functionName:"aggregate3"})}),[u]=await c(o);return u}},63388:(e,t,r)=>{function n(){return"u">typeof navigator&&/android/i.test(navigator.userAgent)}function i(){return"u">typeof navigator&&/iPhone|iPod/.test(navigator.userAgent)||"u">typeof navigator&&(/iPad/.test(navigator.userAgent)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)}function o(){return n()||i()}r.d(t,{Fr:()=>o,m0:()=>n,un:()=>i})},63940:(e,t,r)=>{r.d(t,{i:()=>k});var n=r(11437),i=r(29879);class o extends i.C{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`],name:"EnsAvatarInvalidMetadataError"})}}class a extends i.C{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`,{name:"EnsAvatarInvalidNftUriError"})}}class s extends i.C{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`,{name:"EnsAvatarUriResolutionError"})}}class l extends i.C{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`,{name:"EnsAvatarUnsupportedNamespaceError"})}}i.C;let c=/(?<protocol>https?:\/\/[^/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,u=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,d=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,p=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function h(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!Object.hasOwn(globalThis,"Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function f(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function w({uri:e,gatewayUrls:t}){let r=d.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let n=f(t?.ipfs,"https://ipfs.io"),i=f(t?.arweave,"https://arweave.net"),o=e.match(c),{protocol:a,subpath:l,target:h,subtarget:m=""}=o?.groups||{},g="ipns:/"===a||"ipns/"===l,b="ipfs:/"===a||"ipfs/"===l||u.test(e);if(e.startsWith("http")&&!g&&!b){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((g||b)&&h)return{uri:`${n}/${g?"ipns":"ipfs"}/${h}${m}`,isOnChain:!1,isEncoded:!1};if("ar:/"===a&&h)return{uri:`${i}/${h}${m||""}`,isOnChain:!1,isEncoded:!1};let y=e.replace(p,"");if(y.startsWith("<svg")&&(y=`data:image/svg+xml;base64,${btoa(y)}`),y.startsWith("data:")||y.startsWith("{"))return{uri:y,isOnChain:!0,isEncoded:!1};throw new s({uri:e})}function m(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new o({data:e});return e.image||e.image_url||e.image_data}async function g({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json());return await b({gatewayUrls:e,uri:m(r)})}catch{throw new s({uri:t})}}async function b({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:n}=w({uri:t,gatewayUrls:e});if(n||await h(r))return r;throw new s({uri:t})}async function y(e,{nft:t}){if("erc721"===t.namespace)return(0,n.J)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,n.J)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new l({namespace:t.namespace})}async function A(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?v(e,{gatewayUrls:t,record:r}):b({uri:r,gatewayUrls:t})}async function v(e,{gatewayUrls:t,record:r}){let n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,n,i]=t.split("/"),[o,s]=r.split(":"),[l,c]=n.split(":");if(!o||"eip155"!==o.toLowerCase())throw new a({reason:"Only EIP-155 supported"});if(!s)throw new a({reason:"Chain ID not found"});if(!c)throw new a({reason:"Contract address not found"});if(!i)throw new a({reason:"Token ID not found"});if(!l)throw new a({reason:"ERC namespace not found"});return{chainID:Number.parseInt(s,10),namespace:l.toLowerCase(),contractAddress:c,tokenID:i}}(r),{uri:i,isOnChain:o,isEncoded:s}=w({uri:await y(e,{nft:n}),gatewayUrls:t});if(o&&(i.includes("data:application/json;base64,")||i.startsWith("{")))return b({uri:m(JSON.parse(s?atob(i.replace("data:application/json;base64,","")):i)),gatewayUrls:t});let l=n.tokenID;return"erc1155"===n.namespace&&(l=l.replace("0x","").padStart(64,"0")),g({gatewayUrls:t,uri:i.replace(/(?:0x)?{id}/,l)})}var C=r(19981),x=r(45057);async function k(e,{blockNumber:t,blockTag:r,assetGatewayUrls:n,name:i,gatewayUrls:o,strict:a,universalResolverAddress:s}){let l=await (0,C.T)(e,x.m,"getEnsText")({blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:s,gatewayUrls:o,strict:a});if(!l)return null;try{return await A(e,{record:l,gatewayUrls:n})}catch{return null}}},63955:(e,t,r)=>{r.d(t,{D:()=>n});let n=(0,r(14917).x)({id:42161,name:"Arbitrum One",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockTime:250,rpcUrls:{default:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Arbiscan",url:"https://arbiscan.io",apiUrl:"https://api.arbiscan.io/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}})},64578:(e,t,r)=>{r.d(t,{$:()=>c});var n=r(63940),i=r(70843),o=r(70061),a=r(47573),s=r(58063),l=r(40949);function c(e={}){let{name:t,query:r={}}=e,u=(0,l.U)(e),d=(0,s.i)({config:u}),p=function(e,t={}){return{async queryFn({queryKey:t}){let{name:r,scopeKey:o,...a}=t[1];if(!r)throw Error("name is required");return function(e,t){let{chainId:r,...o}=t,a=e.getClient({chainId:r});return(0,i.T)(a,n.i,"getEnsAvatar")(o)}(e,{...a,name:r})},queryKey:function(e={}){return["ensAvatar",(0,o.xO)(e)]}(t)}}(u,{...e,chainId:e.chainId??d}),h=!!(t&&(r.enabled??!0));return(0,a.IT)({...r,...p,enabled:h})}},68153:(e,t,r)=>{r.d(t,{$:()=>s});var n='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',i={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${n}`,system:n},o={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},a={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},s=({borderRadius:e="large",fontStack:t="rounded",overlayBlur:r="none"})=>({blurs:{modalOverlay:a[r].modalOverlay},fonts:{body:i[t]},radii:{actionButton:o[e].actionButton,connectButton:o[e].connectButton,menuButton:o[e].connectButton,modal:o[e].modal,modalMobile:o[e].modalMobile}})},74133:(e,t,r)=>{r.d(t,{d:()=>s});var n=r(63388),i=r(79682),o=r(2149),a=r(32669),s=({projectId:e,walletConnectParameters:t})=>{var l;let{...c}=s,u="u">typeof window&&(l=window.ethereum,!!l?.isMetaMask&&(!l.isBraveWallet||!!l._events||!!l._state)&&!l.isApexWallet&&!l.isAvalanche&&!l.isBackpack&&!l.isBifrost&&!l.isBitKeep&&!l.isBitski&&!l.isBinance&&!l.isBlockWallet&&!l.isCoinbaseWallet&&!l.isDawn&&!l.isEnkrypt&&!l.isExodus&&!l.isFrame&&!l.isFrontier&&!l.isGamestop&&!l.isHyperPay&&!l.isImToken&&!l.isKuCoinWallet&&!l.isMathWallet&&!l.isNestWallet&&!l.isOkxWallet&&!l.isOKExWallet&&!l.isOneInchIOSWallet&&!l.isOneInchAndroidWallet&&!l.isOpera&&!l.isPhantom&&!l.isZilPay&&!l.isPortal&&!l.isxPortal&&!l.isRabby&&!l.isRainbow&&!l.isStatus&&!l.isTalisman&&!l.isTally&&!l.isTokenPocket&&!l.isTokenary&&!l.isTrust&&!l.isTrustWallet&&!l.isCTRL&&!l.isZeal&&!l.isCoin98&&!l.isMEWwallet&&!l.isSafeheron&&!l.isSafePal&&!l.isWigwam&&!l.isZerion&&!l.__seif&&!0),d=!u&&!(0,n.Fr)(),p=u||(0,n.Fr)();return{id:"metaMask",name:"MetaMask",rdns:"io.metamask",iconUrl:async()=>(await r.e(2335).then(r.bind(r,62335))).default,iconAccent:"#f6851a",iconBackground:"#fff",installed:u||void 0,downloadUrls:{android:"https://play.google.com/store/apps/details?id=io.metamask",ios:"https://apps.apple.com/us/app/metamask/id1438144202",mobile:"https://metamask.io/download",qrCode:"https://metamask.io/download",chrome:"https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",edge:"https://microsoftedge.microsoft.com/addons/detail/metamask/ejbalbakoplchlghecdalmeeeajnimhm",firefox:"https://addons.mozilla.org/firefox/addon/ether-metamask",opera:"https://addons.opera.com/extensions/details/metamask-10",browserExtension:"https://metamask.io/download"},mobile:{getUri:p?e=>e:void 0},qrCode:d?{getUri:e=>`https://metamask.app.link/wc?uri=${encodeURIComponent(e)}`,instructions:{learnMoreUrl:"https://metamask.io/faqs/",steps:[{description:"wallet_connectors.metamask.qr_code.step1.description",step:"install",title:"wallet_connectors.metamask.qr_code.step1.title"},{description:"wallet_connectors.metamask.qr_code.step2.description",step:"create",title:"wallet_connectors.metamask.qr_code.step2.title"},{description:"wallet_connectors.metamask.qr_code.step3.description",step:"refresh",title:"wallet_connectors.metamask.qr_code.step3.title"}]}}:void 0,extension:{instructions:{learnMoreUrl:"https://metamask.io/faqs/",steps:[{description:"wallet_connectors.metamask.extension.step1.description",step:"install",title:"wallet_connectors.metamask.extension.step1.title"},{description:"wallet_connectors.metamask.extension.step2.description",step:"create",title:"wallet_connectors.metamask.extension.step2.title"},{description:"wallet_connectors.metamask.extension.step3.description",step:"refresh",title:"wallet_connectors.metamask.extension.step3.title"}]}},createConnector:d?(0,i.Z)({projectId:e,walletConnectParameters:t}):e=>(0,o.U)(r=>{let n=(0,a.e)({dappMetadata:{connector:"rainbowkit",name:t?.metadata?.name,iconUrl:t?.metadata?.icons[0],url:t?.metadata?.url},headless:!0,checkInstallationImmediately:!1,enableAnalytics:!1,...c})(r);return{...n,...e,getChainId:async()=>{try{return await n.getChainId()}catch{return r.chains[0]?.id??1}}}})}}},74928:(e,t,r)=>{r.d(t,{e:()=>s});var n=r(50645);function i(e,t={}){let r=function(e,t={}){try{return e.getClient(t)}catch{return}}(e,t);return r?.extend(n.$)}var o=r(99067),a=r(40949);function s(e={}){let t=(0,a.U)(e);return(0,o.useSyncExternalStoreWithSelector)(e=>(function(e,t){let{onChange:r}=t;return e.subscribe(()=>i(e),r,{equalityFn:(e,t)=>e?.uid===t?.uid})})(t,{onChange:e}),()=>i(t,e),()=>i(t,e),e=>e,(e,t)=>e?.uid===t?.uid)}},75150:(e,t,r)=>{r.d(t,{b:()=>d});var n=r(95568),i=r(41720),o=r(46074),a=r(39639),s=r(12825),l=r(96269),c=r(28134),u=r(2149);function d(e={}){let t,r,f,w,{shimDisconnect:m=!0,unstable_shimAsyncInject:g}=e;function b(){let t=e.target;if("function"==typeof t){let e=t();if(e)return e}return"object"==typeof t?t:"string"==typeof t?{...p[t]??{id:t,name:`${t[0].toUpperCase()}${t.slice(1)}`,provider:`is${t[0].toUpperCase()}${t.slice(1)}`}}:{id:"injected",name:"Injected",provider:e=>e?.ethereum}}return(0,u.U)(u=>({get icon(){return b().icon},get id(){return b().id},get name(){return b().name},get supportsSimulation(){return!0},type:d.type,async setup(){let r=await this.getProvider();r?.on&&e.target&&(f||(f=this.onConnect.bind(this),r.on("connect",f)),t||(t=this.onAccountsChanged.bind(this),r.on("accountsChanged",t)))},async connect({chainId:o,isReconnecting:a,withCapabilities:s}={}){let l=await this.getProvider();if(!l)throw new c.N;let d=[];if(a)d=await this.getAccounts().catch(()=>[]);else if(m)try{let e=await l.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]});(d=e[0]?.caveats?.[0]?.value?.map(e=>(0,n.b)(e))).length>0&&(d=await this.getAccounts())}catch(e){if(e.code===i.vx.code)throw new i.vx(e);if(e.code===i.qZ.code)throw e}try{d?.length||a||(d=(await l.request({method:"eth_requestAccounts"})).map(e=>(0,n.b)(e))),f&&(l.removeListener("connect",f),f=void 0),t||(t=this.onAccountsChanged.bind(this),l.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),l.on("chainChanged",r)),w||(w=this.onDisconnect.bind(this),l.on("disconnect",w));let c=await this.getChainId();if(o&&c!==o){let e=await this.switchChain({chainId:o}).catch(e=>{if(e.code===i.vx.code)throw e;return{id:c}});c=e?.id??c}return m&&await u.storage?.removeItem(`${this.id}.disconnected`),e.target||await u.storage?.setItem("injected.connected",!0),{accounts:s?d.map(e=>({address:e,capabilities:{}})):d,chainId:c}}catch(e){if(e.code===i.vx.code)throw new i.vx(e);if(e.code===i.qZ.code)throw new i.qZ(e);throw e}},async disconnect(){let t=await this.getProvider();if(!t)throw new c.N;r&&(t.removeListener("chainChanged",r),r=void 0),w&&(t.removeListener("disconnect",w),w=void 0),f||(f=this.onConnect.bind(this),t.on("connect",f));try{await (0,o.w)(()=>t.request({method:"wallet_revokePermissions",params:[{eth_accounts:{}}]}),{timeout:100})}catch{}m&&await u.storage?.setItem(`${this.id}.disconnected`,!0),e.target||await u.storage?.removeItem("injected.connected")},async getAccounts(){let e=await this.getProvider();if(!e)throw new c.N;return(await e.request({method:"eth_accounts"})).map(e=>(0,n.b)(e))},async getChainId(){let e=await this.getProvider();if(!e)throw new c.N;return Number(await e.request({method:"eth_chainId"}))},async getProvider(){let e;if("u"<typeof window)return;let t=b();return(e="function"==typeof t.provider?t.provider(window):"string"==typeof t.provider?h(window,t.provider):t.provider)&&!e.removeListener&&("off"in e&&"function"==typeof e.off?e.removeListener=e.off:e.removeListener=()=>{}),e},async isAuthorized(){try{if(m&&await u.storage?.getItem(`${this.id}.disconnected`)||!e.target&&!await u.storage?.getItem("injected.connected"))return!1;if(!await this.getProvider()){if(void 0!==g&&!1!==g){let e=async()=>("u">typeof window&&window.removeEventListener("ethereum#initialized",e),!!await this.getProvider()),t="number"==typeof g?g:1e3;if(await Promise.race([..."u">typeof window?[new Promise(t=>window.addEventListener("ethereum#initialized",()=>t(e()),{once:!0}))]:[],new Promise(r=>setTimeout(()=>r(e()),t))]))return!0}throw new c.N}return!!(await (0,a.b)(()=>this.getAccounts())).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider();if(!r)throw new c.N;let n=u.chains.find(e=>e.id===t);if(!n)throw new i.ch(new l.nk);let o=new Promise(e=>{let r=n=>{"chainId"in n&&n.chainId===t&&(u.emitter.off("change",r),e())};u.emitter.on("change",r)});try{return await Promise.all([r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,s.cK)(t)}]}).then(async()=>{await this.getChainId()===t&&u.emitter.emit("change",{chainId:t})}),o]),n}catch(a){if(4902===a.code||a?.data?.originalError?.code===4902)try{let a,l,{default:c,...d}=n.blockExplorers??{};e?.blockExplorerUrls?a=e.blockExplorerUrls:c&&(a=[c.url,...Object.values(d).map(e=>e.url)]),l=e?.rpcUrls?.length?e.rpcUrls:[n.rpcUrls.default?.http[0]??""];let p={blockExplorerUrls:a,chainId:(0,s.cK)(t),chainName:e?.chainName??n.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??n.nativeCurrency,rpcUrls:l};return await Promise.all([r.request({method:"wallet_addEthereumChain",params:[p]}).then(async()=>{if(await this.getChainId()===t)u.emitter.emit("change",{chainId:t});else throw new i.vx(Error("User rejected switch after adding network."))}),o]),n}catch(e){throw new i.vx(e)}if(a.code===i.vx.code)throw new i.vx(a);throw new i.ch(a)}},async onAccountsChanged(e){if(0===e.length)this.onDisconnect();else if(u.emitter.listenerCount("connect")){let e=(await this.getChainId()).toString();this.onConnect({chainId:e}),m&&await u.storage?.removeItem(`${this.id}.disconnected`)}else u.emitter.emit("change",{accounts:e.map(e=>(0,n.b)(e))})},onChainChanged(e){let t=Number(e);u.emitter.emit("change",{chainId:t})},async onConnect(e){let n=await this.getAccounts();if(0===n.length)return;let i=Number(e.chainId);u.emitter.emit("connect",{accounts:n,chainId:i});let o=await this.getProvider();o&&(f&&(o.removeListener("connect",f),f=void 0),t||(t=this.onAccountsChanged.bind(this),o.on("accountsChanged",t)),r||(r=this.onChainChanged.bind(this),o.on("chainChanged",r)),w||(w=this.onDisconnect.bind(this),o.on("disconnect",w)))},async onDisconnect(e){let t=await this.getProvider();e&&1013===e.code&&t&&(await this.getAccounts()).length||(u.emitter.emit("disconnect"),t&&(r&&(t.removeListener("chainChanged",r),r=void 0),w&&(t.removeListener("disconnect",w),w=void 0),f||(f=this.onConnect.bind(this),t.on("connect",f))))}}))}d.type="injected";let p={coinbaseWallet:{id:"coinbaseWallet",name:"Coinbase Wallet",provider:e=>e?.coinbaseWalletExtension?e.coinbaseWalletExtension:h(e,"isCoinbaseWallet")},metaMask:{id:"metaMask",name:"MetaMask",provider:e=>h(e,e=>{if(!e.isMetaMask||e.isBraveWallet&&!e._events&&!e._state)return!1;for(let t of["isApexWallet","isAvalanche","isBitKeep","isBlockWallet","isKuCoinWallet","isMathWallet","isOkxWallet","isOKExWallet","isOneInchIOSWallet","isOneInchAndroidWallet","isOpera","isPhantom","isPortal","isRabby","isTokenPocket","isTokenary","isUniswapWallet","isZerion"])if(e[t])return!1;return!0})},phantom:{id:"phantom",name:"Phantom",provider:e=>e?.phantom?.ethereum?e.phantom?.ethereum:h(e,"isPhantom")}};function h(e,t){function r(e){return"function"==typeof t?t(e):"string"!=typeof t||e[t]}let n=e.ethereum;return n?.providers?n.providers.find(e=>r(e)):n&&r(n)?n:void 0}},77155:(e,t,r)=>{r.d(t,{J:()=>o});var n=r(29879),i=r(25800);function o(e){if(!(e instanceof n.C))return!1;let t=e.walk(e=>e instanceof i.M);return t instanceof i.M&&(t.data?.errorName==="HttpError"||t.data?.errorName==="ResolverError"||t.data?.errorName==="ResolverNotContract"||t.data?.errorName==="ResolverNotFound"||t.data?.errorName==="ReverseAddressMismatch"||t.data?.errorName==="UnsupportedResolverProfile")}},77337:(e,t,r)=>{r.d(t,{g:()=>s});var n=r(2149),i=r(28134),o=r(95568),a=r(46074);function s(e={}){let t,l,{shimDisconnect:c=!1}=e;return(0,n.U)(n=>({id:"safe",name:"Safe",type:s.type,async connect({withCapabilities:e}={}){let t=await this.getProvider();if(!t)throw new i.N;let r=await this.getAccounts(),o=await this.getChainId();return l||(l=this.onDisconnect.bind(this),t.on("disconnect",l)),c&&await n.storage?.removeItem("safe.disconnected"),{accounts:e?r.map(e=>({address:e,capabilities:{}})):r,chainId:o}},async disconnect(){let e=await this.getProvider();if(!e)throw new i.N;l&&(e.removeListener("disconnect",l),l=void 0),c&&await n.storage?.setItem("safe.disconnected",!0)},async getAccounts(){let e=await this.getProvider();if(!e)throw new i.N;return(await e.request({method:"eth_accounts"})).map(o.b)},async getProvider(){if("u">typeof window&&window?.parent!==window){if(!t){let{default:n}=await r.e(2037).then(r.bind(r,22037)),i=new n(e),o=await (0,a.w)(()=>i.safe.getInfo(),{timeout:e.unstable_getInfoTimeout??10});if(!o)throw Error("Could not load Safe information");t=new(await (async()=>{let e=await Promise.all([r.e(2037),r.e(542)]).then(r.t.bind(r,20542,19));return"function"!=typeof e.SafeAppProvider&&"function"==typeof e.default.SafeAppProvider?e.default.SafeAppProvider:e.SafeAppProvider})())(o,i)}return t}},async getChainId(){let e=await this.getProvider();if(!e)throw new i.N;return Number(e.chainId)},async isAuthorized(){try{if(c&&await n.storage?.getItem("safe.disconnected"))return!1;return!!(await this.getAccounts()).length}catch{return!1}},onAccountsChanged(){},onChainChanged(){},onDisconnect(){n.emitter.emit("disconnect")}}))}s.type="safe"},79383:(e,t,r)=>{r.d(t,{$:()=>a});var n=r(2149),i=r(89016),o=({appName:e,appIcon:t})=>{let{preference:a,...s}=o;return{id:"base",aliases:["baseAccount"],name:"Base",shortName:"Base",rdns:"app.base.account",iconUrl:async()=>(await r.e(5931).then(r.bind(r,85931))).default,iconAccent:"#0000FF",iconBackground:"#0000FF",installed:!0,createConnector:r=>{let o=(0,i.$)({appName:e,appLogoUrl:t,...s,preference:{telemetry:!1,...a||{}}});return(0,n.U)(e=>({...o(e),...r}))}}},a=o},79682:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(2149),i=r(87777),o=r(94257),a="u"<typeof window,s=new Map;function l({projectId:e,walletConnectParameters:t}){if(!e||""===e)throw Error("No projectId found. Every dApp must now provide a WalletConnect Cloud projectId to enable WalletConnect v2 https://www.rainbowkit.com/docs/installation#configure");return"YOUR_PROJECT_ID"===e&&(e="21fef48091f12692cad574a6f7753643"),r=>(function({projectId:e,walletDetails:t,walletConnectParameters:r}){return(0,n.U)(n=>({...(({projectId:e,walletConnectParameters:t,rkDetailsShowQrModal:r,rkDetailsIsWalletConnectModalConnector:n})=>{if(a)return(0,i.P)({accounts:["0x0000000000000000000000000000000000000000"]});let l={telemetryEnabled:!1,...t||{},projectId:e,showQrModal:!1};r&&(l={...l,showQrModal:!0}),"customStoragePrefix"in l||(l={...l,customStoragePrefix:n?"clientOne":"clientTwo"});let c=JSON.stringify(l),u=s.get(c);if(u)return u;let d=(0,o.u)(l);return s.set(c,d),d})({projectId:e,walletConnectParameters:r,rkDetailsShowQrModal:t.rkDetails.showQrModal,rkDetailsIsWalletConnectModalConnector:t.rkDetails.isWalletConnectModalConnector})(n),...t}))})({projectId:e,walletDetails:r,walletConnectParameters:t})}},83152:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(79682),i=({projectId:e,options:t})=>({id:"walletConnect",name:"WalletConnect",installed:void 0,iconUrl:async()=>(await r.e(3948).then(r.bind(r,53948))).default,iconBackground:"#3b99fc",qrCode:{getUri:e=>e},createConnector:(0,n.Z)({projectId:e,walletConnectParameters:t})})},84758:(e,t,r)=>{r.d(t,{L:()=>d});var n=r(54754),i=r(29879);class o extends i.C{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro",name:"UrlRequiredError"})}}var a=r(81414),s=r(92523),l=r(72163);let c=0,u=new WeakMap;function d(e,t={}){let{batch:r,fetchFn:i,fetchOptions:p,key:h="http",maxResponseBodySize:f,methods:w,name:m="HTTP JSON-RPC",onFetchRequest:g,onFetchResponse:b,retryDelay:y,raw:A}=t;return({chain:d,retryCount:v,timeout:C})=>{let{batchSize:x=1e3,wait:k=0}="object"==typeof r?r:{},B=t.retryCount??v,E=C??t.timeout??1e4,I=e||d?.rpcUrls.default.http[0];if(!I)throw new o;let P=(0,s.d)(I,{fetchFn:i,fetchOptions:p,maxResponseBodySize:f,onRequest:g,onResponse:b,timeout:E});return(0,l.o)({key:h,methods:w,name:m,async request({method:e,params:t},i){let o={method:e,params:t},s=i?.signal?{signal:i.signal}:void 0,{schedule:l}=(0,a.u)({id:`${I}.${function(e){if(!e)return"default";let t=u.get(e);if(void 0!==t)return t;let r=c++;return u.set(e,r),r}(i?.signal)}`,wait:k,shouldSplitBatch:e=>e.length>x,fn:e=>P.request({body:e,fetchOptions:s}),sort:(e,t)=>e.id-t.id}),d=async e=>r?l(e):[await P.request({body:e,fetchOptions:s})],[{error:p,result:h}]=await d(o);if(A)return{error:p,result:h};if(p)throw new n.J8({body:o,error:p,url:I});return h},retryCount:B,retryDelay:y,timeout:E,type:"http"},{fetchOptions:p,url:I})}}},86203:(e,t,r)=>{r.d(t,{$:()=>n});let n=(0,r(14917).x)({id:14,name:"Flare Mainnet",nativeCurrency:{decimals:18,name:"Flare",symbol:"FLR"},rpcUrls:{default:{http:["https://flare-api.flare.network/ext/C/rpc"]}},blockExplorers:{default:{name:"Flare Explorer",url:"https://flare-explorer.flare.network",apiUrl:"https://flare-explorer.flare.network/api"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:3002461}}})},86999:(e,t,r)=>{r.d(t,{H:()=>o});var n=r(2149),i=r(77337),o=()=>({id:"safe",name:"Safe",iconAccent:"#12ff80",iconBackground:"#fff",iconUrl:async()=>(await r.e(3328).then(r.bind(r,43328))).default,installed:"u">typeof window&&window?.parent!==window,downloadUrls:{},createConnector:e=>(0,n.U)(t=>({...(0,i.g)()(t),...e}))})},87777:(e,t,r)=>{r.d(t,{P:()=>f});var n=r(41720),i=r(95568),o=r(56466),a=r(12825),s=r(54754),l=r(43313),c=r(37770),u=r(92523);let d=(e,t)=>(0,u.d)(e).request(t);var p=r(96269),h=r(2149);function f(e){let t,r=new Map,u=e.features??{defaultConnected:!1},w=u.defaultConnected;return(0,h.U)(h=>({id:"mock",name:"Mock Connector",type:f.type,async setup(){t=h.chains[0].id},async connect({chainId:e,withCapabilities:t}={}){if(u.connectError){if("boolean"==typeof u.connectError)throw new n.vx(Error("Failed to connect."));throw u.connectError}let r=await this.getProvider(),o=await r.request({method:"eth_requestAccounts"}),a=await this.getChainId();return e&&a!==e&&(a=(await this.switchChain({chainId:e})).id),w=!0,{accounts:t?o.map(e=>({address:(0,i.b)(e),capabilities:{foo:{bar:e}}})):o.map(e=>(0,i.b)(e)),chainId:a}},async disconnect(){w=!1},async getAccounts(){if(!w)throw new p.gC;let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,i.b)(e))},async getChainId(){let e=await this.getProvider(),t=await e.request({method:"eth_chainId"});return(0,o.aD)(t,"number")},async isAuthorized(){return!!u.reconnect&&!!w&&!!(await this.getAccounts()).length},async switchChain({chainId:e}){let t=await this.getProvider(),r=h.chains.find(t=>t.id===e);if(!r)throw new n.ch(new p.nk);return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,a.cK)(e)}]}),r},onAccountsChanged(e){0===e.length?this.onDisconnect():h.emitter.emit("change",{accounts:e.map(e=>(0,i.b)(e))})},onChainChanged(e){let t=Number(e);h.emitter.emit("change",{chainId:t})},async onDisconnect(e){h.emitter.emit("disconnect"),w=!1},async getProvider({chainId:i}={}){let p=(h.chains.find(e=>e.id===i)??h.chains[0]).rpcUrls.default.http[0],f=async({method:i,params:c})=>{if("eth_chainId"===i)return(0,a.cK)(t);if("eth_requestAccounts"===i)return e.accounts;if("eth_signTypedData_v4"===i&&u.signTypedDataError){if("boolean"==typeof u.signTypedDataError)throw new n.vx(Error("Failed to sign typed data."));throw u.signTypedDataError}if("wallet_switchEthereumChain"===i){if(u.switchChainError){if("boolean"==typeof u.switchChainError)throw new n.vx(Error("Failed to switch chain."));throw u.switchChainError}t=(0,o.aD)(c[0].chainId,"number"),this.onChainChanged(t.toString());return}if("wallet_watchAsset"===i){if(u.watchAssetError){if("boolean"==typeof u.watchAssetError)throw new n.vx(Error("Failed to switch chain."));throw u.watchAssetError}return w}if("wallet_getCapabilities"===i)return{"0x2105":{paymasterService:{supported:"0x95132632579b073D12a6673e18Ab05777a6B86f8"===c[0]},sessionKeys:{supported:!0}},"0x14A34":{paymasterService:{supported:"0x95132632579b073D12a6673e18Ab05777a6B86f8"===c[0]}}};if("wallet_sendCalls"===i){let e=[],t=c[0].calls,n=c[0].from;for(let r of t){let{result:t,error:o}=await d(p,{body:{method:"eth_sendTransaction",params:[{...r,...void 0!==n?{from:n}:{}}]}});if(o)throw new s.J8({body:{method:i,params:c},error:o,url:p});e.push(t)}let o=(0,l.S)((0,a.i3)(JSON.stringify(t)));return r.set(o,e),{id:o}}if("wallet_getCallsStatus"===i){let e=r.get(c[0]);if(!e)return{atomic:!1,chainId:"0x1",id:c[0],status:100,receipts:[],version:"2.0.0"};let t=(await Promise.all(e.map(async e=>{let{result:t,error:r}=await d(p,{body:{method:"eth_getTransactionReceipt",params:[e],id:0}});if(r)throw new s.J8({body:{method:i,params:c},error:r,url:p});return t?{blockHash:t.blockHash,blockNumber:t.blockNumber,gasUsed:t.gasUsed,logs:t.logs,status:t.status,transactionHash:t.transactionHash}:null}))).filter(e=>null!==e);return 0===t.length?{atomic:!1,chainId:"0x1",id:c[0],status:100,receipts:[],version:"2.0.0"}:{atomic:!1,chainId:"0x1",id:c[0],status:200,receipts:t,version:"2.0.0"}}if("wallet_showCallsStatus"===i)return;if("personal_sign"===i){if(u.signMessageError){if("boolean"==typeof u.signMessageError)throw new n.vx(Error("Failed to sign message."));throw u.signMessageError}i="eth_sign",c=[c[1],c[0]]}let h={method:i,params:c},{error:f,result:m}=await d(p,{body:h});if(f)throw new s.J8({body:h,error:f,url:p});return m};return(0,c.I)({request:f})({retryCount:0})}}))}f.type="mock"},88881:(e,t,r)=>{r.d(t,{o:()=>a});var n=r(63388),i=r(4975),o=r(79682),a=({projectId:e,walletConnectParameters:t})=>{let a=(0,i.q)({namespace:"binancew3w.isExtension",flag:"isBinance"}),s=!a;return{id:"binance",name:"Binance Wallet",rdns:"com.binance.wallet",iconUrl:async()=>(await r.e(6736).then(r.bind(r,76736))).default,iconBackground:"#000000",installed:s?void 0:a,downloadUrls:{android:"https://play.google.com/store/apps/details?id=com.binance.dev",ios:"https://apps.apple.com/us/app/id1436799971",mobile:"https://www.binance.com/en/download",qrCode:"https://www.binance.com/en/web3wallet",chrome:"https://chromewebstore.google.com/detail/cadiboklkpojfamcoggejbbdjcoiljjk"},mobile:s?{getUri:e=>(0,n.m0)()?e:`bnc://app.binance.com/cedefi/wc?uri=${encodeURIComponent(e)}`}:void 0,qrCode:s?{getUri:e=>e,instructions:{learnMoreUrl:"https://www.binance.com/en/web3wallet",steps:[{description:"wallet_connectors.binance.qr_code.step1.description",step:"install",title:"wallet_connectors.binance.qr_code.step1.title"},{description:"wallet_connectors.binance.qr_code.step2.description",step:"create",title:"wallet_connectors.binance.qr_code.step2.title"},{description:"wallet_connectors.binance.qr_code.step3.description",step:"scan",title:"wallet_connectors.binance.qr_code.step3.title"}]}}:void 0,createConnector:s?(0,o.Z)({projectId:e,walletConnectParameters:t}):(0,i.o)({flag:"isBinance"})}}},89016:(e,t,r)=>{r.d(t,{$:()=>l});var n=r(2149),i=r(96269),o=r(12825),a=r(95568),s=r(41720);function l(e={}){let t,c,u,d;return(0,n.U)(n=>({id:"baseAccount",name:"Base Account",rdns:"app.base.account",type:"baseAccount",async connect({chainId:e,withCapabilities:t,...r}={}){try{let l=await this.getProvider(),p=e??n.chains[0]?.id;if(!p)throw new i.nk;let h=await l.request({method:"wallet_connect",params:[{capabilities:"capabilities"in r&&r.capabilities?r.capabilities:{},chainIds:[(0,o.cK)(p),...n.chains.filter(e=>e.id!==p).map(e=>(0,o.cK)(e.id))]}]}),f=h.accounts.map(e=>({address:(0,a.b)(e.address),capabilities:e.capabilities??{}})),w=Number(h.chainIds[0]);if(c||(c=this.onAccountsChanged.bind(this),l.on("accountsChanged",c)),u||(u=this.onChainChanged.bind(this),l.on("chainChanged",u)),d||(d=this.onDisconnect.bind(this),l.on("disconnect",d)),e&&w!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===s.vx.code)throw e;return{id:w}});w=t?.id??w}return{accounts:t?f:f.map(e=>e.address),chainId:w}}catch(e){if(/(user closed modal|accounts received is empty|user denied account|request rejected)/i.test(e.message))throw new s.vx(e);throw e}},async disconnect(){let e=await this.getProvider();c&&(e.removeListener("accountsChanged",c),c=void 0),u&&(e.removeListener("chainChanged",u),u=void 0),d&&(e.removeListener("disconnect",d),d=void 0),e.disconnect()},async getAccounts(){let e=await this.getProvider();return(await e.request({method:"eth_accounts"})).map(e=>(0,a.b)(e))},async getChainId(){let e=await this.getProvider();return Number(await e.request({method:"eth_chainId"}))},async getProvider(){if(!t){let i="string"==typeof e.preference?{options:e.preference}:{...e.preference,options:e.preference?.options??"all"},{createBaseAccountSDK:o}=await Promise.all([r.e(4025),r.e(6259)]).then(r.bind(r,66259));t=o({...e,appChainIds:n.chains.map(e=>e.id),preference:i}).getProvider()}return t},async isAuthorized(){try{return!!(await this.getAccounts()).length}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=n.chains.find(e=>e.id===t);if(!r)throw new s.ch(new i.nk);let a=await this.getProvider();try{return await a.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,o.cK)(r.id)}]}),r}catch(n){if(4902===n.code)try{let n,i;n=e?.blockExplorerUrls?e.blockExplorerUrls:r.blockExplorers?.default.url?[r.blockExplorers?.default.url]:[],i=e?.rpcUrls?.length?e.rpcUrls:[r.rpcUrls.default?.http[0]??""];let s={blockExplorerUrls:n,chainId:(0,o.cK)(t),chainName:e?.chainName??r.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??r.nativeCurrency,rpcUrls:i};return await a.request({method:"wallet_addEthereumChain",params:[s]}),r}catch(e){throw new s.vx(e)}throw new s.ch(n)}},onAccountsChanged(e){0===e.length?this.onDisconnect():n.emitter.emit("change",{accounts:e.map(e=>(0,a.b)(e))})},onChainChanged(e){let t=Number(e);n.emitter.emit("change",{chainId:t})},async onDisconnect(e){n.emitter.emit("disconnect");let t=await this.getProvider();c&&(t.removeListener("accountsChanged",c),c=void 0),u&&(t.removeListener("chainChanged",u),u=void 0),d&&(t.removeListener("disconnect",d),d=void 0)}}))}},91976:e=>{var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function o(e,t,n,o,a){if("function"!=typeof n)throw TypeError("The listener must be a function");var s=new i(n,o||e,a),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function a(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,a=Array(o);i<o;i++)a[i]=n[i].fn;return a},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,i,o,a){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,o),!0;case 6:return u.fn.call(u.context,t,n,i,o,a),!0}for(c=1,l=Array(d-1);c<d;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var p,h=u.length;for(c=0;c<h;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),d){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,i);break;default:if(!l)for(p=1,l=Array(d-1);p<d;p++)l[p-1]=arguments[p];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return o(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return o(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,i){var o=r?r+e:e;if(!this._events[o])return this;if(!t)return a(this,o),this;var s=this._events[o];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||a(this,o);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||i&&!s[l].once||n&&s[l].context!==n)&&c.push(s[l]);c.length?this._events[o]=1===c.length?c[0]:c:a(this,o)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&a(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},92523:(e,t,r)=>{r.d(t,{d:()=>l});var n=r(54754),i=r(55746),o=r(46074),a=r(79870);let s={current:0,take(){return this.current++},reset(){this.current=0}};function l(e,t={}){let{url:r,headers:u}=function(e){try{let t=new URL(e),r=(()=>{if(t.username){let e=`${decodeURIComponent(t.username)}:${decodeURIComponent(t.password)}`;return t.username="",t.password="",{url:t.toString(),headers:{Authorization:`Basic ${btoa(e)}`}}}})();return{url:t.toString(),...r}}catch{return{url:e}}}(e);return{async request(e){let{body:l,fetchFn:d=t.fetchFn??fetch,maxResponseBodySize:p=t.maxResponseBodySize??0xa00000,onRequest:h=t.onRequest,onResponse:f=t.onResponse,timeout:w=t.timeout??1e4}=e,m={...t.fetchOptions??{},...e.fetchOptions??{}},{headers:g,method:b,signal:y}=m;try{let e,t=await (0,o.w)(async({signal:e})=>{let t={...m,body:Array.isArray(l)?(0,a.A)(l.map(e=>({jsonrpc:"2.0",id:e.id??s.take(),...e}))):(0,a.A)({jsonrpc:"2.0",id:l.id??s.take(),...l}),headers:{...u,"Content-Type":"application/json",...g},method:b||"POST",signal:y||(w>0?e:null)},n=new Request(r,t),i=await h?.(n,t)??{...t,url:r};return await d(i.url??r,i)},{errorInstance:new n.MU({body:l,url:r}),timeout:w,signal:!0});f&&await f(t);let i=await c(t,{maxResponseBodySize:p});if(t.headers.get("Content-Type")?.startsWith("application/json"))e=JSON.parse(i);else{e=i;try{e=JSON.parse(e||"{}")}catch(r){if(t.ok)throw r;e={error:e}}}if(!t.ok){if("number"==typeof e.error?.code&&"string"==typeof e.error?.message)return e;throw new n.Ci({body:l,details:(0,a.A)(e.error)||t.statusText,headers:t.headers,status:t.status,url:r})}return e}catch(e){if(y?.aborted)throw(0,i.TY)(y);if((0,i.zf)(e)||e instanceof n.Ci||e instanceof n.f||e instanceof n.MU)throw e;throw new n.Ci({body:l,cause:e,url:r})}}}}async function c(e,{maxResponseBodySize:t}){if(!1===t)return e.text();let r=e.headers.get("Content-Length");if(r){let e=Number(r);if(e>t)throw new n.f({maxSize:t,size:e})}if(!e.body){let r=await e.text(),i=new TextEncoder().encode(r).length;if(i>t)throw new n.f({maxSize:t,size:i});return r}let i=e.body.getReader(),o=new TextDecoder,a="",s=0;try{for(;;){let{done:e,value:r}=await i.read();if(e)break;if((s+=r.byteLength)>t)throw await i.cancel(),new n.f({maxSize:t,size:s});a+=o.decode(r,{stream:!0})}return a+=o.decode()}finally{i.releaseLock()}}},94257:(e,t,r)=>{r.d(t,{u:()=>u});var n=r(2149),i=r(28134),o=r(29929),a=r(96269),s=r(95568),l=r(41720),c=r(12825);function u(e){let t,d,p,h,f,w,m,g,b=e.isNewChainsStale??!0;return(0,n.U)(n=>({id:"walletConnect",name:"WalletConnect",type:u.type,async setup(){let e=await this.getProvider().catch(()=>null);e&&(f||(f=this.onConnect.bind(this),e.on("connect",f)),m||(m=this.onSessionDelete.bind(this),e.on("session_delete",m)))},async connect({chainId:e,withCapabilities:t,...r}={}){try{let o=await this.getProvider();if(!o)throw new i.N;w||(w=this.onDisplayUri,o.on("display_uri",w));let a=e;if(!a){let e=await n.storage?.getItem("state")??{};a=n.chains.some(t=>t.id===e.chainId)?e.chainId:n.chains[0]?.id}if(!a)throw Error("No chains found on connector.");let c=await this.isChainsStale();if(o.session&&c&&await o.disconnect(),!o.session||c){let e=n.chains.filter(e=>e.id!==a).map(e=>e.id);await o.connect({optionalChains:[a,...e],..."pairingTopic"in r?{pairingTopic:r.pairingTopic}:{}}),this.setRequestedChainsIds(n.chains.map(e=>e.id))}let u=(await o.enable()).map(e=>(0,s.b)(e)),d=await this.getChainId();if(e&&d!==e){let t=await this.switchChain({chainId:e}).catch(e=>{if(e.code===l.vx.code&&e.cause?.message!=="Missing or invalid. request() method: wallet_addEthereumChain")throw e;return{id:d}});d=t?.id??d}return w&&(o.removeListener("display_uri",w),w=void 0),f&&(o.removeListener("connect",f),f=void 0),p||(p=this.onAccountsChanged.bind(this),o.on("accountsChanged",p)),h||(h=this.onChainChanged.bind(this),o.on("chainChanged",h)),g||(g=this.onDisconnect.bind(this),o.on("disconnect",g)),m||(m=this.onSessionDelete.bind(this),o.on("session_delete",m)),{accounts:t?u.map(e=>({address:e,capabilities:{}})):u,chainId:d}}catch(e){if(/(user rejected|connection request reset)/i.test(e?.message))throw new l.vx(e);throw e}},async disconnect(){let e=await this.getProvider();try{await e?.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{h&&(e?.removeListener("chainChanged",h),h=void 0),g&&(e?.removeListener("disconnect",g),g=void 0),f||(f=this.onConnect.bind(this),e?.on("connect",f)),p&&(e?.removeListener("accountsChanged",p),p=void 0),m&&(e?.removeListener("session_delete",m),m=void 0),this.setRequestedChainsIds([])}},async getAccounts(){return(await this.getProvider()).accounts.map(e=>(0,s.b)(e))},async getProvider({chainId:i}={}){async function a(){let t=n.chains.map(e=>e.id);if(!t.length)return;let{EthereumProvider:i}=await Promise.all([r.e(4025),r.e(7246)]).then(r.bind(r,7246));return await i.init({...e,disableProviderPing:!0,optionalChains:t,projectId:e.projectId,rpcMap:Object.fromEntries(n.chains.map(e=>{let[t]=(0,o.R)({chain:e,transports:n.transports});return[e.id,t]})),showQrModal:e.showQrModal??!0})}return t||(d||(d=a()),t=await d,t?.events.setMaxListeners(1/0)),i&&await this.switchChain?.({chainId:i}),t},async getChainId(){return(await this.getProvider()).chainId},async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccounts(),this.getProvider()]);if(!e.length)return!1;if(await this.isChainsStale()&&t.session)return await t.disconnect().catch(()=>{}),!1;return!0}catch{return!1}},async switchChain({addEthereumChainParameter:e,chainId:t}){let r=await this.getProvider();if(!r)throw new i.N;let o=n.chains.find(e=>e.id===t);if(!o)throw new l.ch(new a.nk);try{await Promise.all([new Promise(e=>{let r=({chainId:i})=>{i===t&&(n.emitter.off("change",r),e())};n.emitter.on("change",r)}),r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,c.cK)(t)}]})]);let e=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...e,t]),o}catch(n){if(/(user rejected)/i.test(n.message))throw new l.vx(n);try{let n,i;n=e?.blockExplorerUrls?e.blockExplorerUrls:o.blockExplorers?.default.url?[o.blockExplorers?.default.url]:[],i=e?.rpcUrls?.length?e.rpcUrls:[...o.rpcUrls.default.http];let a={blockExplorerUrls:n,chainId:(0,c.cK)(t),chainName:e?.chainName??o.name,iconUrls:e?.iconUrls,nativeCurrency:e?.nativeCurrency??o.nativeCurrency,rpcUrls:i};await r.request({method:"wallet_addEthereumChain",params:[a]});let s=await this.getRequestedChainsIds();return this.setRequestedChainsIds([...s,t]),o}catch(e){throw new l.vx(e)}}},onAccountsChanged(e){0===e.length?this.onDisconnect():n.emitter.emit("change",{accounts:e.map(e=>(0,s.b)(e))})},onChainChanged(e){let t=Number(e);n.emitter.emit("change",{chainId:t})},async onConnect(e){let t=Number(e.chainId),r=await this.getAccounts();n.emitter.emit("connect",{accounts:r,chainId:t})},async onDisconnect(e){this.setRequestedChainsIds([]),n.emitter.emit("disconnect");let t=await this.getProvider();p&&(t.removeListener("accountsChanged",p),p=void 0),h&&(t.removeListener("chainChanged",h),h=void 0),g&&(t.removeListener("disconnect",g),g=void 0),m&&(t.removeListener("session_delete",m),m=void 0),f||(f=this.onConnect.bind(this),t.on("connect",f))},onDisplayUri(e){n.emitter.emit("message",{type:"display_uri",data:e})},onSessionDelete(){this.onDisconnect()},getNamespaceChainsIds:()=>t?t.session?.namespaces.eip155?.accounts?.map(e=>Number.parseInt(e.split(":")[1]||"",10))??[]:[],async getRequestedChainsIds(){return await n.storage?.getItem(this.requestedChainsStorageKey)??[]},async isChainsStale(){if(!b)return!1;let e=n.chains.map(e=>e.id),t=this.getNamespaceChainsIds();if(t.length&&!t.some(t=>e.includes(t)))return!1;let r=await this.getRequestedChainsIds();return!e.every(e=>r.includes(e))},async setRequestedChainsIds(e){await n.storage?.setItem(this.requestedChainsStorageKey,e)},get requestedChainsStorageKey(){return`${this.id}.requestedChains`}}))}u.type="walletConnect"},96367:(e,t,r)=>{r.d(t,{F:()=>n});let n=(0,r(14917).x)({id:239,name:"TAC",nativeCurrency:{name:"TAC",symbol:"TAC",decimals:18},rpcUrls:{default:{http:["https://rpc.ankr.com/tac"]}},blockExplorers:{default:{name:"Blockscout",url:"https://tac.blockscout.com",apiUrl:"https://tac.blockscout.com/api"},native:{name:"TAC Explorer",url:"https://explorer.tac.build",apiUrl:"https://explorer.tac.build/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0}}})},97793:(e,t,r)=>{r.d(t,{n:()=>n});var n=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "ready": {
      "qr_code": {
        "step1": {
          "description": "Add Ready to your home screen for faster access to your wallet.",
          "title": "Open the Ready app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Binance Wallet extension",
          "description": "We recommend pinning Binance Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ctrl": {
      "extension": {
        "step1": {
          "title": "Install the CTRL Wallet extension",
          "description": "We recommend pinning CTRL Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "gemini": {
      "qr_code": {
        "step1": {
          "title": "Open keys.gemini.com",
          "description": "Visit keys.gemini.com on your mobile browser - no app download required."
        },
        "step2": {
          "title": "Create Your Wallet Instantly",
          "description": "Set up your smart wallet in seconds using your device's built-in authentication."
        },
        "step3": {
          "title": "Scan to Connect",
          "description": "Scan the QR code to instantly connect your wallet - it just works."
        }
      },
      "extension": {
        "step1": {
          "title": "Go to keys.gemini.com",
          "description": "No extensions or downloads needed - your wallet lives securely in the browser."
        },
        "step2": {
          "title": "One-Click Setup",
          "description": "Create your smart wallet instantly with passkey authentication - easier than any wallet out there."
        },
        "step3": {
          "title": "Connect and Go",
          "description": "Approve the connection and you're ready - the unopinionated wallet that just works."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "zilpay": {
      "qr_code": {
        "step1": {
          "title": "Open the ZilPay app",
          "description": "Add ZilPay to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "nova": {
      "qr_code": {
        "step1": {
          "title": "Open the Nova Wallet app",
          "description": "Add Nova Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "meco": {
      "qr_code": {
        "step1": {
          "title": "Open the MeCo Wallet app",
          "description": "Put MeCo Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "anchorage_digital": {
      "extension": {
        "step1": {
          "title": "Install the Anchorage Digital extension",
          "description": "We recommend pinning Anchorage Digital to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Scan the QR code to login",
          "description": "Securely connect your organization's wallets to dApps with institutional-grade security."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you log in, click below to refresh the browser and load up the extension."
        }
      }
    }
  }
}
`},98150:(e,t,r)=>{r.d(t,{m:()=>n});let n=(0,r(14917).x)({id:43114,name:"Avalanche",blockTime:1700,nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{default:{name:"SnowTrace",url:"https://snowtrace.io",apiUrl:"https://api.snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:0xb5b35e}}})},98403:(e,t,r)=>{function n(e){var t=e.match(/^var\((.*)\)$/);return t?t[1]:e}function i(e,t){var r={};if("object"==typeof t)!function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={};for(var o in t){var a=t[o],s=[...n,o];"string"==typeof a||"number"==typeof a||null==a?i[o]=r(a,s):"object"!=typeof a||Array.isArray(a)?console.warn('Skipping invalid key "'.concat(s.join("."),'". Should be a string, number, null or object. Received: "').concat(Array.isArray(a)?"Array":typeof a,'"')):i[o]=e(a,r,s)}return i}(t,(t,i)=>{null!=t&&(r[n(function(e,t){var r=e;for(var n of t){if(!(n in r))throw Error("Path ".concat(t.join(" -> ")," does not exist in object"));r=r[n]}return r}(e,i))]=String(t))});else for(var i in e){var o=e[i];null!=o&&(r[n(i)]=o)}return Object.defineProperty(r,"toString",{value:function(){return Object.keys(this).map(e=>"".concat(e,":").concat(this[e])).join(";")},writable:!1}),r}r.d(t,{D:()=>i})},98533:(e,t,r)=>{r.d(t,{s:()=>c});var n=r(3390),i=r(79416),o=r(77155),a=r(62008),s=r(19981),l=r(11437);async function c(e,t){let{address:r,blockNumber:c,blockTag:u,coinType:d=60n,gatewayUrls:p,strict:h}=t,{chain:f}=e,w=(()=>{if(t.universalResolverAddress)return t.universalResolverAddress;if(!f)throw Error("client chain not configured. universalResolverAddress is required.");return(0,i.M)({blockNumber:c,chain:f,contract:"ensUniversalResolver"})})();try{let t={address:w,abi:n.oX,args:[r,d,p??[a.J]],functionName:"reverseWithGateways",blockNumber:c,blockTag:u},i=(0,s.T)(e,l.J,"readContract"),[o]=await i(t);return o||null}catch(e){if(h)throw e;if((0,o.J)(e))return null;throw e}}},98897:(e,t,r)=>{r.d(t,{$:()=>n});let n=(0,r(14917).x)({id:4663,name:"Robinhood Chain",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},blockTime:100,rpcUrls:{default:{http:["https://rpc.mainnet.chain.robinhood.com"]}},blockExplorers:{default:{name:"Blockscout",url:"https://robinhoodchain.blockscout.com",apiUrl:"https://robinhoodchain.blockscout.com/api"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11"}}})},99288:(e,t,r)=>{r.d(t,{E:()=>i});var n=r(41783);let i=(0,r(14917).x)({...n.o,id:8453,name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://mainnet.base.org"]}},blockExplorers:{default:{name:"Basescan",url:"https://basescan.org",apiUrl:"https://api.basescan.org/api"}},contracts:{...n.o.contracts,disputeGameFactory:{1:{address:"0x43edB88C4B80fDD2AdFF2412A7BebF9dF42cB40e"}},l2OutputOracle:{1:{address:"0x56315b90c40730925ec5485cf004d835058518A0"}},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022},portal:{1:{address:"0x49048044D57e1C92A77f79988d21Fa8fAF74E97e",blockCreated:0x10ac19f}},l1StandardBridge:{1:{address:"0x3154Cf16ccdb4C6d922629664174b904d80F2C35",blockCreated:0x10ac19f}}},sourceId:1});({...i,experimental_preconfirmationTime:200,rpcUrls:{default:{http:["https://mainnet-preconf.base.org"]}}})},99360:(e,t,r)=>{let n;r.d(t,{Z:()=>y});var i=r(29353);let o=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>o(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>o(t)(e)}}},a=e=>{let t,r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i||null===i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,o={setState:n,getState:i,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e))},a=t=e(n,i,o);return o},s=e=>e?a(e):a;var l=r(75150),c=r(55079);class u{constructor(e){Object.defineProperty(this,"uid",{enumerable:!0,configurable:!0,writable:!0,value:e}),Object.defineProperty(this,"_emitter",{enumerable:!0,configurable:!0,writable:!0,value:new c.b})}on(e,t){this._emitter.on(e,t)}once(e,t){this._emitter.once(e,t)}off(e,t){this._emitter.off(e,t)}emit(e,...t){let r=t[0];this._emitter.emit(e,{uid:this.uid,...r})}listenerCount(e){return this._emitter.listenerCount(e)}}function d(e,t){return JSON.parse(e,(e,r)=>{let n=r;return n?.__type==="bigint"&&(n=BigInt(n.value)),n?.__type==="Map"&&(n=new Map(n.value)),t?.(e,n)??n})}function p(e,t){return e.slice(0,t).join(".")||"."}function h(e,t){let{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function f(e,t,r,n){var i;let o,a,s,l;return JSON.stringify(e,(i=(e,r)=>{let n=r;return"bigint"==typeof n&&(n={__type:"bigint",value:r.toString()}),n instanceof Map&&(n={__type:"Map",value:Array.from(r.entries())}),t?.(e,n)??n},o=true,a="function"==typeof n,s=[],l=[],function(e,t){if("object"==typeof t)if(s.length){let r=h(s,this);0===r?s[s.length]=this:(s.splice(r),l.splice(r)),l[l.length]=e;let i=h(s,t);if(0!==i)return a?n.call(this,e,t,p(l,i)):`[ref=${p(l,i)}]`}else s[0]=t,l[0]=e;return o?i.call(this,e,t):t}),r??void 0)}let w={getItem:()=>null,setItem:()=>{},removeItem:()=>{}};var m=r(96269);let g=256;var b=r(28583);function y(e){let t,r,a,c,p,h,y,A,{multiInjectedProviderDiscovery:v=!0,storage:C=function(e){let{deserialize:t=d,key:r="wagmi",serialize:n=f,storage:i=w}=e;function o(e){return e instanceof Promise?e.then(e=>e).catch(()=>null):e}return{...i,key:r,async getItem(e,n){let a=i.getItem(`${r}.${e}`),s=await o(a);return s?t(s)??null:n??null},async setItem(e,t){let a=`${r}.${e}`;null===t?await o(i.removeItem(a)):await o(i.setItem(a,n(t)))},async removeItem(e){await o(i.removeItem(`${r}.${e}`))}}}({storage:(r="u">typeof window&&window.localStorage?window.localStorage:w,{getItem:e=>r.getItem(e),removeItem(e){r.removeItem(e)},setItem(e,t){try{r.setItem(e,t)}catch{}}})}),syncConnectedChain:x=!0,ssr:k=!1,...B}=e,E="u">typeof window&&v?(a=new Set,c=[],h=(p=()=>(function(e){if("u"<typeof window)return;let t=t=>e(t.detail);return window.addEventListener("eip6963:announceProvider",t),window.dispatchEvent(new CustomEvent("eip6963:requestProvider")),()=>window.removeEventListener("eip6963:announceProvider",t)})(e=>{c.some(({info:t})=>t.uuid===e.info.uuid)||(c=[...c,e],a.forEach(t=>t(c,{added:[e]})))}))(),{_listeners:()=>a,clear(){a.forEach(e=>e([],{removed:[...c]})),c=[]},destroy(){this.clear(),a.clear(),h?.()},findProvider:({rdns:e})=>c.find(t=>t.info.rdns===e),getProviders:()=>c,reset(){this.clear(),h?.(),h=p()},subscribe:(e,{emitImmediately:t}={})=>(a.add(e),t&&e(c,{added:c}),()=>a.delete(e))}):void 0,I=s(()=>B.chains),P=s(()=>{let e=[],t=new Set;for(let r of B.connectors??[]){let n=S(r);if(e.push(n),!k&&n.rdns)for(let e of"string"==typeof n.rdns?[n.rdns]:n.rdns)t.add(e)}if(!k&&E)for(let r of E.getProviders())t.has(r.info.rdns)||e.push(S(M(r)));return e});function S(e){let t=new u(function(e=11){if(!n||g+e>512){n="",g=0;for(let e=0;e<256;e++)n+=(256+256*Math.random()|0).toString(16).substring(1)}return n.substring(g,g+++e)}()),r={...e({emitter:t,chains:I.getState(),storage:C,transports:B.transports}),emitter:t,uid:t.uid};return t.on("connect",O),r.setup?.(),r}function M(e){let{info:t}=e,r=e.provider;return(0,l.b)({target:{...t,id:t.rdns,provider:r}})}let T=new Map;function N(){return{chainId:I.getState()[0].id,connections:new Map,current:null,status:"disconnected"}}let W="0.0.0-canary-";t=b.r.startsWith(W)?Number.parseInt(b.r.replace(W,""),10):Number.parseInt(b.r.split(".")[0]??"0",10);let F=s((A=C?(y={migrate(e,r){if(r===t)return e;let n=N(),i=U(e,n.chainId);return{...n,chainId:i}},name:"store",partialize:e=>({connections:{__type:"Map",value:Array.from(e.connections.entries()).map(([e,t])=>{let{id:r,name:n,type:i,uid:o}=t.connector;return[e,{...t,connector:{id:r,name:n,type:i,uid:o}}]})},chainId:e.chainId,current:e.current}),merge(e,t){"object"==typeof e&&e&&"status"in e&&delete e.status;let r=U(e,t.chainId);return{...t,...e,chainId:r}},skipHydration:k,storage:C,version:t},(e,t,r)=>{let n,i={storage:function(e){let t;try{t=e()}catch(e){return}return{getItem:e=>{var r;let n=e=>null===e?null:JSON.parse(e,void 0),i=null!=(r=t.getItem(e))?r:null;return i instanceof Promise?i.then(n):n(i)},setItem:(e,r)=>t.setItem(e,JSON.stringify(r,void 0)),removeItem:e=>t.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...y},a=!1,s=new Set,l=new Set,c=i.storage;if(!c)return N();let u=()=>{let e=i.partialize({...t()});return c.setItem(i.name,{state:e,version:i.version})},d=r.setState;r.setState=(e,t)=>{d(e,t),u()};let p=N();r.getInitialState=()=>p;let h=()=>{var r,d;if(!c)return;a=!1,s.forEach(e=>{var r;return e(null!=(r=t())?r:p)});let h=(null==(d=i.onRehydrateStorage)?void 0:d.call(i,null!=(r=t())?r:p))||void 0;return o(c.getItem.bind(c))(i.name).then(e=>{if(e)if("number"!=typeof e.version||e.version===i.version)return[!1,e.state];else{if(i.migrate)return[!0,i.migrate(e.state,e.version)];console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}return[!1,void 0]}).then(r=>{var o;let[a,s]=r;if(e(n=i.merge(s,null!=(o=t())?o:p),!0),a)return u()}).then(()=>{null==h||h(n,void 0),n=t(),a=!0,l.forEach(e=>e(n))}).catch(e=>{null==h||h(void 0,e)})};return r.persist={setOptions:e=>{i={...i,...e},e.storage&&(c=e.storage)},clearStorage:()=>{null==c||c.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>h(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},i.skipHydration||h(),n||p}):N,(e,t,r)=>{let n=r.subscribe;return r.subscribe=(e,t,i)=>{let o=e;if(t){let n=(null==i?void 0:i.equalityFn)||Object.is,a=e(r.getState());o=r=>{let i=e(r);if(!n(a,i)){let e=a;t(a=i,e)}},(null==i?void 0:i.fireImmediately)&&t(a,a)}return n(o)},A(e,t,r)}));function U(e,t){return e&&"object"==typeof e&&"chainId"in e&&"number"==typeof e.chainId&&I.getState().some(t=>t.id===e.chainId)?e.chainId:t}function R(e){F.setState(t=>{let r=t.connections.get(e.uid);return r?{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts??r.accounts,chainId:e.chainId??r.chainId,connector:r.connector})}:t})}function O(e){"connecting"!==F.getState().status&&"reconnecting"!==F.getState().status&&F.setState(t=>{let r=P.getState().find(t=>t.uid===e.uid);return r?(r.emitter.listenerCount("connect")&&r.emitter.off("connect",R),r.emitter.listenerCount("change")||r.emitter.on("change",R),r.emitter.listenerCount("disconnect")||r.emitter.on("disconnect",D),{...t,connections:new Map(t.connections).set(e.uid,{accounts:e.accounts,chainId:e.chainId,connector:r}),current:e.uid,status:"connected"}):t})}function D(e){F.setState(t=>{let r=t.connections.get(e.uid);if(r){let e=r.connector;e.emitter.listenerCount("change")&&r.connector.emitter.off("change",R),e.emitter.listenerCount("disconnect")&&r.connector.emitter.off("disconnect",D),e.emitter.listenerCount("connect")||r.connector.emitter.on("connect",O)}if(t.connections.delete(e.uid),0===t.connections.size)return{...t,connections:new Map,current:null,status:"disconnected"};let n=t.connections.values().next().value;return{...t,connections:new Map(t.connections),current:n.connector.uid}})}return F.setState(N()),x&&F.subscribe(({connections:e,current:t})=>t?e.get(t)?.chainId:void 0,e=>{if(I.getState().some(t=>t.id===e))return F.setState(t=>({...t,chainId:e??t.chainId}))}),E?.subscribe(e=>{let t=new Set,r=new Set;for(let e of P.getState())if(t.add(e.id),e.rdns)for(let t of"string"==typeof e.rdns?[e.rdns]:e.rdns)r.add(t);let n=[];for(let i of e){if(r.has(i.info.rdns))continue;let e=S(M(i));t.has(e.id)||n.push(e)}(!C||F.persist.hasHydrated())&&P.setState(e=>[...e,...n],!0)}),{get chains(){return I.getState()},get connectors(){return P.getState()},storage:C,getClient:function(e={}){let t,r=e.chainId??F.getState().chainId,n=I.getState().find(e=>e.id===r);if(e.chainId&&!n)throw new m.nk;{let e=T.get(F.getState().chainId);if(e&&!n)return e;if(!n)throw new m.nk}{let e=T.get(r);if(e)return e}if(B.client)t=B.client({chain:n});else{let e=n.id,r=I.getState().map(e=>e.id),o={};for(let[t,n]of Object.entries(B))if("chains"!==t&&"client"!==t&&"connectors"!==t&&"transports"!==t)if("object"==typeof n)if(e in n)o[t]=n[e];else{if(r.some(e=>e in n))continue;o[t]=n}else o[t]=n;t=(0,i.UU)({...o,chain:n,batch:o.batch??{multicall:!0},transport:t=>B.transports[e]({...t,connectors:P})})}return T.set(r,t),t},get state(){return F.getState()},setState(e){let t;t="function"==typeof e?e(F.getState()):e;let r=N();"object"!=typeof t&&(t=r),Object.keys(r).some(e=>!(e in t))&&(t=r),F.setState(t,!0)},subscribe:(e,t,r)=>F.subscribe(e,t,r?{...r,fireImmediately:r.emitImmediately}:void 0),_internal:{mipd:E,async revalidate(){let e=F.getState(),t=e.connections,r=e.current;for(let[,e]of t){let n=e.connector;n.isAuthorized&&await n.isAuthorized()||(t.delete(n.uid),r===n.uid&&(r=null))}F.setState(e=>({...e,connections:t,current:r}))},store:F,ssr:!!k,syncConnectedChain:x,transports:B.transports,chains:{setState(e){let t="function"==typeof e?e(I.getState()):e;if(0!==t.length)return I.setState(t,!0)},subscribe:e=>I.subscribe(e)},connectors:{providerDetailToConnector:M,setup:S,setState:e=>P.setState("function"==typeof e?e(P.getState()):e,!0),subscribe:e=>P.subscribe(e)},events:{change:R,connect:O,disconnect:D}}}}}}]);