onEvent('recipes', event => {
event.recipes.createMixing(Fluid.of("materialis:molten_refined_radiance" , 180), [
 '#forge:dusts/gold',
 '#forge:dusts/silver',
 'thermal:blitz_powder', 
 'extendedcrafting:luminessence',
		Fluid.of('kubejs:lq_mana', 1000)]
		)
event.recipes.createMixing( Fluid.of("materialis:molten_shadow_steel" , 180),[
	'#forge:ender_pearls',
	'#forge:dusts/quartz',
	'#forge:dusts/obsidian',
	'thermal:basalz_powder',
		Fluid.of('materialis:molten_refined_obsidian', 1000)]
		)
event.recipes.createMixing("create:shadow_steel",[
		"create:chromatic_compound",
		Fluid.of('materialis:molten_shadow_steel', 90)]
		)
event.recipes.createMixing("3x extendedcrafting:luminessence",[
'#forge:dusts/mana',
'#forge:dusts/glowstone',
'minecraft:blaze_powder']
)
event.recipes.createMixing('4x immersiveengineering:cokebrick',[
		'4x minecraft:clay',
		'create:andesite_alloy',
		Fluid.of('minecraft:lava', 250)]
		)
	event.recipes.createMixing('4x extendedcrafting:redstone_ingot',[
		'4x minecraft:redstone_block',
		'#forge:ingots/steel'
		]).heated()
	event.recipes.createMixing('1x tconstruct:smeltery_controller',[
		'tconstruct:seared_melter',
		Fluid.of('tconstruct:molten_brass', 240)
		])
	event.recipes.createMixing('3x tconstruct:grout',[
		'minecraft:clay_ball',
		'minecraft:gravel',
		'#forge:sand'
		])
	event.recipes.createMixing('create:refined_radiance',[
		'create:chromatic_compound',
		Fluid.of("materialis:molten_refined_radiance", 90)
		])
	event.recipes.createMixing('create:shadow_steel',[
		'create:chromatic_compound',
		Fluid.of("materialis:molten_shadow_steel", 90)
		])
	event.recipes.createMixing('3x extendedcrafting:black_iron_ingot',[
		'botania:black_petal_block',
		'3x #forge:ingots/manasteel'
		]).heated()
	event.recipes.createMixing(Fluid.of('kubejs:c_biofuel', 1000),[
		Fluid.of('createaddition:seed_oil', 500),
		Fluid.of('thermal:tree_oil', 500)
		])
	event.recipes.createMixing(Fluid.of('kubejs:r_biofuel', 1000),[
		Fluid.of('kubejs:c_biofuel', 500),
		Fluid.of('mekanism:steam', 500)
		])
	event.recipes.createMixing('3x immersiveengineering:blastbrick',[
		'4x create:cinder_flour',
		'minecraft:nether_bricks',
		Fluid.of('tconstruct:molten_brass', 180)
		])
	event.recipes.createMixing('3x mekanism:hdpe_pellet',[
		"12x createaddition:biomass",
		 Fluid.of('minecraft:water', 250)
		 ]).heated()
	event.recipes.createMixing(Fluid.of('kubejs:pure_inferium', 250),[
		'mysticalagriculture:inferium_essence'
		 ]).superheated()
	event.recipes.createMixing(Fluid.of('kubejs:pure_prudentium', 250),[
		'mysticalagriculture:prudentium_essence'
		 ]).superheated()
	event.recipes.createMixing(Fluid.of('kubejs:pure_tertium', 250),[
		'mysticalagriculture:tertium_essence'
		 ]).superheated()
	event.recipes.createMixing(Fluid.of('kubejs:pure_imperium', 250),[
		'mysticalagriculture:imperium_essence'
		 ]).superheated()
	event.recipes.createMixing(Fluid.of('kubejs:pure_supremium', 250),[
		'mysticalagriculture:supremium_essence'
		 ]).superheated()
	event.recipes.createMixing('4x fluxnetworks:flux_dust',[
		'#forge:dusts/enderium',
		'#forge:dusts/obsidian',
		'extendedcrafting:luminessence',
		Fluid.of('tconstruct:molten_netherite', 180)
		 ]).heated()
	event.recipes.createMixing('4x refinedstorage:processor_binding',[
	'2x #forge:slimeballs',
	'#forge:dusts/lead',
	'immersiveengineering:hemp_fiber'
	])
	event.recipes.createMixing('12x immersiveengineering:concrete',[
	'4x #forge:slag',
	'2x #forge:sand',
	'2x minecraft:gravel',
	Fluid.of('minecraft:water', 1000)
	])
	event.recipes.createMixing('1x thermal:cheese_wheel',[
	'2x #forge:mushrooms',
	'#forge:sugar',
	Fluid.of('minecraft:milk', 1000)
	])
})