class NamedComponent implements Component {
    private readonly _name: string;
    private readonly _component: Vue.Component;

    constructor(name: string, component: Vue.Component) {
        this._name = name;
        this._component = component
    }

    get name(): string {
        return this._name
    }

    get component(): Vue.Component {
        return this._component
    }

    mount(VueObject: any, queryString?: string): void {
        document.querySelectorAll(`${queryString || this.name}`).forEach(ele => {
            console.log(this.component);
            Object.keys(this.component.props).map(key => {
                // @ts-ignore
                // console.log('keys ', key, this.component.props[key], this.component.props[key].type.name, this.component.props[key].type(), 'end')
            });
            new VueObject({props: { myname: 'dfsdfsdf'}, render: (h: (comp: any, obj:any) => {}) => h({ ...this.component, myname: 'hoho'}, { props: {myname: 'arg'}})}).$mount(ele)
        })
    }
}

export default NamedComponent;