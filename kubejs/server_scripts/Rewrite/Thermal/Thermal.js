onEvent('recipes', event => {
     const { smelter, press, crucible, compression_fuel, centrifuge, pyrolyzer, pulverizer, refinery, magmatic_fuel, bottler } = event.recipes.thermal
     smelter('4x extendedcrafting:redstone_ingot',['#forge:ingots/steel', 'minecraft:redstone_block'])
     smelter('3x extendedcrafting:black_iron_ingot',['3x #forge:ingots/manasteel', '#botania:petals/black'])
     smelter('3x refinedstorage:silicon',['#forge:dusts/charcoal', '#forge:dusts/quartz', "#forge:sand"])
     smelter('4x refinedstorage:quartz_enriched_iron',['3x #forge:ingots/iron', "#forge:ingots/lead", '4x #forge:gems/quartz'])
     press('thermal:diamond_gear', ['4x minecraft:diamond', 'thermal:press_gear_die'])
     crucible(Fluid.of('kubejs:pure_inferium', 250), 'mysticalagriculture:inferium_essence')
     crucible(Fluid.of('kubejs:pure_tertium', 250), 'mysticalagriculture:tertium_essence')
     crucible(Fluid.of('kubejs:pure_imperium', 250),'mysticalagriculture:imperium_essence')
     crucible(Fluid.of('kubejs:pure_prudentium', 250), 'mysticalagriculture:prudentium_essence')
     crucible(Fluid.of('kubejs:pure_supremium', 250), 'mysticalagriculture:supremium_essence')
     crucible(Fluid.of('tconstruct:blazing_blood', 50), 'minecraft:blaze_powder')
     magmatic_fuel(Fluid.of('kubejs:pure_inferium', 1000)).energy(25000)
     magmatic_fuel(Fluid.of('kubejs:pure_prudentium', 1000)).energy(50000)
     magmatic_fuel(Fluid.of('kubejs:pure_tertium', 1000)).energy(75000)
     magmatic_fuel(Fluid.of('kubejs:pure_imperium', 1000)).energy(100000)
     magmatic_fuel(Fluid.of('kubejs:pure_supremium', 1000)).energy(150000)
     centrifuge(['minecraft:slime_ball', Fluid.of('minecraft:lava', 250)],'minecraft:magma_cream')
     pulverizer('mekanism:dust_charcoal','minecraft:charcoal')
     refinery([Fluid.of('kubejs:p_biofuel', 75), Fluid.of('industrialforegoing:sludge', 15), Item.of('thermal:tar').withChance(0.1)], Fluid.of('kubejs:r_biofuel', 100))
     compression_fuel(Fluid.of('kubejs:p_biofuel', 1000)).energy(1500000)
     compression_fuel(Fluid.of('kubejs:r_biofuel', 1000)).energy(500000)
     compression_fuel(Fluid.of('kubejs:c_biofuel', 1000)).energy(250000)
     bottler('thermal:enderium_glass', ['#forge:glass', Fluid.of('tconstruct:molten_enderium', 72)])
     bottler('thermal:lumium_glass', ['#forge:glass', Fluid.of('tconstruct:molten_lumium', 72)])
     bottler('thermal:signalum_glass', ['#forge:glass', Fluid.of('tconstruct:molten_signalum', 72)])
     bottler('bigreactors:reinforced_reactorcasing', ['bigreactors:basic_reactorcasing', Fluid.of('industrialforegoing:ether_gas', 250)])
     bottler('bigreactors:reinforced_turbinecasing', ['bigreactors:basic_turbinecasing', Fluid.of('industrialforegoing:ether_gas', 250)])
})
