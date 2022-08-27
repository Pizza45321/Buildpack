onEvent('recipes', event => {
event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "tag": "forge:cooked_beef"
    },
    {
      "tag": "forge:pasta"
    },
    {
      "item": "farmersdelight:tomato_sauce"
    }
  ],
  "result": {
    "item": "farmersdelight:pasta_with_meatballs"
  },
  "experience": 0.35,
  "cookingtime": 200
})
event.custom({
  "type": "farmersdelight:cooking",
  "ingredients": [
    {
      "tag": "forge:dough_wheat"
    },
    {
      "tag": "forge:crops/cabbage"
    },
    {
      "tag": "forge:crops/onion"
    },
    [
      {
        "tag": "forge:raw_chicken"
      },
      {
        "tag": "forge:raw_pork"
      },
      {
        "tag": "forge:raw_beef"
      },
      {
        "item": "minecraft:brown_mushroom"
      },
      {
        "item": "minecraft:red_mushroom"
      }
    ]
  ],
  "result": {
    "item": "farmersdelight:dumplings",
    "count": 2
  },
  "experience": 0.35,
  "cookingtime": 200
})
})