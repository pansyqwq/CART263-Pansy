
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
        drawBox.innerHTML = `x: ${offsetX}, y:${offsetY}`;
    }


};