// var Tooltip = require("rc-tooltip"); // CommonJS
// import Tooltip from "rc-tooltip"; // Modern JavaScript import/export syntax

import { CopyBlock } from "react-code-blocks";

let favouriteFruits = [
	"papaya",
	"cherries",
	"oranges",
	"mangoes",
	"peaches"
];

let exampleJavaScriptCode = `
console.log("Hello world!");
let someNumber = 1;
console.log("Some number is: " + 1);
`;


export function FruitList(){

	return(
		<div className="fruitList">

			{/* <Tooltip placement="top" trigger={["hover"]} overlay={<div> JUL24 Cohort&apos;s Favourite Fruits </div>}> */}
				<h1>Favourite Fruits:</h1>
			{/* </Tooltip> */}

			{/*  */}

			<CopyBlock 
				text={exampleJavaScriptCode} 
				language="javascript" 
				showLineNumbers={true} 
				startingLineNumber={1} 
				wrapLongLines={true}  
			/>
			
			
			<ul>

				{favouriteFruits.map((fruit) => {
					return <li key={fruit}>{fruit}</li>
				})}

			</ul>
			
		</div>
	);
}