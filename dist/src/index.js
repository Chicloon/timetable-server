"use strict";
// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.TodoListApplication = application_1.TodoListApplication;
const migrate_1 = require("./migrate");
async function main(options = {}) {
    const app = new application_1.TodoListApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    // The call to dsMigrate(), or replace with dsUpdate()
    // await dsMigrate(app);
    await migrate_1.dsUpdate(app);
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map