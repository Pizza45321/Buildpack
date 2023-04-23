onEvent('recipes', event => {
	event.recipes.createSequencedAssembly([
  'botania:creative_pool'
], 'botania:mana_pool', [
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet','botania:gaia_ingot']),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'bloodmagic:weakbloodshard']),
  event.recipes.createFilling('create:brass_sheet', ['create:brass_sheet', Fluid.of("materialis:molten_elementium", 10000)]),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:ingots/starmetal']),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'bloodmagic:reagentbinding']),
  event.recipes.createPressing('create:brass_sheet',['create:brass_sheet'])
]).transitionalItem('create:brass_sheet').loops(2)
event.recipes.createSequencedAssembly([
  'immersiveengineering:rs_engineering'
], 'immersiveengineering:sheetmetal_iron', [
  event.recipes.createDeploying('kubejs:empty_engineering', ['kubejs:empty_engineering', 'extendedcrafting:redstone_component']),
  event.recipes.createDeploying('kubejs:empty_engineering', ['kubejs:empty_engineering', 'immersiveengineering:wirecoil_redstone']),
  event.recipes.createFilling('kubejs:empty_engineering', ['kubejs:empty_engineering', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('kubejs:empty_engineering',['kubejs:empty_engineering'])
]).transitionalItem('kubejs:empty_engineering').loops(2)
event.recipes.createSequencedAssembly([
  'immersiveengineering:light_engineering'
], 'immersiveengineering:sheetmetal_iron', [
  event.recipes.createDeploying('kubejs:empty_engineering', ['kubejs:empty_engineering', 'immersiveengineering:component_iron']),
  event.recipes.createDeploying('kubejs:empty_engineering', ['kubejs:empty_engineering', 'immersiveengineering:wirecoil_copper']),
  event.recipes.createFilling('kubejs:empty_engineering', ['kubejs:empty_engineering', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('kubejs:empty_engineering',['kubejs:empty_engineering'])
]).transitionalItem('kubejs:empty_engineering').loops(2)
  event.recipes.createSequencedAssembly(['immersiveengineering:heavy_engineering'
], 'immersiveengineering:sheetmetal_steel', [
  event.recipes.createDeploying('kubejs:empty_engineering', ['kubejs:empty_engineering', 'immersiveengineering:component_steel']),
  event.recipes.createDeploying('kubejs:empty_engineering', ['kubejs:empty_engineering', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createFilling('kubejs:empty_engineering', ['kubejs:empty_engineering', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('kubejs:empty_engineering',['kubejs:empty_engineering'])
]).transitionalItem('kubejs:empty_engineering').loops(2)
  event.recipes.createSequencedAssembly(['4x immersiveengineering:component_iron'
], '#forge:plates/copper', [
  event.recipes.createDeploying('kubejs:incomplete_component', ['kubejs:incomplete_component', '#forge:plates/iron']),
  event.recipes.createDeploying('kubejs:incomplete_component', ['kubejs:incomplete_component', '#forge:gears/copper']),
  event.recipes.createCutting('kubejs:incomplete_component',['kubejs:incomplete_component']),
  event.recipes.createDeploying('kubejs:incomplete_component', ['kubejs:incomplete_component', '#forge:nuggets/brass'])
]).transitionalItem('kubejs:incomplete_component').loops(2)
  event.recipes.createSequencedAssembly(['4x create:precision_mechanism'
], '#forge:plates/copper', [
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:plates/brass']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:gears/bronze']),
  event.recipes.createCutting('create:incomplete_precision_mechanism',['create:incomplete_precision_mechanism']),
  event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', '#forge:nuggets/iron'])
]).transitionalItem('create:incomplete_precision_mechanism').loops(2)
  event.recipes.createSequencedAssembly(['4x immersiveengineering:component_steel'
], '#forge:plates/copper', [
  event.recipes.createDeploying('kubejs:incomplete_component', ['kubejs:incomplete_component', '#forge:plates/steel']),
  event.recipes.createDeploying('kubejs:incomplete_component', ['kubejs:incomplete_component', '#forge:gears/invar']),
  event.recipes.createCutting('kubejs:incomplete_component',['kubejs:incomplete_component']),
  event.recipes.createDeploying('kubejs:incomplete_component', ['kubejs:incomplete_component', '#forge:nuggets/electrum'])
]).transitionalItem('kubejs:incomplete_component').loops(2)
	event.recipes.createSequencedAssembly([
  'industrialforegoing:machine_frame_advanced',
], 'industrialforegoing:machine_frame_simple', [
  event.recipes.createDeploying('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple','#forge:ingots/pink_slime']),
  event.recipes.createDeploying('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple', '#forge:gears/lumium']),
  event.recipes.createDeploying('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple', '#forge:ingots/refined_glowstone']),
  event.recipes.createFilling('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple', Fluid.of("tconstruct:molten_debris", 144)]),
  event.recipes.createPressing('industrialforegoing:machine_frame_simple',['industrialforegoing:machine_frame_simple'])
]).transitionalItem('industrialforegoing:machine_frame_simple').loops(1)
  event.recipes.createSequencedAssembly([
  'bpa:advanced_coke'
], 'immersiveengineering:cokebrick', [
  event.recipes.createDeploying('immersiveengineering:cokebrick', ['immersiveengineering:cokebrick', 'thermal:upgrade_augment_1']),
  event.recipes.createDeploying('immersiveengineering:cokebrick', ['immersiveengineering:cokebrick', 'immersiveengineering:component_electronic']),
  event.recipes.createFilling('immersiveengineering:cokebrick', ['immersiveengineering:cokebrick', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('immersiveengineering:cokebrick',['immersiveengineering:cokebrick'])
]).transitionalItem('immersiveengineering:cokebrick').loops(0)
  event.recipes.createSequencedAssembly([
  'industrialforegoing:pink_slime_ingot'
], 'minecraft:iron_ingot', [
  event.recipes.createDeploying('minecraft:iron_ingot', ['minecraft:iron_ingot', 'create:shadow_steel']),
  event.recipes.createDeploying('minecraft:iron_ingot', ['minecraft:iron_ingot', 'create:refined_radiance']),
  event.recipes.createFilling('minecraft:iron_ingot', ['minecraft:iron_ingot', Fluid.of("industrialforegoing:pink_slime", 1000)]),
  event.recipes.createPressing('minecraft:iron_ingot',['minecraft:iron_ingot'])
]).transitionalItem('minecraft:iron_ingot').loops(0)
  event.recipes.createSequencedAssembly([
  'create_sa:steam_engine'
], '#forge:plates/brass', [
  event.recipes.createDeploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create:cogwheel']),
  event.recipes.createDeploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create:large_cogwheel']),
  event.recipes.createDeploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create_sa:fan_component']),
  event.recipes.createDeploying('create_sa:incomplete_steam_engine', ['create_sa:incomplete_steam_engine', 'create:andesite_alloy'])
]).transitionalItem('create_sa:incomplete_steam_engine').loops(2)
  event.recipes.createSequencedAssembly([
  'create_sa:heat_engine'
], 'create:andesite_alloy', [
  event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', 'create:cogwheel']),
  event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', 'create:large_cogwheel']),
  event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', '#forge:nuggets/zinc']),
  event.recipes.createDeploying('create_sa:incomplete_heat_engine', ['create_sa:incomplete_heat_engine', '#forge:nuggets/copper'])
]).transitionalItem('create_sa:incomplete_heat_engine').loops(2)
  event.recipes.createSequencedAssembly([
  'create_sa:hydraulic_engine'
], '#forge:plates/copper', [
  event.recipes.createDeploying('create_sa:incomplete_hydraulic_engine', ['create_sa:incomplete_hydraulic_engine', 'create:cogwheel']),
  event.recipes.createDeploying('create_sa:incomplete_hydraulic_engine', ['create_sa:incomplete_hydraulic_engine', 'create:large_cogwheel']),
  event.recipes.createDeploying('create_sa:incomplete_hydraulic_engine', ['create_sa:incomplete_hydraulic_engine', 'create:andesite_alloy']),
  event.recipes.createFilling('create_sa:incomplete_hydraulic_engine', ['create_sa:incomplete_hydraulic_engine', Fluid.of("immersiveengineering:creosote", 250)])
]).transitionalItem('create_sa:incomplete_hydraulic_engine').loops(2)
})
