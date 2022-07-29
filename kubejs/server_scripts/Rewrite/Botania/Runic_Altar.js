onEvent('recipes', event=>{
	function RunicAltar([input1, input2, input3, input4, input5, input6], output, OutputNum, mana) {
		event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": output,
    "count": OutputNum
  },
  "mana": mana,
  "ingredients": [
    {
      "item": input1
    },
    {
      "item": input2
    },
    {
      "item": input3
    },
    {
      "item": input4
    },
    {
      "item": input5
    },
    {
      "item": input6
    }
  ]
})
}
RunicAltar(['bloodmagic:blankslate', 'mna:mote_air', 'malum:aerial_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:feather'], 'botania:rune_air', 2, 2000)
RunicAltar(['bloodmagic:blankslate', 'mna:mote_earth','malum:earthen_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:stone_pickaxe'], 'botania:rune_earth', 2, 2000)
RunicAltar(['bloodmagic:blankslate', 'mna:mote_water','malum:aqueous_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:fishing_rod'], 'botania:rune_water', 2, 2000)
RunicAltar(['bloodmagic:blankslate', 'mna:mote_fire','malum:infernal_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:flint_and_steel'], 'botania:rune_fire', 2,  2000)
})
	
		