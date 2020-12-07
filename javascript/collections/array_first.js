//array
//to store more than one object
//we can store any type of objects
//there is no length limit

var names = ["java","javascript","python","c#","dart"]

//index
console.log(names[1]);

//itrate

for(let items of names){
    console.log(items);
}


//adding a new object to array

names.push("perl")
console.log(names)


//removing an item from array

names.pop();
console.log(names);
