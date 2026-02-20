import { createContext } from "react";

export type FormContextType = {
    data: {
        title: string
        body: string
        userId: number
    }
    setData: (newData: {title?: string, body?: string, userId?: number}) => void 
}

const FormContext = createContext<FormContextType>({
    data: {
        title: "",
        body: "",
        userId: 0
    },
    setData: () => ({} as {title: string, body: string, userId: number})
})

export default FormContext