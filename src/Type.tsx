

// let name : string ;

// let age : number ;

// if you want the agee to have both string and number 
// let agee : number  | string;
// agee = 50

let isStudent : boolean // true or false in its assignment 

let hobbies : string[] // array of string which can be more than 1 

let str : [string]  // tuple with exactly one string

let hobbiess : Number[] // array of Number which can be more than 1

let hobb : [number]  // tuple with exactly one number 

let role : [number, string] // Tuple which must be one number and one string in the the array 
// role = [1, "admin"]; 


// object 
// In each key in the object you defined in the type, you have to assign value to it in order not to throw an error 

type Person = {
  name : string,
  age ? : number , // making the age an optional
}

let person : Person = {
  name : "lawal",
  age : 50
};

// array of lot of people 
let lotsOfPeople : Person[]


// function
// let printName : (name : string) => void ;

function printName (name : string) {
  console.log(name)
}

printName("lawal")

const Type = () =>{

    return(
        <div>

        </div>
    )
}

export default Type