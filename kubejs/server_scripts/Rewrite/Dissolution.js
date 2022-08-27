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
      "item": "mekanism:hdpe_rod"
    },
    {
      "item": "mekanism:hdpe_rod"   
    },
    {
      "tag": "forge:ingots/steel"
    },
    {
      "tag": "forge:gears/gold"
    },
    {
      "tag": "forge:ingots/steel"
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
    "item": "bpa:le_assembler",
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
    "item": "bpa:he_assembler",
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
    {
      "item": processor
    },
    {
      "item": "refinedstorage:processor_binding"
    },
    {
      "item": processor
    },
    {
      "tag": partTag
    },
    {
      "tag": partTag
    },
    {
      "item":processor
    },
    {
      "tag": partTag
    },
    {
      "item": processor
    }
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
      "item": 'mekanism:hdpe_sheet'
    },
    {
      "tag": 'industrialforegoing:machine_frame/simple'
    },
    {
      "item": 'mekanism:hdpe_sheet'
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
    SimpleMachines('industrialforegoing:plant_sower', 'minecraft:flower_pot', 'minecraft:iron_hoe', 300)
    SimpleMachines('industrialforegoing:plant_gatherer', 'minecraft:iron_axe', 'minecraft:iron_hoe', 300)
    SimpleMachines('industrialforegoing:plant_fertilizer', 'industrialforegoing:fertilizer', 'minecraft:farmland', 300)
    SimpleMachines('industrialforegoing:mob_slaughter_factory', 'minecraft:iron_sword', 'minecraft:iron_axe', 300)
    SimpleMachines('industrialforegoing:hydroponic_bed', 'minecraft:iron_hoe', 'farmersdelight:rich_soil_farmland', 300)
    SimpleMachines('industrialforegoing:spores_recreator', 'minecraft:brown_mushroom', 'minecraft:red_mushroom', 300)
    RSParts('extradisks:1024k_storage_part', 'refinedstorage:advanced_processor', 'refinedstorage:parts/items/256k', 120)
    RSParts('extradisks:4096k_storage_part', 'refinedstorage:advanced_processor', 'refinedstorage:parts/items/1024k', 120)
    RSParts('extradisks:16384k_storage_part', 'rebornstorage:super_advanced_processor', 'refinedstorage:parts/items/4096k', 240)
    RSParts('extradisks:65536k_storage_part', 'rebornstorage:super_advanced_processor', 'refinedstorage:parts/items/16384k', 240)
    RSParts('extradisks:262144k_storage_part', 'extrastorage:neural_processor', 'refinedstorage:parts/items/65536k', 360)
    RSParts('extradisks:1048576k_storage_part', 'extrastorage:neural_processor', 'refinedstorage:parts/items/262144k', 360)
    RSParts('extradisks:infinite_storage_part', 'extradisks:withering_processor', 'refinedstorage:parts/items/1048576k', 1200)
    RSParts('extradisks:16384k_fluid_storage_part','refinedstorage:advanced_processor', 'refinedstorage:parts/fluids/4096k', 120)
    RSParts('extradisks:65536k_fluid_storage_part','rebornstorage:super_advanced_processor', 'refinedstorage:parts/fluids/16384k', 240)
    RSParts('extradisks:262144k_fluid_storage_part','rebornstorage:super_advanced_processor', 'refinedstorage:parts/fluids/65536k', 240)
    RSParts('extradisks:1048576k_fluid_storage_part','extrastorage:neural_processor', 'refinedstorage:parts/fluids/262144k', 360)
    RSParts('extradisks:infinite_fluid_storage_part','extradisks:withering_processor', 'refinedstorage:parts/fluids/1048576k', 1200)
})