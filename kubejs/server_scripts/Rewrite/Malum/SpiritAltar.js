onEvent("recipes", event => {
	event.custom({
  "type": "malum:spirit_infusion",
  "input": {
    "item": "create:basin",
    "count": 1
  },
  "output": {
    "item": "bloodmagic:altar",
    "count": 1
  },
  "extra_items": [
    {
      "item": "malum:blazing_quartz",
      "count": 4
    },
    {
      "item": "minecraft:blaze_powder",
      "count": 4
    },
    {
      "item": "tconstruct:blood_slime_ball",
      "count": 4
    },
    {
      "item": "malum:twisted_rock_bricks",
      "count": 12
    },
    {
      "item": "malum:chiseled_twisted_rock",
      "count": 8
    }
  ],
  "spirits": [
    {
      "type": "infernal",
      "count": 16
    },
    {
      "type": "eldritch",
      "count": 16
    }
  ]
})
	event.custom({
  "type": "malum:spirit_infusion",
  "input": {
    "item": "minecraft:clock",
    "count": 1
  },
  "output": {
    "item": "tiab:time_in_a_bottle",
    "count": 1
  },
  "extra_items": [
    {
      "item": "botania:mana_diamond",
      "count": 16
    },
    {
      "item": "minecraft:lapis_lazuli",
      "count": 16
    },
    {
      "item": "malum:hallowed_gold_ingot",
      "count": 24
    },
    {
      "item": "minecraft:experience_bottle",
      "count": 4
    }
  ],
  "spirits": [
    {
      "type": "infernal",
      "count": 32
    },
    {
      "type": "aerial",
      "count": 32
    },
    {
      "type": "aqueous",
      "count": 32
    },
    {
      "type": "earthen",
      "count": 32
    },
    {
      "type": "arcane",
      "count": 32
    }
  ]
})
  event.custom({
  "type": "malum:spirit_infusion",
  "input": {
    "tag": "forge:ingots/steel",
    "count": 1
  },
  "output": {
    "item": "malum:soul_stained_steel_ingot",
    "count": 1
  },
  "extra_items": [
    {
      "item": "minecraft:soul_sand",
      "count": 4
    },
    {
      "item": "malum:processed_soulstone",
      "count": 2
    }
  ],
  "spirits": [
    {
      "type": "wicked",
      "count": 6
    },
    {
      "type": "earthen",
      "count": 2
    },
    {
      "type": "arcane",
      "count": 2
    }
  ]
})
  function MalumAltar(input,[input1, count1,input2, count2,input3, count3,input4, count4],[type1, tCount1, type2, tCount2], output) {
  event.custom({
  "type": "malum:spirit_infusion",
  "input": {
    "item": input,
    "count": 1
  },
  "output": {
    "item": output,
    "count": 1
  },
  "extra_items": [
    {
      "item": input1,
      "count": count1
    },
    {
      "item": input2,
      "count": count2
    },
    {
      "item": input3,
      "count": count3
    },
    {
      "item": input4,
      "count": count4
    }
  ],
  "spirits": [
    {
      "type": type1,
      "count": tCount1
    },
    {
      "type": type1,
      "count": tCount1
    }
  ]
})}
  MalumAltar("botania:brewery", ["botania:elementium_ingot", 4, "minecraft:stone_bricks", 3, "bloodmagic:blankslate", 2, "mna:mote_arcane", 1], ["eldritch", 8, "infernal", 4], "bloodmagic:alchemytable")
})