(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.f6(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.cn"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.cn(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={ca:function ca(){},aJ:function aJ(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},a5:function a5(){},
dg:function(a){var t,s=H.df(a)
if(s!=null)return s
t="minified:"+a
return t},
fW:function(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
d:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.av(a)
if(typeof t!="string")throw H.e(H.cm(a))
return t},
dT:function(a,b){var t,s
if(typeof a!="string")H.c5(H.cm(a))
t=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(t==null)return null
if(3>=t.length)return H.c_(t,3)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return null},
bn:function(a){return H.dS(a)},
dS:function(a){var t,s,r
if(a instanceof P.h)return H.t(H.a_(a),null)
if(J.bU(a)===C.v||u.E.b(a)){t=C.f(a)
if(H.cH(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cH(r))return r}}return H.t(H.a_(a),null)},
cH:function(a){var t=a!=="Object"&&a!==""
return t},
da:function(a){throw H.e(H.cm(a))},
c_:function(a,b){if(a==null)J.c6(a)
throw H.e(H.eR(a,b))},
eR:function(a,b){var t,s,r="index"
if(!H.d1(b))return new P.x(!0,b,r,null)
t=H.b7(J.c6(a))
if(!(b<0)){if(typeof t!=="number")return H.da(t)
s=b>=t}else s=!0
if(s)return P.dR(b,a,r,null,t)
return P.dU(b,r)},
cm:function(a){return new P.x(!0,a,null,null)},
e:function(a){var t,s
if(a==null)a=new P.aN()
t=new Error()
t.dartException=a
s=H.f7
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
f7:function(){return J.av(this.dartException)},
c5:function(a){throw H.e(a)},
f5:function(a){throw H.e(P.cD(a))},
B:function(a){var t,s,r,q,p,o
a=H.f3(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.cq([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.br(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bs:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cK:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cG:function(a,b){return new H.aM(a,b==null?null:b.method)},
cb:function(a,b){var t=b==null,s=t?null:b.method
return new H.aI(a,s,t?null:b.receiver)},
au:function(a){if(a==null)return new H.bm(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.Q(a,a.dartException)
return H.eJ(a)},
Q:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eJ:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.a4(s,16)&8191)===10)switch(r){case 438:return H.Q(a,H.cb(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return H.Q(a,H.cG(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.ds()
p=$.dt()
o=$.du()
n=$.dv()
m=$.dy()
l=$.dz()
k=$.dx()
$.dw()
j=$.dB()
i=$.dA()
h=q.l(t)
if(h!=null)return H.Q(a,H.cb(H.b8(t),h))
else{h=p.l(t)
if(h!=null){h.method="call"
return H.Q(a,H.cb(H.b8(t),h))}else{h=o.l(t)
if(h==null){h=n.l(t)
if(h==null){h=m.l(t)
if(h==null){h=l.l(t)
if(h==null){h=k.l(t)
if(h==null){h=n.l(t)
if(h==null){h=j.l(t)
if(h==null){h=i.l(t)
g=h!=null}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0}else g=!0
if(g)return H.Q(a,H.cG(H.b8(t),h))}}return H.Q(a,new H.aW(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ab()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.Q(a,new P.x(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ab()
return a},
Z:function(a){var t
if(a==null)return new H.ak(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ak(a)},
f_:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.b7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bA("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.f_)
a.$identity=t
return t},
dO:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.aR().constructor.prototype):Object.create(new H.a2(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.z
if(typeof s!=="number")return s.j()
$.z=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.cB(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dK(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cB(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dK:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.d9,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
t=c?H.dI:H.dH
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.e("Error in functionType of tearoff")},
dL:function(a,b,c,d){var t=H.cA
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cB:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.dN(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.dL(s,!q,t,b)
if(s===0){q=$.z
if(typeof q!=="number")return q.j()
$.z=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.d(H.c7())+";return "+o+"."+H.d(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.z
if(typeof q!=="number")return q.j()
$.z=q+1
n+=q
return new Function("return function("+n+"){return this."+H.d(H.c7())+"."+H.d(t)+"("+n+");}")()},
dM:function(a,b,c,d){var t=H.cA,s=H.dJ
switch(b?-1:a){case 0:throw H.e(new H.aQ("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
dN:function(a,b){var t,s,r,q,p,o,n=H.c7(),m=$.cy
if(m==null)m=$.cy=H.cx("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.dM(s,!q,t,b)
if(s===1){q="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+m+");"
p=$.z
if(typeof p!=="number")return p.j()
$.z=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+m+", "+o+");"
p=$.z
if(typeof p!=="number")return p.j()
$.z=p+1
return new Function(q+p+"}")()},
cn:function(a,b,c,d,e,f,g){return H.dO(a,b,c,d,!!e,!!f,g)},
dH:function(a,b){return H.b6(v.typeUniverse,H.a_(a.a),b)},
dI:function(a,b){return H.b6(v.typeUniverse,H.a_(a.c),b)},
cA:function(a){return a.a},
dJ:function(a){return a.c},
c7:function(){var t=$.cz
return t==null?$.cz=H.cx("self"):t},
cx:function(a){var t,s,r,q=new H.a2("self","target","receiver","name"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.e(P.dF("Field name "+a+" not found."))},
eP:function(a){if(a==null)H.eL("boolean expression must not be null")
return a},
eL:function(a){throw H.e(new H.aY(a))},
f6:function(a){throw H.e(new P.aB(a))},
eV:function(a){return v.getIsolateTag(a)},
fV:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
f1:function(a){var t,s,r,q,p,o=H.b8($.d8.$1(a)),n=$.bT[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bZ[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.ek($.d5.$2(a,o))
if(r!=null){n=$.bT[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.bZ[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.c4(t)
$.bT[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.bZ[o]=t
return t}if(q==="-"){p=H.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dd(a,t)
if(q==="*")throw H.e(P.cL(o))
if(v.leafTags[o]===true){p=H.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dd(a,t)},
dd:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cp(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cp(a,!1,null,!!a.$iaH)},
f2:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.c4(t)
else return J.cp(t,c,null,null)},
eX:function(){if(!0===$.co)return
$.co=!0
H.eY()},
eY:function(){var t,s,r,q,p,o,n,m
$.bT=Object.create(null)
$.bZ=Object.create(null)
H.eW()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.de.$1(p)
if(o!=null){n=H.f2(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eW:function(){var t,s,r,q,p,o,n=C.l()
n=H.Y(C.m,H.Y(C.n,H.Y(C.h,H.Y(C.h,H.Y(C.o,H.Y(C.p,H.Y(C.q(C.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d8=new H.bW(q)
$.d5=new H.bX(p)
$.de=new H.bY(o)},
Y:function(a,b){return a(b)||b},
f3:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
br:function br(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
aM:function aM(a,b){this.a=a
this.b=b},
aI:function aI(a,b,c){this.a=a
this.b=b
this.c=c},
aW:function aW(a){this.a=a},
bm:function bm(a){this.a=a},
ak:function ak(a){this.a=a
this.b=null},
M:function M(){},
aT:function aT(){},
aR:function aR(){},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aQ:function aQ(a){this.a=a},
aY:function aY(a){this.a=a},
bW:function bW(a){this.a=a},
bX:function bX(a){this.a=a},
bY:function bY(a){this.a=a},
aL:function aL(){},
U:function U(){},
aa:function aa(){},
aK:function aK(){},
ai:function ai(){},
aj:function aj(){},
dW:function(a,b){var t=b.c
return t==null?b.c=H.ch(a,b.z,!0):t},
cI:function(a,b){var t=b.c
return t==null?b.c=H.am(a,"a6",[b.z]):t},
cJ:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cJ(a.z)
return t===11||t===12},
dV:function(a){return a.cy},
d7:function(a){return H.ci(v.typeUniverse,a,!1)},
K:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.cV(a,s,!0)
case 7:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.ch(a,s,!0)
case 8:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.cU(a,s,!0)
case 9:r=b.Q
q=H.as(a,r,c,a0)
if(q===r)return b
return H.am(a,b.z,q)
case 10:p=b.z
o=H.K(a,p,c,a0)
n=b.Q
m=H.as(a,n,c,a0)
if(o===p&&m===n)return b
return H.cf(a,o,m)
case 11:l=b.z
k=H.K(a,l,c,a0)
j=b.Q
i=H.eG(a,j,c,a0)
if(k===l&&i===j)return b
return H.cT(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.as(a,h,c,a0)
p=b.z
o=H.K(a,p,c,a0)
if(g===h&&o===p)return b
return H.cg(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.e(P.bd("Attempted to substitute unexpected RTI kind "+d))}},
as:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.K(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
eH:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.K(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
eG:function(a,b,c,d){var t,s=b.a,r=H.as(a,s,c,d),q=b.b,p=H.as(a,q,c,d),o=b.c,n=H.eH(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.b2()
t.a=r
t.b=p
t.c=n
return t},
cq:function(a,b){a[v.arrayRti]=b
return a},
eQ:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.d9(t)
return a.$S()}return null},
db:function(a,b){var t
if(H.cJ(b))if(a instanceof H.M){t=H.eQ(a)
if(t!=null)return t}return H.a_(a)},
a_:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.ck(a)}if(Array.isArray(a))return H.cj(a)
return H.ck(J.bU(a))},
cj:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
fS:function(a){var t=a.$ti
return t!=null?t:H.ck(a)},
ck:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.er(a,t)},
er:function(a,b){var t=a instanceof H.M?a.__proto__.__proto__.constructor:b,s=H.ei(v.typeUniverse,t.name)
b.$ccache=s
return s},
d9:function(a){var t,s,r
H.b7(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.ci(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
eq:function(a){var t,s,r=this,q=u.K
if(r===q)return H.ap(r,a,H.eu)
if(!H.E(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.ap(r,a,H.ey)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.d1
else if(t===u.i||t===u.q)s=H.et
else if(t===u.N)s=H.ev
else s=t===u.y?H.d_:null
if(s!=null)return H.ap(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.f0)){r.r="$i"+q
return H.ap(r,a,H.ew)}}else if(q===7)return H.ap(r,a,H.eo)
return H.ap(r,a,H.em)},
ap:function(a,b,c){a.b=c
return a.b(b)},
ep:function(a){var t,s,r=this
if(!H.E(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.el
else if(r===u.K)s=H.ej
else s=H.en
r.a=s
return r.a(a)},
eA:function(a){var t,s=a.y
if(!H.E(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
em:function(a){var t=this
if(a==null)return H.eA(t)
return H.k(v.typeUniverse,H.db(a,t),null,t,null)},
eo:function(a){if(a==null)return!0
return this.z.b(a)},
ew:function(a){var t=this,s=t.r
if(a instanceof P.h)return!!a[s]
return!!J.bU(a)[s]},
fR:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cY(a,t)},
en:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cY(a,t)},
cY:function(a,b){throw H.e(H.e8(H.cN(a,H.db(a,b),H.t(b,null))))},
cN:function(a,b,c){var t=P.aC(a),s=H.t(b==null?H.a_(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
e8:function(a){return new H.al("TypeError: "+a)},
n:function(a,b){return new H.al("TypeError: "+H.cN(a,null,b))},
eu:function(a){return a!=null},
ej:function(a){return a},
ey:function(a){return!0},
el:function(a){return a},
d_:function(a){return!0===a||!1===a},
fF:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.e(H.n(a,"bool"))},
fH:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.n(a,"bool"))},
fG:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.n(a,"bool?"))},
fI:function(a){if(typeof a=="number")return a
throw H.e(H.n(a,"double"))},
fK:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"double"))},
fJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"double?"))},
d1:function(a){return typeof a=="number"&&Math.floor(a)===a},
fL:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.e(H.n(a,"int"))},
b7:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.n(a,"int"))},
fM:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.n(a,"int?"))},
et:function(a){return typeof a=="number"},
fN:function(a){if(typeof a=="number")return a
throw H.e(H.n(a,"num"))},
fP:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"num"))},
fO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"num?"))},
ev:function(a){return typeof a=="string"},
fQ:function(a){if(typeof a=="string")return a
throw H.e(H.n(a,"String"))},
b8:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.n(a,"String"))},
ek:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.n(a,"String?"))},
eD:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.j(s,H.t(a[r],b))
return t},
cZ:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.cq([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.i.t(a5,"T"+(r+q))
for(p=u.O,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.c_(a5,j)
m=C.c.j(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.c.j(" extends ",H.t(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.t(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.c.j(a2,H.t(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.c.j(a2,H.t(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.ct(H.t(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.d(a0)},
t:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.t(a.z,b)
return t}if(m===7){s=a.z
t=H.t(s,b)
r=s.y
return J.ct(r===11||r===12?C.c.j("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.t(a.z,b))+">"
if(m===9){q=H.eI(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eD(p,b)+">"):q}if(m===11)return H.cZ(a,b,null)
if(m===12)return H.cZ(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.c_(b,o)
return b[o]}return"?"},
eI:function(a){var t,s=H.df(a)
if(s!=null)return s
t="minified:"+a
return t},
cW:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
ei:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.ci(a,b,!1)
else if(typeof n=="number"){t=n
s=H.an(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.am(a,b,r)
o[b]=p
return p}else return n},
eg:function(a,b){return H.cX(a.tR,b)},
ef:function(a,b){return H.cX(a.eT,b)},
ci:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.cS(H.cQ(a,null,b,c))
s.set(b,t)
return t},
b6:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.cS(H.cQ(a,b,c,!0))
r.set(c,s)
return s},
eh:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cf(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
J:function(a,b){b.a=H.ep
b.b=H.eq
return b},
an:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.u(null,null)
t.y=b
t.cy=c
s=H.J(a,t)
a.eC.set(c,s)
return s},
cV:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ed(a,b,s,c)
a.eC.set(s,t)
return t},
ed:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.E(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.u(null,null)
r.y=6
r.z=b
r.cy=c
return H.J(a,r)},
ch:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.ec(a,b,s,c)
a.eC.set(s,t)
return t},
ec:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.E(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.c0(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.c0(r.z))return r
else return H.dW(a,b)}}q=new H.u(null,null)
q.y=7
q.z=b
q.cy=c
return H.J(a,q)},
cU:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.ea(a,b,s,c)
a.eC.set(s,t)
return t},
ea:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.E(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.am(a,"a6",[b])
else if(b===u.P||b===u.T)return u.R}r=new H.u(null,null)
r.y=8
r.z=b
r.cy=c
return H.J(a,r)},
ee:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.u(null,null)
t.y=13
t.z=b
t.cy=r
s=H.J(a,t)
a.eC.set(r,s)
return s},
b5:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
e9:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
am:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.b5(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.u(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.J(a,s)
a.eC.set(q,r)
return r},
cf:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.b5(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.u(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.J(a,p)
a.eC.set(r,o)
return o},
cT:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.b5(n)
if(k>0){t=m>0?",":""
s=H.b5(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.e9(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.u(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.J(a,p)
a.eC.set(r,s)
return s},
cg:function(a,b,c,d){var t,s=b.cy+("<"+H.b5(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.eb(a,b,c,s,d)
a.eC.set(s,t)
return t},
eb:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.K(a,b,s,0)
n=H.as(a,c,s,0)
return H.cg(a,o,n,c!==n)}}m=new H.u(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.J(a,m)},
cQ:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cS:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.e3(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.cR(a,s,h,g,!1)
else if(r===46)s=H.cR(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.I(a.u,a.e,g.pop()))
break
case 94:g.push(H.ee(a.u,g.pop()))
break
case 35:g.push(H.an(a.u,5,"#"))
break
case 64:g.push(H.an(a.u,2,"@"))
break
case 126:g.push(H.an(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.ce(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.am(q,o,p))
else{n=H.I(q,a.e,o)
switch(n.y){case 11:g.push(H.cg(q,n,p,a.n))
break
default:g.push(H.cf(q,n,p))
break}}break
case 38:H.e4(a,g)
break
case 42:m=a.u
g.push(H.cV(m,H.I(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.ch(m,H.I(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.cU(m,H.I(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.b2()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.ce(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.cT(q,H.I(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.ce(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.e6(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.I(a.u,a.e,i)},
e3:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cR:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.cW(t,p.z)[q]
if(o==null)H.c5('No "'+q+'" in "'+H.dV(p)+'"')
d.push(H.b6(t,p,o))}else d.push(q)
return n},
e4:function(a,b){var t=b.pop()
if(0===t){b.push(H.an(a.u,1,"0&"))
return}if(1===t){b.push(H.an(a.u,4,"1&"))
return}throw H.e(P.bd("Unexpected extended operation "+H.d(t)))},
I:function(a,b,c){if(typeof c=="string")return H.am(a,c,a.sEA)
else if(typeof c=="number")return H.e5(a,b,c)
else return c},
ce:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.I(a,b,c[t])},
e6:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.I(a,b,c[t])},
e5:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.e(P.bd("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.e(P.bd("Bad index "+c+" for "+b.h(0)))},
k:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.E(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.E(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.k(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.k(a,b.z,c,d,e)
if(q===6){t=d.z
return H.k(a,b,c,t,e)}if(s===8){if(!H.k(a,b.z,c,d,e))return!1
return H.k(a,H.cI(a,b),c,d,e)}if(s===7){t=H.k(a,b.z,c,d,e)
return t}if(q===8){if(H.k(a,b,c,d.z,e))return!0
return H.k(a,b,c,H.cI(a,d),e)}if(q===7){t=H.k(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.k(a,l,c,k,e)||!H.k(a,k,e,l,c))return!1}return H.d0(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.d0(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.es(a,b,c,d,e)}return!1},
d0:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.k(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!H.k(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.k(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.k(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.k(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
es:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.k(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.cW(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.k(a,H.b6(a,b,m[q]),c,s[q],e))return!1
return!0},
c0:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.E(a))if(s!==7)if(!(s===6&&H.c0(a.z)))t=s===8&&H.c0(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f0:function(a){var t
if(!H.E(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
E:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.O},
cX:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
u:function u(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
b2:function b2(){this.c=this.b=this.a=null},
b0:function b0(){},
al:function al(a){this.a=a},
df:function(a){return v.mangledGlobalNames[a]}},J={
cp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ba:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.co==null){H.eX()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.e(P.cL("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[J.cF()]
if(q!=null)return q
q=H.f1(a)
if(q!=null)return q
if(typeof a=="function")return C.w
t=Object.getPrototypeOf(a)
if(t==null)return C.k
if(t===Object.prototype)return C.k
if(typeof r=="function"){Object.defineProperty(r,J.cF(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
cF:function(){var t=$.cP
return t==null?$.cP=v.getIsolateTag("_$dart_js"):t},
bU:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a8.prototype
return J.a7.prototype}if(typeof a=="string")return J.N.prototype
if(a==null)return J.a9.prototype
if(typeof a=="boolean")return J.aG.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.ba(a)},
eS:function(a){if(typeof a=="number")return J.T.prototype
if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.ba(a)},
eT:function(a){if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.ba(a)},
eU:function(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.ba(a)},
bV:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.ba(a)},
ct:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.eS(a).j(a,b)},
dC:function(a,b,c,d){return J.bV(a).a0(a,b,c,d)},
dD:function(a){return J.eU(a).gO(a)},
c6:function(a){return J.eT(a).gk(a)},
dE:function(a){return J.bV(a).gP(a)},
cu:function(a){return J.bV(a).gR(a)},
cv:function(a,b){return J.bV(a).sae(a,b)},
av:function(a){return J.bU(a).h(a)},
m:function m(){},
aG:function aG(){},
a9:function a9(){},
G:function G(){},
aO:function aO(){},
ad:function ad(){},
y:function y(){},
q:function q(a){this.$ti=a},
bl:function bl(a){this.$ti=a},
ay:function ay(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
T:function T(){},
a8:function a8(){},
a7:function a7(){},
N:function N(){}},P={
dZ:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.eM()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.b9(new P.bv(r),1)).observe(t,{childList:true})
return new P.bu(r,t,s)}else if(self.setImmediate!=null)return P.eN()
return P.eO()},
e_:function(a){self.scheduleImmediate(H.b9(new P.bw(u.M.a(a)),0))},
e0:function(a){self.setImmediate(H.b9(new P.bx(u.M.a(a)),0))},
e1:function(a){u.M.a(a)
P.e7(0,a)},
e7:function(a,b){var t=new P.bN()
t.a_(a,b)
return t},
e2:function(a,b){var t,s,r
b.a=1
try{a.T(new P.bC(b),new P.bD(b),u.P)}catch(r){t=H.au(r)
s=H.Z(r)
P.f4(new P.bE(b,t,s))}},
cO:function(a,b){var t,s,r
for(t=u.c;s=a.a,s===2;)a=t.a(a.c)
if(s>=4){r=b.D()
b.a=a.a
b.c=a.c
P.ah(b,r)}else{r=u.F.a(b.c)
b.a=2
b.c=a
a.L(r)}},
ah:function(a,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,c={},b=c.a=a
for(t=u.n,s=u.F,r=u.d;!0;){q={}
p=b.a===8
if(a0==null){if(p){o=t.a(b.c)
P.bP(d,d,b.b,o.a,o.b)}return}q.a=a0
n=a0.a
for(b=a0;n!=null;b=n,n=m){b.a=null
P.ah(c.a,b)
q.a=n
m=n.a}l=c.a
k=l.c
q.b=p
q.c=k
j=!p
if(j){i=b.c
i=(i&1)!==0||(i&15)===8}else i=!0
if(i){h=b.b.b
if(p){i=l.b===h
i=!(i||i)}else i=!1
if(i){t.a(k)
P.bP(d,d,l.b,k.a,k.b)
return}g=$.i
if(g!==h)$.i=h
else g=d
b=b.c
if((b&15)===8)new P.bI(q,c,p).$0()
else if(j){if((b&1)!==0)new P.bH(q,k).$0()}else if((b&2)!==0)new P.bG(c,q).$0()
if(g!=null)$.i=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.q(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.cO(b,f)
return}}f=q.a.b
e=s.a(f.c)
f.c=null
a0=f.q(e)
b=q.b
l=q.c
if(!b){f.$ti.c.a(l)
f.a=4
f.c=l}else{t.a(l)
f.a=8
f.c=l}c.a=f
b=f}},
eB:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.e(P.cw(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ez:function(){var t,s
for(t=$.X;t!=null;t=$.X){$.ar=null
s=t.b
$.X=s
if(s==null)$.aq=null
t.a.$0()}},
eF:function(){$.cl=!0
try{P.ez()}finally{$.ar=null
$.cl=!1
if($.X!=null)$.cr().$1(P.d6())}},
d4:function(a){var t=new P.aZ(a),s=$.aq
if(s==null){$.X=$.aq=t
if(!$.cl)$.cr().$1(P.d6())}else $.aq=s.b=t},
eE:function(a){var t,s,r,q=$.X
if(q==null){P.d4(a)
$.ar=$.aq
return}t=new P.aZ(a)
s=$.ar
if(s==null){t.b=q
$.X=$.ar=t}else{r=s.b
t.b=r
$.ar=s.b=t
if(r==null)$.aq=t}},
f4:function(a){var t=null,s=$.i
if(C.a===s){P.bR(t,t,C.a,a)
return}P.bR(t,t,s,u.M.a(s.M(a)))},
be:function(a,b){var t=b==null?P.dG(a):b
if(a==null)H.c5(new P.x(!1,null,"error","Must not be null"))
return new P.a1(a,t)},
dG:function(a){var t
if(u.C.b(a)){t=a.gA()
if(t!=null)return t}return C.r},
bP:function(a,b,c,d,e){P.eE(new P.bQ(d,e))},
d2:function(a,b,c,d,e){var t,s=$.i
if(s===c)return d.$0()
$.i=c
t=s
try{s=d.$0()
return s}finally{$.i=t}},
d3:function(a,b,c,d,e,f,g){var t,s=$.i
if(s===c)return d.$1(e)
$.i=c
t=s
try{s=d.$1(e)
return s}finally{$.i=t}},
eC:function(a,b,c,d,e,f,g,h,i){var t,s=$.i
if(s===c)return d.$2(e,f)
$.i=c
t=s
try{s=d.$2(e,f)
return s}finally{$.i=t}},
bR:function(a,b,c,d){var t
u.M.a(d)
t=C.a!==c
if(t)d=!(!t||!1)?c.M(d):c.a5(d,u.H)
P.d4(d)},
bv:function bv(a){this.a=a},
bu:function bu(a,b,c){this.a=a
this.b=b
this.c=c},
bw:function bw(a){this.a=a},
bx:function bx(a){this.a=a},
bN:function bN(){},
bO:function bO(a,b){this.a=a
this.b=b},
ag:function ag(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
w:function w(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
bB:function bB(a,b){this.a=a
this.b=b},
bF:function bF(a,b){this.a=a
this.b=b},
bC:function bC(a){this.a=a},
bD:function bD(a){this.a=a},
bE:function bE(a,b,c){this.a=a
this.b=b
this.c=c},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bJ:function bJ(a){this.a=a},
bH:function bH(a,b){this.a=a
this.b=b},
bG:function bG(a,b){this.a=a
this.b=b},
aZ:function aZ(a){this.a=a
this.b=null},
ac:function ac(){},
bo:function bo(a,b){this.a=a
this.b=b},
bp:function bp(a,b){this.a=a
this.b=b},
aS:function aS(){},
a1:function a1(a,b){this.a=a
this.b=b},
ao:function ao(){},
bQ:function bQ(a,b){this.a=a
this.b=b},
b3:function b3(){},
bL:function bL(a,b,c){this.a=a
this.b=b
this.c=c},
bK:function bK(a,b){this.a=a
this.b=b},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
cE:function(a,b,c){var t,s
if(P.ex(a))return b+"..."+c
t=new P.bq(b)
C.i.t($.at,a)
try{s=t
s.a=P.dX(s.a,a,", ")}finally{if(0>=$.at.length)return H.c_($.at,-1)
$.at.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ex:function(a){var t,s
for(t=$.at.length,s=0;s<t;++s)if(a===$.at[s])return!0
return!1},
O:function O(){},
eZ:function(a){var t=H.dT(a,null)
if(t!=null)return t
throw H.e(new P.bk(a))},
dP:function(a){if(a instanceof H.M)return a.h(0)
return"Instance of '"+H.d(H.bn(a))+"'"},
dX:function(a,b,c){var t=J.dD(b)
if(!t.v())return a
if(c.length===0){do a+=H.d(t.gu())
while(t.v())}else{a+=H.d(t.gu())
for(;t.v();)a=a+c+H.d(t.gu())}return a},
aC:function(a){if(typeof a=="number"||H.d_(a)||null==a)return J.av(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dP(a)},
bd:function(a){return new P.a0(a)},
dF:function(a){return new P.x(!1,null,null,a)},
cw:function(a,b,c){return new P.x(!0,a,b,c)},
dU:function(a,b){return new P.aP(null,null,!0,a,b,"Value not in range")},
dR:function(a,b,c,d,e){var t=H.b7(e==null?J.c6(b):e)
return new P.aE(t,!0,a,c,"Index out of range")},
bt:function(a){return new P.aX(a)},
cL:function(a){return new P.aV(a)},
cD:function(a){return new P.aA(a)},
f:function f(){},
a0:function a0(a){this.a=a},
aU:function aU(){},
aN:function aN(){},
x:function x(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
aP:function aP(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aE:function aE(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aX:function aX(a){this.a=a},
aV:function aV(a){this.a=a},
aA:function aA(a){this.a=a},
ab:function ab(){},
aB:function aB(a){this.a=a},
bA:function bA(a){this.a=a},
bk:function bk(a){this.a=a},
j:function j(){},
h:function h(){},
b4:function b4(){},
bq:function bq(a){this.a=a},
b:function b(){}},W={
by:function(a,b,c,d,e){var t=W.eK(new W.bz(c),u.D),s=t!=null
if(s&&!0){u.o.a(t)
if(s)J.dC(a,b,t,!1)}return new W.b1(a,b,t,!1,e.i("b1<0>"))},
eK:function(a,b){var t=$.i
if(t===C.a)return a
return t.a6(a,b)},
c:function c(){},
aw:function aw(){},
ax:function ax(){},
L:function L(){},
R:function R(){},
a3:function a3(){},
bi:function bi(){},
bj:function bj(){},
a4:function a4(){},
p:function p(){},
a:function a(){},
l:function l(){},
aD:function aD(){},
r:function r(){},
A:function A(){},
V:function V(){},
v:function v(){},
ae:function ae(){},
c9:function c9(a,b){this.a=a
this.$ti=b},
af:function af(){},
D:function D(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
b1:function b1(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
bz:function bz(a){this.a=a},
b_:function b_(){}},Z={bg:function bg(){this.a=null}},M={bh:function bh(){this.a=null}},T={
H:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.C(t)},
dY:function(){return new T.C(new Float32Array(3))},
C:function C(a){this.a=a}},F={
dc:function(){var t,s,r="#colorWheel",q=$.bc(),p=document
q.N(u.B.a(p.querySelector(r)))
q=J.cu(p.querySelector(r))
t=q.$ti
s=t.i("~(1)?").a(new F.c1())
u.Y.a(null)
W.by(q.a,q.b,s,!1,t.c)
t=J.cu(p.querySelector("#resetButton"))
s=t.$ti
W.by(t.a,t.b,s.i("~(1)?").a(new F.c2()),!1,s.c)
p=J.dE(p.querySelector("#numberOfColorsInColorWheel"))
s=p.$ti
W.by(p.a,p.b,s.i("~(1)?").a(new F.c3()),!1,s.c)},
c1:function c1(){},
c2:function c2(){},
c3:function c3(){}},K={
bf:function(a){var t=a.a
return"rgb("+C.d.h(C.b.n(t[0]))+","+C.d.h(C.b.n(t[1]))+","+C.d.h(C.b.n(t[2]))+")"},
cC:function(a,b,c){var t,s,r,q,p,o
if(b===0){t=c
s=t
r=s}else{q=c<0.5?c*(1+b):c+b-c*b
p=2*c-q
r=K.c8(p,q,a+0.3333333333333333)
s=K.c8(p,q,a)
t=K.c8(p,q,a-0.3333333333333333)}o=new T.C(new Float32Array(3))
o.W(r,s,t)
o.p(0,256)
return o},
c8:function(a,b,c){if(c<0)++c
if(c>1)--c
if(c<0.16666666666666666)return a+(b-a)*6*c
if(c<0.5)return b
if(c<0.6666666666666666)return a+(b-a)*(0.6666666666666666-c)*6
return a}},X={
cc:function(a){var t,s,r,q,p,o,n,m,l=new Float32Array(3),k=new T.C(l)
k.F(a)
k.p(0,0.00390625)
t=new Float32Array(3)
s=new T.C(t)
r=l[0]
q=l[1]
p=l[2]
for(l=1-r,o=1-p,n=1-q,m=0;m<=2;++m)t[m]=$.dq().a[m]*l*o*n+$.dn().a[m]*r*o*n+$.dk().a[m]*l*p*n+$.dp().a[m]*r*p*n+$.dr().a[m]*l*o*q+$.dm().a[m]*r*o*q+$.dl().a[m]*l*p*q+$.dj().a[m]*r*p*q
s.p(0,256)
t[0]=C.b.w(t[0])
t[1]=C.b.w(t[1])
t[2]=C.b.w(t[2])
return s}}
var w=[C,H,J,P,W,Z,M,T,F,K,X]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ca.prototype={}
J.m.prototype={
h:function(a){return"Instance of '"+H.d(H.bn(a))+"'"}}
J.aG.prototype={
h:function(a){return String(a)},
$ibS:1}
J.a9.prototype={
h:function(a){return"null"},
$ij:1}
J.G.prototype={
h:function(a){return String(a)}}
J.aO.prototype={}
J.ad.prototype={}
J.y.prototype={
h:function(a){var t=a[$.di()]
if(t==null)return this.Z(a)
return"JavaScript function for "+H.d(J.av(t))},
$iS:1}
J.q.prototype={
t:function(a,b){H.cj(a).c.a(b)
if(!!a.fixed$length)H.c5(P.bt("add"))
a.push(b)},
h:function(a){return P.cE(a,"[","]")},
gO:function(a){return new J.ay(a,a.length,H.cj(a).i("ay<1>"))},
gk:function(a){return a.length},
$iaF:1}
J.bl.prototype={}
J.ay.prototype={
gu:function(){return this.d},
v:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(H.f5(r))
t=s.c
if(t>=q){s.sK(null)
return!1}s.sK(r[t]);++s.c
return!0},
sK:function(a){this.d=this.$ti.i("1?").a(a)}}
J.T.prototype={
a8:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(P.bt(""+a+".floor()"))},
n:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.bt(""+a+".round()"))},
w:function(a){if(a<0)return-Math.round(-a)
else return Math.round(a)},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
a4:function(a,b){var t
if(a>0)t=this.a3(a,b)
else{t=b>31?31:b
t=a>>t>>>0}return t},
a3:function(a,b){return b>31?0:a>>>b},
$io:1,
$iF:1}
J.a8.prototype={$ibb:1}
J.a7.prototype={}
J.N.prototype={
j:function(a,b){if(typeof b!="string")throw H.e(P.cw(b,null,null))
return a+b},
h:function(a){return a},
gk:function(a){return a.length},
$iP:1}
H.aJ.prototype={
gu:function(){var t=this.d
return t},
v:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(P.cD(r))
t=s.c
if(t>=q){s.sG(null)
return!1}s.sG(r[t]);++s.c
return!0},
sG:function(a){this.d=this.$ti.i("1?").a(a)}}
H.a5.prototype={}
H.br.prototype={
l:function(a){var t,s,r=this,q=new RegExp(r.a).exec(a)
if(q==null)return null
t=Object.create(null)
s=r.b
if(s!==-1)t.arguments=q[s+1]
s=r.c
if(s!==-1)t.argumentsExpr=q[s+1]
s=r.d
if(s!==-1)t.expr=q[s+1]
s=r.e
if(s!==-1)t.method=q[s+1]
s=r.f
if(s!==-1)t.receiver=q[s+1]
return t}}
H.aM.prototype={
h:function(a){var t=this.b
if(t==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+t+"' on null"}}
H.aI.prototype={
h:function(a){var t,s=this,r="NoSuchMethodError: method not found: '",q=s.b
if(q==null)return"NoSuchMethodError: "+H.d(s.a)
t=s.c
if(t==null)return r+q+"' ("+H.d(s.a)+")"
return r+q+"' on '"+t+"' ("+H.d(s.a)+")"}}
H.aW.prototype={
h:function(a){var t=this.a
return t.length===0?"Error":"Error: "+t}}
H.bm.prototype={
h:function(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
H.ak.prototype={
h:function(a){var t,s=this.b
if(s!=null)return s
s=this.a
t=s!==null&&typeof s==="object"?s.stack:null
return this.b=t==null?"":t},
$iW:1}
H.M.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.dg(s==null?"unknown":s)+"'"},
$iS:1,
gag:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aT.prototype={}
H.aR.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.dg(t)+"'"}}
H.a2.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.bn(t))+"'")}}
H.aQ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aY.prototype={
h:function(a){return"Assertion failed: "+P.aC(this.a)}}
H.bW.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.bX.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.bY.prototype={
$1:function(a){return this.a(H.b8(a))},
$S:7}
H.aL.prototype={}
H.U.prototype={
gk:function(a){return a.length},
$iaH:1}
H.aa.prototype={$iaF:1}
H.aK.prototype={$idQ:1}
H.ai.prototype={}
H.aj.prototype={}
H.u.prototype={
i:function(a){return H.b6(v.typeUniverse,this,a)},
m:function(a){return H.eh(v.typeUniverse,this,a)}}
H.b2.prototype={}
H.b0.prototype={
h:function(a){return this.a}}
H.al.prototype={}
P.bv.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.bu.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:8}
P.bw.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bx.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bN.prototype={
a_:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b9(new P.bO(this,b),0),a)
else throw H.e(P.bt("`setTimeout()` not found."))}}
P.bO.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ag.prototype={
aa:function(a){if((this.c&15)!==6)return!0
return this.b.b.E(u.m.a(this.d),a.a,u.y,u.K)},
a9:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.ab(t,a.a,a.b,s,r,u.l))
else return q.a(p.E(u.v.a(t),a.a,s,r))}}
P.w.prototype={
T:function(a,b,c){var t,s,r,q=this.$ti
q.m(c).i("1/(2)").a(a)
t=$.i
if(t!==C.a){c.i("@<0/>").m(q.c).i("1(2)").a(a)
if(b!=null)b=P.eB(b,t)}s=new P.w($.i,c.i("w<0>"))
r=b==null?1:3
this.H(new P.ag(s,r,a,b,q.i("@<1>").m(c).i("ag<1,2>")))
return s},
af:function(a,b){return this.T(a,null,b)},
H:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.H(a)
return}s.a=r
s.c=t.c}P.bR(null,null,s.b,u.M.a(new P.bB(s,a)))}},
L:function(a){var t,s,r,q,p,o,n=this,m={}
m.a=a
if(a==null)return
t=n.a
if(t<=1){s=u.F.a(n.c)
n.c=a
if(s!=null){r=a.a
for(q=a;r!=null;q=r,r=p)p=r.a
q.a=s}}else{if(t===2){o=u.c.a(n.c)
t=o.a
if(t<4){o.L(a)
return}n.a=t
n.c=o.c}m.a=n.q(a)
P.bR(null,null,n.b,u.M.a(new P.bF(m,n)))}},
D:function(){var t=u.F.a(this.c)
this.c=null
return this.q(t)},
q:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
I:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("a6<1>").b(a))if(r.b(a))P.cO(a,s)
else P.e2(a,s)
else{t=s.D()
r.c.a(a)
s.a=4
s.c=a
P.ah(s,t)}},
J:function(a,b){var t,s,r=this
u.l.a(b)
t=r.D()
s=P.be(a,b)
r.a=8
r.c=s
P.ah(r,t)},
$ia6:1}
P.bB.prototype={
$0:function(){P.ah(this.a,this.b)},
$S:0}
P.bF.prototype={
$0:function(){P.ah(this.b,this.a.a)},
$S:0}
P.bC.prototype={
$1:function(a){var t=this.a
t.a=0
t.I(a)},
$S:3}
P.bD.prototype={
$2:function(a,b){this.a.J(a,u.l.a(b))},
$S:9}
P.bE.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:0}
P.bI.prototype={
$0:function(){var t,s,r,q,p,o,n=this,m=null
try{r=n.a.a
m=r.b.b.S(u.W.a(r.d),u.z)}catch(q){t=H.au(q)
s=H.Z(q)
if(n.c){r=u.n.a(n.b.a.c).a
p=t
p=r==null?p==null:r===p
r=p}else r=!1
p=n.a
if(r)p.c=u.n.a(n.b.a.c)
else p.c=P.be(t,s)
p.b=!0
return}if(m instanceof P.w&&m.a>=4){if(m.a===8){r=n.a
r.c=u.n.a(m.c)
r.b=!0}return}if(u.d.b(m)){o=n.b.a
r=n.a
r.c=m.af(new P.bJ(o),u.z)
r.b=!1}},
$S:1}
P.bJ.prototype={
$1:function(a){return this.a},
$S:10}
P.bH.prototype={
$0:function(){var t,s,r,q,p,o,n,m
try{r=this.a
q=r.a
p=q.$ti
o=p.c
n=o.a(this.b)
r.c=q.b.b.E(p.i("2/(1)").a(q.d),n,p.i("2/"),o)}catch(m){t=H.au(m)
s=H.Z(m)
r=this.a
r.c=P.be(t,s)
r.b=!0}},
$S:1}
P.bG.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eP(q.a.aa(t))&&q.a.e!=null){q.c=q.a.a9(t)
q.b=!1}}catch(p){s=H.au(p)
r=H.Z(p)
q=u.n.a(l.a.a.c)
o=q.a
n=s
m=l.b
if(o==null?n==null:o===n)m.c=q
else m.c=P.be(s,r)
m.b=!0}},
$S:1}
P.aZ.prototype={}
P.ac.prototype={
gk:function(a){var t,s,r=this,q={},p=new P.w($.i,u.a)
q.a=0
t=r.$ti
s=t.i("~(1)?").a(new P.bo(q,r))
u.Y.a(new P.bp(q,p))
W.by(r.a,r.b,s,!1,t.c)
return p}}
P.bo.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("j(1)")}}
P.bp.prototype={
$0:function(){this.b.I(this.a.a)},
$S:0}
P.aS.prototype={}
P.a1.prototype={
h:function(a){return H.d(this.a)},
$if:1,
gA:function(){return this.b}}
P.ao.prototype={$icM:1}
P.bQ.prototype={
$0:function(){var t=H.e(this.a)
t.stack=J.av(this.b)
throw t},
$S:0}
P.b3.prototype={
ac:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.a===$.i){a.$0()
return}P.d2(q,q,this,a,u.H)}catch(r){t=H.au(r)
s=H.Z(r)
P.bP(q,q,this,t,u.l.a(s))}},
ad:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.a===$.i){a.$1(b)
return}P.d3(q,q,this,a,b,u.H,c)}catch(r){t=H.au(r)
s=H.Z(r)
P.bP(q,q,this,t,u.l.a(s))}},
a5:function(a,b){return new P.bL(this,b.i("0()").a(a),b)},
M:function(a){return new P.bK(this,u.M.a(a))},
a6:function(a,b){return new P.bM(this,b.i("~(0)").a(a),b)},
S:function(a,b){b.i("0()").a(a)
if($.i===C.a)return a.$0()
return P.d2(null,null,this,a,b)},
E:function(a,b,c,d){c.i("@<0>").m(d).i("1(2)").a(a)
d.a(b)
if($.i===C.a)return a.$1(b)
return P.d3(null,null,this,a,b,c,d)},
ab:function(a,b,c,d,e,f){d.i("@<0>").m(e).m(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.i===C.a)return a.$2(b,c)
return P.eC(null,null,this,a,b,c,d,e,f)}}
P.bL.prototype={
$0:function(){return this.a.S(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.bK.prototype={
$0:function(){return this.a.ac(this.b)},
$S:1}
P.bM.prototype={
$1:function(a){var t=this.c
return this.a.ad(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.O.prototype={
gO:function(a){return new H.aJ(a,a.length,H.a_(a).i("aJ<O.E>"))},
h:function(a){return P.cE(a,"[","]")}}
P.f.prototype={
gA:function(){return H.Z(this.$thrownJsError)}}
P.a0.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.aC(t)
return"Assertion failed"}}
P.aU.prototype={}
P.aN.prototype={
h:function(a){return"Throw of null."}}
P.x.prototype={
gC:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gB:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gC()+p+n
if(!r.a)return m
t=r.gB()
s=P.aC(r.b)
return m+t+": "+s}}
P.aP.prototype={
gC:function(){return"RangeError"},
gB:function(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+H.d(r):""
else if(r==null)t=": Not greater than or equal to "+H.d(s)
else if(r>s)t=": Not in inclusive range "+H.d(s)+".."+H.d(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+H.d(s)
return t}}
P.aE.prototype={
gC:function(){return"RangeError"},
gB:function(){var t,s=H.b7(this.b)
if(typeof s!=="number")return s.ah()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+H.d(t)},
gk:function(a){return this.f}}
P.aX.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.aV.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.aA.prototype={
h:function(a){var t=this.a
if(t==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.aC(t)+"."}}
P.ab.prototype={
h:function(a){return"Stack Overflow"},
gA:function(){return null},
$if:1}
P.aB.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.bA.prototype={
h:function(a){return"Exception: "+this.a}}
P.bk.prototype={
h:function(a){var t=this.a,s=t!=null&&""!==t?"FormatException: "+H.d(t):"FormatException"
return s}}
P.j.prototype={
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.d(H.bn(this))+"'"},
toString:function(){return this.h(this)}}
P.b4.prototype={
h:function(a){return""},
$iW:1}
P.bq.prototype={
gk:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.c.prototype={}
W.aw.prototype={
h:function(a){return String(a)}}
W.ax.prototype={
h:function(a){return String(a)}}
W.L.prototype={
V:function(a,b){return a.getContext(b)},
$iL:1}
W.R.prototype={
sa7:function(a,b){a.fillStyle=b},
$iR:1}
W.a3.prototype={
gk:function(a){return a.length}}
W.bi.prototype={}
W.bj.prototype={
h:function(a){return String(a)}}
W.a4.prototype={
h:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.d(s)+", "
t=a.top
t.toString
t=s+H.d(t)+") "
s=a.width
s.toString
s=t+H.d(s)+" x "
t=a.height
t.toString
return s+H.d(t)},
$icd:1}
W.p.prototype={
h:function(a){return a.localName},
gP:function(a){return new W.D(a,"change",!1,u.L)},
gR:function(a){return new W.D(a,"click",!1,u.G)},
$ip:1}
W.a.prototype={$ia:1}
W.l.prototype={
a0:function(a,b,c,d){return a.addEventListener(b,H.b9(u.o.a(c),1),!1)},
$il:1}
W.aD.prototype={
gk:function(a){return a.length}}
W.r.prototype={$ir:1}
W.A.prototype={
h:function(a){var t=a.nodeValue
return t==null?this.Y(a):t},
sae:function(a,b){a.textContent=b}}
W.V.prototype={
gk:function(a){return a.length},
$iV:1}
W.v.prototype={}
W.ae.prototype={
h:function(a){var t,s=a.left
s.toString
s="Rectangle ("+H.d(s)+", "
t=a.top
t.toString
t=s+H.d(t)+") "
s=a.width
s.toString
s=t+H.d(s)+" x "
t=a.height
t.toString
return s+H.d(t)}}
W.c9.prototype={}
W.af.prototype={}
W.D.prototype={}
W.b1.prototype={}
W.bz.prototype={
$1:function(a){return this.a.$1(u.D.a(a))},
$S:11}
W.b_.prototype={}
P.b.prototype={
gP:function(a){return new W.D(a,"change",!1,u.L)},
gR:function(a){return new W.D(a,"click",!1,u.G)}}
Z.bg.prototype={}
M.bh.prototype={
N:function(a){var t=u.t.a((a&&C.t).V(a,"2d"))
this.sa1(t.canvas.getBoundingClientRect())
this.a2(a,t)},
a2:function(a,b){var t,s,r,q=a.width
if(typeof q!=="number")return q.U()
t=q/2
q=a.height
if(typeof q!=="number")return q.U()
s=q/2
for(r=0;r<360;r+=$.az){q=$.az
b.beginPath()
b.moveTo(t,s)
b.arc(t,s,t,r*3.141592653589793/180,(r+q)*3.141592653589793/180,!1)
b.closePath()
C.u.sa7(b,K.bf(X.cc(K.cC(r/360,1,0.5))))
b.fill()}},
sa1:function(a){this.a=u.j.a(a)}}
T.C.prototype={
W:function(a,b,c){var t=this.a
t[0]=a
t[1]=b
t[2]=c},
F:function(a){var t=a.a,s=this.a
s[0]=t[0]
s[1]=t[1]
s[2]=t[2]},
h:function(a){var t=this.a
return"["+H.d(t[0])+","+H.d(t[1])+","+H.d(t[2])+"]"},
gk:function(a){var t=this.a,s=t[0],r=t[1]
t=t[2]
return Math.sqrt(s*s+r*r+t*t)},
t:function(a,b){var t=b.a,s=this.a
s[0]=s[0]+t[0]
s[1]=s[1]+t[1]
s[2]=s[2]+t[2]},
p:function(a,b){var t=this.a
t[2]=t[2]*b
t[1]=t[1]*b
t[0]=t[0]*b}}
F.c1.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j="#resultColor"
u.X.a(a)
t=$.bc()
t.toString
s=a.clientX
r=a.clientY
t=t.a
q=t.left
q.toString
q=C.b.n(q)
if(typeof s!=="number")return s.X()
p=t.width
p.toString
o=t.top
o.toString
o=C.b.n(o)
if(typeof r!=="number")return r.X()
t=t.height
t.toString
n=Math.atan2(r-o-t/2,s-q-p/2)*57.29577951308232
if(n<0)n+=360
m=K.cC(C.j.a8(n/$.az)*$.az/360,1,0.5)
t=$.cs()
t.a.t(0,m)
t=t.a
s=t.a
l=Math.max(s[0],Math.max(s[1],s[2]))
l=l>=256?256/l:1
k=new T.C(new Float32Array(3))
k.F(t)
k.p(0,l)
t=document
s=t.querySelector(j).style
r=K.bf(X.cc(k))
s.backgroundColor=r
J.cv(t.querySelector(j),K.bf(X.cc(k)))},
$S:4}
F.c2.prototype={
$1:function(a){var t,s,r,q="#resultColor"
u.X.a(a)
t=document
s=t.querySelector(q).style
r=K.bf($.dh())
s.backgroundColor=r
J.cv(t.querySelector(q),"")
t=$.cs()
t.toString
t.a=new T.C(new Float32Array(3))},
$S:4}
F.c3.prototype={
$1:function(a){var t=document,s=u.e.a(t.querySelector("#numberOfColorsInColorWheel")),r=$.bc(),q=P.eZ(s.value)
r.toString
if(typeof q!=="number")return H.da(q)
$.az=C.j.w(360/q)
$.bc().N(u.B.a(t.querySelector("#colorWheel")))},
$S:12};(function aliases(){var t=J.m.prototype
t.Y=t.h
t=J.G.prototype
t.Z=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"eM","e_",2)
t(P,"eN","e0",2)
t(P,"eO","e1",2)
s(P,"d6","eF",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.ca,J.m,J.ay,H.aJ,H.a5,H.br,P.f,H.bm,H.ak,H.M,H.u,H.b2,P.bN,P.ag,P.w,P.aZ,P.ac,P.aS,P.a1,P.ao,P.O,P.ab,P.bA,P.bk,P.j,P.b4,P.bq,W.bi,W.c9,Z.bg,M.bh,T.C])
r(J.m,[J.aG,J.a9,J.G,J.q,J.T,J.N,H.aL,W.l,W.R,W.b_,W.bj,W.a4,W.a])
r(J.G,[J.aO,J.ad,J.y])
s(J.bl,J.q)
r(J.T,[J.a8,J.a7])
r(P.f,[P.aU,H.aI,H.aW,H.aQ,P.a0,H.b0,P.aN,P.x,P.aX,P.aV,P.aA,P.aB])
s(H.aM,P.aU)
r(H.M,[H.aT,H.bW,H.bX,H.bY,P.bv,P.bu,P.bw,P.bx,P.bO,P.bB,P.bF,P.bC,P.bD,P.bE,P.bI,P.bJ,P.bH,P.bG,P.bo,P.bp,P.bQ,P.bL,P.bK,P.bM,W.bz,F.c1,F.c2,F.c3])
r(H.aT,[H.aR,H.a2])
s(H.aY,P.a0)
s(H.U,H.aL)
s(H.ai,H.U)
s(H.aj,H.ai)
s(H.aa,H.aj)
s(H.aK,H.aa)
s(H.al,H.b0)
s(P.b3,P.ao)
r(P.x,[P.aP,P.aE])
s(W.A,W.l)
s(W.p,W.A)
r(W.p,[W.c,P.b])
r(W.c,[W.aw,W.ax,W.L,W.aD,W.V])
s(W.a3,W.b_)
s(W.v,W.a)
s(W.r,W.v)
s(W.ae,W.a4)
s(W.af,P.ac)
s(W.D,W.af)
s(W.b1,P.aS)
t(H.ai,P.O)
t(H.aj,H.a5)
t(W.b_,W.bi)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bb:"int",o:"double",F:"num",P:"String",bS:"bool",j:"Null",fi:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["j()","~()","~(~())","j(@)","j(r*)","@(@)","@(@,P)","@(P)","j(~())","j(h,W)","w<@>(@)","@(a)","j(a*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.eg(v.typeUniverse,JSON.parse('{"y":"G","aO":"G","ad":"G","f9":"a","ff":"a","f8":"b","fg":"b","fa":"c","fj":"c","fD":"l","fk":"r","fc":"v","fh":"A","fe":"A","aG":{"bS":[]},"a9":{"j":[]},"G":{"S":[]},"q":{"aF":["1"]},"bl":{"q":["1"],"aF":["1"]},"T":{"o":[],"F":[]},"a8":{"o":[],"bb":[],"F":[]},"a7":{"o":[],"F":[]},"N":{"P":[]},"aM":{"f":[]},"aI":{"f":[]},"aW":{"f":[]},"ak":{"W":[]},"M":{"S":[]},"aT":{"S":[]},"aR":{"S":[]},"a2":{"S":[]},"aQ":{"f":[]},"aY":{"f":[]},"U":{"aH":["1"]},"aa":{"O":["o"],"aH":["o"],"aF":["o"],"a5":["o"]},"aK":{"O":["o"],"dQ":[],"aH":["o"],"aF":["o"],"a5":["o"],"O.E":"o"},"b0":{"f":[]},"al":{"f":[]},"w":{"a6":["1"]},"a1":{"f":[]},"ao":{"cM":[]},"b3":{"ao":[],"cM":[]},"o":{"F":[]},"bb":{"F":[]},"a0":{"f":[]},"aU":{"f":[]},"aN":{"f":[]},"x":{"f":[]},"aP":{"f":[]},"aE":{"f":[]},"aX":{"f":[]},"aV":{"f":[]},"aA":{"f":[]},"ab":{"f":[]},"aB":{"f":[]},"b4":{"W":[]},"c":{"p":[],"l":[]},"aw":{"p":[],"l":[]},"ax":{"p":[],"l":[]},"L":{"p":[],"l":[]},"a4":{"cd":["F"]},"p":{"l":[]},"aD":{"p":[],"l":[]},"r":{"a":[]},"A":{"l":[]},"V":{"p":[],"l":[]},"v":{"a":[]},"ae":{"cd":["F"]},"af":{"ac":["1"]},"D":{"af":["1"],"ac":["1"]},"b":{"p":[],"l":[]}}'))
H.ef(v.typeUniverse,JSON.parse('{"U":1,"aS":1}'))
0
var u=(function rtii(){var t=H.d7
return{n:t("a1"),C:t("f"),D:t("a"),Z:t("S"),d:t("a6<@>"),s:t("q<P>"),b:t("q<@>"),T:t("a9"),g:t("y"),p:t("aH<@>"),P:t("j"),K:t("h"),l:t("W"),N:t("P"),E:t("ad"),L:t("D<a*>"),G:t("D<r*>"),c:t("w<@>"),a:t("w<bb>"),y:t("bS"),m:t("bS(h)"),i:t("o"),z:t("@"),W:t("@()"),v:t("@(h)"),Q:t("@(h,W)"),S:t("bb"),B:t("L*"),t:t("R*"),X:t("r*"),A:t("0&*"),_:t("h*"),j:t("cd<F>*"),e:t("V*"),R:t("a6<j>?"),O:t("h?"),F:t("ag<@,@>?"),o:t("@(a)?"),Y:t("~()?"),q:t("F"),H:t("~"),M:t("~()")}})();(function constants(){C.t=W.L.prototype
C.u=W.R.prototype
C.v=J.m.prototype
C.i=J.q.prototype
C.j=J.a7.prototype
C.d=J.a8.prototype
C.b=J.T.prototype
C.c=J.N.prototype
C.w=J.y.prototype
C.k=J.aO.prototype
C.e=J.ad.prototype
C.f=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.l=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.q=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.m=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.n=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.o=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.h=function(hooks) { return hooks; }

C.a=new P.b3()
C.r=new P.b4()})();(function staticFields(){$.cP=null
$.z=0
$.cz=null
$.cy=null
$.d8=null
$.d5=null
$.de=null
$.bT=null
$.bZ=null
$.co=null
$.X=null
$.aq=null
$.ar=null
$.cl=!1
$.i=C.a
$.at=H.cq([],H.d7("q<h>"))
$.az=60})();(function lazyInitializers(){var t=hunkHelpers.lazy,s=hunkHelpers.lazyOld
t($,"fd","di",function(){return H.eV("_$dart_dartClosure")})
t($,"ft","ds",function(){return H.B(H.bs({
toString:function(){return"$receiver$"}}))})
t($,"fu","dt",function(){return H.B(H.bs({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fv","du",function(){return H.B(H.bs(null))})
t($,"fw","dv",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fz","dy",function(){return H.B(H.bs(void 0))})
t($,"fA","dz",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fy","dx",function(){return H.B(H.cK(null))})
t($,"fx","dw",function(){return H.B(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"fC","dB",function(){return H.B(H.cK(void 0))})
t($,"fB","dA",function(){return H.B(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"fE","cr",function(){return P.dZ()})
s($,"fb","dh",function(){return T.H(256,256,256)})
s($,"fr","dq",function(){return T.H(1,1,1)})
s($,"fp","dn",function(){return T.H(1,0,0)})
s($,"fs","dr",function(){return T.H(1,1,0)})
s($,"fm","dk",function(){return T.H(0.163,0.373,0.6)})
s($,"fq","dp",function(){return T.H(0.5,0,0.5)})
s($,"fn","dl",function(){return T.H(0,0.66,0.2)})
s($,"fo","dm",function(){return T.H(1,0.5,0)})
s($,"fl","dj",function(){return T.H(0.2,0.094,0)})
s($,"fU","bc",function(){return new M.bh()})
s($,"fT","cs",function(){var r=new Z.bg()
r.a=T.dY()
return r})})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.m,MediaError:J.m,Navigator:J.m,NavigatorConcurrentHardware:J.m,NavigatorUserMediaError:J.m,OverconstrainedError:J.m,PositionError:J.m,WebGLRenderingContext:J.m,WebGL2RenderingContext:J.m,SQLError:J.m,ArrayBufferView:H.aL,Float32Array:H.aK,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLBaseElement:W.c,HTMLBodyElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLDivElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTemplateElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aw,HTMLAreaElement:W.ax,HTMLCanvasElement:W.L,CanvasRenderingContext2D:W.R,CSSStyleDeclaration:W.a3,MSStyleCSSProperties:W.a3,CSS2Properties:W.a3,DOMException:W.bj,DOMRectReadOnly:W.a4,Element:W.p,AbortPaymentEvent:W.a,AnimationEvent:W.a,AnimationPlaybackEvent:W.a,ApplicationCacheErrorEvent:W.a,BackgroundFetchClickEvent:W.a,BackgroundFetchEvent:W.a,BackgroundFetchFailEvent:W.a,BackgroundFetchedEvent:W.a,BeforeInstallPromptEvent:W.a,BeforeUnloadEvent:W.a,BlobEvent:W.a,CanMakePaymentEvent:W.a,ClipboardEvent:W.a,CloseEvent:W.a,CustomEvent:W.a,DeviceMotionEvent:W.a,DeviceOrientationEvent:W.a,ErrorEvent:W.a,ExtendableEvent:W.a,ExtendableMessageEvent:W.a,FetchEvent:W.a,FontFaceSetLoadEvent:W.a,ForeignFetchEvent:W.a,GamepadEvent:W.a,HashChangeEvent:W.a,InstallEvent:W.a,MediaEncryptedEvent:W.a,MediaKeyMessageEvent:W.a,MediaQueryListEvent:W.a,MediaStreamEvent:W.a,MediaStreamTrackEvent:W.a,MessageEvent:W.a,MIDIConnectionEvent:W.a,MIDIMessageEvent:W.a,MutationEvent:W.a,NotificationEvent:W.a,PageTransitionEvent:W.a,PaymentRequestEvent:W.a,PaymentRequestUpdateEvent:W.a,PopStateEvent:W.a,PresentationConnectionAvailableEvent:W.a,PresentationConnectionCloseEvent:W.a,ProgressEvent:W.a,PromiseRejectionEvent:W.a,PushEvent:W.a,RTCDataChannelEvent:W.a,RTCDTMFToneChangeEvent:W.a,RTCPeerConnectionIceEvent:W.a,RTCTrackEvent:W.a,SecurityPolicyViolationEvent:W.a,SensorErrorEvent:W.a,SpeechRecognitionError:W.a,SpeechRecognitionEvent:W.a,SpeechSynthesisEvent:W.a,StorageEvent:W.a,SyncEvent:W.a,TrackEvent:W.a,TransitionEvent:W.a,WebKitTransitionEvent:W.a,VRDeviceEvent:W.a,VRDisplayEvent:W.a,VRSessionEvent:W.a,MojoInterfaceRequestEvent:W.a,ResourceProgressEvent:W.a,USBConnectionEvent:W.a,IDBVersionChangeEvent:W.a,AudioProcessingEvent:W.a,OfflineAudioCompletionEvent:W.a,WebGLContextEvent:W.a,Event:W.a,InputEvent:W.a,SubmitEvent:W.a,Window:W.l,DOMWindow:W.l,EventTarget:W.l,HTMLFormElement:W.aD,MouseEvent:W.r,DragEvent:W.r,PointerEvent:W.r,WheelEvent:W.r,Document:W.A,HTMLDocument:W.A,Node:W.A,HTMLSelectElement:W.V,CompositionEvent:W.v,FocusEvent:W.v,KeyboardEvent:W.v,TextEvent:W.v,TouchEvent:W.v,UIEvent:W.v,ClientRect:W.ae,DOMRect:W.ae,SVGAElement:P.b,SVGAnimateElement:P.b,SVGAnimateMotionElement:P.b,SVGAnimateTransformElement:P.b,SVGAnimationElement:P.b,SVGCircleElement:P.b,SVGClipPathElement:P.b,SVGDefsElement:P.b,SVGDescElement:P.b,SVGDiscardElement:P.b,SVGEllipseElement:P.b,SVGFEBlendElement:P.b,SVGFEColorMatrixElement:P.b,SVGFEComponentTransferElement:P.b,SVGFECompositeElement:P.b,SVGFEConvolveMatrixElement:P.b,SVGFEDiffuseLightingElement:P.b,SVGFEDisplacementMapElement:P.b,SVGFEDistantLightElement:P.b,SVGFEFloodElement:P.b,SVGFEFuncAElement:P.b,SVGFEFuncBElement:P.b,SVGFEFuncGElement:P.b,SVGFEFuncRElement:P.b,SVGFEGaussianBlurElement:P.b,SVGFEImageElement:P.b,SVGFEMergeElement:P.b,SVGFEMergeNodeElement:P.b,SVGFEMorphologyElement:P.b,SVGFEOffsetElement:P.b,SVGFEPointLightElement:P.b,SVGFESpecularLightingElement:P.b,SVGFESpotLightElement:P.b,SVGFETileElement:P.b,SVGFETurbulenceElement:P.b,SVGFilterElement:P.b,SVGForeignObjectElement:P.b,SVGGElement:P.b,SVGGeometryElement:P.b,SVGGraphicsElement:P.b,SVGImageElement:P.b,SVGLineElement:P.b,SVGLinearGradientElement:P.b,SVGMarkerElement:P.b,SVGMaskElement:P.b,SVGMetadataElement:P.b,SVGPathElement:P.b,SVGPatternElement:P.b,SVGPolygonElement:P.b,SVGPolylineElement:P.b,SVGRadialGradientElement:P.b,SVGRectElement:P.b,SVGScriptElement:P.b,SVGSetElement:P.b,SVGStopElement:P.b,SVGStyleElement:P.b,SVGElement:P.b,SVGSVGElement:P.b,SVGSwitchElement:P.b,SVGSymbolElement:P.b,SVGTSpanElement:P.b,SVGTextContentElement:P.b,SVGTextElement:P.b,SVGTextPathElement:P.b,SVGTextPositioningElement:P.b,SVGTitleElement:P.b,SVGUseElement:P.b,SVGViewElement:P.b,SVGGradientElement:P.b,SVGComponentTransferFunctionElement:P.b,SVGFEDropShadowElement:P.b,SVGMPathElement:P.b})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,SQLError:true,ArrayBufferView:false,Float32Array:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLDivElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,DOMException:true,DOMRectReadOnly:false,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,HTMLDocument:true,Node:false,HTMLSelectElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,ClientRect:true,DOMRect:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
H.U.$nativeSuperclassTag="ArrayBufferView"
H.ai.$nativeSuperclassTag="ArrayBufferView"
H.aj.$nativeSuperclassTag="ArrayBufferView"
H.aa.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.dc,[])
else F.dc([])})})()
//# sourceMappingURL=main.dart.js.map
