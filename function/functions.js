//#region to Set Color Mode
/*
 * On load html page
 *
 * 1. Finds out what color-mode icon to hide
 * 2. Calls the function to set, the preferred color style for the current html page elements
*/
function setColorMode()
{
    let color = getUserPreferedColorScheme();
    //Finds out what color-mode icon to hide
    const element =  document.getElementById(color + "-icon");
    if(element !== null)
    {
        element.setAttribute("display", "none");
    }

    setModeToElements();
}
/*
 * If color change-button was pressed
 *
 * function on click event
 * 1. Swops the value of prefered previously by the user(in device settings or in previous use of website) 
 * to the oposite color mode
 * 2. Calls the function to set, the preferred color style for the current html page elements
 * 3. Hides and displays the necessary icons of chosen color-mode
*/
function toggleColorMode()
{
    let color = getUserPreferedColorScheme();
    color = color === "light" ? "dark" : "light";

    localStorage["colorScheme"] = color;

    setModeToElements();
    
    document.getElementById(color + "-icon").setAttribute("display", "none");
    document.getElementById(color === "dark" ? "light-icon" : "dark-icon").setAttribute("display", "flex");
}

//#region of help methods to Set Color Modes

/*
 * Adding styles, to some elements of current html page, 
 * depending on user choise of color theme
 * In settings of device or if user choosed previously color mode of this site and its still 
 * saved in cashe of browser
*/
function setModeToElements()
{
    const colorModeAdd = getUserPreferedColorScheme();
    //finds out what is opposite color-mode of  prefers color theme by the user
    const colorModeRemove = colorModeAdd === "dark" ? "light" : "dark"; 

    manageClasses(document.body, colorModeAdd, colorModeRemove);
}

/*
 * Checks if elements is array and 
 * calls the function addRemoveClasses() neccessary times for elements once or for each element in elements
*/
function manageClasses(elements, toAdd, toRemove)
{
    if(typeof elements !== "undefined" && typeof toAdd !== "undefined" && typeof toRemove !== "undefined")
    {
        if(Array.isArray(elements))
        {
            elements.forEach(el => {
                addRemoveClasses(el, toAdd, toRemove);
            });
        }
        else
        {
            addRemoveClasses(elements, toAdd, toRemove);
        }
    }
}
/*
 * Adds and removes oposite color-mode clases when need to
*/
function addRemoveClasses(element, toAdd, toRemove)
{
    if(typeof element !== "undefined" && typeof toAdd !== "undefined" && typeof toRemove !== "undefined")
    {
        element.classList.add(toAdd);
        element.classList.remove(toRemove);
    }
}
/*
 * Finds out and returns the name of color theme is user preferred.
 * Looks in browser cashe or in device settings, 
 * if there is nor stored cashe with key "colorScheme"
 * Also stores prefered color scheme in local cashe as value for key "colorScheme", 
 * if there nor such the key in the cashe
*/
function getUserPreferedColorScheme()
{
    //finds out what color mode is user preferred
    let color = localStorage['colorScheme'];
    if(typeof color === "undefined")
    {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        color = darkModeMediaQuery.matches ? "dark" : "light";
        localStorage["colorScheme"] = color;
    }
    return color;
}
//#endregion of help methods to Set Color Mode
//#endregion to Set Color Mode

//#region of navigation between pages

function setNavBarActiveButton()
{
   const navItems = Array.from(document.getElementsByClassName('nav-button'));
   navItems.forEach(el => 
    {
        if(el.id === (document.body.id.substring(0, document.body.id.length-1)))
        {
            el.classList.add('active');
        }
        else
        {
            el.classList.remove('active');
        }
   });
}
function collapsedNavBar() 
{
    var x = document.getElementById("collapsedNavBar");
    if (x.className === "container-navigate-buttons") {
      x.className += " responsive";
    } else {
      x.className = "container-navigate-buttons";
    }
}
//#endregion of navigation between pages

//#region pages functionality
function includeHtmlDocs()
{ 
    //navigation bar
    fetch("./nav-bar.html").then((res) => res.text()).then((text) => {
        document.getElementById("navigation").innerHTML = text;
    });

    //footer
    fetch("./footer.html").then((res)=> res.text()).then((text) => {
        document.getElementById("footer").innerHTML = text;
    }).then(() => {
        setColorMode();
        setNavBarActiveButton();
    });
}

function accordion(id) 
{
    const accordion = document.getElementById(id);
    accordion.classList.toggle('active');

    const isActive = accordion.classList.contains('active');

    const char = isActive ? '<b>︽</b></span>' : '<b>︾</b></span>';
    accordion.innerHTML = (accordion.innerHTML.substring(0, accordion.innerHTML.length - char.length)) +  char;

    accordion.nextElementSibling.style.display = isActive ? "block" : "none";

    //Ensuring that only one accordion is active at the time
    const accordionsAll = Array.from(document.getElementsByClassName('accordion'));
   for(const acc of accordionsAll)
    {
        if(acc != accordion && acc.classList.contains('active'))
        {
            acc.classList.remove('active');
            acc.nextElementSibling.style.display = "none";

            const collapsedChar = '<b>︾</b></span>';
            //inserting symbole at the end of innerHTML
            acc.innerHTML = (acc.innerHTML.substring(0, acc.innerHTML.length - collapsedChar.length)) +  collapsedChar;
        }
    }

     /*    accordionsAll.forEach(el => {
        if(el != accordion && el.classList.contains('active'))
        {
            el.classList.remove('active');
            el.nextElementSibling.style.display = "none";

            const collapsedChar = '<b>︾</b></span>';
            //inserting symbole at the end of innerHTML
            el.innerHTML = (el.innerHTML.substring(0, el.innerHTML.length - collapsedChar.length)) +  collapsedChar;
        }
    });*/
}
//#endregion pages functionality

//#region of some animations
function typeSentence(id, sentence) 
{
    //caret symbol, for imitation of typing text
    const carret = '_';
    //index of the last printed symbol 
    let index = 0;
    const element = document.getElementById(id);
    const interval = setInterval(() => {
        if (index < sentence.length) {
            //removing the caret symbol before entering the next char
            if(index > 0)
            {
                element.innerHTML = element.innerHTML.substring(0, index);
            }

            element.innerText += sentence[index-1] === ' ' ? 
                ' ' + sentence[index++] + carret : 
                sentence[index++] + carret;
            
        } else {
            clearInterval(interval);
            console.log(); 
        }
    }, 100);
}

function showText(id)
{
    const element = document.getElementById(id);
    element.toggleAttribute("hidden");
}
//#endregion of some animations

