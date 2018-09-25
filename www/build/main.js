webpackJsonp([2],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams, rest) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.rest = rest;
        this.loginDetailArray = [];
    }
    ListPage.prototype.ionViewDidLoad = function () {
        if (this.navParams.get("name") && this.navParams.get("pass")) {
            this.names = this.navParams.get("name");
            this.password = this.navParams.get("pass");
        }
        this.productList();
    };
    ListPage.prototype.redirect = function () {
        // this.navCtrl.push(HomePage);
    };
    ListPage.prototype.productList = function () {
        var _this = this;
        this.idemp = this.rest.getProduct().subscribe(function (productsData) {
            _this.returnData = productsData;
        });
    };
    ListPage.prototype.items = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__view_view__["a" /* ViewPage */], { viewItems: item });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/home/jaishree/Downloads/first-ionic-app-master/src/pages/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>Welcome {{names}}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n\n    <ion-list>\n        <ion-item *ngFor="let item of returnData">\n            <ion-thumbnail item-start>\n                <img [src]="item.img">\n            </ion-thumbnail>\n            <h2>{{ item.name }}</h2>\n            <p>Hayao Miyazaki • 1988</p>\n            <button\n                ion-button\n                clear\n                item-end\n                (click)="items(item)">\n                View\n            </button>\n        </ion-item>\n    </ion-list>\n</ion-content>\n\n<!-- <ion-nav id="nav" #content [root]="rootPage"></ion-nav> -->\n'/*ion-inline-end:"/home/jaishree/Downloads/first-ionic-app-master/src/pages/list/list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_rest_rest__["a" /* RestProvider */]) === "function" && _c || Object])
    ], ListPage);
    return ListPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewPage = /** @class */ (function () {
    function ViewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (this.navParams.get("viewItems")) {
            this.viewItem = this.navParams.get("viewItems");
            this.cakeName = this.viewItem.name;
        }
    }
    ViewPage.prototype.ionViewDidLoad = function () {
    };
    ViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view',template:/*ion-inline-start:"/home/jaishree/Downloads/first-ionic-app-master/src/pages/view/view.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>view</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-card *ngIf="cakeName">\n        <ion-item>\n            <ion-avatar item-start>\n                <img [src]="viewItem.img">\n            </ion-avatar>\n            <h2>{{cakeName}}</h2>\n            <p>November 5, 1955</p>\n        </ion-item>\n\n        <img [src]="viewItem.img">\n\n        <ion-card-content>\n            <p>\n                Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.\n            </p>\n        </ion-card-content>\n\n    </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/home/jaishree/Downloads/first-ionic-app-master/src/pages/view/view.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ViewPage);
    return ViewPage;
}());

