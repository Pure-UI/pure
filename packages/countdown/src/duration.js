const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const duration = ( s, e ) => {
	const delta = Math.abs( e - s );

	// 不能直接parseInt，因为可能会出现科学计数法，导致parseInt后值不正确
	// toFixed(0)会导致进位，比如6.99.toFixed(0)直接变为7，所以改用Math.floor
	let day = Math.floor( delta / DAY );
	let hour = Math.floor( ( delta - day * DAY ) / HOUR );
	let minute = Math.floor( ( delta - day * DAY - hour * HOUR ) / MINUTE );
	let second = Math.round( ( delta - day * DAY - hour * HOUR - minute * MINUTE ) / SECOND );

	// 四舍五入会把second的59.9进位成60，显示会有问题，特殊处理下
	if( second === 60 ) {
		minute = minute + 1;
		second = 0;
	}

	return { day, hour, minute, second };
};

export default duration;
