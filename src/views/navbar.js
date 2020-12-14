export const NavbarComponent = () =>
`    <header>
        <nav id="navbar">
            <div class="my-container">
                <div id="logo">
                    <h1><a href="index.html"> Drinkology! </a></h1>
                </div>
                <ul>
                    <li><a href="index.html"> Home </a></li>
                    <li></li>
                    <li id="view-drinks"><a href="drinks.html"> View Drinks </a></li>
                    <li><a href="drink-form.html"> Add a drink </a></li>
                    <li><a href=${document.cookie ? "logout.html" : "login.html"}> ${document.cookie ? "Logout" : "Login"}  </a></li>
                </ul>
            </div>
        </nav>
    </header>`;
