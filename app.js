/** First way of accessing an element:
 ********** QUERY SELECTOR***********
 */
document.querySelector('#title')
/**NOTE: In order to call these funcitons,
 * You must either 1. type "DEFER" on "script" tag
 * OR 2. Write the script tag AFTER the code
 */
console.log(document.querySelector('#title'))
/**Second Way of accessing an element:
 * Only if there is an "ID":
 * ************GETELEMENTBYID***********
 */
document.getElementById('title')
console.log(document.getElementById('title'))
/**  INNER HTML
document.querySelector('#title').innerHTML = "FrontEnd Simplified"
 Can also ADD to HTML:
document.querySelector('#title').innerHTML += "House of Prayer"

*/
/**Can also ADD to CSS:
 * ".STYLE" Property
 
document.querySelector('#title').style.color = 'red'
document.querySelector('#title').style.fontSize = '50px'
/**************CLICK LISTENERS ***************** 
 * To do this you must first DECLARE A FUNCTION:

function changeTitleToRed() {
    // Making sure its CLICKED
    console.log('clicked') 
}
function changeTitleToBlue() {
    document.querySelector('#title').style.color = "blue"
}
(*********BE CARFEUL**********)
THIS CAN ALTER HTML AND CSS in CODE
*/
// Dark Theme:
function toggleDarkMode() {
    /********IMPORTANT*******
     * "classList and TOGGLE
     * ".toggle" is how you access CLASSES
    */
    document.querySelector('body').classList.toggle("dark-theme")
}
/**
 * **********  PROMISES  ***********
 */
/** "Fetching" is how you ACESS DATA 
 * from the BACKEND SERVER
 */

// ******fetch('https://jsonplaceholder.typicode.com/users')*****

/**AFter accessing, 
 * now you need to UNLOCK
 * You do this 2 ways:
 *  * 1. THEN method
 *  * 2. ASYNC/AWAIT method 
 * */
// THEN method:
/**
 * const emailRef = document.querySelector(".email");
fetch('https://jsonplaceholder.typicode.com/users').then(response => {
    /**
     *  Inside Callback, use ".json" to
     * CONVERT to FRONTEND
     * Then you use ANOTHER CALLBACK:
     *  */ 
    /**
     *  Printing SINGLE ELEMENT in API
     * THis is what the EMAILREF is for:
     */
   // console.log(response.json().then(data => {
       // console.log(data)
       // emailRef.innerHTML = data.email
   // })
// )
//})
// */
// TIME STAMP: 8:47
/**
 * Short Way: 
 * fetch('https://jsonplaceholder.typicode.com/users').then(response => {
 *      return response.json() {
    }).then(data => {
        console.log(data)    
    })
 */
/**
 * 
 * ************CORRECT CODE:****************** 
 * const emailRef = document.querySelector(".email")
fetch('https://jsonplaceholder.typicode.com/users').then(response => 
    response.json())
    .then(data => {
console.log(data); // data is an array
emailRef.innerHTML = data[0].email; // using the first user's email
})
*/
// ASYNC/AWAIT METHOD:
/**
 * Starts with an ASYNCE FUNCTION:
 * The AWAIT (aka WAITING on something)
 * is INSIDE the ASYNC funciton
 */
// const emailRef = document.querySelector(".email")
// async function main() {
    // Then must make await a VARIABLE
    //const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //const data = await response.json()
    //console.log(data)
    //emailRef.innerHTML = data[0].email
// }
// Then CALL function as usual:
//main()
// TIME STAMP: 16:02
/**
 * *************CREATING A PROMISE****************
 */
// How you DISPLAY code ON WEBPAGE
// Have to DECLARE VARIABLE that LINKS to JS
//const statusRef = document.querySelector(".status")
//const videoRef = document.querySelector(".video")
// function getSubsrciptionStatus() {
    /**Inside Promise callback,
     * write 'RESOLVE' and 'REJECT'
     * Resolve is for if something is SUCCESSFUL
     * Reject is for NONAPPLICABLE(I.E. EVERYTHING ELSE)
     */
  //  return new Promise((resolve, reject) => {
    //    resolve("VIP")
  //  })
//}
// You then use Async/Await or Then to UNLOCK PROMISE:
// 1. THEN METOD:
// getSubsrciptionStatus().then(response => console.log(response))
// 2. ASYNC/AWAIT METHOD:
/** 
async function mainFunction(params) {
    const status = await getSubsrciptionStatus()
    statusRef.innerHTML = status
    console.log(await getVideo(status))
}
mainFunction()
*/
// Video Challenge
/** function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP") {
            resolve("Show Video")
        }
        else if (subscriptionStatus === "FREE"){
            resolve("Show Trailer")
        }
        else {
            reject("no Video")
        }
    })
}

async function mainFunction(params) {
    const status = await getSubsrciptionStatus()
    statusRef.innerHTML = status
    try {
        console.log(await getVideo(status))
    }
    catch(e) {
        console.log(e)
        videoRef.innerHTML = e
    }
}
mainFunction()
*/
// TIME STAMP: 27:32
/**
 * This is the CORRECT, ALTERED CODE
 * given by Victor Alves of FES:
 */
document.querySelector("#title");

console.log(document.querySelector("#title"));

document.getElementById("title");
console.log(document.getElementById("title"));

const emailRef = document.querySelector(".email");
async function main() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
  emailRef.innerHTML = data[0].email;
}

main();
const statusRef = document.querySelector(".status");
const videoRef = document.querySelector(".video");
function getSubsrciptionStatus() {
  return new Promise((resolve, reject) => {
    resolve("VIP");
  });
}
function getVideo(subscriptionStatus) {
  return new Promise((resolve, reject) => {
    if (subscriptionStatus === "VIP") {
      resolve("Show Video");
    } else if (subscriptionStatus === "FREE") {
      resolve("Show Trailer");
    } else {
      reject("no Video");
    }
  });
}

async function mainFunction() {
    const status = await getSubsrciptionStatus();
    statusRef.innerHTML = status;  // Use statusRef instead of status
    
    try {
      const video = await getVideo(status);
      videoRef.innerHTML = video;  // Add this line to set the video content
    } catch (e) {
      console.log(e);
      videoRef.innerHTML = e;
    }
  }
mainFunction();
/**
 * **********PROBLEM SOLVING**************
 */
// Problem 1: Adding two numbers together
function addtion(num1, num2) {
    return num1 + num2
}
console.log(addtion(3,2))
// Problem 10: calculate remainder of two numbers
function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(5, 2))
// MEDIUM CHALLENGES:
// Problem 1: Return Falsy Value
 function filterOutFalsy(elem1, elem2) {
    if (!elem1) {
        return elem1
    }
    else {
        return elem2
    } 
}
// Using TERNARY OPERATORS:
function newFilterOutFalsy(elem1, elem2) {
    return !elem1 ? elem1 : elem2
}
console.log(filterOutFalsy(true, "dog"))
console.log(newFilterOutFalsy(true, "dog"))
// Problem 2: Return the length of anny array
function arrLength(arr) {
    return arr.length 
}
console.log(arrLength([1, 2, 3, 6]))
// ADVANCED CHALLENGES:
/**
 * Problem 1: Show Rating: 
 * Star(*) for Full Rating 
 * Period(.) for Half Rating
 */
function showRating(rating) {
    let ratings = ""
    for (let i = 0; i < rating; i++) {
        ratings = ratings + "*"
    }
    if (!Number.isInteger(rating)) {
       ratings = ratings + "."
    }
    return ratings
}
console.log(showRating(3.5))