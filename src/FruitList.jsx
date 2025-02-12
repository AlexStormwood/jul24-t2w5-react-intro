
let favouriteFruits = [
	"papaya",
	"cherries",
	"oranges",
	"mangoes",
	"peaches"
];

export function FruitList(){

	return(
		<div className="fruitList">
			<h1>Favourite Fruits:</h1>
			
			<ul>

				{favouriteFruits.map((fruit) => {
					return <li key={fruit}>{fruit}</li>
				})}

			</ul>
			
		</div>
	);
}