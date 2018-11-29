import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Waypoint} from '../models';
import {WaypointRepository} from '../repositories';

export class WaypointController {
  constructor(
    @repository(WaypointRepository)
    public waypointRepository : WaypointRepository,
  ) {}

  @post('/waypoints', {
    responses: {
      '200': {
        description: 'Waypoint model instance',
        content: {'application/json': {schema: {'x-ts-type': Waypoint}}},
      },
    },
  })
  async create(@requestBody() waypoint: Waypoint): Promise<Waypoint> {
    return await this.waypointRepository.create(waypoint);
  }

  @get('/waypoints/count', {
    responses: {
      '200': {
        description: 'Waypoint model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Waypoint)) where?: Where,
  ): Promise<Count> {
    return await this.waypointRepository.count(where);
  }

  @get('/waypoints', {
    responses: {
      '200': {
        description: 'Array of Waypoint model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Waypoint}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Waypoint)) filter?: Filter,
  ): Promise<Waypoint[]> {
    return await this.waypointRepository.find(filter);
  }

  @patch('/waypoints', {
    responses: {
      '200': {
        description: 'Waypoint PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() waypoint: Waypoint,
    @param.query.object('where', getWhereSchemaFor(Waypoint)) where?: Where,
  ): Promise<Count> {
    return await this.waypointRepository.updateAll(waypoint, where);
  }

  @get('/waypoints/{id}', {
    responses: {
      '200': {
        description: 'Waypoint model instance',
        content: {'application/json': {schema: {'x-ts-type': Waypoint}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Waypoint> {
    return await this.waypointRepository.findById(id);
  }

  @patch('/waypoints/{id}', {
    responses: {
      '204': {
        description: 'Waypoint PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() waypoint: Waypoint,
  ): Promise<void> {
    await this.waypointRepository.updateById(id, waypoint);
  }

  @del('/waypoints/{id}', {
    responses: {
      '204': {
        description: 'Waypoint DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.waypointRepository.deleteById(id);
  }
}
