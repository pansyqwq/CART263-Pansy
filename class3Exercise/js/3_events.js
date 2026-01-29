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
        this.setAttribute("custom-bool","active"); // no longer trigger it after the first click
        console.log("is inactive");
        console.log(this.id)
      }
      this.style.opacity = 0.5;// the opacity including the text will decrease
    });
  });


}