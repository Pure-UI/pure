let Regular;

if( window.Regular ) {
	// 优先取window.Regular
	Regular = window.Regular;
} else {
	Regular = __non_webpack_require__( 'regularjs' );
}

export default Regular;
