//mouvement abonnement
window.addEventListener("load", () =>{
    

    //version 1 sans boucle for

    let confort = document.getElementById('confort');
let bouton = document.getElementById("bouton1");
let description = document.getElementById("texte1");
console.log(confort);
console.log(bouton);
console.log(description);

bouton.addEventListener('click' , () => {
    if((confort.style.height = "350px")&&(description.style.display = "none")) {
    confort.style.animation = "2s slidedown forwards";
    bouton.style.animation = "2s boutondown forwards";
    (description.style.display = "inline-block",
    setTimeout(2000)); 
    }else {
        confort.style.animation = "2s slideup forwards";
    bouton.style.animation = "2s boutonup forwards";
    (description.style.display = "none",
    setTimeout(2000));
    }
})


    //Animation Premium

let premium = document.getElementById('premium');
let boton = document.getElementById("bouton2");
let descript = document.getElementById("texte2");
console.log(premium);
console.log(boton);
console.log(descript);

boton.addEventListener('click' , () => {
    if((premium.style.height = "350px")&&(descript.style.display = "none")) {
    premium.style.animation = "2s slidedown forwards";
    boton.style.animation = "2s boutondown forwards";
    (descript.style.display = "inline-block",
    setTimeout(2000)); 
    } else {
        premium.style.animation = "2s slidedown reverse forwards";
    boton.style.animation = "2s boutondown reverse forwards";
    (descript.style.display = "none",
    setTimeout(2000));
       }
    })

    //Animation all-in

    let allin = document.getElementById('all-in');
    let btn = document.getElementById("bouton3");
    let dscript = document.getElementById("texte3");
    console.log(allin);
    console.log(btn);
    console.log(dscript);
    
    btn.addEventListener('click' , () => {
        if((allin.style.height = "350px")&&(dscript.style.display = "none")) {
        allin.style.animation = "2s slidedown forwards";
        btn.style.animation = "2s boutondown forwards";
        (dscript.style.display = "inline-block",
        setTimeout(2000)); 
        } })
        
    dscript.addEventListener('click' , () =>    {
        if((allin.style.height = "550px")&&(dscript.style.display = "inline-block")) {
        allin.style.animation = "2s slidedown reverse forwards";
        btn.style.animation = "2s boutondown reverse forwards";
        (dscript.style.display = "none",
        setTimeout(2000));
        }})





    let map = document.querySelector(".image");
    let chevrong = document.querySelector(".chevrong");
    let chevrond = document.querySelector(".chevrond");

        map.addEventListener('pointerenter' , () => {
            chevrond.style.animation = "2s slided forwards";
            chevrong.style.animation = "2s slideg forwards";
            // chevrond.style.right = "200px";
            // chevrong.style.right = "300px";
        })
        map.addEventListener('pointerleave' , () => {
            chevrond.style.animation = "2s reslided forwards";
            chevrong.style.animation = "2s reslideg forwards";
            // chevrond.style.right = "300px";
            // chevrong.style.right = "100px";
        })

})