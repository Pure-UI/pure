const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const duration = ( s, e ) => {
	const delta = Math.abs( e - s );

	const day = parseInt( delta / DAY );
	const hour = parseInt( ( delta - day * DAY ) / HOUR );
	const minute = parseInt( ( delta - day * DAY - hour * HOUR ) / MINUTE );
	const second = Math.round( ( delta - day * DAY - hour * HOUR - minute * MINUTE ) / SECOND );

	return { day, hour, minute, second };
};

export default duration;
