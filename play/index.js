import { merge } from 'regular-play';

import '../packages/_theme/src';

const load = requireContext => {
	return requireContext.keys().map( requireContext );
};

const plays = load( require.context( './', true, /\.play\.js$/ ) );

merge( plays, module );
