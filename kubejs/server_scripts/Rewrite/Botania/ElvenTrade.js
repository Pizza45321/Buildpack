onEvent('recipes', event => {
function ElvenTrade(input, output, outputCount) {
	event.custom({
  "type": "botania:elven_trade",
  "ingredients": [
    {
      "item": input
    },
    {
      "item": input
    },
    {
      "item": input
    },
    {
      "item": input
    }
  ],
  "output": [
    {
      "item": output,
      'count': outputCount
    }
  ]
})}
ElvenTrade("mekanism:ingot_steel", "botania:elementium_ingot", 1)
ElvenTrade("bloodmagic:blankslate", "botania:dragonstone", 1)
ElvenTrade("malum:arcane_spirit", "botania:pixie_dust", 1)
})