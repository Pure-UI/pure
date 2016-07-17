var Table0 = {
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
};
var Table1 = {
    config: function() {
        this.data.fields = [
            {
                label: 'Name'
            },
            {
                label: 'Email'
            },
            {
                label: 'Operation'
            }
        ];

        this.data.dataSource = [
            {
                name: 'Jim',
                email: 'jim@example.com'
            },
            {
                name: 'Mike',
                email: 'mike@example.com'
            },
            {
                name: 'Sam',
                email: 'sam@example.com'
            }
        ]
    },
    onClick: function( v ) {
        Pure.note( 'you clicked ' + v.name, 'info', 1000 );
    }
};
export default {"Box":[],"Breadcrumb":[],"Button":[],"Checkbox":[],"Countdown":[],"Form":[],"Icon":[],"Input":[],"Modal":[],"Note":[],"Pagination":[],"Radio":[],"Spinner":[],"Switch":[],"Table":[Table0,Table1],"Textarea":[]}