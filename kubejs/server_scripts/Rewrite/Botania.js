onEvent('recipes', event => {
event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "create:andesite_casing"
  },
  "output": {
    "name": "botania:livingrock"
  }
})
event.custom({
  "type": "botania:pure_daisy",
  "input": {
    "type": "block",
    "block": "malum:soulwood"
  },
  "output": {
    "name": "botania:livingwood"
  }
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
      "tag": 'forge:copper/plates'
    },
    {
      "tag": 'forge:plates/brass'
    },
    {
      "tag": 'forge:iron/plates'
    },
    {
      "item": 'minecraft:paper'
    },
    {
      "tag": 'forge:plates/zinc'
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
      "tag": 'forge:plastic'
    },
    {
      "item": 'immersiveengineering:component_iron'
    },
    {
      "item": 'immersiveengineering:component_steel'
    },
    {
      "item": 'create:precision_mechanism'
    },
    {
      "item": 'minecraft:paper'
    }
  ]
})
})