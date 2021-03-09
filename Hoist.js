// Rewrite the code the way it would be seen by the interpretor then predict the output.

// 1.
console.log(hello);                                   
var hello = 'world';  
//----
// -
// // var hello;
// // console.log(hello);
// // hello = 'world';
// Output - Undefined


// 2.
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//-----
// -
// // var needle;
// // function test(){
// //   var needle = 'magnet';
// //   console.log(needle);
// // }
// // needle = 'haystack';
// // test();
// Output - magnet


// 3.
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//------
// -
// // var brendan;
// // function print(){
// //   brendan = 'only okay';
// //   console.log(brendan);
// // }
// // brendan = 'super cool';
// // console.log(brendan);
// Output - super cool


// 4.
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//-----
// -
// // var food;
// // function eat(){
// //   food = 'half-chicken';
// //   console.log(food);
// //   var food = 'gone';
// // }
// // food = 'chicken';
// // console.log(food);
// // eat();
// Output - chicken, half-chicken


// 5.
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//------
// -
// // var mean = function() {
// //   food = "chicken";
// //   console.log(food);
// //   var food = "fish";
// //   console.log(food);
// // }
// // mean();
// // console.log(food);
// // console.log(food);
// Output - Throws an error for an undeclared variable.
// Incorrect. It threw a syntax error for the way the function is being declared


// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//------
// -
// // var genre;
// // function rewind() {
// //   genre = "rock";
// //   console.log(genre);
// //   var genre = "r&b";
// //   console.log(genre);
// // }
// // console.log(genre);
// // genre = 'disco';
// // rewind();
// // console.log(genre);
/** Output - 
  *1. Undefined
  *2. rock
  *3. r&b
  *4. disco
*/


// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//-----
// -
// // var dojo;
// // function learn() {
// //   dojo = "seattle";
// //   console.log(dojo);
// //   var dojo = "burbank";
// //   console.log(dojo);
// // }
// // dojo = "san jose";
// // console.log(dojo);
// // learn();
// // console.log(dojo);
/** Output - 
  *1. san jose
  *2. seattle
  *3. burbank
  *4. san jose
*/


// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//------
// -
// // function makeDojo(name, students){
// //   const dojo = {};
// //   dojo.name = name;
// //   dojo.students = students;
// //   if(dojo.students > 50){
// //       dojo.hiring = true;
// //   }
// //   else if(dojo.students <= 0){
// //       dojo = "closed for now";
// //   }
// //   return dojo;
// // }
// // console.log(makeDojo("Chicago", 65));
// // console.log(makeDojo("Berkeley", 0));
/** Predicted Output - 
 *1. {name: 'Chicago', students: 65, hiring = true}
 *2. closed for now
*/
/** Actual Output - 
 *1. {name: 'Chicago', students: 65, hiring = true}.
 *2. Throws an error for redeclaring a constant variable type.
*/

