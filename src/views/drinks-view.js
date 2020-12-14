export const DrinkTableComponent = () =>
`<section id="drink-table-main">
        <h1>Commonly Enjoyed Drinks!</h1>
        <table id="drink-table">
            <thead class="thead-dark">
                <tr>
                    <th>Drink Name</th>
                    <th>Liquor One </th>
                    <th>Liquor Two </th>
                    <th> Garnish </th>
                    <th> Sweetener </th>
                    <th> Mixer </th>
                </tr>
            </thead>
            <tbody id="drink-table-data">

            </tbody>

        </table>
        <button id="update-button" ${document.cookie === "userId=1" ? "onclick=\"window.location.href='update-drink.html'\"" : "style=\"display: none"}> Update  </button>
    </section>`
