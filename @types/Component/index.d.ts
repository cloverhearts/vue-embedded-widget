declare interface Component {
    name:string
    component:Vue.Component
    mount(VueObject?:any, queryString?:string):void
}
