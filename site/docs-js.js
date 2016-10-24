var ElementTree0 = {
    config: function() {
        this.data.source = [
            {
                name: 'head',
                children: [
                    {
                        name: 'meta',
                        attrs: {
                            charset: 'utf-8'
                        }
                    }
                ]
            },
            {
                name: 'body',
                children: [
                    {
                        name: 'div',
                        attrs: {
                            id: 'app',
                            class: 'app'
                        },
                        children: [
                            {
                                name: 'h1',
                                attrs: {
                                    class: 'title'
                                }
                            },
                            {
                                name: 'div',
                                attrs: {
                                    class: 'content'
                                }
                            }
                        ]
                    },
                    {
                        name: 'script',
                        attrs: {
                            type: 'text/javascript',
                            src: "../app.js"
                        }
                    }
                ]
            }
        ];
    },
    onSelect: function( node ) {
        this.data.selected = node;
        this.$update();
    }
};
var Note1 = {
    onShowNote: function() {
        var i = Math.floor( Math.random() * 10 % 4 );
        var types = 'info success warning danger'.split(' ');
        var type = types[ i ];

        Pure.note( "Hey there ;)", type );
    }
};
var Select3 = {
    onChange: function( value ) {
        this.data.selected = value;
    }
};
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
var Tabs2 = {
    onChange: function( key ) {
        this.data.currentTabKey = key;
        this.$update();
    }
};
export default {"Box":[void 0],"Breadcrumb":[void 0],"Button":[void 0,void 0,void 0,void 0],"Checkbox":[void 0,void 0,void 0],"Countdown":[void 0,void 0,void 0,void 0],"ElementTree":[ElementTree0],"Form":[void 0,void 0,void 0],"Icon":[void 0],"Input":[void 0,void 0,void 0,void 0,void 0,void 0],"Modal":[void 0],"Note":[void 0,Note1],"Pagination":[void 0],"Radio":[void 0,void 0,void 0],"Select":[void 0,void 0,void 0,Select3],"Spinner":[void 0,void 0],"Switch":[void 0,void 0],"Table":[Table0,Table1],"Tabs":[void 0,void 0,Tabs2],"Textarea":[void 0,void 0]}