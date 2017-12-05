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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.persistedList = [];
        this.isPalindrome = false;
    }
    DataService.prototype.getPersistedList = function () {
        var _this = this;
        return this.http.get("/api/history")
            .map(function (result) { return _this.persistedList = result.json(); });
    };
    DataService.prototype.checkPalindrome = function (entry) {
        var _this = this;
        return this.http.get("/api/palindrome/check", entry)
            .map(function (result) { return _this.isPalindrome = result.json(); });
    };
    DataService.prototype.AddEntryToPersistedList = function (entry) {
        return this.http.post("/api/palindrome", entry)
            .map(function (response) {
            return true;
        });
    };
    return DataService;
}());
DataService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], DataService);
exports.DataService = DataService;
//# sourceMappingURL=dataService.js.map