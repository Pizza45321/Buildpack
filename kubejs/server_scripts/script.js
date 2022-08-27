// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Reipes are a go!')


onEvent('recipes', event => {
	event.recipes.immersiveengineeringMetalPress('thermal:diamond_gear', '4x minecraft:diamond', 'immersiveengineering:mold_gear')
  event.replaceInput({},['farmersdelight:wheat_dough', 'create:dough'], '#forge:dough_wheat')
  event.replaceInput({},['industrialforegoing:dryrubber','thermal:rubber'], '#forge:rubber')
  event.replaceInput({},['culturaldelights:corn_dough', 'farmersrespite:nether_wart_sourdough'], '#forge:dough_corn')
  event.replaceInput({},['thermal:eggplant', 'culturaldelights:eggplant', "#forge:crops/eggplant"])
	})

onEvent('tags.items', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')
  event.add('forge:rubber', ['industrialforegoing:dryrubber','thermal:rubber'])
  event.add('forge:raw_materials/soulstone', 'malum:raw_soulstone')
  event.add('forge:ores/b_quartz', 'malum:blazing_quartz_ore')
  event.add('forge:ores/vinteum', 'mna:vinteum_ore')
  event.add('famersrespite:tea_leaves', 'delightful:green_tea_leaf')
  event.add('forge:cooked_beef', 'delightful:cactus_steak')
  event.add('forge:dough_wheat', ['farmersdelight:wheat_dough','create:dough'])
  event.add('forge:dough_corn', ['culturaldelights:corn_dough', 'farmersrespite:nether_wart_sourdough'])
  event.add('forge:raw_beef', 'delightful:cactus_flesh')
  event.add('forge:cheese_or_milk', 'thermal:cheese_wedge')
  event.add('forge:cheese', 'thermal:cheese_wedge')
  event.add('forge:crops/eggplant', ['culturaldelights:eggplant', 'thermal:eggplant'])
  event.add('culturaldelights:regular_eggplants', 'thermal:eggplant')
  event.add('refinedstorage:parts/fluids/4096k', 'refinedstorage:4096k_fluid_storage_part')
	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
