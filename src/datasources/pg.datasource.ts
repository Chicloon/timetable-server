import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './pg.datasource.json';

export class PgDataSource extends juggler.DataSource {
  static dataSourceName = 'pg';

  constructor(
    @inject('datasources.config.pg', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
