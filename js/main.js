/****************************************************
*   @function changeSection                         *
*   @param sectionName - STRING                     *
*   @param clickedElement - DOM Object              *
*                                                   *
*   This function changes the content depending     *
*   on what section was clicked.                    *
*****************************************************/
function changeSection(sectionName, clickedElement) {
    "use strict";
    
    var clickedElementParent = $(clickedElement.parentNode);
    var clickedSectionNameElement = $("#head"+sectionName);
    var clickedLeftMenuElement = $("#leftMenu"+sectionName);
    var clickedSectionContent = $("#conteneur"+sectionName);
    
    //  First, we change the page Header
    $("#head div").removeClass("headActive animated fadeInRight");
    clickedSectionNameElement.addClass("headActive animated fadeInRight");
    
    //  Then, we change the menu's current element
    $("#menu li").removeClass("current");
    clickedElementParent.addClass("current");
    
    //  Then the left-menu's content
    $("#left-menu div").removeClass("leftMenuActive");
    clickedLeftMenuElement.addClass("leftMenuActive");
    
    // And at last, the section's main content
    $("#contenu div").removeClass("contentActive");
    clickedSectionContent.addClass("contentActive");
    
}

$(document).ready(function () {
    console.log($("#conteneurAccueil").html())
});