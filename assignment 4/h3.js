(function () {

// STEP 1:
  var names = ["Yaakov", "hailu", "sami", "binyam", "gashaw", "habtie", "melese", "reta", "afrasha", "mullaw"];

// STEP 10:
  for (var i = 0; i < names.length; i++) {

    // STEP 11:
     var firstLetter = names[i].charAt(0).toLowerCase();

    // STEP 12:
    if (firstLetter === 'j') {
       byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
