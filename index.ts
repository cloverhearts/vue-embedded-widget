class NamedComponent implements Component {
    private readonly _name:string;
    private readonly _component:Vue.Component;

    constructor(name:string, component:Vue.Component) {
        this._name = name;
        this._component = component
    }

    get name(): string {
        return this._name
    }

    get component(): Vue.Component {
        return this._component
    }
}

export default (vue:Vue.VueObject) => {
    const list:Array<Component> = [];
    return {
        registerComponent: (component:Vue.Component, name?:string) => {
            list.push(new NamedComponent( name || component.name, component))
        },
        printList: ():void => {
            console.log(list, vue)
        }
    }
}