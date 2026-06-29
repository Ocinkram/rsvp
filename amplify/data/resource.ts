import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({

  Users: a
    .model({
      name: a.string().required(),
    })
    .authorization((allow) => [allow.guest()]),

  UserLogs: a
    .model({
      userId: a.id().required(),
    })
    .authorization((allow) => [allow.guest()]),

  Responses: a
    .model({
      userId: a.id().required(),
      name: a.string(),
      willAttend: a.boolean(),
      guestNumber: a.integer(),
      message: a.string(),
    })
    .identifier(['userId'])
    .authorization((allow) => [allow.guest()])

});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
