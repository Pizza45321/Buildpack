onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('refinedstorage:controller', [
		'qqcqq',
		'qicgq',
		'ccfcc',
		'qdcnq',
		'qqcqq'
		], {
			i: "refinedstorage:basic_processor",
			d: "refinedstorage:advanced_processor",
			g: "refinedstorage:improved_processor",
			n: "rebornstorage:super_advanced_processor",
			q: "refinedstorage:quartz_enriched_iron",
			c: "refinedstorage:cable",
			f: "extradisks:advanced_machine_casing"
		})
	event.recipes.createMechanicalCrafting('2x mysticalagriculture:infusion_pedestal', [
		'aataa',
		'apgpa',
		'asasa',
		'aSaSa'
		], {
			p: 'extendedcrafting:pedestal',
			a: 'minecraft:air',
			t: '#forge:ingots/terrasteel',
			s: '#forge:ingots/steel',
			S: 'malum:hallowed_gold_ingot',
			g: 'bloodmagic:weakbloodshard'
		})
	event.recipes.createMechanicalCrafting('mysticalagriculture:infusion_altar', [
		'aataa',
		'ascsa',
		'aSlSa',
		'aaraa'
		], {
			c: 'extendedcrafting:crafting_core',
			a: 'minecraft:air',
			t: '#forge:ingots/terrasteel',
			s: '#forge:ingots/steel',
			S: 'malum:hallowed_gold_ingot',
			l: 'botania:life_essence',
			r: 'botania:rosa_arcana'
		})
	event.recipes.createMechanicalCrafting('mysticalagriculture:tinkering_table', [
		'SsssS',
		'asesa',
		'SsssS'
		], 
		{
			s: 'mysticalagriculture:soulstone',
			S: 'mysticalagriculture:soulium_block',
			e: 'mysticalagriculture:tertium_block',
			a: 'minecraft:air'

		})
	event.recipes.createMechanicalCrafting(Item.of('mininggadgets:mininggadget', '{volume:1.0f,beamRange:5,range:1}'), [
		'ppirdpp',
		'fiuppaa',
		'ppildpp',
		'aacaaaa'
		], 
		{
			p: '#forge:plates/iron',
			i: 'minecraft:iron_block',
			r: 'extendedcrafting:redstone_ingot_block',
			d: "minecraft:diamond_block",
			f: "thermal:energy_cell_frame",
			u: 'mininggadgets:upgrade_empty',
			l: 'minecraft:lapis_block',
			c: "thermal:rf_coil",
			a: 'minecraft:air'

		})
	event.recipes.createMechanicalCrafting('create:mechanical_arm' , [
		'aPrrAa',
		'araAAA',
		'araAaA',
		'pcpaaa'
		], 
		{
			p: '#forge:plates/iron',
			A: 'create:andesite_alloy',
			c: "create:brass_casing",
			a: 'minecraft:air',
			P: 'create:precision_mechanism',
			r: '#forge:rods/brass'

		})
	event.recipes.createMechanicalCrafting('create:rotation_speed_controller' , [
		'pPp',
		'sSs',
		'pbp'
		], 
		{
			p: '#forge:plates/brass',
			P: 'create:precision_mechanism',
			s: 'create:shaft',
			S: "create:speedometer",
			b: 'create:brass_casing'

		})
})