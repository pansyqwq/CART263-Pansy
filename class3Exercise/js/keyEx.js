window.onload = function () {
    let speedX = 5;
    let fastSpeedX = 15;
    let turbo = false;


    window.addEventListener("keydown", function (event) {
        //this.document.querySelector("#textContainer").textContent +=`${event.key}`;
        if (event.key === "ArrowRight") {
            if (turbo) {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) + fastSpeedX + "px";
            } else {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) + speedX + "px";
            }

            //parseInt takes a number written into a string and turn it into an int
            //parseInt(this.document.getElementById(boxA).style.left)  looking at the left of the = sign, taking the string and turn it into an int
            // adding speedX(which is an integer)
            //transfer the int into string by adding "px"
            // we r setting the left side to this new string, which is the original + speed. 
        }
        if (event.key === "ArrowLeft") {
               if (turbo) {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) - fastSpeedX + "px";
            } else {
                document.getElementById("boxA").style.left =
                    parseInt(document.getElementById("boxA").style.left) -speedX + "px";
            }
            // document.getElementById("boxA").style.left =
            //     parseInt(document.getElementById("boxA").style.left) - speedX + "px";
        } else if (event.key === "Shift") {
            turbo = true;
            document.getElementById("boxA").style.background = "rgb(226, 112, 177)";
        }
    });
    window.addEventListener("keyup", function (event) {
        console.log("keyup");
        //2: change color when space is down

        if (event.key === "Shift") {
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
        }
        else {
            console.log(`key up not shift:`);
            console.log(event);
        }
    });
}
