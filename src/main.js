// Main JavaScript file
import './style.css'

// Get DOM elements
const ctaButton = document.getElementById('cta-button')
const introAudio = document.getElementById('intro-audio')
const aboutUsLink = document.querySelector('a[href="#about"]')

// Add event listeners
ctaButton.addEventListener('click', () => {
  alert('Hello from JavaScript! 🎉')
  
  // Add some dynamic styling
  ctaButton.style.transform = 'scale(1.1)'
  setTimeout(() => {
    ctaButton.style.transform = 'scale(1)'
  }, 200)
})

// Audio functionality for About us link
aboutUsLink.addEventListener('click', (e) => {
  e.preventDefault()
  
  // Stop current audio if playing and restart from beginning
  introAudio.pause()
  introAudio.currentTime = 0
  introAudio.play()
  
  console.log('Playing intro audio! 🎵')
})

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded successfully! 🚀')
  
  // Add smooth scrolling for other anchor links (not About us)
  document.querySelectorAll('a[href^="#"]:not([href="#about"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        })
      }
    })
  })
})
