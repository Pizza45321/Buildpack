onEvent('recipes', event => {
	event.recipes.createMixing(Fluid.of("materialis:molten_refined_radiance" , 180), [
	'mna:chimerite_gem',
 '#forge:dusts/electrum',
 '#forge:dusts/osmium',
 'thermal:blitz_powder', 
	Fluid.of('kubejs:lq_mana', 1000)]).superheated().id('bpa:mrr')
	event.recipes.createMixing( Fluid.of("materialis:molten_shadow_steel" , 180),[
	'#forge:ender_pearls',
	'#forge:dusts/quartz',
	'#forge:dusts/osmium',
	'thermal:basalz_powder',
		Fluid.of('kubejs:lq_mana', 1000)]).superheated().id('bpa:mss')
	event.recipes.createMixing("4x extendedcrafting:luminessence",[
	'#forge:dusts/glowstone',
	'#forge:dusts/mana',
	'mna:purified_vinteum_dust',
	'#forge:dusts/blaze',
	'malum:blazing_quartz_fragment'
	]).id('bpa:luminessence')
	event.recipes.createMixing('3x immersiveengineering:cokebrick',[
		'4x #forge:clay',
		'create:andesite_alloy',
		Fluid.of('minecraft:lava', 250)]).id('bpa:coke_brick')
	event.recipes.createMixing('3x immersiveengineering:blastbrick',[
		'4x create:cinder_flour',
		'minecraft:nether_bricks',
		Fluid.of('tconstruct:magma', 250)
		]).id('bpa:blast_brick')
	event.recipes.createMixing('3x tconstruct:grout',[
		'#forge:clay',
		'#forge:gravel',
		'#forge:sand'
		]).id('bpa:grout')
	event.recipes.createMixing(Fluid.of('kubejs:c_biofuel', 1000),[
		Fluid.of('createaddition:seed_oil', 500),
		Fluid.of('thermal:tree_oil', 500)
		]).id('bpa:crude_biofuel')
	event.recipes.createMixing(Fluid.of('kubejs:r_biofuel', 1000),[
		Fluid.of('kubejs:c_biofuel', 500),
		Fluid.of('mekanism:steam', 500)
		]).id('bpa:refined_biofuel')
	event.recipes.createMixing('4x refinedstorage:processor_binding',[
	'2x #forge:slimeballs',
	'#forge:dusts/lead',
	'immersiveengineering:hemp_fiber'
	]).id('bpa:processor_binding')
	event.recipes.createMixing('9x immersiveengineering:concrete',[
	'4x #forge:slag',
	'2x #forge:sand',
	'2x minecraft:gravel',
	Fluid.of('minecraft:water', 1000)
	]).id('bpa:concrete')
	event.recipes.createMixing('9x immersivepetroleum:asphalt',[
	'4x #forge:sand',
	'2x #forge:gravel',
	'2x #forge:bitumen',
	Fluid.of('minecraft:water', 1000)
	]).id('bpa:asphalt')
	event.recipes.createMixing('1x thermal:cheese_wheel',[
	'2x #forge:mushrooms',
	'#forge:sugar',
	Fluid.of('minecraft:milk', 1000)
	]).id('bpa:cheese_wheel')
	//FluidAlloyingBeforeILearnHowToGetIngredientsFromADifferentRecipeType
	

	event.recipes.createMixing(Fluid.of('tconstruct:molten_brass', 180), [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_zinc', 90)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_rose_gold', 180), [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_gold', 90)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_bronze', 360), [Fluid.of('tconstruct:molten_copper', 270), Fluid.of('tconstruct:molten_tin', 90)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_invar', 270), [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('tconstruct:molten_nickel', 180)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_constantan', 90), [Fluid.of('tconstruct:molten_copper', 90), Fluid.of('tconstruct:molten_nickel', 90)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_amethyst_bronze', 90), [Fluid.of('tconstruct:molten_bronze', 90), Fluid.of('tconstruct:molten_amethyst', 100)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_netherite', 90), [Fluid.of('tconstruct:molten_debris', 360), Fluid.of('tconstruct:molten_gold', 180)]).heated()
	event.recipes.createMixing(Fluid.of('tconstruct:molten_manyullyn', 360), [Fluid.of('tconstruct:molten_debris', 90), Fluid.of('tconstruct:molten_cobalt', 270)]).heated()
	event.recipes.createMixing(Fluid.of('tinkers_thing:molten_hematite', 100), [Fluid.of('tconstruct:blood', 250), Fluid.of('tconstruct:molten_debris', 90), Fluid.of('tconstruct:molten_obsidian', 250)]).heated()
	//3+ Fluid Input Alloys
	//event.recipes.createMixing(Fluid.of('tconstruct:molten_queen_slime', 180), [Fluid.of('tconstruct:molten_cobalt', 90), Fluid.of('tconstruct:molten_gold', 90), Fluid.of('tconstruct:magma', 250)])
	//event.recipes.createMixing(Fluid.of('tconstruct:molten_slimesteel', 180), [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('tconstruct:sky_slime', 250), Fluid.of('tconstruct:seared_stone', 250)])
	//event.recipes.createMixing(Fluid.of('materialis:molten_fairy', 180), [Fluid.of('tconstruct:molten_gold', 90), Fluid.of('tconstruct:soul', 1000), Fluid.of('tconstruct:milk', 1000)])
	//event.recipes.createMixing(Fluid.of('tconstruct:molten_hepatizon', 180), [Fluid.of('tconstruct:molten_cobalt', 90), Fluid.of('tconstruct:molten_copper', 180), Fluid.of('tconstruct:molten_quartz', 400)])
	//event.recipes.createMixing(Fluid.of('tconstruct:molten_pig_iron', 180), [Fluid.of('tconstruct:molten_iron', 90), Fluid.of('#forge:blood', 500), Fluid.of('#forge:honey', 250)])
	function melting(outputFluid, [inputItem]) {
			event.recipes.createMixing(outputFluid,[inputItem]).superheated()
			event.recipes.thermal.crucible(outputFluid, inputItem)
	}
	function heatedAlloys(outputItem, [input1, input2], allowedSmelter)  {
		event.recipes.createMixing(outputItem,[input1,input2]).heated()
			if (allowedSmelter) {
				event.recipes.thermal.smelter(outputItem, [input1, input2])
			}
	}
	function fluidInfusion(outputItem, [inputItem, inputFluid]) {
		event.remove({output: outputItem})
		event.recipes.createMixing(outputItem, [inputItem, inputFluid])
		event.recipes.createFilling(outputItem, [inputItem, inputFluid])
		event.recipes.thermal.bottler(outputItem, [inputItem, inputFluid])
	}
melting(Fluid.of('kubejs:pure_supremium', 250),['mysticalagriculture:supremium_essence'])	
melting(Fluid.of('kubejs:pure_inferium', 250),['mysticalagriculture:inferium_essence'])
melting(Fluid.of('kubejs:pure_prudentium', 250),['mysticalagriculture:prudentium_essence'])
melting(Fluid.of('kubejs:pure_tertium', 250),['mysticalagriculture:tertium_essence'])
melting(Fluid.of('kubejs:pure_imperium', 250),['mysticalagriculture:imperium_essence'])
melting(Fluid.of('tconstruct:blazing_blood', 50), ['minecraft:blaze_powder'])
melting(Fluid.of('thermal:redstone', 100), ['#forge:dusts/redstone'])
melting(Fluid.of('thermal:redstone', 900), ['#forge:storage_blocks/redstone'])
melting(Fluid.of('thermal:glowstone', 100), ['#forge:dusts/glowstone'])
melting(Fluid.of('thermal:glowstone', 1000), ['#forge:storage_blocks/glowstone'])
melting(Fluid.of('thermal:ender', 250), ['#forge:ender_pearls'])
fluidInfusion('create:refined_radiance',['create:chromatic_compound',Fluid.of("materialis:molten_refined_radiance", 90)])
fluidInfusion('create:shadow_steel',['create:chromatic_compound',Fluid.of("materialis:molten_shadow_steel", 90)])
fluidInfusion('thermal:enderium_glass', ['thermal:obsidian_glass',Fluid.of('tconstruct:molten_enderium', 72)])	
fluidInfusion('thermal:signalum_glass', ['thermal:obsidian_glass', Fluid.of('tconstruct:molten_signalum', 72)])
fluidInfusion('thermal:lumium_glass', ['thermal:obsidian_glass', Fluid.of('tconstruct:molten_lumium', 72)])
fluidInfusion('thermal_extra:soul_infused_glass', ['thermal:obsidian_glass', Fluid.of('thermal_extra:soul_infused', 72)])
fluidInfusion('thermal_extra:shellite_glass', ['thermal:obsidian_glass', Fluid.of('thermal_extra:shellite', 72)])
fluidInfusion('thermal_extra:twinite_glass', ['thermal:obsidian_glass', Fluid.of('thermal_extra:twinite', 72)])
fluidInfusion('thermal_extra:dragonsteel_glass', ['thermal:obsidian_glass', Fluid.of('thermal_extra:dragonsteel', 72)])
fluidInfusion('bigreactors:reinforced_reactorcasing', ['bigreactors:basic_reactorcasing', Fluid.of('industrialforegoing:ether_gas', 250)])
fluidInfusion('bigreactors:reinforced_turbinecasing', ['bigreactors:basic_turbinecasing', Fluid.of('industrialforegoing:ether_gas', 250)])
fluidInfusion('1x tconstruct:smeltery_controller',['tconstruct:seared_melter',Fluid.of('tconstruct:molten_brass', 270)])
})