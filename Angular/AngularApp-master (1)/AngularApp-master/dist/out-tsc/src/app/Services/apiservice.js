import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let apiservice = class apiservice {
    constructor(http) {
        this.http = http;
        this.Api = 'https://localhost:44347/api';
        this.Logs_Api = `${this.Api}/LoggingErrors`;
    }
    getlogs() {
        return this.http.get(this.Logs_Api);
    }
    searchLogs(searchdata) {
        return this.http.get(`${this.Logs_Api}?searchData=${searchdata}`);
    }
    remove(created, type) {
        return this.http.delete(`${this.Logs_Api}?entity=${created}&type=${type}`);
    }
};
apiservice = tslib_1.__decorate([
    Injectable({
        providedIn: 'root',
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], apiservice);
export default apiservice;
//# sourceMappingURL=apiservice.js.map