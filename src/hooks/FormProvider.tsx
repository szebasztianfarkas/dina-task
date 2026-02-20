import { useState } from "react"
import FormContext from "./FormContext"

type ProviderProps = {
    children: React.ReactElement
}

const FormProvider = (props: ProviderProps) => {
    const [data, setData] = useState({
        title: "",
        body: "",
        userId: 1
    })

    const setDataLoc = (newData: {
        title?: string,
        body?: string,
        userId?: number
    }) => {
        setData({...data, ...newData})
    }

    return (
        <FormContext.Provider value={{
            data,
            setData: setDataLoc,
        }}>
            {props.children}
        </FormContext.Provider>
    )
}

export default FormProvider