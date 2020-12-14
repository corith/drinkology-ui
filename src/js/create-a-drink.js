const onClick = function (event) {
    event.preventDefault();

    const drinkName = document.getElementById('drink-name');
    const liquorOne = document.getElementById('liquor-one');
    const liquorTwo = document.getElementById('liquor-two');
    const mixer     = document.getElementById('mixer');
    const sweetener = document.getElementById('sweetener');
    const garnish   = document.getElementById('garnish');

    if (drinkName.value && garnish.value) {
        const owner = document.cookie ? document.cookie : 1
        const drinkObj = {
            recipe_name: drinkName.value,
            liquor1_name: liquorOne.value,
            liquor2_name: liquorTwo.value,
            mixer_name: mixer.value,
            sweetener_name: sweetener.value,
            garnish_name: garnish.value,
            owner_id: owner
        }

        const xhr = new  XMLHttpRequest();

        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 201) {
                console.log("Added new drink");
                console.log(xhr.responseText)
                window.location.href = '../drinks.html';
            } else if (this.readyState == 4) {
                alert("could not add this drink for some reason, check the fields.");
            }
        }

        // xhr.open("POST" , "http://18.218.51.130:8080/Drinkology/recipe/");
        xhr.open("POST" , "http://localhost:8080/Drinkology/recipe/");
        xhr.send(JSON.stringify(drinkObj));

    } else {
        alert("please enter all the fields....");
    }
}

const submit = document.getElementById('drink-submit');
submit.addEventListener('click' , onClick);
