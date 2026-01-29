
window.onload = function () {
    // we want to do something when the mouse is over the box :)
    let drawBox = document.querySelector("#draw-box-a");

    //A: add event listener + callback
    drawBox.addEventListener("mousemove", moveCallBack);

    function moveCallBack(e) {
        // console.log("mouse move");
        // console.log(this);
        // console.log(e.target);

        let rect = this.getBoundingClientRect();
        let offsetX = e.clientX - rect.x;// getting the difference between the box and the actual coordinates
        let offsetY = e.clientY - rect.y;
        // drawBox.innerHTML = `x: ${offsetX}, y:${offsetY}`;


        let pointDiv = document.createElement("div");
        pointDiv.classList.add("point");
        pointDiv.style.left = offsetX + "px";// adding the px string
        pointDiv.style.top = offsetY + "px";
        this.appendChild(pointDiv); // we are adding this new pointDiv as the child of the drawbox

    }


};