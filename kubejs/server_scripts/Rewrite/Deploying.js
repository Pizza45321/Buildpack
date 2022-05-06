onEvent('recipes', event => {
	 event.recipes.createDeploying('immersiveengineering:component_iron', 
	 	['tconstruct:seared_brick', '#forge:plates/iron'])
	 event.recipes.createDeploying('immersiveengineering:component_steel', 
	 	['tconstruct:seared_brick', '#forge:plates/steel'])
})