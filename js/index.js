// Your code goes here

//Click

const logoColor = document.querySelector("h1");

logoColor.addEventListener("click", () => {
  logoColor.style.color = "hotpink";
});

//mouseover

const title2Color = document.querySelectorAll("h2");

title2Color.forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.color = "limegreen";
    element.style.backgroundColor = "black";
  });
});

//mouseout

title2Color.forEach(element1 => {
  element1.addEventListener("mouseout", () => {
    element1.style.color = "black";
    element1.style.backgroundColor = "white";
  });
});

window.addEventListener("copy", function(event) {
  event.preventDefault();
  alert(`Im watching you!! `);
});

const bigger = document.querySelectorAll("p");

bigger.forEach(element2 => {
  element2.addEventListener("dblclick", () => {
    element2.style.fontSize = "2rem";
  });
});

window.addEventListener("load", () => {
  event.preventDefault();
  alert("Loading..");
});

document.addEventListener("keydown", b => {
  console.log(`${b.code} is pressed `);
});

document.addEventListener("keyup", b => {
  console.log(`${b.code} is released`);
});

window.addEventListener("resize", function() {
  let footer = document.querySelector("footer");
  footer.style.background = `rgba(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
    Math.random() * 255
  )}, 1)`;
});

window.addEventListener("scroll", event => {
  let body = document.querySelector("body");

  body.style.background = `rgba(${Math.random() * 255},${Math.random() *
    255},${Math.random() * 255}, 0.3 )`;
});
