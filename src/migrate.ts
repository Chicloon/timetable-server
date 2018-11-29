import {DataSource, Repository} from '@loopback/repository';
import {TodoListApplication} from './index';
import {TodoRepository, TodoListRepository} from './repositories';
import {PgDataSource} from './datasources';

export async function dsMigrate(app: TodoListApplication) {
  // const ds = await app.get<DataSource>('datasources.db');
  const ds = await app.get<DataSource>('datasources.pg');
  const todoRepo = await app.getRepository(TodoRepository);
  const todoListRepo = await app.getRepository(TodoListRepository);

  await ds.automigrate();
  console.log('DB migrated');
}

export async function dsUpdate(app: TodoListApplication) {
  const ds = await app.get<DataSource>('datasources.pg');
  const todoRepo = await app.getRepository(TodoRepository);
  const todoListRepo = await app.getRepository(TodoListRepository);

  await ds.autoupdate();
  console.log('DB updated');
}
