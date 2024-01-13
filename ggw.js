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