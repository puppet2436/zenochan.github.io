(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<zz-paginator #p>\n  <ngb-pagination style=\"flex: 1;margin-right: 48px\"\n                  (pageChange)=\"p.setPage($event)\"\n                  [page]=\"p.pageInfo?.page\"\n                  [pageSize]=\"p.pageInfo?.size\"\n                  [maxSize]=\"7\"\n                  [collectionSize]=\"p.pageInfo?.total\"\n  ></ngb-pagination>\n  <ul class=\"pagination pull-right float-right\">\n    <li class=\"page-item\"\n        *ngFor=\"let rows of rowsOnPageSet\"\n        [class.active]=\"p.pageInfo?.size===rows\"\n        (click)=\"p.setRowsOnPage(rows)\">\n      <a class=\"page-link\" style=\"cursor: pointer\">{{rows}}</a>\n    </li>\n  </ul>\n\n</zz-paginator>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./projects/ngx-datatable/src/lib/components/sorter/sorter.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/ngx-datatable/src/lib/components/sorter/sorter.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a style=\"cursor: pointer\" (click)=\"sort()\" class=\"text-nowrap\">\n  <ng-content></ng-content>\n  <span class=\"sort {{sortBy}}\"></span>\n</a>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"https://github.com/zenochan/ngx-datatable\">GitHub</a>\n<div [zzPage] class=\"col-12\" [data]=\"data\" #pg=\"page\">\n  <table class=\"table table-striped\">\n    <thead>\n      <tr>\n        <th style=\"width: 20%\">\n          <zz-sorter by=\"name\">Name</zz-sorter>\n        </th>\n        <th style=\"width: 50%\">\n          <zz-sorter by=\"email\">Email</zz-sorter>\n        </th>\n        <th style=\"width: 10%\">\n          <zz-sorter by=\"age\">Age</zz-sorter>\n        </th>\n        <th>\n          <zz-sorter by=\"city\">City</zz-sorter>\n        </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of pg.data\">\n        <td>{{item.name}}</td>\n        <td>{{item.email}}</td>\n        <td>{{item.age}}</td>\n        <td>{{item.city}}</td>\n      </tr>\n    </tbody>\n\n    <tfoot>\n\n      <tr>\n        <td colspan=\"8\">\n          <zz-bootstrap-paginator></zz-bootstrap-paginator>\n        </td>\n      </tr>\n    </tfoot>\n\n  </table>\n</div>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.scss":
/*!**********************************************************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9ib290c3RyYXAtcGFnaW5hdG9yL2Jvb3RzdHJhcC1wYWdpbmF0b3IuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.ts":
/*!********************************************************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: BootstrapPaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapPaginatorComponent", function() { return BootstrapPaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BootstrapPaginatorComponent = class BootstrapPaginatorComponent {
    constructor() {
        this.rowsOnPageSet = [5, 10, 20];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], BootstrapPaginatorComponent.prototype, "rowsOnPageSet", void 0);
BootstrapPaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'zz-bootstrap-paginator',
        template: __webpack_require__(/*! raw-loader!./bootstrap-paginator.component.html */ "./node_modules/raw-loader/index.js!./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.html"),
        styles: [__webpack_require__(/*! ./bootstrap-paginator.component.scss */ "./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], BootstrapPaginatorComponent);



/***/ }),

/***/ "./projects/ngx-datatable/src/lib/components/paginator/paginator.component.ts":
/*!************************************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/components/paginator/paginator.component.ts ***!
  \************************************************************************************/
/*! exports provided: PaginatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginatorComponent", function() { return PaginatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directives_page_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/page.directive */ "./projects/ngx-datatable/src/lib/directives/page.directive.ts");



let PaginatorComponent = class PaginatorComponent {
    constructor(page) {
        this.page = page;
    }
    ngOnInit() {
        this.page.pageChange.subscribe(page => this.pageInfo = page);
        this.pageInfo = this.page.page;
    }
    setPage(page) {
        this.page.setPage(page, this.pageInfo.size);
    }
    setRowsOnPage(size) {
        this.page.setPage(this.pageInfo.page, size);
    }
};
PaginatorComponent.ctorParameters = () => [
    { type: _directives_page_directive__WEBPACK_IMPORTED_MODULE_2__["PageDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }] }
];
PaginatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'zz-paginator',
        template: `
    <ng-content></ng-content>`
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_directives_page_directive__WEBPACK_IMPORTED_MODULE_2__["PageDirective"]])
], PaginatorComponent);



