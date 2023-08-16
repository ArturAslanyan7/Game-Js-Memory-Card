const emojis = ['🐯','🐯','🦊','🦊','🐻','🐻','🐰','🐰','🦝','🦝','🐷',
'🐷','🐺','🐺','🦁','🦁']


let rendom_emojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1)

for(i = 0; i < emojis.length; i++){
    let div = document.createElement("div")
    div.className = 'item'
    div.innerHTML = emojis[i]
    document.querySelector(".game").appendChild(div)


    div.onclick = function(){
        div.classList.add("Open")
      

        setTimeout(function(){  
          if(document.querySelectorAll('.Open').length > 1){

            if(document.querySelectorAll(".Open")[0].innerHTML ===
            document.querySelectorAll(".Open")[1].innerHTML){

                document.querySelectorAll('.Open')[0].classList.add('Match')
                document.querySelectorAll('.Open')[1].classList.add('Match')

                document.querySelectorAll(".Open")[1].classList.remove("Open")
                document.querySelectorAll(".Open")[0].classList.remove("Open")

                new Audio('./music/win.mp3').play(); return false;

            }
            else{
                document.querySelectorAll(".Open")[1].classList.remove("Open")
                document.querySelectorAll(".Open")[0].classList.remove("Open")
            }

          }
        },1000)
        new Audio('./music/box.mp3').play(); return false;
    }
}