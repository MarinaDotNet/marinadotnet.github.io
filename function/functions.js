
//#region Set Color Mode
/*
 * On page load:
 * 1. Finds out which color-mode icon to hide based on user preference.
 * 2. Calls the function to set the preferred color style for the page elements.
*/
function setColorMode()
{
    let color = getUserPreferedColorScheme();
    const element =  document.getElementById(color + "-icon");
    if(element !== null)
    {
        element.setAttribute("display", "none");
    }
    setModeToElements();
}
/*
 * When the color change button is pressed:
 * 1. Toggles the user's preferred color mode.
 * 2. Calls the function to set the preferred color style for the page elements.
 * 3. Hides and displays the necessary icons for the chosen color mode.
*/
function toggleColorMode()
{
    let color = getUserPreferedColorScheme();
    // Swap the color mode
    color = color === "light" ? "dark" : "light";
    // Save the color mode preference
    localStorage["colorScheme"] = color;

    setModeToElements();
    // Hide the current color-mode icon and display the opposite one
    document.getElementById(color + "-icon").setAttribute("display", "none");
    document.getElementById(color === "dark" ? "light-icon" : "dark-icon").setAttribute("display", "flex");
}

//#region Helper Methods for Set Color Mode

/*
 * Sets styles for elements based on the user's preferred color theme.
*/
function setModeToElements()
{
    const colorModeAdd = getUserPreferedColorScheme();
    // Determine opposite color mode
    const colorModeRemove = colorModeAdd === "dark" ? "light" : "dark"; 
    manageClasses(document.body, colorModeAdd, colorModeRemove);
}

/*
 * Manages classes for elements (supports single element or array of elements).
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
 * Adds and removes classes for a single element
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
 * Retrieves the user's preferred color scheme from local storage or browser settings.
 * If not previously set, defaults to 'light' or 'dark' based on system preferences.
 */
function getUserPreferedColorScheme()
{
    let color = localStorage['colorScheme'];
    if(typeof color === "undefined")
    {
        const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        color = darkModeMediaQuery.matches ? "dark" : "light";
        localStorage["colorScheme"] = color;
    }
    return color;
}
//#endregion Helper Methods for Set Color Mode
//#endregion Set Color Mode

//#region Navigation between Pages

// Sets the active button in the navigation bar based on the current page.
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
// Toggles the visibility of the collapsed navigation bar.
function collapsedNavBar() 
{
    var x = document.getElementById("collapsedNavBar");
    if (x.className === "container-navigate-buttons") {
      x.className += " responsive";
    } else {
      x.className = "container-navigate-buttons";
    }
}
//#endregion Navigation between Pages

//#region Page Functionality

// Expands or collapses an accordion section.
function accordion(id) 
{
    const accordion = document.getElementById(id);
    accordion.classList.toggle('active');

    const isActive = accordion.classList.contains('active');

    const char = isActive ? '<b>︽</b></span>' : '<b>︾</b></span>';
    accordion.innerHTML = (accordion.innerHTML.substring(0, accordion.innerHTML.length - char.length)) +  char;

    accordion.nextElementSibling.style.display = isActive ? "block" : "none";

    // Ensures only one accordion is active at a time
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
}

//#endregion pages functionality

//#region Some Animations

