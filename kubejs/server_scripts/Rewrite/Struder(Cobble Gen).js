onEvent('recipes', event => {
	event.custom({
		'type': 'thermal:rock_gen',
		'adjacent': 'minecraft:water',
		'below': 'minecraft:blackstone',
		'result': {
			"item": "minecraft:blackstone"
		}
	})
	event.custom({
		'type': 'thermal:rock_gen',
		'adjacent': 'minecraft:lava',
		'below': 'minecraft:ice',
		'result': {
			"item": "minecraft:magma_block"
		}
	})
})