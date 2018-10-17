"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var RdpService = (function () {
    function RdpService(http) {
        this.http = http;
        console.log("Rdp Service Initialized...");
    }
    RdpService.prototype.connectRdp = function (newConnection) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/rdp', JSON.stringify(newConnection), { headers: headers });
    };
    RdpService.prototype.getDC = function () {
        return this.http.get('./assets/data.json')
            .map(function (res) { return res.json(); });
    };
    RdpService.prototype.removeFile = function (fileName) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('/api/removeFile', JSON.stringify(fileName), { headers: headers });
    };
    return RdpService;
}());
RdpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], RdpService);
exports.RdpService = RdpService;
//# sourceMappingURL=rdp.service.js.map