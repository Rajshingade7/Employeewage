let x=Math.floor(Math.random()*10+1);
    function check(x){
        if(x%2==0){
            console.log(x)
            console.log("Employee is present")
        }
        else{
            console.log("Employee is absent")
        }
    }
check(x);