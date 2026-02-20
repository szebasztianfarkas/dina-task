import { useContext } from "react"
import FormContext from "./FormContext"

const useForm = () => {
    const form = useContext(FormContext)
    return form
}

export default useForm