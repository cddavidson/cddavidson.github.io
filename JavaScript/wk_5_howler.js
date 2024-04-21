var Indy = new Howl({src: ["../../Audio/Raiders.mp3"], html5: true,
autoplay: false, onend:function(){console.log("Finished!");}});

adventure.addEventListener("click", playSong);

function playSong(){

if (Indy != null)
    {Indy.stop();}
 Indy.play();
}