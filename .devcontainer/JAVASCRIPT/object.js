
//OBJECT CONSTRUCTOR FUNCTION

function person(name, age) {
    this.name = name;
    this.age = age;
  }
  let obj1 = new person("midhula", 23);
  let obj2 = new person("pranav", 23);
  console.log(obj1);
  console.log(obj2);


  //OBJECT CONSTRUCTOR CLASS


  class personDetails{
    constructor(name,age){
        this.name=name
        this.age = age
    }
    details(){
        return `my name is ${this.name}`;
    }
  }

  const obj3 = new personDetails("midhula",23)
  console.log(obj3);
  console.log(obj3.details());
  
  
  //Object.create()

  let a = {
    name:"nila",
    age:5
  }

  let b = Object.create(a)
    b.address="bangalore"
    console.log(b);
    console.log(b.name);
  
  

  //factor function

  function personDetail(name,age){
            return{
                name,
                age
            }
  }

  let ramesh = personDetail("ramesh",30)
  let suresh = personDetail("suresh",29)
  console.log(ramesh);
  


//PASS BY VALUE

  let value1 = 2;

  function add(value2){
    value2 = value2*value2;
    return value2;
  }

  console.log("before",value1);
  add(value1);
  console.log("after", value1);
  
  
//PASS BY REFERENCE

  let value3= {
    name:"tony"
  };

  function value(value2){
    value2.name="stark"
    return value2;
  }

  console.log("before",value3);
 value(value3);
  console.log("after", value3);
  