import {Entity, model, property} from '@loopback/repository';

@model()
export class MongoEntity extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  constructor(data?: Partial<MongoEntity>) {
    super(data);
  }
}
