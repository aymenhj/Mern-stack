
                                                                // {---------Problem1-------------}

// -----------------------------------------------------------------------------------------

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar,lastItem ] = cars
//Expected Output:
//'Tesla'
//'Mercedes'
console.log(randomCar)
console.log(otherRandomCar,lastItem)
// -----------------------------------------------------------------------------------------
// Actual Output:
// Tesla
//Mercedes
//------------------Why did the code produce that output? If applicable, how would you get the index value that did not output?
//the code produce that output because in the first line we had destructuring the [randomCar] no matter waht was the name of that variable inside the Square Brackets 
//  that means that variable is refer to the index 0 so after we had console.loged that (randomCar) we will have and only have the first value in the array("Tesla")
//  in the second line we had destructuring the [,otherRandomCar] that's means bring the second item from the table cuz that comma said ignore the first index 
// and bring the second value in our case ("Mercedes").
//we can bring the index value that did not output by writing a comma after the second index and write a new variable inside the destructurnig array
//  [,otherRandomCar,lastItem] and console.log it console.log(otherRandomCar,lastItem)---------------------------------------------------------------------------

                                                                // {---------Problem1-------------}  

                                                                // {---------Problem2-------------} 
// -----------------------------------------------------------------------------------------
                                                                                                
const employee = {
    employeeName: 'Elon',
    age: 47,
    company: 'Tesla'
}
const{employeeName: otherName } = employee;
//output predict
// //Elon employeeName indifind 
console.log(otherName);
console.log(employeeName);
// -----------------------------------------------------------------------------------------

// Actual Output:Elon
//employeeName is not defined
// ------------------Why did the code produce that output? If applicable, what would you need to do to solve any potential problems?
//the code produce that because we made a destructering of the proprety employeeName and after that we change the name 
// from empoloyeeName to otherName by wroting the two point{empoyeeName:otherName} and after that when we console.log it the (otherName) we had Elon as output
//i think we can solve that not define too simply we have to delete the second console.log because we alredy change the name and we console.log it or if we want 
//to console.log it then we have to destruct the employeeName  const{employeeName}=employee; and then console.log it and we're done the problem solved!---------------------

                                                              // {---------Problem2-------------}

                                                             // {---------Problem3-------------}
// -----------------------------------------------------------------------------------------

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
}
const password = '12345';
const { password: hashedPassword } = person;  
// //Predict the output
// //12345
// //not define
console.log(password);
console.log(hashedPassword);
// -----------------------------------------------------------------------------------------
// Actual Output:
// 12345
//undefined
//-------------------------------Why did the code produce that output? If applicable, how would you alter this code without changing either console.log?
//the code produce that output because in the first console.log we have no problem we had define a variable named pasword="12345" in it's scope,
//in the second console.log we was calling an variable that was define but has no value so that why we got (undifind) out put,we can alter this code 
//by define the password inside the person object and give her a value and then we can change her name after and console.log it easily----------------------------------------------
                                                             // {---------Problem3-------------}
                                                            
                                                             // {---------Problem4-------------}
// -----------------------------------------------------------------------------------------
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
const[,,,,fourth]=numbers
//predict value
//false
//true
console.log(first === second);
console.log(first === third);
console.log(fourth);
// -----------------------------------------------------------------------------------------

// Actual Output:
//false
//true
//-----------------------------------------Why did the code produce that output? Declare a new variable for the value at the 4th index of the array and console.log it.
//the code produce that code output cause in the first console.log he picked the first and which in our case (2) and campare her value and type with the second which in 
//our case (5) they are the same type but not the same value so we had a false as a return in the second console.log we had compare one motre time the fisrt(2)with 
//the third(2) so we had the same value the same type and that's why we had a true as an output.-----------------------------------------------------------------------
                                                                       // {---------Problem4-------------}
                                                                       // {---------Problem5-------------}
