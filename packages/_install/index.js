module.exports = function install( name, definition ) {
	return function ( Parent, Regular ) {
		const { Ctor, components } = construct( definition );

		Object.keys( components || {} ).forEach( function ( key ) {
			install( key, components[ key ] )( Ctor, Regular );
		} );

		Parent.component( name, Ctor );
	};
};

function construct( definition ) {
	const { components } = definition;

	delete definition.components;

	let Ctor;
	if ( definition.Ctor ) {
		Ctor = definition.Ctor;
	} else {
		Ctor = Regular.extend( definition );
		definition.Ctor = Ctor;
	}

	return {
		Ctor: Ctor,
		components: components,
	};
}
