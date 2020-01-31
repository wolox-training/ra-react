/* eslint-disable camelcase */
import { Serializer } from 'cerealizr';

export const bookSerializer = new Serializer({
  descriptor: {
    genre: 'genre',
    publisher: 'editorial',
    year: 'publicationYear',
    image_url: 'imageUrl'
  },
  mapAllValues: false
});