// -----------------------------------------------------------------------------------------
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
const [,,,,,lastValue]=secondKey;
//value
//[1,5,1,8,3,3]
//undifind
//undifind
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
console.log(lastValue);
// -----------------------------------------------------------------------------------------
// Actual Output:
//value
// [1,5,1,8,3,3]
//1
//5
//--------------------------------------------Why did the code produce that output? Console.log the last value in the secondKey property's array.
//the code produce that output because in the forst clg we just destruct the value of the proprety key ("value") then we had destruct the secondkey proprety from
//the object and in our case it's an arry([1, 5, 1, 8, 3, 3]) now we have an array in the secondKey standalone variable so we can deal with it like any array 
//then we clg it the index0 wish in our case (1) and then destruct a new value from that array the second index so the index1 and after we 
// console.loge it we had the value 5-----------------------------------------------------------------------------------------------------------------------
                                                                        // {---------Problem5-------------}
                                                                        // {---------Problem6-------------}  
// -----------------------------------------------------------------------------------------
var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (var index = 0; index < names.length; index++) {
      var name = names[index];
      console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
  }
  actuallyPrintingNames();
}
printNames(beatles);
// -----------------------------------------------------------------------------------------
//--------------------------------------------------First, how many scopes does the following code block contain? Define each scope and guess what the output will be.
//we have like four scope the fisrt scope is the global scope where we had the array defined then we have the printNmaes functions scope and then we have the 
// actullyprintingNames scope and then we have the scope inside the the for loop so 4 scopes
//the prdict out is 
// paul was found at the index0
//George was found at the index1
//Jhon was found at the index 2
//Ring was found at the index3  
//name and index after loop is Ringo :4-------------------------------------------------------------------------------------------------------------------------
                                                                          // {---------Problem6-------------} 
                                                                          // {---------Problem7-------------} 
// -----------------------------------------------------------------------------------------
 function actuallyPrintingNames() {
  for (let index = 0; index < names.length; index++) {
    let name = names[index];
    console.log(name + ' was found at index ' + index);
  }
  console.log('name and index after loop is ' + name + ':' + index);
}     
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------Why did the code produce that output?
//the code produce that output because we used let instead a var and as we know the let is a block scope so we can only see the first console.log we can not see 
// the second because we used let so after the for loop scope we can't acces to the name or the index!----------------------------------------------------------
                                                                           // {---------Problem7-------------} 
                                                                           // {---------Problem8-------------}
//-----------------------------------------------------------------------------------------
const beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
  function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
      const name = names[index];
      console.log(name + ' was found at index ' + index);
    }
  }
  actuallyPrintingNames();
}
printNames(beatles);
//-----------------------------------------------------------------------------------------
//-------------------------------------------------Why did the code produce that output? Explain the output, including any possible errors and why they occurred. 
// ------------------------------------------------If there are no errors, explain the justification for each keyword used to declare variables.
//the code produce that output because we had invoke the printNames which have as a parameter an array (beatles) inside that function we invoke another function 
// that have a for loop and inside that loop we have a  console.log  that for loop will print each name and each index until our condition still not finish.
//in this case we don't have like any problom or errors because we used let to dclare our variables and our console.log is inside the scope 
//var is a function scoped so we can declare the variable inside the for loop scope but can still get the variable out of it that does not wor with the let and const 
//because the let and the const are to block-scoped and we can but there is a diffrince between the const and let even when they are both block-scoped we can reuse 
// the let but not the const so when we use the const in variable declaration we can't change it's value but we have a specific way with objects and aary we can use to 
// change values but not the object or array itself---------------------------------------------------------------------------------------------------------------------       
                                                                             // {---------Problem8-------------}
                                                                             // {---------Problem9-------------}
//---------------------------------------------------------------------------
const planet = {
	name:"Jupiter",
	milesFromSun: 49849,
	mass: 393983,
            composition: ["gas", "liquid", "oxygen"]
}
const planetCopy = {...planet}
console.log(planet.composition[0] === planetCopy.composition[0]) 
console.log(planet === planetCopy)
//-----------------------------------------------------------------------
//Why did the code produce that output? Explain why each console.log looks the way it does.
//the code produce that output because in the first consol.log we have (planet.composition[0] === planetCopy.composition[0]) so they really look like two copys 
// but they are point at the same place in the memory cause with the spreed opreator we make a shallow copy so behind the scene we have "gas"==="gas"--->true 
//in the second output we have false because we alrady made a copy so we have two diffrent places in memory for each object like abject A and object B and 
// with that seconde console.log we was trying to compare object A with object B A===B false.
//first console.log compare two strings//the second console look compare two object 
