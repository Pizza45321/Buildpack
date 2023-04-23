onEvent('recipes', event=>{
	function ManaInfusion(input, output, OutputNum, mana) {
		event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": input
  },
  "output": {
    "item": output,
    'count': OutputNum
  },
  "mana": mana
})
	}

ManaInfusion('malum:soul_stained_steel_ingot', 'botania:manasteel_ingot',  3, 3000) 
ManaInfusion('minecraft:bucket', 'kubejs:lq_mana_bucket', 1,  10000)

})