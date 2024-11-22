

let obj ={
    book:"notebook",
    author:"Nicholas sparks",
    releaseYear:1980,
}

let copyObj = obj;

copyObj.book ="Note Book"
console.log(obj);


//Shallow Copy
//----->protection only for primitve types,for non primitive types like arrays object the values will change

let shallowCopy = {...obj}
shallowCopy.language="kannada"
shallowCopy.rating="4 star"
shallowCopy.releaseYear=2000;
console.log(shallowCopy);
console.log(obj);



let obj2={
    book:"notebook",
    author:"Nicholas sparks",
    releaseYear:1980,
    language:["english","chinese"],
    variations:{
        hardCover:true,
        kindle:true
    }
}
//shallow copy 

// let copy={...obj2}

// copy.language[0]="kannada";
// copy.variations.hardCover=false;
// console.log(obj2);


//Deep copy

let deepCopy = JSON.parse(JSON.stringify(obj2))

deepCopy.language[0]="malayalam"
deepCopy.variations.hardCover=false
console.log(deepCopy);
console.log(obj2);



let deepCopy2 = structuredClone(obj2)

deepCopy2.language[0]="malayalam"
deepCopy2.variations.hardCover=false
console.log(deepCopy2);
console.log(obj2);

