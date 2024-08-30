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
const obj5 = Object.assign({},obj1,obj2)
console.log(obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// The assign() is used to join two elements of different objects in a single object.



     