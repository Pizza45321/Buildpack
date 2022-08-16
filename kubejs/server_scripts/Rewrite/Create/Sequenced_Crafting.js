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
  'immersiveengineering:light_engineering'
], 'immersiveengineering:sheetmetal_iron', [
  event.recipes.createDeploying('immersiveengineering:sheetmetal_iron', ['immersiveengineering:sheetmetal_iron', 'immersiveengineering:component_iron']),
  event.recipes.createDeploying('immersiveengineering:sheetmetal_iron', ['immersiveengineering:sheetmetal_iron', 'immersiveengineering:wirecoil_copper']),
  event.recipes.createFilling('immersiveengineering:sheetmetal_iron', ['immersiveengineering:sheetmetal_iron', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('immersiveengineering:sheetmetal_iron',['immersiveengineering:sheetmetal_iron'])
]).transitionalItem('immersiveengineering:sheetmetal_iron').loops(2)

  event.recipes.createSequencedAssembly(['immersiveengineering:heavy_engineering'
], 'immersiveengineering:sheetmetal_steel', [
  event.recipes.createDeploying('immersiveengineering:sheetmetal_steel', ['immersiveengineering:sheetmetal_steel', 'immersiveengineering:component_steel']),
  event.recipes.createDeploying('immersiveengineering:sheetmetal_steel', ['immersiveengineering:sheetmetal_steel', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createFilling('immersiveengineering:sheetmetal_steel', ['immersiveengineering:sheetmetal_steel', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('immersiveengineering:sheetmetal_steel',['immersiveengineering:sheetmetal_steel'])
]).transitionalItem('immersiveengineering:sheetmetal_steel').loops(2)
  event.recipes.createSequencedAssembly(['4x immersiveengineering:component_iron'
], '#forge:plates/copper', [
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:plates/iron']),
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:gears/copper']),
  event.recipes.createCutting('thermal:copper_plate',['thermal:copper_plate']),
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:nuggets/brass'])
]).transitionalItem('thermal:copper_plate').loops(2)
  event.recipes.createSequencedAssembly(['4x create:precision_mechanism'
], '#forge:plates/copper', [
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:plates/brass']),
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:gears/bronze']),
  event.recipes.createCutting('thermal:copper_plate',['thermal:copper_plate']),
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:nuggets/iron'])
]).transitionalItem('thermal:copper_plate').loops(2)
  event.recipes.createSequencedAssembly(['4x immersiveengineering:component_steel'
], '#forge:plates/copper', [
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:plates/steel']),
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:gears/invar']),
  event.recipes.createCutting('thermal:copper_plate',['thermal:copper_plate']),
  event.recipes.createDeploying('thermal:copper_plate', ['thermal:copper_plate', '#forge:nuggets/electrum'])
]).transitionalItem('thermal:copper_plate').loops(2)
  event.recipes.createSequencedAssembly(['thermal:upgrade_augment_2'
], '#forge:plates/brass', [
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:plates/signalum']),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:gears/lumium']),
  event.recipes.createFilling('create:brass_sheet', ['create:brass_sheet',  Fluid.of('thermal:glowstone', 100)]),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'thermal:obsidian_glass'])
]).transitionalItem('create:brass_sheet').loops(2)
  event.recipes.createSequencedAssembly(['thermal:upgrade_augment_1'
], '#forge:plates/brass', [
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:plates/steel']),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:gears/electrum']),
  event.recipes.createFilling('create:brass_sheet', ['create:brass_sheet', Fluid.of('thermal:redstone', 100)]),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'thermal:obsidian_glass'])
]).transitionalItem('create:brass_sheet').loops(2)
  event.recipes.createSequencedAssembly(['thermal:upgrade_augment_3'
], '#forge:plates/brass', [
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:plates/enderium']),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', '#forge:gears/netherite']),
  event.recipes.createFilling('create:brass_sheet', ['create:brass_sheet', Fluid.of('thermal:ender', 100)]),
  event.recipes.createDeploying('create:brass_sheet', ['create:brass_sheet', 'thermal:obsidian_glass'])
]).transitionalItem('create:brass_sheet').loops(2)
	event.recipes.createSequencedAssembly([
  'industrialforegoing:machine_frame_advanced',
], 'industrialforegoing:machine_frame_simple', [
  event.recipes.createDeploying('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple','#forge:gears/diamond']),
  event.recipes.createDeploying('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple', 'industrialforegoing:plastic']),
  event.recipes.createDeploying('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple', 'mekanism:hdpe_sheet']),
  event.recipes.createFilling('industrialforegoing:machine_frame_simple', ['industrialforegoing:machine_frame_simple', Fluid.of("tconstruct:molten_debris", 144)]),
  event.recipes.createPressing('industrialforegoing:machine_frame_simple',['industrialforegoing:machine_frame_simple'])
]).transitionalItem('industrialforegoing:machine_frame_simple').loops(1)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_mv'
], 'immersiveengineering:connector_lv', [
  event.recipes.createDeploying('immersiveengineering:connector_lv', ['immersiveengineering:connector_lv','#forge:plates/electrum']),
  event.recipes.createDeploying('immersiveengineering:connector_lv', ['immersiveengineering:connector_lv', 'immersiveengineering:wirecoil_electrum']),
  event.recipes.createPressing('immersiveengineering:connector_lv',['immersiveengineering:connector_lv']),
  event.recipes.createDeploying('immersiveengineering:connector_lv', ['immersiveengineering:connector_lv', 'immersiveengineering:wirecoil_electrum'])
]).transitionalItem('immersiveengineering:connector_lv').loops(0)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_mv_relay'
], 'immersiveengineering:connector_lv_relay', [
  event.recipes.createDeploying('immersiveengineering:connector_lv_relay', ['immersiveengineering:connector_lv_relay','#forge:plates/electrum']),
  event.recipes.createDeploying('immersiveengineering:connector_lv_relay', ['immersiveengineering:connector_lv_relay', 'immersiveengineering:wirecoil_electrum']),
  event.recipes.createPressing('immersiveengineering:connector_lv_relay',['immersiveengineering:connector_lv_relay']),
  event.recipes.createDeploying('immersiveengineering:connector_lv_relay', ['immersiveengineering:connector_lv_relay', 'immersiveengineering:wirecoil_electrum'])
]).transitionalItem('immersiveengineering:connector_lv_relay').loops(0)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_hv'
], 'immersiveengineering:connector_lv', [
  event.recipes.createDeploying('immersiveengineering:connector_lv', ['immersiveengineering:connector_lv','#forge:plates/aluminum']),
  event.recipes.createDeploying('immersiveengineering:connector_lv', ['immersiveengineering:connector_lv', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createPressing('immersiveengineering:connector_lv',['immersiveengineering:connector_lv']),
  event.recipes.createDeploying('immersiveengineering:connector_lv', ['immersiveengineering:connector_lv', 'immersiveengineering:wirecoil_steel'])
]).transitionalItem('immersiveengineering:connector_lv').loops(0)
  event.recipes.createSequencedAssembly([
  '3x immersiveengineering:connector_hv_relay'
], 'immersiveengineering:connector_lv_relay', [
  event.recipes.createDeploying('immersiveengineering:connector_lv_relay', ['immersiveengineering:connector_lv_relay','#forge:plates/aluminum']),
  event.recipes.createDeploying('immersiveengineering:connector_lv_relay', ['immersiveengineering:connector_lv_relay', 'immersiveengineering:wirecoil_steel']),
  event.recipes.createPressing('immersiveengineering:connector_lv_relay',['immersiveengineering:connector_lv_relay']),
  event.recipes.createDeploying('immersiveengineering:connector_lv_relay', ['immersiveengineering:connector_lv_relay', 'immersiveengineering:wirecoil_steel'])
]).transitionalItem('immersiveengineering:connector_lv_relay').loops(0)
  event.recipes.createSequencedAssembly([
  'mekanism:advanced_control_circuit'
], 'mekanism:basic_control_circuit', [
  event.recipes.createDeploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit','create:precision_mechanism']),
  event.recipes.createDeploying('mekanism:basic_control_circuit', ['mekanism:basic_control_circuit', 'mekanism:alloy_infused'])
  ]).transitionalItem('mekanism:basic_control_circuit').loops(0)
  event.recipes.createSequencedAssembly([
  'mekanism:elite_control_circuit'
], 'mekanism:advanced_control_circuit', [
  event.recipes.createDeploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'immersiveengineering:component_electronic']),
  event.recipes.createDeploying('mekanism:advanced_control_circuit', ['mekanism:advanced_control_circuit', 'mekanism:alloy_reinforced'])
  ]).transitionalItem('mekanism:advanced_control_circuit').loops(0)
  event.recipes.createSequencedAssembly([
  'mekanism:ultimate_control_circuit'
], 'mekanism:elite_control_circuit', [
  event.recipes.createDeploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit','immersiveengineering:component_electronic_adv']),
  event.recipes.createDeploying('mekanism:elite_control_circuit', ['mekanism:elite_control_circuit', 'mekanism:alloy_atomic'])
  ]).transitionalItem('mekanism:advanced_control_circuit').loops(0)
  event.recipes.createSequencedAssembly([
  'bpa:advanced_coker'
], 'immersiveengineering:cokebrick', [
  event.recipes.createDeploying('immersiveengineering:cokebrick', ['immersiveengineering:cokebrick', 'thermal:upgrade_augment_1']),
  event.recipes.createDeploying('immersiveengineering:cokebrick', ['immersiveengineering:cokebrick', 'immersiveengineering:component_electronic']),
  event.recipes.createFilling('immersiveengineering:cokebrick', ['immersiveengineering:cokebrick', Fluid.of("immersiveengineering:creosote", 1000)]),
  event.recipes.createPressing('immersiveengineering:cokebrick',['immersiveengineering:cokebrick'])
]).transitionalItem('immersiveengineering:cokebrick').loops(0)
  event.recipes.createSequencedAssembly([
  'bpa:custom_mixer'
], 'create:brass_casing', [
  event.recipes.createDeploying('create:brass_casing', ['create:brass_casing', 'create:whisk']),
  event.recipes.createDeploying('create:brass_casing', ['create:brass_casing', 'immersiveengineering:component_electronic']),
  event.recipes.createDeploying('create:brass_casing', ['create:brass_casing', '#forge:wires/copper']),
  event.recipes.createPressing('create:brass_casing',['create:brass_casing'])
]).transitionalItem('create:brass_casing').loops(0)
})
