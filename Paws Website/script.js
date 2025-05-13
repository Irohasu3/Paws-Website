// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
    });
  }
  
  // Contact form submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(contactForm);
      const formValues = Object.fromEntries(formData.entries());
      
      console.log('Contact form submitted:', formValues);
      
      // Show success message
      alert('Thank you for contacting us. We\'ll get back to you soon!');
      
      // Reset form
      contactForm.reset();
    });
  }
  
  // Donation form submission
  const donationForm = document.getElementById('donation-form');
  if (donationForm) {
    donationForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(donationForm);
      const formValues = Object.fromEntries(formData.entries());
      
      console.log('Donation form submitted:', formValues);
      
      // Show success message
      alert('Thank you for your generous donation! Your support helps us care for more animals in need.');
      
      // Reset form
      donationForm.reset();
    });
  }
  
  // Adoption form submission
  const adoptionForm = document.getElementById('adoption-form-element');
  if (adoptionForm) {
    adoptionForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(adoptionForm);
      const formValues = Object.fromEntries(formData.entries());
      
      console.log('Adoption form submitted:', formValues);
      
      // Show success message
      alert(`Thank you for your interest in adopting ${formValues.dogId}! We'll review your application and contact you soon.`);
      
      // Reset form
      adoptionForm.reset();
      
      // Re-add the default message for the dog
      const dogName = document.getElementById('dog-name').textContent;
      document.getElementById('adopter-message').value = `I'm interested in adopting ${dogName}...`;
    });
  }
  
  // Load dog details from URL parameters on dog details page
  const dogDetailsPage = document.getElementById('dog-name');
  if (dogDetailsPage) {
    const urlParams = new URLSearchParams(window.location.search);
    const dogId = urlParams.get('id');
    
    if (dogId) {
      // In a real application, you would fetch the dog data from an API
      // For this static example, we'll use hardcoded data for a few dogs
      const dogData = {
        'pumi': {
          name: 'Pumi',
          image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600',
          age: '2 years',
          gender: 'Male',
          size: 'Medium',
          weight: '15 kg',
          breed: 'Mixed',
          color: 'Brown/Black',
          personality: 'Pumi is a sweet, energetic, and friendly dog who loves people and other animals. He\'s the perfect combination of playful and affectionate. He enjoys going for walks, playing fetch, and cuddling on the couch.',
          background: 'Pumi was found as a stray wandering the streets. Despite his rough start, he\'s now healthy, happy, and ready for his forever home. He\'s been neutered, vaccinated, and microchipped.'
        },
        'banjo': {
          name: 'Banjo',
          image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600',
          age: '4 years',
          gender: 'Male',
          size: 'Medium',
          weight: '18 kg',
          breed: 'Labrador Mix',
          color: 'Golden',
          personality: 'Banjo is a gentle soul who loves to lounge in sunny spots. He\'s calm, friendly, and gets along well with everyone he meets. He enjoys short walks and is perfectly content to be your loyal companion.',
          background: 'Banjo was surrendered by his previous owners who could no longer care for him. He\'s adjusted well to shelter life but would thrive in a forever home. He\'s neutered, vaccinated, and ready for adoption.'
        },
        'post': {
          name: 'Post',
          image: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600',
          age: '3 years',
          gender: 'Male',
          size: 'Large',
          weight: '25 kg',
          breed: 'Shepherd Mix',
          color: 'Brown',
          personality: 'Post is a calm, confident dog who enjoys the company of both humans and other dogs. He\'s well-behaved, learns quickly, and would make an excellent family pet. He loves playing fetch and going for long walks.',
          background: 'Post was found tied to a post outside our shelter in January. Despite his abandonment, he\'s remained a sweet, trusting dog. He\'s now fully vaccinated, neutered, and ready to find his forever family.'
        }
      };
      
      const dog = dogData[dogId];
      
      if (dog) {
        // Update page with dog details
        document.getElementById('dog-name').textContent = dog.name;
        document.getElementById('dog-image').src = dog.image;
        document.getElementById('dog-image').alt = `${dog.name} - Happy dog portrait`;
        document.getElementById('dog-name-about').textContent = dog.name;
        document.getElementById('dog-age').textContent = dog.age;
        document.getElementById('dog-gender').textContent = dog.gender;
        document.getElementById('dog-size').textContent = dog.size;
        document.getElementById('dog-weight').textContent = dog.weight;
        document.getElementById('dog-breed').textContent = dog.breed;
        document.getElementById('dog-color').textContent = dog.color;
        document.getElementById('dog-personality-text').textContent = dog.personality;
        document.getElementById('dog-background-text').textContent = dog.background;
        document.getElementById('dog-name-btn').textContent = dog.name;
        document.getElementById('dog-id-input').value = dogId;
        document.getElementById('adopter-message').value = `I'm interested in adopting ${dog.name}...`;
        
        // Update page title
        document.title = `${dog.name} - PAWS`;
      }
    }
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});