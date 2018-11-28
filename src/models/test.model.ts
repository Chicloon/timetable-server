import {model, property} from '@loopback/repository';
import {MongoEntity} from '.';

@model()
export class Test extends MongoEntity {
  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<Test>) {
    super(data);
  }
}
