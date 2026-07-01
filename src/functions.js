import { generateClient } from "aws-amplify/data";

export const createUser = async ({ name }) => {
    const client = generateClient()

    return await client.models.Users.create({
        name,
    });
}

export const readUsers = async () => {
    const client = generateClient();

    return await client.models.Users.list();
};

export const readUser = async ({userId}) => {
    const client = generateClient();
    const res = await client.models.Users.get({id: userId});
    return res.data
};

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
    const res = await client.models.Responses.get({ userId });
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

export const readResponses = async () => {
    const client = generateClient();

    const res = await client.models.Responses.list();

    return res.data;
};