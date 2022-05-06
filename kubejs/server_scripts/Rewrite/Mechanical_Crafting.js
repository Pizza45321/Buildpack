onEvent('recipes', event => {
	event.recipes.createMechanicalCrafting('botanypots:botany_pot', [
		'bfffb',
		'bBgpb',
		'abbba'
		], {
			b: 'minecraft:bricks',
			a: 'minecraft:air',
			p: 'thermal:phytogro',
			B: "minecraft:bone_meal",
			g: 'mysticalagriculture:prudentium_growth_accelerator',
			f: 'mysticalagriculture:tertium_farmland'

		})
	event.recipes.createMechanicalCrafting('appliedenergistics2:controller', [
		'ssfss',
		'sefls',
		'ffFff',
		'srcrs',
		'ssfss'
		], {
			e: "appliedenergistics2:engineering_processor",
			l: "appliedenergistics2:logic_processor",
			c: "appliedenergistics2:calculation_processor",
			s: "appliedenergistics2:smooth_sky_stone_block",
			r: "mekanism:ingot_refined_obsidian",
			F: "appliedenergistics2:fluix_block",
			f: "appliedenergistics2:fluix_glass_cable"
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
			S: '#astralsorcery:starmetal',
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
			S: '#astralsorcery:starmetal',
			l: 'botania:life_essence',
			r: 'botania:rosa_arcana'
		})
	event.recipes.createMechanicalCrafting('cagedmobs:mobcage', [
		'mmmmm',
		'mbfsm',
		'mIIIm',
		'iiiii',
		], {
			a: 'minecraft:air',
			m: 'botania:mana_glass_pane',
			b: 'minecraft:bone',
			f: 'minecraft:rotten_flesh',
			s: 'minecraft:string',
			i: '#forge:storage_blocks/iron',
			I: 'mysticalagriculture:tertium_block'
		})
	event.recipes.createMechanicalCrafting('astralsorcery:altar_attunement', [
		'rrarr',
		'rpcbr',
		'aclca',
		'rIcRr',
		'rrarr'
		], 
		{
			a: 'minecraft:air',
			r: 'astralsorcery:marble_runed',
			c: 'astralsorcery:marble_chiseled',
			l: 'astralsorcery:altar_discovery',
			p: 'botania:pixie_dust',
			I: 'astralsorcery:illumination_powder',
			R: 'bloodmagic:reagentair',
			b: 'thermal:blitz_powder'
		})
	event.recipes.createMechanicalCrafting('mysticalagriculture:tinkering_table', [
		'SsssS',
		'asesa',
		'SsssS'
		], 
		{
			s: 'mysticalagriculture:soulstone',
			S: 'mysticalagriculture:soulium_block',
			e: 'mysticalagriculture:tertium_block'

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