import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Test} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class TestRepository extends DefaultCrudRepository<
  Test,
  typeof Test.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Test, dataSource);
  }
}
