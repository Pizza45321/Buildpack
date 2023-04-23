onEvent('recipes', event => {
	function itemToItems(outputItem1, outputItem2, outputItem3, inputItem)
	event.recipes.createSplashing([
		Item.of('minecraft:redstone').withChance(0.33), 
		Item.of('minecraft:glowstone_dust').withChance(0.33),
		Item.of('mna:purified_vinteum_dust').withChance(0.33)
	], 'mna:vinteum_dust')
	event.recipes.createSplashing([
		Item.of('minecraft:flint').withChance(0.25), 
		Item.of('minecraft:iron_nugget').withChance(0.12),
		Item.of('#forge:nuggets/tin').withChance(0.06),
		Item.of('#forge:nuggets/nickel').withChance(0.06),
		Item.of('#forge:nuggets/lead').withChance(0.06)
	], 'minecraft:gravel')
	event.recipes.createSplashing([
		Item.of('thermal:niter_dust').withChance(0.12),
		Item.of('thermal:apatite_dust').withChance(0.12),
		Item.of('mekanism:dust_fluorite').withChance(0.15),
		Item.of('mekanism:dust_sulfur').withChance(0.15),
		Item.of("minecraft:clay_ball").withChance(0.25)
		], 'minecraft:sand')
	event.recipes.createSplashing([
		Item.of('thermal_extra:soul_sand_dust').withChance(0.12),
		Item.of('#forge:powders/blaze').withChance(0.10),
		Item.of('#forge:powders/basalz').withChance(0.06),
		Item.of('#forge:nuggets/gold').withChance(0.03)
		], 'create:cinder_flour')
	event.recipes.createSplashing([
		Item.of('create:cinder_flour').withChance(0.12),
		Item.of('#forge:powders/blitz').withChance(0.10),
		Item.of('#forge:powders/blizz').withChance(0.06),
		Item.of('malum:blazing_quartz_fragment').withChance(0.03)
		], 'thermal_extra:soul_sand_dust')
})