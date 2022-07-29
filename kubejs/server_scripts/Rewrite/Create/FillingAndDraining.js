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
	event.recipes.createFilling('bigreactors:reinforced_reactorcasing', [
  	'bigreactors:basic_reactorcasing',
 	 Fluid.of('industrialforegoing:ether_gas', 250)
])
	event.recipes.createFilling('bigreactors:reinforced_turbinecasing', [
  	'bigreactors:basic_turbinecasing',
 	 Fluid.of('industrialforegoing:ether_gas', 250)
])
	event.recipes.createEmptying(['bloodmagic:corrupted_dust', Fluid.of('kubejs:lq_mana', 250)],'botania:pixie_dust')
})