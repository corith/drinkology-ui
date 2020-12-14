export const HomeComponent = ()=> `
<div class="home-container">
    <div id="border-one">
        <h1 id="title"> Welcome to Drinkology! </h1><br>
        <div>
            <p style="padding: 10px; color: white">
                Drinkology! Where everyone is a bartender! This is the place to store all the amazing drinks you know
                and learn so that they are always ready when the clock strikes happy hour! ;)
                You can checkout the drinks our other users have made and love by checking out <a href="drinks.html" style="color: aqua">view
                drinks</a>. And you can start saving the ones you love by creating an account below!. We do have a
                newsletter than you can opt-in to and we will never send you spam or give your email to a 3rd party.
            </p>
            <p style="padding: 10px; color: white"><br> <br> <br> Please note that we do not have filters and expect our
                users to use this product responsibly, just like how we know they drink responsibly. If you see anything
                that is offensive or not a drink recipe, please report it to us and we will remove it!
            </p>
        </div>
    </div>

    <div id="new-user">
        <div id="heading-create">
            <h3>Create An Account</h3>
        </div>
        <div class="border2">
            <div id="new-user-form">
                <form action="" id="form-one">
                    <label for="user-name"> Name </label>
                    <input type="text" id="user-name" placeholder="Your Name">
                    <label for="user-password"> Password </label>
                    <input type="password" id="user-password" placeholder="Your Password">
                    <label for="email"> Email </label>
                    <input type="email" id="email" placeholder="Your Email">
                    <input type="submit" id="submit" value="Create">
                </form>
            </div>
            <p style="color: aqua">Already have an account? <a href="login.html">login!</a></p>
        </div>
    </div>
</div>`
