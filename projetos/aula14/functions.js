function chBackcolor(color) {
   document.body.style.background = color;
}

function toggleTable(){
    if(document.getElementById("tabela").style.display == 'none') {
      return document.getElementById("tabela").style.display = 'block'
    } 
    else {
      return document.getElementById("tabela").style.display = 'none'
    }
  }