onEvent('recipes', event => {
    event.recipes.createMechanicalCrafting('refinedstorage:controller', [
        'qqcqq',
        'qicgq',
        'ccfcc',
        'qdcnq',
        'qqcqq'
        ], {
            i: "refinedstorage:basic_processor",
            d: "refinedstorage:advanced_processor",
            g: "refinedstorage:improved_processor",
            n: "rebornstorage:super_advanced_processor",
            q: "refinedstorage:quartz_enriched_iron",
            c: "refinedstorage:cable",
            f: "refinedstorage:machine_casing"
        })
    event.recipes.createMechanicalCrafting('2x mysticalagriculture:infusion_pedestal', [
        'aataa',
        'apgpa',
        'asasa',
        'aSaSa'
        ], {
            p: 'extendedcrafting:pedestal',
            a: 'minecraft:air',
            t: '#forge:ingots/terrasteel',
            s: '#forge:ingots/steel',
            S: 'malum:hallowed_gold_ingot',
            g: 'bloodmagic:weakbloodshard'
        })
    event.recipes.createMechanicalCrafting('mysticalagriculture:infusion_altar', [
        'aataa',
        'ascsa',
        'aSlSa',
        'aaraa'
        ], {
            c: 'extendedcrafting:crafting_core',
            a: 'minecraft:air',
            t: '#forge:ingots/terrasteel',
            s: '#forge:ingots/steel',
            S: 'malum:hallowed_gold_ingot',
            l: 'botania:life_essence',
            r: 'botania:rosa_arcana'
        })
    event.recipes.createMechanicalCrafting('mysticalagriculture:tinkering_table', [
        'SsssS',
        'asesa',
        'SsssS'
        ], 
        {
            s: 'mysticalagriculture:soulstone',
            S: 'mysticalagriculture:soulium_block',
            e: 'mysticalagriculture:tertium_block',
            a: 'minecraft:air'

        })
    event.recipes.createMechanicalCrafting(Item.of('mininggadgets:mininggadget', '{volume:1.0f,beamRange:5,range:1}'), [
        'ppirdpp',
        'fiuppaa',
        'ppildpp',
        'aacaaaa'
        ], 
        {
            p: '#forge:plates/iron',
            i: 'minecraft:iron_block',
            r: 'extendedcrafting:redstone_ingot_block',
            d: "minecraft:diamond_block",
            f: "thermal:energy_cell_frame",
            u: 'mininggadgets:upgrade_empty',
            l: 'minecraft:lapis_block',
            c: "thermal:rf_coil",
            a: 'minecraft:air'

        })
    event.recipes.createMechanicalCrafting('create:rotation_speed_controller' , [
        'pPp',
        'sSs',
        'pbp'
        ], 
        {
            p: '#forge:plates/brass',
            P: 'create:precision_mechanism',
            s: 'create:shaft',
            S: "create:speedometer",
            b: 'create:brass_casing'
        })
    event.recipes.createMechanicalCrafting('create:mechanical_arm' , [
        'ppA',
        'paa',
        'Pba'
        ], 
        {
            p: '#forge:plates/brass',
            P: 'create:precision_mechanism',
            A: 'create:andesite_alloy',
            a: "minecraft:air",
            b: 'create:brass_casing'
        })
    event.recipes.createMechanicalCrafting('immersiveengineering:waterwheel_segment' , [
        'asa',
        'sps',
        'psp'
        ], 
        {
            p: '#forge:treated_wood',
            s: '#forge:rods/treated_wood',
            a: "minecraft:air",
        })
    event.recipes.createMechanicalCrafting('immersiveengineering:windmill_blade' , [
        'ppa',
        'ssp',
        'ssa'
        ], 
        {
            p: '#forge:treated_wood',
            s: '#forge:rods/treated_wood',
            a: "minecraft:air",
        })
    event.recipes.createMechanicalCrafting('create_sa:portable_drill' , [
        'aba',
        'tlT',
        'ses',
        'blb',
        'ada'
        ], 
        {
            a: 'minecraft:air',
            b: '#forge:ingots/brass',
            t: 'create_sa:medium_filling_tank',
            T: 'create_sa:medium_fueling_tank',
            l: "create:large_cogwheel",
            s: 'create:cogwheel',
            e: 'create_sa:steam_engine',
            d: 'create_sa:brass_drill_head'
        })
    event.recipes.createMechanicalCrafting('create_sa:block_picker' , [
        'aba',
        'ltl',
        'ses',
        'blb',
        'ada'
        ], 
        {
            a: 'minecraft:air',
            b: '#forge:ingots/copper',
            t: 'create_sa:medium_filling_tank',
            l: "create:large_cogwheel",
            s: 'create:cogwheel',
            e: 'create_sa:hydraulic_engine',
            d: 'create_sa:copper_magnet'
        }) 
    event.recipes.createMechanicalCrafting('create_sa:grapplin_whisk' , [
        'aba',
        'sts',
        'cec',
        'bcb',
        'ada'
        ], 
        {
            a: 'minecraft:air',
            b: '#forge:ingots/zinc',
            t: 'create_sa:medium_fueling_tank',
            c: "create:minecart_coupling",
            s: 'create:cogwheel',
            e: 'create_sa:heat_engine',
            d: 'create:whisk'
        }) 
    event.recipes.createMechanicalCrafting("industrialforegoing:fluid_extractor", [
        "ABABA",
        "BCDCB",
        "AEFEA",
        "BCGCB",
        "ABABA"
        ],
        {
            A: "#forge:plates/zinc",
            B: "#forge:plates/cast_iron",
            C: "create:andesite_casing",
            D: "extendedcrafting:redstone_ingot_block",
            E: "mekanism:basic_fluid_tank",
            F: "create:hose_pulley",
            G: "thermal:drill_head" 
        })
    event.recipes.createMechanicalCrafting("industrialforegoing:latex_processing_unit", [
        "ABABA",
        "BHCHB",
        "ADEFA",
        "BHGHB",
        "ABABA"
        ],
        {
            A: "#forge:plates/zinc",
            B: "#forge:plates/cast_iron",
            C: "create:andesite_casing",
            D: "extendedcrafting:redstone_ingot_block",
            E: "mekanism:basic_fluid_tank",
            F: "thermal:redstone_servo",
            G: "thermal:rf_coil",
            H: "create:brass_casing"
        })
event.recipes.createMechanicalCrafting("industrialforegoing:dissolution_chamber", [
    "AAAAA",
    "ACDCA",
    "BCECA",
    "BCGCB",
    "BBFBB"
    ],
    {
        A: "industrialforegoing:plastic",
        B: "immersiveengineering:plate_duroplast",
        C: "create:fluid_tank",
        D: "minecraft:chest",
        E: "industrialforegoing:machine_frame_pity",
        F: "immersiveengineering:component_electronic_adv",
        G: "thermal:rf_coil",
        
    })
})
function AdvMachines(outputItem, [in1, in2])  {
    onEvent('recipes', event => {
        event.remove({output: outputItem})
        event.recipes.createMechanicalCrafting(outputItem, [
        'apdpa',
        'phihp',
        'dzmyd',
        'HlcrH',
        'aHdHa'
        ], 
        {
            p: '#forge:plastic',
            H: 'mekanism:hdpe_sheet',
            d: 'immersiveengineering:plate_duroplast',
            a: 'minecraft:air',
            z: in1, 
            y: in2,
            h: 'immersiveengineering:heavy_engineering',
            l: 'immersiveengineering:light_engineering',
            r: 'immersiveengineering:rs_engineering',
            c: 'immersiveengineering:component_electronic_adv',
            i: 'thermal:upgrade_augment_3',
            m: '#industrialforegoing:machine_frame/advanced'
        })
    })
    }
