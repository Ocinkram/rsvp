import { Button, Stack } from "@mui/material"
import { Components } from "./components/Index"
import { AddUser } from "./admin/Admin.jsx"
import UserList from "./admin/List.jsx"
import { Data } from "./admin/index.jsx"
import { Route, Routes } from "react-router-dom"
import ResponsesList from "./admin/Responses.jsx"

export const Core = () => {
            

    return (
        <Stack>
            <Routes>
                <Route path="/responses" element={<ResponsesList/>} />
                <Route path="/invite" element={<Data />} />
                <Route path="/guest/:id" element={<Components/> } />
                <Route path="*" element={<Components/> } />
            </Routes>
        </Stack>
    )
}