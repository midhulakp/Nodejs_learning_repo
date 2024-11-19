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
  