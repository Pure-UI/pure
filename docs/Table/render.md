---
order: 1
---

Basic Usage

```html
{#if !loading}
<Table fields="{ fields }" data-source="{ dataSource }"></Table>
{#else}
<Box padding="2em 0">
	<Spinner block></Spinner>
</Box>
{/if}
```

```js
{
	config: function() {
		this.data.loading = true;
		this.data.fields = [
			{
				key: 'picture',
				label: 'Avatar',
				render: function( v, row ) {
					return `
						<img src="${ v.medium }" style="width: 50px;height: 50px;" />
					`
				}
			},
			{
				key: 'name',
				label: 'Name',
				render: function( v, row ) {
					return v.first + ' ' + v.last;
				}
			},
			{
				key: 'gender',
				label: 'Gender',
				render: function( v, row ) {
					// if return nothing, this won't override default render function
				}
			},
			{
				key: 'email',
				label: 'Email'
			},
			{
				key: 'other',
				label: 'Other',
				render: function( v, row ) {
					return `
						<Note type="info">Hi</Note>
					`;
				}
			}
		];

		this.data.dataSource = [];

		fetch(
			`https://randomuser.me/api?results=10&page=1&sortField=&sortOrder=`
			)
			.then(response => response.json())
			.then(json => json.results)
			.then(dataSource => {
				this.data.dataSource = dataSource;
				this.data.loading = false;
				this.$update();
			})
			.catch(e => {
				this.data.loading = false;
				this.$update();
			});
	}
}
```

```json
{"results":[{"gender":"female","name":{"title":"mrs","first":"مارال","last":"حسینی"},"location":{"street":"8123 شهید استاد حسن بنا","city":"اصفهان","state":"گلستان","postcode":74410},"email":"مارال.حسینی@example.com","login":{"username":"silvermouse797","password":"erection","salt":"O9pXNYG0","md5":"cd4226953d0f599870a15602e844d851","sha1":"603c11ea9abcb3d7499e2a84be0faacda3f8fb10","sha256":"b5bea8f653ca299f12d55a29727ca826fac14292f8fe39117ea5815929a32cd9"},"registered":1089190323,"dob":491932027,"phone":"034-20471468","cell":"0901-952-7963","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/74.jpg","medium":"https://randomuser.me/api/portraits/med/women/74.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/74.jpg"},"nat":"IR"},{"gender":"male","name":{"title":"mr","first":"رهام","last":"نكو نظر"},"location":{"street":"4550 کارگر شمالی","city":"دزفول","state":"آذربایجان شرقی","postcode":44202},"email":"رهام.نكونظر@example.com","login":{"username":"beautifulpanda867","password":"crunch","salt":"aEKJ3Wiq","md5":"71c2badf9f8f7bb483eab646d11d6c42","sha1":"bacb518d33adcf6e196c192301d634add64a9d8a","sha256":"39877ce3a2b438a9b12ca8afe3c80672ab2be275d7a00fad3e95d44f7ff8077b"},"registered":1270447940,"dob":1313037670,"phone":"058-33870714","cell":"0948-818-6742","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/78.jpg","medium":"https://randomuser.me/api/portraits/med/men/78.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/78.jpg"},"nat":"IR"},{"gender":"male","name":{"title":"mr","first":"okan","last":"çetin"},"location":{"street":"5231 istiklal cd","city":"kastamonu","state":"trabzon","postcode":49950},"email":"okan.çetin@example.com","login":{"username":"heavytiger735","password":"edison","salt":"0rbePgeW","md5":"ba5475ad6ad1f7ca3e528206da8c2074","sha1":"d665d539f177b155d2aac588bfce3156d67ed262","sha256":"486b61561bb267f77fd284b547fa41ca893cd801611b13bfa71e7de12fb398f0"},"registered":1422514694,"dob":426534789,"phone":"(993)-199-2096","cell":"(655)-874-0686","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/75.jpg","medium":"https://randomuser.me/api/portraits/med/men/75.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/75.jpg"},"nat":"TR"},{"gender":"male","name":{"title":"mr","first":"cecil","last":"gutierrez"},"location":{"street":"8318 spring st","city":"shiloh","state":"alaska","postcode":61905},"email":"cecil.gutierrez@example.com","login":{"username":"smallfrog111","password":"latina","salt":"0xk1c0zM","md5":"991bb9a794598c4dfbf77a8b96cdbd15","sha1":"cac03274f4b2b6b2749b95eff27c4d92c63d1698","sha256":"4490fe57a270d26d21ccf01f8e7b64a22de79b4add21f5c94b2350e51c9afc72"},"registered":1344963320,"dob":323444902,"phone":"(808)-476-1171","cell":"(484)-992-9370","id":{"name":"SSN","value":"291-09-7989"},"picture":{"large":"https://randomuser.me/api/portraits/men/8.jpg","medium":"https://randomuser.me/api/portraits/med/men/8.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/8.jpg"},"nat":"US"},{"gender":"male","name":{"title":"mr","first":"tim","last":"martin"},"location":{"street":"6292 kirchstraße","city":"calw","state":"niedersachsen","postcode":53569},"email":"tim.martin@example.com","login":{"username":"bigkoala298","password":"gene","salt":"1CahSlbR","md5":"f0b991cfaf4169ae525e774fd1048093","sha1":"eaef913e5d64a5b534c0f56fa08d00cc999af61d","sha256":"ae544e44364e7ab2833d24dc15225ba11987ca7c2b6665562e94987435e63120"},"registered":1126757827,"dob":121287403,"phone":"0526-4379162","cell":"0177-8313150","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/36.jpg","medium":"https://randomuser.me/api/portraits/med/men/36.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/36.jpg"},"nat":"DE"},{"gender":"male","name":{"title":"mr","first":"ege","last":"erberk"},"location":{"street":"4361 vatan cd","city":"zonguldak","state":"kırklareli","postcode":64223},"email":"ege.erberk@example.com","login":{"username":"orangeelephant176","password":"wwwww","salt":"cSFq7txu","md5":"2255cf6294aae98ba4cc8d4ab300ca14","sha1":"93108f21e13dc825c6ba6467a1472dc7e0f63e06","sha256":"fca19f5aad844655171e2e574b0f808c35406064cb12b983ac4679728097a786"},"registered":929546309,"dob":129865621,"phone":"(233)-140-0106","cell":"(310)-562-3790","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/men/38.jpg","medium":"https://randomuser.me/api/portraits/med/men/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/38.jpg"},"nat":"TR"},{"gender":"female","name":{"title":"miss","first":"karla","last":"schulz"},"location":{"street":"2727 eichenweg","city":"müritz","state":"berlin","postcode":25945},"email":"karla.schulz@example.com","login":{"username":"heavybird803","password":"asdfasdf","salt":"rnPsxDzO","md5":"28276f8c3fcda8cbf710889a147c193b","sha1":"7d9b01225278048ab345230e62e674f44947789f","sha256":"3d889d897d6482ece9cd242458a83581bf650a87f8d6fa802ad9f9fe8cd54080"},"registered":1353299596,"dob":34320999,"phone":"0094-3746940","cell":"0177-4280666","id":{"name":"","value":null},"picture":{"large":"https://randomuser.me/api/portraits/women/16.jpg","medium":"https://randomuser.me/api/portraits/med/women/16.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/16.jpg"},"nat":"DE"},{"gender":"female","name":{"title":"ms","first":"hafida","last":"neelen"},"location":{"street":"4994 blauwkapelseweg","city":"brunssum","state":"flevoland","postcode":96738},"email":"hafida.neelen@example.com","login":{"username":"silverduck303","password":"ventura","salt":"Rlvt4mPb","md5":"e6f77452589994534cccd5c8aeeeb840","sha1":"e2eb6d343b8c4d38f1e8a89afa038afd557c2033","sha256":"e9b22370fc4d970e04b3de2a8eec3653e886a8f2e7075d10567c4392ed4d0963"},"registered":1396166896,"dob":942916148,"phone":"(375)-102-6801","cell":"(535)-663-1203","id":{"name":"BSN","value":"75856427"},"picture":{"large":"https://randomuser.me/api/portraits/women/13.jpg","medium":"https://randomuser.me/api/portraits/med/women/13.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/13.jpg"},"nat":"NL"},{"gender":"female","name":{"title":"miss","first":"minea","last":"linna"},"location":{"street":"5725 hämeenkatu","city":"pyhäjoki","state":"north karelia","postcode":26596},"email":"minea.linna@example.com","login":{"username":"tinyleopard702","password":"anita","salt":"TlnaTz9W","md5":"73939ecd1a7fbd7f023bd05b4fb78145","sha1":"7d12f9ecbda6b71e1de81c661f604e02834ff0e6","sha256":"e9b16fc40dbc66e8b5140e7ce6e3da70daa0a16dfdef14823d5d96b77a07125e"},"registered":933513648,"dob":959444940,"phone":"08-033-158","cell":"047-933-30-63","id":{"name":"HETU","value":"30277879-V"},"picture":{"large":"https://randomuser.me/api/portraits/women/52.jpg","medium":"https://randomuser.me/api/portraits/med/women/52.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/52.jpg"},"nat":"FI"},{"gender":"male","name":{"title":"mr","first":"jar","last":"roberts"},"location":{"street":"9198 royal ln","city":"elizabeth","state":"maine","postcode":75205},"email":"jar.roberts@example.com","login":{"username":"greenrabbit531","password":"callie","salt":"DboULZUP","md5":"8dd5511c3a9bcca4b78c710b0056bfbf","sha1":"61f6f6aa038efbe55a3a81ae7a46145e45798607","sha256":"e4a731a9b20714cfad99014e1ee1e209345a633cadee121f476699df5e8eefa7"},"registered":1025041559,"dob":1374486617,"phone":"(203)-026-9033","cell":"(096)-916-8704","id":{"name":"SSN","value":"879-06-7671"},"picture":{"large":"https://randomuser.me/api/portraits/men/61.jpg","medium":"https://randomuser.me/api/portraits/med/men/61.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/61.jpg"},"nat":"US"}],"info":{"seed":"7b99927c9add1d2c","results":10,"page":1,"version":"1.0"}}
```
