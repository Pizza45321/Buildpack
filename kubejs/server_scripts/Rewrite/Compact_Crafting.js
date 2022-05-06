onEvent('recipes', event => {
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 5,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["-", "-", "-", "-", "-"],
        ["-", "-", "r", "-", "-"],
        ["-", "-", "r", "-", "-"],
        ["-", "-", "r", "-", "-"],
        ["-", "-", "-", "-", "-"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["S", "R", "o", "R", "r"],
        ["-", "o", "l", "o", "-"],
        ["-", "o", "l", "o", "-"],
        ["-", "o", "l", "o", "-"],
        ["S", "R", "o", "R", "r"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["-", "R", "h", "R", "-"],
        ["S", "l", "s", "l", "r"],
        ["S", "l", "e", "l", "r"],
        ["S", "l", "s", "l", "r"],
        ["-", "R", "q", "R", "-"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["S", "R", "o", "R", "r"],
        ["-", "o", "l", "o", "-"],
        ["-", "o", "l", "o", "-"],
        ["-", "o", "l", "o", "-"],
        ["S", "R", "o", "R", "r"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["-", "-", "-", "-", "-"],
        ["-", "-", "S", "-", "-"],
        ["-", "-", "S", "-", "-"],
        ["-", "-", "S", "-", "-"],
        ["-", "-", "-", "-", "-"]
      ]
    }
  ],

  "catalyst": {
    "id": 'extendedcrafting:ultimate_singularity',
    "Count": 1
  },

  "components": {
    "s": {
      "type": "compactcrafting:block",
      "block": 'create:shaft'
    },
    "S": {
      "type": "compactcrafting:block",
      "block": 'create:shadow_steel_casing'
    },
    "r": {
      "type": "compactcrafting:block",
      "block": 'create:refined_radiance_casing'
    },
    "R": {
      "type": "compactcrafting:block",
      "block": 'bloodmagic:speedrune'
    },
    "e": {
      "type": "compactcrafting:block",
      "block": 'botania:elementium_block'
    },
    "o": {
      "type": "compactcrafting:block",
      "block": 'createaddition:overcharged_casing'
    },
    "q": {
      "type": "compactcrafting:block",
      "block": 'mekanism:quantum_entangloporter'
    },
    "l": {
      "type": "compactcrafting:block",
      "block": 'immersiveengineering:light_engineering'
    },

    "h": {
      "type": "compactcrafting:block",
      "block": 'immersiveengineering:heavy_engineering'
    }
  },
  "outputs": [
    {
      "id": 'create:creative_motor',
      "Count": 1
    }
  ]
})
  event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 7,
  "layers": [
    {
      "type": "compactcrafting:filled",
      'component': 'b'
    },
    {
      "type": "compactcrafting:hollow",
      'wall': "b"
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", 'b', "b", "b", "b",'b','b'],
        ["b", "-", "-", "-", "-",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "-", "-", "-",'-','b'],
        ["b", "b", "b", "b", "b",'b','b']
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", 'b', "b", "b", "b",'b','b'],
        ["b", "-", "-", "-", "-",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "-", "-", "-",'-','b'],
        ["b", "b", "b", "b", "b",'b','b']
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", 'b', "b", "b", "b",'b','b'],
        ["b", "-", "-", "-", "-",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "b", "b", "b",'-','b'],
        ["b", "-", "-", "-", "-",'-','b'],
        ["b", "b", "b", "b", "b",'b','b']
      ]
    },
    {
      "type": "compactcrafting:hollow",
      'wall': "b"
    },
    {
      "type": "compactcrafting:filled",
      'component': "b"
    }
  ],
  "catalyst": {
    "id": 'extendedcrafting:ultimate_singularity',
    "Count": 1
  },
  "components": {
    "b": {
      "type": "compactcrafting:block",
      "block":'metalbarrels:obsidian_barrel'
    }
   },
  "outputs": [{
      "id": 'storagedrawers:creative_storage_upgrade',
      "Count": 1
    }]
  })
  event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 4,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["B", "s", "s", "B"],
        ["s", "b", "b", "s"],
        ["s", "b", "b", "s"],
        ["B", "s", "s", "B"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["s", "b", "b", "s"],
        ["b", "p", "p", "b"],
        ["b", "p", "p", "b"],
        ["s", "g", "g", "s"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["s", "b", "b", "s"],
        ["b", "-", "-", "b"],
        ["b", "-", "-", "b"],
        ["s", "b", "b", "s"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["B", "b", "b", "B"],
        ["b", "S", "S", "b"],
        ["b", "S", "S", "b"],
        ["B", "b", "b", "B"]
      ]
    }
  ],
  "catalyst": {
    "id": 'minecraft:ender_pearl',
    "Count": 1
  },
  "components": {
    "g": {
      "type": "compactcrafting:block",
      "block": 'minecraft:glass'
    },
    "B": {
      "type": "compactcrafting:block",
      "block": 'extendedcrafting:black_iron_block'
    },
    "p": {
      "type": "compactcrafting:block",
      "block": 'create:mechanical_press'
    },
    "b": {
      "type": "compactcrafting:block",
      "block": 'minecraft:polished_blackstone_bricks'
    },
    "S": {
      "type": "compactcrafting:block",
      "block": 'create:shadow_steel_casing'
    },
    "s": {
      "type": "compactcrafting:block",
      "block": 'minecraft:basalt'
    }
      },
  "outputs": [
    {
      "id": 'extendedcrafting:compressor',
      "Count": 1
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 4,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", "B", "B", "b"],
        ["B", "g", "g", "B"],
        ["B", "g", "g", "B"],
        ["b", "B", "B", "b"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["B", "g", "g", "B"],
        ["g", "-", "-", "g"],
        ["g", "-", "-", "g"],
        ["B", "g", "g", "B"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["s", "g", "g", "s"],
        ["g", "-", "-", "g"],
        ["g", "-", "-", "g"],
        ["s", "g", "g", "s"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", "s", "s", "b"],
        ["s", "g", "g", "s"],
        ["s", "g", "g", "s"],
        ["b", "s", "s", "b"]
      ]
    }
  ],

  "catalyst": {
    "id": 'minecraft:iron_ingot',
    "Count": 1
  },

  "components": {
    "s": {
      "type": "compactcrafting:block",
      "block": 'minecraft:polished_blackstone_bricks'
    },
    "B": {
      "type": "compactcrafting:block",
      "block": 'minecraft:basalt'
    },
    "b": {
      "type": "compactcrafting:block",
      "block": 'extendedcrafting:black_iron_block'
    },
    "g": {
      "type": "compactcrafting:block",
      "block": 'minecraft:glass'
    }
  },
  "outputs": [
    {
      "id": 'extendedcrafting:frame',
      "Count": 3
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 4,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", "B", "B", "b"],
        ["B", "g", "g", "B"],
        ["B", "g", "g", "B"],
        ["b", "B", "B", "b"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["B", "g", "g", "B"],
        ["g", "-", "-", "g"],
        ["g", "-", "-", "g"],
        ["B", "g", "g", "B"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["s", "g", "g", "s"],
        ["g", "-", "-", "g"],
        ["g", "-", "-", "g"],
        ["s", "g", "g", "s"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", "s", "s", "b"],
        ["s", "g", "g", "s"],
        ["s", "g", "g", "s"],
        ["b", "s", "s", "b"]
      ]
    }
  ],

  "catalyst": {
    "id": 'create:brass_ingot',
    "Count": 1
  },

  "components": {
    "s": {
      "type": "compactcrafting:block",
      "block": 'create:zinc_block'
    },
    "B": {
      "type": "compactcrafting:block",
      "block": 'minecraft:iron_block'
    },
    "b": {
      "type": "compactcrafting:block",
      "block": 'create:brass_block'
    },
    "g": {
      "type": "compactcrafting:block",
      "block": 'minecraft:glass'
    }
  },
  "outputs": [{
      "id": 'thermal:machine_frame',
      "Count": 3
    }]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 4,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", "b", "b", "b"],
        ["b", "B", "B", "b"],
        ["b", "B", "B", "b"],
        ["b", "b", "b", "b"]
      ]
    },
    {  
      "type": "compactcrafting:mixed",
      "pattern": [
        ["B", "B", "B", "B"],
        ["B", "-", "-", "B"],
        ["B", "-", "-", "B"],
        ["B", "B", "B", "B"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["B", "B", "B", "B"],
        ["B", "-", "-", "B"],
        ["B", "-", "-", "B"],
        ["B", "B", "B", "B"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["b", "b", "b", "b"],
        ["b", "B", "B", "b"],
        ["b", "B", "B", "b"],
        ["b", "b", "b", "b"]
      ]
    }
  ],

  "catalyst": {
    "id": 'industrialforegoing:plastic',
    "Count": 1
  },
  "components": {
    "B": {
      "type": "compactcrafting:block",
      "block": 'create:andesite_casing'
    },
    "b": {
      "type": "compactcrafting:block",
      "block": 'immersiveengineering:treated_wood_horizontal'
    }
  },
  "outputs": [
    {
      "id": 'industrialforegoing:machine_frame_pity',
      "Count": 3
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["c", "i", "c"],
        ["i", "g", "i"],
        ["c", "i", "c"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["i", "g", "i"],
        ["g", "-", "g"],
        ["i", "g", "i"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["c", "i", "c"],
        ["i", "g", "i"],
        ["c", "i", "c"]
      ]
    }
  ],

  "catalyst": {
    "id": 'thermal:iron_plate',
    "Count": 1
  },
  "components": {
    "c": {
      "type": "compactcrafting:block",
      "block": 'create:copper_block'
    },
    "i": {
      "type": "compactcrafting:block",
      "block": 'minecraft:iron_block'
    },
    "g": {
      "type": "compactcrafting:block",
      "block": 'minecraft:glass'
    }
  },
  "outputs": [
    {
      "id": 'thermal:fluid_cell_frame',
      "Count": 3
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["c", "i", "c"],
        ["i", "g", "i"],
        ["c", "i", "c"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["i", "g", "i"],
        ["g", "-", "g"],
        ["i", "g", "i"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["c", "i", "c"],
        ["i", "g", "i"],
        ["c", "i", "c"]
      ]
    }
  ],

  "catalyst": {
    "id": 'thermal:electrum_gear',
    "Count": 1
  },
  "components": {
    "c": {
      "type": "compactcrafting:block",
      "block": 'mekanism:block_lead'
    },
    "i": {
      "type": "compactcrafting:block",
      "block": 'thermal:electrum_block'
    },
    "g": {
      "type": "compactcrafting:block",
      "block": 'minecraft:glass'
    }
  },
  "outputs": [
    {
      "id": 'thermal:energy_cell_frame',
      "Count": 3
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["t", "t", "t"],
        ["t", "c", "t"],
        ["t", "t", "t"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["-", "-", "-"],
        ["-", "c", "-"],
        ["-", "-", "-"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["t", "t", "t"],
        ["t", "c", "t"],
        ["t", "t", "t"]
      ]
    }
  ],

  "catalyst": {
    "id": 'thermal:iron_plate',
    "Count": 1
  },
  "components": {
    "c": {
      "type": "compactcrafting:block",
      "block": 'create:copper_block'
    },
    "t": {
      "type": "compactcrafting:block",
      "block": 'minecraft:terracotta'
    }
  },
  "outputs": [
    {
      "id": 'immersiveengineering:connector_lv',
      "Count": 3
    }
  ]
})
event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["t", "t", "t"],
        ["t", "c", "t"],
        ["t", "t", "t"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["-", "t", "-"],
        ["t", "c", "t"],
        ["-", "t", "-"]
      ]
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["t", "t", "t"],
        ["t", "c", "t"],
        ["t", "t", "t"]
      ]
    }
  ],

  "catalyst": {
    "id": 'thermal:copper_plate',
    "Count": 1
  },
  "components": {
    "c": {
      "type": "compactcrafting:block",
      "block": 'create:copper_block'
    },
    "t": {
      "type": "compactcrafting:block",
      "block": 'minecraft:terracotta'
    }
  },
  "outputs": [
    {
      "id": 'immersiveengineering:connector_lv_relay',
      "Count": 3
    }
  ]
})
})