// Configuration for external services
export const config = {
  // Formspree configuration
  formspree: {
    // Replace with your actual Formspree form ID after setting up your account
    // Get this from: https://formspree.io/forms
    endpoint: 'https://formspree.io/f/movlrrkk'
  }
};

// Alternative services configuration (if you want to switch later)
export const alternativeServices = {
  // EmailJS configuration
  emailjs: {
    serviceId: 'YOUR_SERVICE_ID',
    templateId: 'YOUR_TEMPLATE_ID',
    publicKey: 'YOUR_PUBLIC_KEY'
  },
  
  // Netlify Forms (automatically works if deployed on Netlify)
  // Just add: netlify data-netlify="true" to your form element
};
