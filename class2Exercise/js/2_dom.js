//controlling when to on load, here we r loading when the window appears
window.onclick= setup //window onclick runs it until the mouse clicks

function setup(){
    // console.log(document.getElementById("two").parentElement.children[1].innerHTML="<p>I was changed</p>");

    //parent element overights 上级
    // children element get the 下级, number need to br written inside[]
    //getting every element with tagname div
    //printing the part of html code linked under this id
    // h2 means header 2, since we r using it in html, we need things like <h2>
//     document.write("HELLO WORLD AFTER LOAD IN FUNCTION");

// console.log(document.querySelector("#five").getAttribute("id"));
//   console.log(document.querySelector("#five").getAttribute("class"));

let newDivTwo = document.createElement("div");
newDivTwo.classList.add("square_shape");
newDivTwo.innerHTML = " <p> NEW ELEMENT TWO </p>";
newDivTwo.style.backgroundColor = "yellow";
newDivTwo.querySelector("p").style.color = "black"

let sibling = document.querySelector("#two")
//querySelecter picks up everything it can be tag, hashtag, id
//selecting the second box, same as getElementById("#two")
let parentElementAgain = document.querySelector(".wrapper_flex_box")
parentElementAgain.insertBefore(newDivTwo,sibling);
// document.getElementById("two").style.background = "red";
}