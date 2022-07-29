onEvent('recipes', event => {
	event.custom({
  "type": "tconstruct:melting_fuel",
  "fluid": {
    "name": "thermal:glowstone",
    "amount": 50
  },
  "duration": 1000,
  "temperature": 2500
})
	event.custom({
  "type": "tconstruct:melting_fuel",
  "fluid": {
    "name": "bloodmagic:life_essence_fluid",
    "amount": 50
  },
  "duration": 750,
  "temperature": 2300
})
})

