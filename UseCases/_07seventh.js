class refactor{
        
    constructor(hours){
        this.hours=hours;
    }
    wage(){
        return this.hours*20;
    }
}
let r = new refactor(39);
console.log(r.wage());