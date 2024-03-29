// priority: 0
onEvent('item.registry', event => {
	event.create('incomplete_component').displayName('Incomplete Component')
	event.create('withering_processor').displayName('Withering Processor')
	event.create('neural_processor').displayName('Neural Processor')
	event.create('realm_rune').displayName('Rune of the Realms')
})
onEvent('block.registry', event => {
	// Register new blocks here
	event.create('empty_engineering').material('stone').hardness(1.0).displayName('Empty Engineering Frame')
})
onEvent('fluid.registry', event => {
	event.create('pure_inferium').thickTexture(0x8DAD00).bucketColor(0x8DAD00).displayName('Pure Inferium')
	event.create('pure_prudentium').thickTexture(0xB82D00).bucketColor(0xB82D00).displayName('Pure Prudentium')
	event.create('pure_tertium').thickTexture(0xDF5400).bucketColor(0xDF5400).displayName('Pure Tertium')
	event.create('pure_imperium').thickTexture(0xDF92FC).bucketColor(0xDF92FC).displayName('Pure Imperium')
	event.create('pure_supremium').thickTexture(0xDF0000).bucketColor(0xDF0000).displayName('Pure Supremium')
	event.create('lq_mana').thickTexture(0x03f2ff).bucketColor(0x03f2ff).displayName('Liquified Mana')
	event.create('c_biofuel').thinTexture(0x008200).bucketColor(0x008200).displayName('Crude Biofuel')
	event.create('r_biofuel').thinTexture(0x00c800).bucketColor(0x00c800).displayName('Refined Biofuel')
	event.create('p_biofuel').thinTexture(0x00ff00).bucketColor(0x00ff00).displayName('Perfected Biofuel')
	event.create('s_acid').thinTexture(0x00ff00).bucketColor(0x00ff00).displayName('Sulfuric Acid')
})