import { TextField } from '@mui/material'
import useForm from '../hooks/useForm'
import Form from '../components/Form'

function FormStep1() {
    const { setData, data } = useForm()

    const handleChange = (v:string) => {
        setData({title: v})
    }

    return (
        <Form>
            <TextField
                variant='outlined'
                label="Title"
                error={!data.title}
                helperText={
                    data.title? "" : "Title is required"
                }
                value={data.title}
                onChange={(v) => handleChange(v.target.value)}
            />
        </Form>
    )
}

export default FormStep1
