const myAccount = {
  email: "test@mail.com",
  password: "test1234"
};

const loginForm = document.getElementById("login-form");

const email = document.getElementById("email");
const password = document.getElementById("password");
const alertMessage = document.getElementById("alert-message");
const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

loginForm.addEventListener("submit", function(event){
  event.preventDefault();
  
  email.classList.remove("input-invalid");
  password.classList.remove("input-invalid");

    if((email.value != myAccount.email) || !(emailValid.test(email.value))){
      if(email.value === ""){
        alertMessage.innerText = "Todos os campos são obrigatórios";
      }
      else{
        alertMessage.innerText = "Email ou senha inválidos";
      }
      email.classList.add("input-invalid");
    }

    else{
      if((password.value).length < 8){
        if(password.value === ""){
          alertMessage.innerText = "Todos os campos são obrigatórios";
        }
        else{
          alertMessage.innerText = "Sua senha deve ter no mínimo 8 caracteres";
        }
        password.classList.add("input-invalid");
      }

      else{
        if(password.value != myAccount.password){
          alertMessage.innerText = "Email ou senha inválidos";
          password.classList.add("input-invalid");
        }

        else{
          alertMessage.style.color = "#00e749";
          alertMessage.innerText = "Dados Ok";
          setTimeout(() => {
            window.location.href = "/src/pages/home.html";
          }, 1000);
        }
      }
    }

});
