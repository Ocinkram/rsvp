import { generateClient } from "aws-amplify/data";

export const createUser = () => {
    const client = generateClient()

    client.models.Users.create({
        name: "Nico Mark Laguitan",
    });
}

export const createUserLog = ({userId}) => {
    const client = generateClient()

    client.models.UserLogs.create({
        userId
    });
}

export const createResponse = ({userId, name, willAttend, guestNumber, message}) => {
    const client = generateClient()

    client.models.Response.create({
        userId,
        name,
        willAttend,
        guestNumber,
        message
    });
}

export const updateResponse = ({userId, name, willAttend, guestNumber, message}) => {
    const client = generateClient()

    client.models.Response.update({
        userId,
        name,
        willAttend,
        guestNumber,
        message
    });
}