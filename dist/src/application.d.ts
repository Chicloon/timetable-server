import { ApplicationConfig } from '@loopback/core';
import { RestApplication } from '@loopback/rest';
declare const TodoListApplication_base: (new (...args: any[]) => {
    [x: string]: any;
    projectRoot: string;
    bootOptions?: import("@loopback/boot/dist/src/interfaces").BootOptions | undefined;
    boot(): Promise<void>;
    booters(...booterCls: import("@loopback/context/dist/src/value-promise").Constructor<import("@loopback/boot/dist/src/interfaces").Booter>[]): import("@loopback/context/dist/src/binding").Binding<any>[];
    component(component: import("@loopback/context/dist/src/value-promise").Constructor<{}>): void;
    mountComponentBooters(component: import("@loopback/context/dist/src/value-promise").Constructor<{}>): void;
}) & (new (...args: any[]) => {
    [x: string]: any;
    repository(repo: import("@loopback/repository/dist/src/common-types").Class<import("@loopback/repository/dist/src/repositories/repository").Repository<any>>): void;
    getRepository<R extends import("@loopback/repository/dist/src/repositories/repository").Repository<any>>(repo: import("@loopback/repository/dist/src/common-types").Class<R>): Promise<R>;
    dataSource(dataSource: import("loopback-datasource-juggler/types/datasource").DataSource | import("@loopback/repository/dist/src/common-types").Class<import("loopback-datasource-juggler/types/datasource").DataSource>, name?: string | undefined): void;
    component(component: import("@loopback/repository/dist/src/common-types").Class<{}>): void;
    mountComponentRepositories(component: import("@loopback/repository/dist/src/common-types").Class<{}>): void;
}) & typeof RestApplication;
export declare class TodoListApplication extends TodoListApplication_base {
    constructor(options?: ApplicationConfig);
}
export {};
