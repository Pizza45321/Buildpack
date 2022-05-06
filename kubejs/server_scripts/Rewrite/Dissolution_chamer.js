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
      "item": "minecraft:nether_brick"
    },
    {
      "item": "minecraft:nether_brick"
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
  "processingTime": 300,
  "output": {
    "item": "industrialforegoing:machine_frame_simple",
    "count": 1
  },
  "type": "industrialforegoing:dissolution_chamber"
})
})