let hours = Math.floor((Math.random() * 8) + 1);
console.log(hours);
let result=function calculatewage(hours){
    return hours*20;
}
console.log(result(hours));