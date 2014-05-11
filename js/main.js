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
            $("#left-menu div").css("display","none");
            $("#menuaccueil").css("display","block");
            $("#head div").css("display","none");
            $("#headaccueil").css("display","block");
            break;
        
        case 1:
            console.log("Reseau");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurReseau").css("display","block");
            $("#left-menu div").css("display","none");
            $("#menureseau").css("display","block");
            $("#head div").css("display","none");
            $("#headreseau").css("display","block");
            $("#aproposreseau div").css("display","none");
            $("#aproposreseau").css("display","block");
            $("#testreseau div").css("display","none");
            $("#testreseau").css("display","block");
            break;
            
        case 2:
            console.log("Sys Admin");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurSysAdmin").css("display","block");
            $("#left-menu div").css("display","none");
            $("#menusysadmin").css("display","block");
            $("#head div").css("display","none");
            $("#headsysadmin").css("display","block");
            break;
            
        case 3:
            console.log("Suivis de problèmes");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurbugtracker").css("display","block");
            $("#left-menu div").css("display","none");
            $("#menubugtracker").css("display","block");
            $("#head div").css("display","none");
            $("#headbugtracker").css("display","block");
            break;
        
        case 4:
            console.log("Wiki");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurwiki").css("display","block");
            $("#left-menu div").css("display","none");
            $("#menuwiki").css("display","block");
            $("#head div").css("display","none");
            $("#headwiki").css("display","block");
            break;
            
        case 5:
            console.log("Gestion de projet");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurprojet").css("display","block");
            $("#left-menu div").css("display","none");
            $("#menuprojet").css("display","block");
            $("#head div").css("display","none");
            $("#headprojet").css("display","block");
            break;
            
        case 6:
            console.log("Parametre");
            $("li").removeClass("current");
            $(clickedElementParent).addClass("current");
            $("#contenu div").css("display","none");
            $("#conteneurparametre").css("display","block");
            $("#left-menu div").css("display","none");
            $("#menuparametre").css("display","block");
            $("#head div").css("display","none");
            $("#headparametre").css("display","block");
            break;
            
        default:
            console.log("Pas un choix valide");
            break;
    }
}