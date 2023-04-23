onEvent('recipes', event=>{
    event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 200, "minecraft:acacia_log")
   
    event.recipes.botania.elven_trade(["minecraft:acacia_boat"], "minecraft:diamond")
    event.recipes.botania.elven_trade(["minecraft:acacia_boat", "minecraft:acacia_button"], ["minecraft:diamond_block", "minecraft:gold_ingot"])
   
    event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:acacia_leaves")
    event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:stone", 1)

    event.recipes.botania.petal_apothecary("minecraft:acacia_boat", ["minecraft:acacia_button"])

    

    event.recipes.botania.terra_plate("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000000)

    event.recipes.botania.orechid("minecraft:acacia_button", "minecraft:acacia_fence", 1)

    event.recipes.botania.orechid_ignem("minecraft:acacia_leaves", "minecraft:acacia_fence_gate", 1)

    event.recipes.botania.marimorphosis("minecraft:acacia_door", "minecraft:acacia_fence_gate", 1, ["plains"], 10)
    
    event.recipes.botania.runic_altar('3x bloodmagic:simplekey', ['#forge:ingots/manasteel', '#mna:ingots/vinteum', '#forge:ingots/soulsteel', 'bloodmagic:infusedslate'])
    event.recipes.botania.runic_altar('3x bloodmagic:minekey', ['#forge:ingots/hellforged', '#mna:ingots/vinteum', 'bloodmagic:defaultcrystal', 'bloodmagic:infusedslate'])
    event.recipes.botania.runic_altar('mna:ritual_focus_minor', ['#forge:ingots/manasteel','#forge:ingots/manasteel','#forge:nuggets/manasteel', '#forge:nuggets/manasteel','botania:mana_glass', 'malum:arcane_spirit', 'malum:arcane_spirit', 'malum:arcane_spirit', 'malum:arcane_spirit'], 5000)
	function RunicAltar([input1, input2, input3, input4, input5, input6], outputItem, OutputNum, mana) {
    event.remove({output: outputItem})
		event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": outputItem,
    "count": OutputNum
  },
  "mana": mana,
  "ingredients": [
  Item.of(input1).toJson(),
  Item.of(input2).toJson(),
  Item.of(input3).toJson(),
  Item.of(input4).toJson(),
  Item.of(input5).toJson(),
  Item.of(input6).toJson()]
})
}
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": 'immersiveengineering:blueprint',
    "nbt": {
      "blueprint": "molds"
  },
    "count": 1
  },
  "mana": 2000,
  "ingredients": [
    {
      "tag": 'forge:plates/copper'
    },
    {
      "tag": 'forge:plates/brass'
    },
    {
      "tag": 'forge:plates/iron'
    },
    {
      "item": 'minecraft:paper'
    },
    {
      "tag": 'forge:plates/zinc'
    }
  ]
})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": 'immersiveengineering:blueprint',
    "nbt": {
      "blueprint": "components"
  },
    "count": 1
  },
  "mana": 2000,
  "ingredients": [
    {
      "tag": 'forge:plastic'
    },
    {
      "item": 'immersiveengineering:component_iron'
    },
    {
      "item": 'immersiveengineering:component_steel'
    },
    {
      "item": 'create:precision_mechanism'
    },
    {
      "item": 'minecraft:paper'
    }
  ]
})
RunicAltar(['bloodmagic:blankslate', 'mna:mote_air', 'malum:aerial_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:feather'], 'botania:rune_air', 2, 2000)
RunicAltar(['bloodmagic:blankslate', 'mna:mote_earth','malum:earthen_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:stone_pickaxe'], 'botania:rune_earth', 2, 2000)
RunicAltar(['bloodmagic:blankslate', 'mna:mote_water','malum:aqueous_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:fishing_rod'], 'botania:rune_water', 2, 2000)
RunicAltar(['bloodmagic:blankslate', 'mna:mote_fire','malum:infernal_spirit', 'botania:manasteel_ingot', 'extendedcrafting:luminessence', 'minecraft:flint_and_steel'], 'botania:rune_fire', 2,  2000)
RunicAltar(['minecraft:blaze_rod', 'mna:mote_ender', 'malum:astral_weave', 'malum:spectral_lens', 'minecraft:obsidian', 'minecraft:chest'], 'enderstorage:ender_chest', 2, 20000)
RunicAltar(['minecraft:blaze_rod', 'mna:mote_ender', 'malum:astral_weave', 'malum:spectral_lens', 'minecraft:obsidian', 'create:fluid_tank'], 'enderstorage:ender_tank', 2, 20000)
RunicAltar(['minecraft:blaze_rod', 'mna:mote_ender', 'malum:astral_weave', 'malum:spectral_lens', 'minecraft:obsidian', 'minecraft:leather'], 'enderstorage:ender_pouch', 1, 10000)
RunicAltar(['#forge:ingots/refined_radiance', '#forge:ingots/elementium', 'extrabotany:spirit_fuel', 'extrabotany:spirit_fuel', 'extrabotany:spirit_fuel', 'extrabotany:spirit_fuel'], 'extrabotany:photonium', 2, 10000)
RunicAltar(['#forge:ingots/shadow_steel', '#forge:ingots/elementium', 'extrabotany:nightmare_fuel', 'extrabotany:nightmare_fuel', 'extrabotany:nightmare_fuel', 'extrabotany:nightmare_fuel'], 'extrabotany:shadowium', 2, 10000)
})
	
		