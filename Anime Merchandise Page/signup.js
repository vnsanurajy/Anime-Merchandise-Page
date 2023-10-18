//Toggle button

function fn()
{
    // const toggleButton = document.getElementById('toggle-button')
    const navbarLinks = document.getElementById('navbar-links')
    navbarLinks.classList.toggle('active')
}

function validate()
{
    var username = document.getElementById("username").value;
    var regxu = /OP/;

    if(regxu.test(username))
    {
        document.getElementById("ulabel").innerHTML = "Valid";
        document.getElementById("ulabel").style.visibility="visible";
        document.getElementById("ulabel").style.color="green";
    }
    else
    {
        document.getElementById("ulabel").innerHTML="Invalid";
        document.getElementById("ulabel").style.visibility="visible";
        document.getElementById("ulabel").style.color="red";
    }

    const password = document.getElementById("password").value;
    const regxp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    // const regxp = /pass/;

    if(regxp.test(password))
    {
        document.getElementById("plabel").innerHTML = "Valid";
        document.getElementById("plabel").style.visibility="visible";
        document.getElementById("plabel").style.color="green";
    }
    else
    {
        document.getElementById("plabel").innerHTML="Password must contain atleast 8 characters,one Uppercase and a special character";
        document.getElementById("plabel").style.visibility="visible";
        document.getElementById("plabel").style.color="red";
    }

    var cpassword = document.getElementById("cpassword").value;

    if(cpassword==password)
    {
        document.getElementById("cplabel").innerHTML = "Valid";
        document.getElementById("cplabel").style.visibility="visible";
        document.getElementById("cplabel").style.color="green";
    }
    else
    {
        document.getElementById("cplabel").innerHTML = "Passwords do not match";
        document.getElementById("cplabel").style.visibility="visible";
        document.getElementById("cplabel").style.color="red";
    }

    var mobile = document.getElementById("phn").value;
    var regxm = /^[7-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;

    if(regxm.test(mobile))
    {
        document.getElementById("mlabel").innerHTML = "Valid";
        document.getElementById("mlabel").style.visibility="visible";
        document.getElementById("mlabel").style.color="green";
    }
    else
    {
        document.getElementById("mlabel").innerHTML = "Enter Valid mobile number";
        document.getElementById("mlabel").style.visibility="visible";
        document.getElementById("mlabel").style.color="red";
    }

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