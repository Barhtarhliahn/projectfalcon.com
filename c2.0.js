let counter = document.querySelector('h1');
let count = 5;

setInterval(()=>{

counter.innerText = count;
count--

if (count < 1) location.replace('gallery.html')
}, 1000)

