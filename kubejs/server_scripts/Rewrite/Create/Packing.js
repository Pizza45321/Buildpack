onEvent('recipes', event => {
	event.recipes.createCompacting('2x extendedcrafting:black_iron_ingot',['2x #forge:ingots/manasteel', '#forge:bitumen', 'thermal:gunpowder_mushroom_spores']).heated()
	event.recipes.createCompacting('2x extendedcrafting:redstone_ingot',['2x #forge:ingots/manasteel','4x thermal:redstone_mushroom_spores']).heated()
	event.recipes.createCompacting('6x immersiveengineering:hempcrete',['3x #forge:fiber_hemp','6x #forge:clay']).heated()
	event.recipes.createCompacting('#forge:gravel', '4x minecraft:flint')
})