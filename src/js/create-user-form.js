const onClick = function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name");
    const password = document.getElementById("user-password");
    const email    = document.getElementById("email");

    if (userName.value && password.value && email.value) {

        const userObj = {
            username: userName.value,
            password: password.value,
            email: email.value,
            role_id: 2
        }
        console.log(userObj);

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                console.log("created a new account");
                alert("you have created an account!")
            } else if (this.readyState === 4) {
                console.log("there was an issue creating new account");
            }
        }
        // localhost:8080/Drinkology/
        // xhr.open("POST" , "http://18.218.51.130:8080/Drinkology/users/");
        xhr.open("POST" , "http://localhost:8080/Drinkology/users/");
        xhr.send(JSON.stringify(userObj));
    } else {
        alert("please enter all the right fields...");
    }
}

// const submit = document.getElementById("submit");
// submit.addEventListener('click' , onClick);
document.body.addEventListener('click' , function (e) {
    if (e.target.id == 'submit' ) {
        onClick(e);
    }
})
