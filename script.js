// ==========================================
// GREATMOON MOTOR SPARES - JAVASCRIPT
// Simple interactivity for your website
// ==========================================

// Mobile Menu Toggle
function toggleMenu() {
  const navMenu = document.getElementById("navMenu")
  navMenu.classList.toggle("active")
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const navMenu = document.getElementById("navMenu")
  const menuToggle = document.querySelector(".menu-toggle")

  if (navMenu && menuToggle) {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      navMenu.classList.remove("active")
    }
  }
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-menu a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const navMenu = document.getElementById("navMenu")
    if (navMenu) {
      navMenu.classList.remove("active")
    }
  })
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add active class to current page navigation
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-menu a")

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active")
    }
  })
})

// ==========================================
// CONTACT INFORMATION
// Edit these values to match your business
// ==========================================

// WhatsApp number (include country code without + symbol)
const WHATSAPP_NUMBER = "263775881639"

// Phone number for calling
const PHONE_NUMBER = "+263775881639"

// Email address
const EMAIL_ADDRESS = "info@greatmoon.co.zw"

// Business address
const BUSINESS_ADDRESS = "Mutare, Zimbabwe"

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

// Format phone number for display
function formatPhoneNumber(phone) {
  return phone.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, "+$1 $2 $3 $4")
}

// Open WhatsApp chat
function openWhatsApp(message = "Hello, I'd like to inquire about motor spares") {
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank")
}

// Make phone call
function makeCall() {
  window.location.href = `tel:${PHONE_NUMBER}`
}

// Send email
function sendEmail(subject = "Inquiry about Motor Spares") {
  const encodedSubject = encodeURIComponent(subject)
  window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${encodedSubject}`
}

// Log page views (useful for understanding user behavior)
console.log("Page loaded:", document.title)
console.log("Current page:", window.location.pathname)
