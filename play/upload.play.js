import Upload from 'pure-upload';

play( Upload, module )
	.name( 'Upload' )
	.add( 'basic', {
		template: `
			<Upload
				multiple
				show-file-list=true
				fileList="{ fileList }"
				tip="只能上传jpg/png文件，且不超过500kb"
			>
			</Upload>
		`,
		config() {
			this.data.fileList = [
				{
					name: 'pic1.jpeg',
					url: '',
					status: 'success',
				},
				{
					name: 'pic2.jpeg',
					url: '',
					status: 'success',
				},
			];
		},
	} )
	.add( 'drag', {
		template: `
				<Upload
					type="drop"
					show-file-list=true
					fileList="{ fileList }"
					tip="只能上传jpg/png文件，且不超过500kb"
				>
				</Upload>
			`,
		config() {
			this.data.fileList = [
				{
					name: 'pic1.jpeg',
					url: '',
					status: 'success',
				},
				{
					name: 'pic2.jpeg',
					url: '',
					status: 'success',
				},
			];
		},
	} );
