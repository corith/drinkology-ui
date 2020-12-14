const onClick = function (event) {
    event.preventDefault();
    const drinkName = document.getElementById('drink-name');
    const liquorOne = document.getElementById('liquor-one');
    const liquorTwo = document.getElementById('liquor-two');
    const mixer     = document.getElementById('mixer');
    const sweetener = document.getElementById('sweetener');
    const garnish   = document.getElementById('garnish');
    const owner     = document.getElementById('owner')

    if (document.cookie !== "userId=1") {
        alert("You are not an admin....nice try bucko...");
        window.location.href = "index.html"
        return
    }
    if (drinkName.value && garnish.value) {
        // const owner = document.cookie ? document.cookie : 1
        const drinkObj = {
            recipe_name: drinkName.value,
            liquor1_name: liquorOne.value,
            liquor2_name: liquorTwo.value,
            mixer_name: mixer.value,
            sweetener_name: sweetener.value,
            garnish_name: garnish.value,
            owner_id: owner.value
        }

        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 201) {
                console.log("updated recipe");
            } else if (this.readyState === 4) {
                console.log("there was an issue updating the recipe");
            }
        }
        // localhost:8080/Drinkology/
        // xhr.open("PUT" , "http://18.218.51.130:8080/Drinkology/users/");
        xhr.open("PUT" , "http://localhost:8080/Drinkology/recipe/" + owner.value);
        xhr.send(JSON.stringify(drinkObj));
    } else {
        alert("please enter all the right fields...");
    }
}

const button = document.getElementById("update-drink-btn");
button.addEventListener('click' , onClick);
