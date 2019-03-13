(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _components_games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/games/game-details/game-details.component */ "./src/app/components/games/game-details/game-details.component.ts");





var routes = [
    { path: 'games', component: _components_games_games_component__WEBPACK_IMPORTED_MODULE_3__["GamesComponent"] },
    { path: 'game/:id', component: _components_games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_4__["GameDetailsComponent"] },
    { path: '', redirectTo: '/games', pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gamelist';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_games_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/games/game-list/game-list.component */ "./src/app/components/games/game-list/game-list.component.ts");
/* harmony import */ var _components_games_games_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/games/games.component */ "./src/app/components/games/games.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_games_game_list_game_card_game_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/games/game-list/game-card/game-card.component */ "./src/app/components/games/game-list/game-card/game-card.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/games/game-details/game-details.component */ "./src/app/components/games/game-details/game-details.component.ts");
/* harmony import */ var _components_games_filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/games/filter-form/filter-form.component */ "./src/app/components/games/filter-form/filter-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_games_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__["GameListComponent"],
                _components_games_games_component__WEBPACK_IMPORTED_MODULE_5__["GamesComponent"],
                _components_games_game_list_game_card_game_card_component__WEBPACK_IMPORTED_MODULE_7__["GameCardComponent"],
                _components_games_game_details_game_details_component__WEBPACK_IMPORTED_MODULE_9__["GameDetailsComponent"],
                _components_games_filter_form_filter_form_component__WEBPACK_IMPORTED_MODULE_10__["FilterFormComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/classes/Game.ts":
/*!*********************************!*\
  !*** ./src/app/classes/Game.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Game = /** @class */ (function () {
    function Game(id, name, popularity, logo) {
        this.id = id;
        this.name = name;
        this.popularity = popularity;
        this.logo = logo;
    }
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./src/app/components/games/filter-form/filter-form.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/games/filter-form/filter-form.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"filterForm\">\n  <div class=\"form-row align-items-center\">\n    <div class=\"form-group col-md-9\">\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        placeholder=\"digite o nome do jogo\"\n        formControlName=\"name\"\n      >\n    </div>\n    <div class=\"form-group col-md-3\">\n      <div class=\"form-check form-check-inline\">\n        <input type=\"radio\" id=\"checkAsc\" name=\"filterOrdenation\" value=\"asc\" class=\"form-check-input\">\n        <label for=\"checkAsc\" class=\"form-check-label\">crescente</label>\n      </div>\n      <div class=\"form-check form-check-inline\">\n        <input type=\"radio\" id=\"checkDesc\" name=\"filterOrdenation\" value=\"desc\" class=\"form-check-input\">\n        <label for=\"checkDesc\" class=\"form-check-label\">decrescente</label>\n      </div>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/games/filter-form/filter-form.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/games/filter-form/filter-form.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZXMvZmlsdGVyLWZvcm0vZmlsdGVyLWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/components/games/filter-form/filter-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/games/filter-form/filter-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: FilterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterFormComponent", function() { return FilterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var FilterFormComponent = /** @class */ (function () {
    function FilterFormComponent() {
        this.debounceTime = 500;
        this.filterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            ordering: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.onFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FilterFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var nameField = this.filterForm.get('name');
        nameField.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime))
            .subscribe(function (value) {
            _this.onFilter.emit(value);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterFormComponent.prototype, "debounceTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], FilterFormComponent.prototype, "onFilter", void 0);
    FilterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-filter-form',
            template: __webpack_require__(/*! ./filter-form.component.html */ "./src/app/components/games/filter-form/filter-form.component.html"),
            styles: [__webpack_require__(/*! ./filter-form.component.scss */ "./src/app/components/games/filter-form/filter-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterFormComponent);
    return FilterFormComponent;
}());



/***/ }),

/***/ "./src/app/components/games/game-details/game-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/games/game-details/game-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid\">\n  <section class=\"section\">\n    <p><a routerLink=\"/games\">Voltar</a></p>\n    <article class=\"content filled\">\n      <h2>Detalhes do jogo</h2>\n      <figure class=\"game-card-logo\">\n        <img src=\"{{ game?.logo.large }}\" alt=\"{{ game?.name }}\">\n      </figure>\n      <h3>{{ game?.name }}</h3>\n    </article>\n  </section>\n</main>\n"

/***/ }),

/***/ "./src/app/components/games/game-details/game-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/games/game-details/game-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: GameDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailsComponent", function() { return GameDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_games_games_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/games/games.service */ "./src/app/services/games/games.service.ts");




var GameDetailsComponent = /** @class */ (function () {
    function GameDetailsComponent(route, router, gamesService) {
        this.route = route;
        this.router = router;
        this.gamesService = gamesService;
    }
    GameDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.gamesService.getGame(id)
            .then(function (game) { return _this.game = game; });
    };
    GameDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-detail',
            template: __webpack_require__(/*! ./game-details.component.html */ "./src/app/components/games/game-details/game-details.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_games_games_service__WEBPACK_IMPORTED_MODULE_3__["GamesService"]])
    ], GameDetailsComponent);
    return GameDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/games/game-list/game-card/game-card.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/games/game-list/game-card/game-card.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"game\" class=\"section game-card-info\">\n  <div class=\"content filled\">\n    <figure class=\"game-card-logo\">\n      <img src=\"{{ game.logo.large }}\" alt=\"{{ game.name }}\">\n    </figure>\n    <h4 class=\"game-card-title\">\n      <a routerLink=\"/game/{{game.id}}\">{{ game.name }}</a>\n    </h4>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/games/game-list/game-card/game-card.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/games/game-list/game-card/game-card.component.ts ***!
  \*****************************************************************************/
/*! exports provided: GameCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameCardComponent", function() { return GameCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../classes/Game */ "./src/app/classes/Game.ts");



var GameCardComponent = /** @class */ (function () {
    function GameCardComponent() {
    }
    GameCardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _classes_Game__WEBPACK_IMPORTED_MODULE_2__["default"])
    ], GameCardComponent.prototype, "game", void 0);
    GameCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-card',
            template: __webpack_require__(/*! ./game-card.component.html */ "./src/app/components/games/game-list/game-card/game-card.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameCardComponent);
    return GameCardComponent;
}());



/***/ }),

