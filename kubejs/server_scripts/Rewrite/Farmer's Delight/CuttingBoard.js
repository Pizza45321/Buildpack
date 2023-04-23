onEvent('recipes', event =>{
function  crystalPick(blockInput, itemOutput) {
  event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [Item.of(blockInput)],
  "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
  },
  "result": [Item.of(itemOutput, 2), Item.of(itemOutput).withChance(0.125)]
})
}
function axeUse(inputItem, outputItem) {
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [Item.of(inputItem)],
  "tool": {
    "tag": "forge:tools/axes"
  },
  "result": [Item.of(outputItem)]
})}
function pickUse(blockInput, itemOutput) {
  event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [Item.of(blockInput)],
  "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
  },
  "result": [Item.of(itemOutput, 4)]
})
}
function knifeUse(inputItem, outputItem) {
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients": [Item.of(inputItem)],
  "tool": {
    "tag": "forge:tools/knives"
  },
  "result": [Item.of(outputItem)]
})}
function logStrip(inputLog, outputLog) {
event.custom({
  "type": "farmersdelight:cutting",
  "ingredients":
    [Item.of(inputLog)],
 "tool": {
    "tag": "forge:tools/axes"
  },
  "result": [Item.of(outputLog), Item.of('farmersdelight:tree_bark')]
})}
pickUse('minecraft:dripstone_block', 'minecraft:pointed_dripstone')
crystalPick("tconstruct:earth_slime_crystal_block", "tconstruct:earth_slime_crystal")
crystalPick("tconstruct:sky_slime_crystal_block", "tconstruct:sky_slime_crystal")
crystalPick("tconstruct:ender_slime_crystal_block", "tconstruct:ender_slime_crystal")
crystalPick("tconstruct:ichor_slime_crystal_block", "tconstruct:ichor_slime_crystal")
pickUse('tconstruct:scorched_bricks', 'tconstruct:scorched_brick')
pickUse('tconstruct:seared_bricks', 'tconstruct:seared_brick')
pickUse('createdeco:worn_bricks', 'createdeco:worn_brick')
pickUse('createdeco:dusk_bricks', 'createdeco:dusk_brick')
pickUse('createdeco:dean_bricks', 'createdeco:dean_brick')
pickUse('createdeco:scarlet_bricks', 'createdeco:scarlet_brick')
pickUse('createdeco:scarlet_bricks', 'createdeco:scarlet_brick')
pickUse('createdeco:blue_bricks', 'createdeco:blue_brick')
pickUse('createdeco:pearl_bricks', 'createdeco:pearl_brick')
knifeUse("brewinandchewin:pizza", "12x brewinandchewin:pizza_slice")
knifeUse("delightful:salmonberry_pie", "12x delightful:salmonberry_pie_slice")
knifeUse("farmersdelight:apple_pie", "12x farmersdelight:apple_pie_slice")
knifeUse("farmersdelight:chocolate_pie", "12x farmersdelight:chocolate_pie_slice")
knifeUse("farmersrespite:rose_hip_pie", "12x farmersrespite:rose_hip_pie_slice")
knifeUse("largemeals:mushroom_pot_pie", "12x largemeals:mushroom_pot_pie_slice")
knifeUse("minecraft:pumpkin_pie", "12x delightful:pumpkin_pie_slice")
knifeUse("italian_delight:pizza_margehrita", "12x italian_delight:pizza_margherita_slice")
logStrip('malum:runewood_Log', 'malum:stripped_runewood_log')
logStrip('malum:soulwood_Log', 'malum:stripped_soulwood_log')
logStrip('malum:exposed_runewood_Log', 'malum:revealed_runewood_log')
logStrip('malum:exposed_soulwood_Log', 'malum:revealed_soulwood_log')
logStrip('botania:livingwood_log', 'botania:stripped_livingwood_log')
logStrip('botania:glimmering_livingwood_log', 'botania:glimmering_stripped_livingwood_log')
logStrip('botania:dreamwood_log', 'botania:dreamwood_log')
logStrip('botania:glimmering_dreamwood_log', 'botania:glimmering_stripped_dreamwood_log')
logStrip('culturaldelights:avocado_log', 'minecraft:stripped_jungle_log')
logStrip('tconstruct:greenheart_log', 'tconstruct:stripped_greenheart_log')
logStrip('tconstruct:skyroot_log', 'tconstruct:stripped_skyroot_log')
logStrip('tconstruct:bloodshroom_log','tconstruct:stripped_bloodshroom_log')
axeUse('malum:soulwood_sign', 'malum:soulwood_planks')
axeUse('malum:runewood_sign', 'malum:runewood_planks')
axeUse('tconstruct:skyroot_sign', 'tconstruct:skyroot_planks')
axeUse('tconstruct:greenheart_sign', 'tconstruct:greenheart_planks')
axeUse('tconstruct:bloodshroom_sign', 'tconstruct:bloodshroom_planks')
axeUse('malum:soulwood_door', 'malum:soulwood_planks')
axeUse('malum:runewood_door', 'malum:runewood_planks')
axeUse('tconstruct:skyroot_door', 'tconstruct:skyroot_planks')
axeUse('tconstruct:greenheart_door', 'tconstruct:greenheart_planks')
axeUse('tconstruct:bloodshroom_door', 'tconstruct:bloodshroom_planks')
axeUse('malum:soulwood_trapdoor', 'malum:soulwood_planks')
axeUse('malum:runewood_trapdoor', 'malum:runewood_planks')
axeUse('tconstruct:skyroot_trapdoor', 'tconstruct:skyroot_planks')
axeUse('tconstruct:greenheart_trapdoor', 'tconstruct:greenheart_planks')
axeUse('tconstruct:bloodshroom_trapdoor', 'tconstruct:bloodshroom_planks')
})