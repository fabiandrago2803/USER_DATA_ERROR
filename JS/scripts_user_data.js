function funcion1() {
    
  let x = document.getElementById("codpostal").value;
  
  let text;
  if (isNaN(x) || x < 1001 || x > 9431) 
  {    
     
      msg.innerText = 'El código Postal deber ser entre 1001 a 9431'
  }
  else
  {
       msg.innerText = "";
  }

}


function funcion2() {
    
  let x = document.getElementById("telefono").value;
  
  let text;
  if (isNaN(x) || x < 11111111 || x > 99999999) 
  {    
     
      msg.innerText = 'El telefono deber 8 dígitos entre 11111111 a 99999999'
  }
  else
  {
       msg.innerText = "";
  }

}


function funcion3() {
    
  let x = document.getElementById("codigoarea").value;
  
  let text;
  if (isNaN(x) || x < 11 || x > 3894) 
  {    
     
      msg.innerText = 'El Código de Area debe ser del 011 al 3894'
  }
  else
  {
       msg.innerText = "";
  }

}



document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('mi_formulario').addEventListener('submit', 
  manejadorValidacion)
  });



  function manejadorValidacion(e) {
  e.preventDefault();
  var msg = document.getElementById('msg');
  msg.innerText = '';
  if(this.querySelector('[name=nombre]').value == '') {
  console.log('El nombre está vacío');
  msg.innerText = 'Por favor ingrese su Nombre';
  return;
  }

  if(this.querySelector('[name=apellido]').value == '') {
    console.log('El apellido está vacío');
    msg.innerText = 'Por favor ingrese su Apellido';
    return;
    }


    indice = document.getElementById("genero").selectedIndex;if( indice == null || indice == 0 ) {
        console.log('El genero está vacío');
        msg.innerText = 'Por favor seleccione un Género';
        return;
        }

        valor = document.getElementById("edad").value;if( isNaN(valor) || valor == null || valor == 0 )  {
            console.log('La edad está vacía');
            msg.innerText = 'Por favor ingrese su Edad';
            return;
            }

            const input = document.getElementById("edad");

            const validacion = generaValidacion(0,100);
            input.addEventListener("edad", validacion);
            
            function generaValidacion(MIN,MAX) {
              return () => {
                input.setCustomValidity('');
                if (input.checkValidity()) { 
                  console.log('Validando valor', input.value);
                  if (+input.value <= MAX && +input.value >= MIN) {
                    console.log('Válido', +input.value);
                    return true;
                  }
                }
              }
            }




            //valor = document.getElementById("fechadenacimiento").value;if ( !(/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/.test(valor))) {  
           // console.log('La fecha está vacía');
           // msg.innerText = 'Por favor ingrese su Fecha de Nacimiento';
           // return;
           // }

        


if(this.querySelector('[name=calle]').value == '') {
    console.log('La calle está vacía');
    msg.innerText = 'Por favor ingrese su Domicilio';
    return;
    }

    if(this.querySelector('[name=numero]').value == ( isNaN(valor) || valor == null || valor == 0 )) {
        console.log('El número está vacío');
        msg.innerText = 'Por favor ingrese la numeración de su Domicilio';
        return;
        }

      

        if(this.querySelector('[name=codpostal]').value == ( isNaN(valor) || valor == null || valor == 0 )) {
           console.log('El código postal está vacío');
           msg.innerText = 'Por favor ingrese su Código Postal';
           return;
            }


            






  if(this.querySelector('[name=ciudad]').value == '') {
    console.log('La ciudad está vacía');
    msg.innerText = 'Por favor ingrese su Localidad';
    return;
    }

  if(this.querySelector('[name=provincia]').value == '') {
    console.log('La provincia está vacía');
    msg.innerText = 'Por favor ingrese su Provincia';
    return;
    }  

    if(this.querySelector('[name=codigoarea]').value == ( isNaN(valor) || valor == null || valor == 0 )) {
        console.log('El Código de Area está vacío');
        msg.innerText = 'Por favor ingrese su Código de Area con 0 ';
        return;
        }

        if(this.querySelector('[name=telefono]').value == ( isNaN(valor) || valor == null || valor == 0 )) {
            console.log('El teléfono está vacío');
            msg.innerText = 'Por favor ingrese su Teléfono';
            return;
            }

 if(! validateEmail(this.querySelector('[name=email]').value)) 
    { console.log('El email no es válido');
    msg.innerText = 'Debes escribir un email válido'; 
    return;
   }
   function validateEmail(email) {
    var re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
   }

   
   valor = document.getElementById("antiguedad").value;if( isNaN(valor) || valor == null || valor == 0 )  {
    console.log('La Antiguedad está vacía');
    msg.innerText = 'Por favor ingrese sus años de Antiguedad';
    return;
    }

    if(this.querySelector('[name=areatrabajo]').value == '') {
      console.log('El Area de Trabajo está vacía');
      msg.innerText = 'Por favor ingrese su Area Laboral';
      return;
      }  

     
   this.submit();
   alert ("SE REGISTRÓ CORRECTAMENTE")
  }
  

