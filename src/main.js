// Main JavaScript file
import './style.css'

// Load header component
async function loadHeader() {
  try {
    const response = await fetch('/components/header.html')
    const headerHtml = await response.text()
    document.getElementById('header-placeholder').innerHTML = headerHtml
  } catch (error) {
    console.error('Error loading header:', error)
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadHeader()
  console.log('Website loaded successfully! 🚀')
})
