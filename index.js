new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
 //javaScript groupe 
 document.getElementById('groupe_A').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
  document.getElementById('groupeA').style.display = "block"; 
  document.getElementById('groupeB').style.display = "none"; 
  document.getElementById('groupeC').style.display = "none"; 
  document.getElementById('groupeD').style.display = "none"; 
  document.getElementById('groupeE').style.display = "none"; 
  document.getElementById('groupeF').style.display = "none"; 
  document.getElementById('groupeG').style.display = "none"; 
  document.getElementById('groupeH').style.display = "none"; 
  //bloquer les volet 2 3 4
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('actu').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
});

document.getElementById('groupe_B').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "block"; 
document.getElementById('groupeC').style.display = "none"; 
document.getElementById('groupeD').style.display = "none"; 
document.getElementById('groupeE').style.display = "none"; 
document.getElementById('groupeF').style.display = "none"; 
document.getElementById('groupeG').style.display = "none"; 
document.getElementById('groupeH').style.display = "none";  
//bloquer les volet 2 3 4
document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
document.getElementById('pagedef').style.display = "none";
document.getElementById('actu').style.display = "none";
document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
});
document.getElementById('groupe_C').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "none"; 
document.getElementById('groupeC').style.display = "block"; 
document.getElementById('groupeD').style.display = "none"; 
document.getElementById('groupeE').style.display = "none"; 
document.getElementById('groupeF').style.display = "none"; 
document.getElementById('groupeG').style.display = "none"; 
document.getElementById('groupeH').style.display = "none";
//ploquer les volet 2 3 4
document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
document.getElementById('pagedef').style.display = "none";
document.getElementById('actu').style.display = "none";
document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
});
document.getElementById('groupe_D').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "none"; 
document.getElementById('groupeC').style.display = "none"; 
document.getElementById('groupeD').style.display = "block"; 
document.getElementById('groupeE').style.display = "none"; 
document.getElementById('groupeF').style.display = "none"; 
document.getElementById('groupeG').style.display = "none"; 
document.getElementById('groupeH').style.display = "none";  
//deploquer les volet 2 3 4
document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
document.getElementById('pagedef').style.display = "none";
document.getElementById('actu').style.display = "none";
document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
});
document.getElementById('groupe_E').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "none"; 
document.getElementById('groupeC').style.display = "none"; 
document.getElementById('groupeD').style.display = "none"; 
document.getElementById('groupeE').style.display = "block"; 
document.getElementById('groupeF').style.display = "none"; 
document.getElementById('groupeG').style.display = "none"; 
document.getElementById('groupeH').style.display = "none"; 
//ploquer les volet 2 3 4
document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
document.getElementById('pagedef').style.display = "none";
document.getElementById('actu').style.display = "none";
document.getElementById('volet4').style.display = "none";
document.getElementById('volet3').style.display = "none";
});
document.getElementById('groupe_F').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "none"; 
document.getElementById('groupeC').style.display = "none"; 
document.getElementById('groupeD').style.display = "none"; 
document.getElementById('groupeE').style.display = "none"; 
document.getElementById('groupeF').style.display = "block"; 
document.getElementById('groupeG').style.display = "none"; 
document.getElementById('groupeH').style.display = "none";
//
document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
document.getElementById('pagedef').style.display = "none"; 
document.getElementById('actu').style.display = "none";
document.getElementById('volet4').style.display = "none";
document.getElementById('volet3').style.display = "none";
});
document.getElementById('groupe_G').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "none"; 
document.getElementById('groupeC').style.display = "none"; 
document.getElementById('groupeD').style.display = "none"; 
document.getElementById('groupeE').style.display = "none"; 
document.getElementById('groupeF').style.display = "none"; 
document.getElementById('groupeG').style.display = "block"; 
document.getElementById('groupeH').style.display = "none"; 
// 
document.getElementById('Classement').style.display = "none";
document.getElementById('pagedef').style.display = "none";
document.getElementById('actu').style.display = "none"; 
document.getElementById('volet4').style.display = "none";
document.getElementById('volet3').style.display = "none";


});
document.getElementById('groupe_H').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "block";
document.getElementById('groupeA').style.display = "none"; 
document.getElementById('groupeB').style.display = "none"; 
document.getElementById('groupeC').style.display = "none"; 
document.getElementById('groupeD').style.display = "none"; 
document.getElementById('groupeE').style.display = "none"; 
document.getElementById('groupeF').style.display = "none"; 
document.getElementById('groupeG').style.display = "none"; 
document.getElementById('groupeH').style.display = "block";
//
document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
document.getElementById('pagedef').style.display = "none";
document.getElementById('actu').style.display = "none";
document.getElementById('volet4').style.display = "none";
document.getElementById('volet3').style.display = "none"; 

});


