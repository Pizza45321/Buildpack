onEvent('recipes', event => {
	event.custom({
		"type": "astralsorcery:block_transmutation",
		"input": [
		{
			"block": 'botania:manasteel_block',
			"display": {
				"item": 'botania:manasteel_block',
				"count": 1
			}
		}
		],
		"output": {
			"block": 'astralsorcery:starmetal'
		},
		"display": {
			"item": 'astralsorcery:starmetal',
			"count": 1
		},
		"starlight": 100.0
	})
	event.custom(
		{
  "type": "astralsorcery:infuser",
  "fluidInput": "astralsorcery:liquid_starlight",
  "input": {
    "item": "minecraft:iron_ingot"
  },
  "output": {
    "item": "astralsorcery:starmetal_ore",
    "count": 1
  },
  "consumptionChance": 0.5,
  "duration": 60,
  "consumeMultipleFluids": true,
  "acceptChaliceInput": true,
  "copyNBTToOutputs": false
})
	event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 90,
  "starlight": 600,
  "pattern": [
    "_____",
    "__b__",
    "_aec_",
    "__d__",
    "_____"
  ],
  "key": {
    "a": {
      "item": "mekanism:dust_charcoal"
    },
    "b": {
      "item": 'thermal:basalz_rod'
    },
    "c": {
      "item": 'botania:mana_powder'
    },
    "d": {
      "item": 'mekanism:dust_obsidian'
    },
    "e": {
      "item": 'astralsorcery:illumination_powder'
    }
  },
  "output": [
    {
      "item": "astralsorcery:nocturnal_powder",
      "count": 8
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam"
  ]
})
	event.custom({
  "type": "astralsorcery:altar",
  "altar_type": 0,
  "duration": 90,
  "starlight": 600,
  "pattern": [
    "_____",
    "__c__",
    "_aba_",
    "__c__",
    "_____"
  ],
  "key": {
    "a": {
      "item": 'mana-and-artifice:purified_vinteum_dust'
    },
    "b": {
      "item": 'astralsorcery:aquamarine'
    },
    'c': {
      'item': 'minecraft:glowstone_dust'
    }
  },
  "output": [
    {
      "item": "astralsorcery:illumination_powder",
      "count": 8
    }
  ],
  "effects": [
    "astralsorcery:built_in_effect_discovery_central_beam"
  ]
})
})