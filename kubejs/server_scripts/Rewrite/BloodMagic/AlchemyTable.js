onEvent('recipes', event => {
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
function NetherGemCatalyst(input, output) {
    event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "bloodmagic:weakbloodshard"
  },
  "input1": {
    "tag": input
  },
  "input2": {
    "item": "extendedcrafting:luminessence"
  },
  "input3": {
    "tag": "mna:gems/chimerite"
  },
  "output": {
    "item": output,
    'count': 6
  },
  "minimumDrain": 200.0,
  "drain": 25.0
})
  }
  function SimpleGemCatalyst(input, output) {
    event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "bloodmagic:simplecatalyst"
  },
  "input1": {
    "tag": input
  },
  "input2": {
    "item": "extendedcrafting:luminessence"
  },
  "input3": {
    "tag": "mna:gems/chimerite"
  },
  "output": {
    "item": output,
    'count': 4
  },
  "minimumDrain": 100.0,
  "drain": 25.0
})
  }
  function StrGemCatalyst(input, output) {
    event.custom({
  "type": "bloodmagic:soulforge",
  "input0": {
    "item": "bloodmagic:strengthenedcatalyst"
  },
  "input1": {
    "tag": input
  },
  "input2": {
    "item": "extendedcrafting:luminessence"
  },
  "input3": {
    "tag": "mna:gems/chimerite"
  },
  "input4": {
    'tag': 'bloodmagic:dusts/corrupted'
  },
  "output": {
    "item": output,
    'count': 6
  },
  "minimumDrain": 400.0,
  "drain": 100.0
})
  }
	SimpleCatalyst('forge:raw_materials/iron','thermal:iron_dust')
	SimpleCatalyst('forge:raw_materials/copper','thermal:copper_dust')
	SimpleCatalyst('forge:raw_materials/zinc','create:crushed_zinc_ore')
	SimpleCatalyst('forge:raw_materials/tin','thermal:tin_dust')
	SimpleCatalyst('forge:raw_materials/soulstone','malum:crushed_soulstone')
  StrengthenedCatalyst('forge:raw_materials/silver', 'thermal:silver_dust')
	StrengthenedCatalyst('forge:raw_materials/gold', 'thermal:gold_dust')
	StrengthenedCatalyst('forge:raw_materials/nickel', 'thermal:nickel_dust')
	StrengthenedCatalyst('forge:raw_materials/lead', 'thermal:lead_dust')
	StrengthenedCatalyst('forge:raw_materials/osmium', 'mekanism:dust_osmium')
	StrengthenedCatalyst('forge:raw_materials/uranium', 'mekanism:dust_uranium')
	BloodShardCatalyst('forge:raw_materials/cobalt', 'tconstruct:cobalt_ingot')
  NetherGemCatalyst('forge:ores/quartz', 'minecraft:quartz')
  NetherGemCatalyst('forge:ores/b_quartz', 'malum:blazing_quartz')
  SimpleGemCatalyst('forge:ores/coal', 'minecraft:coal')
  SimpleGemCatalyst('forge:ores/niter', 'thermal:niter')
  SimpleGemCatalyst('forge:ores/cinnabar', 'thermal:cinnabar')
  SimpleGemCatalyst('forge:ores/vinteum', 'mna:vinteum_dust')
  SimpleGemCatalyst('forge:ores/sulfur', 'thermal:sulfur')
  SimpleGemCatalyst('forge:ores/lapis', 'minecraft:lapis_lazuli')
  SimpleGemCatalyst('forge:ores/flourite', 'mekanism:fluorite_gem')
  SimpleGemCatalyst('forge:ores/redstone', 'minecraft:redstone')
  StrGemCatalyst('forge:ores/diamond', 'minecraft:diamond')
  StrGemCatalyst('forge:ores/emerald', 'minecraft:emerald')
})