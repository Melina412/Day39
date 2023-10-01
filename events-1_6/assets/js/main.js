// * Aufgabe 1_6 ***************************************************************

// In dieser Übung lernst du den Eventhandler change kennen.
// Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.
// Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.
// Nutze: event.target.value, addEventListener("change", (event) => {...} ) und innerHTML oder textContent.

selectOne.addEventListener("change", (event) => {
  result.innerHTML = `Sie haben ${event.target.value} ausgewählt`;
});
