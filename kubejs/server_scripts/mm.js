onEvent('recipes', event => {
  event.custom({
    "type": "masterfulmachinery:machine_structure",
    "id": "fc",
    "controllerId": "basic",
    "name": "Frame Assembler",
    "layout": [
    [
    " ))) ",
    ")))))",
    "))*))",
    ")))))",
    " )+) "
    ],
    [
    " ,-, ",
    ", . ,",
    "C/./,",
    ", . ,",
    " ,0, "
    ],
    [
    " ,,, ",
    ",   ,",
    ",   ,",
    ",   ,",
    " ,,, "
    ],
    [
    " 111 ",
    "1,,,1",
    "1,,,1",
    "1,,,1",
    " 111 "
    ]
    ],
    "legend": {
      "0": {
        "block": "masterfulmachinery:basic_bitem_port_items_output"
      },
      "1": {
        "block": "minecraft:blackstone_stairs"
      },
      ")": {
        "block": "immersiveengineering:steel_scaffolding_standard"
      },
      "*": {
        "block": "mekanism:steel_casing"
      },
      "+": {
        "block": "masterfulmachinery:basic_benergy_port_energy_input"
      },
      ",": {
        "block": "minecraft:glass"
      },
      "-": {
        "block": "masterfulmachinery:basic_bitem_port_items_input"
      },
      ".": {
        "block": "immersiveengineering:conveyor_basic"
      },
      "/": {
        "block": "create:mechanical_arm"
      }
    }
  })

  event.custom({
  	"type": "masterfulmachinery:machine_process",
    "structureId": "fc",
    "controllerId": "basic",
    "ticks": 120,
    "inputs": [
    {
      "type": "masterfulmachinery:energy",
      "data": {
        "amount": 50000
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'thermal:signalum_ingot',
        "count": 4
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'thermal:lumium_ingot',
        "count": 4
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'extendedcrafting:frame',
        "count": 2
      }
    }

    ],
    "outputs": [
    {
      "type": "masterfulmachinery:items",
      "data": {
        "item": 'mekanism:steel_casing',
        'count': 2
      }
    }
    ]
  })

  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "fc",
    "controllerId": "basic",
    "ticks": 120,
    "inputs": [
    {
      "type": "masterfulmachinery:energy",
      "data": {
        "amount": 12000
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'create:brass_ingot',
        "count": 6
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'create:polished_rose_quartz',
        "count": 2
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'minecraft:glass',
        "count": 6
      }
    }

    ],
    "outputs": [
    {
      "type": "masterfulmachinery:items",
      "data": {
        "item": 'thermal:machine_frame',
        'count': 3
      }
    }
    ]
  })
  event.custom({
    "type": "masterfulmachinery:machine_process",
    "structureId": "fc",
    "controllerId": "basic",
    "ticks": 120,
    "inputs": [
    {
      "type": "masterfulmachinery:energy",
      "data": {
        "amount": 15000
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'immersiveengineering:ingot_steel',
        "count": 6
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "tag": 'minecraft:logs',
        "count": 6
      }
    },
    {
      "type": "masterfulmachinery:items",
      "consumeInstantly": true,
      "data": {
        "item": 'thermal:obsidian_glass',
        "count": 2
      }
    }

    ],
    "outputs": [
    {
      "type": "masterfulmachinery:items",
      "data": {
        "item": 'industrialforegoing:machine_frame_pity',
        'count': 3
      }
    }
    ]
  })
})