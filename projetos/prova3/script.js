var aux = 0;

function getNumber() 
{
  aux++;
  var number = Math.floor(Math.random() * 10);
  var ul = document.getElementById("list");
  var li = document.createElement("li");
  var resultado = "Sorteio #" + aux + " = " + number;
  li.appendChild(document.createTextNode(resultado));
  ul.appendChild(li);
  $('#current').text(number);
}




