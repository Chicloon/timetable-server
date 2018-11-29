import {Entity, model, property, hasMany} from '@loopback/repository';
import { Waypoint } from './waypoint.model';

@model()
export class BusRoute extends Entity {
  @property({
    type: 'string',
  })
  name?: string;

  @property({
    type: 'number',
    id: true,
  })
  id?: number;

  @hasMany(()=> Waypoint)
  waypoints: Waypoint[];

  constructor(data?: Partial<BusRoute>) {
    super(data);
  }
}
