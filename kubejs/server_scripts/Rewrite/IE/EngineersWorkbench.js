onEvent('recipes', event => {
event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "item": "create:electron_tube",
    },
    {
      "tag": "forge:wires/electrum"
    },
    {
      "item": "immersiveengineering:circuit_board"
    }
  ],
  "category": "components",
  "result": {
    "item": "immersiveengineering:component_electronic"
  }
})
event.custom({
  "type": "immersiveengineering:blueprint",
  "inputs": [
    {
      "count": 2,
      "base_ingredient": {
        "item": "create:electron_tube"
      }
    },
    {
      "count": 3,
      "base_ingredient": {
        "tag": "forge:wires/aluminum"
      }
    },
    {
      "item": "immersiveengineering:circuit_board"
    }
  ],
  "category": "components",
  "result": {
    "item": "immersiveengineering:component_electronic_adv"
  }
})
})