let jsonData = document.querySelector("#jsonInput");

const flashCardContainer = document.querySelector("#flashCardContainer");

const flashCardTop = document.createElement("div");
flashCardTop.id = "flashCardTop";

const submitButton = document.querySelector("#jsonSubmit");
submitButton.addEventListener("click", () => {
   jsonData = JSON.parse(jsonData.value);
   flashCardController();
});

let currentIndex = 0;

const flashCardController = () => {
   console.log(currentIndex);
   renderFlashCard(jsonData[currentIndex]);
   const flashCardButtonContainer = document.createElement("div");
   flashCardButtonContainer.id = "flashCardButtonContainer";
   const nextButton = document.createElement("button");
   const prevButton = document.createElement("button");
   nextButton.type = "button";
   nextButton.id = "nextButton";
   prevButton.id = "prevButton";
   prevButton.type = "button";
   nextButton.textContent = "Next";
   prevButton.textContent = "Prev";

   nextButton.addEventListener("click", () => {
      currentIndex < jsonData.length - 1
         ? (currentIndex += 1)
         : (currentIndex = 0);
      flashCardTop.innerHTML = "";
      renderFlashCard(jsonData[currentIndex]);
   });
   prevButton.addEventListener("click", () => {
      currentIndex < 1
         ? (currentIndex = jsonData.length - 1)
         : (currentIndex -= 1);
      flashCardTop.innerHTML = "";
      renderFlashCard(jsonData[currentIndex]);
   });

   flashCardButtonContainer.appendChild(nextButton);
   flashCardButtonContainer.appendChild(prevButton);
   flashCardContainer.appendChild(flashCardButtonContainer);
};

const renderFlashCard = (data) => {
   let index = 0;

   const flashCardText = document.createElement("p");
   flashCardText.id = "flashCardText";
   flashCardText.textContent = data[index];
   const flipButton = document.createElement("button");
   flipButton.id = "flipButton";
   flipButton.textContent = "Flip";
   flipButton.addEventListener("click", () => {
      index += 1;
      flashCardText.textContent = data[index % 2];
   });
   flashCardTop.appendChild(flashCardText);
   flashCardTop.appendChild(flipButton);

   flashCardContainer.appendChild(flashCardTop);
};

// jsonData = [
//     ["Kapitel 1", "Guten Tag!"],
//     ["der Anzug", "suit"],
//     ["der Apfelstrudel", "apple cake"],
//     ["die Autobahn", "highway"],
//     ["Bulgarisch", "Bulgarian"],
//     ["das Butterbrot", "sandwich"],
//     ["das (das Frühstück)", "the"],
//     ["der (Artikel)", "the"],
//     ["die (Artikel)", "the"],
//     ["Französisch", "French"],
//     ["das Frühstück", "breakfast"],
//     ["international", "international"],
//     ["Italienisch", "Italian"],
//     ["Japanisch", "Japanese"],
//     ["der/die Kranke", "sick person"],
//     ["der Rucksack", "backpack"],
//     ["Russisch", "Russian"],
//     ["Türkisch", "Turkish"],
//     ["Ungarisch", "Hungarian"],
//     ["der Walzer", "waltz"],
//     ["das Würstchen/Würstel", "sausage"],
//     ["zuordnen", "to assign"],
//     ["andere", "other"],
//     ["kennen", "to know (s.o.)"],
//     ["sammeln", "to collect"],
//     ["Bis bald!", "See you soon!"],
//     ["danke", "Thank you."],
//     ["dir", "you (dat.)"],
//     ["du", "you"],
//     ["die Entschuldigung", "apology"],
//     ["es (Es ist nicht schlecht.)", "it (It is not bad.)"],
//     ["gehen", "to go"],
//     ["gut", "good"],
//     ["Hallo!", "Hello!"],
//     ["heißen", "to be named"],
//     ["hören", "to hear"],
//     ["ich", "I"],
//     ["die Person", "person"],
//     ["sehr", "very"],
//     ["Tschüs!", "Bye!"],
//     ["und", "and"],
//     ["wer?", "who?"],
//     ["wie", "how"],
//     ["Wie geht’s?", "How’s it going?"],
//     ["auch", "also"],
//     ["sein (Ich bin Gregor.)", "to be (I am Gregor.)"],
//     ["Guten Tag! Auf Wiedersehen!", "Hello! Goodbye!"],
//     ["Auf Wiedersehen!", "Goodbye!"],
//     ["das (Das ist Julia.)", "this, that (This is Julia.)"],
//     ["die Frau", "woman"],
//     ["Gute Nacht!", "Good night!"],
//     ["Guten Abend!", "Good evening!"],
//     ["Guten Morgen!", "Good morning!"],
//     ["Guten Tag!", "Good day! Hello!"],
//     ["der Herr", "gentleman"],
//     ["Ihnen", "you (formal, dat.)"],
//     ["die Kollegin", "colleague (f)"],
//     ["mein, meine", "my"],
//     ["der Name", "name"],
//     ["Sie (Wie heißen Sie?)", "you (formal) (What is your name?)"],
//     ["der Dialog", "dialogue"],
//     ["Wie heißen Sie?", "What is your name?"],
//     ["die Antwort", "answer"],
//     ["aus (Er kommt aus Italien.)", "from (He is from Italy.)"],
//     ["Deutsch", "German"],
//     ["Deutschland", "Germany"],
//     ["Englisch", "English"],
//     ["in (Er lebt in Frankfurt.)", "in (He lives in Frankfurt.)"],
//     ["kommen (Woher kommst du?)", "to come from (Where do you come from?)"],
//     ["der Reiseführer", "travel guide"],
//     ["Spanisch", "Spanish"],
//     ["sprechen (er spricht)", "to speak"],
//     ["das Telefon", "telephone"],
//     ["welche?, welches?", "which?"],
//     ["wo?", "where?"],
//     ["woher?", "from where?"],
//     ["wohnen (Ich wohne in Spanien.)", "to live (I live in Spain.)"],
//     [
//        "sie (Das ist Anna. Sie wohnt in Berlin.)",
//        "she (This is Anna. She lives in Berlin.)",
//     ],
//     ["er", "he"],
//     ["ergänzen", "to complete"],
//     ["die Hausnummer", "house number"],
//     ["die Postleitzahl", "zip code"],
//     ["die Webseite", "website"],
//     ["das Interview", "interview"],
//     ["notieren", "to note, to jot down"],
//     ["der Partner", "partner (m)"],
//     ["die Partnerin", "partner (f)"],
//     ["raten, rät", "to guess"],
//     [
//        "vorstellen (Stellen Sie Ihren Partner vor.)",
//        "to introduce (Introduce your partner.)",
//     ],
//  ];

// flashCardController();
