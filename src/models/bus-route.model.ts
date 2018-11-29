import {Entity, model, property} from '@loopback/repository';

@model()
export class BusRoute extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  name?: string;

  constructor(data?: Partial<BusRoute>) {
    super(data);
  }
}
