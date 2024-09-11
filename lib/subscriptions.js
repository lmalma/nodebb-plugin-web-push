'use strict';

const db = require.main.require('./src/database');

const Subscriptions = module.exports;

Subscriptions.count = async uid => await db.sortedSetCard(`uid:${uid}:web-push:subscriptions`);

Subscriptions.list = async (uids) => {
	const subscriptions = await db.getSortedSetsMembers(uids.map(uid => `uid:${uid}:web-push:subscriptions`));
	const response = new Map();
	subscriptions.forEach((subscriptions, idx) => {
		response.set(uids[idx], new Set(subscriptions.map(sub => JSON.parse(sub))));
	});

	return response;
};

Subscriptions.add = async (uid, subscription) => {
	await db.sortedSetAdd(`uid:${uid}:web-push:subscriptions`, Date.now(), JSON.stringify(subscription));
};

Subscriptions.remove = async (uid, subscription) => {
	await db.sortedSetRemove(`uid:${uid}:web-push:subscriptions`, JSON.stringify(subscription));
};
