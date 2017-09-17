import './fonts/iconfont.css';

function load( requireContext ) {
	return requireContext.keys().map( requireContext );
}

load( require.context( './components', true, /\.less$/ ) );
