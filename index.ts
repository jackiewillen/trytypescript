function logProperty(target: any, key: string) {
 
    console.log(target);
    console.log(key);
  }
  
  class Person { 
    @logProperty
    public name: string;
    @logProperty
    public surname: string;
  
    constructor(name : string, surname : string) { 
      this.name = name;
      this.surname = surname;
    }
  }
  
  var p = new Person("remo", "Jansen");
  p.surname = "Remo";
//   var n = p.surname;