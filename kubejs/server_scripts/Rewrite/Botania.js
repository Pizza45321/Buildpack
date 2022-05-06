onEvent('recipes', event => {
	event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "immersiveengineering:ingot_steel"
    },
    {
      "item": "immersiveengineering:ingot_steel"
    },
    {
      "item": "immersiveengineering:ingot_steel"
    },
    {
      "item": "immersiveengineering:ingot_steel"
    }
  ],
  "output": [
    {
      "item": "botania:elementium_ingot"
    }
  ]
})
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "bloodmagic:blankslate"
    },
    {
      "item": "bloodmagic:blankslate"
    },
    {
      "item": "bloodmagic:blankslate"
    },
    {
      "item": "bloodmagic:blankslate"
    }
  ],
  "output": [
    {
      "item": "botania:dragonstone"
    }
  ]
})
event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": "astralsorcery:nocturnal_powder"
    },
    {
      "item": "astralsorcery:nocturnal_powder"
    },
    {
      "item": "astralsorcery:nocturnal_powder"
    },
    {
      "item": "astralsorcery:nocturnal_powder"
    }
  ],
  "output": [
    {
      "item": "botania:pixie_dust"
    }
  ]
})
event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "minecraft:polished_andesite"
  },
  "output": {
    "name": "botania:livingrock"
  }
})
event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "astralsorcery:infused_wood"
  },
  "output": {
    "name": "botania:livingwood"
  }
})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": 'cagedmobs:star_infused_netherite_ingot',
    "count": 1
  },
  "mana": 2000,
  "ingredients": [
    {
      "item": 'minecraft:netherite_ingot'
    },
    {
      "item": 'minecraft:nether_star'
    },
    {
      "item": 'minecraft:nether_star'
    },
    {
      "item": 'minecraft:nether_star'
    },
    {
      "item": 'minecraft:nether_star'
    }
  ]
})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": 'immersiveengineering:blueprint',
    "nbt": {
      "blueprint": "molds"
  },
    "count": 1
  },
  "mana": 2000,
  "ingredients": [
    {
      "item": 'thermal:copper_plate'
    },
    {
      "item": 'create:brass_sheet'
    },
    {
      "item": 'thermal:iron_plate'
    },
    {
      "item": 'astralsorcery:parchment'
    },
    {
      "item": 'createaddition:zinc_sheet'
    }
  ]
})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": 'immersiveengineering:blueprint',
    "nbt": {
      "blueprint": "components"
  },
    "count": 1
  },
  "mana": 2000,
  "ingredients": [
    {
      "item": 'industrialforegoing:plastic'
    },
    {
      "item": 'immersiveengineering:component_iron'
    },
    {
      "item": 'immersiveengineering:component_steel'
    },
    {
      "item": 'astralsorcery:parchment'
    }
  ]
})
})