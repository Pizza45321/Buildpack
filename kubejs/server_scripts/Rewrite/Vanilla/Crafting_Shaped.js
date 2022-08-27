onEvent('recipes', event => {
    event.shaped('1x mekanism:metallurgic_infuser', [
        'ara',
        'tsC',
        'gcg'
    ], {
        c: 'immersiveengineering:component_electronic_adv',
        s: 'mekanism:steel_casing',
        r: 'create:spout',
        t: 'create:item_vault',
        C: 'mekanism:dynamic_tank',
        a: "minecraft:air",
        g: "#forge:gears/signalum"
    })
    event.shaped('2x thermal:rf_coil', [
        'aba',
        'cmc',
        'aba'
    ], {
        a: 'minecraft:air',
        b: 'extendedcrafting:redstone_ingot',
        m: '#forge:rods/brass',
        c: "immersiveengineering:wirecoil_copper"
    })
    event.shaped('2x thermal:redstone_servo', [
        'bab',
        'ama',
        'bab'
    ], {
        a: 'minecraft:air',
        b: 'extendedcrafting:redstone_ingot',
        m: '#forge:plates/steel'
    })
    event.shaped('4x portality:frame', [
        'aba',
        'bcb',
        'aba'
    ], {
        a: 'minecraft:obsidian',
        b: 'mekanism:ingot_refined_obsidian',
        c: '#forge:gems/amethyst'
    })
    event.shaped('1x farmersdelight:stove', [
        'cBc',
        'bab',
        'bCb'
    ], {
        a: 'minecraft:air',
        b: 'minecraft:bricks',
        c: '#forge:plates/copper',
        B: '#forge:plates/brass',
        C: 'minecraft:campfire',

    })
    event.shaped('1x farmersdelight:cooking_pot', [
        'dsd',
        'cbc',
        'BBB'
    ], {
        a: 'minecraft:air',
        b: 'minecraft:bucket',
        c: '#forge:plates/copper',
        B: '#forge:plates/brass',
        d: 'minecraft:brick',
        s: 'minecraft:wooden_shovel'

    })
    event.shaped('1x farmersdelight:skillet', [
        'aBc',
        'acB',
        'raa'
    ], {
        a: 'minecraft:air',
        c: '#forge:plates/copper',
        B: '#forge:plates/brass',
        r: '#forge:rods/iron'

    })
    event.shaped('3x immersiveengineering:generator', [
        'sps',
        'pdp',
        'sps'
    ], {
        s: '#forge:sheetmetals/steel',
        p: '#forge:plates/electrum',
        d: 'thermal:dynamo_stirling'

    })
    event.shaped('1x farmersdelight:skillet', [
        'aBc',
        'acB',
        'raa'
    ], {
        a: 'minecraft:air',
        c: '#forge:plates/copper',
        B: '#forge:plates/brass',
        r: '#forge:rods/iron'

    })
    event.shaped('1x immersiveengineering:rs_engineering', [
        'ara',
        'rsr',
        'crc'
    ], {
        a: 'minecraft:air',
        s: '#forge:sheetmetals/iron',
        r: 'extendedcrafting:redstone_ingot',
        c: '#forge:plates/copper'

    })
    event.shaped('1x immersiveengineering:dynamo', [
        'CcC',
        'brc',
        'CcC'
    ], {
        b: 'create:windmill_bearing',
        C: '#forge:plates/copper',
        r: 'extendedcrafting:redstone_ingot',
        c: 'immersiveengineering:wirecoil_copper'

    })
    event.shaped('1x create:empty_blaze_burner', [
        'aaa',
        'iai',
        'pCp'
    ], {
        p: '#forge:plates/iron',
        i: 'minecraft:iron_bars',
        a: 'minecraft:air',
        C: "minecraft:campfire"

    })
    event.shaped('thermal:fluid_cell_frame', [
        'Ggp',
        'geg',
        'pgG'
    ], {
        p: '#forge:plates/copper',
        G: '#forge:gears/iron',
        g: '#forge:glass',
        e: "immersiveengineering:light_engineering"
    })
    event.shaped('thermal:energy_cell_frame', [
        'Ggp',
        'geg',
        'pgG'
    ], {
        p: '#forge:plates/lead',
        G: '#forge:gears/electrum',
        g: '#forge:glass',
        e: "immersiveengineering:light_engineering"
    })
    event.shaped('industrialforegoing:machine_frame_pity', [
        'hsh',
        'tet',
        'hrh'
    ], {
        h: 'mekanism:hdpe_sheet',
        t: '#forge:treated_wood',
        r: 'thermal:rf_coil',
        s: "thermal:redstone_servo",
        e: 'immersiveengineering:light_engineering'
    })
    event.shaped('thermal:machine_frame', [
        'pGp',
        'geg',
        'prp'
    ], {
        p: '#forge:plates/brass',
        g: '#forge:glass',
        G: '#forge:gears/tin',
        r: "thermal:redstone_servo",
        e: 'immersiveengineering:heavy_engineering'
    })
    event.shaped('extendedcrafting:frame', [
        'rpr',
        'pfp',
        'rpr'
    ], {
        p: 'extendedcrafting:black_iron_slate',
        r: '#forge:rods/iron',
        f: 'mekanism:steel_casing'
    })
    event.shaped('multiblocked:fluid_input', [
        'php',
        'wcw',
        'pbp'
    ], {
        p: '#forge:plates/iron',
        w: '#forge:wires/copper',
        c: 'create:andesite_casing',
        b: 'minecraft:bucket',
        h: 'minecraft:hopper'
    })
    event.shaped('multiblocked:item_input', [
        'php',
        'wcw',
        'pbp'
    ], {
        p: '#forge:plates/iron',
        w: '#forge:wires/copper',
        c: 'create:andesite_casing',
        b: 'minecraft:chest',
        h: 'minecraft:hopper'
    })
event.shaped('multiblocked:energy_input', [
        'php',
        'wcw',
        'pbp'
    ], {
        p: '#forge:plates/iron',
        w: '#forge:wires/copper',
        c: 'thermal:energy_cell',
        b: 'extendedcrafting:redstone_ingot',
        h: 'minecraft:hopper'
    })
event.shaped('mekanism:dynamic_tank', [
        ' p ',
        'ptp',
        ' p '
    ], {
        p: '#forge:plates/steel',
        t: 'create:fluid_tank'
    })
event.shaped('mekanism:dynamic_valve', [
        ' p ',
        'ptp',
        ' p '
    ], {
        p: 'mekanism:dynamic_tank',
        t: 'create:fluid_valve'
    })
event.shaped('industrialforegoing:pity_black_hole_unit', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/pity',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:1k_storage_part',
        i: 'create:item_vault'
    })
event.shaped('industrialforegoing:simple_black_hole_unit', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/simple',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:4k_storage_part',
        i: 'create:item_vault'
    })
