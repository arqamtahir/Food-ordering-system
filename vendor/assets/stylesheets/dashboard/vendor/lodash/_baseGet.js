var castPath=require("./_castPath"),toKey=require("./_toKey");function baseGet(e,t){for(var a=0,r=(t=castPath(t,e)).length;null!=e&&a<r;)e=e[toKey(t[a++])];return a&&a==r?e:void 0}module.exports=baseGet;