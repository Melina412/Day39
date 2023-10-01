// * Aufgabe 1_5 ***************************************************************

// In dieser Übung wirst du dich weiter mit JS Events beschäftigen.
// Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
// Der HTML und CSS Code befindet sich im Code-Snippet.
// Nutze getElementById(), Anzahl = 0; (es ist wichtig, hier zu initiieren!), Anzahl += 1; und innerHTML.

let click_counter = 0;

clickMe.addEventListener("click", () => {
  click_counter += 1;
  clickMe.innerHTML = `Click me: ${click_counter}`;
});
