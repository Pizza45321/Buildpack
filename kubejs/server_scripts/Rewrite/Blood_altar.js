onEvent('recipes', event => {
	const { altar, array, soulforge, arc, alchemytable } = event.recipes.bloodmagic
	altar('bloodmagic:blankslate', 'botania:livingrock')
	altar('bloodmagic:demonslate', 'extendedcrafting:black_iron_slate').upgradeLevel(4).altarSyphon(15000)
	altar('bloodmagic:magicianbloodorb','botania:elementium_block').upgradeLevel(2).altarSyphon(25000)
	altar('bloodmagic:masterbloodorb','astralsorcery:starmetal' ).upgradeLevel(3).altarSyphon(50000)
	altar('bloodmagic:apprenticebloodorb','mysticalagriculture:inferium_block').upgradeLevel(1).altarSyphon(5000)
	altar('bloodmagic:weakbloodorb','minecraft:diamond_block' ).upgradeLevel(0).altarSyphon(2000)
})