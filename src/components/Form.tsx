import { Box, Divider, Paper } from "@mui/material"
import FormNav from "./FormNav"

type FormProps = {
    children: React.ReactElement
}

const Form = (props: FormProps) => {
    return (
        <Box sx={{
            width: "50vw",
            minHeight: "100vh",
            margin: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Paper sx={{
                padding: "5px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                <Divider textAlign='left' sx={{ marginBottom: "10px" }}>
                    New Blog
                </Divider>
                <Paper sx={{
                    width: "100%",
                    padding: "5px",
                    marginBottom: "5px"
                }}>
                    {props.children}
                </Paper>
                <FormNav />
            </Paper>
        </Box>
    )
}

export default Form