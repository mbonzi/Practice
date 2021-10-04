function changeColor() {
    const color = document.getElementById("colors").value;
    document.body.style.backgroundColor = color;
  }

  function getData() {
    document.getElementsByTagName("p")[0].textContent=
    document.getElementsByTagName("button")[0].getAttribute()
  }