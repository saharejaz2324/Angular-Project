import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import apiservice from '../Services/apiservice';
let LoglevelListComponent = class LoglevelListComponent {
    constructor(apiservice) {
        this.apiservice = apiservice;
    }
    ngOnInit() {
        this.apiservice.getlogs().subscribe(data => {
            console.log('Response result', this.logss = data);
        });
    }
    searchLogs(formData) {
        this.apiservice.searchLogs(formData.searchdata).subscribe(data => {
            console.log('Response result', this.logss = data);
        });
    }
    remove(data) {
        console.log(data);
        this.apiservice.remove(data.created, data.type).subscribe(data => {
            this.delres = data;
            console.log('Delete result', this.delres);
            this.ngOnInit();
        });
    }
};
LoglevelListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-loglevel-list',
        templateUrl: './loglevel-list.component.html',
        styleUrls: ['./loglevel-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [apiservice])
], LoglevelListComponent);
export { LoglevelListComponent };
//# sourceMappingURL=loglevel-list.component.js.map