window.onload = setup;
function setup() {
    console.log("drag ex");
    let handleDragging = function (event) {
        console.log("on drag")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);

        event.dataTransfer.clearData();
        event.dataTransfer.setData("objDraggedID",event.target.id);
    };

    let handleDraggingStop = function (event) {
        console.log("on stop")
        //HERE :: the event target refers to the object being dragged...
        console.log(event.target.id);
        // HERE - this refers to the window
        console.log(this);
    };

    /** NEW:: TO HANDLE DROPPING **/
    let handleDrop = function (event) {
        event.preventDefault();// this will cnacel the defalt behavior of drop

        console.log("dropped");
        let theObj = event.dataTransfer.getData("objDraggedID");
        event.target.appendChild(document.getElementById(theObj));// dropping the object as a child of the target
    }

    window.addEventListener("dragstart", handleDragging);// the dragging event will happen over the entire window, whenever drag starts and it's in the window, we call handledragging
    window.addEventListener("dragend", handleDraggingStop);
    window.addEventListener("drop", handleDrop);

    window.addEventListener("dragover", function (event) {
        console.log("over");
        event.preventDefault();
    });

}
