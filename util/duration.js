const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const duration = ( s, e ) => {
	const delta = Math.abs( e - s );

	const day = ( delta / DAY ).toFixed( 0 );
	const hour = ( ( delta - day * DAY ) / HOUR ).toFixed( 0 );
	const minute = ( ( delta - day * DAY - hour * HOUR ) / MINUTE ).toFixed( 0 );
	const second = Math.round( ( delta - day * DAY - hour * HOUR - minute * MINUTE ) / SECOND );

	return { day, hour, minute, second };
};

export default duration;
