// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})

onEvent('fluid.registry', event => {
	event.create('pure_inferium').textureThick(0x8DAD00).bucketColor(0x8DAD00).displayName('Pure Inferium')
	event.create('pure_prudentium').textureThick(0xB82D00).bucketColor(0xB82D00).displayName('Pure Prudentium')
	event.create('pure_tertium').textureThick(0xDF5400).bucketColor(0xDF5400).displayName('Pure Tertium')
	event.create('pure_imperium').textureThick(0xDF92FC).bucketColor(0xDF92FC).displayName('Pure Imperium')
	event.create('pure_supremium').textureThick(0xDF0000).bucketColor(0xDF0000).displayName('Pure Supremium')
})