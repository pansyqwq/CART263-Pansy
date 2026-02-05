window.onload = setup;
function setup() {

  //  document.querySelector(`#${this.id} p`).style.setProperty("opacity", ".75");
  // This solution will not work -- because the parent element has the lower opacity value....


  // let introSection = document.querySelector("#intro");
  // introSection.addEventListener("click", function (e) { // the call back function
  //   console.log(this);
  //   console.log(e)
  //   //e is the event itself

  //   // //a:
  //   // this.style.background = `rgba(214, 110, 239, 0.5)`

  //   this.style.opacity = 0.5;// the opacity including the text will decrease
  // });




  // let Selection = document.querySelectorAll(".mouseclick-active-section"); // use. as selecting class, need to use querySelecterall

  // Selection.forEach(element => {
  //   element.addEventListener("click", function (e) { // the call back function
  //   console.log(this);
  //   console.log(e)
  //   this.style.opacity = 0.5;// the opacity including the text will decrease
  //      });
  // });



  let Selection = document.querySelectorAll(".mouseclick-active-section"); // use. as selecting class, need to use querySelecterall

  

  Selection.forEach(element => {
    element.addEventListener("click", function (e) { // the call back function
      if (this.getAttribute("custom-bool") === "inactive") {
        this.setAttribute("custom-bool", "active"); // no longer trigger it after the first click
        console.log("is inactive");
        console.log(this.id)
        this.style.opacity = 0.5;// the opacity including the text will decrease
      }
      else {
        this.setAttribute("custom-bool", "inactive");
        this.style.opacity = 1.0;
      }

    });

    document.querySelector("#bubbleButton").addEventListener("click", function () { // the e is optional
      console.log("button clicked");
      let bubble = document.createElement("div");
      bubble.classList.add("bubble"); // adding a new class to bubble
      bubble.style.left = `${Math.random() * (window.innerWidth - 200)}px`; //add px 
      bubble.style.top = `${Math.random() * (window.innerHeight - 200)}px`; // we r calling this js function inside $ and multiply with a number

      let r = Math.ceil(Math.random() * 255); //new Math.ceil
      let g = Math.ceil(Math.random() * 255);// .ceil means the ceiling of the value
      let b = Math.ceil(Math.random() * 255);


      bubble.style.background = `rgba(${r},${g},${b})`;
      document.getElementById("top-layer").appendChild(bubble)// we r taking a new div as a child element of the bubble
    })

  });
}