import { Stack } from "@mui/material"
import { AddUser } from "./Admin"
import UserList from "./List"
import ResponsesList from "./Responses"

export const Data = () => {
    return (
        <Stack>
            <AddUser />
            <UserList />
        </Stack>
    )
}