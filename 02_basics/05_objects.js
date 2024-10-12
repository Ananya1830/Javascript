// const appUser = new Object() // This is singleton object
const appUser = {} // This is non singleton object
// Both output will be same

appUser.id = "sam123"
appUser.name = "sam"
appUser.isLoggedIn = false

console.log(appUser); // {}


// Object inside object
// We can add an object in the object and it can be as nested as it can

const regUser = {
        email:"abc@gmail.com",
        fullname:{
            userfullname:{
                firstname: "Ananya",
                lastname: "Mohapatra"
            }
        }
     }
    
     console.log(regUser.fullname);
     
// We can join the two different objects into one object

 const obj1 = {1: "a", 2: "b"}
 const obj2 = {3: "a", 4: "b"}

const obj3 = {obj1,obj2}
console.log(obj3); //  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// Here are below are some different and unexpected result like same array wali problem object ke andar object


//There are some ways to do this
const obj4 = Object.assign(obj1,obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// And the appropriate way is
const obj5 = Object.assign({},obj1,obj2) // we gives a empty {} it assures that object will combine in one {}
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// The assign() is used to join two elements of different objects in a single object.

const obj6 = {...obj1 , ...obj2}
console.log(obj6); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// It first spread the object and then combines it


const users = [
    {
        id: 1,
        email: "a1@gmail.com"
    } ,
    {
        id: 2,
        email: "a2@gmail.com"
    },
    {
        id: 3,
        email: "a3@gmail.com"
    }
]
console.log(users);
console.log(users[1].email); // a2@gmail.com  (We can acees those value like this)

const newUser = {
    name : "Ananya" ,
    age : 20 ,
    gender : "female" ,
    email : "ananya@gmail.com"
}

console.log(newUser);

console.log(Object.keys(newUser)); // [ 'name', 'age', 'gender', 'email' ]  (datatype is array)  (Access keys)

console.log(Object.values(newUser)); // [ 'Ananya', 20, 'female', 'ananya@gmail.com' ]  (Access values)


/* There is a another method where we can keep the keys with their values in an individual array in the 
whole array */

console.log(Object.entries(newUser)); 
/* [
  [ 'name', 'Ananya' ],
  [ 'age', 20 ],
  [ 'gender', 'female' ],
  [ 'email', 'ananya@gmail.com' ]
] */


/* There is anothere syntax where we can check whether a particular property or key is present in the object 
or not and the result comes in boolean. */

console.log(newUser.hasOwnProperty("email")); // true
console.log(newUser.hasOwnProperty("isLoggedIn")); // false