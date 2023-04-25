const speakButton = document.getElementById('speak-button'); // Get the speak button
const textToSpeak = document.getElementById('text-to-speak'); // Get the text to speak input
const message = new SpeechSynthesisUtterance(); // Create a new SpeechSynthesisUtterance object
message.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'en-US'); // Set the voice to use
message.pitch = 1; // Set the pitch
message.rate = .5; // Set the rate
speakButton.addEventListener('click', () => { // Add a click event listener to the speak button
  message.text = textToSpeak.value; // Set the text to speak
  speechSynthesis.speak(message); // Speak the text
});
