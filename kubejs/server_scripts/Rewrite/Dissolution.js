onEvent('recipes', event => {
	event.custom({
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "tag": "industrialforegoing:machine_frame/pity"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "immersiveengineering:plate_duroplast"
    },
    {
      "item": "immersiveengineering:plate_duroplast"
    },
    {
      "tag": "forge:ingots/hop_graphite"
    },
    {
      "tag": "forge:gears/gold"
    },
    {
      "tag": "forge:ingots/hop_graphite"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
  "processingTime": 250,
  "output": {
    "item": "industrialforegoing:machine_frame_simple",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
  event.custom({
  "input": [
    {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    {
      "tag": "industrialforegoing:machine_frame/pity"
    },
    {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    {
      "item": "refinedstorage:basic_processor"
    },
    {
      "item": "refinedstorage:basic_processor"
    },
    {
      "item": "refinedstorage:quartz_enriched_iron"
    },
    {
      "item": "create:cogwheel"
    },
    {
      "item": "refinedstorage:quartz_enriched_iron"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
  "processingTime": 450,
  "output": {
    "item": "refinedstorage:machine_casing",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
  event.custom({
  "input": [
    {
      "tag": "forge:ingots/cobalt"
    },
    {
      "item": "refinedstorage:machine_casing"
    },
    {
      "tag": "forge:ingots/cobalt"
    },
    {
      "tag": "forge:wires/lead"
    },
    {
      "tag": "forge:wires/lead"
    },
    {
      "tag": "forge:ingots/cobalt"
    },
    {
      "item": "rebornstorage:super_advanced_processor"
    },
    {
      "tag": "forge:ingots/cobalt"
    }
  ],
  "inputFluid": "{FluidName:\"tconstruct:molten_brass\",Amount:180}",
  "processingTime": 250,
  "output": {
    "item": "extradisks:advanced_machine_casing",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
  event.custom({
  "input": [
    {
      "item": "extendedcrafting:black_iron_slate"
    },
    {
      "item": "thermal:upgrade_augment_3"
    },
    {
      "item": "extendedcrafting:black_iron_slate"
    },
    {
      "tag": "forge:wires/lead"
    },
    {
      "tag": "forge:wires/lead"
    },
    {
      "item": "tconstruct:obsidian_pane"
    },
    {
      "tag": "forge:glass_panes"
    },
    {
      "item": "tconstruct:obsidian_pane"
    }
  ],
  "inputFluid": "{FluidName:\"tconstruct:molten_ender\",Amount:180}",
  "processingTime": 250,
  "output": {
    "item": "hostilenetworks:deep_learner",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
  event.custom({
  "input": [
    {
      "tag": "forge:plates/iron"
    },
    {
      "item": "thermal:upgrade_augment_1"
    },
    {
      "tag": "forge:plates/iron"
    },
    {
      "tag": "forge:wires/copper"
    },
    {
      "tag": "forge:wires/copper"
    },
    {
      "tag": "forge:plates/iron"
    },
    {
      "item": "immersiveengineering:component_electronic"
    },
    {
      "tag": "forge:plates/iron"
    }
  ],
  "inputFluid": "{FluidName:\"tconstruct:molten_brass\",Amount:180}",
  "processingTime": 300,
  "output": {
    "item": "bpa:le_assembling_machine",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
  event.custom({
  "input": [
    {
      "tag": "forge:plates/steel"
    },
    {
      "item": "thermal:upgrade_augment_3"
    },
    {
      "tag": "forge:plates/steel"
    },
    {
      "tag": "forge:wires/electrum"
    },
    {
      "tag": "forge:wires/electrum"
    },
    {
      "tag": "forge:plates/steel"
    },
    {
      "item": "immersiveengineering:component_electronic_adv"
    },
    {
      "tag": "forge:plates/steel"
    }
  ],
  "inputFluid": "{FluidName:\"tconstruct:molten_lumium\",Amount:180}",
  "processingTime": 600,
  "output": {
    "item": "bpa:he_assembling_machine",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
  event.custom({
  "input": [
    {
      "tag": "forge:ingots/refined_obsidian"
    },
    {
      "item": "fluxnetworks:flux_dust"
    },
    {
      "tag": "forge:ingots/refined_obsidian"
    },
    {
      "tag": "minecraft:stone_bricks"
    },
    {
      "tag": 'minecraft:stone_bricks'
    },
    {
      "tag": "forge:ingots/refined_obsidian"
    },
    {
      "item": "create:brass_casing"
    },
    {
      "tag": "forge:ingots/refined_obsidian"
    }
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:250}",
  "processingTime": 600,
  "output": {
    "item": "compactmachines:wall",
    "count": 8
  },
  "type": "industrialforegoing:dissolution_chamber"
})
function RSParts(output, processor, partTag, processingTime) {
    event.custom({
  "input": [
    Item.of(processor).toJson(), 
    Item.of("refinedstorage:processor_binding").toJson(),
    Item.of(processor).toJson(),
    Item.of(partTag).toJson(), 
    Item.of(partTag).toJson(),
    Item.of(processor).toJson(), 
    Item.of(partTag).toJson(),
    Item.of(processor).toJson()
  ],
  "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:100}",
  "processingTime": processingTime,
  "output": {
    "item": output,
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})}
    function SimpleMachines(output, a, b, processingTime) {
    event.custom({
  "input": [
    {
      "tag": 'forge:plastic'
    },
    {
      "item": "immersiveengineering:component_electronic"
    },
    {
      "tag": 'forge:plastic'
    },
    {
      "item": a
    },
    {
      "item": b
    },
    {
      "item": 'immersiveengineering:plate_duroplast'
    },
    {
      "tag": 'industrialforegoing:machine_frame/simple'
    },
    {
      "item": 'immersiveengineering:plate_duroplast'
    }
  ],
  "inputFluid": "{FluidName:\"tconstruct:molten_cobalt\",Amount:180}",
  "processingTime": processingTime,
  "output": {
    "item": output,
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})}
    event.custom({
  "input": [
    {
      "tag": 'forge:plates/steel'
    },
    {
      "tag": "forge:ingots/redstone"
    },
    {
      "tag": 'forge:plates/steel'
    },
    {
      "tag": 'forge:gears/electrum'
    },
    {
      "tag": 'forge:gears/electrum'
    },
    {
      "tag":'forge:plates/steel'
    },
    {
      "tag": 'thermal:glass/hardened'
    },
    {
      "tag": 'forge:plates/steel'
    }
  ],
  "inputFluid": "{FluidName:\"thermal:redstone\",Amount:1000}",
  "processingTime": 300,
  "output": {
    "item": 'thermal:upgrade_augment_1',
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
    event.custom({
  "input": [
    {
      "tag": 'forge:plates/signalum'
    },
    {
      "tag": "forge:ingots/pink_slime"
    },
    {
      "tag": 'forge:plates/signalum'
    },
    {
      "tag": 'forge:gears/lumium'
    },
    {
      "tag": 'forge:gears/lumium'
    },
    {
      "tag":'forge:plates/signalum'
    },
    {
      "tag": 'thermal:glass/hardened'
    },
    {
      "tag": 'forge:plates/signalum'
    }
  ],
  "inputFluid": "{FluidName:\"thermal:glowstone\",Amount:1000}",
  "processingTime": 300,
  "output": {
    "item": 'thermal:upgrade_augment_2',
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
    event.custom({
  "input": [
    {
      "tag": 'forge:plates/netherite'
    },
    {
      "tag": "forge:ingots/refined_obsidian"
    },
    {
      "tag": 'forge:plates/netherite'
    },
    {
      "tag": 'forge:gears/enderium'
    },
    {
      "tag": 'forge:gears/enderium'
    },
    {
      "tag":'forge:plates/netherite'
    },
    {
      "tag": 'thermal:glass/hardened'
    },
    {
      "tag": 'forge:plates/netherite'
    }
  ],
  "inputFluid": "{FluidName:\"thermal:ender\",Amount:1000}",
  "processingTime": 300,
  "output": {
    "item": 'thermal:upgrade_augment_3',
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
    event.custom({
  "input": [
    {
      "tag": 'forge:plates/shellite'
    },
    {
      "tag": "forge:ingots/twinite"
    },
    {
      "tag": 'forge:plates/shellite'
    },
    {
      "tag": 'forge:gears/dragonsteel'
    },
    {
      "tag": 'forge:gears/dragonsteel'
    },
    {
      "tag":'forge:plates/shellite'
    },
    {
      "tag": 'thermal:glass/hardened'
    },
    {
      "tag": 'forge:plates/shellite'
    }
  ],
  "inputFluid": "{FluidName:\"tconstruct:molten_amethyst\",Amount:500}",
  "processingTime": 300,
  "output": {
    "item": 'thermal_extra:upgrade_augment',
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
    SimpleMachines('industrialforegoing:plant_sower', 'minecraft:flower_pot', 'minecraft:iron_hoe', 300)
    SimpleMachines('industrialforegoing:plant_gatherer', 'minecraft:iron_axe', 'minecraft:iron_hoe', 300)
    SimpleMachines('industrialforegoing:plant_fertilizer', 'industrialforegoing:fertilizer', 'minecraft:farmland', 300)
    SimpleMachines('industrialforegoing:mob_slaughter_factory', 'minecraft:iron_sword', 'minecraft:iron_axe', 300)
    SimpleMachines('industrialforegoing:hydroponic_bed', 'minecraft:iron_hoe', 'farmersdelight:rich_soil_farmland', 300)
    SimpleMachines('industrialforegoing:spores_recreator', 'minecraft:brown_mushroom', 'minecraft:red_mushroom', 300)
    RSParts('rebornstorage:small_item_disk_part', 'refinedstorage:advanced_processor', '#refinedstorage:parts/items/64k', 120)
    RSParts('rebornstorage:medium_item_disk_part', 'rebornstorage:super_advanced_processor', '#refinedstorage:parts/items/256k', 240)
    RSParts('rebornstorage:large_item_disk_part', 'kubejs:withering_processor', '#refinedstorage:parts/items/1024k', 360)
    RSParts('rebornstorage:larger_item_disk_part', 'kubejs:neural_processor', '#refinedstorage:parts/items/4096k', 480)
    RSParts('rebornstorage:small_fluid_disk_part','refinedstorage:advanced_processor', '#refinedstorage:parts/fluids/4096k', 120)
    RSParts('rebornstorage:medium_fluid_disk_part','rebornstorage:super_advanced_processor', '#refinedstorage:parts/fluids/16384k', 240)
    RSParts('rebornstorage:large_fluid_disk_part','kubejs:withering_processor', '#refinedstorage:parts/fluids/65536k', 360)
    RSParts('rebornstorage:larger_fluid_disk_part','kubejs:neural_processor', '#refinedstorage:parts/fluids/262144k', 480)
})