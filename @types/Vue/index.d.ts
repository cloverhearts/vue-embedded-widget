declare namespace Vue {
    enum PropsTypes {
        String = 'String',
        Number = 'Number',
        Boolean = 'Boolean',
        Array = 'Array',
        Object = 'Object',
        Function = 'Function',
        Promise = 'Promise'
    }
    interface Component {
        name:string,
        props:Object
    }
}