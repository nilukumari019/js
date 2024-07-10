const user={
    email:"abc@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Nilu",
            lastname:"kumari"
        }
    }
}
// console.log(user.fullname);
// console.log(user.fullname.userfullname);
// console.log(user.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}

// const obj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
console.log(obj3)
