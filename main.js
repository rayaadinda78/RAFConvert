let menuOpen = document.querySelector('.menu-toggle');
let menuWrapper = document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function () {
    menuOpen.classList.toggle('bx-x');
    menuWrapper.classList.toggle('active')    
})

function loadIframe() {
    var url = document.getElementById('iframe-url').value;
    var iframe = document.getElementById('widgetApi');
    iframe.src = "https://convert2mp3s.com/api/widget?url=" + url;
}  

function pasteLink() {
  
    const inputElement = document.getElementById("iframe-url");
  
   
    navigator.clipboard
      .readText()
      .then((text) => {
       
        inputElement.value = text;
      })
      .catch((error) => {
        
        console.error("Failed to read clipboard:", error);
      });
  }


  const navLinks = document.querySelectorAll('.menu-link');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const topOffset = 70; // Adjust this value if you have a fixed header or different offset

        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });

            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
        }
    });
});
  


window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150; // Adjust this value to change when the active link should be updated

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach((navLink) => {
                navLink.classList.remove('active');
                if (navLink.getAttribute('href') === `#${sectionId}`) {
                    navLink.classList.add('active');
                }
            });
        }
    });
});




// main.js
// Add this JavaScript to update the position of the header when scrolling

const header = document.querySelector('header');
const headerHeight = header.clientHeight;
const mainSection = document.getElementById('main');

// Update the header position on scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= headerHeight) {
        header.classList.add('sticky'); // Add the 'sticky' class
        mainSection.style.paddingTop = `${headerHeight}px`; // Add padding to the main section to account for sticky header
    } else {
        header.classList.remove('sticky'); // Remove the 'sticky' class
        mainSection.style.paddingTop = 0; // Remove the padding when the header is not sticky
    }
});

