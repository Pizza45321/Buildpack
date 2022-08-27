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
	function AdvMachines(output, in1, in2)  {
		event.recipes.createMechanicalCrafting(output, [
		'apdpa',
		'phihp',
		'dzmyd',
		'HlcrH',
		'aHdHa'
		], 
		{
			p: '#forge:plastic',
			H: 'mekanism:hdpe_sheet',
			d: 'immersiveengineering:plate_duroplast',
			a: 'minecraft:air',
			z: in1, 
			y: in2,
			h: 'immersiveengineering:heavy_engineering',
			l: 'immersiveengineering:light_engineering',
			r: 'immersiveengineering:rs_engineering',
			c: 'immersiveengineering:component_electronic_adv',
			i: 'thermal:upgrade_augment_3',
			m: '#industrialforegoing:machine_frame/advanced'
		})
	}
	AdvMachines('industrialforegoing:enchantment_factory', 'minecraft:enchanting_table', 'create_stuff_additions:heap_of_experience')
	AdvMachines('industrialforegoing:enchantment_applicator', 'tconstruct:tinkers_anvil', 'mekanism:dynamic_tank')
	AdvMachines('industrialforegoing:enchantment_extractor', 'immersiveengineering:grindingdisk', 'minecraft:bookshelf')
	AdvMachines('industrialforegoing:enchantment_sorter', 'minecraft:bookshelf', 'thermal:item_filter_augment')
	AdvMachines('industrialforegoing:mob_crusher', 'minecraft:diamond_sword', 'minecraft:diamond_axe')
	AdvMachines('industrialforegoing:mob_duplicator', 'hostilenetworks:sim_chamber', 'hostilenetworks:blank_data_model')
	AdvMachines('industrialforegoing:material_stonework_factory	', 'extendedcrafting:advanced_table', 'minecraft:blast_furnace')
	AdvMachines('industrialforegoing:washing_factory', 'minecraft:raw_iron', 'industrialforegoing:meat_feeder')
	AdvMachines('industrialforegoing:fluid_sieving_machine', 'createdeco:andesite_bars', 'createdeco:andesite_bars')
	AdvMachines('industrialforegoing:potion_brewer', 'minecraft:brewing_stand', 'minecraft:nether_wart')
	AdvMachines('industrialforegoing:infinity_charger', 'thermal:energy_cell', 'thermal:rf_coil')
	AdvMachines('industrialforegoing:stasis_chamber', 'minecraft:nether_star', 'minecraft:soul_sand')
	AdvMachines('industrialforegoing:wither_builder', 'minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull')
})