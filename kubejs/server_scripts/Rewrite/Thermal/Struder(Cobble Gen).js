onEvent('recipes', event => {
function Rockgen(adjacent, output) {
	event.custom({
		'type': 'thermal:rock_gen',
		'adjacent': adjacent,
		'below': output,
		'result': {
			"item": output
		}
	})}
	Rockgen('minecraft:water', 'minecraft:dripstone_block')
	Rockgen('minecraft:water', 'minecraft:tuff')
	Rockgen('minecraft:water', 'minecraft:calcite')
	Rockgen('minecraft:water', 'minecraft:andesite')
	Rockgen('minecraft:water', 'minecraft:diorite')
	Rockgen('minecraft:water', 'minecraft:granite')
})