//page difilantes
function hakimi() {
  document.getElementById('pagedef').style.display = "block";
  document.getElementById('actu').style.display = "none";
  //bloquer volet2 ,3 et 4
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  
   
  document.getElementById('hakimi').style.display = "block"; 
  document.getElementById('yassine').style.display = "none";
  document.getElementById('monde').style.display = "none"; 
  document.getElementById('argentine').style.display = "none"; 
  document.getElementById('MvsC').style.display = "none"; 
  document.getElementById('usa').style.display = "none";

}
function argentine() {
  document.getElementById('pagedef').style.display = "block";
  document.getElementById('actu').style.display = "none";
  //bloquer volet2 ,3 et 4
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
   
  document.getElementById('hakimi').style.display = "none"; 
  document.getElementById('yassine').style.display = "none";
  document.getElementById('monde').style.display = "none"; 
  document.getElementById('argentine').style.display = "block"; 
  document.getElementById('MvsC').style.display = "none"; 
  document.getElementById('usa').style.display = "none";
    
}

function yassine() {
  document.getElementById('pagedef').style.display = "block";
  document.getElementById('actu').style.display = "none";
  //bloquer volet2 ,3 et 4
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
   
  document.getElementById('hakimi').style.display = "none"; 
  document.getElementById('yassine').style.display = "block";
  document.getElementById('monde').style.display = "none"; 
  document.getElementById('argentine').style.display = "none"; 
  document.getElementById('MvsC').style.display = "none"; 
  document.getElementById('usa').style.display = "none";
  
}
function monde() {
  document.getElementById('pagedef').style.display = "block";
  document.getElementById('actu').style.display = "none";
  //bloquer volet2 ,3 et 4
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  
   
  document.getElementById('hakimi').style.display = "none"; 
  document.getElementById('yassine').style.display = "none";
  document.getElementById('monde').style.display = "block"; 
  document.getElementById('argentine').style.display = "none"; 
  document.getElementById('MvsC').style.display = "none"; 
  document.getElementById('usa').style.display = "none";
}

