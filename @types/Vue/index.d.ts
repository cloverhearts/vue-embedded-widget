declare namespace Vue {
    export const enum PropsTypes {
        String = 'String',
        Number = 'Number',
        Boolean = 'Boolean',
        Array = 'Array',
        Object = 'Object',
        Function = 'Function',
        Promise = 'Promise'
    }
    interface ComponentProps {
        [key: string]: ComponentType
    }

    interface ComponentType {
        [type: string]: ComponentTypeName
    }

    interface ComponentTypeName {
        name: string
    }

    interface Component {
        name:string,
        props: ComponentProps
    }
}
