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

        xhr.open("POST" , "http://localhost:8080/Drinkology/users/");
        xhr.send(JSON.stringify(userObj));
    } else {
        alert("please enter all the right fields...");
    }
}

const submit = document.getElementById("submit");
submit.addEventListener('click' , onClick);
