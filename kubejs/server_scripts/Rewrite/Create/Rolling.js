onEvent('recipes', event =>{
	function Rolling(inputTag, output) {
	event.custom({
	"type":"createaddition:rolling",
	"input": {
      	"tag": inputTag
	},
	"result": {
		"item": output,
		"count": 2
	}
})
	}
	Rolling('forge:ingots/iron', 'immersiveengineering:stick_iron')
	Rolling('forge:ingots/electrum', 'immersiveposts:stick_electrum')
	Rolling('forge:ingots/aluminum', 'immersiveengineering:stick_aluminum')
	Rolling('forge:ingots/steel', 'immersiveengineering:stick_steel')
	Rolling('forge:ingots/gold', 'immersiveposts:stick_gold')
	Rolling('forge:ingots/copper', 'immersiveposts:stick_copper')
	Rolling('forge:ingots/uranium', 'immersiveposts:stick_uranium')
	Rolling('forge:ingots/nickel', 'immersiveposts:stick_nickel')
	Rolling('forge:ingots/silver', 'immersiveposts:stick_silver')
	Rolling('forge:ingots/lead', 'immersiveposts:stick_lead')
	Rolling('forge:ingots/brass', 'createaddition:brass_rod')
	Rolling('materialis:plastic_material', 'mekanism:hdpe_rod')
	Rolling('forge:ingots/constantan', 'immersiveposts:stick_constantan')
})