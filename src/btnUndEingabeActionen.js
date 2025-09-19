import addZitat, { deleteZitat, showZitat } from "./models";

let selektiertesZitat;

export function renderUI()
{
    showZitat();
}

export default function registerClickBtn()
{
    console.log("Register Clickbtn");
    document.querySelector("#zitat-neu").addEventListener("click", zitatNeu);
    document.querySelector("#zitat-bearbeiten").addEventListener("click", zitatBearbeiten);
    document.querySelector("#zitat-loeschen").addEventListener("click", zitatLoeschen);
    document.querySelector(".zitat-item").addEventListener("click", zitatSelektiert);
    
}

function zitatNeu()
{
    const zitatInput = document.querySelector("#zitat-text");
    const zitatText = zitiatInput.value;
    console.log("Neues Zitat: " + zitatText);
    addZitat(zitatText);
    zitatInput.value = "";
}

function zitatBearbeiten()
{
    console.log("Zitat Bearbeiten: " + selektiertesZitat);
    selektiertesZitat.bearbeiten = !selektiertesZitat.bearbeiten;                   // WILL ICH DAS SO???
    renderUI();

}

function zitatLoeschen()
{
    console.log("Zitat Löschen: ");
    deleteZitat(selektiertesZitat);
    selektiertesZitat = null;
    renderUI();
}

export function zitatSelektiert(zitat)
{
    console.log("Zitat Selektieren: " + zitat.text);
    selektiertesZitat = zitat;
}

