var Indy = new Howl({src: ["../../Audio/Raiders.mp3"], html5: true,
autoplay: false, onend:function(){console.log("Finished!");}});

adventure.addEventListener("click", playSong);

function playSong(){

if (Indy != null)
    {Indy.stop();}
 Indy.play();
}

var Wilhelm = new Howl({src: ["../../Audio/Wilhelm.mp3"], html5: true,
autoplay: false, onend:function(){console.log("Finished!");}});

wilhelm_scream.addEventListener("click", playScream);

function playScream(){

if (Wilhelm != null)
    {Wilhelm.stop();}
 Wilhelm.play();
}