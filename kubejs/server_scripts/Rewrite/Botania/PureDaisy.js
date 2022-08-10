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
    "block": "malum:runewood"
  },
  "output": {
    "name": "botania:livingwood"
  }
})
})