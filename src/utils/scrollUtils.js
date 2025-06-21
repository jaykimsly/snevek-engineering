// Smooth scroll to element by ID
export const scrollToElement = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Handle hash links for smooth scrolling
export const handleHashLinkClick = (e) => {
  const hash = e.target.hash;
  if (hash) {
    e.preventDefault();
    const id = hash.replace('#', '');
    scrollToElement(id);
    
    // Update URL without page reload
    window.history.pushState(null, '', hash);
  }
};