// const owner = (res) => {
//     for (let i = 0; i < res.length; i++) {
//         if (res.charAt(i).equals(":")) {
//
//         }
//     }
// }

const owner = (xhr) => (xhr.responseText[xhr.responseText.length-1] + xhr.responseText[xhr.responseText.length-2]).trim();

const onClick = function (event) {
    event.preventDefault();

    const userName = document.getElementById("user-name");
    const password = document.getElementById("user-password");

    if (userName.value && password.value) {

        const userObj = {
            username: userName.value,
            password: password.value,
        }

        // console.log(userObj)
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                console.log(userName.value + " logged in successfully");
                console.log(owner(xhr));
                document.cookie = owner(xhr);
                alert("you have been logged in")
            } else if (this.readyState === 4) {
                console.log("incorrect user name or password..");
            }
        }
        xhr.open("POST" , "http://18.218.51.130:8080/Drinkology/login");
        // xhr.open("POST" , "http://localhost:8080/Drinkology/login");
        xhr.send(JSON.stringify(userObj));
    } else {
        alert("please enter all the right fields...");
    }
}

const submit = document.getElementById("submit");
submit.addEventListener('click' , onClick);
