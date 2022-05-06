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
    event.shaped('3x immersiveengineering:blastbrick', [
        'bcb',
        'cmc',
        'ncn'
    ], {
        m: 'minecraft:magma_block',
        b: '#forge:plates/brass',
        c: 'create:cinder_flour',
        n: 'minecraft:nether_brick'
    })
    event.shaped('4x portality:frame', [
        'aba',
        'bcb',
        'aba'
    ], {
        a: 'minecraft:obsidian',
        b: 'mekanism:ingot_refined_obsidian',
        c: 'minecraft:quartz'
    })
    event.shaped('1x farmersdelight:stove', [
        'cBc',
        'bab',
        'bCb'
    ], {
        a: 'minecraft:air',
        b: 'minecraft:bricks',
        c: '#forge:ingots/copper',
        B: '#forge:ingots/brass',
        C: 'minecraft:campfire',

    })
    event.shaped('1x farmersdelight:cooking_pot', [
        'dsd',
        'cbc',
        'BBB'
    ], {
        a: 'minecraft:air',
        b: 'minecraft:bucket',
        c: '#forge:ingots/copper',
        B: '#forge:ingots/brass',
        d: 'minecraft:brick',
        s: 'minecraft:wooden_shovel'

    })
    event.shaped('1x farmersdelight:skillet', [
        'aBc',
        'acB',
        'raa'
    ], {
        a: 'minecraft:air',
        c: '#forge:ingots/copper',
        B: '#forge:ingots/brass',
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
        c: '#forge:ingots/copper',
        B: '#forge:ingots/brass',
        r: '#forge:rods/iron'

    })
    event.shaped('1x immersiveengineering:light_engineering', [
        'ama',
        'csc',
        'ama'
    ], {
        a: 'minecraft:air',
        s: '#forge:sheetmetals/iron',
        m: 'immersiveengineering:component_iron',
        c: '#forge:plates/copper'

    })
    event.shaped('1x immersiveengineering:heavy_engineering', [
        'ama',
        'csc',
        'ama'
    ], {
        a: 'minecraft:air',
        s: '#forge:sheetmetals/steel',
        m: 'immersiveengineering:component_steel',
        c: '#forge:plates/electrum'

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
    event.shaped('1x appliedenergistics2:interface', [
        'pgp',
        'dtf',
        'pgp'
    ], {
        p: '#forge:plates/lead',
        t: 'thermal:machine_frame',
        g: 'thermal:obsidian_glass',
        f: 'appliedenergistics2:formation_core',
        d: 'appliedenergistics2:annihilation_core'

    })
    event.shaped('1x appliedenergistics2:drive', [
        'pTp',
        'hth',
        'pgp'
    ], {
        p: 'mekanism:ingot_refined_obsidian',
        t: 'thermal:machine_frame',
        g: 'thermal:obsidian_glass',
        T: 'immersiveengineering:electron_tube',
        h: 'appliedenergistics2:empty_storage_cell'

    })
    event.shaped('1x appliedenergistics2:charger', [
        'prp',
        'paa',
        'pfp'
    ], {
        p: '#forge:plates/iron',
        r: 'extendedcrafting:redstone_ingot_block',
        f: 'appliedenergistics2:fluix_block',
        a: 'minecraft:air'

    })
    event.shaped('1x appliedenergistics2:molecular_assembler', [
        'pgp',
        'lhl',
        'pgp'
    ], {
        p: '#forge:plates/lead',
        l: 'immersiveengineering:logic_circuit',
        g: 'thermal:obsidian_glass',
        h: 'botania:crafting_halo'

    })
    event.shaped('1x farmersdelight:iron_knife', [
		'amb',
		'amb',
		'ama'
		], {
			a: 'minecraft:air',
			b: '#forge:ingots/iron',
			m: 'minecraft:stick',
		})
})