// * Aufgabe 1_9 ***************************************************************

// Dieses Mal sollst du eine Funktion schreiben, die beim Anklicken des Buttons die jeweilige Farb-Option aus der Liste entfernt.
// Den HTML- und CSS-Code findest du im Code-Snippet.
// Nutze: addEventListener(), selectedIndex und remove().

let removeFarbe = "";
farbeAuswahlen.addEventListener("change", () => {
  const index = farbeAuswahlen.selectedIndex;
  removeFarbe = farbeAuswahlen.options[index];
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  if (farbeAuswahlen.options.length > 1) {
    // entfernt farbe laut ausgewähltem index wenn mehr als eine option verfügbar ist
    removeFarbe.remove();
  } else if (farbeAuswahlen.options.length === 1) {
    // nur eine option -> keine auswahl/change mehr möglich, deshalb manuelle auswahl der letzten option
    farbeAuswahlen.options[0].remove();
  } else if (farbeAuswahlen.options.length === 0) {
    console.log("Keine Farb-Option mehr verfügbar");
  }
});
