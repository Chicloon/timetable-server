import {DefaultCrudRepository, juggler, BelongsToAccessor, repository} from '@loopback/repository';
import {Waypoint, BusRoute} from '../models';
import {PgDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { BelongsTo } from 'loopback-datasource-juggler';
import { BusRouteRepository } from './bus-route.repository';

export class WaypointRepository extends DefaultCrudRepository<
  Waypoint,
  typeof Waypoint.prototype.id
> {
  public readonly busRoute: BelongsToAccessor<
    BusRoute,
    typeof Waypoint.prototype.id
  >;

  constructor(
    @inject('datasources.pg') dataSource: PgDataSource,
    @repository.getter('BusRoutesRepository')
    protected busRouteRepositoryGetter: Getter<BusRouteRepository>,
  ) {
    super(Waypoint, dataSource);

    this.busRoute = this._createBelongsToAccessorFor(
      'busRoute',
      busRouteRepositoryGetter,
    )
  }
}
