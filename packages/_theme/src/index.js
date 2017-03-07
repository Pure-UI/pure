import './default/fonts/iconfont.css';

function load( requireContext ) {
	return requireContext.keys().map( requireContext );
}

load( require.context( './default', true, /\.less$/ ) );
