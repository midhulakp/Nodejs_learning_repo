// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then((res)=>res.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
// .finally(()=>console.log("promise handles"))



async function resovePromise() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        console.log(res);

        let data = await res.json()
        console.log(data);
        
        
    } catch (error) {
        console.log(error.message);
        
    }finally{
        console.log("promise resolved");
        
    }
    
}

resovePromise() 
