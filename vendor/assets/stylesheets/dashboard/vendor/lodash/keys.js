var arrayLikeKeys=require("./_arrayLikeKeys"),baseKeys=require("./_baseKeys"),isArrayLike=require("./isArrayLike");function keys(e){return isArrayLike(e)?arrayLikeKeys(e):baseKeys(e)}module.exports=keys;