function chooseByEnvironment<ItemType>(fake: ItemType, original?: ItemType): ItemType{
	const chooseItem = process.env.ENVIRONMENT === 'test'?'fake':'original';
	const choose = {
		fake,
		original
	};
	return choose[chooseItem] || choose['fake'];
}

export {chooseByEnvironment};