/***/ "./src/app/components/games/game-list/game-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/games/game-list/game-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"games-wrapper\">\n  <app-game-card\n    class=\"game-card\"\n    *ngFor=\"let game of games\"\n    [game]=\"game\"\n  ></app-game-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/games/game-list/game-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/games/game-list/game-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: GameListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function() { return GameListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GameListComponent = /** @class */ (function () {
    function GameListComponent() {
        this.games = [];
    }
    GameListComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], GameListComponent.prototype, "games", void 0);
    GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-list',
            template: __webpack_require__(/*! ./game-list.component.html */ "./src/app/components/games/game-list/game-list.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GameListComponent);
    return GameListComponent;
}());



/***/ }),

/***/ "./src/app/components/games/games.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/games/games.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"container-fluid\">\n  <header>\n    <h1>Lista de Jogos</h1>\n  </header>\n  <section class=\"section search-area\">\n    <div class=\"content filled\">\n      <app-filter-form\n        debounceTime=\"200\"\n        (onFilter)=\"onFilterHandler($event)\"\n      ></app-filter-form>\n    </div>\n  </section>\n\n  <section *ngIf=\"games.length; then thenBlock else elseBlock\" class=\"section\"></section>\n  <ng-template #thenBlock>\n    <app-game-list [games]=\"games\"></app-game-list>\n  </ng-template>\n\n  <ng-template #elseBlock>\n    <p>Nenhum dado para ser exibido.</p>\n  </ng-template>\n\n</main>\n"

/***/ }),

/***/ "./src/app/components/games/games.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/games/games.component.ts ***!
  \*****************************************************/
/*! exports provided: GamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesComponent", function() { return GamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_games_games_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/games/games.service */ "./src/app/services/games/games.service.ts");



var GamesComponent = /** @class */ (function () {
    function GamesComponent(gamesService) {
        this.gamesService = gamesService;
        this.games = [];
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gamesService.loadGames()
            .then(function (games) {
            _this.games = games;
        });
    };
    GamesComponent.prototype.onFilterHandler = function (term) {
        var _this = this;
        this.gamesService.getGames()
            .then(function (games) {
            _this.gamesService.filterGames(games, term)
                .then(function (filteredGames) {
                _this.games = filteredGames;
            });
        });
    };
    GamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-games',
            template: __webpack_require__(/*! ./games.component.html */ "./src/app/components/games/games.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_games_games_service__WEBPACK_IMPORTED_MODULE_2__["GamesService"]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "./src/app/services/games/games.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/games/games.service.ts ***!
  \*************************************************/
/*! exports provided: GamesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesService", function() { return GamesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _classes_Game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../classes/Game */ "./src/app/classes/Game.ts");





var GamesService = /** @class */ (function () {
    function GamesService(http) {
        this.http = http;
        this.gameListUrl = 'https://api.twitch.tv/kraken/games/top?limit=12';
        this.clientId = 'il6gmpiwf45t5xnka8244b3hszjdtf';
        this.games = [];
        this.gamesLoaded = false;
    }
    GamesService.prototype.loadGames = function () {
        var _this = this;
        var headers = {
            'Client-Id': this.clientId
        };
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.gameListUrl, {
                headers: headers
            })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((function (gamesData) {
                if (gamesData && gamesData.top) {
                    return gamesData.top.map(function (source) {
                        var game = source.game;
                        return new _classes_Game__WEBPACK_IMPORTED_MODULE_4__["default"](game._id, game.name, game.popularity, game.logo);
                    });
                }
                else {
                    return [];
                }
            })))
                .subscribe(function (games) {
                _this.games = games;
                _this.gamesLoaded = true;
                resolve(games);
            });
        });
    };
    GamesService.prototype.getGames = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.gamesLoaded) {
                _this.loadGames().then(resolve);
            }
            else {
                resolve(_this.games);
            }
        });
    };
    GamesService.prototype.getGame = function (gameId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.getGames().then(function (games) {
                var foundGame = games.find(function (game) { return game.id === gameId; });
                if (foundGame) {
                    resolve(foundGame);
                }
                else {
                    reject(null);
                }
            });
        });
    };
    ;
    GamesService.prototype.filterGames = function (gamesList, term) {
        var regex = new RegExp(term, 'i');
        return new Promise(function (resolve) {
            var matched = gamesList.filter(function (game) {
                var match = game.name.match(regex);
                return !!(match && match.length);
            });
            resolve(matched);
        });
    };
    GamesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GamesService);
    return GamesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/josejunior/experiments/angular/gamelist/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map