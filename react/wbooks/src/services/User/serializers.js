import { Serializer, SnakecaseSerializer, setSnakecaseKey } from 'cerealizr';

const userSerializer = new Serializer({
  descriptor: {
    passwordConfirmation: setSnakecaseKey(),
    name: 'first_name',
    lastname: 'last_name',
    locale: 'locale',
    password: 'password',
    email: 'email'
  }
});

export const serializer = new SnakecaseSerializer({
  descriptor: {
    user: value => userSerializer.serialize(value)
  }
});
