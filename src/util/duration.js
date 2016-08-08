const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const duration = ( s, e ) => {
	const delta = Math.abs( e - s );

	// 不能直接parseInt，因为可能会出现科学计数法，导致parseInt后值不正确
	// toFixed(0)会导致进位，比如6.99.toFixed(0)直接变为7，所以改用Math.floor
	const day = parseInt( Math.floor( delta / DAY ) );
	const hour = parseInt( Math.floor( ( delta - day * DAY ) / HOUR ) );
	const minute = parseInt( Math.floor( ( delta - day * DAY - hour * HOUR ) / MINUTE ) );
	const second = Math.round( ( delta - day * DAY - hour * HOUR - minute * MINUTE ) / SECOND );

	return { day, hour, minute, second };
};

export default duration;
