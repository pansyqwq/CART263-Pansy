window.onload = goFetch;
async function goFetch() { //async function allows multiple function running on the same time
  try {//try what ever is in here
    let response = await fetch('files/tests.json'); //if we use fetch, it will return error if it doesn't run. fetch does, connect to internet and access this file and store it in json file

    let parsedResultJS = await response.json();
    console.log(parsedResultJS)//using async and await, make the loading of the link working on the back ground so it won't block everything else
      displayResults(parsedResultJS)
  }
  catch (err) { //catch the error, if there's an error
    console.log(err)//like a call back function
  }
}

function displayResults(parsedResultJS) {
  for (let i = 0; i < parsedResultJS.length; i++) {
    console.log(parsedResultJS)

    //the object
    let donutObj = parsedResultJS[i];
    //container
    let containerDiv = document.createElement("div");
    containerDiv.classList.add("donutItem");
    document.querySelector("#output").appendChild(containerDiv);

    let title = document.createElement("h3");
    title.textContent = donutObj.name;
    containerDiv.appendChild(title)

    //access the image
    let donutImage = document.createElement("img");
    donutImage.src = donutObj.image;
    containerDiv.appendChild(donutImage)
  }

}