function MvsC() {
  document.getElementById('pagedef').style.display = "block";
  document.getElementById('actu').style.display = "none";
  //bloquer volet2 ,3 et 4
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  
   
  document.getElementById('hakimi').style.display = "none"; 
  document.getElementById('yassine').style.display = "none";
  document.getElementById('monde').style.display = "none"; 
  document.getElementById('argentine').style.display = "none"; 
  document.getElementById('MvsC').style.display = "block"; 
  document.getElementById('usa').style.display = "none";
  
}
function usa() {
  document.getElementById('pagedef').style.display = "block";
  document.getElementById('actu').style.display = "none";
  //bloquer volet2 ,3 et 4
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  
   
  document.getElementById('hakimi').style.display = "none"; 
  document.getElementById('yassine').style.display = "none";
  document.getElementById('monde').style.display = "none"; 
  document.getElementById('argentine').style.display = "none"; 
  document.getElementById('MvsC').style.display = "none"; 
  document.getElementById('usa').style.display = "block";
  
}
//Volet 3 et 4
// Si en clique sur l'image 
document.getElementById('imageCanada').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "block";
  document.getElementById('imgMa').style.display = "none";
  document.getElementById('imgBe').style.display = "none";
  document.getElementById('imgCr').style.display = "none";
  //Volet 4
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "block";
  document.getElementById('TB').style.display = "none";
});
document.getElementById('imageMaroc').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "none";
  document.getElementById('imgMa').style.display = "block";
  document.getElementById('imgBe').style.display = "none";
  document.getElementById('imgCr').style.display = "none";
  //Volet 4
  document.getElementById('GM').style.display = "block"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
  document.getElementById('Classement').style.display = "none";
  
});
document.getElementById('imageBelgique').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "none";
  document.getElementById('imgMa').style.display = "none";
  document.getElementById('imgBe').style.display = "block";
  document.getElementById('imgCr').style.display = "none";
  //Volet 4
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "block"; 
  
});
document.getElementById('imageCroatie').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "none";
  document.getElementById('imgMa').style.display = "none";
  document.getElementById('imgBe').style.display = "none";
  document.getElementById('imgCr').style.display = "block";
  //Volet 4
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "block";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
  
});
// Si en clique sur le nom du pays
document.getElementById('nameCanada').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "block";
  document.getElementById('imgMa').style.display = "none";
  document.getElementById('imgBe').style.display = "none";
  document.getElementById('imgCr').style.display = "none";
  //Volet 4
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "block";
  document.getElementById('TB').style.display = "none";
})

