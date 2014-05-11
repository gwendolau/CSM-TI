function changeSection(sectionNumber, clickedElement) {
    "use strict";
    var clickedElementParent = $(clickedElement.parentNode);
    
    switch (sectionNumber) {
        case 0:
            console.log("Accueil");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurAccueil").css("display","block");
            break;
        
        case 1:
            console.log("Reseau");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurReseau").css("display","block");
            break;
            
        case 2:
            console.log("Sys Admin");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurSysAdmin").css("display","block");
            break;
            
        default:
            console.log("Pas un choix valide");
            break;
    }
}