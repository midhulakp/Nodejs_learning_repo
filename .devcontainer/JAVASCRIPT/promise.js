function myPromise(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let a = 1+1;
            if(a==2){
                resolve("promise resolved")
            }
            else{
                reject("promise rejected")
            }

        },2000)

    })
}

//resolving promise
//es6

myPromise()
.then((data)=>{console.log(data);})
.catch((err)=>{console.log(err);})
.finally(_=>console.log("promise handled"))

//es8 async and await
//syntatic sugar for .then() .catch()
async function resolvePromise() {
    try {
      let res = await myPromise();
      console.log(res);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("promise handled");
    }
  }
  
  resolvePromise();
  


  //Promise ------> Object

  //Multiple Promises

  const promise1 = Promise.reject("rejected");
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

async function resolvePromises() {
  try {
    // let res1 = await Promise.all([promise1, promise2, promise3]);   // Promise.all -----> Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
    // console.log(res1);
    // let res2 = await Promise.allSettled([promise1, promise2, promise3]);  //Promise.allSettled ------->Fulfills when all promises settle.   for rejected promise it give reason and for fullfilled promise it gives the values
    // console.log(res2);
    // let res3 = await Promise.any([promise1, promise2, promise3]);  //Promise.any ------>Fulfills when any of the promises fulfills; rejects when all of the promises reject.
    // console.log(res3);
    let res4 = await Promise.race([promise2, promise1, promise3]);  //Promise.race ---------->Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.
    console.log(res4);
  } catch (error) {}
}

resolvePromises()                                                                                                                         