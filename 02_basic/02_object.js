// Singleton ----constructor method ke through singleton bnta h
// syntx---- Object.create;


 
 
 
 // Object literals


 const mysym=Symbol("key1")

 const JsUser = { 
    name:"Nilu",
    "full name":"Nilu kumari",
    age:22,
   [ mysym]:"mykey1",
    location:"Gopalganj",
    email:"kumarinilu019@gmail.com",
    islogedIn:false
 };

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);

//  console.log(JsUser["full name"]);
console.log(mysym);