event.shaped('industrialforegoing:advanced_black_hole_unit', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/advanced',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:16k_storage_part',
        i: 'create:item_vault'
    })
event.shaped('industrialforegoing:supreme_black_hole_unit', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/supreme',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:64k_storage_part',
        i: 'create:item_vault'
    })
event.shaped('industrialforegoing:pity_black_hole_tank', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/pity',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:1k_storage_part',
        i: 'create:fluid_tank'
    })
event.shaped('industrialforegoing:simple_black_hole_tank', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/simple',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:4k_storage_part',
        i: 'create:fluid_tank'
    })
event.shaped('industrialforegoing:advanced_black_hole_tank', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/advanced',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:16k_storage_part',
        i: 'create:fluid_tank'
    })
event.shaped('cabletiers:elite_importer', [
        'ibi',
        'bfb',
        'ibi'
    ], {
        b: 'extrastorage:advanced_importer',
        i: 'minecraft:iron_block',
        f: 'refinedstorage:advanced_processor'
    })
event.shaped('cabletiers:elite_exporter', [
        'ibi',
        'bfb',
        'ibi'
    ], {
        b: 'extrastorage:advanced_exporter',
        i: 'minecraft:iron_block',
        f: 'refinedstorage:advanced_processor'
    })
event.shaped('brewinandchewin:pizza', [
        'ccc',
        'otb',
        'ddd'
    ], {
        c: '#forge:cheese',
        d: '#forge:dough_wheat',
        o: '#forge:crops/onion',
        t: 'farmersdelight:tomato_sauce',
        b: '#forge:cooked_beef'
    })
event.shaped('industrialforegoing:dye_mixer', [
        'pmp',
        'rer',
        'pbp'
    ], {
        r: 'mekanism:hdpe_rod',
        p: '#forge:plastic',
        m: 'create:mechanical_mixer',
        b: 'mekanism:dye_base',
        e: 'immersiveengineering:light_engineering'
    })
event.shaped('industrialforegoing:marine_fisher', [
        'pmp',
        'CeC',
        'pcp'
    ], {
        C: 'thermal:aquachow',
        p: '#forge:plastic',
        m: 'thermal:device_fisher',
        c: 'thermal:rf_coil',
        e: 'immersiveengineering:light_engineering'
    })
