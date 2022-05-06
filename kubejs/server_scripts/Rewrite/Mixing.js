onEvent('recipes', event => {
event.recipes.createMixing( Fluid.of("materialis:molten_refined_radiance" , 1000), [
 'thermal:gold_dust',
 'thermal:blitz_powder', 
 'astralsorcery:illumination_powder',
 'extendedcrafting:luminessence',
		Fluid.of('astralsorcery:liquid_starlight', 1000)]
		)
event.recipes.createMixing( Fluid.of("materialis:molten_shadow_steel" , 1000),[
	'minecraft:ender_pearl',
	'astralsorcery:nocturnal_powder',
	'create:powdered_obsidian',
	'thermal:basalz_powder',
		Fluid.of('materialis:molten_starmetal', 1000)]
		)
event.recipes.createMixing( "create:shadow_steel",[
		"create:chromatic_compound",
		Fluid.of('materialis:molten_shadow_steel', 144)]
		)
event.recipes.createMixing( "3x extendedcrafting:luminessence",[
'astralsorcery:illumination_powder',
'minecraft:glowstone_dust',
'minecraft:blaze_powder']
)
event.recipes.createMixing('4x immersiveengineering:cokebrick',[
		'minecraft:clay',
		'minecraft:clay',
		'minecraft:clay',
		'minecraft:clay',
		'create:andesite_alloy',
		Fluid.of('minecraft:lava', 250)]
		)
	event.recipes.createMixing('4x extendedcrafting:redstone_ingot',[
		'minecraft:redstone_block',
		'minecraft:redstone_block',
		'minecraft:redstone_block',
		'minecraft:redstone_block',
		'#forge:ingots/steel'
		]).heated()
	event.recipes.createMixing('1x tconstruct:smeltery_controller',[
		'tconstruct:seared_melter',
		Fluid.of('tconstruct:molten_brass', 576)
		])
	event.recipes.createMixing('3x tconstruct:grout',[
		'minecraft:clay_ball',
		'minecraft:gravel',
		'#forge:sand'
		])
	event.recipes.createMixing('create:refined_radiance',[
		'create:chromatic_compound',
		Fluid.of("materialis:molten_refined_radiance", 144)
		])
	event.recipes.createMixing('create:shadow_steel',[
		'create:chromatic_compound',
		Fluid.of("materialis:molten_shadow_steel", 144)
		])
	event.recipes.createMixing('3x extendedcrafting:black_iron_ingot',[
		'botania:black_petal_block',
		'#forge:ingots/manasteel',
		'#forge:ingots/manasteel',
		'#forge:ingots/manasteel'
		]).heated()
})


