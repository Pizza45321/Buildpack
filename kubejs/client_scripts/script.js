// priority: 0

console.info('Client RELOADING')
var itemsToRemove = [
    'extendedcrafting:basic_auto_table',
    'extendedcrafting:advanced_auto_table',
    'extendedcrafting:elite_auto_table',
    'extendedcrafting:ultimate_auto_table',
    'extendedcrafting:ender_alternator',
    'extendedcrafting:ender_crafter',
    'titanium:gold_gear',
    'titanium:diamond_gear',
    'titanium:iron_gear',
    "#tconstruct:parts",
    "#tconstruct:tconstruct:modifiable",
    'thermal:machine_chiller'
]
onEvent('jei.hide.items', event => {
	itemsToRemove.forEach(item => { 
		event.hide(item)
	})
})