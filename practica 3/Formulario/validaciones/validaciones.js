function validarCamposObligatorios()
{
        var bandera= true
        for (var i = 0; i < document.forms[0].elements.length; i++){
            var elemento = document.forms[0].elements[i]
            if (elemento.value == '' && elemento.type == 'text' ){
                
                    if (elemento.id == 'cedula'){
                        document.getElementById('mensajeCedula').innerHTML= ' La cedula esta vacia <br>'
						
					}

                    elemento.style.border  = '2px red solid'
                    /**LLAMAR A UN CLASE*/
                    elemento.className = 'error'

                    bandera=false
            }
        }

        if (!bandera){
            alert('Revise sus campos ingresados')
        }
        return bandera
}
function validarcedu() {

    var cad = document.getElementById("cedula").value.trim();
    var total = 0;
    var longitud = cad.length;
    var longcheck = longitud - 1;

    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longcheck; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }

        total = total % 10 ? 10 - total % 10 : 0;
		if (cad.charAt(longitud - 1) == total) {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Válida");
			//alert('Revise sus campos ingresados')

        } else {
            document.getElementById("mensajeCedula").innerHTML = ("Cedula Inválida");
        }
    }
	if ( cad.length<10){
		//alert("EL CAMPO CÉDULA DEBE TENER 10 CARACTERES ");
	    document.getElementById("mensajeCedula").innerHTML = (" La longitud de una cedula valida es de 10 caracteres");
   }
}

function validarFecha(){
	
	var dtCh= "/";
	var minYear=1900;
	var maxYear=2100;
	function isInteger(s){
		var i;
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (((c < "0") || (c > "9"))) return false;
		}
		return true;
	}

function stripCharsInBag(s, bag){
		var i;
		var returnString = "";
		for (i = 0; i < s.length; i++){
			var c = s.charAt(i);
			if (bag.indexOf(c) == -1) returnString += c;
		}
		return returnString;
}

function daysInFebruary (year){
		return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}
	
function DaysArray(n) {
		for (var i = 1; i <= n; i++) {
			this[i] = 31
			if (i==4 || i==6 || i==9 || i==11) {this[i] = 30}
			if (i==2) {this[i] = 29}
		}
		return this
	}
	function isDate(dtStr){
		var daysInMonth = DaysArray(12)
		var pos1=dtStr.indexOf(dtCh)
		var pos2=dtStr.indexOf(dtCh,pos1+1)
		var strDay=dtStr.substring(0,pos1)
		var strMonth=dtStr.substring(pos1+1,pos2)
		var strYear=dtStr.substring(pos2+1)
		strYr=strYear
		if (strDay.charAt(0)=="0" && strDay.length>1) strDay=strDay.substring(1)
		if (strMonth.charAt(0)=="0" && strMonth.length>1) strMonth=strMonth.substring(1)
		for (var i = 1; i <= 3; i++) {
			if (strYr.charAt(0)=="0" && strYr.length>1) strYr=strYr.substring(1)
		}
		month=parseInt(strMonth)
		day=parseInt(strDay)
		year=parseInt(strYr)
		if (pos1==-1 || pos2==-1){
			return false
		}
		if (strMonth.length<1 || month<1 || month>12){
			return false
		}
		if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]){
			return false
		}
		if (strYear.length != 4 || year==0 || year<minYear || year>maxYear){
			return false
		}
		if (dtStr.indexOf(dtCh,pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false){
			return false
		}
		return true
	}
	var fecha = document.getElementById("fechaNacimiento").value.trim();
	if(isDate(fecha)){
		//return true;
		document.getElementById("mensajeFecha" ).innerHTML = ("Fecha Válida");
		
		
	}else{
		document.getElementById("mensajeFecha" ).innerHTML = ("Fecha Inválida");
		//sreturn false;
	}
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toString();
    //aqui se ponen las letras q estaran permitidas
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    
    //A continuacion se hara la  validación del KeyCodes, que teclas recibe el campo de texto.
    especiales = [8, 37, 39, 46, 6]; 

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if(letras.indexOf(tecla) == -1 && !tecla_especial){
    alert('Este campo solo permite letras');
        return false;
      }
}

//esta fucnion permitira validar solo datos numericos en el formulario
function validaNumericos(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     }else{
		alert('Este campo solo admite numeros');
	 }
     
     return false;

}

function validarCorreo(){
	
	var correo = document.getElementById("correo").value.trim();
	
	var coValido="@est.ups.edu.ec";
	var coValido2="@ups.edu.ec";

	var corr1 = correo.substr(correo.length-15);
	
	var corr2 = correo.substr(correo.length-11);
	
	if(corr1 != coValido || corr2 != coValido2  ){
		document.getElementById("mensajeCorreo").innerHTML = ("Direccion de correo invalida ");
	}
	 if (corr1 ==  coValido){
			if( correo.length < 18 ){
				document.getElementById("mensajeCorreo").innerHTML = (" La direccion debe contener al menos 3 valores alfanumericos ");
			}else{
				document.getElementById("mensajeCorreo").innerHTML = ("Direccion de correo valido");
			}	
	}	
	else if (corr2 == coValido2 ){

			if( correo.length<14 ){
				document.getElementById("mensajeCorreo").innerHTML = (" La direccion debe contener al menos 3 valores alfanumericos ");
			}else{
				document.getElementById("mensajeCorreo").innerHTML = (" Correo Valido ");
			}	
	}
	if(correo.length == 0){
	document.getElementById("mensajeCorreo").innerHTML = (" El campo del correo esta vacio ");
	
		}
		if(correo.length < 10){
	document.getElementById("mensajeCorreo").innerHTML = (" ");
		}
		
	}
	function validarContra(){
			var contrasenna = document.getElementById('contra').value;
			{
				if(contrasenna.length >= 8)
				{		
					var mayuscula = false;
					var minuscula = false;
					var numero = false;
					var caracter_raro = false;
					
					for(var i = 0;i<contrasenna.length;i++)
					{
						if(contrasenna.charCodeAt(i) >= 65 && contrasenna.charCodeAt(i) <= 90)
						{
							mayuscula = true;
						}
						else if(contrasenna.charCodeAt(i) >= 97 && contrasenna.charCodeAt(i) <= 122)
						{
							minuscula = true;
						}
						else if(contrasenna.charCodeAt(i) >= 48 && contrasenna.charCodeAt(i) <= 57)
						{
							numero = true;
						}
						else
						{
							caracter_raro = true;
						}
					}
					if(mayuscula == true && minuscula == true && caracter_raro == true && numero == true)
					{
						contra.style.border = " 1px black solid "
						document.getElementById('mensajeContra').innerHTML = ""
						return true;
					}
				}
					contra.style.border = '1px red solid';
					document.getElementById('mensajeContra').innerHTML = "ingrese contraseña valida"
					document.frmusr.contra.setfocus();
					return false;
			}
		}

	