let h1 = document.createElement("h1");

h1.textContent = ("HTML");

let body = document.querySelector("body")

body.appendChild(h1);

h1.style = "color: white; background-color: darkolivegreen; display: flex; justify-content: center; border: 4px solid red; border-radius: 30px; ";

let img = document.createElement("img");

img.src = "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png";
img.style = "width: 100px; display: flex; padding-left: 710px;";

body.appendChild(img);

let p = document.createElement("p");
let h2 = document.createElement("h2");
let hr = document.createElement("hr");

p.textContent = ("HyperText Markup language");
p.style = "background-color: black; color: white; text-align: center;"
h2.textContent = (" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla corrupti magni voluptatum ad reiciendis cumque dolores. Est laborum quod")
h2.style = "background-color: black; color: white; text-align: center;"

body.appendChild(p);
body.appendChild(h2);
body.appendChild(hr);