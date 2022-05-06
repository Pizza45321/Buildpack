// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Reipes are a go!')


onEvent('recipes', event => {
	event.shaped('masterfulmachinery:basic_controller', [
		'pmp',
		'pip',
		'las'
		], {
			a: '#forge:sheetmetals/aluminum',
			p: '#forge:plates/steel',
			i: '#appliedenergistics2:illuminated_panel',
			l: '#forge:gears/lumium',
			m: 'create:precision_mechanism',
			s: '#forge:gears/signalum'
		})
	event.shaped('masterfulmachinery:basic_bitem_port_items_input', [
		'aha',
		'asa',
		'ccc'
		], {
			a: 'minecraft:air',
			s: '#forge:sheetmetals/aluminum',
			c: '#forge:chests/wooden',
			h: 'minecraft:hopper'
		})
		event.shaped('masterfulmachinery:basic_bfluid_port_fluids_input', [
		'aha',
		'asa',
		'ccc'
		], {
			a: 'minecraft:air',
			s: '#forge:sheetmetals/aluminum',
			c: 'minecraft:bucket',
			h: 'minecraft:hopper'
		})
		event.shaped('masterfulmachinery:basic_benergy_port_energy_input', [
		'aha',
		'asa',
		'aca'
		], {
			a: 'minecraft:air',
			s: '#forge:sheetmetals/aluminum',
			c: 'thermal:energy_cell',
			h: 'minecraft:hopper'
		})
	
	event.recipes.createMechanicalCrafting('extendedcrafting:ultimate_singularity', [
		'aaajaaa',
		'aaabaaa',
		'aaacaaa',
		'aadefaa',
		'ghiHklm',
		'aanopaa',
		'aaaqaaa',
		'aaaraaa',
		'aaaSaaa'
		], {
			a: 'minecraft:air',
			b: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'),
			c: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}'),
			d: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'),
			e: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'),
			f: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'),
			g: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'),
			h: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'),
			i: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'),
			j: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'),
			k: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'),
			l: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'),
			m: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'),
			n: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'),
			o: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'),
			p: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'),
			S: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'),
			q: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'),
			r: Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:uranium"}'),
			H: 'appliedenergistics2:singularity'
		})
	event.recipes.immersiveengineeringMetalPress('thermal:diamond_gear', '4x minecraft:diamond', 'immersiveengineering:mold_gear')
	event.custom({
  "type": "extendedcrafting:compressor",
  "powerCost": 5000000,
  "inputCount": 150000,
  "ingredient": {
    "item": 'appliedenergistics2:64k_cell_component'
  },
  "catalyst": {
    "item": 'extendedcrafting:ultimate_singularity'
  },
  "result": {
    "item": 'appliedenergistics2:creative_storage_cell'
  }
	})
	})

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

