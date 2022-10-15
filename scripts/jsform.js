/* function validateForm() {
    let x = document.forms["myForm"]["fname","lname"].value;
    if (x == "") {
      alert("Completar los campos requeridos");
      return false;
    }
  } */

  function validateForm() {
    let valid = true;
    let msg="Falta completar campos requeridos:\n";
    if ( document.forms["myForm"]["fname"].value == "" ) {
      msg+="Nombre\n";
      valid = false;
    }
    if ( document.forms["myForm"]["lname"].value == "" ) {
      msg+="Apellido\n";
      valid = false;
    }
    if ( document.forms["myForm"]["adress"].value == "" ) {
      msg+="Dirección\n";
      valid = false;
    }
    if ( document.forms["myForm"]["CP"].value == "" ) {
      msg+="Código postal\n";
      valid = false;
    }
    if ( document.forms["myForm"]["cell"].value == "" ) {
      msg+="Celular\n";
      valid = false;
    }
    if ( document.forms["myForm"]["email"].value == "" ) {
      msg+="Email\n";
      valid = false;
    }
    if (!valid) alert(msg);
    return valid;
  }