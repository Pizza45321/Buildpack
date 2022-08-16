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
    'rebornstorage:small_item_disk',
    'rebornstorage:medium_item_disk',
    'rebornstorage:large_item_disk',
    'rebornstorage:larger_item_disk',
    'rebornstorage:small_fluid_disk',
    'rebornstorage:medium_fluid_disk',
    'rebornstorage:large_fluid_disk',
    'rebornstorage:larger_fluid_disk',
    'rebornstorage:small_item_disk_part',
    'rebornstorage:medium_item_disk_part',
    'rebornstorage:large_item_disk_part',
    'rebornstorage:larger_item_disk_part',
    'rebornstorage:small_fluid_disk_part',
    'rebornstorage:medium_fluid_disk_part',
    'rebornstorage:large_fluid_disk_part',
    'rebornstorage:larger_fluid_disk_part',
    'extrastorage:storagepart_256k',
    'extrastorage:storagepart_1024k',
    'extrastorage:storagepart_4096k', 
    'extrastorage:storagepart_16384k',
    'extrastorage:storagepart_16384k_fluid',
    'extrastorage:storagepart_65536k_fluid',
    'extrastorage:storagepart_262144k_fluid',
    'extrastorage:storagepart_1048576k_fluid',
    'mininggadgets:mininggadget_simple',
    'mininggadgets:mininggadget_fancy'
]
onEvent('jei.hide.items', event => {
	itemsToRemove.forEach(item => { 
		event.hide(item)
	})
})