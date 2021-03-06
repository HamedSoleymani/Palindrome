"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var checkPalindrome_component_1 = require("./home/checkPalindrome.component");
var history_component_1 = require("./history/history.component");
var persistedItems_component_1 = require("./history/persistedItems.component");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var dataService_1 = require("./shared/dataService");
var routes = [
    { path: "", component: home_component_1.Home },
    { path: "history", component: history_component_1.History },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.Home,
            checkPalindrome_component_1.CheckPalindrome,
            persistedItems_component_1.PersistedItems,
            history_component_1.History
        ],
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot(routes, {
                useHash: true,
                enableTracing: false // for Debugging of the Routes
            })
        ],
        providers: [
            dataService_1.DataService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map