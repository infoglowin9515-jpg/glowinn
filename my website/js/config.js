/**
 * GLOW IN Home Cleaning Services
 * Central Site Configuration
 * 
 * Edit your contact details, WhatsApp number, working hours,
 * and social profiles in this file. Changes here will automatically
 * update links, buttons, and contact displays across the entire website.
 */

const GLOW_CONFIG = {
  // Brand Information
  brandName: "GLOW IN",
  brandTagline: "CLEAN | CARE | SHINE.",
  businessName: "GLOW IN Home Cleaning Services",

  // Primary WhatsApp Number (Format: Country Code + 10 digits without spaces or '+' symbol)
  whatsappNumber: "919515989219",

  // Business Phone Number (Display format)
  phoneDisplay: "+91 95159 89219",
  phoneRaw: "+919515989219",

  // Business Email
  email: "info.glowin9515@gmail.com",
  emailDisplay: "info.glowin9515@gmail.com",

  // Office Address
  address: {
    line1: "Plot No. 16, Shilpa Valley Road",
    line2: "Kantivanam Colony, Serilingampally (M)",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500084",
    full: "Plot No. 16, Shilpa Valley Road, Kantivanam Colony, Serilingampally, Hyderabad, Serilingampally (M), Telangana – 500084."
  },

  // Working Hours
  workingHours: "Monday to Sunday: 8:00 AM – 10:00 PM",
  operatingSchedule: "Open all seven days a week (8:00 AM – 10:00 PM)",

  // All 8 Services (3 Main + 5 Individual Services)
  services: [
    "Home Deep Cleaning",
    "Move-In & Move-Out Cleaning",
    "Pest Control",
    "Bathroom Cleaning",
    "Kitchen Cleaning",
    "Floor Machine Scrubbing",
    "Sofa Cleaning",
    "Carpet Cleaning"
  ],

  // All Service Areas (Original + Newly Added)
  serviceAreas: [
    "Kondapur",
    "Gachibowli",
    "Hafeezpet",
    "Miyapur",
    "Madhapur",
    "Madinaguda",
    "Serilingampally",
    "Chandanagar",
    "Tellapur",
    "Kukatpally",
    "Jubilee Hills",
    "Financial District",
    "Nearby residential areas in Hyderabad"
  ],

  // Social & Map Links
  socialLinks: {
    instagram: "https://www.instagram.com/letsglowin/",
    instagramHandle: "@letsglowin",
    googleBusiness: "https://maps.google.com/?q=GLOW+IN+Home+Cleaning+Services+Serilingampally+Hyderabad",
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.31!3d17.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI4JzQ4LjAiTiA3OMKwMTgnMzYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // WhatsApp Default Messages
  messages: {
    generalBooking: "Hello GLOW IN Team! I would like to book a home cleaning service. Please share the available services, pricing and booking details.",
    serviceBookingTemplate: "Hello GLOW IN, I am interested in booking {serviceName}. Please share the details and pricing.",
    contactServiceEnquiryTemplate: "Hello GLOW IN Team! I am interested in booking {serviceName}. Please share the pricing and booking details.",
    areaCheckTemplate: "Hello GLOW IN Team, I want to check service availability for my location: {location}."
  },

  // Helper method to generate standard WhatsApp URL
  getWhatsAppUrl: function(customMessage) {
    const text = customMessage || this.messages.generalBooking;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  // Helper method to generate service-specific WhatsApp URL
  getServiceWhatsAppUrl: function(serviceName) {
    const text = this.messages.serviceBookingTemplate.replace("{serviceName}", serviceName);
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  // Helper method to generate contact section service enquiry URL
  getContactServiceWhatsAppUrl: function(serviceName) {
    const text = this.messages.contactServiceEnquiryTemplate.replace("{serviceName}", serviceName);
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  },

  // Helper method to generate area check URL
  getAreaCheckUrl: function(locationName) {
    const text = this.messages.areaCheckTemplate.replace("{location}", locationName || "[My Residential Area]");
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(text)}`;
  }
};

// Export for module systems or attach to window
if (typeof window !== "undefined") {
  window.GLOW_CONFIG = GLOW_CONFIG;
}
