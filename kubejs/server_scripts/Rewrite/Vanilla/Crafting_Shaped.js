onEvent('recipes', event => {
    event.shaped('1x mekanism:metallurgic_infuser', [
        'ara',
        'tsC',
        'ScS'
    ], {
        c: 'thermal:rf_coil',
        s: 'mekanism:steel_casing',
        r: 'thermal:redstone_servo',
        t: 'mekanism:basic_fluid_tank',
        C: "#forge:chests",
        a: "minecraft:air",
        S: "#forge:ingots/steel"
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
 })