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
import {BusRoute} from '../models';
import {BusRouteRepository} from '../repositories';

export class BusRouteController {
  constructor(
    @repository(BusRouteRepository)
    public busRouteRepository : BusRouteRepository,
  ) {}

  @post('/bus-routes', {
    responses: {
      '200': {
        description: 'BusRoute model instance',
        content: {'application/json': {schema: {'x-ts-type': BusRoute}}},
      },
    },
  })
  async create(@requestBody() busRoute: BusRoute): Promise<BusRoute> {
    return await this.busRouteRepository.create(busRoute);
  }

  @get('/bus-routes/count', {
    responses: {
      '200': {
        description: 'BusRoute model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(BusRoute)) where?: Where,
  ): Promise<Count> {
    return await this.busRouteRepository.count(where);
  }

  @get('/bus-routes', {
    responses: {
      '200': {
        description: 'Array of BusRoute model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': BusRoute}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(BusRoute)) filter?: Filter,
  ): Promise<BusRoute[]> {
    return await this.busRouteRepository.find(filter);
  }

  @patch('/bus-routes', {
    responses: {
      '200': {
        description: 'BusRoute PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() busRoute: BusRoute,
    @param.query.object('where', getWhereSchemaFor(BusRoute)) where?: Where,
  ): Promise<Count> {
    return await this.busRouteRepository.updateAll(busRoute, where);
  }

  @get('/bus-routes/{id}', {
    responses: {
      '200': {
        description: 'BusRoute model instance',
        content: {'application/json': {schema: {'x-ts-type': BusRoute}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<BusRoute> {
    return await this.busRouteRepository.findById(id);
  }

  @patch('/bus-routes/{id}', {
    responses: {
      '204': {
        description: 'BusRoute PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() busRoute: BusRoute,
  ): Promise<void> {
    await this.busRouteRepository.updateById(id, busRoute);
  }

  @del('/bus-routes/{id}', {
    responses: {
      '204': {
        description: 'BusRoute DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.busRouteRepository.deleteById(id);
  }
}
