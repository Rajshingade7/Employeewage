let name={
    firstname: "raj",
    lastname: "Shingade",
    
}

let printfulname =function(hometown,state){//anonymous function
    console.log(this.firstname+ " "+ this.lastname);
    console.log(hometown);
    console.log(state);
}
printfulname.call(name);

let name2={
    firstname:"sachine",
    lastname:"TEndulkar"
}

///HEre in this way we are doing function borrowing
printfulname.call(name2,["sambhajinagar","maharashtra"]);//call method is used to borrow the function from one object to another object
// call method can take both list as well as seperate arguments
printfulname.apply(name2,["mumbai","maha"]);

//Here in this case of call and apply method is we can pass arguments saperately in call method but in apply method we pass only list(array) only

//bind method
let printname=printfulname.bind(name2,["mumbai","maha"]);
printname();
// the only difference between bind and apply method is that in bind method we can store the function in a variable and then we can call that function

//means here we are not directely calling the method we are just storing the copy of that object in that and method and called it later.

//...Thats all the three difference between this methods