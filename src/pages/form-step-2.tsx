import { TextField } from '@mui/material'
import useForm from '../hooks/useForm'
import Form from '../components/Form'

function FormStep1() {
    const { setData, data } = useForm()

    const handleChange = (v: string) => {
        setData({body: v})
    }

    return (
        <Form>
            <TextField
                variant='outlined'
                sx={{
                    width: "100%"
                }}
                label="Body"
                error={!data.body}
                helperText={
                    data.body? "" : "Body is required"
                }
                multiline
                minRows={4}
                value={data.body}
                onChange={(v) => handleChange(v.target.value)}
            />
        </Form>
    )
}

export default FormStep1
