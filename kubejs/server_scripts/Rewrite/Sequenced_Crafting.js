onEvent('recipes', event => {
	event.recipes.createSequencedAssembly([
  'thermal:upgrade_augment_1',
], '#forge:plates/iron', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', "#forge:plates/steel"]),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:gears/iron']),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of('immersiveengineering:creosote', 125)]),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
	event.recipes.createSequencedAssembly([
  'thermal:upgrade_augment_2',
], '#forge:plates/brass', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', "#forge:plates/lumium"]),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:gears/signalum']),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of("tconstruct:molten_refined_glowstone", 125)]),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
	event.recipes.createSequencedAssembly([
  'thermal:upgrade_augment_3',
], '#forge:plates/signalum', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','extendedcrafting:ender_component']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:gears/netherite']),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of("tconstruct:molten_refined_obsidian", 125)]),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
	event.recipes.createSequencedAssembly([
  'botania:creative_pool',
], 'botania:mana_pool', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','botania:gaia_ingot']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'bloodmagic:weakbloodshard']),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of("bettercompat:molten_elementium", 10000)]),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', '#forge:ingots/starmetal']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'bloodmagic:reagentbinding']),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of("astralsorcery:liquid_starlight", 10000)]),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
	event.recipes.createSequencedAssembly([
  '3x create:precision_mechanism',
], 'create:brass_sheet', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','extendedcrafting:redstone_ingot']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'minecraft:clock']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', "minecraft:compass"]),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of("tconstruct:molten_invar", 144)]),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
	event.recipes.createSequencedAssembly([
  'industrialforegoing:machine_frame_advanced',
], 'industrialforegoing:machine_frame_simple', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','#forge:gears/diamond']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'industrialforegoing:plastic']),
  event.recipes.createFilling('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', Fluid.of("tconstruct:molten_debris", 144)]),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_mv',
], 'immersiveengineering:connector_lv', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','#forge:plates/electrum']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_electrum']),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_electrum'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_mv_relay',
], 'immersiveengineering:connector_lv_relay', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','#forge:plates/electrum']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_electrum']),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_electrum'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_hv',
], 'immersiveengineering:connector_lv', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','#forge:plates/aluminum']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_steel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_hv_relay',
], 'immersiveengineering:connector_lv_relay', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','#forge:plates/aluminum']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createPressing('create:incomplete_large_cogwheel',['create:incomplete_large_cogwheel']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'immersiveengineering:wirecoil_steel'])
]).transitionalItem('create:incomplete_large_cogwheel').loops(2)
  event.recipes.createSequencedAssembly([
  'mekanism:advanced_control_circuit',
], 'mekanism:basic_control_circuit', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','create:precision_mechanism']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'mekanism:alloy_infused'])
  ]).transitionalItem('create:incomplete_large_cogwheel').loops(1)
  event.recipes.createSequencedAssembly([
  'mekanism:elite_control_circuit',
], 'mekanism:advanced_control_circuit', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','immersiveengineering:component_iron']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'mekanism:alloy_reinforced'])
  ]).transitionalItem('create:incomplete_large_cogwheel').loops(1)
  event.recipes.createSequencedAssembly([
  'mekanism:ultimate_control_circuit',
], 'mekanism:elite_control_circuit', [
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel','immersiveengineering:component_steel']),
  event.recipes.createDeploying('create:incomplete_large_cogwheel', ['create:incomplete_large_cogwheel', 'mekanism:alloy_atomic'])
  ]).transitionalItem('create:incomplete_large_cogwheel').loops(1)
})
