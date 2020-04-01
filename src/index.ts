import NamedComponent from "./Components/NamedComponent";

export default (vue:any) => {
    const list:Array<Component> = [];
    return {
        registerComponent: (component:Vue.Component, name?:string) => {
            list.push(new NamedComponent( name || component.name, component))
        },
        printList: ():void => {
            console.log(list, vue)
        },
        mount: ():void => {
            list.forEach(comp => comp.mount(vue))
        }
    }
}