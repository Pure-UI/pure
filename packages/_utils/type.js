export default v => {
	const t = typeof v;
	let tmp = '';
	switch( t ) {
		case 'string':
		case 'boolean':
		case 'number':
			tmp = t;
			break;
		default:
			if( Array.isArray( v ) ) {
				tmp = 'array';
			} else if( t === 'object' ) {
				// TODO: isPlainObject
				tmp = 'object';
			}
	}
	return tmp;
};
