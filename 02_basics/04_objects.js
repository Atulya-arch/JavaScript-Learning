//const tensi = new Object() OR,    //  -->Singleton object
// const tensi = {}                    // -->Non-Singleton Object
// console.log(tensi);

// tensi.id = "123abc"
// tensi.name = "Sunny"
// tensi.isLoggedIn = false

// const regularUser = {
//     email: "abcuhs544@gmail.com",
//     full_name: {
//         userfullName: {
//             first_name: "Anamika",
//             last_name: "Mathur"
//         }
//     }
// }

// console.log(regularUser.full_name.userfullName.first_name);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}
// const obj3 = { obj1, obj2 }
// console.log(obj3);

// const obj4 = Object.assign( {}, obj1, obj2 )
// console.log(obj4);

// const obj5 = {...obj1, ...obj2}
// console.log(obj5);

// const user = [
//     {
//         id: "12456",
//         name: "Riya",
//         email: "abc@cbs.com"
//     },

//     {
//         id: "12454",
//         name: "Rahul",
//         email: "cde@cbs.com"
//     },

//     {
//         id: "12458",
//         name: "Reshma",
//         email: "fgh@cbs.com"
//     },
// ]

// user[1].email
// console.log(tensi);
// console.log(Object.keys(tensi)); //For printing the keys 
// console.log(Object.values(tensi)); //For printing the values

// console.log(Object.entries(tensi));
// console.log(tensi.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "Javascript",
    price: "100",
    courseInstructor: "Anamika"
}

//course.courseInstructor

const {courseInstructor} = course;
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);