event.shaped('industrialforegoing:mob_detector', [
        'pmp',
        'CeC',
        'pcp'
    ], {
        C: 'extendedcrafting:redstone_component',
        p: '#forge:plastic',
        m: 'minecraft:observer',
        c: 'immersiveengineering:wirecoil_redstone',
        e: 'immersiveengineering:light_engineering'
    })
event.shaped('industrialforegoing:resourceful_furnace', [
        'pmp',
        'CeC',
        'dcd'
    ], {
        C: 'minecraft:blast_furnace',
        p: '#forge:plastic',
        m: 'create:smart_chute',
        c: '#forge:gears/signalum',
        e: 'immersiveengineering:heavy_engineering',
        d: 'immersiveengineering:plate_duroplast'
    })
event.shaped('industrialforegoing:bioreactor', [
        'pmp',
        'CeC',
        'dcd'
    ], {
        C: 'thermal:device_composter',
        p: '#forge:plastic',
        m: 'create:mechanical_mixer',
        c: 'create:blaze_burner',
        e: 'immersiveengineering:heavy_engineering',
        d: 'immersiveengineering:plate_duroplast'
    })
event.shaped('industrialforegoing:biofuel_generator', [
        'pmp',
        'CeC',
        'dcd'
    ], {
        C: 'mekanism:hdpe_sheet',
        p: '#forge:plastic',
        m: 'create:fluid_tank',
        c: 'immersiveengineering:generator',
        e: 'immersiveengineering:heavy_engineering',
        d: 'immersiveengineering:plate_duroplast'
    })
event.shaped('industrialforegoing:sludge_refiner', [
        'pmp',
        'CeC',
        'dcd'
    ], {
        C: 'thermal:device_composter',
        p: '#forge:plastic',
        m: 'thermal:upgrade_augment_1',
        c: 'create:fluid_tank',
        e: 'immersiveengineering:heavy_engineering',
        d: 'immersiveengineering:plate_duroplast'
    })
event.shaped('industrialforegoing:block_breaker', [
        'PaP',
        'pes',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        p: '#forge:tools/pickaxes',
        s: '#forge:tools/shovels',
        a: '#forge:tools/axes',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        P: '#forge:plastic'
    })
event.shaped('industrialforegoing:fluid_collector', [
        'ptp',
        'beb',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        b: 'minecraft:bucket',
        t: 'create:fluid_tank',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        p: '#forge:plastic'
    })
event.shaped('industrialforegoing:animal_feeder', [
        'ptp',
        'aeb',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        b: 'farmersdelight:horse_feed',
        a: 'farmersdelight:dog_food',
        t: 'immersiveengineering:treated_scaffold',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        p: '#forge:plastic'
    })
event.shaped('industrialforegoing:animal_rancher', [
        'ptp',
        'beb',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        b: 'minecraft:shears',
        t: 'minecraft:bucket',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        p: '#forge:plastic'
    })
event.shaped('industrialforegoing:animal_baby_separator', [
        'ptp',
        'beb',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        b: '#forge:dough_wheat',
        t: 'create:sweet_roll',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        p: '#forge:plastic'
    })
event.shaped('industrialforegoing:sewage_composter', [
        'ptp',
        'beb',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        b: 'thermal:device_composter',
        t: 'thermal:upgrade_augment_2',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        p: '#forge:plastic'
    })
event.shaped('industrialforegoing:sewer', [
        'ptp',
        'beb',
        'hch'
    ], {
        c: 'immersiveengineering:component_electronic',
        b: 'create:fluid_tank',
        t: 'create:item_drain',
        e: '#industrialforegoing:machine_frame/pity',
        h: 'mekanism:hdpe_sheet',
        p: '#forge:plastic'
    })
event.shaped('thermal:charge_bench', [
        'eee',
        'cfc',
        'lcl'
    ], {
        e: '#forge:ingots/electrum',
        c: 'thermal:rf_coil',
        f: 'mysticalagriculture:machine_frame',
        l: '#forge:ingots/lead'
    })
event.shaped('thermal:tinker_bench', [
        'ibi',
        'afa',
        'aca'
    ], {
        i: '#forge:ingots/iron',
        c: 'thermal:rf_coil',
        f: 'mysticalagriculture:machine_frame',
        a: 'create:andesite_casing',
        b: '#forge:workbenches'
    })
event.shaped('thermal:device_potion_diffuser', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:ingots/silver',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'tconstruct:splash_bottle'
    })
event.shaped('thermal:device_nullifier', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:ingots/tin',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: 'createdeco:andesite_bars',
        b: 'minecraft:lava_bucket'
    })
event.shaped('thermal:device_collector', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:ingots/tin',
        s: 'minecraft:hopper',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: '#forge:ender_pearls'
    })