// Simulates typing effect for a sentence in the specified element.
function typeSentence(id, sentence) 
{
    const carret = '_';
    let index = 0;
    const element = document.getElementById(id);
    const interval = setInterval(() => {
        if (index < sentence.length) {
            if(index > 0)
            {
                element.innerHTML = element.innerHTML.substring(0, index);
            }
            element.innerText += sentence[index-1] === ' ' ? 
                ' ' + sentence[index++] + carret : 
                sentence[index++] + carret;
            
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Toggles visibility of text associated with an icon.
function showText(id)
{
    const element = document.getElementById(id);
    element.toggleAttribute("hidden");
}
//#endregion Some Animations

//#region include repeated HTML page components for each page

// Method to insert Navigation Bar and Footer to the HTML page
function includeRepeatedComponents()
{
    addNavBar();
    addFooter();

    setColorMode();
    setNavBarActiveButton();
}

// Function to create and add HTML element with classes and attributes
function addHtmlElement(tag, classList, attributeList, attributeToggle)
{
    const element = document.createElement(tag);
    
    // Add classes to the element
    addClasses(element, classList);
    // Add attributes to the element
    addAttributes(element, attributeList);
    // Toggle attribues on the element
    toggleAtribute(element, attributeToggle);

    return element;
}

// Function to add CSS classes to an HTML element
function addClasses(element, className)
{
    // Check if className is an array and not empty
    if(Array.isArray(className) && className.length > 0)
    {
        for(let i = 0; i < className.length; i++)
        {
            // Add each class from the array to the element
            element.classList.add(className[i]);
        }
    }
    // Check if className is a string with spaces
    else if(typeof(className) === "string" && className.includes(' '))
    {
        // Add classes split by spaces to the element
        element.classList.add(...getClassArray(className));
    }
    // Check if className is a non-empty string
    else if(typeof(className) === "string" && className.length > 0 )
    {
        // Add the single class to the element
        element.classList.add(className);
    }
}

// Function to split a string of classes into an array
function getClassArray(classesAsString)
{
    if(typeof(classesAsString) === "string" && classesAsString.length > 0)
    {
        // Split the string by spaces into an array of classes
       return classesAsString.split(" ");
    }
    // Return an empty array if the input is not a valid string
    return [];
}

// Function to add attributes to an HTML element
function addAttributes(element, listAttributes)
{
    if(typeof(listAttributes) === "object" && Object.keys(listAttributes).length > 0)
    {
        for(let attr in listAttributes)
        {
            element.setAttribute(attr, listAttributes[attr]);
        }
     }
}

// Function to toggle attributes on an HTML element
function toggleAtribute(element, attribute)
{
    // Check if attribute is an array and not empty
    if(Array.isArray(attribute) && attribute.length > 0)
    {
        for(let i = 0; i < attribute.length; i++)
        {
            // Toggle each attribute in the array on the element
            element.toggleAttribute(attribute[i]);
        }
    }
    // Check if attribute is a non-empty string
    else if(typeof(attribute) === "string" && attribute.length > 0)
    {
        // Toggle the single attribute on the element
        element.toggleAttribute(attribute);
    }
}

// Function to add the Navigation Bar
function addNavBar()
{
    // Create main div element for the navigation bar
    const mainDiv = addHtmlElement("div", ["nav-bar-roud-box"], {"id":"nav"}, "");

    // Append mainDiv to navigation element in HTML
    document.getElementById("navigation").appendChild(mainDiv);

    // Add color mode button, navigation buttons, and hamburger button to mainDiv
    mainDiv.appendChild(addColorModeButton());
    mainDiv.appendChild(addNavigateButtons());
    mainDiv.appendChild(addHumburgerButton());
}

//#region  addNavBar() Helper Methods

// Function to add the color mode button
function addColorModeButton()
{
    const colorModeButton = addHtmlElement("a", ["color-mode-button"], {"type":"button", "title":"color mode", "onclick":"toggleColorMode();"}, "");
    
    // Add SVG icons for light and dark modes
    colorModeButton.innerHTML = `
        <svg width='30' height='30' id='light-icon'>
            <circle cx='15' cy='15' r='6' fill='#B88A13' />
            <line id='ray' stroke='#B88A13' stroke-width='2' stroke-linecap='round' x1='15' y1='1' x2='15' y2='4'></line>
            <use href='#ray' transform='rotate(45 15 15)'/> 
            <use href='#ray' transform='rotate(90 15 15)' />
            <use href='#ray' transform='rotate(135 15 15)' /> 
            <use href='#ray' transform='rotate(180 15 15)' /> 
            <use href='#ray' transform='rotate(225 15 15)' />
            <use href='#ray' transform='rotate(270 15 15)' />
            <use href='#ray' transform='rotate(315 15 15)'/>
            </svg>
        <svg width='30' height='30' id='dark-icon'>
            <path fill='#B88A13' d='M 23, 5 A 12 12 0 1 0 23, 25 A 12 12 0 0 1 23, 5'/>
        </svg>`;

    return colorModeButton;
}

// Function to add navigation buttons
function addNavigateButtons()
{
    const div = addHtmlElement("div", ["container-navigate-buttons"], {"id":"collapsedNavBar"}, "");

    const navButtons = ["Home", "About", "Projects", "Contact"];
    
    // Add navigation buttons dynamically
    navButtons.forEach(buttonName => 
    {
        const link = buttonName !== "Home" ? `./${buttonName.toLocaleLowerCase()}.html` : `./index.html`;

        const button = addHtmlElement("a", ["nav-button", "text"], {"type":"button", "href":link, "id":buttonName.toLowerCase()}, "");
        button.innerText = buttonName;
        
        div.appendChild(button);
    });

    return div;
}

// Function to add the hamburger button
function addHumburgerButton()
{
    const humburgerButton = addHtmlElement("a", ["humburger-icon"], {"href": "javascript:void(0);", "title":"icon-humburger", "onclick":"collapsedNavBar();"}, "");
    
     // Add SVG icon for hamburger button
    humburgerButton.innerHTML = `
        <svg height='30' width='30' id='humburger' viewBox='5 5 30 30'>
            <line id='humburgerLine1' stroke='#B88A13' stroke-width='3' stroke-linecap='round' x1='0' y1='25' x2='30' y2='25'></line>
            <line id='humburgerLine2' stroke='#B88A13' stroke-width='3' stroke-linecap='round' x1='0' y1='17.5' x2='30' y2='17.5'></line>
            <line id='humburgerLine3' stroke='#B88A13' stroke-width='3' stroke-linecap='round' x1='0' y1='10' x2='30' y2='10'></line>
        </svg>`;

    return humburgerButton;
}

//#endregion addNavBar() Helper Methods

// Function to add the Footer
function addFooter()
{ 
    const footer = document.getElementById("footer");
    footer.classList.add("footer");
    
    addFooterGroups();
}

//#region addFooter() Helper Methods

// Function to add footer groups
function addFooterGroups()
{
    const footer = document.getElementById("footer");

    // Loop to create two footer groups
    for(let i = 0; i < 2; i++)
    {
        const group = addHtmlElement("div", ["footer-group"], "", "");

        const underGroup1 = addHtmlElement("div", ["footer-under-group"], "", "");
        const p = addHtmlElement("p", ["text", "text-in-footer", "footer-header"], "", "");

        underGroup1.appendChild(p);
        group.appendChild(underGroup1);

        if(i == 0)
        {
            p.innerText = "Contacts:"
            const underGroup2 = addHtmlElement("div", ["footer-under-group"], {"id":"withIcons"}, "");
            underGroup2.appendChild(addDivWithIcons());
            group.appendChild(underGroup2);
        }
        else
        {
            p.innerText = "Third Praties:"
            const underGroup2 = addHtmlElement("div", ["footer-under-group"], {"id":"links-in-footer"}, "");

            // Populate links for third parties
            linksInFooter(underGroup2);
            group.appendChild(underGroup2);
        }

        footer.appendChild(group);
    }
}

// Function to add div with icons in the footer
function addDivWithIcons()
{
    const div = addHtmlElement("div", ["icons"], "", "");

    const icons = {
        "WhatsApp":"https://wa.me/+61433881789", 
        "Email":"mailto:msichova@outlook.com", 
        "GitHub":"https://github.com/marinadotnet", 
        "Facebook":"https://www.facebook.com/msichova/", 
        "LinkedIn":"https://www.linkedin.com/in/marina-sichova-333599281?originalSubdomain=au"
    };

    // Loop to add icons with links
    for(const key in icons)
    {
        const action = `showText('${key.toLowerCase()}');`;
        const a = addHtmlElement("a", "", {"title":`Contact to Me via ${key}`, "href":icons[key], "onmouseenter":action, "onmouseleave":action}, "");
        const layer = addHtmlElement("div", ["layer"], "", "");

        // Adding spans to the layer
        for(let i = 0; i < 5; i++)
        {
            const span = i < 4 ?
                document.createElement("span") :
                addHtmlElement("span", ["fab", key.toLowerCase()], "", "");
            layer.appendChild(span);
        } 

        a.appendChild(layer);

        const hiddenDiv = addHtmlElement("div", ["icon-text"], {"id": key.toLowerCase()}, "hidden");
        hiddenDiv.innerText = key;

        a.appendChild(hiddenDiv);
        div.appendChild(a);
    }

    return div;
}

// Function to add links in the footer for third-party resources
function linksInFooter(element)
{
    // Object containing the links and their descriptions
    const links = {
        "Icons":{"href":"https://www.svgrepo.com/", "title":"The icons used on the website from this third-party website"},
        "Backgrounds":{"href":"https://heropatterns.com/", "title":"The backgrounds used on the website from this third-party website"}, 
        "Mode Icons":{"href":"https://www.freecodecamp.org/news/how-to-handle-dark-mode-with-css-and-javascript/", "title":"SVG tutorial used for color-change mode buttons"}
    };

    // Iterate through each link in the links object
    for(const key in links)
    {
        // Create a <p> element to contain the link
        const p = addHtmlElement("p", ["text", "text-in-footer"], "", "");
        // Create an <a> element with the link attributes
        const a = addHtmlElement("a", ["text-link"], links[key], "");
        p.appendChild(a); // Append the <a> element to the <p> element
        element.appendChild(p); // Append the <p> element to the specified element
        a.innerText = key.toString(); // Set the text of the <a> element to the link key
    }

}
//#endregion of addFooter() Helper Methods

//#endregion include repeated HTML page components for each page
