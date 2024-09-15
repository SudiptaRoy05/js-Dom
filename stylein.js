const sections = document.querySelectorAll('section');
for (const section of sections) {
    console.log(section)    
    section.style.border = '2px solid aqua';
    section.style.marginBottom = "10px";
    section.style.padding = '10px';
    section.style.borderRadius = "10px";
    section.style.backgroundColor = "gray";
}


const dom = document.getElementById('awesomeDom');
dom.style.backgroundColor = "yellowgreen";
dom.classList.add('yellow-bg')
console.log(dom.classList)