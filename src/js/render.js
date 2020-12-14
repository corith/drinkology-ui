import { NavbarComponent } from "../views/navbar.js";
import { HomeComponent } from "../views/home.js";
import { FooterComponent } from "../views/footer.js";
import {DrinkTableComponent} from "../views/drinks-view.js";

const injectHtml = (component, target = "container") => {
    document.getElementById(target).innerHTML += component;
}

export const swapComponent = (newComponent, target="container") => {
    document.getElementById(target).innerHTML = newComponent;
}

const renderLanding = () => {
    injectHtml(NavbarComponent() , "navbar-container");
    document.getElementById("home-container") ? injectHtml(HomeComponent() , "home-container") : console.log("not the home page")
    document.getElementById("drink-table-container") ? injectHtml(DrinkTableComponent() , "drink-table-container") : console.log("not the drink page");
    injectHtml(FooterComponent() , "footer-container");
}

renderLanding();
