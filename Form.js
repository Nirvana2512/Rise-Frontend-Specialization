function store() {
    const inputFirstNM = document.getElementById("FirstNM");
    localStorage.setItem("First Name", inputFirstNM.value);

    const inputLastNM = document.getElementById("LastNM");
    localStorage.setItem("Last Name", inputLastNM.value);

    const inputEmail = document.getElementById("Email");
    localStorage.setItem("Email", inputEmail.value);

    const inputPassword = document.getElementById("Password");
    localStorage.setItem("Password", inputPassword.value);

    // windows.location= "RegistrationForm.html";

}

    function check() {
        const storedEmail = localStorage.getItem("Email");
        const storedPassword = sessionStorage.getItem("Password");

        const loginEmail = document.getElementById("loginEmail");
        const loginPassword = document.getElementById("loginPassword");

        if(
            loginEmail.value !== storedEmail ||
            loginPassword.value !== storedPassword
        ){

            alert("It is wrong");

        } else{

            localStorage.setItem("loginFlag", true);
            window.location = "home.html";
        }
    }

    function logout(){
        window.location = "Registrationform.html";
    }