let arr=[-2,4,5,-3,5];
function sumofpositiveandnegative(arr){
    let positivesum=0;
    let negativesum=0;
    const arrylength=arr.length;
    for(let i=0;i<arrylength;i++){
        if(arr[i]>0){
            positivesum=positivesum+arr[i];

        }
        else{
            negativesum=negativesum+arr[i];
        }
    }
    console.log(positivesum);
    console.log(negativesum);
}
sumofpositiveandnegative(arr);