/***/ }),

/***/ "./projects/ngx-datatable/src/lib/components/sorter/sorter.component.scss":
/*!********************************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/components/sorter/sorter.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sort {\n  display: inline-block;\n  position: relative;\n  top: -0.2em;\n  margin-left: 0.3em;\n  width: 0;\n  height: 0;\n}\n.sort.asc, .sort.desc {\n  border-style: solid;\n  content: \"\";\n  border-color: transparent transparent #007bff;\n  border-width: 0 0.5em 0.5em;\n}\n.sort.asc {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZW5vY2hhbi9aLlByb2plY3QvQW5ndWxhclgvMTkwNi1uZ3gtcGFnZWRhdGEtbGliL3Byb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3NvcnRlci9zb3J0ZXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtZGF0YXRhYmxlL3NyYy9saWIvY29tcG9uZW50cy9zb3J0ZXIvc29ydGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7QURDRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZDQUFBO0VBQ0EsMkJBQUE7QUNDSjtBREVFO0VBQ0UsaUNBQUE7VUFBQSx5QkFBQTtBQ0FKIiwiZmlsZSI6InByb2plY3RzL25neC1kYXRhdGFibGUvc3JjL2xpYi9jb21wb25lbnRzL3NvcnRlci9zb3J0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc29ydCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuXG4gICYuYXNjLCAmLmRlc2Mge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgY29udGVudDogJyc7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDA3YmZmO1xuICAgIGJvcmRlci13aWR0aDogMCAwLjVlbSAwLjVlbTtcbiAgfVxuXG4gICYuYXNjIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG4iLCIuc29ydCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0wLjJlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuM2VtO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xufVxuLnNvcnQuYXNjLCAuc29ydC5kZXNjIHtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMDA3YmZmO1xuICBib3JkZXItd2lkdGg6IDAgMC41ZW0gMC41ZW07XG59XG4uc29ydC5hc2Mge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufSJdfQ== */"

/***/ }),

/***/ "./projects/ngx-datatable/src/lib/components/sorter/sorter.component.ts":
/*!******************************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/components/sorter/sorter.component.ts ***!
  \******************************************************************************/
/*! exports provided: SorterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SorterComponent", function() { return SorterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directives_page_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/page.directive */ "./projects/ngx-datatable/src/lib/directives/page.directive.ts");



let SorterComponent = class SorterComponent {
    constructor(page) {
        this.page = page;
    }
    ngOnInit() {
        this.page.sortChange.subscribe(sort => {
            console.error('bbb', this.by, sort.toString());
            const index = this.page.sort.indexOf(this.by);
            if (index !== -1 && this.page.sort.length > index + 1) {
                this.sortBy = this.page.sort[index + 1];
                console.error('ccc', this.by, this.sortBy);
            }
            else {
                this.sortBy = '';
            }
        });
    }
    sort() {
        const sort = ['asc', 'desc', ''];
        this.sortBy = sort[(sort.indexOf(this.sortBy) + 1) % 3];
        this.page.setSort(this.by, this.sortBy);
    }
};
SorterComponent.ctorParameters = () => [
    { type: _directives_page_directive__WEBPACK_IMPORTED_MODULE_2__["PageDirective"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], SorterComponent.prototype, "by", void 0);
SorterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'zz-sorter',
        template: __webpack_require__(/*! raw-loader!./sorter.component.html */ "./node_modules/raw-loader/index.js!./projects/ngx-datatable/src/lib/components/sorter/sorter.component.html"),
        styles: [__webpack_require__(/*! ./sorter.component.scss */ "./projects/ngx-datatable/src/lib/components/sorter/sorter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_directives_page_directive__WEBPACK_IMPORTED_MODULE_2__["PageDirective"]])
], SorterComponent);



/***/ }),

/***/ "./projects/ngx-datatable/src/lib/directives/page.directive.ts":
/*!*********************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/directives/page.directive.ts ***!
  \*********************************************************************/
