// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = true
settings.logErroringRecipes = true

console.info('Reipes are a go!')


onEvent('recipes', event => {
	event.recipes.immersiveengineeringMetalPress('thermal:diamond_gear', '4x minecraft:diamond', 'immersiveengineering:mold_gear')
  event.replaceInput({},['farmersdelight:wheat_dough', 'create:dough'], '#forge:dough_wheat')
  event.replaceInput({},['industrialforegoing:dryrubber','thermal:rubber'], '#forge:rubber')
  event.replaceInput({},['culturaldelights:corn_dough', 'farmersrespite:nether_wart_sourdough'], '#forge:dough_corn')
  event.replaceInput({},['thermal:eggplant', 'culturaldelights:eggplant'], "#forge:crops/eggplant")
	})
onEvent('tags.fluids', event => {
  event.add('bpa:lq_mana', 'kubejs:lq_mana')
  event.add('bpa:s_acid', 'kubejs:s_acid')
  event.add('bpa:m_inferium', 'kubejs:pure_inferium')
  event.add('bpa:m_prudentium', 'kubejs:pure_prudentium')
  event.add('bpa:m_imperium', 'kubejs:pure_imperium')
  event.add('bpa:m_tertium', 'kubejs:pure_tertium')
  event.add('bpa:m_supremium', 'kubejs:pure_supremium')
})
onEvent('tags.items', event => {
  event.add('create_sa:exoskeltons', ['create_sa:brass_exoskeleton_chestplate','create_sa:andesite_exoskeleton_chestplate','create_sa:copper_exoskeleton_chestplate'])
  event.add('forge:ingots/soulium','mysticalagriculture:soulium_ingot') 
  event.add('forge:ingots/prosperity','mysticalagriculture:prosperity_ingot') 
  event.add('forge:ingots/inferium','mysticalagriculture:inferium_ingot')
  event.add('forge:ingots/prudentium','mysticalagriculture:prudentium_ingot')
  event.add('forge:ingots.tertium', 'mysticalagriculture:tertium_ingot')
  event.add('forge:ingots/imperium', 'mysticalagriculture:imperium_ingot')
  event.add('forge:ingots/supremium', 'mysticalagriculture:supremium_ingot')
  event.add('forge:ingots/insanium', 'mysticalagradditions:insanium_ingot')
  event.add('forge:ingots/gaia', 'botania:gaia_ingot')
  event.add('forge:rubber', ['industrialforegoing:dryrubber','thermal:rubber'])
  event.add('forge:mushrooms', ['minecraft:crimson_fungus', 'minecraft:warped_fungus'])
  event.add('bpa:bricks', ['createdeco:blue_brick', 'createdeco:scarlet_brick', 'createdeco:dusk_brick', 'createdeco:worn_brick', 'createdeco:dean_brick', 'minecraft:brick', 'minecraft:nether_brick', 'createdeco:pearl_brick', 'tconstruct:seared_brick', 'tconstruct:scorched_brick'])
  event.add('forge:raw_materials/soulstone', 'malum:raw_soulstone')
  event.add('forge:ores/b_quartz', 'malum:blazing_quartz_ore')
  event.add('forge:gems/b_quartz', 'malum:blazing_quartz')
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
  event.add('forge:gems/prosperity', 'mysticalagriculture:prosperity_shard')
  event.add('forge:ingots/silver', 'mna:transmuted_silver')
  event.add('curios:back', ['create:copper_backtank', 'mekanism:scuba_tank'])
  event.add('forge:capstones/tier2', ['minecraft:shroomlight', 'minecraft:sea_lantern', 'minecraft:glowstone'])
  event.add('forge:ingots/soulsteel' , 'malum:soul_stained_steel_ingot')
  event.add('forge:ingots/hallowed_gold', 'malum:hallowed_gold_ingot')
  event.add('forge:nuggets/hallowed_gold', 'malum:hallowed_gold_nugget')
  event.add('forge:ingots/redstone', 'extendedcrafting:redstone_ingot')
  event.add('forge:ingots/black_iron', 'extendedcrafting:black_iron_ingot')
  event.add('forge:ingots/ender', 'extendedcrafting:ender_ingot')
  event.add('malum:spirits', ['malum:wicked_spirit', 'malum:aqueous_spirit', 'malum:aerial_spirit', 'malum:infernal_spirit', 'malum:earthen_spirit', 'malum:eldritch_spirit', 'malum:arcane_spirit', 'malum:sacred_spirit'])
  event.add('forge:dusts/soulium', 'mysticalagriculture:soulium_dust')
  event.add('forge:powders', ['thermal:blizz_powder', 'thermal:blitz_powder', 'thermal:basalz_powder','minecraft:blaze_powder'])
  event.add('forge:powders/blitz', 'thermal:blitz_powder')
  event.add('forge:powders/basalz', 'thermal:basalz_powder')
  event.add('forge:powders/blizz', 'thermal:blizz_powder')
  event.add('forge:powders/blaze', 'minecraft:blaze_powder')
  event.add('forge:fertilizer', ['thermal:phytogro', 'thermal:compost', 'immersiveengineering:fertilizer'])
  event.add('refinedstorage:parts/items/64k', 'refinedstorage:64k_storage_part')

})
