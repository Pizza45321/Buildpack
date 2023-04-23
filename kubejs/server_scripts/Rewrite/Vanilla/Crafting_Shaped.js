
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let RF = (id, x) => MOD("refinedstorage", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let F = (id, x) => MOD("forge", id, x)
let MK = (id, x) => MOD("mekanism", id, x)
let MG = (id, x) => MOD("mekanismgenerators", id, x)
let IM = (id, x) => MOD("immersiveengineering", id, x)
let EX = (id, x) => MOD("extendedcrafting", id, x)


onEvent('recipes', event => {
    event.shaped('mekanism:metallurgic_infuser', [
        'ara',
        'tsC',
        'gcg'
    ], {
        c: IM('component_electronic_adv'),
        s: MK('steel_casing'),
        r: CR('spout'),
        t: CR('item_vault'),
        C: MK('dynamic_tank'),
        g: F("#gears/signalum"),
        a: "minecraft:air"        
    })
    event.shaped('mekanism:personal_chest', [
        'pgp',
        'cCc',
        'ppp'
    ], {
        p: F('#plates/steel'),
        c: F('#chests'),
        C: F('#circuits/basic'),
        g: MG('reactor_glass')
    })
    event.shaped('mekanism:personal_barrel', [
        'pgp',
        'bCb',
        'ppp'
    ], {
        p: F('#plates/steel'),
        b: F('#barrels'),
        C: F('#circuits/basic'),
        g: MG('reactor_glass')
    })
    event.shaped('mekanism:energy_tablet', [
        'par',
        'apa',
        'rap'
    ], {
        p: F('#plates/electrum'),
        a: F('#alloys/advanced'),
        r: EX('redstone_ingot')
    })
    event.shaped('mekanism:qio_dashboard', [
        'pPp',
        'PgP',
        'ptp'
    ], {
        P: F('#pellets/polonium'),
        p: F('#ingots/refined_obsidian'),
        g: F('#glass_panes'),
        t: MK('teleportation_core')
    })
    event.shaped('mekanism:qio_drive_base', [
        'pcp',
        'cPc',
        'pcp'
    ], {
        P: F('#pellets/polonium'),
        c: F('#circuits/ultimate'),
        p: F('#plates/lead')
    })
    event.shaped('mekanism:flamethrower', [
        'ttt',
        'tgf',
        'bcb'
    ], {
        t: '#forge:plates/tin',
        g: 'mekanism:basic_chemical_tank',
        f: 'minecraft:flint_and_steel',
        b: '#forge:plates/bronze',
        c: '#forge:circuits/advanced'
    })
    event.shaped('mekanism:jetpack_armored', [
        'bpb',
        'pjp',
        'apa'
    ], {
        a: 'minecraft:air',
        b: '#forge:storage_blocks/steel',
        p: '#forge:plates/invar',
        j: 'mekanism:jetpack'
    })
    event.shaped('mekanism:jetpack', [ 
        'scs',
        'btb',
        'aba'
    ], {
        s: '#forge:plates/steel',
        c: '#forge:circuits/basic',
        b: '#forge:plates/bronze',
        t: 'mekanism:basic_chemical_tank',
        a: 'minecraft:air'
    })
    event.shaped('mekanism:scuba_mask', [
        'sss',
        'sgs',
        'scs'
    ], {
        s: '#forge:plates/tin',
        g: 'mekanism:basic_chemical_tank',
        c: '#forge:plates/bronze'
    })
    event.shaped('mekanism:scuba_tank', [
        'ata',
        'AgA',
        'bcb'
    ], {
        a: 'minecraft:air',
        t: 'mekanism:basic_control_circuit',
        A: '#forge:alloys/advanced',
        g: 'mekanism:basic_chemical_tank',
        b: 'create:copper_backtank', 
        c: 'create:cogwheel'
    })
    event.shaped('mekanism:free_runners_armored', [
        'aaa',
        'rfr',
        'bab'
    ], {
        f: 'mekanism:free_runners',
        r: 'thermal:cured_rubber',
        b: '#forge:storage_blocks/steel',  
        a: 'minecraft:air'
    })
    event.shaped('mekanism:hazmat_mask', [
        'ppp',
        'pcp',
        'aaa'
    ], {
        c: 'thermal:cured_rubber',
        p: '#forge:plates/lead',  
        a: 'minecraft:air'
    })
    event.shaped('mekanism:hazmat_gown', [
        'pcp',
        'ppp',
        'ppp'
    ], {
        c: 'thermal:cured_rubber',
        p: '#forge:plates/lead'
    })
    event.shaped('mekanism:hazmat_pants', [
        'ppp',
        'pcp',
        'pap'
    ], {
        c: 'thermal:cured_rubber',
        p: '#forge:plates/lead',  
        a: 'minecraft:air'
    })
    event.shaped('mekanism:hazmat_boots', [
        'aaa',
        'cac',
        'pap'
    ], {
        c: 'thermal:cured_rubber',
        p: '#forge:plates/lead',  
        a: 'minecraft:air'
    })
    event.shaped('2x mekanism:module_base', [
        'dld',
        'lhl',
        'dld'
    ], {
        d: 'immersiveengineering:plate_duroplast',
        l: '#forge:plates/lumium',  
        h: 'mekanism:hdpe_sheet'
    })
    event.shaped('2x mekanism:upgrade_speed', [
        'apa',
        'AmA',
        'apa'
    ], {
        m: 'mekanism:module_base',
        p: '#forge:ingots/refined_obsidian',
        A: '#forge:alloys/advanced',  
        a: 'minecraft:air'
    })
    event.shaped('2x mekanism:upgrade_energy', [
        'apa',
        'AmA',
        'apa'
    ], {
        m: 'mekanism:module_base',
        p: '#forge:ingots/refined_glowstone',
        A: '#forge:alloys/advanced',  
        a: 'minecraft:air'
    })
    event.shaped('2x mekanism:upgrade_filter', [
        'apa',
        'AmA',
        'apa'
    ], {
        m: 'mekanism:module_base',
        p: '#forge:gears/bronze',
        A: '#forge:alloys/advanced',  
        a: 'minecraft:air'
    })
    event.shaped('2x mekanism:upgrade_muffling', [
        'apa',
        'AmA',
        'apa'
    ], {
        m: 'mekanism:module_base',
        p: '#forge:gears/steel',
        A: '#forge:alloys/advanced',  
        a: 'minecraft:air'
    })
    event.shaped('2x mekanism:upgrade_gas', [
        'apa',
        'AmA',
        'apa'
    ], {
        m: 'mekanism:module_base',
        p: '#forge:gears/invar',
        A: '#forge:alloys/advanced',  
        a: 'minecraft:air'
    })
    event.shaped('2x mekanism:upgrade_anchor', [
        'apa',
        'AmA',
        'apa'
    ], {
        m: 'mekanism:module_base',
        p: '#forge:gears/netherite',
        A: '#forge:alloys/advanced',  
        a: 'minecraft:air'
    })
    event.shaped('mekanism:electrolytic_core', [
        'aoa',
        'ibr',
        'aoa'
    ], {
        r: '#forge:gears/rose_gold',
        i: '#forge:gears/invar',
        b: '#forge:circuits/basic', 
        o: '#forge:ingots/osmium',
        a: '#forge:alloys/advanced'
    })
    event.shaped('mekanism:energized_smelter', [
        'rcr',
        'pCi',
        'rcr'
    ], {
        r: 'extendedcrafting:redstone_ingot',
        c: '#forge:circuits/basic',
        C: 'mekanism:steel_casing', 
        i: 'thermal:machine_smelter',
        p: 'thermal:machine_pyrolyzer'
    })
    event.shaped('mekanism:enrichment_chamber', [
        'rcr',
        'gCg',
        'rcr'
    ], {
        r: 'extendedcrafting:redstone_ingot',
        c: '#forge:circuits/basic',
        C: 'mekanism:steel_casing', 
        g: '#forge:gears/dragonsteel'
    })
    event.shaped('mekanism:purification_chamber', [
        'rcr',
        'gCg',
        'rcr'
    ], {
        r: '#forge:alloys/advanced',
        c: '#forge:circuits/advanced',
        C: 'mekanism:enrichment_chamber', 
        g: '#forge:gears/shellite'
    })
    event.shaped('mekanism:chemical_injection_chamber', [
        'rcr',
        'gCg',
        'rcr'
    ], {
        r: '#forge:alloys/elite',
        c: '#forge:circuits/elite',
        C: 'mekanism:purification_chamber', 
        g: '#forge:gears/twinite'
    })
    event.shaped('mekanism:combiner', [
        'rcr',
        'gCg',
        'rcr'
    ], {
        r: '#forge:alloys/elite',
        c: '#forge:circuits/elite',
        C: 'mekanism:steel_casing', 
        g: '#forge:gears/shellite'
    })
    event.shaped('mekanism:crusher', [
        'rcr',
        'pCp',
        'rcr'
    ], {
        r: 'extendedcrafting:redstone_ingot',
        c: '#forge:circuits/basic',
        C: 'mekanism:steel_casing', 
        p: 'thermal:machine_pulverizer'
    })
    event.shaped('mekanism:logistical_sorter', [
        'pPp',
        'pcp',
        'ppp'
    ], {
        P: 'create:mechanical_piston',
        p: '#forge:plates/steel',
        c: '#forge:circuits/basic'
    })
    event.shaped('mekanism:electric_pump', [
        'wpw',
        'aCa',
        'oco'
    ], {
        w: 'create:cogwheel',
        p: 'create:hose_pulley',
        a: '#forge:circuits/advanced',
        o: '#forge:ingots/osmium',
        C: 'mekanism:steel_casing',
        c: '#forge:alloys/advanced'
    })
    event.shaped('mekanism:electrolytic_separator', [
        'rcr',
        'pCp',
        'rdr'
    ], {
        r: '#forge:plates/steel',
        c: '#forge:circuits/basic',
        C: 'mekanism:electrolytic_core', 
        p: 'mekanism:basic_chemical_tank',
        d: 'mekanism:dynamic_tank'
    })
    event.shaped('mekanism:isotopic_centrifuge', [
        'lrl',
        'cCc',
        'lrl'
    ], {
        c: '#forge:circuits/ultimate',
        C: 'mekanism:basic_chemical_tank', 
        l: '#forge:plates/lead',
        r: '#forge:ingots/refined_obsidian'
    })
    event.shaped('mekanism:nutritional_liquifier', [
        'lrl',
        'cCc',
        'lrl'
    ], {
        r: 'mekanism:canteen',
        c: '#forge:circuits/ultimate',
        C: 'mekanism:basic_chemical_tank', 
        l: '#forge:plates/steel'
    })
    event.shaped('mekanism:supercharged_coil', [
        'sss',
        'clc',
        'ppp'
    ], {
        s: '#forge:plates/signalum',
        c: '#forge:circuits/ultimate',
        p: '#forge:pellets/polonium', 
        l: 'mekanism:laser'
    })
    event.shaped('mekanism:pressurized_reaction_chamber', [
        'rar',
        'cCc',
        'pdp'
    ], {
        r: '#forge:plates/steel',
        c: '#forge:circuits/basic',
        C: 'mekanism:enrichment_chamber', 
        p: 'mekanism:basic_chemical_tank',
        d: 'mekanism:dynamic_tank',
        a: '#forge:alloys/advanced'
    })
    event.shaped('mekanism:precision_sawmill', [
        'rcr',
        'pCp',
        'rcr'
    ], {
        r: '#forge:plates/steel',
        c: '#forge:circuits/basic',
        C: 'mekanism:steel_casing', 
        p: 'thermal:machine_sawmill'
    })
    event.shaped('mekanism:seismic_vibrator', [
        'plp',
        'sCs',
        'pcp'
    ], {
        p: '#forge:plates/steel',
        c: '#forge:circuits/basic',
        C: 'mekanism:steel_casing', 
        s: '#forge:alloys/advanced',
        l: 'minecraft:lapis_block'
    })
    event.shaped('8x mekanism:basic_universal_cable', [
        'ppp',
        'rRr',
        'ppp'
    ], {
        p: '#forge:plates/steel',
        r: 'extendedcrafting:redstone_ingot',
        R: '#forge:storage_blocks/redstone'
    })
    event.shaped('8x mekanism:basic_mechanical_pipe', [
        'ppp',
        'dtd',
        'ppp'
    ], {
        p: '#forge:plates/steel',
        d: 'mekanism:dynamic_tank',
        t: 'create:fluid_tank'
    })
    event.shaped('8x mekanism:basic_pressurized_tube', [
        'ppp',
        'rhr',
        'ppp'
    ], {
        p: '#forge:plates/steel',
        h: '#thermal:glass/hardened',
        r: 'mekanismgenerators:reactor_glass'
    })
    event.shaped('8x mekanism:basic_logistical_transporter', [
        'ppp',
        'aca',
        'ppp'
    ], {
        p: '#forge:plates/steel',
        a: 'immersiveengineering:component_electronic_adv',
        c: '#forge:circuits/basic'
    })
    event.shaped('8x mekanism:basic_thermodynamic_conductor', [
        'ppp',
        'CcC',
        'ppp'
    ], {
        p: '#forge:plates/steel',
        c: '#forge:storage_blocks/copper',
        C: '#forge:plates/constantan'
    })
        event.shaped('mekanism:oredictionificator', [
            'pop',
            'CcC',
            'psp'
        ], {
            p: '#forge:plates/steel',
            c: 'mekanism:steel_casing',
            C: '#forge:circuits/basic',
            o: 'mekanism:dictionary',
            s: '#forge:chests/wooden'
        })
        event.shaped('mekanism:resistive_heater', [
            'pcp',
            'csc',
            'pep'
        ], {
            p: '#forge:plates/bronze',
            s: 'mekanism:steel_casing',
            c: 'immersiveengineering:coil_hv',
            e: 'mekanism:energy_tablet'
        })
        event.shaped('mekanism:fuelwood_heater', [
            'pcp',
            'SsS',
            'pep'
        ], {
            p: '#forge:plates/bronze',
            s: 'mekanism:steel_casing',
            c: 'immersiveengineering:coil_hv',
            e: 'mekanism:energy_tablet',
            S: 'minecraft:smoker'
        })
        event.shaped('mekanism:formulaic_assemblicator', [
            'pfp',
            'csc',
            'pep'
        ], {
            p: '#forge:plates/steel',
            s: 'mekanism:steel_casing',
            c: '#forge:circuits/basic',
            e: 'mekanism:energy_tablet',
            f: 'thermal:machine_crafter'
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
        C: 'minecraft:campfire'
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
    event.shaped('create:empty_blaze_burner', [
        'aaa',
        'iai',
        'pCp'
    ], {
        p: '#forge:plates/cast_iron',
        i: 'minecraft:iron_bars',
        a: 'minecraft:air',
        C: "minecraft:campfire"

    })
    event.shaped('create:electron_tube', [
        'ngn',
        'grg',
        'pRp'
    ], {
        p: F('#plates/cast_iron'),
        n: F('#nuggets/cast_iron'),
        g: F('#glass'),
        r: CR("polished_rose_quartz"),
        R: EX("redstone_ingot")
    })
    event.shaped('createaddition:capacitor', [
        'ngn',
        'grg',
        'pRp'
    ], {
        p: F('#plates/copper'),
        n: F('#nuggets/copper'),
        g: F('#plates/zinc'),
        r: CR("polished_rose_quartz"),
        R: EX("redstone_ingot")
    })
    event.shaped('thermal:fluid_cell_frame', [
        'Ggp',
        'geg',
        'pgG'
    ], {
        p: F('#plates/copper'),
        G: F('#gears/iron'),
        g: F('#glass'),
        e: IM("light_engineering")
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
        h: '#forge:plastic',
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
event.shaped('industrialforegoing:supreme_black_hole_tank', [
        'php',
        'efe',
        'kik'
    ], {
        f: '#industrialforegoing:machine_frame/supreme',
        p: '#forge:plastic',
        h: 'mekanism:hdpe_sheet',
        e: 'hostilenetworks:end_prediction',
        k: 'refinedstorage:64k_storage_part',
        i: 'create:fluid_tank'
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
        h: 'immersiveengineering:plate_duroplast',
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
event.shaped('botania:mana_spreader', [
        'www',
        'spr',
        'www'
    ], {
        w: 'botania:livingwood',
        s: 'mna:superheated_vinteum_ingot',
        p: '#botania:petals',
        r: 'malum:hallowed_spirit_resonator'
    })
event.shaped('botania:elven_spreader', [
        'www',
        'spr',
        'www'
    ], {
        w: 'botania:dreamwood',
        s: 'mna:superheated_purified_vinteum_ingot',
        p: '#botania:petals',
        r: 'malum:stained_spirit_resonator'
    })
event.shaped('botania:apothecary_default', [
        'sps',
        'eSa',
        'SSS'
    ], {
        s: 'minecraft:stone_brick_slab',
        p: '#botania:petals',
        e: 'malum:earthen_spirit',
        S: 'minecraft:stone_bricks',
        a: 'malum:aqueous_spirit'
    })
event.shaped('botania:apothecary_mossy', [
        'sps',
        'eSa',
        'SSS'
    ], {
        s: 'minecraft:mossy_stone_brick_slab',
        p: '#botania:petals',
        e: 'malum:earthen_spirit',
        S: 'minecraft:mossy_stone_bricks',
        a: 'malum:aqueous_spirit'
    })
event.shaped('bloodmagic:masterroutingnode', [
        'sd',
        'bg'
    ], {
        s: '#malum:spirits',
        d: 'botania:mana_diamond',
        b: '#forge:storage_blocks/steel',
        g: 'mna:stone_rune_blank'
    })
event.shaped('bloodmagic:itemroutingnode', [
        'gG',
        'da'
    ], {
        g: 'mna:stone_rune_blank',
        G: '#forge:glass',
        d: '#forge:dusts/mana',
        a: 'mna:arcane_ash'
    })
event.shaped('bloodmagic:inputroutingnode', [
        'n',
        'h'
    ], {
        n: 'bloodmagic:itemroutingnode',
        h: 'botania:hopperhock'
    })
event.shaped('bloodmagic:soulforge', [
        'sss',
        'ama',
        'ala'
    ], {
        a: '#mna:decoration/arcane_stone',
        m: 'mna:mote_arcane',
        l: 'malum:hallowed_spirit_resonator',
        s: '#mna:decoration/arcane_stone_slab'
    })
event.shaped('hostilenetworks:blank_data_model', [
        'cs',
        'bw'
    ], {
        b: 'mekanism:basic_control_circuit',
        w: '#forge:wires/lead',
        c: 'immersiveengineering:component_electronic_adv',
        s: 'minecraft:smooth_stone'
    })
event.shaped('mininggadgets:upgrade_empty', [
        'cs',
        'bw'
    ], {
        b: 'immersiveengineering:component_electronic_adv',
        w: '#forge:wires/copper',
        c: '#forge:gems/diamond',
        s: 'minecraft:smooth_stone_slab'
    })
event.shaped('1x immersiveengineering:dynamo', [
        'iri',
        'Rca',
        'iri'
    ], {
        a: 'createaddition:alternator',
        c: 'immersiveengineering:coil_lv',
        r: '#forge:rods/copper',
        i: '#forge:plates/cast_iron',
        R: 'extendedcrafting:redstone_ingot'
})
event.shaped('immersiveengineering:current_transformer', [
        'ama',
        'aAa',
        'scs'
    ], {
        a: 'minecraft:air',
        m: 'immersiveengineering:voltmeter',
        A: 'immersiveengineering:capacitor_lv',
        c: 'immersiveengineering:component_electronic',
        s: '#forge:sheetmetals/iron'
    })
event.shaped('immersiveengineering:transformer', [
        'lma',
        'cAa',
        'ssa'
    ], {
        a: 'minecraft:air',
        m: 'immersiveengineering:connector_mv',
        l: 'immersiveengineering:connector_lv',
        c: 'immersiveengineering:component_electronic',
        s: '#forge:sheetmetals/iron',
        A: 'immersiveengineering:capacitor_mv'
    })
event.shaped('immersiveengineering:transformer_hv', [
        'lma',
        'cAa',
        'ssa'
    ], {
        a: 'minecraft:air',
        m: 'immersiveengineering:connector_hv',
        l: 'immersiveengineering:connector_mv',
        c: 'immersiveengineering:component_electronic_adv',
        s: '#forge:sheetmetals/steel',
        A: 'immersiveengineering:capacitor_hv'
    })
event.shaped('immersiveengineering:craftingtable', [
        'sss',
        'ScS',
        'SeS'
    ], {
        a: 'minecraft:air',
        c: '#forge:workbenches',
        S: '#forge:rods/treated_wood',
        s: '#forge:treated_wood_slab',
        e: 'create:electron_tube'
    })
event.shaped('8x immersiveengineering:conveyor_basic', [
        'aaa',
        'bbb',
        'iri'
    ], {
        a: 'minecraft:air',
        i: '#forge:plates/cast_iron',
        b: 'create:belt_connector',
        r: 'extendedcrafting:redstone_ingot'
    })
event.shaped('3x immersiveengineering:conveyor_splitter', [
        'aaa',
        'viv',
        'ava'
    ], {
        a: 'minecraft:air',
        i: '#forge:plates/cast_iron',
        v: 'immersiveengineering:conveyor_basic'
    })
event.shaped('3x immersiveengineering:conveyor_vertical', [
        'via',
        'vaa',
        'via'
    ], {
        a: 'minecraft:air',
        i: '#forge:plates/cast_iron',
        v: 'immersiveengineering:conveyor_basic'
    })
event.shaped('immersiveengineering:workbench', [
        'aaa',
        'iss',
        'baf'
    ], {
        a: 'minecraft:air',
        i: '#forge:plates/cast_iron',
        s: '#forge:treated_wood_slab',
        b: 'immersiveengineering:craftingtable',
        f: 'immersiveengineering:treated_fence'
    })
event.shaped('1x immersiveengineering:turntable', [
        'aaa',
        'ibi',
        'rcr'
    ], {
        a: 'minecraft:air',
        i: '#forge:plates/cast_iron',
        b: 'immersiveengineering:wooden_barrel',
        r: 'extendedcrafting:redstone_ingot',
        c: 'immersiveengineering:coil_lv'
    })
event.shaped('1x immersiveengineering:capacitor_lv', [
        'plp',
        'ibi',
        'plp'
    ], {
        a: 'minecraft:air',
        i: '#forge:plates/cast_iron',
        p: '#forge:treated_wood',
        l: '#forge:plates/lead',
        b: 'immersiveengineering:redstone_acid_bucket'
    })
event.shaped('1x immersiveengineering:capacitor_mv', [
        'pnp',
        'sbs',
        'pip'
    ], {
        s: '#forge:plates/steel',
        p: '#forge:treated_wood',
        n: '#forge:plates/constantan',
        i: '#forge:plates/cast_iron',
        b: 'immersiveengineering:redstone_acid_bucket'
    })
event.shaped('1x immersiveengineering:capacitor_hv', [
        'pAp',
        'sbs',
        'php'
    ], {
        s: '#forge:plates/steel',
        p: '#forge:treated_wood',
        h: '#forge:ingots/hop_graphite',
        A: '#forge:plates/aluminum',
        b: 'immersiveengineering:redstone_acid_bucket'
    })
event.shaped('1x immersiveengineering:furnace_heater', [
        'iCi',
        'rbr',
        'ici'
    ], {
        i: '#forge:plates/cast_iron',
        c: 'immersiveengineering:coil_lv',
        C: 'immersiveengineering:component_electronic',
        r: 'extendedcrafting:redstone_ingot',
        b: 'immersiveengineering:metal_barrel'
    })
event.shaped('1x immersiveengineering:thermoelectric_generator', [
        'sCs',
        'rbr',
        'scs'
    ], {
        s: '#forge:plates/steel',
        c: 'immersiveengineering:coil_lv',
        r: 'extendedcrafting:redstone_ingot',
        b: 'immersiveengineering:metal_barrel',
        C: '#forge:plates/constantan'
    })
event.shaped('1x immersiveengineering:charging_station', [
        'gig',
        'vrv',
        'pcp'
    ], {
        g: '#forge:glass',
        i: '#forge:plates/cast_iron',
        r: 'extendedcrafting:redstone_ingot',
        v: 'immersiveengineering:electron_tube',
        c: 'immersiveengineering:coil_lv',
        p: '#forge:treated_wood'
    })
event.shaped('1x immersiveengineering:sample_drill', [
        'sSs',
        'sfs',
        'hfl'
    ], {
        s: '#immersiveengineering:scaffoldings/steel',
        S: 'immersiveengineering:survey_tools',
        f: '#forge:fences/steel',
        h: 'immersiveengineering:heavy_engineering',
        l: 'immersiveengineering:light_engineering'
    })
event.shaped('1x immersiveengineering:floodlight', [
        'sii',
        'pbr',
        'smi'
    ], {
        s: '#forge:plates/silver',
        i: '#forge:plates/cast_iron',
        p: '#forge:glass_panes',
        b: 'immersiveengineering:light_bulb',
        r: 'extendedcrafting:redstone_ingot',
        m: 'immersiveengineering:component_iron'
    })
event.shaped('4x immersiveengineering:generator', [
        'srs',
        'rbr',
        'shs'
    ], {
        s: '#forge:sheetmetals/steel',
        r: 'thermal:rf_coil',
        b: 'immersiveengineering:metal_barrel',
        h: 'immersiveengineering:coil_hv'

    })
event.shaped('4x immersiveengineering:radiator', [
        'sis',
        'ibi',
        'sBs'
    ], {
        s: '#forge:sheetmetals/steel',
        i: '#forge:plates/cast_iron',
        b: 'immersiveengineering:metal_barrel',
        B: 'minecraft:water_bucket'

    })
event.shaped('immersiveengineering:hammer', [
        'ach',
        'asc',
        'saa'
    ], {
        a: 'minecraft:air',
        h: 'immersiveengineering:hemp_fabric',
        c: '#forge:storage_blocks/cast_iron',
        s: '#forge:rods/treated_wood'

    })
event.shaped('immersiveengineering:wirecutter', [
        'sac',
        'hsa',
        'sac'
    ], {
        a: 'minecraft:air',
        h: 'immersiveengineering:hemp_fabric',
        c: '#forge:storage_blocks/cast_iron',
        s: '#forge:rods/treated_wood'
    })
event.shaped('immersiveengineering:screwdriver', [
        'aar',
        'ara',
        'sha'
    ], {
        a: 'minecraft:air',
        h: 'immersiveengineering:hemp_fabric',
        r: '#forge:rods/copper',
        s: '#forge:rods/treated_wood'
    })
})
function TDynamos(item1, item2, output) {
    onEvent('recipes', event  => {
        event.shaped(output, [
        'ama',
        'qcb',
        'rfr'
    ], {
        a: 'minecraft:air',
        c: IM('coil_hv'),
        f: TE('machine_frame'),
        r: TE('rf_coil'),
        q: item1,
        b: item2,
        f: 'mysticalagriculture:machine_frame',
        m: 'createaddition:electric_motor'
    })
    })}
function TMachines(item1, item2, item3, component, gears, output) {
    onEvent('recipes', event  => {
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
    })
    }
    TDynamos(CR('blaze_burner'), CR('blaze_burner'), TE('dynamo_magmatic'))
    TDynamos(FD('horse_feed'),FD('dog_food'),TE('dynamo_gourmand'))
    TDynamos('#chipped:bookshelf','#chipped:bookshelf', TE('dynamo_disenchantment'))
    TDynamos('#forge:storage_blocks/emerald', '#forge:storage_blocks/diamond', TE('dynamo_lapidary'))
    TDynamos('#forge:coins/netherite', '#forge:coins/netherite', TE('dynamo_numismatic'))
    TDynamos('create_sa:large_fueling_tank', 'create_sa:large_filling_tank', TE('dynamo_compression'))
    TMachines('minecraft:smoker', 'minecraft:blast_furnace', 'extendedcrafting:redstone_ingot','immersiveengineering:component_electronic', '#forge:gears/copper', 'thermal:machine_furnace')
    TMachines('create:empty_schematic', 'thermal:redstone_servo', '#forge:workbenches', 'immersiveengineering:component_electronic', '#forge:gears/copper', 'thermal:machine_crafter')
    TMachines('create:mechanical_piston', 'thermal:redstone_servo', 'create:crushing_wheel', 'immersiveengineering:component_electronic', '#forge:gears/copper', 'thermal:machine_pulverizer')
    TMachines('tconstruct:blazing_blood_bucket', 'tconstruct:blazing_blood_bucket', '#thermal:glass/hardened', 'immersiveengineering:component_electronic', '#forge:gears/invar', 'thermal:machine_crucible')
    TMachines('minecraft:water_bucket', 'minecraft:lava_bucket', 'create:basin', 'immersiveengineering:component_electronic', '#forge:gears/copper',' thermal:machine_bottler' )
    TMachines('thermal:redstone_servo', 'mekanism:dynamic_tank', "create:mechanical_piston", 'immersiveengineering:component_electronic', '#forge:gears/constantan', 'thermal:machine_press')
    TMachines('thermal:saw_blade', 'thermal:redstone_servo', 'minecraft:stonecutter', 'immersiveengineering:component_electronic','#forge:gears/copper', 'thermal:machine_sawmill')
    TMachines('create:blaze_burner', 'create:mechanical_mixer', 'create:basin', 'immersiveengineering:component_electronic_adv', '#forge:gears/invar', 'thermal:machine_refinery')
    TMachines('minecraft:blast_furnace', 'minecraft:blast_furnace', 'extendedcrafting:redstone_ingot', 'immersiveengineering:component_electronic_adv', '#forge:gears/invar','thermal:machine_smelter')
    TMachines('thermal:phytogro', 'thermal:phytogro', 'minecraft:farmland', 'immersiveengineering:component_electronic_adv', '#forge:gears/lumium', 'thermal:machine_insolator')
    TMachines('tconstruct:splash_bottle', 'tconstruct:lingering_bottle', 'minecraft:brewing_stand', 'immersiveengineering:component_electronic_adv', '#forge:gears/constantan', 'thermal:machine_brewer'),
    TMachines('create:blaze_burner', 'create:blaze_burner', 'minecraft:brewing_stand', 'immersiveengineering:component_electronic_adv', '#forge:gears/constantan', 'thermal:machine_pyrolyzer')
    TMachines('create:mechanical_mixer', 'minecraft:compass', 'create:basin', 'immersiveengineering:component_electronic_adv', '#forge:gears/constantan', 'thermal:machine_centrifuge')