event.shaped('thermal:device_rock_gen', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:ingots/invar',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: 'createdeco:andesite_bars',
        b: 'create:mechanical_piston'
    })
event.shaped('thermal:device_water_gen', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:ingots/copper',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'minecraft:bucket'
    })
event.shaped('thermal:device_soil_infuser', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:treated_wood',
        s: 'thermal:rf_coil',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'thermal:phytogro'
    })
event.shaped('thermal:device_composter', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:treated_wood',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'minecraft:composter'
    })
event.shaped('thermal:device_fisher', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:treated_wood',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'minecraft:fishing_rod'
    })
event.shaped('thermal:device_fisher', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:treated_wood',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'minecraft:fishing_rod'
    })
event.shaped('thermal:device_tree_extractor', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:treated_wood',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'minecraft:bucket'
    })
event.shaped('thermal:device_hive_extractor', [
        'ibi',
        'gfg',
        'isi'
    ], {
        i: '#forge:treated_wood',
        s: 'thermal:redstone_servo',
        f: 'mysticalagriculture:machine_frame',
        g: '#forge:glass',
        b: 'minecraft:shears'
    })
event.shaped('2x immersiveengineering:connector_lv', [
        'apa',
        'ipi'
    ], {
        i: '#immersiveengineering:connector_insulator',
        p: '#forge:plates/copper',
        a: 'minecraft:air'
    })
event.shaped('3x immersiveengineering:connector_lv_relay', [
        'apa',
        'ipi',
        'ipi'
    ], {
        i: '#immersiveengineering:connector_insulator',
        p: '#forge:plates/copper',
        a: 'minecraft:air'
    })
function TMachines(item1, item2, item3, component, gears, output) {
event.shaped(output, [
        'aca',
        'qfb',
        'gCg'
    ], {
        a: 'minecraft:air',
        c: item3,
        f: 'thermal:machine_frame',
        g: gears,
        q: item1,
        b: item2,
        C: component
    })
    }
    TMachines('minecraft:smoker', 'minecraft:blast_furnace', 'extendedcrafting:redstone_ingot','immersiveengineering:component_electronic', '#forge:gears/copper', 'thermal:machine_furnace')
    TMachines('create:empty_schematic', 'thermal:redstone_servo', '#forge:workbenches', 'immersiveengineering:component_electronic', '#forge:gears/copper', 'thermal:machine_crafter')
    TMachines('create:mechanical_piston', 'thermal:redstone_servo', 'create:crushing_wheel', 'immersiveengineering:component_electronic', '#forge:gears/copper', 'thermal:machine_pulverizer')
    TMachines('minecraft:lava_bucket', 'minecraft:lava_bucket', 'thermal:obsidian_glass', 'immersiveengineering:component_electronic', '#forge:gears/invar', 'thermal:machine_crucible')
    TMachines('minecraft:water_bucket', 'minecraft:lava_bucket', 'create:basin', 'immersiveengineering:component_electronic', '#forge:gears/copper',' thermal:machine_bottler' )
    TMachines('thermal:redstone_servo', 'mekanism:dynamic_tank', "create:mechanical_piston", 'immersiveengineering:component_electronic', '#forge:gears/constantan', 'thermal:machine_press')
    TMachines('thermal:saw_blade', 'thermal:redstone_servo', 'minecraft:stonecutter', 'immersiveengineering:component_electronic','#forge:gears/copper', 'thermal:machine_sawmill')
    TMachines('create:blaze_burner', 'create:mechanical_mixer', 'create:basin', 'immersiveengineering:component_electronic_adv', '#forge:gears/invar', 'thermal:machine_refinery')
    TMachines('minecraft:blast_furnace', 'minecraft:blast_furnace', 'extendedcrafting:redstone_ingot', 'immersiveengineering:component_electronic_adv', '#forge:gears/invar','thermal:machine_smelter')
    TMachines('thermal:phytogro', 'thermal:phytogro', 'minecraft:farmland', 'immersiveengineering:component_electronic_adv', '#forge:gears/lumium', 'thermal:machine_insolator')
    TMachines('tconstruct:splash_bottle', 'tconstruct:lingering_bottle', 'minecraft:brewing_stand', 'immersiveengineering:component_electronic_adv', '#forge:gears/constantan', 'thermal:machine_brewer'),
    TMachines('create:blaze_burner', 'create:blaze_burner', 'minecraft:brewing_stand', 'immersiveengineering:component_electronic_adv', '#forge:gears/constantan', 'thermal:machine_pyrolyzer')
    TMachines('create:mechanical_mixer', 'minecraft:compass', 'create:basin', 'immersiveengineering:component_electronic_adv', '#forge:gears/constantan', 'thermal:machine_centrifuge')
})