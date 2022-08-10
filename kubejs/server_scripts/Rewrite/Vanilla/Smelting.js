onEvent('recipes', event => {
let multiSmelt = (output, input, includeBlasting) => {
    event.smelting(output, input)
    
    if (includeBlasting) {
      event.blasting(output, input)
    }
    if (includeSmoking) {
      event.smoking(output, input)
    }
  }
	event.smoking('thermal:eggplant', 'culturaldelights:smoked_eggplant')
})