// NoAI Search - Bygget af Mathias Andersen
// Fjerner AI-elementer fra Google for at forhindre snyd i skoler

function hideGoogleAiElements() {
  // Find og skjul AI-oversigter
  const allElements = document.querySelectorAll('div, span, h1');
  
  for (const element of allElements) {
    // Metode 1: Tekst-baseret (Mest robust)
    if (element.textContent && (element.textContent === 'AI-oversigt' || element.textContent === 'Generativ AI')) {
      const container = element.closest('div[jscontroller]') || element.closest('.M8OgIe'); // .M8OgIe er ofte AI-boksen
      if (container && container.style.display !== 'none') {
        console.log("NoAI: Fjerner AI-boks.");
        container.style.display = 'none';
      }
    }
    
    // Metode 2: Knappen "AI-tilstand"
    if (element.textContent === 'AI-tilstand') {
        const buttonContainer = element.closest('div[role="listitem"]') || element.closest('a');
        if (buttonContainer && buttonContainer.style.display !== 'none') {
            console.log("NoAI: Fjerner AI-tilstand knap.");
            buttonContainer.style.display = 'none';
        }
    }
  }

  // Metode 3: Specifikke CSS-klasser for Gemini/AI i toppen (hvis teksten ændres)
  const aiSpecificClasses = ['.M8OgIe', '#grad-container', '.wDYxhc'];
  aiSpecificClasses.forEach(selector => {
      const els = document.querySelectorAll(selector);
      els.forEach(el => el.style.display = 'none');
  });
}

// Kør så hurtigt som muligt
hideGoogleAiElements();

// Kør igen hvis siden ændrer sig (Google loader ofte dynamisk)
const observer = new MutationObserver((mutations) => {
  hideGoogleAiElements();
});

observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});