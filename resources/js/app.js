const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
       console.log(entry);
       if (entry.isIntersecting) {
        entry.target.classList.add('show')
       } else { //this part is to show the animation more than one time
        entry.target.classList.remove('show');    
       }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));