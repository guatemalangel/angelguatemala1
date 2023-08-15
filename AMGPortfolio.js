const anchors = document.querySelectorAll('nav a');

function onScroll() {
 
    const scrollPosition = window.scrollY;

    anchors.forEach(anchor => {
        const target = document.querySelector(anchor.getAttribute('href'));

        if (target.offsetTop <= scrollPosition && target.offsetTop + target.offsetHeight > scrollPosition) {
  
            anchors.forEach(a => a.classList.remove('active'));

            anchor.classList.add('active');
        } else {
       
            anchor.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', onScroll);

anchors.forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault();
    
        anchors.forEach(a => a.classList.remove('active'));
     
        anchor.classList.add('active');
      
        const target = document.querySelector(anchor.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
