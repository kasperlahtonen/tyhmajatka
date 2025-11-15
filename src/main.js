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

// Folder Explorer Functionality
class FolderExplorer {
  constructor(containerId) {
    this.container = document.getElementById(containerId)
    this.currentLevel = 0
    this.correctPath = [
      { level: 1, label: 'A' },
      { level: 2, label: 'B' },
      { level: 3, label: 'C' },
      { level: 4, label: 'A' },
      { level: 5, label: 'B' }
    ]
    this.audio = document.getElementById('intro-audio')
    this.init()
  }

  init() {
    this.createInitialFolder()
  }

  createInitialFolder() {
    const folder = this.createFolderElement('A', 1, true)
    this.container.innerHTML = ''
    this.container.appendChild(folder)
  }

  createFolderElement(label, level, isCorrect = false) {
    const folderDiv = document.createElement('div')
    folderDiv.className = `folder ${isCorrect ? 'correct-path' : ''}`
    folderDiv.dataset.level = level
    folderDiv.dataset.label = label

    const labelDiv = document.createElement('div')
    labelDiv.className = 'folder-label'
    labelDiv.textContent = label

    folderDiv.appendChild(labelDiv)

    folderDiv.addEventListener('click', () => this.handleFolderClick(folderDiv))

    return folderDiv
  }

  handleFolderClick(folderElement) {
    const level = parseInt(folderElement.dataset.level)
    const label = folderElement.dataset.label
    const isCorrect = folderElement.classList.contains('correct-path')

    // Check if this is the final correct folder
    if (isCorrect && level === 5) {
      this.playAudio()
      return
    }

    // Create next level folders
    this.createNextLevel(level, isCorrect)
  }

  createNextLevel(currentLevel, wasCorrect) {
    this.currentLevel = currentLevel + 1

    // Create container for this level
    const levelContainer = document.createElement('div')
    levelContainer.className = 'folder-level'

    // Create 3 folders for the next level
    const folderLabels = ['A', 'B', 'C']

    folderLabels.forEach((label, index) => {
      // Determine if this folder is on the correct path
      const correctPathForLevel = this.correctPath.find(cp => cp.level === this.currentLevel)
      const isCorrect = correctPathForLevel && correctPathForLevel.label === label

      const folder = this.createFolderElement(label, this.currentLevel, isCorrect)
      levelContainer.appendChild(folder)
    })

    // Replace current content
    this.container.innerHTML = ''
    this.container.appendChild(levelContainer)
  }

  playAudio() {
    // Stop current audio if playing and restart from beginning
    this.audio.pause()
    this.audio.currentTime = 0
    this.audio.play()

    // Add visual feedback
    this.container.innerHTML = '<div style="color: #ffd700; font-size: 2rem; text-align: center; animation: fadeIn 1s ease-in;">🎵 AUDIO DISCOVERED! 🎵</div>'
    console.log('🎵 Folder audio discovered! 🎵')
  }
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
  console.log('Website loaded successfully! 🚀')

  // Initialize folder explorer
  new FolderExplorer('folder-container')

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
