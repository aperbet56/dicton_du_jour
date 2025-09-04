// Récupération des éléments HTML
const today = document.querySelector(".today");
const cardQuote = document.querySelector(".card__quote");
const footerCopyrightYear = document.querySelector(".footer__text__year");

// Création des variables et constantes
const date = new Date();
console.log(date);
const dayOfWeekNumber = date.getDay();
console.log(dayOfWeekNumber);
const currentYear = date.getFullYear();
console.log(currentYear);
let nameOfDay;
let quote;

switch (dayOfWeekNumber) {
  case 0:
    nameOfDay = "Dimanche";
    quote = "Le dimanche est un autre jour. Même le soleil est différent ! ";
    break;
  case 1:
    nameOfDay = "Lundi";
    quote = "Chaque lundi est une nouvelle chance de recommencer.";
    break;
  case 2:
    nameOfDay = "Mardi";
    quote = "Le mardi est juste un autre mot pour le lundi.";
    break;
  case 3:
    nameOfDay = "Mercredi";
    quote =
      "Un mercredi bien vécu vous promet une semaine riche en évènement !";
    break;
  case 4:
    nameOfDay = "Jeudi";
    quote = "Le jeudi est l'ultime préface du week-end.";
    break;
  case 5:
    nameOfDay = "Vendredi";
    quote = "Le vendredi, soyons honnête, c'est le paradis !";
    break;
  case 6:
    nameOfDay = "Samedi";
    quote =
      "Le samedi est la toile de vos aspirations : peignez-la aux couleurs de la détermination et de la joie !";
    break;
}

// Affichage du jour
today.textContent = `${nameOfDay}`;

// Affichage de la citation
cardQuote.textContent = `${quote}`;

// Affichage de l'année en cours
footerCopyrightYear.textContent = `${currentYear}`;
