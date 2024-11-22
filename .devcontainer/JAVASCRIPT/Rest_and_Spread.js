//REST operator
//used only in functions,it binds the rest of the properties in an array form

function mydetails(name, age, ...restOfDetails) {
    console.log(name);
    console.log(age);
    console.log(restOfDetails);
  
  }   
  
  mydetails("john",34,"library","dogs","LA")
  

  //Spread operator
  //unpacking the values
  
  let a = [1, 2, 3, 4, 5]
  
  function adding(a, b, c, d, e) {
    return a + b + c + d + e;
  }
  
  console.log(adding(...a));
  
  
  let object = {
    name: "john",
    age: 23,
    place:"europe"
  }
  
  let anotherObj ={...object,job:"engineer",language:["english","spanish"]}

  console.log(anotherObj);
  