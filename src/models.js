import { zitatSelektiert } from "./btnUndEingabeActionen.js";

const zitatListe = [];

export function showZitat()
{
    document.querySelector("#zitat-items").innerHTML = "";
    zitatListe.forEach(zitat => showZitatItem(zitat));

}

function showZitatItem(zitat)
{
    console.log("Show Zitat Item: " + zitat.text);
    const zitatItem =  document.createElement("li");
    zitatItem.innerHTML = zitat.text;
    zitatItem.setAttribute("class", "list-group-item text-royalblue zitat-item");
    if (zitat.löschen){

    }
    zitatItem.addEventListener("click", function() {
        zitatSelektiert(zitat);
    })
    document.querySelector("#zitat-items").appendChild(zitatItem);
}

export default function addZitat(text)
{
    const zitat = {
        text : text,
        bearbeiten : false
    };

    zitatListe.push(zitat);
    console.log(zitatListe.length);
    showZitat();
}


export function deleteZitat(zitat)
{
    const index = zitatListe.findIndex(item => item == zitat);                               // spice Methode braucht einen Start und greift auf den Index zu
    zitatListe.splice(index, 1);
}