document.getElementById('nameMaroc').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "none";
  document.getElementById('imgMa').style.display = "block";
  document.getElementById('imgBe').style.display = "none";
  document.getElementById('imgCr').style.display = "none";
  //Volet 4
  document.getElementById('GM').style.display = "block"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('nameBelgique').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "none";
  document.getElementById('imgMa').style.display = "none";
  document.getElementById('imgBe').style.display = "block";
  document.getElementById('imgCr').style.display = "none";
  //Volet 4
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "block"; 
})
document.getElementById('nameCroatie').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "block";
  document.getElementById('volet4').style.display = "block";
  document.getElementById('imgCa').style.display = "none";
  document.getElementById('imgMa').style.display = "none";
  document.getElementById('imgBe').style.display = "none";
  document.getElementById('imgCr').style.display = "block";
  //Volet 4
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "block";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none";  
})
//Fiche technique
document.getElementById('nsiri').addEventListener("click", function() {

  document.getElementById('Fnasiri').style.display = "block";
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('yassine_bouno').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "block";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('ahmed_reda').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "block";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('mounir_mhmdi').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "block";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('achraf').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none ";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "block";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('nousir').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "block";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('nayf').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "block";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('roman').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "block";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('dari').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "block";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('jawad').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "block";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('yahya').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "block";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('bader').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "block";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('soufyan').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "block";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('sabiri').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "block";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('salim').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "block";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('ounahi').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "block";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('bilal').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "block";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('jabran').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "block";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('ziyach').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "block";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('boufal').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "block";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('anas').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "block";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('abde').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "block";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('ziko').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "block";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('chaair').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "block";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('nsiri').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fnasiri').style.display = "block";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('chdira').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "none";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "block";
  
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
document.getElementById('hamd').addEventListener("click", function() {
  document.getElementById('Fyassin').style.display = "none";
  document.getElementById('Fmunir').style.display = "none";
  document.getElementById('Fahmed').style.display = "none";
  document.getElementById('Fhakimi').style.display = "none";
  document.getElementById('Fnoussir').style.display = "none";
  document.getElementById('Fromain').style.display = "none";
  document.getElementById('Fnayef').style.display = "none";
  document.getElementById('Fbader').style.display = "none";
  document.getElementById('Fjawad').style.display = "none";
  document.getElementById('Fdari').style.display = "none";
  document.getElementById('Fyahya').style.display = "none";
  document.getElementById('Fsofyan').style.display = "none";
  document.getElementById('Fziyach').style.display = "none";
  document.getElementById('Founahi').style.display = "none";
  document.getElementById('Fanas').style.display = "none";
  document.getElementById('Filias').style.display = "none";
  document.getElementById('Fnasiri').style.display = "none";
  document.getElementById('Fziko').style.display = "none";
  document.getElementById('Fselim').style.display = "none";
  document.getElementById('Fboufal').style.display = "none";
  document.getElementById('Fjabran').style.display = "none";
  document.getElementById('Fhamda').style.display = "block";
  document.getElementById('Fsabiri').style.display = "none";
  document.getElementById('Fabde').style.display = "none";
  document.getElementById('Fbilal').style.display = "none";
  document.getElementById('Fwalid').style.display = "none";
  //arreter le display du tableaux jours
  document.getElementById('GM').style.display = "none"; 
  document.getElementById('GCR').style.display = "none";
  document.getElementById('GC').style.display = "none";
  document.getElementById('TB').style.display = "none"; 
})
//volet 5
function Franc() {
  document.getElementById('actu').style.display = "block";
   //volet2 ,3 et 4
   document.getElementById('Volet2').style.display = "none";
   document.getElementById('volet3').style.display = "none";
   document.getElementById('volet4').style.display = "none";
  //volet1 page defillant
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  //volet5
  document.getElementById('franc').style.display = "block"; 
  document.getElementById('marbel').style.display = "none";
  document.getElementById('lion').style.display = "none"; 
  document.getElementById('unis').style.display = "none"; 
  document.getElementById('costa').style.display = "none"; 
  document.getElementById('violence').style.display = "none";
}
function Marbel() {
  document.getElementById('actu').style.display = "block";
   //volet2 ,3 et 4
   document.getElementById('Volet2').style.display = "none";
   document.getElementById('volet3').style.display = "none";
   document.getElementById('volet4').style.display = "none";
  //volet1 page defillant
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  //volet5
  document.getElementById('franc').style.display = "none"; 
  document.getElementById('marbel').style.display = "block";
  document.getElementById('lion').style.display = "none"; 
  document.getElementById('unis').style.display = "none"; 
  document.getElementById('costa').style.display = "none"; 
  document.getElementById('violence').style.display = "none";
}
function Lion() {
  document.getElementById('actu').style.display = "block";
   //volet2 ,3 et 4
   document.getElementById('Volet2').style.display = "none";
   document.getElementById('volet3').style.display = "none";
   document.getElementById('volet4').style.display = "none";
  //volet1 page defillant
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  //volet5
  document.getElementById('franc').style.display = "none"; 
  document.getElementById('marbel').style.display = "none";
  document.getElementById('lion').style.display = "block"; 
  document.getElementById('unis').style.display = "none"; 
  document.getElementById('costa').style.display = "none"; 
  document.getElementById('violence').style.display = "none";
}
function Costa() {
  document.getElementById('actu').style.display = "block";
   //volet2 ,3 et 4
   document.getElementById('Volet2').style.display = "none";
   document.getElementById('volet3').style.display = "none";
   document.getElementById('volet4').style.display = "none";
  //volet1 page defillant
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  //volet5
  document.getElementById('franc').style.display = "none"; 
  document.getElementById('marbel').style.display = "none";
  document.getElementById('lion').style.display = "none"; 
  document.getElementById('unis').style.display = "none"; 
  document.getElementById('costa').style.display = "block"; 
  document.getElementById('violence').style.display = "none";
}
function Unis() {
  document.getElementById('actu').style.display = "block";
   //volet2 ,3 et 4
   document.getElementById('Volet2').style.display = "none";
   document.getElementById('volet3').style.display = "none";
   document.getElementById('volet4').style.display = "none";
  //volet1 page defillant
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  //volet5
  document.getElementById('franc').style.display = "none"; 
  document.getElementById('marbel').style.display = "none";
  document.getElementById('lion').style.display = "none"; 
  document.getElementById('unis').style.display = "block"; 
  document.getElementById('costa').style.display = "none"; 
  document.getElementById('violence').style.display = "none";
  
}
function Violence() {
  document.getElementById('actu').style.display = "block";
   //volet2 ,3 et 4
   document.getElementById('Volet2').style.display = "none";
   document.getElementById('volet3').style.display = "none";
   document.getElementById('volet4').style.display = "none";
  //volet1 page defillant
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('Matches').style.display = "none";
  //volet5
  document.getElementById('franc').style.display = "none"; 
  document.getElementById('marbel').style.display = "none";
  document.getElementById('lion').style.display = "none"; 
  document.getElementById('unis').style.display = "none"; 
  document.getElementById('costa').style.display = "none"; 
  document.getElementById('violence').style.display = "block";

}
//button
document.getElementById('bVolet5').addEventListener("click", function() {
  document.getElementById('Volet5').style.display = "none";
})
document.getElementById('bVolet3').addEventListener("click", function() {
  document.getElementById('volet3').style.display = "none";
})
document.getElementById('bVolet2').addEventListener("click", function() {
  document.getElementById('Volet2').style.display = "none";
})
//classment
document.getElementById('classemen').addEventListener("click", function() {
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Classement').style.display = "block";
  document.getElementById('Matches').style.display = "none";
  document.getElementById('actu').style.display = "none";
  
})
//matches
document.getElementById('matches').addEventListener("click", function() {
  document.getElementById('pagedef').style.display = "none";
  document.getElementById('Volet2').style.display = "none";
  document.getElementById('volet4').style.display = "none";
  document.getElementById('volet3').style.display = "none";
  document.getElementById('Matches').style.display = "block";
  document.getElementById('Classement').style.display = "none";
  document.getElementById('actu').style.display = "none";
})
//  la suppri-----------
var cases4=document.createElement("td");
var c= document.createElement("button");
c.type="button";
c.onclick=function(){
  this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
}
c.innerHTML="Supprimer";
cases4.appendChild(c);
btn_supprimer.appendChild(cases3);
// ------------------------- supprimer un element 
function supprimer(btn_supprimer){
btn_supprimer.parentNode.parentNode.parentNode.removeChild(btn_supprimer.parentNode.parentNode);
}
function modifier(btn_modifier){
document.getElementById("btn_modifier").style.visibility="none";
var N = document.getElementById("Achraf");
var N_M = N.innerHTML;
N.innerHTML = "<input type=text id='N_text"+btn_modifier+"' value='"+N_M+"'>"
}
function modifier1(btn_modifier1){
document.getElementById("btn_modifier1").style.visibility="none";
var A = document.getElementById("yassin");
var A_N = A.innerHTML;
A.innerHTML = "<input type=text id='A_text"+btn_modifier1+"' value='"+A_N+"'>"
}
function modifier2(btn_modifier2){
document.getElementById("btn_modifier2").style.visibility="none";
var B = document.getElementById("Sofyan");
var B_N = B.innerHTML;
B.innerHTML = "<input type=text id='B_text"+btn_modifier2+"' value='"+B_N+"'>"
}
function modifier3(btn_modifier3){
document.getElementById("btn_modifier3").style.visibility="none";  
var C = document.getElementById("hakim");
var C_N = C.innerHTML;
C.innerHTML = "<input type=text id='C_text"+btn_modifier3+"' value='"+C_N+"'>"
}
function modifier4(btn_modifier4){
document.getElementById("btn_modifier4").style.visibility="none";  
var D = document.getElementById("Noussair");
var D_N = D.innerHTML;
D.innerHTML = "<input type=text id='D_text"+btn_modifier4+"' value='"+D_N+"'>"
}
function modifier5(btn_modifier5){
document.getElementById("btn_modifier5").style.visibility="none";  
var E = document.getElementById("soufiane");
var E_N = E.innerHTML;
E.innerHTML = "<input type=text id='E_text"+btn_modifier5+"' value='"+E_N+"'>"
}
function modifier6(btn_modifier6){
document.getElementById("btn_modifier6").style.visibility="none";  
var F = document.getElementById("Abderrazak");
var F_N = F.innerHTML;
F.innerHTML = "<input type=text id='F_text"+btn_modifier6+"' value='"+F_N+"'>"
}
function modifier7(btn_modifier7){
document.getElementById("btn_modifier7").style.visibility="none";  
var G = document.getElementById("Abdelhamid");
var G_N = G.innerHTML;
G.innerHTML = "<input type=text id='G_text"+btn_modifier7+"' value='"+G_N+"'>"
}
function modifier8(btn_modifier8){
document.getElementById("btn_modifier8").style.visibility="none";  
var H = document.getElementById("youssef");
var H_N = H.innerHTML;
H.innerHTML = "<input type=text id='H_text"+btn_modifier7+"' value='"+H_N+"'>"
}
function modifier9(btn_modifier9){
document.getElementById("btn_modifier9").style.visibility="none";  
var I = document.getElementById("selim");
var I_N = I.innerHTML;
I.innerHTML = "<input type=text id='I_text"+btn_modifier9+"' value='"+I_N+"'>"
}
function modifier10(btn_modifier10){
document.getElementById("btn_modifier10").style.visibility="none";  
var K = document.getElementById("Anass");
var K_N = K.innerHTML;
K.innerHTML = "<input type=text id='K_text"+btn_modifier10+"' value='"+K_N+"'>"
}
function modifier11(btn_modifier10){
document.getElementById("btn_modifier11").style.visibility="none";  
var Z = document.getElementById("DARI");
var Z_N = Z.innerHTML;
Z.innerHTML = "<input type=text id='Z_text"+btn_modifier11+"' value='"+Z_N+"'>"
}
function modifier12(btn_modifier12){
document.getElementById("btn_modifier12").style.visibility="none";  
var M = document.getElementById("Badr");
var M_N = M.innerHTML;
M.innerHTML = "<input type=text id='M_text"+btn_modifier12+"' value='"+M_N+"'>"
}
function modifier13(btn_modifier13){
document.getElementById("btn_modifier13").style.visibility="none";  
var Q = document.getElementById("jawad");
var Q_N = Q.innerHTML;
Q.innerHTML = "<input type=text id='Q_text"+btn_modifier13+"' value='"+Q_N+"'>"
}
function modifier14(btn_modifier14){
document.getElementById("btn_modifier14").style.visibility="none";  
var R = document.getElementById("reda");
var R_N = R.innerHTML;
R.innerHTML = "<input type=text id='R_text"+btn_modifier14+"' value='"+R_N+"'>"
}

function ajouter(){
var table= document.getElementById("table");
newRow = table.insertRow(table.length);

var buttonM = document.createElement("button");
buttonM.innerText = "Modifier";
buttonM.className = "btn_modifier";

var buttonS = document.createElement("button");
buttonS.innerText = "Supprimer";
buttonS.className = "btn_supprimer";

cell1 =  newRow.insertCell(0);
cell2 =  newRow.insertCell(1);
cell3 =  newRow.insertCell(2);
cell4 =  newRow.insertCell(3);
// cell2.className = "name";
txt = document.getElementById("txt").value;

cell3.appendChild(buttonM);
cell4.appendChild(buttonS);

/* btn_modifier = document.getElementById("btn_modifier");
btn_supprimer = document.getElementById(" btn_supprimer");*/
cell2.innerHTML=txt;
buttonS.addEventListener("click", (event) => {
    buttonS.parentNode.parentNode.remove(event.target);
    });

    buttonM.addEventListener("click", (event) => {

        });



}

