// Write a JavaScript program to check two
// numbers and return true if one of the number
// is 100 or if the sum of the two numbers is
// 100

const fun=(a,b)=>{
    if(a===100 ||b ===100|| (a+b)===100){
        return true;
    }
    else{
        return false;
    }
}
console.log(fun(10,0));
console.log(fun(50,50));

console.log(fun(100,100));


//write the js program to get the extension of filename.
const getfileextension=(str)=>{
    return str.slice(str.lastIndexOf('.'));
}
console.log(getfileextension('index.html'));
