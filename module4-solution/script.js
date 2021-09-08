(function () {

    var names = ["Surabhi", "Jolly" , "Anuj", "Mrunal", "Yash", "Pankaj", "Shraddha", "Ashmit", "John", "Jash","Jethalal"];
    
    for (var i = 0; i < names.length; i++) {
    
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      } 
      else {
        helloSpeaker.speak(names[i]);
      }
    }
    
    })();