/*! exports provided: PageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageDirective", function() { return PageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let PageDirective = class PageDirective {
    constructor(differs) {
        this.differs = differs;
        this.page = { page: 1, size: 10, total: 0 };
        this.sort = [];
        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sortChange = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.sort);
        this.mustRecalculateData = false;
        this.diff = differs.find([]).create(null);
    }
    set data(data) {
        this.allData = data;
        this.page.total = data.length;
        this.fillData();
    }
    get data() {
        return this.pageData;
    }
    set zzPage(page) {
        if (!page) {
            return;
        }
        this.page = page;
        this.pageChange.emit(page);
    }
    ngOnInit() {
        this.pageChange.subscribe(res => {
            if (this.allData) {
                this.fillData();
            }
        });
    }
    setPage(page, size) {
        if (this.page.size !== size || this.page.page !== page) {
            this.page.page = this.page.page !== page ? page : this.calculateNewActivePage(this.page.size, size);
            this.page.size = size;
            this.mustRecalculateData = true;
            this.page.sort = this.sort;
            this.pageChange.emit(this.page);
        }
    }
    calculateNewActivePage(previousRowsOnPage, currentRowsOnPage) {
        const firstRowOnPage = (this.page.page - 1) * previousRowsOnPage + 1;
        return Math.ceil(firstRowOnPage / currentRowsOnPage);
    }
    setSort(name, sort = '') {
        const index = this.sort.indexOf(name);
        if (index === -1) {
            this.sort.push(name, sort || 'asc');
        }
        if (index !== -1 && this.sort.length > index + 1) {
            if (sort === 'asc' || sort === 'desc') {
                this.sort.splice(index + 1, 1, sort);
            }
            else {
                this.sort.splice(index, 2);
            }
        }
        this.page.sort = this.sort;
        this.pageChange.emit(this.page);
    }
    fillData() {
        const lastPage = Math.ceil(this.allData.length / this.page.size);
        this.page.page = lastPage < this.page.page ? lastPage : this.page.page;
        this.page.page = this.page.page || 1;
        const offset = (this.page.page - 1) * this.page.size;
        let data = this.allData;
        const sortBy = this.sort;
        if (sortBy.length > 0) {
            this.sort = this.sort.slice(sortBy.length - 2);
            this.sortChange.next(this.sort);
            data = new Array(...data).sort((a, b) => {
                const delta = a[this.sort[0]] >= b[this.sort[0]];
                return this.sort[1] === 'asc' && delta ? 0 : -1;
            });
        }
        this.pageData = data.slice(offset, offset + this.page.size);
    }
};
PageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
], PageDirective.prototype, "data", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], PageDirective.prototype, "zzPage", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PageDirective.prototype, "pageChange", void 0);
PageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[zzPage]',
        exportAs: 'page'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]])
], PageDirective);



/***/ }),

/***/ "./projects/ngx-datatable/src/lib/ngx-datatable.module.ts":
/*!****************************************************************!*\
  !*** ./projects/ngx-datatable/src/lib/ngx-datatable.module.ts ***!
  \****************************************************************/
/*! exports provided: NgxDatatableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxDatatableModule", function() { return NgxDatatableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/paginator/paginator.component */ "./projects/ngx-datatable/src/lib/components/paginator/paginator.component.ts");
/* harmony import */ var _components_bootstrap_paginator_bootstrap_paginator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/bootstrap-paginator/bootstrap-paginator.component */ "./projects/ngx-datatable/src/lib/components/bootstrap-paginator/bootstrap-paginator.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _directives_page_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/page.directive */ "./projects/ngx-datatable/src/lib/directives/page.directive.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _components_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sorter/sorter.component */ "./projects/ngx-datatable/src/lib/components/sorter/sorter.component.ts");








const comp = [_directives_page_directive__WEBPACK_IMPORTED_MODULE_5__["PageDirective"], _components_paginator_paginator_component__WEBPACK_IMPORTED_MODULE_2__["PaginatorComponent"], _components_bootstrap_paginator_bootstrap_paginator_component__WEBPACK_IMPORTED_MODULE_3__["BootstrapPaginatorComponent"]];
let NgxDatatableModule = class NgxDatatableModule {
};
NgxDatatableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [...comp, _components_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_7__["SorterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbPaginationModule"]],
        exports: [...comp, _components_sorter_sorter_component__WEBPACK_IMPORTED_MODULE_7__["SorterComponent"]]
    })
], NgxDatatableModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data */ "./src/app/data.ts");



