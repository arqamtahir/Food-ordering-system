function arrayFilter(r,a){for(var e=-1,l=null==r?0:r.length,t=0,n=[];++e<l;){var o=r[e];a(o,e,r)&&(n[t++]=o)}return n}module.exports=arrayFilter;