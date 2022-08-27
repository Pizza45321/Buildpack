onEvent('recipes', event =>{
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "tconstruct:sky_slime_crystal_block"
    }
  ],
  "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
  },
  "result": [
    {
      "item": "tconstruct:sky_slime_crystal",
      'count': 4
    }
  ]
})
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "tconstruct:ichor_slime_crystal_block"
    }
  ],
  "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
  },
  "result": [
    {
      "item": "tconstruct:ichor_slime_crystal",
      'count': 4
    }
  ]
})
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "tconstruct:ender_slime_crystal_block"
    }
  ],
  "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
  },
  "result": [
    {
      "item": "tconstruct:ender_slime_crystal",
      'count': 4
    }
  ]
})
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "tconstruct:earth_slime_crystal_block"
    }
  ],
  "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
  },
  "result": [
    {
      "item": "tconstruct:earth_slime_crystal",
      'count': 4
    }
  ]
})
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "brewinandchewin:pizza"
    }
  ],
  "tool": {
    "tag": "forge:tools/knives"
  },
  "result": [
    {
      "item": "brewinandchewin:pizza_slice",
      'count': 12
    }
  ]
})
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "tag": "forge:crops/eggplant"
    }
  ],
  "tool": {
    "tag": "forge:tools/knives"
  },
  "result": [
    {
      "item": "culturaldelights:cut_eggplant",
      'count': 2
    }
  ]
})
})