let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ngx-pagedata-lib';
        this.data = _data__WEBPACK_IMPORTED_MODULE_2__["DATA"];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ngx_datatable_src_lib_ngx_datatable_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/ngx-datatable/src/lib/ngx-datatable.module */ "./projects/ngx-datatable/src/lib/ngx-datatable.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _projects_ngx_datatable_src_lib_ngx_datatable_module__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/data.ts":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const DATA = [
    {
        'name': 'Wing',
        'email': 'tellus.eu.augue@arcu.com',
        'regDate': '2016-01-09T14:48:34-08:00',
        'city': 'Paglieta',
        'age': 25
    },
    {
        'name': 'Whitney',
        'email': 'sed.dictum@Donec.org',
        'regDate': '2017-01-23T20:09:52-08:00',
        'city': 'Bear',
        'age': 32
    },
    {
        'name': 'Oliver',
        'email': 'mauris@Craslorem.ca',
        'regDate': '2015-11-19T19:11:33-08:00',
        'city': 'Bruderheim',
        'age': 31
    },
    {
        'name': 'Vladimir',
        'email': 'mi.Aliquam@Phasellus.net',
        'regDate': '2015-11-02T07:59:34-08:00',
        'city': 'Andenne',
        'age': 50
    },
    {
        'name': 'Maggy',
        'email': 'ligula@acorciUt.edu',
        'regDate': '2017-02-25T15:42:17-08:00',
        'city': 'HomprŽ',
        'age': 24
    },
    {
        'name': 'Unity',
        'email': 'Nunc.commodo@justo.org',
        'regDate': '2016-03-07T03:47:55-08:00',
        'city': 'Ried im Innkreis',
        'age': 23
    },
    {
        'name': 'Ralph',
        'email': 'augue@penatibuset.net',
        'regDate': '2017-02-27T20:03:50-08:00',
        'city': 'Cwmbran',
        'age': 45
    },
    {
        'name': 'Medge',
        'email': 'sagittis.augue@taciti.edu',
        'regDate': '2016-03-02T03:59:17-08:00',
        'city': 'Maranguape',
        'age': 21
    },
    {
        'name': 'Orli',
        'email': 'nascetur@mipedenonummy.edu',
        'regDate': '2016-11-07T20:48:43-08:00',
        'city': 'Gibbons',
        'age': 38
    },
    {
        'name': 'Ainsley',
        'email': 'morbi.tristique.senectus@enim.ca',
        'regDate': '2016-02-11T22:14:36-08:00',
        'city': 'Guardia Perticara',
        'age': 43
    },
    {
        'name': 'Candice',
        'email': 'turpis.non.enim@fringillami.com',
        'regDate': '2015-04-23T12:29:39-07:00',
        'city': 'Aylmer',
        'age': 25
    },
    {
        'name': 'Alexis',
        'email': 'lacinia.orci.consectetuer@dolorFuscefeugiat.ca',
        'regDate': '2016-08-18T12:06:56-07:00',
        'city': 'Halkirk',
        'age': 35
    },
    {
        'name': 'Diana',
        'email': 'pede.Cras@a.edu',
        'regDate': '2016-12-24T00:53:04-08:00',
        'city': 'Palermo',
        'age': 31
    },
    {
        'name': 'Tyrone',
        'email': 'ornare.In@duilectus.co.uk',
        'regDate': '2015-03-31T11:45:57-07:00',
        'city': 'Bellevue',
        'age': 36
    },
    {
        'name': 'Brennan',
        'email': 'scelerisque.lorem@enim.net',
        'regDate': '2016-09-07T16:12:31-07:00',
        'city': 'Oxford County',
        'age': 38
    },
    {
        'name': 'Lillith',
        'email': 'non@lectus.edu',
        'regDate': '2016-08-01T12:45:06-07:00',
        'city': 'Lillois-WitterzŽe',
        'age': 25
    },
    {
        'name': 'Wayne',
        'email': 'at.egestas.a@Pellentesque.edu',
        'regDate': '2016-02-23T10:20:18-08:00',
        'city': 'Baie-Saint-Paul',
        'age': 32
    },
    {
        'name': 'Vielka',
        'email': 'Nam.porttitor@Uttincidunt.ca',
        'regDate': '2016-07-18T19:26:59-07:00',
        'city': 'Rodgau',
        'age': 21
    },
    {
        'name': 'Armando',
        'email': 'Aliquam@orciin.net',
        'regDate': '2016-12-07T17:31:26-08:00',
        'city': 'Khanewal',
        'age': 30
    },
    {
        'name': 'Justin',
        'email': 'gravida.non.sollicitudin@placerataugue.edu',
        'regDate': '2016-09-23T20:17:41-07:00',
        'city': 'İslahiye',
        'age': 20
    },
    {
        'name': 'Zorita',
        'email': 'enim@risus.org',
        'regDate': '2015-06-14T12:12:00-07:00',
        'city': 'Burdinne',
        'age': 20
    },
    {
        'name': 'Mariam',
        'email': 'purus.mauris.a@odiosagittis.ca',
        'regDate': '2016-10-14T18:52:48-07:00',
        'city': 'Bharatpur',
        'age': 22
    },
    {
        'name': 'Malik',
        'email': 'Nam@enimEtiam.org',
        'regDate': '2016-09-20T18:06:55-07:00',
        'city': 'Neerheylissem',
        'age': 28
    },
    {
        'name': 'Claire',
        'email': 'sapien@Nullamlobortis.ca',
        'regDate': '2016-12-29T09:49:13-08:00',
        'city': 'San Fratello',
        'age': 24
    },
    {
        'name': 'Hilel',
        'email': 'tempor@purusmaurisa.edu',
        'regDate': '2016-07-09T12:03:31-07:00',
        'city': 'La Cruz',
        'age': 30
    },
    {
        'name': 'Alea',
        'email': 'vulputate@orciUt.ca',
        'regDate': '2015-03-21T02:28:40-07:00',
        'city': 'Leominster',
        'age': 43
    },
    {
        'name': 'Nash',
        'email': 'Nunc.ullamcorper.velit@egetmetuseu.edu',
        'regDate': '2016-10-21T10:38:41-07:00',
        'city': 'Gravataí',
        'age': 20
    },
    {
        'name': 'Brennan',
        'email': 'Vestibulum@Sedpharetra.org',
        'regDate': '2016-06-06T22:37:33-07:00',
        'city': 'Carleton',
        'age': 31
    },
    {
        'name': 'Diana',
        'email': 'Cras.vulputate@erosturpisnon.edu',
        'regDate': '2016-09-07T18:40:26-07:00',
        'city': 'Ripabottoni',
        'age': 36
    },
    {
        'name': 'Farrah',
        'email': 'dignissim.tempor.arcu@gravidamaurisut.edu',
        'regDate': '2016-11-30T23:52:41-08:00',
        'city': 'Aguacaliente (San Francisco)',
        'age': 37
    },
    {
        'name': 'August',
        'email': 'tincidunt.Donec@dictumeleifendnunc.org',
        'regDate': '2016-11-21T05:57:31-08:00',
        'city': 'Hameln',
        'age': 21
    },
    {
        'name': 'Reese',
        'email': 'et.magnis.dis@montesnasceturridiculus.net',
        'regDate': '2015-07-01T14:09:53-07:00',
        'city': 'St. Catharines',
        'age': 22
    },
    {
        'name': 'Pascale',
        'email': 'pede.ultrices@lacinia.com',
        'regDate': '2016-02-18T05:11:43-08:00',
        'city': 'Newmarket',
        'age': 50
    },
    {
        'name': 'Gage',
        'email': 'In.mi.pede@diameu.edu',
        'regDate': '2016-07-31T17:51:58-07:00',
        'city': 'Ilhéus',
        'age': 20
    },
    {
        'name': 'Nora',
        'email': 'Ut.semper.pretium@luctussit.net',
        'regDate': '2016-01-23T17:01:09-08:00',
        'city': 'Kirkintilloch',
        'age': 32
    },
    {
        'name': 'Jameson',
        'email': 'dolor.Fusce.feugiat@tempusnon.ca',
        'regDate': '2016-06-24T08:52:43-07:00',
        'city': 'Uikhoven',
        'age': 46
    },
    {
        'name': 'Ryder',
        'email': 'Vestibulum.accumsan@egetmetus.co.uk',
        'regDate': '2015-08-02T00:01:28-07:00',
        'city': 'São Gonçalo',
        'age': 28
    },
    {
        'name': 'Lyle',
        'email': 'libero.nec.ligula@euaugueporttitor.co.uk',
        'regDate': '2015-11-15T05:40:15-08:00',
        'city': 'Vieux-Genappe',
        'age': 29
    },
    {
        'name': 'Carly',
        'email': 'vitae.sodales@pretium.co.uk',
        'regDate': '2016-01-11T16:09:51-08:00',
        'city': 'Spresiano',
        'age': 48
    },
    {
        'name': 'Hector',
        'email': 'luctus@orci.com',
        'regDate': '2016-12-20T18:58:28-08:00',
        'city': 'Jerzu',
        'age': 35
    },
    {
        'name': 'Luke',
        'email': 'luctus.aliquet.odio@bibendumDonecfelis.edu',
        'regDate': '2016-03-06T03:19:08-08:00',
        'city': 'Bothey',
        'age': 45
    },
    {
        'name': 'Celeste',
        'email': 'et.malesuada.fames@utdolordapibus.org',
        'regDate': '2015-10-04T23:37:46-07:00',
        'city': 'Armstrong',
        'age': 42
    },
    {
        'name': 'Ila',
        'email': 'urna.Nullam@nullaCraseu.ca',
        'regDate': '2015-05-10T09:00:25-07:00',
        'city': 'Flint',
        'age': 34
    },
    {
        'name': 'Leila',
        'email': 'vehicula@orciUtsagittis.net',
        'regDate': '2016-11-13T02:20:11-08:00',
        'city': 'Ulloa (Barrial)',
        'age': 35
    },
    {
        'name': 'Zahir',
        'email': 'eleifend.non.dapibus@auguescelerisque.edu',
        'regDate': '2015-07-13T14:10:16-07:00',
        'city': 'Ñuñoa',
        'age': 21
    },
    {
        'name': 'Jin',
        'email': 'fames.ac.turpis@Namligula.edu',
        'regDate': '2015-06-17T23:31:55-07:00',
        'city': 'San Felipe',
        'age': 25
    },
    {
        'name': 'Wallace',
        'email': 'natoque.penatibus@tortorIntegeraliquam.com',
        'regDate': '2016-11-02T22:00:54-07:00',
        'city': 'Rock Springs',
        'age': 39
    },
    {
        'name': 'Wallace',
        'email': 'nulla.magna.malesuada@cursusNuncmauris.edu',
        'regDate': '2016-01-25T09:13:43-08:00',
        'city': 'Copiapó',
        'age': 31
    },
    {
        'name': 'Buffy',
        'email': 'est@Vestibulumanteipsum.edu',
        'regDate': '2016-10-10T13:54:26-07:00',
        'city': 'Sens',
        'age': 48
    },
    {
        'name': 'Jin',
        'email': 'orci.in@nuncsitamet.org',
        'regDate': '2017-01-23T07:56:18-08:00',
        'city': 'Drumheller',
        'age': 44
    },
    {
        'name': 'Ethan',
        'email': 'ad@enimcommodohendrerit.com',
        'regDate': '2015-07-09T20:16:24-07:00',
        'city': 'Ghaziabad',
        'age': 32
    },
    {
        'name': 'Sheila',
        'email': 'dictum@rhoncus.com',
        'regDate': '2015-10-15T05:15:47-07:00',
        'city': 'Hay River',
        'age': 25
    },
    {
        'name': 'Jolie',
        'email': 'facilisis@uterat.net',
        'regDate': '2016-04-30T20:48:31-07:00',
        'city': 'Anderlues',
        'age': 32
    },
    {
        'name': 'Eugenia',
        'email': 'dolor@nibhsit.ca',
        'regDate': '2017-01-23T06:17:22-08:00',
        'city': 'Wardha',
        'age': 36
    },
    {
        'name': 'Suki',
        'email': 'pretium.neque@consequatnecmollis.net',
        'regDate': '2016-04-20T07:03:02-07:00',
        'city': 'Meldert',
        'age': 42
    },
    {
        'name': 'Barrett',
        'email': 'a@lobortismaurisSuspendisse.edu',
        'regDate': '2015-08-27T11:25:51-07:00',
        'city': 'Keith',
        'age': 40
    },
    {
        'name': 'Tashya',
        'email': 'nascetur@tinciduntadipiscingMauris.ca',
        'regDate': '2015-05-31T10:57:18-07:00',
        'city': 'Sint-Amandsberg',
        'age': 30
    },
    {
        'name': 'Doris',
        'email': 'vitae@Ut.net',
        'regDate': '2015-03-17T08:21:56-07:00',
        'city': 'Freirina',
        'age': 27
    },
    {
        'name': 'Herrod',
        'email': 'arcu.Vestibulum@augueporttitorinterdum.co.uk',
        'regDate': '2016-08-31T10:30:49-07:00',
        'city': 'Hollabrunn',
        'age': 47
    },
    {
        'name': 'Patience',
        'email': 'gravida@in.ca',
        'regDate': '2017-02-26T03:44:58-08:00',
        'city': 'Borsbeek',
        'age': 21
    },
    {
        'name': 'Arden',
        'email': 'tincidunt.nunc.ac@nibhenim.ca',
        'regDate': '2017-01-29T12:42:50-08:00',
        'city': 'Wolkrange',
        'age': 36
    },
    {
        'name': 'Harper',
        'email': 'tempor.lorem@quisturpis.edu',
        'regDate': '2016-04-07T12:53:49-07:00',
        'city': 'Marano Lagunare',
        'age': 49
    },
    {
        'name': 'Burke',
        'email': 'lobortis@velpede.ca',
        'regDate': '2015-06-01T22:29:44-07:00',
        'city': 'Nadiad',
        'age': 49
    },
    {
        'name': 'Jael',
        'email': 'hendrerit.a.arcu@montes.edu',
        'regDate': '2016-05-08T03:28:35-07:00',
        'city': 'Cuenca',
        'age': 32
    },
    {
        'name': 'Stephanie',
        'email': 'dictum@Inmi.net',
        'regDate': '2016-03-29T01:03:51-07:00',
        'city': 'Driekapellen',
        'age': 39
    },
    {
        'name': 'Frances',
        'email': 'lectus.quis.massa@non.ca',
        'regDate': '2015-05-21T14:05:00-07:00',
        'city': 'Bama',
        'age': 38
    },
    {
        'name': 'Mark',
        'email': 'est.Mauris@arcuvel.ca',
        'regDate': '2015-08-01T19:53:38-07:00',
        'city': 'St. Andrews',
        'age': 44
    },
    {
        'name': 'Roth',
        'email': 'enim.non.nisi@Lorem.net',
        'regDate': '2016-10-12T15:20:15-07:00',
        'city': 'Teltow',
        'age': 26
    },
    {
        'name': 'Dakota',
        'email': 'sed.orci@ligulaAeneaneuismod.org',
        'regDate': '2016-05-21T06:15:26-07:00',
        'city': 'Dover',
        'age': 25
    },
    {
        'name': 'Teegan',
        'email': 'augue.eu.tempor@Integervulputate.org',
        'regDate': '2017-02-18T17:49:14-08:00',
        'city': 'Hattem',
        'age': 40
    },
    {
        'name': 'Chandler',
        'email': 'a.odio@sedturpis.edu',
        'regDate': '2015-05-23T17:57:39-07:00',
        'city': 'Wellington',
        'age': 34
    },
    {
        'name': 'Kathleen',
        'email': 'Ut.tincidunt.vehicula@consectetuerrhoncusNullam.edu',
        'regDate': '2016-03-09T13:50:40-08:00',
        'city': 'Weelde',
        'age': 30
    },
    {
        'name': 'Scarlet',
        'email': 'Suspendisse.non@montesnascetur.com',
        'regDate': '2015-06-21T11:13:19-07:00',
        'city': 'Tuktoyaktuk',
        'age': 32
    },
    {
        'name': 'Haley',
        'email': 'risus@Cras.net',
        'regDate': '2017-01-22T07:25:39-08:00',
        'city': 'Hudiksvall',
        'age': 23
    },
    {
        'name': 'Jesse',
        'email': 'odio@amet.org',
        'regDate': '2016-01-29T13:03:43-08:00',
        'city': 'Veere',
        'age': 43
    },
    {
        'name': 'Noble',
        'email': 'vulputate.risus.a@Quisqueliberolacus.co.uk',
        'regDate': '2016-08-16T08:07:57-07:00',
        'city': 'Cornwall',
        'age': 47
    },
    {
        'name': 'Phelan',
        'email': 'nascetur.ridiculus@fringilla.edu',
        'regDate': '2015-11-09T06:20:07-08:00',
        'city': 'Oosterhout',
        'age': 50
    },
    {
        'name': 'Amos',
        'email': 'Phasellus.fermentum@montesnascetur.ca',
        'regDate': '2016-01-20T22:02:46-08:00',
        'city': 'Llaillay',
        'age': 31
    },
    {
        'name': 'Pandora',
        'email': 'aliquet.Phasellus@sociis.ca',
        'regDate': '2016-02-21T02:47:32-08:00',
        'city': 'São José dos Pinhais',
        'age': 38
    },
    {
        'name': 'Jada',
        'email': 'eu@a.edu',
        'regDate': '2016-01-10T23:12:06-08:00',
        'city': 'Venezia',
        'age': 33
    },
    {
        'name': 'Abraham',
        'email': 'Nunc@Vivamus.com',
        'regDate': '2017-02-15T20:23:36-08:00',
        'city': 'Wambeek',
        'age': 41
    },
    {
        'name': 'Bert',
        'email': 'non.bibendum@mollisduiin.org',
        'regDate': '2015-07-17T06:27:40-07:00',
        'city': 'Vezzi Portio',
        'age': 35
    },
    {
        'name': 'Lars',
        'email': 'dolor.Fusce.feugiat@metusurnaconvallis.ca',
        'regDate': '2015-07-05T17:29:50-07:00',
        'city': 'Pinneberg',
        'age': 21
    },
    {
        'name': 'Bethany',
        'email': 'Sed.nulla.ante@sociosquadlitora.net',
        'regDate': '2015-12-23T01:47:18-08:00',
        'city': 'Idaho Falls',
        'age': 20
    },
    {
        'name': 'Jasmine',
        'email': 'id.enim.Curabitur@tellus.com',
        'regDate': '2016-11-23T15:51:48-08:00',
        'city': 'Narbonne',
        'age': 48
    },
    {
        'name': 'Brody',
        'email': 'ac.orci@facilisisnon.com',
        'regDate': '2015-11-18T20:56:24-08:00',
        'city': 'Livingston',
        'age': 30
    },
    {
        'name': 'Alec',
        'email': 'in@aliquameu.org',
        'regDate': '2015-04-21T03:17:43-07:00',
        'city': 'Harlingen',
        'age': 21
    },
    {
        'name': 'Audrey',
        'email': 'Donec@Aliquamadipiscinglobortis.org',
        'regDate': '2016-12-06T20:14:43-08:00',
        'city': 'Sars-la-Buissire',
        'age': 25
    },
    {
        'name': 'Forrest',
        'email': 'leo.elementum@ridiculus.co.uk',
        'regDate': '2015-09-15T11:17:42-07:00',
        'city': 'Langholm',
        'age': 50
    },
    {
        'name': 'Jessica',
        'email': 'a.mi.fringilla@montes.net',
        'regDate': '2016-07-29T15:13:38-07:00',
        'city': 'Sioux City',
        'age': 42
    },
    {
        'name': 'Cedric',
        'email': 'Praesent.eu.nulla@tempordiamdictum.co.uk',
        'regDate': '2016-10-02T05:17:43-07:00',
        'city': 'Nazilli',
        'age': 21
    },
    {
        'name': 'Maile',
        'email': 'pharetra@Duisatlacus.edu',
        'regDate': '2016-12-29T18:47:43-08:00',
        'city': 'Salerno',
        'age': 40
    },
    {
        'name': 'Acton',
        'email': 'consequat.auctor@Quisque.org',
        'regDate': '2017-01-19T05:53:38-08:00',
        'city': 'Motta Camastra',
        'age': 46
    },
    {
        'name': 'Macey',
        'email': 'faucibus@tellus.org',
        'regDate': '2015-10-30T13:07:22-07:00',
        'city': 'St. Thomas',
        'age': 40
    },
    {
        'name': 'Iona',
        'email': 'rutrum.justo@eu.org',
        'regDate': '2015-11-10T14:36:30-08:00',
        'city': 'Legal',
        'age': 48
    },
    {
        'name': 'Eve',
        'email': 'risus.Morbi@aliquameros.com',
        'regDate': '2015-12-21T09:25:33-08:00',
        'city': 'Illapel',
        'age': 42
    },
    {
        'name': 'Jayme',
        'email': 'a.nunc.In@convallisante.ca',
        'regDate': '2016-02-07T10:22:09-08:00',
        'city': 'Ville de Maniwaki',
        'age': 30
    },
    {
        'name': 'Bo',
        'email': 'posuere.cubilia.Curae@estNunclaoreet.net',
        'regDate': '2016-08-16T20:42:44-07:00',
        'city': 'Pak Pattan',
        'age': 24
    },
    {
        'name': 'Matthew',
        'email': 'enim.Mauris.quis@vehicula.edu',
        'regDate': '2015-05-01T01:53:59-07:00',
        'city': 'Alacant',
        'age': 35
    },
    {
        'name': 'Justina',
        'email': 'Donec.nibh@Vivamusmolestie.ca',
        'regDate': '2015-06-24T14:38:07-07:00',
        'city': 'Kobbegem',
        'age': 22
    }
];


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zenochan/Z.Project/AngularX/1906-ngx-pagedata-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map