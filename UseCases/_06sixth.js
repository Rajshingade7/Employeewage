function sixth(hours,days){
    if(hours>100){
        console.log(hours*20);
    }
    else if(days){
        console.log(days*8*20);
    }
    else{
       console.log("you are not getting wage");
    }
}
sixth(100,20);