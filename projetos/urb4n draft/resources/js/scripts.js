

function toggleCollapse()
{
    if(document.getElementById("hotday").style.maxHeight == '30px') 
    {
      document.getElementById("hotday").style.maxHeight = '50vh'
      document.getElementById("caron").className = "caronopen"; 
    } 
    else 
    {
      document.getElementById("hotday").style.maxHeight = '30px'
      document.getElementById("caron").className = "caronclosed"; 
    }
  }


