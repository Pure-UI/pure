import { merge } from 'regular-play';

import '@pure/theme/src';

const load = requireContext => {
	return requireContext.keys().map( requireContext );
};

const plays = load( require.context( './', true, /\.play\.js$/ ) );

merge( plays, module );
