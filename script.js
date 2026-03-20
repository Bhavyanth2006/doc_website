// DOM Elements
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');
const currentYear = document.getElementById('currentYear');

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenuBtn?.querySelector('i');
        if (icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Set current year in footer
if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

// Appointment Form Submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const service = document.getElementById('service').value;
        const date = document.getElementById('date').value;
        
        if (!name || !phone || !service || !date) {
            alert('Please fill in all required fields.');
            return;
        }
        
        alert(`Thank you ${name}! Your appointment request for ${service} on ${date} has been received. We will contact you at ${phone} to confirm.`);
        appointmentForm.reset();
        
        // Reset date to tomorrow
        if (dateInput) {
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            dateInput.value = tomorrow.toISOString().split('T')[0];
        }
    });
}

// Set minimum date for appointment to today
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.value = tomorrow.toISOString().split('T')[0];
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Add active class to current page in navigation
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-menu a').forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
});

// Emergency contact simulation
document.querySelectorAll('.emergency-contact p').forEach(item => {
    if (item.textContent.includes('Call:')) {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            alert('Emergency number: +91-9876543210');
        });
    }
});
// Review Slider Functionality
let slideIndex = 1;

function showReview(n) {
    let i;
    const reviews = document.getElementsByClassName("review-card");
    const dots = document.getElementsByClassName("dot");
    
    if (n > reviews.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = reviews.length }
    
    for (i = 0; i < reviews.length; i++) {
        reviews[i].classList.remove("active");
    }
    
    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }
    
    reviews[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
}

function currentReview(n) {
    showReview(slideIndex = n);
}

// Auto-advance reviews every 5 seconds
function autoAdvanceReviews() {
    if (document.getElementsByClassName("review-card").length > 0) {
        slideIndex++;
        showReview(slideIndex);
    }
}

// Start auto-advance if reviews exist
if (document.getElementsByClassName("review-card").length > 0) {
    showReview(slideIndex);
    setInterval(autoAdvanceReviews, 5000);
}

// Add hover pause for reviews
const reviewsSlider = document.querySelector('.reviews-slider');
if (reviewsSlider) {
    reviewsSlider.addEventListener('mouseenter', () => {
        clearInterval(autoAdvanceInterval);
    });
    
    reviewsSlider.addEventListener('mouseleave', () => {
        autoAdvanceInterval = setInterval(autoAdvanceReviews, 5000);
    });
}

// Add Review Form (optional - can be added later)
function showAddReviewForm() {
    const reviewForm = document.getElementById('reviewForm');
    if (reviewForm) {
        reviewForm.style.display = reviewForm.style.display === 'none' ? 'block' : 'none';
    }
}

// Submit Review
const submitReview = document.getElementById('submitReview');
if (submitReview) {
    submitReview.addEventListener('click', function(e) {
        e.preventDefault();
        const name = document.getElementById('reviewerName').value;
        const review = document.getElementById('reviewText').value;
        const rating = document.getElementById('reviewRating').value;
        
        if (name && review && rating) {
            alert(`Thank you ${name} for your review! It will be displayed after moderation.`);
            document.getElementById('reviewForm').reset();
            document.getElementById('reviewForm').style.display = 'none';
        } else {
            alert('Please fill in all fields');
        }
    });
}