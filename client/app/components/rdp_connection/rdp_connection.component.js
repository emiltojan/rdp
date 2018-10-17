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
var core_1 = require("@angular/core");
var rdp_service_1 = require("../../services/rdp.service");
var RdpConnectionComponent = (function () {
    function RdpConnectionComponent(rdpService) {
        var _this = this;
        this.rdpService = rdpService;
        this.rdp = [];
        this.rdpService.getDC().subscribe(function (dc_data) {
            _this.dc_data = dc_data;
        });
    }
    RdpConnectionComponent.prototype.countryDropDownChanged = function (val) {
        console.log(val);
        this.dcs = this.dc_data.find(function (cc) { return cc.country_code == val; }).dc;
    };
    RdpConnectionComponent.prototype.connectRdp = function (event) {
        var _this = this;
        event.preventDefault();
        var newConnection = {
            userid: this.userid,
            dc: this.dc,
            node: this.node,
            country_code: this.country_code
        };
        // console.log(newConnection);
        console.log(this.rdpService.connectRdp(newConnection));
        this.rdpService.connectRdp(newConnection).subscribe(function (response) {
            _this.fileName = { fileName: response._body };
        }, function (err) { console.log(err); }, function () {
            console.log(_this.fileName.fileName);
            _this.removeFile(_this.fileName);
        });
        this.userid = '';
        this.country_code = '';
        this.node = '';
        this.dc = '';
        console.log("End of function");
    };
    RdpConnectionComponent.prototype.removeFile = function (fileName) {
        console.log("entering function" + fileName);
        this.rdpService.removeFile(fileName).subscribe(function (response) {
            console.log(response);
        });
    };
    return RdpConnectionComponent;
}());
RdpConnectionComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'rdp-connection',
        templateUrl: 'rdp-connection.component.html',
        providers: [rdp_service_1.RdpService]
    }),
    __metadata("design:paramtypes", [rdp_service_1.RdpService])
], RdpConnectionComponent);
exports.RdpConnectionComponent = RdpConnectionComponent;
//# sourceMappingURL=rdp_connection.component.js.map