function Jetpack(itemOutput, [plateInput, chestplateInput, flywheelInput, mechanismInput])  {
    onEvent('recipes', event =>{
        event.remove({output: itemOutput})
        event.recipes.createMechanicalCrafting(itemOutput, [
        'FpwpF',
        'fcmcf',
        'apCpa'
        ], 
        {
            p: plateInput,
            m: mechanismInput,
            C: chestplateInput,
            w: flywheelInput,
            F: 'create_sa:fan_component',
            f: 'create:encased_fan',
            c: 'create:cogwheel',
            a: 'minecraft:air'
        })
    }) 
    }
    function Exoskeleton(itemOutput, [plateInput, blockInput, chestplateInput, flywheelInput, mechanismInput])  {
        onEvent('recipes', event=>{
        event.remove({output: itemOutput})
        event.recipes.createMechanicalCrafting(itemOutput, [
        'spwps',
        'ScmcS',
        'bpCpb'
        ], 
        {
            p: plateInput,
            m: mechanismInput,
            C: chestplateInput,
            b: blockInput,
            w: flywheelInput,
            s: 'create:cogwheel',
            c: 'create:large_cogwheel',
            S: 'create:shaft'
        })  
        })
        
    }
    AdvMachines('industrialforegoing:enchantment_factory', ['minecraft:enchanting_table', 'create_sa:heap_of_experience'])
    AdvMachines('industrialforegoing:enchantment_applicator', ['tconstruct:tinkers_anvil', 'mekanism:dynamic_tank'])
    AdvMachines('industrialforegoing:enchantment_extractor', ['immersiveengineering:grindingdisk', 'minecraft:bookshelf'])
    AdvMachines('industrialforegoing:enchantment_sorter', ['minecraft:bookshelf', 'thermal:item_filter_augment'])
    AdvMachines('industrialforegoing:mob_crusher', ['minecraft:diamond_sword', 'minecraft:diamond_axe'])
    AdvMachines('industrialforegoing:mob_duplicator', ['hostilenetworks:sim_chamber', 'hostilenetworks:blank_data_model'])
    AdvMachines('industrialforegoing:material_stonework_factory ', ['extendedcrafting:advanced_table', 'minecraft:blast_furnace'])
    AdvMachines('industrialforegoing:washing_factory', ['minecraft:raw_iron', 'industrialforegoing:meat_feeder'])
    AdvMachines('industrialforegoing:fluid_sieving_machine', ['createdeco:andesite_bars', 'createdeco:andesite_bars'])
    AdvMachines('industrialforegoing:potion_brewer', ['minecraft:brewing_stand', 'minecraft:nether_wart'])
    AdvMachines('industrialforegoing:infinity_charger', ['thermal:energy_cell', 'thermal:rf_coil'])
    AdvMachines('industrialforegoing:stasis_chamber', ['minecraft:nether_star', 'minecraft:soul_sand'])
    AdvMachines('industrialforegoing:wither_builder', ['minecraft:wither_skeleton_skull', 'minecraft:wither_skeleton_skull'])
    Jetpack('create_sa:brass_jetpack_chestplate', ['#forge:plates/brass', 'create_sa:brass_chestplate', 'extendedflywheels:flywheel', 'create_sa:steam_engine'])
    Jetpack('create_sa:copper_jetpack_chestplate', ['#forge:plates/copper', 'create_sa:copper_chestplate', 'extendedflywheels:steelflywheel', 'create_sa:hydraulic_engine'])
    Jetpack('create_sa:andesite_jetpack_chestplate', ['#forge:plates/zinc', 'minecraft:iron_chestplate', 'extendedflywheels:ironflywheel', 'create_sa:heat_engine'])
    Exoskeleton('create_sa:brass_exoskeleton_chestplate', ['#forge:plates/brass', '#forge:storage_blocks/brass', 'create_sa:brass_chestplate', 'extendedflywheels:flywheel', 'create_sa:steam_engine'])
    Exoskeleton('create_sa:copper_exoskeleton_chestplate', ['#forge:plates/copper', '#forge:storage_blocks/copper', 'create_sa:copper_chestplate', 'extendedflywheels:steelflywheel', 'create_sa:hydraulic_engine'])
    Exoskeleton('create_sa:andesite_exoskeleton_chestplate', ['#forge:plates/zinc', '#forge:storage_blocks/iron', 'create_sa:zinc_chestplate', 'extendedflywheels:ironflywheel', 'create_sa:heat_engine'])
    
