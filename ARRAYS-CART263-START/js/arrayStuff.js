window.onload = function () {
	let testArray = [2, 89, 78, 89, 3, 45]
	console.log(testArray)
	console.log(testArray.sort())


	let stringSortArray = ["ABS", "giraffe", "Giraffe", "apple", "orange", "tortoise", "peanut", "penguin", "hare"]
	console.log(stringSortArray);
	console.log(stringSortArray.sort())//the capital letters get sorted first
	// IS NOW CHANGED

	function compareShapeClass(a, b) {
		const capitalA = a.toUpperCase(); // ignore upper and lowercase
		const capitalB = b.toUpperCase(); // ignore upper and lowercase
		if (capitalA > capitalB) {
			return -1;
		}
		if (capitalA > capitalB) {
			return 1;
		}
		//equal
		return 0;
	}

	// A negative value if a should come before b.
	// A positive value if b should come before a.
	// Zero if their order is unchanged.
	console.log(stringSortArray.sort(compareShapeClass))


	let lastArray = ["fruits", "poppyseeds", 5, 6, "Tuesday"];
	const [first, second, ...rest] = lastArray;
	console.log(first); // 1
	console.log(second); // 2
	console.log(rest); // [3, 4, 5]






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
		.addEventListener("click", function () { filterArraysByShape(arrayOfShapes_Two, allRows[1]) });


	// /** REDUCE */
	// const numbers_n = [11, 2, 32, 4, 5, 70];

	// const sum = numbers_n.reduce(
	// 	function (accum, initval) {
	// 		return (accum + initval)
	// 	}, 0)
	// //starting number is 0 (accum), the first initval is 11. after the first round the accum will be 11, and initval will be 2
	// //it adds all the numbers
	// console.log(sum);

	// 	//if we have a circumstance where we are reducing an array of objects to a single object...:
	// 	const donuts = [
	//     { name: 'mondays_donut', type: 'sparkly' },
	//     { name: 'tuesdays_donut', type: 'shiny' },
	//     { name: 'wednesdays_donut', type: 'squashy' }
	//   ];

	//     const newObjectFromArray = donuts.reduce((accum, item) => {
	//         /* accumulator is the array building */
	//         console.log(accum)
	//       // add object key to our object i.e. mondays_donut: { type: 'sparkly' }
	//       accum[item.name] = {type: item.type };
	//       return accum;
	//     },{});
	//   console.log(newObjectFromArray)

	// //The forEach() method executes a provided function once for each array element. 
	// //It allows us to execute an action on each element without creating a new array. Lets start with a simple array:

	// const nums = [12, 26, 37, 43, 52];
	// nums.forEach(function (num) {
	// 	console.log(` nummmm: ${num * 2}`);
	// });

	//INIT THREE
	//INIT THREE
	let arrayOfShapes_Three = [];
	for (let i = 0; i < 10; i++) { //using a regular for loop to create the elements in the array
		let color = { r: 255 - i * 9, g: 255 - i * 20, b: 255 - i * 7 };

		arrayOfShapes_Three.push(
			new CustomShape((i + 1) * 55, 50, "shape", "circle", color),
		);
	}
	add_elements_to_dom(arrayOfShapes_Three, allRows[2]);//to display our array in our document
	allRows[2].innerHTML += ``

	function forEachCallBackA() {
		document.querySelector("#pSpan").innerHTML = "";
		arrayOfShapes_Three.forEach(addPTags);

		function addPTags(el) {
			document.querySelector("#pSpan").innerHTML += ` x:${el.x} `;
		}
	}

	function forEachCallBackB() {
		document.querySelector("#pSpan").innerHTML = ""
		arrayOfShapes_Three.forEach(addPTags)

		function addPTags(el) {
			document.querySelector("#pSpan").innerHTML += ` y:${el.y} `

		}
	}
	document
		.querySelector("#forEachButtonA")
		.addEventListener("click", forEachCallBackA);

	document
		.querySelector("#forEachButtonB")
		.addEventListener("click", forEachCallBackB);


	// 	  The find() method returns the first element in an array that satisfies a provided condition. 
	// It stops searching as soon as it finds an element that matches the condition... Again - a simple ex first: an array of numbers:
	// const numbers_toFind = [24, 67, 45, 95];
	// const multipleOfFive = numbers_toFind.find(
	// 	function (num) {
	// 		return (num % 5 === 0)
	// 	});
	// console.log(multipleOfFive);


	//INIT FOUR

	let arrayOfShapes_Four = [];

	for (let i = 0; i < 12; i++) {
		//let color = `rgb(${255 - i * 10},0,${255 - i * 10})`;
		let color = { r: 255 - i * 9, g: 255 - i * 20, b: 255 - i * 7 };
		arrayOfShapes_Four.push(
			new CustomShape((i + 1) * 55, 50, "shape", 'square', color)
		);
	}
	add_elements_to_dom(arrayOfShapes_Four, allRows[3]);
	function findCallBackA(arrayOfShapes, row) {
		//get an object back whose x> 200
		const foundObj = arrayOfShapes.find(
			function (el) {
				return (el.x > 200)
			})
		console.log(foundObj)
		if (foundObj)
			add_single_element_to_dom(foundObj, row)

	}

	function findCallBackB(arrayOfShapes, row) {
		//get an object back whose y> 40
		const foundObj = arrayOfShapes.find(
			function (el) {
				return (el.y > 40)
			})
		console.log(foundObj)
		if (foundObj)
			add_single_element_to_dom(foundObj, row)

	}

	document
		.querySelector("#findButtonA")
		.addEventListener("click", function () {
			findCallBackA(arrayOfShapes_Four, allRows[3]);
		});

	document
		.querySelector("#findButtonB")
		.addEventListener("click", function () {
			findCallBackB(arrayOfShapes_Four, allRows[3]);
		});


	// The some() method checks if at least one element in an array satisfies a provided condition. 
	// It returns true if any element matches the condition, otherwise false.
	// const numbers_some = [24, 67, 45, 95];
	// const hasMultiplesOfFive = numbers_some.some(
	// 	function (num) {
	// 		return (num % 5 === 0)
	// 	});
	// console.log(hasMultiplesOfFive);//because we have 45 and 95, the returned result will be true
}