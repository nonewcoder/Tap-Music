window.addEventListener('load',()=>{

    const sounds=document.querySelectorAll(".sound");
    const tiles=document.querySelectorAll("#tiles-container div");
    const visual= document.querySelector(".visual");

    const colors=['#FFFF00','#da909d','#FF0000','#87ceeb','#00FF00','#0000FF','#60e0cb','#8f8fb4'];


    // for playing sounds

    tiles.forEach((tile,index)=>{
        tile.addEventListener("click",()=>{
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index);
        });
    });
    
    const createBubbles=(index)=>{

        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';

        bubble.addEventListener("animationend",function(){
            visual.removeChild(this);
        })
    };


});