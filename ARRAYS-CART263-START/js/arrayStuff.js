window.onload = function () {
	// FOR BUILDING THE EXAMPLES :)
	const allRows = document.querySelectorAll(".flex-row");
	let arrayOfShapes_One = [];
	//INIT ONE:
	for (let i = 0; i < 10; i++) {
		let color = { r: (255 - i * 10), g: 50, b: 100 };
		arrayOfShapes_One.push(
			new CustomShape((i + 1) * 55, 50, "shape", "rectangle", color)
		);
	}
	add_elements_to_dom(arrayOfShapes_One, allRows[0]);

	//if I want to remap the array in different shape
	function mapArraysShape(arrayOfShapes, row) {
		// MAP ONE
		let arrayOfShapesNew = arrayOfShapes.map(changeShape);
		add_elements_to_dom(arrayOfShapesNew, row);

		function changeShape(el) {
			return (
				/* need to make a copy */
				new CustomShape(el.x, el.y + 100, el.shapeClass, "circle", el.color)
			)
		}
	};
	function mapArraysColor(arrayOfShapes, row) {
		// MAP TWO
		let arrayOfShapesNew = arrayOfShapes.map(changeColor);
		add_elements_to_dom(arrayOfShapesNew, row);

		//is I want to change the color in the array
		function changeColor(el) {
			//take red color
			let newColor = { r: el.color.r, g: 125, b: 255 }
			return (
				/* need to make a copy */
				new CustomShape(el.x, el.y + 200, el.shapeClass, el.customShapeClass, newColor) //use new color instead of el.color
			)//el.y + 200 prints a row below
		}
	}

	document
		.querySelector("#mapButtonA")
		.addEventListener("click", function () {
			mapArraysShape(arrayOfShapes_One, allRows[0])//change shape
		});
	document
		.querySelector("#mapButtonB")
		.addEventListener("click", function () {
			mapArraysColor(arrayOfShapes_One, allRows[0])//change color
		});

	//INIT TWO:
	let cshape = "";
	let arrayOfShapes_Two = []
	for (let i = 0; i < 16; i++) {
		let color = { r: 255 - i * 10, g: 50, b: 100 };
		if (i % 3 === 0) cshape = "circle"; //%  takes the remainder, if the remainder =0 then it will be circle
		else cshape = "rectangle";//if the remainder is not 0 then it will be a square
		arrayOfShapes_Two.push(
			new CustomShape((i + 1) * 55, 50, "shape", cshape, color),
		);
	}
	add_elements_to_dom(arrayOfShapes_Two, allRows[1]);

	function filterArraysXPos(arrayOfShapes, row) {
		// FILTER ONE
		let filteredArray = arrayOfShapes.filter(greater_posX);

		function greater_posX(el) {
			return (
				(el.x > 200 && el.x < 400)// if the x position is greater than 200, it will pass the filter
			)
		}
		add_elements_to_dom(filteredArray, row);

		//then we can map - to change the y :)
		let arrayOfShapesYChange = filteredArray.map(
			function (el) {
				return (new CustomShape(el.x, el.y + 100, el.shapeClass, el.customShapeClass, el.color))

			});
		console.log(filteredArray)
		//update
		add_elements_to_dom(arrayOfShapesYChange, row);
	}

	function filterArraysByShape(arrayOfShapes, row) {
		// FILTER ONE
		let filterArraysShape = arrayOfShapes.filter(shape_filter);

		function shape_filter(el) {
			return (
				(el.customShapeClass === 'circle') // only the circle can pass the filter
			)
		}

		//then we can map - to change the y :)
		let arrayOfShapesNew = filterArraysShape.map(
			function (el) {
				return (new CustomShape(el.x, el.y + 200, el.shapeClass, el.customShapeClass, el.color))

			});
		add_elements_to_dom(arrayOfShapesNew, row);
	}
	document
		.querySelector("#filterButtonA")
		.addEventListener("click", function () { filterArraysXPos(arrayOfShapes_Two, allRows[1]) });
	
	document
      .querySelector("#filterButtonB")
      .addEventListener("click", function(){filterArraysByShape(arrayOfShapes_Two, allRows[1])});


	//INIT THREE
	//INIT FOUR

}