// Query the DOM for the buttons
const buttons = document.querySelectorAll('.pad-button')

// Add a click event listener to each button
buttons.forEach((button) => {
  button.addEventListener('click', playSound)
})
function playSound(event) {
  // Get the sound file associated with the button
  const soundFile = event.target.dataset.sound

  // Create an audio element
  const audio = new Audio(`/sounds/${soundFile}`)

  // Play the sound
  audio.play()
}
