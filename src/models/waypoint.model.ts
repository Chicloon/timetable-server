import {Entity, model, property, belongsTo} from '@loopback/repository';
import {BusRoute} from './bus-route.model'

@model()
export class Waypoint extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  location: string;

  @belongsTo(()=> BusRoute)
  busRouteId: number;

  constructor(data?: Partial<Waypoint>) {
    super(data);
  }
}
