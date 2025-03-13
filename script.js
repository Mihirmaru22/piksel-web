// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Menu Toggle Function
document.querySelector('.menu-button').addEventListener('click', () => {
    document.querySelector('.fullscreen-menu').classList.add('active');
});

document.querySelector('.close-menu').addEventListener('click', () => {
    document.querySelector('.fullscreen-menu').classList.remove('active');
});

// Projects Scroll Functionality
const scrollContainer = document.querySelector('.projects-scroll');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

nextBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: 430,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({
        left: -430,
        behavior: 'smooth'
    });
});

// Project filtering functionality
const projectSelect = document.getElementById('project-select');
const projectItems = document.querySelectorAll('.project-item');

if (projectSelect && projectItems.length > 0) {
    // Initial state - show all projects with animation
    projectItems.forEach(item => {
        item.style.opacity = '0';
        item.style.display = 'block';
        setTimeout(() => {
            item.style.opacity = '1';
        }, 50);
    });

    projectSelect.addEventListener('change', () => {
        const selectedCategory = projectSelect.value;
        
        projectItems.forEach(item => {
            if (selectedCategory === 'all' || item.dataset.category === selectedCategory) {
                item.style.display = 'block';
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.opacity = '1';
                }, 50);
            } else {
                item.style.opacity = '0';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
}

// Hide/show scroll buttons based on scroll position
scrollContainer.addEventListener('scroll', () => {
    const isAtStart = scrollContainer.scrollLeft === 0;
    const isAtEnd = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth;
    
    prevBtn.style.opacity = isAtStart ? '0.5' : '1';
    nextBtn.style.opacity = isAtEnd ? '0.5' : '1';
    
    prevBtn.style.pointerEvents = isAtStart ? 'none' : 'auto';
    nextBtn.style.pointerEvents = isAtEnd ? 'none' : 'auto';
}); 

