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