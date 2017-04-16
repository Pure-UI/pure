import Select from '@pure/select';
import Option from '@pure/option';

play( Select, module ).name( 'Select' ).component( 'Option', Option ).add(
	'basic',
	`
		<Select selected="0">
			<Option value="0">Option 0</Option>
			<Option value="1">Option 1</Option>
			<Option value="2">Option 2</Option>
		</Select>
	`,
);
