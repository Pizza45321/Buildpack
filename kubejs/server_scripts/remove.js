priority: 5

var IdRecipes = [
'tconstruct:smeltery/casting/seared/smeltery_controller',
'astralsorcery:block_transmutation/iron_starmetal',
'extendedcrafting:black_iron_ingot',
'bloodmagic:altar/slate',
'bloodmagic:altar/demonicslate',
'bloodmagic:altar/weakbloodorb',
'bloodmagic:altar/apprenticebloodorb',
'bloodmagic:altar/masterbloodorb',
'bloodmagic:altar/magicianbloodorb',
'astralsorcery:altar/illumination_powder',
'astralsorcery:altar/nocturnal_powder',
'industrialforegoing:dissolution_chamber/simple_machine_frame',
'industrialforegoing:dissolution_chamber/advanced_machine_frame',
"create:mixing/chromatic_compound",
'create:mechanical_crafting:/furnace_engine',
'botania:elven_trade/elementium',
'botania:elven_trade/pixie_dust',
'botania:elven_trade/dragonstone',
"create:mechanical_crafting/flywheel",
'botania:pure_daisy/livingrock',
'botania:pure_daisy/livingwood',
'immersiveengineering:crafting/blueprint_molds',
'immersiveengineering:crafting/blueprint_components',
'astralsorcery:altar/altar_attunement',
"create:conversion_1",
'create:conversion_67',
'create:conversion_66',
'extendedcrafting:luminessence',
"jaopca:thermal_expansion.molten_to_material.refined_radiance",
"tconstruct:smeltery/alloys/molten_lumium",
"tconstruct:smeltery/alloys/molten_signalum",
"tconstruct:smeltery/alloys/molten_enderium",
'create:splashing/sand',
'create:splashing/gravel']
var outputsToChange = [
	'cagedmobs:mobcage',
    'botanypots:botany_pot',
    'thermal:iron_gear',
    'thermal:constantan_gear',
    'thermal:gold_gear',
    'thermal:emerald_gear',
    'thermal:copper_gear',
    'thermal:lead_gear',
    'immersiveengineering:cokebrick',
    'immersiveengineering:blastbrick',
    'thermal:silver_gear',
    'thermal:nickel_gear',
    'thermal:bronze_gear',
    'thermal:electrum_gear',
    'thermal:invar_gear',
    'thermal:signalum_gear',
    'thermal:lumium_gear',
    'thermal:enderium_gear',
    'thermal:diamond_gear',
    'thermal:lapis_gear',
    'thermal:quartz_gear',
    'thermal:tin_gear',
    'thermal:machine_frame',
    'thermal:obsidian_glass',
    'immersiveengineering:alloybrick',
    'mekanism:metallurgic_infuser',
    'thermal:redstone_servo',
    'thermal:rf_coil',
    'extendedcrafting:redstone_ingot',
    'appliedenergistics2:controller',
    'mysticalagriculture:infusion_pedestal',
    'mysticalagriculture:infusion_altar',
    'mekanism:steel_casing',
    'industrialforegoing:machine_frame_pity',
    'thermal:press_gear_die',
    'farmersdelight:iron_knife',
    'thermal:upgrade_augment_1',
    'thermal:upgrade_augment_2',
    'thermal:upgrade_augment_3',
    'extendedcrafting:compressor',
    'minecraft:magma_cream',
    'tconstruct:grout',
    'botanypots:botany_pots',
    'immersiveengineering:connector_mv',
    'immersiveengineering:connector_lv',
    'immersiveengineering:connector_hv',
    'immersiveengineering:connector_mv_relay',
    'immersiveengineering:connector_lv_relay',
    'immersiveengineering:connector_hv_relay',
    'mekanism:advanced_control_circuit',
    'mekanism:elite_control_circuit',
    'mekanism:ultimate_control_circuit',
    "extendedcrafting:frame",
    'bloodmagic:altar',
    'thermal:fluid_cell_frame',
    'thermal:energy_cell_frame',
    "botania:alfheim_portal",
    "industrialforegoing:laser_drill",
    "industrialforegoing:fluid_laser_base",
    "industrialforegoing:ore_laser_base",
    'industrialforegoing:item_transporter_type',
    'industrialforegoing:fluid_transporter_type',
    'industrialforegoing:world_transporter_type',
    'appliedenergistics2:silicon',
    'portality:frame',
    "farmersdelight:stove",
    'farmersdelight:skillet',
    'farmersdelight:cooking_pot',
    'immersiveengineering:generator',
    'immersiveengineering:heavy_engineering',
    'immersiveengineering:light_engineering',
    'immersiveengineering:rs_engineering',
    'immersiveengineering:dynamo',
    'create:empty_blaze_burner',
    'appliedenergistics2:interface',
    'appliedenergistics2:drive',
    'appliedenergistics2:molecular_assembler',
    'appliedenergistics2:charger',
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:latex_processing_unit',
    'create:rose_quartz',
    'cagedmobs:star_infused_netherite_ingot',
    'create:rotation_speed_controller',
    'create:mechanical_arm',
    'mininggadgets:mininggadget',
    'mysticalagriculture:tinkering_table',
    'thermal:machine_chiller',
    'thermal:netherite_gear',
    'botania:runic_altar',
    'extendedcrafting:basic_table'
    ]
outputsToRemove = ['create:refined_radiance',
'create:shadow_steel',
'thermal:enderium_glass',
'thermal:signalum_glass',
'thermal:lumium_glass',
'immersiveengineering:component_iron',
'immersiveengineering:component_steel',
"create:copper_sheet",
"create:golden_sheet",
"create:iron_sheet"
]
onEvent('recipes', event =>{
	outputsToChange.forEach(item =>{
		event.remove({output: item, type: 'minecraft:crafting_shaped'})
        event.remove({output: item, type: 'minecraft:crafting_shapeless'})
    })
})  
onEvent('recipes', event=>{
  IdRecipes.forEach(item =>{
    event.remove({id: item})
  })
})
onEvent('recipes', event =>{
  outputsToRemove.forEach(item =>{
    event.remove({output: item})
    })
})
onEvent('recipes', event =>{
event.remove({
    input: 'minecraft:fire_charge',
    mod: 'thermal',
    type: 'minecraft:crafting_shapeless'
  })
  event.remove({
    output: '#forge:plates',
    type: 'minecraft:crafting_shapeless'
  })
  event.remove({
    output: 'appliedenergistics2:silicon',
    type: 'minecraft:smelting'
  })
})