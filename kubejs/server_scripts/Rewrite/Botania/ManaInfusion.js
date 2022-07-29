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
ManaInfusion('minecraft:bucket', 'kubejs:lq_mana_bucket', 1,  100000)

})