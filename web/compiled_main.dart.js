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
a[c]=function(){a[c]=function(){H.f5(b)}
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
df:function(a){var t,s=H.de(a)
if(s!=null)return s
t="minified:"+a
return t},
fT:function(a,b){var t
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
if(3>=t.length)return H.c2(t,3)
s=t[3]
if(s!=null)return parseInt(a,10)
if(t[2]!=null)return parseInt(a,16)
return null},
br:function(a){return H.dS(a)},
dS:function(a){var t,s,r
if(a instanceof P.h)return H.t(H.a_(a),null)
if(J.bY(a)===C.v||u.E.b(a)){t=C.f(a)
if(H.cG(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.cG(r))return r}}return H.t(H.a_(a),null)},
cG:function(a){var t=a!=="Object"&&a!==""
return t},
d9:function(a){throw H.e(H.cm(a))},
c2:function(a,b){if(a==null)J.c6(a)
throw H.e(H.eQ(a,b))},
eQ:function(a,b){var t,s,r="index"
if(!H.d0(b))return new P.x(!0,b,r,null)
t=H.b7(J.c6(a))
if(!(b<0)){if(typeof t!=="number")return H.d9(t)
s=b>=t}else s=!0
if(s)return P.dR(b,a,r,null,t)
return P.dU(b,r)},
cm:function(a){return new P.x(!0,a,null,null)},
e:function(a){var t,s
if(a==null)a=new P.aN()
t=new Error()
t.dartException=a
s=H.f6
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
f6:function(){return J.av(this.dartException)},
c5:function(a){throw H.e(a)},
f4:function(a){throw H.e(P.cB(a))},
B:function(a){var t,s,r,q,p,o
a=H.f2(a.replace(String({}),'$receiver$'))
t=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(t==null)t=H.cq([],u.s)
s=t.indexOf("\\$arguments\\$")
r=t.indexOf("\\$argumentsExpr\\$")
q=t.indexOf("\\$expr\\$")
p=t.indexOf("\\$method\\$")
o=t.indexOf("\\$receiver\\$")
return new H.bv(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),s,r,q,p,o)},
bw:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(t){return t.message}}(a)},
cJ:function(a){return function($expr$){try{$expr$.$method$}catch(t){return t.message}}(a)},
cF:function(a,b){return new H.aM(a,b==null?null:b.method)},
cb:function(a,b){var t=b==null,s=t?null:b.method
return new H.aI(a,s,t?null:b.receiver)},
au:function(a){if(a==null)return new H.bq(a)
if(typeof a!=="object")return a
if("dartException" in a)return H.Q(a,a.dartException)
return H.eI(a)},
Q:function(a,b){if(u.C.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
eI:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null
if(!("message" in a))return a
t=a.message
if("number" in a&&typeof a.number=="number"){s=a.number
r=s&65535
if((C.d.a4(s,16)&8191)===10)switch(r){case 438:return H.Q(a,H.cb(H.d(t)+" (Error "+r+")",f))
case 445:case 5007:return H.Q(a,H.cF(H.d(t)+" (Error "+r+")",f))}}if(a instanceof TypeError){q=$.dr()
p=$.ds()
o=$.dt()
n=$.du()
m=$.dx()
l=$.dy()
k=$.dw()
$.dv()
j=$.dA()
i=$.dz()
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
if(g)return H.Q(a,H.cF(H.b8(t),h))}}return H.Q(a,new H.aW(typeof t=="string"?t:""))}if(a instanceof RangeError){if(typeof t=="string"&&t.indexOf("call stack")!==-1)return new P.ab()
t=function(b){try{return String(b)}catch(e){}return null}(a)
return H.Q(a,new P.x(!1,f,f,typeof t=="string"?t.replace(/^RangeError:\s*/,""):t))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof t=="string"&&t==="too much recursion")return new P.ab()
return a},
Z:function(a){var t
if(a==null)return new H.ak(a)
t=a.$cachedTrace
if(t!=null)return t
return a.$cachedTrace=new H.ak(a)},
eZ:function(a,b,c,d,e,f){u.Z.a(a)
switch(H.b7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.e(new P.bE("Unsupported number of arguments for wrapped closure"))},
b9:function(a,b){var t
if(a==null)return null
t=a.$identity
if(!!t)return t
t=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.eZ)
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
if(!e){r=H.cA(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.dK(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.cA(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
dK:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.d8,a)
if(typeof a=="string"){if(b)throw H.e("Cannot compute signature for static tearoff.")
t=c?H.dI:H.dH
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.e("Error in functionType of tearoff")},
dL:function(a,b,c,d){var t=H.cz
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
cA:function(a,b,c){var t,s,r,q,p,o,n
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
dM:function(a,b,c,d){var t=H.cz,s=H.dJ
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
dN:function(a,b){var t,s,r,q,p,o,n=H.c7(),m=$.cx
if(m==null)m=$.cx=H.cw("receiver")
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
cz:function(a){return a.a},
dJ:function(a){return a.c},
c7:function(){var t=$.cy
return t==null?$.cy=H.cw("self"):t},
cw:function(a){var t,s,r,q=new H.a2("self","target","receiver","name"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.e(P.dF("Field name "+a+" not found."))},
eO:function(a){if(a==null)H.eK("boolean expression must not be null")
return a},
eK:function(a){throw H.e(new H.aY(a))},
f5:function(a){throw H.e(new P.aB(a))},
eU:function(a){return v.getIsolateTag(a)},
fS:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
f0:function(a){var t,s,r,q,p,o=H.b8($.d7.$1(a)),n=$.bX[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c1[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.ej($.d4.$2(a,o))
if(r!=null){n=$.bX[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.c1[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.c4(t)
$.bX[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.c1[o]=t
return t}if(q==="-"){p=H.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.dc(a,t)
if(q==="*")throw H.e(P.cK(o))
if(v.leafTags[o]===true){p=H.c4(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.dc(a,t)},
dc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.cp(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
c4:function(a){return J.cp(a,!1,null,!!a.$iaH)},
f1:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.c4(t)
else return J.cp(t,c,null,null)},
eW:function(){if(!0===$.co)return
$.co=!0
H.eX()},
eX:function(){var t,s,r,q,p,o,n,m
$.bX=Object.create(null)
$.c1=Object.create(null)
H.eV()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.dd.$1(p)
if(o!=null){n=H.f1(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
eV:function(){var t,s,r,q,p,o,n=C.l()
n=H.Y(C.m,H.Y(C.n,H.Y(C.h,H.Y(C.h,H.Y(C.o,H.Y(C.p,H.Y(C.q(C.f),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.d7=new H.bZ(q)
$.d4=new H.c_(p)
$.dd=new H.c0(o)},
Y:function(a,b){return a(b)||b},
f2:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
bv:function bv(a,b,c,d,e,f){var _=this
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
bq:function bq(a){this.a=a},
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
bZ:function bZ(a){this.a=a},
c_:function c_(a){this.a=a},
c0:function c0(a){this.a=a},
aL:function aL(){},
U:function U(){},
aa:function aa(){},
aK:function aK(){},
ai:function ai(){},
aj:function aj(){},
dW:function(a,b){var t=b.c
return t==null?b.c=H.ch(a,b.z,!0):t},
cH:function(a,b){var t=b.c
return t==null?b.c=H.am(a,"a6",[b.z]):t},
cI:function(a){var t=a.y
if(t===6||t===7||t===8)return H.cI(a.z)
return t===11||t===12},
dV:function(a){return a.cy},
d6:function(a){return H.ci(v.typeUniverse,a,!1)},
K:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.cU(a,s,!0)
case 7:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.ch(a,s,!0)
case 8:t=b.z
s=H.K(a,t,c,a0)
if(s===t)return b
return H.cT(a,s,!0)
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
i=H.eF(a,j,c,a0)
if(k===l&&i===j)return b
return H.cS(a,k,i)
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
eG:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.K(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
eF:function(a,b,c,d){var t,s=b.a,r=H.as(a,s,c,d),q=b.b,p=H.as(a,q,c,d),o=b.c,n=H.eG(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.b2()
t.a=r
t.b=p
t.c=n
return t},
cq:function(a,b){a[v.arrayRti]=b
return a},
eP:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.d8(t)
return a.$S()}return null},
da:function(a,b){var t
if(H.cI(b))if(a instanceof H.M){t=H.eP(a)
if(t!=null)return t}return H.a_(a)},
a_:function(a){var t
if(a instanceof P.h){t=a.$ti
return t!=null?t:H.ck(a)}if(Array.isArray(a))return H.cj(a)
return H.ck(J.bY(a))},
cj:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
fR:function(a){var t=a.$ti
return t!=null?t:H.ck(a)},
ck:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.eq(a,t)},
eq:function(a,b){var t=a instanceof H.M?a.__proto__.__proto__.constructor:b,s=H.eh(v.typeUniverse,t.name)
b.$ccache=s
return s},
d8:function(a){var t,s,r
H.b7(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.ci(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
ep:function(a){var t,s,r=this,q=u.K
if(r===q)return H.ap(r,a,H.et)
if(!H.E(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.ap(r,a,H.ex)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.d0
else if(t===u.i||t===u.q)s=H.es
else if(t===u.N)s=H.eu
else s=t===u.y?H.cZ:null
if(s!=null)return H.ap(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.f_)){r.r="$i"+q
return H.ap(r,a,H.ev)}}else if(q===7)return H.ap(r,a,H.en)
return H.ap(r,a,H.el)},
ap:function(a,b,c){a.b=c
return a.b(b)},
eo:function(a){var t,s,r=this
if(!H.E(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.ek
else if(r===u.K)s=H.ei
else s=H.em
r.a=s
return r.a(a)},
ez:function(a){var t,s=a.y
if(!H.E(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
el:function(a){var t=this
if(a==null)return H.ez(t)
return H.k(v.typeUniverse,H.da(a,t),null,t,null)},
en:function(a){if(a==null)return!0
return this.z.b(a)},
ev:function(a){var t=this,s=t.r
if(a instanceof P.h)return!!a[s]
return!!J.bY(a)[s]},
fQ:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cX(a,t)},
em:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.cX(a,t)},
cX:function(a,b){throw H.e(H.e7(H.cM(a,H.da(a,b),H.t(b,null))))},
cM:function(a,b,c){var t=P.aC(a),s=H.t(b==null?H.a_(a):b,null)
return t+": type '"+H.d(s)+"' is not a subtype of type '"+H.d(c)+"'"},
e7:function(a){return new H.al("TypeError: "+a)},
n:function(a,b){return new H.al("TypeError: "+H.cM(a,null,b))},
et:function(a){return a!=null},
ei:function(a){return a},
ex:function(a){return!0},
ek:function(a){return a},
cZ:function(a){return!0===a||!1===a},
fE:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.e(H.n(a,"bool"))},
fG:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.n(a,"bool"))},
fF:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.e(H.n(a,"bool?"))},
fH:function(a){if(typeof a=="number")return a
throw H.e(H.n(a,"double"))},
fJ:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"double"))},
fI:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"double?"))},
d0:function(a){return typeof a=="number"&&Math.floor(a)===a},
fK:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.e(H.n(a,"int"))},
b7:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.n(a,"int"))},
fL:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.e(H.n(a,"int?"))},
es:function(a){return typeof a=="number"},
fM:function(a){if(typeof a=="number")return a
throw H.e(H.n(a,"num"))},
fO:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"num"))},
fN:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.e(H.n(a,"num?"))},
eu:function(a){return typeof a=="string"},
fP:function(a){if(typeof a=="string")return a
throw H.e(H.n(a,"String"))},
b8:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.n(a,"String"))},
ej:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.e(H.n(a,"String?"))},
eC:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.c.j(s,H.t(a[r],b))
return t},
cY:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.cq([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.i.t(a5,"T"+(r+q))
for(p=u.O,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.c2(a5,j)
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
a1+=J.cs(H.t(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
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
return J.cs(r===11||r===12?C.c.j("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.d(H.t(a.z,b))+">"
if(m===9){q=H.eH(a.z)
p=a.Q
return p.length!==0?q+("<"+H.eC(p,b)+">"):q}if(m===11)return H.cY(a,b,null)
if(m===12)return H.cY(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.c2(b,o)
return b[o]}return"?"},
eH:function(a){var t,s=H.de(a)
if(s!=null)return s
t="minified:"+a
return t},
cV:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
eh:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.ci(a,b,!1)
else if(typeof n=="number"){t=n
s=H.an(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.am(a,b,r)
o[b]=p
return p}else return n},
ef:function(a,b){return H.cW(a.tR,b)},
ee:function(a,b){return H.cW(a.eT,b)},
ci:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.cR(H.cP(a,null,b,c))
s.set(b,t)
return t},
b6:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.cR(H.cP(a,b,c,!0))
r.set(c,s)
return s},
eg:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.cf(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
J:function(a,b){b.a=H.eo
b.b=H.ep
return b},
an:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.u(null,null)
t.y=b
t.cy=c
s=H.J(a,t)
a.eC.set(c,s)
return s},
cU:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.ec(a,b,s,c)
a.eC.set(s,t)
return t},
ec:function(a,b,c,d){var t,s,r
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
t=H.eb(a,b,s,c)
a.eC.set(s,t)
return t},
eb:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.E(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.c3(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.c3(r.z))return r
else return H.dW(a,b)}}q=new H.u(null,null)
q.y=7
q.z=b
q.cy=c
return H.J(a,q)},
cT:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.e9(a,b,s,c)
a.eC.set(s,t)
return t},
e9:function(a,b,c,d){var t,s,r
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
ed:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
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
e8:function(a){var t,s,r,q,p,o,n=a.length
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
cS:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.b5(n)
if(k>0){t=m>0?",":""
s=H.b5(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.e8(j)
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
t=H.ea(a,b,c,s,d)
a.eC.set(s,t)
return t},
ea:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
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
cP:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
cR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.e2(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.cQ(a,s,h,g,!1)
else if(r===46)s=H.cQ(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.I(a.u,a.e,g.pop()))
break
case 94:g.push(H.ed(a.u,g.pop()))
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
case 38:H.e3(a,g)
break
case 42:m=a.u
g.push(H.cU(m,H.I(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.ch(m,H.I(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.cT(m,H.I(m,a.e,g.pop()),a.n))
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
g.push(H.cS(q,H.I(q,a.e,g.pop()),l))
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
H.e5(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.I(a.u,a.e,i)},
e2:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
cQ:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.cV(t,p.z)[q]
if(o==null)H.c5('No "'+q+'" in "'+H.dV(p)+'"')
d.push(H.b6(t,p,o))}else d.push(q)
return n},
e3:function(a,b){var t=b.pop()
if(0===t){b.push(H.an(a.u,1,"0&"))
return}if(1===t){b.push(H.an(a.u,4,"1&"))
return}throw H.e(P.bd("Unexpected extended operation "+H.d(t)))},
I:function(a,b,c){if(typeof c=="string")return H.am(a,c,a.sEA)
else if(typeof c=="number")return H.e4(a,b,c)
else return c},
ce:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.I(a,b,c[t])},
e5:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.I(a,b,c[t])},
e4:function(a,b,c){var t,s,r=b.y
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
return H.k(a,H.cH(a,b),c,d,e)}if(s===7){t=H.k(a,b.z,c,d,e)
return t}if(q===8){if(H.k(a,b,c,d.z,e))return!0
return H.k(a,b,c,H.cH(a,d),e)}if(q===7){t=H.k(a,b,c,d.z,e)
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
if(!H.k(a,l,c,k,e)||!H.k(a,k,e,l,c))return!1}return H.d_(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.d_(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.er(a,b,c,d,e)}return!1},
d_:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
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
er:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.k(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.cV(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.k(a,H.b6(a,b,m[q]),c,s[q],e))return!1
return!0},
c3:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.E(a))if(s!==7)if(!(s===6&&H.c3(a.z)))t=s===8&&H.c3(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
f_:function(a){var t
if(!H.E(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
E:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.O},
cW:function(a,b){var t,s,r=Object.keys(b),q=r.length
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
de:function(a){return v.mangledGlobalNames[a]}},J={
cp:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bb:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.co==null){H.eW()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.e(P.cK("Return interceptor for "+H.d(t(a,p))))}r=a.constructor
q=r==null?null:r[J.cE()]
if(q!=null)return q
q=H.f0(a)
if(q!=null)return q
if(typeof a=="function")return C.w
t=Object.getPrototypeOf(a)
if(t==null)return C.k
if(t===Object.prototype)return C.k
if(typeof r=="function"){Object.defineProperty(r,J.cE(),{value:C.e,enumerable:false,writable:true,configurable:true})
return C.e}return C.e},
cE:function(){var t=$.cO
return t==null?$.cO=v.getIsolateTag("_$dart_js"):t},
bY:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.a8.prototype
return J.a7.prototype}if(typeof a=="string")return J.N.prototype
if(a==null)return J.a9.prototype
if(typeof a=="boolean")return J.aG.prototype
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.bb(a)},
eR:function(a){if(typeof a=="number")return J.T.prototype
if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.bb(a)},
eS:function(a){if(typeof a=="string")return J.N.prototype
if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.bb(a)},
eT:function(a){if(a==null)return a
if(a.constructor==Array)return J.q.prototype
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.bb(a)},
ba:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.y.prototype
return a}if(a instanceof P.h)return a
return J.bb(a)},
cs:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.eR(a).j(a,b)},
dB:function(a,b,c,d){return J.ba(a).a0(a,b,c,d)},
dC:function(a){return J.eT(a).gO(a)},
c6:function(a){return J.eS(a).gk(a)},
dD:function(a){return J.ba(a).gP(a)},
ct:function(a){return J.ba(a).gR(a)},
cu:function(a,b){return J.ba(a).saf(a,b)},
dE:function(a,b){return J.ba(a).sah(a,b)},
av:function(a){return J.bY(a).h(a)},
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
dY:function(){var t,s,r={}
if(self.scheduleImmediate!=null)return P.eL()
if(self.MutationObserver!=null&&self.document!=null){t=self.document.createElement("div")
s=self.document.createElement("span")
r.a=null
new self.MutationObserver(H.b9(new P.bz(r),1)).observe(t,{childList:true})
return new P.by(r,t,s)}else if(self.setImmediate!=null)return P.eM()
return P.eN()},
dZ:function(a){self.scheduleImmediate(H.b9(new P.bA(u.M.a(a)),0))},
e_:function(a){self.setImmediate(H.b9(new P.bB(u.M.a(a)),0))},
e0:function(a){u.M.a(a)
P.e6(0,a)},
e6:function(a,b){var t=new P.bR()
t.a_(a,b)
return t},
e1:function(a,b){var t,s,r
b.a=1
try{a.T(new P.bG(b),new P.bH(b),u.P)}catch(r){t=H.au(r)
s=H.Z(r)
P.f3(new P.bI(b,t,s))}},
cN:function(a,b){var t,s,r
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
P.bT(d,d,b.b,o.a,o.b)}return}q.a=a0
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
P.bT(d,d,l.b,k.a,k.b)
return}g=$.i
if(g!==h)$.i=h
else g=d
b=b.c
if((b&15)===8)new P.bM(q,c,p).$0()
else if(j){if((b&1)!==0)new P.bL(q,k).$0()}else if((b&2)!==0)new P.bK(c,q).$0()
if(g!=null)$.i=g
b=q.c
if(r.b(b)){f=q.a.b
if(b.a>=4){e=s.a(f.c)
f.c=null
a0=f.q(e)
f.a=b.a
f.c=b.c
c.a=b
continue}else P.cN(b,f)
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
eA:function(a,b){var t=u.Q
if(t.b(a))return t.a(a)
t=u.v
if(t.b(a))return t.a(a)
throw H.e(P.cv(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
ey:function(){var t,s
for(t=$.X;t!=null;t=$.X){$.ar=null
s=t.b
$.X=s
if(s==null)$.aq=null
t.a.$0()}},
eE:function(){$.cl=!0
try{P.ey()}finally{$.ar=null
$.cl=!1
if($.X!=null)$.cr().$1(P.d5())}},
d3:function(a){var t=new P.aZ(a),s=$.aq
if(s==null){$.X=$.aq=t
if(!$.cl)$.cr().$1(P.d5())}else $.aq=s.b=t},
eD:function(a){var t,s,r,q=$.X
if(q==null){P.d3(a)
$.ar=$.aq
return}t=new P.aZ(a)
s=$.ar
if(s==null){t.b=q
$.X=$.ar=t}else{r=s.b
t.b=r
$.ar=s.b=t
if(r==null)$.aq=t}},
f3:function(a){var t=null,s=$.i
if(C.a===s){P.bV(t,t,C.a,a)
return}P.bV(t,t,s,u.M.a(s.M(a)))},
be:function(a,b){var t=b==null?P.dG(a):b
if(a==null)H.c5(new P.x(!1,null,"error","Must not be null"))
return new P.a1(a,t)},
dG:function(a){var t
if(u.C.b(a)){t=a.gA()
if(t!=null)return t}return C.r},
bT:function(a,b,c,d,e){P.eD(new P.bU(d,e))},
d1:function(a,b,c,d,e){var t,s=$.i
if(s===c)return d.$0()
$.i=c
t=s
try{s=d.$0()
return s}finally{$.i=t}},
d2:function(a,b,c,d,e,f,g){var t,s=$.i
if(s===c)return d.$1(e)
$.i=c
t=s
try{s=d.$1(e)
return s}finally{$.i=t}},
eB:function(a,b,c,d,e,f,g,h,i){var t,s=$.i
if(s===c)return d.$2(e,f)
$.i=c
t=s
try{s=d.$2(e,f)
return s}finally{$.i=t}},
bV:function(a,b,c,d){var t
u.M.a(d)
t=C.a!==c
if(t)d=!(!t||!1)?c.M(d):c.a6(d,u.H)
P.d3(d)},
bz:function bz(a){this.a=a},
by:function by(a,b,c){this.a=a
this.b=b
this.c=c},
bA:function bA(a){this.a=a},
bB:function bB(a){this.a=a},
bR:function bR(){},
bS:function bS(a,b){this.a=a
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
bF:function bF(a,b){this.a=a
this.b=b},
bJ:function bJ(a,b){this.a=a
this.b=b},
bG:function bG(a){this.a=a},
bH:function bH(a){this.a=a},
bI:function bI(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(a,b,c){this.a=a
this.b=b
this.c=c},
bN:function bN(a){this.a=a},
bL:function bL(a,b){this.a=a
this.b=b},
bK:function bK(a,b){this.a=a
this.b=b},
aZ:function aZ(a){this.a=a
this.b=null},
ac:function ac(){},
bs:function bs(a,b){this.a=a
this.b=b},
bt:function bt(a,b){this.a=a
this.b=b},
aS:function aS(){},
a1:function a1(a,b){this.a=a
this.b=b},
ao:function ao(){},
bU:function bU(a,b){this.a=a
this.b=b},
b3:function b3(){},
bP:function bP(a,b,c){this.a=a
this.b=b
this.c=c},
bO:function bO(a,b){this.a=a
this.b=b},
bQ:function bQ(a,b,c){this.a=a
this.b=b
this.c=c},
cD:function(a,b,c){var t,s
if(P.ew(a))return b+"..."+c
t=new P.bu(b)
C.i.t($.at,a)
try{s=t
s.a=P.dX(s.a,a,", ")}finally{if(0>=$.at.length)return H.c2($.at,-1)
$.at.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
ew:function(a){var t,s
for(t=$.at.length,s=0;s<t;++s)if(a===$.at[s])return!0
return!1},
O:function O(){},
eY:function(a){var t=H.dT(a,null)
if(t!=null)return t
throw H.e(new P.bk(a))},
dP:function(a){if(a instanceof H.M)return a.h(0)
return"Instance of '"+H.d(H.br(a))+"'"},
dX:function(a,b,c){var t=J.dC(b)
if(!t.v())return a
if(c.length===0){do a+=H.d(t.gu())
while(t.v())}else{a+=H.d(t.gu())
for(;t.v();)a=a+c+H.d(t.gu())}return a},
aC:function(a){if(typeof a=="number"||H.cZ(a)||null==a)return J.av(a)
if(typeof a=="string")return JSON.stringify(a)
return P.dP(a)},
bd:function(a){return new P.a0(a)},
dF:function(a){return new P.x(!1,null,null,a)},
cv:function(a,b,c){return new P.x(!0,a,b,c)},
dU:function(a,b){return new P.aP(null,null,!0,a,b,"Value not in range")},
dR:function(a,b,c,d,e){var t=H.b7(e==null?J.c6(b):e)
return new P.aE(t,!0,a,c,"Index out of range")},
bx:function(a){return new P.aX(a)},
cK:function(a){return new P.aV(a)},
cB:function(a){return new P.aA(a)},
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
bE:function bE(a){this.a=a},
bk:function bk(a){this.a=a},
j:function j(){},
h:function h(){},
b4:function b4(){},
bu:function bu(a){this.a=a},
b:function b(){}},W={
bC:function(a,b,c,d,e){var t=W.eJ(new W.bD(c),u.D),s=t!=null
if(s&&!0){u.o.a(t)
if(s)J.dB(a,b,t,!1)}return new W.b1(a,b,t,!1,e.i("b1<0>"))},
eJ:function(a,b){var t=$.i
if(t===C.a)return a
return t.a7(a,b)},
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
c8:function c8(a,b){this.a=a
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
bD:function bD(a){this.a=a},
b_:function b_(){}},Z={bg:function bg(){this.a=null},bm:function bm(a,b){this.a=a
this.b=b},bn:function bn(a){this.a=a},bo:function bo(a){this.a=a},bp:function bp(a){this.a=a}},M={bh:function bh(){this.a=null}},T={
H:function(a,b,c){var t=new Float32Array(3)
t[0]=a
t[1]=b
t[2]=c
return new T.C(t)},
C:function C(a){this.a=a}},K={
bf:function(a){var t=a.a
return"rgb("+C.d.h(C.b.n(t[0]))+","+C.d.h(C.b.n(t[1]))+","+C.d.h(C.b.n(t[2]))+")"},
cC:function(a,b,c){var t,s,r,q,p,o
if(b===0){t=c
s=t
r=s}else{q=c<0.5?c*(1+b):c+b-c*b
p=2*c-q
r=K.c9(p,q,a+0.3333333333333333)
s=K.c9(p,q,a)
t=K.c9(p,q,a-0.3333333333333333)}o=new T.C(new Float32Array(3))
o.W(r,s,t)
o.p(0,255)
return o},
c9:function(a,b,c){if(c<0)++c
else if(c>1)--c
if(c<0.16666666666666666)return a+(b-a)*6*c
else if(c<0.5)return b
else if(c<0.6666666666666666)return a+(b-a)*(0.6666666666666666-c)*6
else return a}},X={
cc:function(a){var t,s,r,q,p,o,n,m,l=new Float32Array(3),k=new T.C(l)
k.F(a)
k.p(0,0.00392156862745098)
t=new Float32Array(3)
s=new T.C(t)
r=l[0]
q=l[1]
p=l[2]
for(l=1-r,o=1-p,n=1-q,m=0;m<=2;++m)t[m]=$.dp().a[m]*l*o*n+$.dm().a[m]*r*o*n+$.dj().a[m]*l*p*n+$.dn().a[m]*r*p*n+$.dq().a[m]*l*o*q+$.dl().a[m]*r*o*q+$.dk().a[m]*l*p*q+$.di().a[m]*r*p*q
s.p(0,255)
t[0]=C.b.w(t[0])
t[1]=C.b.w(t[1])
t[2]=C.b.w(t[2])
return s}},F={
db:function(){var t=new M.bh(),s=new Z.bg()
s.a=new T.C(new Float32Array(3))
t.N(u.B.a(document.querySelector("#colorWheel")))
new Z.bm(t,s).a5()}}
var w=[C,H,J,P,W,Z,M,T,K,X,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ca.prototype={}
J.m.prototype={
h:function(a){return"Instance of '"+H.d(H.br(a))+"'"}}
J.aG.prototype={
h:function(a){return String(a)},
$ibW:1}
J.a9.prototype={
h:function(a){return"null"},
$ij:1}
J.G.prototype={
h:function(a){return String(a)}}
J.aO.prototype={}
J.ad.prototype={}
J.y.prototype={
h:function(a){var t=a[$.dh()]
if(t==null)return this.Z(a)
return"JavaScript function for "+H.d(J.av(t))},
$iS:1}
J.q.prototype={
t:function(a,b){H.cj(a).c.a(b)
if(!!a.fixed$length)H.c5(P.bx("add"))
a.push(b)},
h:function(a){return P.cD(a,"[","]")},
gO:function(a){return new J.ay(a,a.length,H.cj(a).i("ay<1>"))},
gk:function(a){return a.length},
$iaF:1}
J.bl.prototype={}
J.ay.prototype={
gu:function(){return this.d},
v:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(H.f4(r))
t=s.c
if(t>=q){s.sK(null)
return!1}s.sK(r[t]);++s.c
return!0},
sK:function(a){this.d=this.$ti.i("1?").a(a)}}
J.T.prototype={
a9:function(a){var t,s
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){t=a|0
return a===t?t:t-1}s=Math.floor(a)
if(isFinite(s))return s
throw H.e(P.bx(""+a+".floor()"))},
n:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(P.bx(""+a+".round()"))},
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
J.a8.prototype={$ibc:1}
J.a7.prototype={}
J.N.prototype={
j:function(a,b){if(typeof b!="string")throw H.e(P.cv(b,null,null))
return a+b},
h:function(a){return a},
gk:function(a){return a.length},
$iP:1}
H.aJ.prototype={
gu:function(){var t=this.d
return t},
v:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.e(P.cB(r))
t=s.c
if(t>=q){s.sG(null)
return!1}s.sG(r[t]);++s.c
return!0},
sG:function(a){this.d=this.$ti.i("1?").a(a)}}
H.a5.prototype={}
H.bv.prototype={
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
H.bq.prototype={
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
return"Closure '"+H.df(s==null?"unknown":s)+"'"},
$iS:1,
gai:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.aT.prototype={}
H.aR.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.df(t)+"'"}}
H.a2.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.br(t))+"'")}}
H.aQ.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.aY.prototype={
h:function(a){return"Assertion failed: "+P.aC(this.a)}}
H.bZ.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.c_.prototype={
$2:function(a,b){return this.a(a,b)},
$S:6}
H.c0.prototype={
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
m:function(a){return H.eg(v.typeUniverse,this,a)}}
H.b2.prototype={}
H.b0.prototype={
h:function(a){return this.a}}
H.al.prototype={}
P.bz.prototype={
$1:function(a){var t=this.a,s=t.a
t.a=null
s.$0()},
$S:3}
P.by.prototype={
$1:function(a){var t,s
this.a.a=u.M.a(a)
t=this.b
s=this.c
t.firstChild?t.removeChild(s):t.appendChild(s)},
$S:8}
P.bA.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bB.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bR.prototype={
a_:function(a,b){if(self.setTimeout!=null)self.setTimeout(H.b9(new P.bS(this,b),0),a)
else throw H.e(P.bx("`setTimeout()` not found."))}}
P.bS.prototype={
$0:function(){this.b.$0()},
$S:1}
P.ag.prototype={
ab:function(a){if((this.c&15)!==6)return!0
return this.b.b.E(u.m.a(this.d),a.a,u.y,u.K)},
aa:function(a){var t=this.e,s=u.z,r=u.K,q=this.$ti.i("2/"),p=this.b.b
if(u.Q.b(t))return q.a(p.ac(t,a.a,a.b,s,r,u.l))
else return q.a(p.E(u.v.a(t),a.a,s,r))}}
P.w.prototype={
T:function(a,b,c){var t,s,r,q=this.$ti
q.m(c).i("1/(2)").a(a)
t=$.i
if(t!==C.a){c.i("@<0/>").m(q.c).i("1(2)").a(a)
if(b!=null)b=P.eA(b,t)}s=new P.w($.i,c.i("w<0>"))
r=b==null?1:3
this.H(new P.ag(s,r,a,b,q.i("@<1>").m(c).i("ag<1,2>")))
return s},
ag:function(a,b){return this.T(a,null,b)},
H:function(a){var t,s=this,r=s.a
if(r<=1){a.a=u.F.a(s.c)
s.c=a}else{if(r===2){t=u.c.a(s.c)
r=t.a
if(r<4){t.H(a)
return}s.a=r
s.c=t.c}P.bV(null,null,s.b,u.M.a(new P.bF(s,a)))}},
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
P.bV(null,null,n.b,u.M.a(new P.bJ(m,n)))}},
D:function(){var t=u.F.a(this.c)
this.c=null
return this.q(t)},
q:function(a){var t,s,r
for(t=a,s=null;t!=null;s=t,t=r){r=t.a
t.a=s}return s},
I:function(a){var t,s=this,r=s.$ti
r.i("1/").a(a)
if(r.i("a6<1>").b(a))if(r.b(a))P.cN(a,s)
else P.e1(a,s)
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
P.bF.prototype={
$0:function(){P.ah(this.a,this.b)},
$S:0}
P.bJ.prototype={
$0:function(){P.ah(this.b,this.a.a)},
$S:0}
P.bG.prototype={
$1:function(a){var t=this.a
t.a=0
t.I(a)},
$S:3}
P.bH.prototype={
$2:function(a,b){this.a.J(a,u.l.a(b))},
$S:9}
P.bI.prototype={
$0:function(){this.a.J(this.b,this.c)},
$S:0}
P.bM.prototype={
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
r.c=m.ag(new P.bN(o),u.z)
r.b=!1}},
$S:1}
P.bN.prototype={
$1:function(a){return this.a},
$S:10}
P.bL.prototype={
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
P.bK.prototype={
$0:function(){var t,s,r,q,p,o,n,m,l=this
try{t=u.n.a(l.a.a.c)
q=l.b
if(H.eO(q.a.ab(t))&&q.a.e!=null){q.c=q.a.aa(t)
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
s=t.i("~(1)?").a(new P.bs(q,r))
u.Y.a(new P.bt(q,p))
W.bC(r.a,r.b,s,!1,t.c)
return p}}
P.bs.prototype={
$1:function(a){this.b.$ti.c.a(a);++this.a.a},
$S:function(){return this.b.$ti.i("j(1)")}}
P.bt.prototype={
$0:function(){this.b.I(this.a.a)},
$S:0}
P.aS.prototype={}
P.a1.prototype={
h:function(a){return H.d(this.a)},
$if:1,
gA:function(){return this.b}}
P.ao.prototype={$icL:1}
P.bU.prototype={
$0:function(){var t=H.e(this.a)
t.stack=J.av(this.b)
throw t},
$S:0}
P.b3.prototype={
ad:function(a){var t,s,r,q=null
u.M.a(a)
try{if(C.a===$.i){a.$0()
return}P.d1(q,q,this,a,u.H)}catch(r){t=H.au(r)
s=H.Z(r)
P.bT(q,q,this,t,u.l.a(s))}},
ae:function(a,b,c){var t,s,r,q=null
c.i("~(0)").a(a)
c.a(b)
try{if(C.a===$.i){a.$1(b)
return}P.d2(q,q,this,a,b,u.H,c)}catch(r){t=H.au(r)
s=H.Z(r)
P.bT(q,q,this,t,u.l.a(s))}},
a6:function(a,b){return new P.bP(this,b.i("0()").a(a),b)},
M:function(a){return new P.bO(this,u.M.a(a))},
a7:function(a,b){return new P.bQ(this,b.i("~(0)").a(a),b)},
S:function(a,b){b.i("0()").a(a)
if($.i===C.a)return a.$0()
return P.d1(null,null,this,a,b)},
E:function(a,b,c,d){c.i("@<0>").m(d).i("1(2)").a(a)
d.a(b)
if($.i===C.a)return a.$1(b)
return P.d2(null,null,this,a,b,c,d)},
ac:function(a,b,c,d,e,f){d.i("@<0>").m(e).m(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.i===C.a)return a.$2(b,c)
return P.eB(null,null,this,a,b,c,d,e,f)}}
P.bP.prototype={
$0:function(){return this.a.S(this.b,this.c)},
$S:function(){return this.c.i("0()")}}
P.bO.prototype={
$0:function(){return this.a.ad(this.b)},
$S:1}
P.bQ.prototype={
$1:function(a){var t=this.c
return this.a.ae(this.b,t.a(a),t)},
$S:function(){return this.c.i("~(0)")}}
P.O.prototype={
gO:function(a){return new H.aJ(a,a.length,H.a_(a).i("aJ<O.E>"))},
h:function(a){return P.cD(a,"[","]")}}
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
if(typeof s!=="number")return s.aj()
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
P.bE.prototype={
h:function(a){return"Exception: "+this.a}}
P.bk.prototype={
h:function(a){var t=this.a,s=t!=null&&""!==t?"FormatException: "+H.d(t):"FormatException"
return s}}
P.j.prototype={
h:function(a){return"null"}}
P.h.prototype={constructor:P.h,$ih:1,
h:function(a){return"Instance of '"+H.d(H.br(this))+"'"},
toString:function(){return this.h(this)}}
P.b4.prototype={
h:function(a){return""},
$iW:1}
P.bu.prototype={
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
sa8:function(a,b){a.fillStyle=b},
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
sah:function(a,b){a.title=b},
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
saf:function(a,b){a.textContent=b}}
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
W.c8.prototype={}
W.af.prototype={}
W.D.prototype={}
W.b1.prototype={}
W.bD.prototype={
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
C.u.sa8(b,K.bf(X.cc(K.cC(r/360,1,0.5))))
b.fill()}},
sa1:function(a){this.a=u.j.a(a)}}
Z.bm.prototype={
a5:function(){var t=document,s=J.ct(t.querySelector("#colorWheel")),r=s.$ti,q=r.i("~(1)?").a(new Z.bn(this))
u.Y.a(null)
W.bC(s.a,s.b,q,!1,r.c)
r=J.ct(t.querySelector("#resetButton"))
q=r.$ti
W.bC(r.a,r.b,q.i("~(1)?").a(new Z.bo(this)),!1,q.c)
t=J.dD(t.querySelector("#numberOfColorsInColorWheel"))
q=t.$ti
W.bC(t.a,t.b,q.i("~(1)?").a(new Z.bp(this)),!1,q.c)}}
Z.bn.prototype={
$1:function(a){var t,s,r,q,p,o,n,m,l,k,j,i="#resultColor"
u.X.a(a)
t=this.a
s=a.clientX
r=a.clientY
q=t.a.a
p=q.left
p.toString
p=C.b.n(p)
if(typeof s!=="number")return s.X()
o=q.width
o.toString
n=q.top
n.toString
n=C.b.n(n)
if(typeof r!=="number")return r.X()
q=q.height
q.toString
m=Math.atan2(r-n-q/2,s-p-o/2)*57.29577951308232
if(m<0)m+=360
l=K.cC(C.j.a9(m/$.az)*$.az/360,1,0.5)
t=t.b
t.a.t(0,l)
t=t.a
s=t.a
k=Math.max(s[0],Math.max(s[1],s[2]))
k=k>=255?255/k:1
j=new T.C(new Float32Array(3))
j.F(t)
j.p(0,k)
t=document
s=t.querySelector(i).style
r=K.bf(X.cc(j))
s.backgroundColor=r
J.cu(t.querySelector(i),"")
J.dE(t.querySelector(i),K.bf(X.cc(j)))},
$S:4}
Z.bo.prototype={
$1:function(a){var t,s,r,q="#resultColor"
u.X.a(a)
t=document
s=t.querySelector(q).style
r=K.bf($.dg())
s.backgroundColor=r
J.cu(t.querySelector(q),"Result")
this.a.b.a=new T.C(new Float32Array(3))},
$S:4}
Z.bp.prototype={
$1:function(a){var t=document,s=P.eY(u.e.a(t.querySelector("#numberOfColorsInColorWheel")).value)
if(typeof s!=="number")return H.d9(s)
$.az=C.j.w(360/s)
this.a.a.N(u.B.a(t.querySelector("#colorWheel")))},
$S:12}
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
t[0]=t[0]*b}};(function aliases(){var t=J.m.prototype
t.Y=t.h
t=J.G.prototype
t.Z=t.h})();(function installTearOffs(){var t=hunkHelpers._static_1,s=hunkHelpers._static_0
t(P,"eL","dZ",2)
t(P,"eM","e_",2)
t(P,"eN","e0",2)
s(P,"d5","eE",1)})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(P.h,null)
r(P.h,[H.ca,J.m,J.ay,H.aJ,H.a5,H.bv,P.f,H.bq,H.ak,H.M,H.u,H.b2,P.bR,P.ag,P.w,P.aZ,P.ac,P.aS,P.a1,P.ao,P.O,P.ab,P.bE,P.bk,P.j,P.b4,P.bu,W.bi,W.c8,Z.bg,M.bh,Z.bm,T.C])
r(J.m,[J.aG,J.a9,J.G,J.q,J.T,J.N,H.aL,W.l,W.R,W.b_,W.bj,W.a4,W.a])
r(J.G,[J.aO,J.ad,J.y])
s(J.bl,J.q)
r(J.T,[J.a8,J.a7])
r(P.f,[P.aU,H.aI,H.aW,H.aQ,P.a0,H.b0,P.aN,P.x,P.aX,P.aV,P.aA,P.aB])
s(H.aM,P.aU)
r(H.M,[H.aT,H.bZ,H.c_,H.c0,P.bz,P.by,P.bA,P.bB,P.bS,P.bF,P.bJ,P.bG,P.bH,P.bI,P.bM,P.bN,P.bL,P.bK,P.bs,P.bt,P.bU,P.bP,P.bO,P.bQ,W.bD,Z.bn,Z.bo,Z.bp])
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
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{bc:"int",o:"double",F:"num",P:"String",bW:"bool",j:"Null",fh:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:["j()","~()","~(~())","j(@)","j(r*)","@(@)","@(@,P)","@(P)","j(~())","j(h,W)","w<@>(@)","@(a)","j(a*)"],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.ef(v.typeUniverse,JSON.parse('{"y":"G","aO":"G","ad":"G","f8":"a","fe":"a","f7":"b","ff":"b","f9":"c","fi":"c","fC":"l","fj":"r","fb":"v","fg":"A","fd":"A","aG":{"bW":[]},"a9":{"j":[]},"G":{"S":[]},"q":{"aF":["1"]},"bl":{"q":["1"],"aF":["1"]},"T":{"o":[],"F":[]},"a8":{"o":[],"bc":[],"F":[]},"a7":{"o":[],"F":[]},"N":{"P":[]},"aM":{"f":[]},"aI":{"f":[]},"aW":{"f":[]},"ak":{"W":[]},"M":{"S":[]},"aT":{"S":[]},"aR":{"S":[]},"a2":{"S":[]},"aQ":{"f":[]},"aY":{"f":[]},"U":{"aH":["1"]},"aa":{"O":["o"],"aH":["o"],"aF":["o"],"a5":["o"]},"aK":{"O":["o"],"dQ":[],"aH":["o"],"aF":["o"],"a5":["o"],"O.E":"o"},"b0":{"f":[]},"al":{"f":[]},"w":{"a6":["1"]},"a1":{"f":[]},"ao":{"cL":[]},"b3":{"ao":[],"cL":[]},"o":{"F":[]},"bc":{"F":[]},"a0":{"f":[]},"aU":{"f":[]},"aN":{"f":[]},"x":{"f":[]},"aP":{"f":[]},"aE":{"f":[]},"aX":{"f":[]},"aV":{"f":[]},"aA":{"f":[]},"ab":{"f":[]},"aB":{"f":[]},"b4":{"W":[]},"c":{"p":[],"l":[]},"aw":{"p":[],"l":[]},"ax":{"p":[],"l":[]},"L":{"p":[],"l":[]},"a4":{"cd":["F"]},"p":{"l":[]},"aD":{"p":[],"l":[]},"r":{"a":[]},"A":{"l":[]},"V":{"p":[],"l":[]},"v":{"a":[]},"ae":{"cd":["F"]},"af":{"ac":["1"]},"D":{"af":["1"],"ac":["1"]},"b":{"p":[],"l":[]}}'))
H.ee(v.typeUniverse,JSON.parse('{"U":1,"aS":1}'))
0
var u=(function rtii(){var t=H.d6
return{n:t("a1"),C:t("f"),D:t("a"),Z:t("S"),d:t("a6<@>"),s:t("q<P>"),b:t("q<@>"),T:t("a9"),g:t("y"),p:t("aH<@>"),P:t("j"),K:t("h"),l:t("W"),N:t("P"),E:t("ad"),L:t("D<a*>"),G:t("D<r*>"),c:t("w<@>"),a:t("w<bc>"),y:t("bW"),m:t("bW(h)"),i:t("o"),z:t("@"),W:t("@()"),v:t("@(h)"),Q:t("@(h,W)"),S:t("bc"),B:t("L*"),t:t("R*"),X:t("r*"),A:t("0&*"),_:t("h*"),j:t("cd<F>*"),e:t("V*"),R:t("a6<j>?"),O:t("h?"),F:t("ag<@,@>?"),o:t("@(a)?"),Y:t("~()?"),q:t("F"),H:t("~"),M:t("~()")}})();(function constants(){C.t=W.L.prototype
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
C.r=new P.b4()})();(function staticFields(){$.cO=null
$.z=0
$.cy=null
$.cx=null
$.d7=null
$.d4=null
$.dd=null
$.bX=null
$.c1=null
$.co=null
$.X=null
$.aq=null
$.ar=null
$.cl=!1
$.i=C.a
$.at=H.cq([],H.d6("q<h>"))
$.az=60})();(function lazyInitializers(){var t=hunkHelpers.lazy,s=hunkHelpers.lazyOld
t($,"fc","dh",function(){return H.eU("_$dart_dartClosure")})
t($,"fs","dr",function(){return H.B(H.bw({
toString:function(){return"$receiver$"}}))})
t($,"ft","ds",function(){return H.B(H.bw({$method$:null,
toString:function(){return"$receiver$"}}))})
t($,"fu","dt",function(){return H.B(H.bw(null))})
t($,"fv","du",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fy","dx",function(){return H.B(H.bw(void 0))})
t($,"fz","dy",function(){return H.B(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}())})
t($,"fx","dw",function(){return H.B(H.cJ(null))})
t($,"fw","dv",function(){return H.B(function(){try{null.$method$}catch(r){return r.message}}())})
t($,"fB","dA",function(){return H.B(H.cJ(void 0))})
t($,"fA","dz",function(){return H.B(function(){try{(void 0).$method$}catch(r){return r.message}}())})
t($,"fD","cr",function(){return P.dY()})
s($,"fa","dg",function(){return T.H(255,255,255)})
s($,"fq","dp",function(){return T.H(1,1,1)})
s($,"fo","dm",function(){return T.H(1,0,0)})
s($,"fr","dq",function(){return T.H(1,1,0)})
s($,"fl","dj",function(){return T.H(0.163,0.373,0.6)})
s($,"fp","dn",function(){return T.H(0.5,0,0.5)})
s($,"fm","dk",function(){return T.H(0,0.66,0.2)})
s($,"fn","dl",function(){return T.H(1,0.5,0)})
s($,"fk","di",function(){return T.H(0.2,0.094,0)})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
if(typeof dartMainRunner==="function")dartMainRunner(F.db,[])
else F.db([])})})()
//# sourceMappingURL=main.dart.js.map
