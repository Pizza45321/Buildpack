onEvent('recipes', event => {
	event.recipes.createFilling('thermal:enderium_glass', [
  	'thermal:obsidian_glass',
 	 Fluid.of('tconstruct:molten_enderium', 72)
])	
	event.recipes.createFilling('thermal:signalum_glass', [
  	'thermal:obsidian_glass',
 	 Fluid.of('tconstruct:molten_signalum', 72)
])
	event.recipes.createFilling('thermal:lumium_glass', [
  	'thermal:obsidian_glass',
 	 Fluid.of('tconstruct:molten_lumium', 72)
])
})