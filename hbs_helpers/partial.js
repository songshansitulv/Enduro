__templating_engine.registerHelper("partial", function (name, options) {
	// Get the partial with the given name. This is a string.
	var partial = __templating_engine.partials[name]
	// Return empty string if the partial is not defined
	if (!partial) return ""

	// build up context
	context = {}
	context.context = this
	context.global = options.data.root

	// Compile and call the partial with context
	return new __templating_engine.SafeString(__templating_engine.compile(partial)(context))
});