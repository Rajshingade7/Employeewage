const arr=[1,2,33,33,4,5,5];
const arr2=[];
function removeduplicate(arr){
    for(let i=0;i<arr.length;i++){
       if(arr2.indexOf(arr[i])===-1){
        arr2.push(arr[i]);
       }
        
    }
    console.log(arr2)
}
removeduplicate(arr);