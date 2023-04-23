onEvent('recipes', event => {
	//event.recipes.mekanismCombining(out,bottomSlot,topSlot)
	[ Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:hepatizon"}'), , ]
	event.recipes.mekanismCombining(Item.of('tconstruct:creative_slot', '{slot:"defense"}'),'mysticalagradditions:nether_star_shard', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:seared_brick"}'))
	event.recipes.mekanismCombining(Item.of('tconstruct:creative_slot', '{slot:"abilities"}'),'mysticalagradditions:nether_star_shard', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:amethyst"}'))
	event.recipes.mekanismCombining(Item.of('tconstruct:creative_slot', '{slot:"upgrades"}'),'mysticalagradditions:nether_star_shard', Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'))
})