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
// INNER HTML
document.querySelector('#title').innerHTML = "FrontEnd Simplified"
// Can also ADD to HTML:
document.querySelector('#title').innerHTML += "House of Prayer"
/**Can also ADD to CSS:
 * ".STYLE" Property
 */
document.querySelector('#title').style.color = 'red'
document.querySelector('#title').style.fontSize = '50px'
/**************CLICK LISTENERS ***************** 
 * To do this you must first DECLARE A FUNCTION:
*/
function changeTitleToRed() {
    // Making sure its CLICKED
    console.log('clicked') 
}
function changeTitleToBlue() {
    document.querySelector('#title').style.color = "blue"
}