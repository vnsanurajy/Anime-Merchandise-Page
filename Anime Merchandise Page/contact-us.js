//Toggle button

function fn()
{
    // const toggleButton = document.getElementById('toggle-button')
    const navbarLinks = document.getElementById('navbar-links')
    navbarLinks.classList.toggle('active')
}

function validate()
{
    const Email = document.getElementById("email").value;
    const regx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(regx.test(Email))
    {
        document.getElementById("elabel").innerHTML = "Valid";
        document.getElementById("elabel").style.visibility="visible";
        document.getElementById("elabel").style.color="green";
    }
    else
    {
        document.getElementById("elabel").innerHTML = "Enter Valid Email adress";
        document.getElementById("elabel").style.visibility="visible";
        document.getElementById("elabel").style.color="red";
    }
}