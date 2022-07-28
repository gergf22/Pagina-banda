(function (){
    var btnmenu = document.getElementById("btnmenu");
    var menu = document.getElementById ("menu");

    var desplegar = function (){
        menu.classList.toggle("mostrar");
        historia.className = "historia";
        discos.className = "discos";
        fotos.className = "fotos";
        videos.className = "videos";
    }
    btnmenu.addEventListener ("click", desplegar);

    var btnhistoria = document.getElementById ("btnhistoria");
    var historia = document.getElementById ("historia");

    btnhistoria.addEventListener ("click", function(){
        historia.classList.toggle("hstria");
        menu.className = "menu"
    } );

    var btndiscos = document.getElementById ("btndiscos");
    var discos = document.getElementById ("discos");

    
    btndiscos.addEventListener ("click", function(){
        discos.classList.toggle ("ep");
        menu.className = "menu";
        

    });

    var btnfotos = document.getElementById ("btnfotos");
    var fotos = document.getElementById ("fotos");


    btnfotos.addEventListener ("click", function(){
        fotos.classList.toggle ("fts");
        menu.className = "menu";
    })
   
    var btnvideos = document.getElementById ("btnvideos");
    var videos = document.getElementById ("videos");

    btnvideos.addEventListener("click", function(){
        videos.classList.toggle ("vds");
        menu.className = "menu";
    })

    var play = document.getElementById ("btnplay");
    var pause = document.getElementById ("btnpause");
    var next = document.getElementById ("btnnext");
    var prev = document.getElementById ("btnprev");

    var audio = document.getElementById('audio');
    var playlist = document.getElementById('playlist');
    var tracks = playlist.getElementsByTagName('a');
    var fobias = document.getElementById ("fobias");
    var irreal = document.getElementById ("irreal");
    var Preparate = document.getElementById ("Preparate");
    var quinientos = document.getElementById ("quinientos");
    var i = 0;

    
    audio.src = tracks[i]

    /* for(var track in tracks) {
        var link = tracks[track];
        if(typeof link === "function" || typeof link === "number") continue;
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var song = this.getAttribute('href');
            run(song, audio, this);
        });} */

    play.addEventListener("click", function(){
        
        pause.className = "btnpausesi"
        
        
        audio.play();
        audio.volume = 0.90;    
        play.className = "btnplayno"
        console.log(i)
            /* audio.addEventListener('ended',function(e) {
                for(var track in tracks) {
                var link = tracks[track];
                var nextTrack = parseInt(track) + 1;
                if(typeof link === "function" || typeof link === "number") continue;
                if(!this.src) this.src = tracks[0];
                if(track == (tracks.length - 1)) nextTrack = 0;
                                            console.log(nextTrack);
                    if(link.getAttribute('href') === this.src) {
                    var nextLink = tracks[nextTrack];
                    run(nextLink.getAttribute('href'), audio, nextLink);
                    break; }
                }
            }); */
    });

    pause.addEventListener ("click", function(){
        play.className ="btnplay";
        pause.className = "btnpause"
        audio.pause ()
    });


    next.addEventListener ("click", function(hola){

        audio.src = tracks [++i] 
        if (i >= 4){
            i = 0
        } 
        audio.load()
        audio.play ()  
        console.log (i)
    })
    
    
    prev.addEventListener ("click", function(){
        audio.src = tracks [--i]
        if (i < 0){
            i = 3
        }
        audio.load()
        audio.play ()
        console.log (i)
        })    
}())