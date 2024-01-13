// several options here for how to go about changing the image based on the value of select
// https://stackoverflow.com/questions/33967140/change-html-according-to-select
// try listener? and then can attempt to do jquery later once everything is working

$("select").on("change", function() {
    // $(this).nextAll("input, label").remove();
    $(this).nextAll().remove();
//     if ($(this).prop("value") === "fischl") {
//         $(this).after("</br></br><label for='name'>Name: </label>" +
//                        "<input type='text' size='10'/>" +
//                        "<label for='gpa'>GPA: </label>" +
//                        "<input type='text' size='10'/>" + $(this).prop("value"));
//     }
//    else {
//         $(this).after("</br></br><label for='name'>Name: </label>" +
//                        "<input type='text' size='10' />" +
//                        "<label for='rank'>Rank: </label>" +
//                        "<input type='text' size='10' />" +
//                        "<label for='department'>Department: </label>" +
//                        "<input type='text' size='10' />");
        //  }
    $(this).after("</br></br><div class=\"characterSelectIcon\"><img src=\"images/" + $(this).prop("value") + "_Icon.jpg\" alt=\"" + $(this).prop("value") + " Icon\" style=\"width: 125px;height:125px;\"></img></div>");
});

{/* <img src="images/Unknown_Icon.jpg" alt="Unknown Icon" style="width: 125px;height: 125px;"></img> */}

// https://softwareengineering.stackexchange.com/questions/340355/should-i-reduce-event-listeners-by-making-functions-more-complex
// create some kind of container or dictionary (character: boolean) that we can check to see whether or not the icon needs to be changed to spiral abyss https://pietschsoft.com/post/2015/09/05/javascript-basics-how-to-create-a-dictionary-with-keyvalue-pairs
// would have to change ID slightly so that we can better check against; try data-name https://www.w3schools.com/tags/att_global_data.asp
let spiralCheck = true;
function switchImage(character) {
    let characterName = character.getAttribute("data-name");

    if (spiralCheck) {
        character.src = "images/SpiralAbyss_Cropped.jpg";
        spiralCheck = false;
    }
    else {
        character.src = "images/" + character.getAttribute("data-name") + "_Icon.jpg";
        spiralCheck = true;
    }
}

// if i need to crop the images https://cloudinary.com/guides/automatic-image-cropping/5-ways-to-crop-images-in-html-css