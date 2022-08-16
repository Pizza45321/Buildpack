onEvent('recipes', event => {
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
	event.recipes.createSplashing(['minecraft:clay_ball',
		Item.of('thermal:niter_dust').withChance(0.12),
		Item.of('thermal:apatite_dust').withChance(0.12),
		Item.of('mekanism:dust_fluorite').withChance(0.15),
		Item.of('mekanism:dust_sulfur').withChance(0.15),
		Item.of("minecraft:clay_ball").withChance(0.25)
		], 'minecraft:sand')
	
})