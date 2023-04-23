onEvent('recipes', event => {
	const { altar, array, soulforge, arc, alchemytable } = event.recipes.bloodmagic
//event.recipes.bloodmagic.alchemytable('bloodmagic:arcaneashes', ['extendedcrafting:luminessence', '#forge:dusts/coke', 'mna:arcane_ash', '#forge:dusts/mana']).syphon(500).ticks(200)
function Altar(inputItem, outputItem, lifeessence, lvl, rate, Drate) {
  event.remove({output: outputItem})
  event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": inputItem
  },
  "output": {
    "item": outputItem
  },
  "upgradeLevel": lvl,
  "altarSyphon": lifeessence,
  "consumptionRate": rate,
  "drainRate": Drate
})}
  Altar('immersiveengineering:component_electronic', 'bloodmagic:mastercore', 2000, 2, 5, 1)
  Altar('botania:manasteel_sword', 'bloodmagic:daggerofsacrifice', 3000, 1, 5, 5)
  Altar('botania:elementium_block', ' bloodmagic:magicianbloodorb', 25000, 2, 20, 20)
  Altar('mna:stone_rune_blank', 'bloodmagic:blankslate', 1000, 0, 5, 5, 1)
  Altar('malum:block_of_soul_stained_steel', 'bloodmagic:masterbloodorb', 50000, 3, 30, 50)
  Altar('mysticalagriculture:inferium_block', 'bloodmagic:apprenticebloodorb', 5000, 1, 5, 5)
  Altar('botania:rune_fire', 'bloodmagic:firescribetool', 5000, 0, 20, 10)
  Altar('botania:rune_earth', 'bloodmagic:earthscribetool', 5000, 0, 20, 10)
  Altar('botania:rune_air', 'bloodmagic:airscribetool', 5000, 0, 20, 10)
  Altar('botania:rune_water', 'bloodmagic:waterscribetool', 5000, 0, 2e0, 10)
  Altar('botania:rune_mana', 'bloodmagic:duskscribetool', 5000, 0, 20, 10)
  Altar('minecraft:diamond_block', 'bloodmagic:weakbloodorb', 2000, 0, 5, 1)
})
 