import { Button, Stack } from "@mui/material"
import { Components } from "./components/Index"
import { AddUser } from "./admin/Admin.jsx"
import UserList from "./admin/List.jsx"
import { Data } from "./admin/index.jsx"
import { Route, Routes } from "react-router-dom"

export const Core = () => {
    return (
        <Stack>
            <Routes>
                <Route path="/" element={<Components/> } />
                <Route path="/admin" element={<Data />} />
            </Routes>
        </Stack>
    )
}