import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoglevelListComponent } from './loglevel-list/loglevel-list.component';
const routes = [
    { path: 'loglist', component: LoglevelListComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
export const routingComponents = [LoglevelListComponent];
//# sourceMappingURL=app-routing.module.js.map