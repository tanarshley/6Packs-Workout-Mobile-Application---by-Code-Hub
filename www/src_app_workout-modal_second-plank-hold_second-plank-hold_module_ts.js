(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_workout-modal_second-plank-hold_second-plank-hold_module_ts"],{

/***/ 39912:
/*!*************************************************************************************!*\
  !*** ./src/app/workout-modal/second-plank-hold/second-plank-hold-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondPlankHoldPageRoutingModule": () => (/* binding */ SecondPlankHoldPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _second_plank_hold_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second-plank-hold.page */ 56845);




const routes = [
    {
        path: '',
        component: _second_plank_hold_page__WEBPACK_IMPORTED_MODULE_0__.SecondPlankHoldPage
    }
];
let SecondPlankHoldPageRoutingModule = class SecondPlankHoldPageRoutingModule {
};
SecondPlankHoldPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SecondPlankHoldPageRoutingModule);



/***/ }),

/***/ 57521:
/*!*****************************************************************************!*\
  !*** ./src/app/workout-modal/second-plank-hold/second-plank-hold.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondPlankHoldPageModule": () => (/* binding */ SecondPlankHoldPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _second_plank_hold_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./second-plank-hold-routing.module */ 39912);
/* harmony import */ var _second_plank_hold_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-plank-hold.page */ 56845);







let SecondPlankHoldPageModule = class SecondPlankHoldPageModule {
};
SecondPlankHoldPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _second_plank_hold_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecondPlankHoldPageRoutingModule
        ],
        declarations: [_second_plank_hold_page__WEBPACK_IMPORTED_MODULE_1__.SecondPlankHoldPage]
    })
], SecondPlankHoldPageModule);



/***/ }),

/***/ 56845:
/*!***************************************************************************!*\
  !*** ./src/app/workout-modal/second-plank-hold/second-plank-hold.page.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecondPlankHoldPage": () => (/* binding */ SecondPlankHoldPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_second_plank_hold_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./second-plank-hold.page.html */ 41981);
/* harmony import */ var _second_plank_hold_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./second-plank-hold.page.scss */ 26820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);






let SecondPlankHoldPage = class SecondPlankHoldPage {
    constructor(mdController, router) {
        this.mdController = mdController;
        this.router = router;
    }
    ngOnInit() {
    }
    closeModal() {
        this.mdController.dismiss();
        this.router.navigate(['/tabs/workout']);
    }
    exitExercise() {
        this.router.navigate(['/tabs/workout']);
    }
    nextExercise() {
        this.router.navigate(['/tabs/workout']);
    }
};
SecondPlankHoldPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SecondPlankHoldPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-second-plank-hold',
        template: _raw_loader_second_plank_hold_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_second_plank_hold_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SecondPlankHoldPage);



/***/ }),

/***/ 26820:
/*!*****************************************************************************!*\
  !*** ./src/app/workout-modal/second-plank-hold/second-plank-hold.page.scss ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\n.proper-form {\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 16px;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY29uZC1wbGFuay1ob2xkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdDQUFBO0FBQ0Y7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUFESjs7QUFLQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBTUU7RUFDRSxlQUFBO0FBSEo7O0FBT0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7QUFKRjs7QUFPQTtFQUNDLG1CQUFBO0FBSkQ7O0FBUUU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFMSjs7QUFVRTtFQUNFLGdCQUFBO0FBUEo7O0FBV0E7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtBQVJGIiwiZmlsZSI6InNlY29uZC1wbGFuay1ob2xkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAtLWlvbi1mb250LWZhbWlseTogJ2Jhcmxvdy1mb250LWxpZ2h0ZXInO1xyXG59XHJcblxyXG5cclxuLmV4aXQtZXhlcmNpc2UtaWNve1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG5cclxuLnRpbWUtaWNvbntcclxuICBmb250LXNpemU6IDI2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTlweDtcclxuICBtYXJnaW4tdG9wOiAzcHg7XHJcbn1cclxuXHJcbi50aW1lLWNoaXB7XHJcbiAgaW9uLWxhYmVse1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxuICB9XHJcbn1cclxuXHJcbmF7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5hIHtcclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDI1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDI1cHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoMjUwLCAyNTAsIDI1MCk7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxuaW9uLWNhcmQtY29udGVudHtcclxuIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbmlvbi1jYXJke1xyXG4gIGlvbi1idXR0b257XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tY2FyZC10aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ucHJvcGVyLWZvcm17XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5cclxub2wgbGl7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 41981:
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workout-modal/second-plank-hold/second-plank-hold.page.html ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Plank Hold</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/workout/straight-arm-pank.jpg\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p><strong>Level:</strong> 1</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Sets:</strong> 3</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Repeat:</strong> 15 counts</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Difficulty:</strong>\n                <ion-chip color=\"danger\">\n                  <ion-label>Hard</ion-label>\n                </ion-chip>\n             </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Target Body Parts:</strong> Oblique, core, abdominal and upper abs.</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <ion-card-title>\n        <strong>Instructions</strong>\n      </ion-card-title>\n      <ol>\n        <li>Start on all fours with wrists directly under shoulders, toes on the floor.</li>\n        <li>Then, step one foot back and then the other as you engage abs and straigthen legs.</li>\n        <li>Press the floor away from you with hands. You should form a straight line from shoulders to heels. Hold for 15 to 30 seconds.</li>\n        <li>Repeat until the set is complete.</li>\n      </ol><br>\n      <ion-chip color=\"secondary\" class=\"time-chip\">\n        <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n      </ion-chip><br><br>\n      <ion-label>\n        Progress:\n      </ion-label>\n      <ion-progress-bar value=\"0.85\" buffer=\"1\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Exercises Done</ion-button>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_workout-modal_second-plank-hold_second-plank-hold_module_ts.js.map