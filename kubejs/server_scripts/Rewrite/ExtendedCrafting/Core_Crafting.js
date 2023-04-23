onEvent('recipes', event => {
  function CombinationCraft4in([center, input1, input2, input3, input4], outputItem, outputNum, energy) {
    event.remove({output: outputItem})
    event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": energy,
  "input": {
    "item": center
  },
  "ingredients": [
    {
      "item": input1
    },
    {
      "item": input2
    },
    {
      "item": input3
    },
    {
      "item": input4
    }
  ],
  "result": {
    "item": outputItem,
    "count": outputNum
  }
})}
    function CombinationCraft6in([center, input1, input2, input3, input4, input5, input6], outputItem, outputNum, energy) {
    event.remove({output: outputItem})
    event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": energy,
  "input": {
    "item": center
  },
  "ingredients": [
    {
      "item": input1
    },
    {
      "item": input2
    },
    {
      "item": input3
    },
    {
      "item": input4
    },
    {
      "item": input5
    },
    {
      "item": input6
    }
  ],
  "result": {
    "item": outputItem,
    "count": outputNum
  }
})}
  function CombinationCraft8in([center, input1,input2,input3,input4,input5,input6,input7,input8], outputItem, outputNum, energy) {
  event.remove({output: outputItem})
    event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": energy,
  "input": {
    "item": center
  },
  "ingredients": [
    {
      "item": input1
    },
    {
      "item": input2
    },
    {
      "item": input3
    },
    {
      "item": input4
    },
    {
      "item": input5
    },
    {
      "item": input6
    },
    {
      "item": input7
    },
    {
      "item": input8
    }
  ],
  "result": {
    "item": outputItem,
    "count": outputNum
  }
})}
  function CombinationCraft12in([center, input1, input2, input3, input4, input5, input6, input7, input8, input9, input10, input11, input12], outputItem, outputNum, energy) {
  event.remove({output: outputItem}) 
    event.custom({
  "type": "extendedcrafting:combination",
  "powerCost": energy,
  "input": {
    "item": center
  },
  "ingredients": [
    {
      "item": input1
    },
    {
      "item": input2
    },
    {
      "item": input3
    },
    {
      "item": input4
    },
    {
      "item": input5
    },
    {
      "item": input6
    },
    {
      "item": input7
    },
    {
      "item": input8
    },
    {
      "item": input9
    },
    {
      "item": input10
    },
    {
      "item": input11
    },
    {
      "item": input12
    }
  ],
  "result": {
    "item": outputItem,
    "count": outputNum
  }
})}
CombinationCraft4in(["industrialforegoing:machine_frame_pity", "minecraft:hopper", "minecraft:ender_pearl", "minecraft:dropper","extendedcrafting:redstone_ingot"], 'industrialforegoing:world_transporter_type', 2, 15000)
CombinationCraft4in(["industrialforegoing:machine_frame_pity", "minecraft:lapis_lazuli", "minecraft:ender_pearl", "minecraft:piston","extendedcrafting:redstone_ingot"], 'industrialforegoing:fluid_transporter_type', 2, 15000)
CombinationCraft4in(["industrialforegoing:machine_frame_pity", "minecraft:chest", "minecraft:ender_pearl", "minecraft:piston","extendedcrafting:redstone_ingot"], 'industrialforegoing:item_transporter_type', 2, 15000)
CombinationCraft4in(['extendedcrafting:ultimate_singularity', 'botania:creative_pool','create:creative_motor', 'rebornstorage:larger_item_disk_part', 'rebornstorage:larger_fluid_disk_part'], 'storagedrawers:creative_vending_upgrade', 1, 150000000)
CombinationCraft4in(["extendedcrafting:ender_component", "refinedstorage:creative_wireless_grid", "refinedstorage:creative_wireless_crafting_monitor", "refinedstorage:creative_wireless_fluid_grid","kubejs:withering_processor"], 'rebornstorage:creative_super_wireless_crafting_grid', 1, 1500000)
CombinationCraft4in(["extendedcrafting:ender_component", "refinedstorage:wireless_grid", "refinedstorage:wireless_crafting_monitor", "refinedstorage:wireless_fluid_grid","rebornstorage:super_advanced_processor"], 'rebornstorage:super_wireless_crafting_grid', 1, 500000)
CombinationCraft6in(['minecraft:wheat_seeds', 'mysticalagriculture:mystical_fertilizer', 'industrialforegoing:fertilizer', 'thermal:phytogro', 'create:tree_fertilizer', 'immersiveengineering:fertilizer', 'botania:fertilizer'], 'botania:overgrowth_seed', 1, 150000)
CombinationCraft8in(["create:polished_rose_quartz","minecraft:glowstone_dust","minecraft:glowstone_dust","minecraft:glowstone_dust","minecraft:glowstone_dust","mekanism:dust_obsidian","mekanism:dust_obsidian","mekanism:dust_obsidian","mekanism:dust_obsidian"], "create:chromatic_compound", 4, 150000)
CombinationCraft8in(["industrialforegoing:machine_frame_simple","immersiveengineering:plate_steel","immersiveengineering:plate_steel","extendedcrafting:black_iron_slate","extendedcrafting:black_iron_slate","thermal:netherite_plate","thermal:netherite_plate","thermal:lumium_plate","thermal:signalum_plate"],'mekanism:steel_casing', 1, 125000)
CombinationCraft8in(["botania:glimmering_livingwood",'botania:terrasteel_nugget','botania:terrasteel_nugget','extendedcrafting:luminessence','extendedcrafting:luminessence','mysticalagriculture:prudentium_essence','mysticalagriculture:prudentium_essence', 'bloodmagic:simplecatalyst','bloodmagic:simplecatalyst'],'botania:alfheim_portal', 1, 100000)
CombinationCraft8in(["extendedcrafting:basic_catalyst","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall", "compactmachines:wall","compactmachines:wall"],'compactmachines:machine_normal', 1, 100000)
CombinationCraft8in(['extendedcrafting:advanced_catalyst',"compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall", "compactmachines:wall","compactmachines:wall"],'compactmachines:machine_large', 1, 100000)
CombinationCraft8in(["extendedcrafting:elite_catalyst","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall", "compactmachines:wall","compactmachines:wall"],'compactmachines:machine_giant', 1, 100000)
CombinationCraft8in(["extendedcrafting:ultimate_catalyst","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall","compactmachines:wall", "compactmachines:wall","compactmachines:wall"],'compactmachines:machine_maximum', 1, 100000)
CombinationCraft8in(["industrialforegoing:machine_frame_simple", "industrialforegoing:plastic","industrialforegoing:plastic", "mekanism:hdpe_sheet","mekanism:hdpe_sheet",'thermal:redstone_servo','thermal:rf_coil', 'thermal:gold_gear', 'extendedcrafting:redstone_ingot'], 'industrialforegoing:laser_drill', 1, 250000)
CombinationCraft12in(["industrialforegoing:machine_frame_advanced", "industrialforegoing:plastic","industrialforegoing:plastic", "industrialforegoing:plastic", "industrialforegoing:plastic", "mekanism:hdpe_sheet", "mekanism:hdpe_sheet", "mekanism:hdpe_sheet", "mekanism:hdpe_sheet", 'minecraft:diamond_pickaxe', 'minecraft:diamond_pickaxe', 'thermal:diamond_gear', 'extendedcrafting:redstone_ingot'],'industrialforegoing:ore_laser_base', 1, 300000)
CombinationCraft12in(["industrialforegoing:machine_frame_advanced", "industrialforegoing:plastic","industrialforegoing:plastic", "industrialforegoing:plastic", "industrialforegoing:plastic", "mekanism:hdpe_sheet", "mekanism:hdpe_sheet", "mekanism:hdpe_sheet", "mekanism:hdpe_sheet", 'minecraft:bucket', 'minecraft:bucket', 'thermal:diamond_gear', 'extendedcrafting:redstone_ingot'], 'industrialforegoing:fluid_laser_base', 1, 300000)
CombinationCraft8in(['mekanism:advanced_control_circuit', 'industrialforegoing:pity_black_hole_unit', 'industrialforegoing:simple_black_hole_unit', 'industrialforegoing:advanced_black_hole_unit', 'industrialforegoing:supreme_black_hole_unit', 'industrialforegoing:pity_black_hole_tank', 'industrialforegoing:simple_black_hole_tank', 'industrialforegoing:advanced_black_hole_tank', 'industrialforegoing:supreme_black_hole_tank'], 'industrialforegoing:black_hole_controller', 1, 500000)
CombinationCraft8in(['industrialforegoing:item_transporter_type', 'thermal:lead_plate', 'thermal:lead_plate', 'thermal:lead_plate', 'thermal:lead_plate', 'thermal:lead_plate', 'mekanism:ultimate_control_circuit', 'mekanism:pellet_polonium', 'mekanism:pellet_polonium', 'mekanism:teleportation_core'], 'mekanism:qio_importer', 1, 500000)
})