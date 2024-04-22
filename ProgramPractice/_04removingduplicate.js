const arr=[1,2,33,33,4,5,5];
const arr2=[];
function removeduplicate(arr){
    for(let i=0;i<arr.length;i++){
       if(arr2.indexOf(arr[i])===-1){//Here each time it is checking values from the array and if value is not found then and then it will be adding to the array,
        // so if arr[i] is found again then it will be duplicate value and if not found it will return -1 so then and then we are adding value to the new arary
        
        arr2.push(arr[i]);
       }
        
    }
    console.log(arr2)
}
removeduplicate(arr);