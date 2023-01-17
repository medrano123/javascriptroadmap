// Selecting elements

// Finding HTML elements by id - The Easiest and the most efficient way to find an element id by id. 
// We can assign some id to an element and can select that element as shown below.

// Finding HTML elements by tag name - consider that for some reasons we want to manipulate all elements of a particular kind .
//  Let's say we want to manipulate all images of our webpage which can be done as shown below.

// Finding HTML elements by class name - Class names are assigned to elements to style them uniquely. 
// lets say to style all links in out website we had assigned some class say "our-link" to them and now we want to manipulate them.

// Finding HTML elements by CSS selectors - css selectors are that you can use any combination of class, id, tag name and many more to select a 
// particular element. we will not go into detail as it itself can be an another topic. For example lets just say that we had given a same class
//  "link" to all our links in web page as well as some span elements also to make them look like a link but now we just want to select all the 
//  span elements and not the links.


function menuClicked(currentElement){

    const menuItems = document.getElementsByClassName("menu-item");
    
    for (var i = 0; i < menuItems.length; i++) {
    
    menuItems[i].classList.remove('active');
    
    }
    
    console.log(currentElement);
    
    event.target.classList.add("active");
    
    }