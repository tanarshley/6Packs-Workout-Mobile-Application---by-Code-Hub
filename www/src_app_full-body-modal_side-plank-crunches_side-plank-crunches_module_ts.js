(self["webpackChunk_6packs_workout_mobile"] = self["webpackChunk_6packs_workout_mobile"] || []).push([["src_app_full-body-modal_side-plank-crunches_side-plank-crunches_module_ts"],{

/***/ 93499:
/*!*******************************************************************************************!*\
  !*** ./src/app/full-body-modal/side-plank-crunches/side-plank-crunches-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePlankCrunchesPageRoutingModule": () => (/* binding */ SidePlankCrunchesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _side_plank_crunches_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-plank-crunches.page */ 99550);




const routes = [
    {
        path: '',
        component: _side_plank_crunches_page__WEBPACK_IMPORTED_MODULE_0__.SidePlankCrunchesPage
    }
];
let SidePlankCrunchesPageRoutingModule = class SidePlankCrunchesPageRoutingModule {
};
SidePlankCrunchesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SidePlankCrunchesPageRoutingModule);



/***/ }),

/***/ 52238:
/*!***********************************************************************************!*\
  !*** ./src/app/full-body-modal/side-plank-crunches/side-plank-crunches.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePlankCrunchesPageModule": () => (/* binding */ SidePlankCrunchesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _side_plank_crunches_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./side-plank-crunches-routing.module */ 93499);
/* harmony import */ var _side_plank_crunches_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-plank-crunches.page */ 99550);







let SidePlankCrunchesPageModule = class SidePlankCrunchesPageModule {
};
SidePlankCrunchesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _side_plank_crunches_routing_module__WEBPACK_IMPORTED_MODULE_0__.SidePlankCrunchesPageRoutingModule
        ],
        declarations: [_side_plank_crunches_page__WEBPACK_IMPORTED_MODULE_1__.SidePlankCrunchesPage]
    })
], SidePlankCrunchesPageModule);



/***/ }),

/***/ 99550:
/*!*********************************************************************************!*\
  !*** ./src/app/full-body-modal/side-plank-crunches/side-plank-crunches.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidePlankCrunchesPage": () => (/* binding */ SidePlankCrunchesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_side_plank_crunches_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./side-plank-crunches.page.html */ 29416);
/* harmony import */ var _side_plank_crunches_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./side-plank-crunches.page.scss */ 45799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);






let SidePlankCrunchesPage = class SidePlankCrunchesPage {
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
SidePlankCrunchesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SidePlankCrunchesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-side-plank-crunches',
        template: _raw_loader_side_plank_crunches_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_side_plank_crunches_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SidePlankCrunchesPage);



/***/ }),

/***/ 45799:
/*!***********************************************************************************!*\
  !*** ./src/app/full-body-modal/side-plank-crunches/side-plank-crunches.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-title {\n  --ion-font-family: \"barlow-font-lighter\";\n}\n\n.exit-exercise-ico {\n  font-size: 32px;\n}\n\n.time-icon {\n  font-size: 26px;\n  margin-bottom: -9px;\n  margin-top: 3px;\n}\n\n.time-chip ion-label {\n  margin-bottom: 10px;\n  margin-top: 3px;\n}\n\na {\n  float: left;\n  position: relative;\n  margin-left: 10px;\n}\n\na ion-icon {\n  font-size: 22px;\n}\n\nion-card {\n  border-top-left-radius: 25px;\n  border-top-right-radius: 25px;\n  --background: rgb(250, 250, 250);\n}\n\nion-card-subtitle {\n  font-size: 16px;\n}\n\nion-card-content {\n  text-align: justify;\n}\n\nion-card ion-button {\n  margin-left: 10px;\n  margin-right: 10px;\n  margin-bottom: 15px;\n}\n\nion-card ion-card-title {\n  text-align: left;\n}\n\n.proper-form {\n  margin-top: 10px;\n  text-align: justify;\n  font-size: 16px;\n}\n\nol li {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtcGxhbmstY3J1bmNoZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQUE7QUFDRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFJRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFNRTtFQUNFLGVBQUE7QUFISjs7QUFPQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQ0FBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0MsbUJBQUE7QUFKRDs7QUFRRTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVVFO0VBQ0UsZ0JBQUE7QUFQSjs7QUFXQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0FBUkYiLCJmaWxlIjoic2lkZS1wbGFuay1jcnVuY2hlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgLS1pb24tZm9udC1mYW1pbHk6ICdiYXJsb3ctZm9udC1saWdodGVyJztcclxufVxyXG5cclxuXHJcbi5leGl0LWV4ZXJjaXNlLWljb3tcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi50aW1lLWljb257XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IC05cHg7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG59XHJcblxyXG4udGltZS1jaGlwe1xyXG4gIGlvbi1sYWJlbHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgfVxyXG59XHJcblxyXG5he1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuYSB7XHJcbiAgaW9uLWljb257XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyNXB4O1xyXG4gIC0tYmFja2dyb3VuZDogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbmlvbi1jYXJkLWNvbnRlbnR7XHJcbiB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICBpb24tYnV0dG9ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgaW9uLWNhcmQtdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuLnByb3Blci1mb3Jte1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbm9sIGxpe1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 29416:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/full-body-modal/side-plank-crunches/side-plank-crunches.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/tabs/workout\"></ion-back-button>\n    </ion-buttons>\n    <ion-icon slot=\"end\" class=\"exit-exercise-ico\" name=\"close-outline\" (click)=\"exitExercise()\"></ion-icon>\n    <ion-title>Side Plank Crunches</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <img src=\"/assets/images/workout-gifs/side-plank-crunches.gif\">\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <p><strong>Level:</strong> 1</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Sets:</strong> 3</p>\n          </ion-col>\n          <ion-col>\n            <p><strong>Repeat:</strong> 10x</p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Difficulty:</strong>\n                <ion-chip color=\"danger\">\n                  <ion-label>Hard</ion-label>\n                </ion-chip>\n             </p>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p><strong>Target Body Parts:</strong> Cores, obliques, upper back and shoulder</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <br>\n      <ion-card-title>\n        <strong>Instructions</strong>\n      </ion-card-title>\n      <ol>\n        <li>Upward Phase: Press upwards through your arms while maintaining a rigid torso and head aligned with\n           your spine. As your press upwards, extend your left hip to lift your left foot off the floor, keeping the\n           knee extended.</li>\n        <li>Bring the elbow on your top arm and knee on your top leg in to tap elbow and knee together, then\n          reach both long and repeat the tap working your obliques and entire core with these crunches.</li>\n        <li>Repeat until the set is complete.</li>\n      </ol><br>\n      <ion-chip color=\"secondary\" class=\"time-chip\">\n        <ion-label><ion-icon name=\"time-outline\" class=\"time-icon\"></ion-icon> 1-2 minutes rest between sets.</ion-label>\n      </ion-chip><br><br>\n      <ion-label>\n        Progress:\n      </ion-label>\n      <ion-progress-bar value=\"0.85\" buffer=\"1\"></ion-progress-bar>\n      </ion-card-content>\n      <ion-button color=\"success\" (click)=\"nextExercise()\" expand=\"block\" mode=\"ios\">Exercises Done</ion-button>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_full-body-modal_side-plank-crunches_side-plank-crunches_module_ts.js.map