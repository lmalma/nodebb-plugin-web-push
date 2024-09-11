'use strict';

const user = require.main.require('./src/user');

const subscriptions = require('./subscriptions');

const helpers = require.main.require('./src/controllers/helpers');

const Controllers = module.exports;

Controllers.renderSettings = async function (req, res) {
	if (res.locals.uid !== req.user.uid) {
		return helpers.notAllowed(req, res);
	}

	const [{ username, userslug }, count] = await Promise.all([
		user.getUserFields(res.locals.uid, ['username', 'userslug']),
		subscriptions.count(req.uid),
	]);
	console.log(count);

	const payload = {
		...res.locals.userData,
		title: '[[web-push:profile.label]]',
		breadcrumbs: helpers.buildBreadcrumbs([{ text: username, url: `/user/${userslug}` }, { text: '[[web-push:profile.label]]' }]),
		count,
	};

	res.render('account/web-push', payload);
};

Controllers.renderAdminPage = function (req, res/* , next */) {
	res.render('admin/plugins/web-push', {
		title: 'Quick Start',
	});
};
