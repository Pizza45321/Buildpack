onEvent('recipes', event => {
	event.recipes.createSequencedAssembly([
  'botania:creative_pool'
], 'botania:mana_pool', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','botania:gaia_ingot']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'bloodmagic:weakbloodshard']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate', Fluid.of("materialis:molten_elementium", 10000)]),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:ingots/starmetal']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'bloodmagic:reagentbinding']),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate'])
]).transitionalItem('thermal:iron_plate').loops(2)
  
  event.recipes.createSequencedAssembly([
  'immersiveengineering:light_engineering'
], 'immersiveengineering:sheetmetal_iron', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:component_iron']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_copper']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate'])
]).transitionalItem('thermal:iron_plate')

  event.recipes.createSequencedAssembly(['immersiveengineering:heavy_engineering'
], 'immersiveengineering:sheetmetal_steel', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:component_steel']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate'])
]).transitionalItem('thermal:iron_plate')
  event.recipes.createSequencedAssembly(['4x immersiveengineering:component_iron'
], '#forge:plates/copper', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:plates/iron']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:gears/copper']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'create:brass_nugget'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly(['4x create:precision_mechanism'
], '#forge:plates/copper', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:plates/brass']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:gears/bronze']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'minecraft:iron_nugget'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly(['4x immersiveengineering:component_steel'
], '#forge:plates/copper', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:plates/steel']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:gears/invar']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'thermal:electrum_nugget'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly(['thermal:upgrade_augment_2'
], '#forge:plates/brass', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:plates/signalum']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:gears/lumium']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate',  Fluid.of('thermal:glowstone', 100)]),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'thermal:obsidian_glass'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly(['thermal:upgrade_augment_1'
], '#forge:plates/brass', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:plates/steel']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:gears/electrum']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate', Fluid.of('thermal:redstone', 100)]),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'thermal:obsidian_glass'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly(['thermal:upgrade_augment_3'
], '#forge:plates/brass', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:plates/enderium']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', '#forge:gears/netherite']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate', Fluid.of('thermal:ender', 100)]),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'thermal:obsidian_glass'])
]).transitionalItem('thermal:iron_plate').loops(2)
	event.recipes.createSequencedAssembly([
  'industrialforegoing:machine_frame_advanced',
], 'industrialforegoing:machine_frame_simple', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','#forge:gears/diamond']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'industrialforegoing:plastic']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'mekanism:hdpe_sheet']),
  event.recipes.createFilling('thermal:iron_plate', ['thermal:iron_plate', Fluid.of("tconstruct:molten_debris", 144)]),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_mv'
], 'immersiveengineering:connector_lv', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','#forge:plates/electrum']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_electrum']),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_electrum'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_mv_relay'
], 'immersiveengineering:connector_lv_relay', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','#forge:plates/electrum']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_electrum']),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_electrum'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_hv'
], 'immersiveengineering:connector_lv', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','#forge:plates/aluminum']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_steel'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_hv_relay'
], 'immersiveengineering:connector_lv_relay', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','#forge:plates/aluminum']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createPressing('thermal:iron_plate',['thermal:iron_plate']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'immersiveengineering:wirecoil_steel'])
]).transitionalItem('thermal:iron_plate').loops(2)
  event.recipes.createSequencedAssembly([
  'mekanism:advanced_control_circuit'
], 'mekanism:basic_control_circuit', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','create:precision_mechanism']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'mekanism:alloy_infused'])
  ]).transitionalItem('thermal:iron_plate')
  event.recipes.createSequencedAssembly([
  'mekanism:elite_control_circuit'
], 'mekanism:advanced_control_circuit', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','immersiveengineering:component_iron']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'mekanism:alloy_reinforced'])
  ]).transitionalItem('thermal:iron_plate')
  event.recipes.createSequencedAssembly([
  'mekanism:ultimate_control_circuit'
], 'mekanism:elite_control_circuit', [
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate','immersiveengineering:component_steel']),
  event.recipes.createDeploying('thermal:iron_plate', ['thermal:iron_plate', 'mekanism:alloy_atomic'])
  ]).transitionalItem('thermal:iron_plate')
})
