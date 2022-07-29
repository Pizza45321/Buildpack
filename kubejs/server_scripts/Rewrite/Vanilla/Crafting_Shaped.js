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
        e: 'immersiveengineering:heavy_engineering'
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
        f: 'thermal:machine_frame'
    })
})