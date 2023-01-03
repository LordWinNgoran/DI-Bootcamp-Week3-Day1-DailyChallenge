

/****************************DOM tree***************** */


/**
 * @author: N'goran Kouadio Jean Cyrille
 * @description: In this exercise we will be creating a webpage with a black background 
 * as the universe and we will fill the universe with planets and their moons.
 * @param:fruits: Array
 * Date : 03/01/2023
 */

//1 Create an array which value is the planets of the solar system.

let system_solar = ["Mercury","Venus","Earth","Mars","Jupiter","Saturn","Uranus","Neptune"]

/* 2 For each planet in the array, create a 
<div> using createElement. This div should have a class named "planet". */

/* 3 Each planet should have a different background color. (Hint: you could add 
a new class to each planet - each class containing a different background-color). */

//4 Finally append each div to the <section> in the HTML (presented below).
let putPlanet=document.getElementsByTagName("section")[0]
system_solar.forEach((element,index )=> {
        //We create a div for each planet
        let creation=document.createElement('div')
        //We add three class to each planet define in the html file
        creation.classList.add("planet","couleur",element);
        //we append each planet to the section
        putPlanet.appendChild(creation)
        //We change the text content to put a name view on the planet
        creation.textContent=element
});

