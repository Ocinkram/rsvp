import { generateClient } from "aws-amplify/data";

export const createUser = ({ name }) => {
    const client = generateClient()

    client.models.Users.create({
        name,
    });
}

export const readUser = ({ id }) => {
    const client = generateClient()

    client.models.Users.get({ id })
}

export const createUserLog = ({ userId }) => {
    const client = generateClient()

    client.models.UserLogs.create({
        userId
    });
}

export const createResponse = async ({ userId, name, willAttend, guestNumber, message, }) => {
    const client = generateClient();
    return await client.models.Responses.create({
        userId,
        name,
        willAttend,
        guestNumber,
        message,
    });
};

export const readResponse = async ({ userId }) => {
    const client = generateClient()
    const res =  await client.models.Responses.get({ userId });
    return res.data
}

export const updateResponse = async ({ userId, name, willAttend, guestNumber, message }) => {
    const client = generateClient()
    return await client.models.Responses.update({
        userId,
        name,
        willAttend,
        guestNumber,
        message
    });
}