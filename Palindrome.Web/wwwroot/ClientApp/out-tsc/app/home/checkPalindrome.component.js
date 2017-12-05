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
var dataService_1 = require("../shared/dataService");
var router_1 = require("@angular/router");
var CheckPalindrome = (function () {
    function CheckPalindrome(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.result = "";
        this.entry = "";
    }
    CheckPalindrome.prototype.onCheckPalindrome = function () {
        var _this = this;
        this.data.checkPalindrome(this.entry)
            .subscribe(function (success) {
            if (!!success) {
                _this.result = "Is Palindrome !!";
                // insert the entry into persisted list
                _this.data.AddEntryToPersistedList(_this.entry)
                    .subscribe(function (success) {
                    if (success) {
                    }
                }, function (err) { return _this.errorMessage = "Failed to Save the Palindrome entry into persisted items."; });
            }
            else {
                _this.result = "Is NOT Palindrome.";
            }
        }, function (err) { return _this.errorMessage = "Failed to check wheather entry is Palindrome or not"; });
    };
    return CheckPalindrome;
}());
CheckPalindrome = __decorate([
    core_1.Component({
        selector: "check-palindrome",
        templateUrl: "checkPalindrome.component.html"
    }),
    __metadata("design:paramtypes", [dataService_1.DataService, router_1.Router])
], CheckPalindrome);
exports.CheckPalindrome = CheckPalindrome;
//# sourceMappingURL=checkPalindrome.component.js.map