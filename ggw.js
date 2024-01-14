// https://stackoverflow.com/questions/33967140/change-html-according-to-select

$("select").on("change", function() {
    $(this).nextAll().remove();
    $(this).after("</br></br><div class=\"characterSelectIcon\"><img src=\"images/" + $(this).prop("value") + "_Icon.jpg\" alt=\"" + $(this).prop("value") + " Icon\" style=\"width: 125px;height:125px;\"></img></div>");
});

{/* <img src="images/Unknown_Icon.jpg" alt="Unknown Icon" style="width: 125px;height: 125px;"></img> */}

// https://softwareengineering.stackexchange.com/questions/340355/should-i-reduce-event-listeners-by-making-functions-more-complex
// create some kind of container or dictionary (character: boolean) that we can check to see whether or not the icon needs to be changed to spiral abyss https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
// would have to change ID slightly so that we can better check against; try data-name https://www.w3schools.com/tags/att_global_data.asp

var dict = {
    "Aether": true,
    "Albedo": true,
    "Alhaitham": true,
    "Aloy": true,
    "Amber": true,
    "Ayaka": true,
    "Ayato": true,
    "Baizhu": true,
    "Barbara": true,
    "Beidou": true,
    "Bennett": true,
    "Candace": true,
    "Charlotte": true,
    "Chevreuse": true,
    "Chongyun": true,
    "Collei": true,
    "Cyno": true,
    "Dainsleif": true,
    "Dehya": true,
    "Diluc": true,
    "Diona": true,
    "Dori": true,
    "Eula": true,
    "Faruzan": true,
    "Fischl": true,
    "Freminet": true,
    "Furina": true,
    "Gaming": true,
    "Ganyu": true,
    "Gorou": true,
    "Heizou": true,
    "HuTao": true,
    "Itto": true,
    "Jean": true,
    "Kaeya": true,
    "Kaveh": true,
    "Kazuha": true,
    "Keqing": true,
    "Kirara": true,
    "Klee": true,
    "Kokomi": true,
    "Layla": true,
    "Lisa": true,
    "Lumine": true,
    "Lynette": true,
    "Lyney": true,
    "Mika": true,
    "Mona": true,
    "Nahida": true,
    "Navia": true,
    "Neuvillette": true,
    "Nilou": true,
    "Ningguang": true,
    "Noelle": true,
    "Paimon": true,
    "Qiqi": true,
    "Raiden": true,
    "Razor": true,
    "Rosaria": true,
    "Sara": true,
    "Sayu": true,
    "Shenhe": true,
    "Shinobu": true,
    "Sucrose": true,
    "Tartaglia": true,
    "Thoma": true,
    "Tignari": true,
    "Venti": true,
    "Wanderer": true,
    "Wriothesley": true,
    "Xiangling": true,
    "Xianyun": true,
    "Xiao": true,
    "Xingqiu": true,
    "Xinyan": true,
    "YaeMiko": true,
    "Yanfei": true,
    "Yaoyao": true,
    "Yelan": true,
    "Yoimiya": true,
    "YunJin": true,
    "Zhongli": true
};

let spiralCheck = true;
let characterName = "";
function switchImage(character) {
    characterName = character.getAttribute("data-name");
    // loopTest(character);

    if (dict[characterName]) {
        character.src = "images/SpiralAbyss_Cropped.jpg";
        dict[characterName] = false;
    }
    else {
        character.src = "images/" + characterName + "_Icon.jpg";
        dict[characterName] = true;
    }
}

// making listeners
let iconColl = document.getElementsByClassName("guessIcon");

for (let i = 0; i < iconColl.length; i++) {
    // looping through each guess icon element (the img)

    // one guess icon, the current one. it is an element
    // the event listener listens for a click on the element and executes switchImage with the element as the parameter
    // solution from: https://stackoverflow.com/questions/16310423/addeventlistener-calls-the-function-without-me-even-asking-it-to
    iconColl[i].addEventListener("click", () => {switchImage(iconColl[i])});
    // loopTest(iconColl[i]);
}

function resetBoard() {
    for (let i = 0; i < iconColl.length; i++) {
        characterName = iconColl[i].getAttribute("data-name");

        // if the character's portrait is set to spiral abyss
        if(!dict[characterName]) {
            iconColl[i].src = "images/" + characterName + "_Icon.jpg";
            dict[characterName] = true;
            // loopTest(iconColl[i]);
        }
        else {
            continue;
        }
    }

    // document.getElementById("testP").innerHTML += "Button Pressed";
}

function loopTest(iconElement) {
    document.getElementById("testP").innerHTML += iconElement.getAttribute("data-name");
}

// adding a listener for the button
document.getElementById("resetButton").addEventListener("click", () => {resetBoard()});

// if i need to crop the images https://cloudinary.com/guides/automatic-image-cropping/5-ways-to-crop-images-in-html-css