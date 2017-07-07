$(document.getElementById("middleImage")).hide();
$(document.getElementById("barDeRecherche")).hide();
$(document.getElementById("barDeRecherche")).hide();
$(document.getElementsByClassName("button")).hide();

document.querySelector('#buttonShow').onclick = function() {
  $(document.getElementById("middleImage")).show();
  $(document.getElementById("buttonShow")).hide();
  $(document.getElementById("barDeRecherche")).show();
  $(document.getElementById("barDeRecherche")).show();
  $(document.getElementsByClassName("button")).show();
}

setTimeout(function() {alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please')}, 10000);

function pushMe(){
  var hu = document.getElementById("barDeRecherche").value;
  document.location.href = "https://www.google.fr/#q=" + hu;
  
}
