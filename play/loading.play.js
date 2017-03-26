import Loading from 'pure-loading';

play( Loading, module )
	.name( 'Loading' )
	.add( 'basic', {
		template: `
			<Loading percentage="{ percentage }"></Loading>
		`,
		config() {
			this.data.percentage = 0;

			const t = setInterval( () => {
				if ( this.data.percentage >= 100 ) {
					clearInterval( t );
					return;
				}
				this.data.percentage += 10;
				this.$update();
			}, 500 );
		}
	} );
