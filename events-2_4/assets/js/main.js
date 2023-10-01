// * Aufgabe 2_4 ***************************************************************

// Schreibe eine Funktion, die beim Anklicken des Buttons die ausgewählte Farboption auf den Hintergrund des <body> anwendet.
// Verwende den Code aus dem Code-Snippet.
// Verwende folgende Befehle für die Aufgabe: addEventListener(“click”), event.preventDefault(); und .value oder selectedIndex.
// Nutze Google, um zu lernen wie man Leerzeichen in Zeichenketten entfernt.

//  - RegEx zum entfernen von leerzeichen
//  - text.replace(/\s/g, "");

// erste option auswählen, damit diese von beginn (ohne change) verfügbar ist
// (-> möglichkeit ohne selected attribut ins html schreiben zu müssen)
document.getElementById("1").selected = true;

let backgroundFarbe = farbeAuswahlen.value;
backgroundFarbe = backgroundFarbe.replace(/\s/g, "");

farbeAuswahlen.addEventListener("change", () => {
  backgroundFarbe = farbeAuswahlen.value.replace(/\s/g, "");
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("body").style.backgroundColor = backgroundFarbe;
});
