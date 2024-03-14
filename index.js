
            document.oncontextmenu = () => {
  return false
}



document.onkeydown = e => {
    if(event.keyCode == 123)
{
return false;
}

    if(e.ctrlKey && e.keyCode == "S".charCodeAt(0)) {
  return false;
  }

      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
  if(e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
  return false;
  }
  if(e.key == "F12") {
      return false
  }
    if(event.keyCode == 123)
{
  return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0))
{
  return false;
}
}
