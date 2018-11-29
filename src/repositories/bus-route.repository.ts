import {DefaultCrudRepository, juggler, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {PgDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {BusRoute, Waypoint} from '../models'
import { WaypointRepository } from './waypoint.repository';


export class BusRouteRepository extends DefaultCrudRepository<
  BusRoute,
  typeof BusRoute.prototype.id
> {
  public readonly waypoints: HasManyRepositoryFactory<
    Waypoint,
    typeof Waypoint.prototype.id
  >;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
    @repository.getter(WaypointRepository)
    protected waypointRepositoryGetter: Getter<WaypointRepository>,
  ) {
    super(BusRoute, dataSource);
    this.waypoints = this._createHasManyRepositoryFactoryFor(
      'waypoints',
      waypointRepositoryGetter,
    )
  }
}