//# sourceMappingURL=view.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/list/list.module": [
		281,
		1
	],
	"../pages/view/view.module": [
		282,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, fb, rest) {
        this.navCtrl = navCtrl;
        this.fb = fb;
        this.rest = rest;
        this.showForm = false;
        this.dataArray = [];
        this.dataObject = {
            "username": '',
            "password": ''
        };
        this.createForm();
    }
    HomePage.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            username: '',
            password: ''
        });
    };
    HomePage.prototype.onsubmit = function (value) {
        debugger;
        this.dataObject = {
            "username": value.username,
            "password": value.password
        };
        this.dataArray.push(this.dataObject);
        this.showForm = false;
        // this.rest.getProduct();
        this.postProductList(value);
        // this.navCtrl.push(ListPage, { name: value.username, pass: value.password });
    };
    HomePage.prototype.postProductList = function (value) {
        var _this = this;
        this.listData = this.rest.createProduct(value).subscribe(function (postDataValue) {
            _this.postData = postDataValue;
            if (_this.postData.token) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */], { name: _this.postData.username, pass: _this.postData.password });
            }
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/jaishree/Downloads/first-ionic-app-master/src/pages/home/home.html"*/'<!-- <button\n    *ngIf="!showForm"\n    ion-button\n    color="primary"\n    (click)="addUser()">\n    ADD USER\n</button>\n<ion-grid>\n    <ion-row *ngFor="let data of dataArray; let i = index">\n		<ion-col col-3>{{data.username}}</ion-col>\n		<ion-col col-3>{{data.password}}</ion-col>\n		<ion-col col-1 ><ion-icon (click) = "removeUser(i)" name="close"></ion-icon></ion-col>\n 		\n    </ion-row>\n   \n</ion-grid> -->\n\n<!-- <div *ngIf="showForm"> -->\n    <form\n        [formGroup]="heroForm"\n        (submit)="onsubmit(heroForm.value);heroForm.reset()">\n        <ion-list>\n            <ion-item>\n                <ion-label floating>Username</ion-label>\n                <ion-input\n                    type="text"\n                    formControlName="username"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label floating>Password</ion-label>\n                <ion-input\n                    type="password"\n                    formControlName="password"></ion-input>\n            </ion-item>\n\n        </ion-list>\n        <button\n            ion-button\n            color="primary"\n            full>\n            ADD\n        </button>\n\n    </form>\n<!-- </div> -->\n'/*ion-inline-end:"/home/jaishree/Downloads/first-ionic-app-master/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(222);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_view_view__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_view_view__["a" /* ViewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view/view.module#ViewPageModule', name: 'ViewPage', segment: 'view', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["e" /* ReactiveFormsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_view_view__["a" /* ViewPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__providers_rest_rest__["a" /* RestProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/jaishree/Downloads/first-ionic-app-master/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jaishree/Downloads/first-ionic-app-master/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = /** @class */ (function () {
    function RestProvider(http) {
        this.http = http;
        this.baseUrl = "http://localhost:8000";
        console.log('Hello RestProvider Provider');
    }
    // Sending a GET request to /products
    // public getProducts(): Observable<Product[]> {
    //   return this.http
    //     .get(this.baseUrl + '/products')
    //     .map(products => {
    //       const productData = products;
    //       // return chamados.map((chamado) => new Chamado(chamado));
    //       return productData.map((product) => new Product(product));
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //     });
    // }
    RestProvider.prototype.getProduct = function () {
        debugger;
        // this.geturls = "http://localhost:8000/products";
        return this.http.get('/api/product').map(function (res) { return res; });
        // return this.http.get(this.geturls).map((res: Response) => res)
    };
    /// post request
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let body = new FormData();
    // body.append('username', username);
    // body.append('password', password);
    // console.log(body);
    // console.log(headers);
    // return this.http.post('http://api/v1/get_user',body,headers).map((res: Response) => res.json());
    // Sending a POST request to /products
    RestProvider.prototype.createProduct = function (product) {
        // let headers = new Headers({ 'Content-Type': 'application/json' });
        // let body = new FormData();
        // body.append('username', username);
        // body.append('password', password);
        // console.log(body);
        // console.log(headers);
        // return this.http.post('http://api/v1/get_user',body,headers).map((res: Response) => res.json());
        // debugger;
        // this.posturls = "/api/users";
        // return this.http.post(this.geturls, product).map((res: Response) => res)  
        // this.http.post(this.posturls, { username: product.username, password: product.password }, {
        //   headers: new HttpHeaders({
        //     'Content-Type':  'application/json'
        //   })
        // });
        // debugger;
        //   .subscribe(res =>
        //      console.log(res)
        // );
        debugger;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        var body = { "username": product.username, "password": product.password };
        // this.http.post("/api/users", JSON.parse(JSON.stringify(body)), { headers: headers }).map(res => res).subscribe(data1 => {
        //   console.log("data is posting", data1);
        // });
        return this.http.post("/api/users", JSON.parse(JSON.stringify(body)), { headers: headers }).map(function (res) { return res; });
    };
    ;
    // Sending a GET request to /products/:id
    RestProvider.prototype.getProductById = function (productId) {
    };
    // Sending a PUT request to /products/:id
    RestProvider.prototype.updateProduct = function (product) {
    };
    // Sending a DELETE request to /products/:id
    RestProvider.prototype.deleteProductById = function (productId) {
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map