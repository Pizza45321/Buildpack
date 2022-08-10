onEvent('recipes', event => {
	const { altar, array, soulforge, arc, alchemytable } = event.recipes.bloodmagic
//event.recipes.bloodmagic.alchemytable('bloodmagic:arcaneashes', ['extendedcrafting:luminessence', '#forge:dusts/coke', 'mna:arcane_ash', '#forge:dusts/mana']).syphon(500).ticks(200)
	event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "tag": "forge:storage_blocks/diamond"
  },
  "output": {
    "item": "bloodmagic:weakbloodorb"
  },
  "upgradeLevel": 0,
  "altarSyphon": 2000,
  "consumptionRate": 5,
  "drainRate": 1
})
	event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": 'mysticalagriculture:prudentium_block'
  },
  "output": {
    "item": "bloodmagic:apprenticebloodorb"
  },
  "upgradeLevel": 1,
  "altarSyphon": 5000,
  "consumptionRate": 5,
  "drainRate": 5
})
  event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": 'botania:elementium_block'
  },
  "output": {
    "item": 'bloodmagic:magicianbloodorb'
  },
  "upgradeLevel": 2,
  "altarSyphon": 25000,
  "consumptionRate": 20,
  "drainRate": 20
})
	event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": 'malum:soul_stained_steel_block'
  },
  "output": {
    "item": 'bloodmagic:masterbloodorb'
  },
  "upgradeLevel": 3,
  "altarSyphon": 50000,
  "consumptionRate": 30,
  "drainRate": 50
})
	event.custom({
  "type": "bloodmagic:altar",
  "input": {
    "item": 'botania:livingrock'
  },
  "output": {
    "item": 'bloodmagic:blankslate'
  },
  "upgradeLevel": 0,
  "altarSyphon": 1000,
  "consumptionRate": 5,
  "drainRate": 1
})
}) 