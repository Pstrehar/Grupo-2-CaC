let url = 'https://jsonplaceholder.typicode.com/comments/';
fetch(url)
    .then( response => response.json() )
    .then( data => mostrarData(data) )
    .catch( error => console.log(error) )

const mostrarData = (data) => {
    console.log(data)
    let body = ""
    for (var i = 0; i < 9; i++) {      
       body+=`<tr><td>${data[i].name}</td><td>${data[i].body}`
    }
    document.getElementById('data').innerHTML = body
    //console.log(body)
}


function validate(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    
    var text;
  
    if(name.length < 5){
      alert("Ingrese un nombre válido")
      return false;
    }
    
    if(email.indexOf("@") == -1 || email.length < 6){
      alert("Ingrese un email válido")
      return false;
    }
  
  if(isNaN(phone) || phone.length != 10){
      alert("Ingrese un celular válido")
      return false;
    }
    
    if(message.length <= 50){
      alert("Su consulta debe tener más de 50 caracteres")
      return false;
    }
  
    alert("Su consulta se envió correctamente!");
    return true;
  }