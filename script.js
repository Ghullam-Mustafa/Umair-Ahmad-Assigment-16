const users = [
    {name:"Ghullam Mustafa", city:"Faisalabad", age:19, email:"ghullammustafa@gmail.com", status : "active",  id: "123"},
    {name:"Ghullam Murtaza", city:"Faisalabad", age:17, email:"ghullammurtaza@gmail.com", status : "inactive",  id: "1234"},
    {name:"Ghullam Hussain", city:"Faisalabad", age:14, email:"ghullamhussain@gmail.com", status : "active",  id: "12345"},
    {name:"Ghullam Mustafa", city:"Faisalabad", age:15, email:"ghullammustafa1@gmail.com", status : "active",  id: "123456"},
    {name:"Ghullam Mujtaba", city:"Faisalabad", age:14, email:"ghullammujtaba@gmail.com", status : "active",  id: "1234567"},
    {name:"Habib", city:"Faisalabad", age:17, email:"habib@gmail.com", status : "inactive",  id: "12345678"},
    {name:"Haseeb", city:"Faisalabad", age:16, email:"haseeb@gmail.com", status : "active",  id: "123456789"},
    {name:"Muneeb", city:"Faisalabad", age:15, email:"muneeb@gmail.com", status : "inactive",  id: "1234567890"},
    {name:"Muneeb", city:"Faisalabad", age:15, email:"muneeb@gmail.com", status : "processing",  id: "1234567890"}
]


// ============================== mapmethod  =============================      

const mapMethod = () => {
  let newUsers =  users.map( (user , index) => {
        return user.age * 2
    })
    console.log(newUsers);
}

// ===============================    filter method ============================

const filterMethod = () => {
    let filteredUsers =  users.filter((user,index)=>{
        return user.age <= 18
    })

    console.log(filteredUsers);
}

// ================================    find Filter ===============================



const findMethod = () => {
    let email = document.getElementById("email").value
if (!email) {
    alert("Entered your email")
    return 
}

    let user = users.find((user,index) => {
        return user.email === email
    })
        console.log(user);
    if (user) {
        alert("you are added in this foam")
    }
    
    
    return
}

// for (let i = 0; i < users.length; i++) {

//     console.log(users[i]);
// }

// for ( let user of users) {
//     // console.log(user.id);`
//         for ( let property in user)
//         console.log(property + "=>"+ user[property]);
// }

// function sayHellow(){return " Hellow Mustafa"
// }

// ==================  arrow function =================

const sayHellow = name => " Hellow " + name

console.log(sayHellow("Mustafa"));



// let singleUser = users[0];

// for( let property in singleUser){
//     // console.log(key);
//     console.log(singleUser[property]);
// }