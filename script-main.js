function changeColor() {
    const color = document.getElementById("colors").value;
    document.body.style.backgroundColor = color;
  }

  function getData() {
    document.getElementsByTagName("p")[0].textContent=
    document.getElementsByTagName("button")[0].getAttribute("data-text");
  }

  /*Code Challenge: JS Review - Loops and Arrays*/
const firstNamesArray = ['Violet', 'Charlie', 'Veruca', 'Mike', 'Augustus'];
const lastNamesArray = ['Beauregarde', 'Bucket', 'Salt', 'Teavee', 'Gloop'];

firstNamesArray.reverse();
lastNamesArray.reverse();

for (let i = 0; i < firstNamesArray.length && lastNamesArray.length; i++) {
  console.log(firstNamesArray[i] + " " + lastNamesArray[i]);
}


const age = 15;
if (age >= 16) {
    console.log('You are old enough to drive.');
    }else{
    console.log('You are not yet old enough to drive.');


    const drinkSize = "small";

switch (drinkSize) {
    case 'small':
    console.log('A small drink is 10 ounces.');
    break;
    case 'medium':
    console.log('A medium drink is 16 ounces.');
    break;
    case 'large':
    console.log('A large drink is 22 ounces.');
    break;
    default:
    console.log('Unknown drink size.');
    break;
}