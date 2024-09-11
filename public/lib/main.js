'use strict';

(async () => {
	const [hooks, api] = await app.require(['hooks', 'api']);

	hooks.on('action:app.load', async () => {
		// ...
	});
})();
