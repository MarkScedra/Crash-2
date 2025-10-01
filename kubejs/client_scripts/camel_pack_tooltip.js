ItemEvents.tooltip(function (e) {
	e.addAdvanced('kubejs:camel_pack', function (item, advanced, text) {

		var capacity = 4000
		var fluidType = null
		var amount = 0

		if (item && item.nbt && item.nbt.contains('Fluid')) {
			var fluid = item.nbt.get('Fluid')
			fluidType = fluid.getString('FluidName')
			amount = fluid.getInt('Amount')
		}

		if (!fluidType) {
			text.add(1, Text.white('Empty'))
			text.add(2, Text.gray('A wearable tank for keeping you hydrated.'))
			return
		}

		text.add(1, Text.white('Fluid: ' + String(fluidType.substring(fluidType.indexOf(':') + 1)).replace(/_/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase() })))
		text.add(2, Text.white('Amount: ' + amount + ' / ' + capacity + ' mB'))
		text.add(3, Text.gray('A wearable tank for keeping you hydrated.'))
	})
})