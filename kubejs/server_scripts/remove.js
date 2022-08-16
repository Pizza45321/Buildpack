priority: 5

var IdRecipes = [
'tconstruct:smeltery/casting/seared/smeltery_controller',
'extendedcrafting:black_iron_ingot',
'bloodmagic:altar/slate',
//'bloodmagic:altar/demonicslate',
'bloodmagic:altar/weakbloodorb',
'bloodmagic:altar/apprenticebloodorb',
'bloodmagic:altar/masterbloodorb',
'bloodmagic:altar/magicianbloodorb',
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
'extendedcrafting:luminessence',
"tconstruct:smeltery/alloys/molten_lumium",
"tconstruct:smeltery/alloys/molten_signalum",
"tconstruct:smeltery/alloys/molten_enderium",
'create:splashing/sand',
'create:splashing/gravel',
'botania:runic_altar/earth',
'botania:runic_altar/air',
'botania:runic_altar/water',
'botania:runic_altar/fire',
'refinedstorage:quartz_enriched_iron',
'industrialforegoing:iron_gear',
'industrialforegoing:gold_gear',
'industrialforegoing:diamond_gear',
'malum:spirit_infusion/soul_stained_steel_ingot',
'bloodmagic:alchemytable/reagent_binding',
'bloodmagic:alchemytable/simple_catalyst',
'bloodmagic:alchemytable/strengthened_catalyst',
'immersiveengineering:blueprint/component_electronic',
'immersiveengineering:blueprint/component_electronic_adv',
'extendedcrafting:black_iron_slate',
'brewinandchewin:cutting/pizza',
'thermal:machines/smelter/smelter_alloy_steel',
'culturaldelights:cutting/cut_eggplant',
'farmersdelight:cooking/dumplings'
]
var outputsToChange = [
'refinedstorage:processor_binding',
"malum:spirit_altar",
"hostilenetworks:deep_learner",
"tiab:time_in_a_bottle",
"hostilenetworks:sim_chamber",
"hostilenetworks:loot_fabricator",
'refinedstorage:machine_casing',
"extradisks:advanced_machine_casing",
'compactmachines:wall',
'compactmachines:machine_tiny', 
'compactmachines:machine_small', 
'compactmachines:machine_normal', 
'compactmachines:machine_large', 
'compactmachines:machine_giant', 
'compactmachines:machine_maximum',
    'botanypots:botany_pot',
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
    'industrialforegoing:fluid_extractor',
    'industrialforegoing:latex_processing_unit',
    'create:rose_quartz',
    'create:rotation_speed_controller',
    'create:mechanical_arm',
    'mininggadgets:mininggadget',
    'mysticalagriculture:tinkering_table',
    'thermal:machine_chiller',
    'thermal:netherite_gear',
    'botania:runic_altar',
    'extendedcrafting:basic_table',
    'bigreactors:basic_reactorcasing',
    'bigreactors:basic_turbinecasing',
    'bigreactors:reinforced_reactorcasing',
    'bigreactors:reinforced_turbinecasing',
    'refinedstorage:controller',
    'mekanism:dynamic_tank',
    'mekanism:dynamic_valve',
    'industrialforegoing:pity_black_hole_tank',
    'industrialforegoing:simple_black_hole_tank',
    'industrialforegoing:advanced_black_hole_tank',
    'industrialforegoing:supreme_black_hole_tank',
    'industrialforegoing:pity_black_hole_unit',
    'industrialforegoing:simple_black_hole_unit',
    'industrialforegoing:advanced_black_hole_unit',
    'industrialforegoing:supreme_black_hole_unit',
    'industrialforegoing:black_hole_controller',
    'cabletiers:elite_importer',
    'cabletiers:elite_exporter',
    'brewinandchewin:pizza',
    'extradisks:16384k_fluid_storage_part',
    'extradisks:65536k_fluid_storage_part',
    'extradisks:262144k_fluid_storage_part',
    'extradisks:1048576k_fluid_storage_part',
    'extradisks:infinite_fluid_storage_part',
    'extradisks:1024k_storage_part',
    'extradisks:4096k_storage_part',
    'extradisks:16384k_storage_part',
    'extradisks:65536k_storage_part',
    'extradisks:262144k_storage_part',
    'extradisks:1048576k_storage_part',
    'extradisks:infinite_storage_part'
    ]
