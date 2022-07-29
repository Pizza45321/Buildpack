onEvent('recipes', event => {
	event.shapeless('create:rose_quartz', ["minecraft:quartz","#forge:dusts/redstone","#forge:dusts/redstone","#forge:dusts/redstone","#forge:dusts/redstone"])
	event.shapeless('1x thermal:press_gear_die', ['immersiveengineering:mold_gear'])
	event.shapeless('1x immersiveengineering:mold_gear', ['thermal:press_gear_die'])
	event.shapeless('extendedcrafting:basic_table', ['minecraft:crafting_table', 'iron_block'])
})