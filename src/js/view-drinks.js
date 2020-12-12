const getDrinks = () => {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log("got the drinks");
            const data = JSON.parse(xhr.responseText)
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                placeDrink(data[i]);
            }
        }
    }
    xhr.open("GET" ,"http://18.218.51.130:8080/Drinkology/recipes/" , true);
    xhr.send();
}

const placeDrink = function (drinks) {
    const tableBody = document.getElementById('drink-table-data');
    const entry = document.createElement('tr');


    entry.innerHTML = `<td> ${drinks.name}</td>
                        <td> ${drinks.liquor1.name}</td>
                        <td> ${drinks.liquor2.name}</td>
                        <td> ${drinks.garnish.name}</td>
                        <td> ${drinks.sweetener.name}</td>
                        <td> ${drinks.mixer.name}</td>
                        `

    tableBody.appendChild(entry);
}

getDrinks()
