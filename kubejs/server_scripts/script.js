// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Reipes are a go!')


onEvent('recipes', event => {
	event.recipes.immersiveengineeringMetalPress('thermal:diamond_gear', '4x minecraft:diamond', 'immersiveengineering:mold_gear')
	event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 5000000,
  "inputCount": 150000,
  "ingredient": {
    "item": 'appliedenergistics2:64k_cell_component'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_singularity'
  },
  "result": {
    "item": 'appliedenergistics2:creative_storage_cell'
  }
	})
	})

onEvent('tags.items', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
  event.add('forge:rubber', 'industrialforegoing:dryrubber')
  event.add('forge:rubber', 'thermal:rubber')
  event.add('forge:raw_materials/soulstone', 'malum:raw_soulstone')
  event.add('forge:ores/b_quartz', 'malum:blazing_quartz_ore')
  event.add('forge:ores/vinteum', 'mna:vinteum_ore')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

