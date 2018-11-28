import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {MongoEntity} from '../models';
const ObjectId = require('mongodb').ObjectId

export class MongoEntityRepository<E extends MongoEntity, ID>
  extends DefaultCrudRepository<E, ID> {

  async create(entity: E): Promise<E> {
    entity.id = new ObjectId()
    return super.create(entity)
  }
}