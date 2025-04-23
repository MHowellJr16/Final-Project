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
const emailRef = document.querySelector(".email")
async function main() {
    // Then must make await a VARIABLE
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data[0].email
}
// Then CALL function as usual:
main()
// TIME STAMP: 16:02