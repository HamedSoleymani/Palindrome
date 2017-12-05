webpackJsonp(["main"],{

/***/ "../../../../../ClientApp/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../ClientApp/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Palindrome Checker';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-component',
            template: __webpack_require__("../../../../../ClientApp/app/app.component.html"),
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../ClientApp/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../ClientApp/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_checkPalindrome_component__ = __webpack_require__("../../../../../ClientApp/app/home/checkPalindrome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__history_history_component__ = __webpack_require__("../../../../../ClientApp/app/history/history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__history_persistedItems_component__ = __webpack_require__("../../../../../ClientApp/app/history/persistedItems.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var routes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* Home */] },
    { path: "history", component: __WEBPACK_IMPORTED_MODULE_6__history_history_component__["a" /* History */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_5__home_checkPalindrome_component__["a" /* CheckPalindrome */],
                __WEBPACK_IMPORTED_MODULE_7__history_persistedItems_component__["a" /* PersistedItems */],
                __WEBPACK_IMPORTED_MODULE_6__history_history_component__["a" /* History */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for Debugging of the Routes
                })
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__shared_dataService__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<persisted-items></persisted-items>"

/***/ }),

/***/ "../../../../../ClientApp/app/history/history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return History; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var History = (function () {
    function History() {
    }
    History = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "history",
            template: __webpack_require__("../../../../../ClientApp/app/history/history.component.html")
        })
    ], History);
    return History;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/history/persistedItems.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\r\n    <thead>\r\n        <tr>\r\n            <th>Entry</th>\r\n            <th>Created Date</th>\r\n        </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let p of persistedItems\">\r\n        <th>{{ p.entry }}</th>\r\n        <th>{{ p.createdDate | date }}</th>\r\n    </tr>\r\n\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../ClientApp/app/history/persistedItems.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersistedItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PersistedItems = (function () {
    function PersistedItems(data) {
        this.data = data;
        this.persistedItems = [];
    }
    PersistedItems.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getPersistedList()
            .subscribe(function () { return _this.persistedItems = _this.data.persistedList; });
    };
    PersistedItems = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "persisted-items",
            template: __webpack_require__("../../../../../ClientApp/app/history/persistedItems.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */]])
    ], PersistedItems);
    return PersistedItems;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/home/checkPalindrome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-md-4 col-md-offset-4\">\r\n        <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{ errorMessage }}</div>\r\n        <form (submit)=\"onCheckPalindrome()\" #theForm=\"ngForm\" novalidate>\r\n            <div class=\"form-group\">\r\n                <label for=\"entry\">Please enter a string or phrase:</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"entry\" [(ngModel)]=\"entry\" required />\r\n                <div class=\"text-danger\" *ngIf=\"entry.touched && entry.errors.required\">Entry is required!</div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input type=\"submit\" class=\"btn btn-success\" value=\"CheckPalindrome\" [disabled]=\"theForm.invalid\" />\r\n            </div>\r\n            <div *ngIf=\"result\" class=\"info alert-info\">{{ result }}</div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/home/checkPalindrome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPalindrome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_dataService__ = __webpack_require__("../../../../../ClientApp/app/shared/dataService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    CheckPalindrome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "check-palindrome",
            template: __webpack_require__("../../../../../ClientApp/app/home/checkPalindrome.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_dataService__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CheckPalindrome);
    return CheckPalindrome;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <h2>\r\n        Check for Palindrome\r\n    </h2>\r\n    <hr />\r\n    <check-palindrome></check-palindrome>        \r\n</div>"

/***/ }),

/***/ "../../../../../ClientApp/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Home = (function () {
    function Home() {
    }
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "home",
            template: __webpack_require__("../../../../../ClientApp/app/home/home.component.html")
        })
    ], Home);
    return Home;
}());



/***/ }),

/***/ "../../../../../ClientApp/app/shared/dataService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


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
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../ClientApp/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../ClientApp/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../ClientApp/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../ClientApp/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../ClientApp/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map