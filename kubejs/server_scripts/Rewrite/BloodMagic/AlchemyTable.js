onEvent('recipes', event => {
  const { alchemytable } = event.recipes.bloodmagic
	event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "malum:raw_soulstone"
    },
    {
      "tag": "forge:dusts/signalum"
    },
    {
      "item": "extendedcrafting:luminessence"
    },
    {
      "tag": "forge:dusts/mana"
    },
    {
      "tag": "forge:crops/nether_wart"
    }
  ],
  "output": {
    "item": "bloodmagic:simplecatalyst",
    "count": 4
  },
  "syphon": 400,
  "ticks": 160,
  "upgradeLevel": 2
})
	event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "bloodmagic:simplecatalyst"
    },
    {
      "tag": "bloodmagic:dusts/corrupted"
    },
    {
      "item": "malum:cluster_of_brilliance"
    },
    {
      "item": "botania:spell_cloth"
    }
  ],
  "output": {
    "item": "bloodmagic:strengthenedcatalyst",
    "count": 2
  },
  "syphon": 1000,
  "ticks": 100,
  "upgradeLevel": 4
})
  event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "extendedcrafting:luminessence"
    },
    {
      "item": "botania:pixie_dust"
    },
    {
      "item": "malum:arcane_charcoal_fragment"
    },
    {
      "item": "malum:hallowed_gold_nugget"
    },
    {
      "item": "botania:spell_cloth"
    }
  ],
  "output": {
    "item": "bloodmagic:reagentbinding",
    "count": 1
  },
  "syphon": 1000,
  "ticks": 200,
  "upgradeLevel": 3
})
  event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "mna:animus_dust"
    },
    {
      "tag": "botania:petals"
    },
    {
      "item": "malum:arcane_charcoal_fragment"
    },
    {
      "item": "extendedcrafting:luminessence"
    }
  ],
  "output": {
    "item": "bloodmagic:arcaneashes",
    "count": 1
  },
  "syphon": 500,
  "ticks": 200,
  "upgradeLevel": 1
})
	function SimpleCatalyst(input, output) {
		event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "bloodmagic:simplecatalyst"
    },
    {
      "tag": input
    },
    {
      "item": "malum:blazing_quartz_fragment"
    },
    {
      "tag": "forge:dusts/mana"
    }
  ],
  "output": {
    "item": output,
    "count": 2
  },
  "syphon": 1000,
  "ticks": 100,
  "upgradeLevel": 2
})
	}
	function StrengthenedCatalyst(input, output) {
		event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "bloodmagic:strengthenedcatalyst"
    },
    {
      "tag": input
    },
    {
      "item": 'mysticalagriculture:prudentium_essence'
    },
    {
      "item": "malum:infernal_spirit"
    },
    {
      "item": "extendedcrafting:luminessence"
    }
  ],
  "output": {
    "item": output,
    "count": 6
  },
  "syphon": 2500,
  "ticks": 200,
  "upgradeLevel": 4
})
	}
	function BloodShardCatalyst(input, output) {
		event.custom({
  "type": "bloodmagic:alchemytable",
  "input": [
    {
      "item": "bloodmagic:strengthenedcatalyst"
    },
    {
      "tag": input
    },
    {
      "item": "bloodmagic:weakbloodshard"
    },	
    {
      "item": 'mysticalagriculture:prudentium_essence'
    },
    {
      "item": "malum:infernal_spirit"
    },
    {
      "item": "extendedcrafting:luminessence"
    }
  ],
  "output": {
    "item": output,
    "count": 8
  },
  "syphon": 2500,
  "ticks": 200,
  "upgradeLevel": 4
})
	}
	SimpleCatalyst('forge:raw_materials/iron','thermal:iron_dust')
	SimpleCatalyst('forge:raw_materials/copper','thermal:copper_dust')
	SimpleCatalyst('forge:raw_materials/zinc','create:crushed_zinc_ore')
	SimpleCatalyst('forge:raw_materials/tin','thermal:tin_dust')
  SimpleCatalyst('forge:raw_materials/aluminum','immersiveengineering:dust_aluminum')
	SimpleCatalyst('forge:raw_materials/soulstone','malum:crushed_soulstone')
  StrengthenedCatalyst('forge:raw_materials/silver', 'thermal:silver_dust')
	StrengthenedCatalyst('forge:raw_materials/gold', 'thermal:gold_dust')
	StrengthenedCatalyst('forge:raw_materials/nickel', 'thermal:nickel_dust')
	StrengthenedCatalyst('forge:raw_materials/lead', 'thermal:lead_dust')
	StrengthenedCatalyst('forge:raw_materials/osmium', 'mekanism:dust_osmium')
	StrengthenedCatalyst('forge:raw_materials/uranium', 'mekanism:dust_uranium')
	BloodShardCatalyst('forge:raw_materials/cobalt', 'tconstruct:cobalt_ingot')
  alchemytable('bloodmagic:reagentsight', ['create:goggles', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(500).ticks(200).upgradeLevel(0)
  alchemytable('bloodmagic:reagentwater', ['mysticalagriculture:water_agglomeratio', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(300).ticks(200).upgradeLevel(0)
  alchemytable('bloodmagic:reagentlava', ['mysticalagriculture:fire_agglomeratio', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(1000).ticks(200).upgradeLevel(0)
  alchemytable('bloodmagic:reagentair', ['mysticalagriculture:air_agglomeratio', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(2000).ticks(200).upgradeLevel(1)
  alchemytable('bloodmagic:reagentholding', ['create:item_vault', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(2000).ticks(200).upgradeLevel(1)
  alchemytable('bloodmagic:reagentfastminer', ['create_sa:brass_drill_head', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(2000).ticks(200).upgradeLevel(1)
  alchemytable('bloodmagic:reagentgrowth', ['botania:overgrowth_seed', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(2000).ticks(200).upgradeLevel(1)
  alchemytable('bloodmagic:reagentvoid', ['minecraft:tnt', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(1000).ticks(200).upgradeLevel(1)
  alchemytable('bloodmagic:reagentbloodlight', ['malum:ether_torch', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(1000).ticks(200).upgradeLevel(2)
  alchemytable('bloodmagic:reagentmagnetism', ['botania:lens_magnet', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(1000).ticks(200).upgradeLevel(2)
  alchemytable('bloodmagic:reagentteleposition', ['bloodmagic:teleposerfocus', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(1000).ticks(200).upgradeLevel(3)
  alchemytable('bloodmagic:reagentsuppression', ['mna:mote_ender', 'mna:animus_dust', 'botania:mana_powder', 'malum:wicked_spirit']).syphon(1000).ticks(200).upgradeLevel(3)
})