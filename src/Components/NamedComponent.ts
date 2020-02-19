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

    _getTypedAttribute(ele: Element, key: string):any {
        const value:string = ele.getAttribute(key) || ''
        const definedMeta = this.component.props[key] || { type: null }
        const attributeType:string = definedMeta && definedMeta.type ? definedMeta.type.name : 'String'

        try {
            if (attributeType === Vue.PropsTypes.String) {
                return String(value)
            } else if (attributeType === Vue.PropsTypes.Number) {
                return Number(value)
            } else if (attributeType === Vue.PropsTypes.Boolean) {
                return eval(`${value.toLowerCase()}`)
            } else {
                return eval(`${value}`)
            }
        } catch {
            return String(value)
        }
    }

    mount(VueObject: any, queryString?: string): void {
        document.querySelectorAll(`${queryString || this.name}`).forEach((ele:Element) => {
            const props = ele.getAttributeNames().reduce((props: { [key: string] : any }, key) => {
                props[key] = this._getTypedAttribute(ele, key)
                return props
            }, {})
            new VueObject({
                render: (h: (comp: any, obj: any) => {}) => h({
                    ...this.component
                }, {props})
            }).$mount(ele)
        })
    }
}

export default NamedComponent;