outputsToRemove = [
'thermal:enderium_glass',
'thermal:signalum_glass',
'thermal:lumium_glass',
'immersiveengineering:component_iron',
'immersiveengineering:component_steel',
"create:copper_sheet",
"create:golden_sheet",
"create:iron_sheet",
'tconstruct:gear_red_sand_cast',
'tconstruct:gear_sand_cast',
'rebornstorage:small_item_disk_part',
'rebornstorage:medium_item_disk_part',
'rebornstorage:large_item_disk_part',
'rebornstorage:larger_item_disk_part',
'rebornstorage:small_fluid_disk_part',
'rebornstorage:medium_fluid_disk_part',
'rebornstorage:large_fluid_disk_part',
'rebornstorage:larger_fluid_disk_part',
'extrastorage:storagepart_256k',
'extrastorage:storagepart_1024k',
'extrastorage:storagepart_4096k', 
'extrastorage:storagepart_16384k',
'extrastorage:storagepart_16384k_fluid',
'extrastorage:storagepart_65536k_fluid',
'extrastorage:storagepart_262144k_fluid',
'extrastorage:storagepart_1048576k_fluid',
'industrialforegoing:common_black_hole_unit',
'industrialforegoing:common_black_hole_tank',
'extrastorage:disk_256k',
'extrastorage:disk_1024k',
'extrastorage:disk_4096k',
'extrastorage:disk_16384k',
'extrastorage:disk_16384k_fluid',
'extrastorage:disk_65536k_fluid', 
'extrastorage:disk_262144k_fluid',
'extrastorage:block_262144k_fluid',
'extrastorage:block_1048576k_fluid',
'extrastorage:block_256k',
'extrastorage:block_1024k',
'extrastorage:block_4096k',
'extrastorage:block_16384k',
'extrastorage:block_16384k_fluid',
'extrastorage:block_65536k_fluid',
'extrastorage:disk_1048576k_fluid',
'refinedstorage:advanced_processor',
'refinedstorage:improved_processor',
'refinedstorage:basic_processor',
'extrastorage:super_advanced _processor',
'extrastorage:raw_neural_processor',
'extrastorage:neural_processor',
'extradisks:withering_processor',
'rebornstorage:raw_super_advanced_processor',
'refinedstorage:raw_basic_processor',
'refinedstorage:raw_improved_processor',
'refinedstorage:raw_advanced_processor',
'extradisks:raw_withering_processor',
'delightful:field_salad',
'delightful:deluxe_cheeseburger',
'delightful:cheeseburger',
'farmersdelight:steak_and_potatoes',
'farmersdelight:pasta_with_meatballs',
'farmersdelight:hamburger', 
'farmersdelight:barbecue_stick',
'thermal:cheese_wheel',
'mininggadgets:mininggadget_simple',
'mininggadgets:mininggadget_fancy'
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
    input: 'immersiveengineering:hammer',
    mod: 'immersiveengineering',
    type: 'minecraft:crafting_shapeless'
  })
  event.remove({
    output: 'refinedstorage:silicon',
    type: 'minecraft:smelting'
  })
  event.remove({
    output: 'thermal:cured_rubber',
    type: 'minecraft:smelting'
  })
})







'extrastorage:disk_256k',
'extrastorage:disk_1024k',
'extrastorage:disk_4096k',
'extrastorage:disk_16384k',
'extrastorage:disk_16384k_fluid',
'extrastorage:disk_65536k_fluid', 
'extrastorage:disk_262144k_fluid',
'extrastorage:block_262144k_fluid',
'extrastorage:block_1048576k_fluid',
'extrastorage:block_256k',
'extrastorage:block_1024k',
'extrastorage:block_4096k',
'extrastorage:block_16384k',
'extrastorage:block_16384k_fluid',
'extrastorage:block_65536k_fluid',
'extrastorage:disk_1048576k_fluid'