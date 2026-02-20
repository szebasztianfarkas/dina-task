import { Button, ButtonGroup } from "@mui/material"
import Paper from "@mui/material/Paper"
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import useForm from "../hooks/useForm";

const FormNav = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const [activeButtons, setActiveButtons] = useState<string[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const {data} = useForm()

    useEffect(() => {
        const pathname = location.pathname

        switch (pathname) {
            case "/step-1":
                setActiveButtons(["next"])
                break;
            case "/step-2":
                setActiveButtons(["previous", "submit"])
                break;
        }
    }, [])

    const submit = () => {
        if (!data.title) alert("Blog post has no title")
        if (!data.body) alert("Blog post has no body")
        setIsLoading(true)

        axios.post("https://jsonplaceholder.typicode.com/posts", {
            data
        })
        .then((res) => {
            alert("Data successfully submited!")
            console.log(res)
        })
        .catch(() => {
            alert("Try again later")
        })
        .finally(() => {
            setIsLoading(false)
        })
    }

    return (
        <Paper sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: "5px"
        }}>
            <ButtonGroup>
                {
                    activeButtons.map((e) => {
                        return e
                    })
                }
                {
                    (activeButtons.includes("previous")) &&
                    <Button
                        onClick={() => {
                            navigate("/step-1")
                        }}
                    >
                        Previous
                    </Button>
                }
                {
                    (activeButtons.includes("next")) &&
                    <Button
                        onClick={() => {
                            navigate("/step-2")
                        }}
                    >
                        Next
                    </Button>
                }
                {
                    (activeButtons.includes("submit")) &&
                    <Button
                        disabled={!!isLoading}
                        onClick={() => {
                            submit()
                        }}
                    >
                        Submit
                    </Button>
                }
            </ButtonGroup>
        </Paper>
    )
}

export default FormNav