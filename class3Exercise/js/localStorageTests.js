window.onload = function () {
    console.log("in local storage ex");
    let theButtons = document.getElementsByClassName("titleBar");
    for (let i = 0; i < theButtons.length; i++) {
    theButtons[i].addEventListener("click", saveStateHandler);
  }
  //the callback function
  function saveStateHandler(event){
    let buttonID = this.parentElement.id;
    let inputValue = this.parentElement.querySelector("Input").value;
    console.log(inputValue);

      if (inputValue !== "") { // if the input value is not an empty string
      // save the value to local storage -> NOTE it is saved a key-value pair
      localStorage.setItem(buttonID, inputValue);
      //reset input val
      inputValue = "";
    }
  }
  document.getElementById("refresh").addEventListener("click", retrieveHandler);
    // callBack function
    function retrieveHandler(){
       for (let [key, value] of Object.entries(localStorage)) { 
        console.log(`${key}: ${value}`);
      }
    }
     for (let [key, value] of Object.entries(localStorage)) {
          let textBox = document.querySelector(`div[data-ref=${key}]`);
          //clear
          textBox.innerHTML = value;
      }
};
