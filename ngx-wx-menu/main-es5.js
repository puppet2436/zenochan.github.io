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

/***/ "./node_modules/raw-loader/index.js!./projects/wx-menu/src/lib/wx-menu.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/wx-menu/src/lib/wx-menu.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- 自定义菜单 -->\n  <!--  <h3>自定义菜单</h3>-->\n\n  <div class=\"custom-menu-edit-con\">\n    <div class=\"hbox\">\n      <div class=\"inner-left\">\n        <div class=\"custom-menu-view-con\">\n          <div class=\"custom-menu-view\">\n            <div class=\"custom-menu-view__title\" [innerText]=\"name\"></div>\n            <div class=\"custom-menu-view__body\">\n              <div class=\"weixin-msg-list\">\n                <ul class=\"msg-con\"></ul>\n              </div>\n            </div>\n            <div id=\"menuMain\" class=\"custom-menu-view__footer\">\n              <div class=\"custom-menu-view__footer__left\"></div>\n              <div class=\"custom-menu-view__footer__right\">\n                <div class=\"custom-menu-view__menu\" [class.subbutton__actived]=\"active == button\"\n                     *ngFor=\"let button of menu?.button\">\n                  <div class=\"text-ellipsis\" (click)=\"active = button\" [innerText]=\"button.name\"></div>\n\n\n                  <ul class=\"custom-menu-view__menu__sub\">\n\n                    <li class=\"custom-menu-view__menu__sub__add\"\n                        *ngFor=\"let sub of button.subButton\"\n                        [class.subbutton__actived]=\"active == sub\"\n                        (click)=\"active = sub\"\n                    >\n                      <div class=\"text-ellipsis\">{{sub.name}}</div>\n                    </li>\n\n                    <li class=\"custom-menu-view__menu__sub__add\" *ngIf=\"button.subButton?.length<5\"\n                        (click)=\"addSubButton(button)\">\n                      <div class=\"text-ellipsis text-info\">添加</div>\n                    </li>\n                  </ul>\n                </div>\n\n                <div class=\"custom-menu-view__menu\" *ngIf=\"menu?.button?.length<3\">\n                  <div class=\"text-ellipsis text-info\" (click)=\"addButton()\"> 添加</div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"inner-right\">\n        <div class=\"cm-edit-after\" *ngIf=\"active\">\n          <div class=\"cm-edit-right-header b-b\" style=\"display: flex\">\n            <span id=\"cm-tit\">{{active.name}}</span>\n            <div style=\"flex: 1\"></div>\n            <a class=\"pull-right\" (click)=\"deleteMenu()\">删除菜单</a>\n          </div>\n\n          <form class=\"form-horizontal wrapper-md\" name=\"custom_form\">\n            <div class=\"form-group\">\n              <label class=\"control-label\">菜单名称</label>\n              <input class=\"form-control\"\n                     placeholder=\"输入菜单名称\" maxlength=\"5\" type=\"text\"\n                     [(ngModel)]=\"active.name\" name=\"name\"\n              >\n              <div class=\"help-block\">\n                <div\n                    ng-show=\"custom_form.custom_input_title.$dirty&&custom_form.custom_input_title.$invalid-maxlength\">\n                  字数不超过5个汉字或16个字符\n                </div>\n                <div class=\"font_sml\">若无二级菜单，可输入20个汉字或60个字符</div>\n              </div>\n            </div>\n\n            <div class=\"form-group\" style=\"margin-top: 20px\">\n              <div class=\"control-label\">菜单排序</div>\n              <div class=\"menu-move\">\n                <button [disabled]=\"!canMove(active,'left')\" (click)=\"move(active,'left')\">←</button>\n                <button [disabled]=\"!canMove(active,'up')\" (click)=\"move(active,'up')\">↑</button>\n                <button [disabled]=\"!canMove(active,'down')\" (click)=\"move(active,'down')\">↓️</button>\n                <button [disabled]=\"!canMove(active,'right')\" (click)=\"move(active,'right')\">→</button>\n              </div>\n            </div>\n\n          </form>\n\n          <div class=\"cm-edit-content-con\" id=\"editPage\" *ngIf=\"active.type == 'view'\">\n            <div class=\"cm-edit-page\">\n              <label class=\"ccontrol-label\" style=\"text-align: left;\">粉丝点击该菜单会跳转到以下链接:\n              </label>\n              <div>\n                  <textarea type=\"text\" name=\"url\" class=\"form-control\" placeholder=\"认证号才可手动输入地址\"\n                            [(ngModel)]=\"active.url\"\n                  ></textarea>\n                <span class=\"help-block\">必填,必须是正确的URL格式</span>\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n        <div *ngIf=\"!active\" class=\"cm-edit-before\"><h5>点击左侧菜单进行操作</h5></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"cm-edit-footer\" *ngIf=\"!_hideSubmit\">\n    <button type=\"button\" class=\"btn btn-info1\" (click)=\"onSubmit.emit()\">保存</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<z-wx-menu [(menu)]=\"menu\" name=\"无印良品\" (onSubmit)=\"submit($event)\" hide-submit></z-wx-menu>\n"

/***/ }),

/***/ "./projects/wx-menu/src/lib/wx-menu.component.scss":
/*!*********************************************************!*\
  !*** ./projects/wx-menu/src/lib/wx-menu.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n* {\n  box-sizing: border-box;\n}\na:link, a:visited, a:active {\n  text-decoration: none;\n}\nul, ol {\n  list-style: none;\n}\ninput, textarea {\n  background-color: #fff;\n  border: 1px solid #ccc;\n  box-shadow: none !important;\n  border-radius: 0 !important;\n  transition: border linear 0.2s, box-shadow linear 0.2s;\n}\ninput:focus {\n  outline: none;\n  border: 1px solid #4d90fe !important;\n}\n.text-info {\n  color: #23b7e5;\n}\n/*自定义菜单*/\n.custom-menu-edit-con {\n  position: relative;\n  padding: 20px;\n}\n.hbox {\n  display: table;\n  table-layout: fixed;\n  border-spacing: 0;\n  width: 100%;\n}\n.inner-left {\n  width: 380px;\n  display: table-cell;\n  vertical-align: top;\n  height: 100%;\n  padding: 0;\n  float: none;\n  border-left: 1px solid #dee5e7;\n  border-bottom: 1px solid #dee5e7;\n  border-top: 1px solid #dee5e7;\n  position: relative;\n}\n.inner-right {\n  position: relative;\n  background: #f3f4f8;\n  display: table-cell;\n  vertical-align: top;\n  height: 100%;\n  padding: 0;\n  float: none;\n  border-left: 1px solid #dee5e7;\n  border-bottom: 1px solid #dee5e7;\n  border-right: 1px solid #dee5e7;\n  border-top: 1px solid #dee5e7;\n}\n.custom-menu-view-con {\n  width: 309px;\n  height: 506px;\n  position: relative;\n  margin: 50px auto;\n}\n.custom-menu-view {\n  height: 100%;\n  border: 1px solid #dedede;\n}\n.custom-menu-view__title {\n  height: 40px;\n  line-height: 40px;\n  text-align: center;\n  background: #323232;\n  color: #fff;\n}\n.custom-menu-view__body {\n  position: absolute;\n  top: 40px;\n  left: 1px;\n  right: 1px;\n  bottom: 50px;\n  background: #f2f2f2;\n  overflow: auto;\n  border-bottom: 1px solid #dee5e7;\n  border-top: 1px solid #dee5e7;\n}\n.weixin-msg-list {\n  height: 100%;\n  width: 100%;\n}\n.weixin-msg-list .msg-con {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.custom-menu-view__footer {\n  position: absolute;\n  height: 50px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n.custom-menu-view__footer__left {\n  position: absolute;\n  width: 40px;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  border-right: 1px solid #dee5e7;\n  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAASCAIAAAA2bnI+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMzRlN2QzZC05ZmVmLWRjNDMtOTZiMS04NGQ4YTU0ZjRhODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDIzNDhCNjk5QkVFMTFFNkFBMkZCMzIwMzdCQTkyQkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDIzNDhCNjg5QkVFMTFFNkFBMkZCMzIwMzdCQTkyQkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YTU1MDhmYjktZGFiMi03NjQwLTk5NzktZDdmMzg4NzNlMGZkIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6YWUyOWY2MGYtNjA2OS0xMWU2LWE1ZmEtYjkxYTgyMmMwNjZhIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kOMINgAAAmhJREFUeNqMUltrE0EY3dnNbi6btknaoolVEVFri6D/QBAFwUefBH+bSJGqeHmoCgpN24Sq2AsWbS5NkxCbNJdKNjY2l53dGc9kxVKTh8zD8jF7vvOdOd8hpmlKfcflUtY2vu5ksvfu3hkZ8TPG+jHyoDZXsVReia2icyX+ETeEkH4Y6Z8JXFcck8hE4pKu+4btdJplWcjhnA+UKjCU0h6Io5aGPrZtk2azmc0VGOeKLGMACECEOUQMJowzRyqGy4TwXk8oGDg7FSGJZNqv66HxYKfdgTd4m2lSt6Yyxi3bcmsapRaXuKaqXdNUFEV1qenM7qWLFzCHjwVGFUV+8uxlsbQPZx7PzVu2ncsXnj5/ret6bPXTYjTu9/tfvFrYTqRgmMfjtm3mcpSgqlZrrVYbA8uVmmVZrVarWjvAL8NodLrCxdrBz2bzt4MXbwWNYRiUmpB9eHhITfo9kURno9FIpTMA7RVLhR97KLDeSrUKCwAAneisG4ZlUfxLpnbW1jdRfP6yvpvNwbDocrxeN8C4uBTrdrqsd5zOExna2NxajonQRJfiW9+22+3Om3cfSvtlyF54+95oNCRHpxO1fxVGnT83FQiOoZ6dmY5ETsPPG9evBYMBp3C73ay3m79JgNpw+NSoiLXgOzpqYRkuRQE7hGEN+ILU6/VomoYCm0uk0mfC4eOZqqrm84VHc/NE0J7IEwy/On354YP72O2xWiFAlhVFUExMhG7futnL7X9ZY5OT47hWVcCIsxUC0yuVms/nRdBkImuaOjDejNkmtUAIGDWt2ZkrIvG/sEbcDhd4zIMpePMfAQYAmQ2NztqXT6sAAAAASUVORK5CYII=);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n.custom-menu-view__footer__right {\n  position: absolute;\n  left: 40px;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  font-size: 13px;\n  display: flex;\n}\n.custom-menu-view__menu {\n  height: 50px;\n  line-height: 50px;\n  text-align: center;\n  border-right: 1px solid #dee5e7;\n  position: relative;\n  cursor: pointer;\n  float: left;\n  width: 33.3333%;\n  flex: 1;\n}\n.text-ellipsis {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.text-ellipsis i {\n  display: block;\n  padding: 19px 0;\n  width: 100%;\n}\n.custom-menu-view__menu__sub {\n  left: 4px;\n  right: 4px;\n  position: absolute;\n  bottom: 60px;\n  border: 1px solid #dee5e7;\n  border-radius: 5px;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  background: #fff;\n  font-size: 10px;\n}\n.custom-menu-view__menu__sub li {\n  position: relative;\n  height: 50px;\n  line-height: 50px;\n  cursor: pointer;\n  padding: 0;\n  border-bottom: 1px solid #dee5e7;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.custom-menu-view__menu__sub:last-child {\n  border-bottom: 0;\n}\n.custom-menu-view__menu__sub:after {\n  bottom: -4px;\n  display: inline-block;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  margin-left: -6px;\n  width: 0;\n  height: 0;\n  border-width: 6px;\n  border-style: dashed;\n  border-color: transparent;\n  border-bottom-width: 0;\n  border-top-style: solid;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 5px solid #fff;\n}\n.custom-menu-view .button__actived, .custom-menu-view .subbutton__actived {\n  border: 1px solid #23b7e5 !important;\n  z-index: 1;\n}\n.custom-menu-view__menu__sub li:hover {\n  background: #ededed;\n}\n.inner-right {\n  position: relative;\n  background: #f3f4f8;\n  padding: 0 !important;\n  display: table-cell;\n  vertical-align: top;\n  height: 100%;\n  padding: 0;\n  float: none;\n  border-left: 1px solid #dee5e7;\n  border-bottom: 1px solid #dee5e7;\n  border-right: 1px solid #dee5e7;\n  border-top: 1px solid #dee5e7;\n  color: #58666e;\n}\n.cm-edit-before {\n  position: absolute;\n  text-align: center;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.cm-edit-before:before {\n  content: \"\";\n  display: inline-block;\n  vertical-align: middle;\n  height: 100%;\n  font-size: 0;\n}\n.cm-edit-before h5 {\n  display: inline-block;\n  color: #98a6ad;\n}\n.cm-edit-right-header {\n  height: 50px;\n  line-height: 50px;\n  padding: 0 20px;\n  border-bottom: 1px solid #dee5e7;\n}\n.cm-edit-right-header a {\n  color: #31708f;\n}\n.cm-edit-right-header a:hover {\n  text-decoration: none;\n}\n.wrapper-md {\n  padding: 20px;\n}\n.help-block {\n  display: block;\n  margin-bottom: 10px;\n  color: #a3a3a3;\n  margin: 0;\n  padding-top: 5px;\n  font-size: 13px;\n}\n.wrapper-md label {\n  font-weight: normal;\n}\n.editTab {\n  /*margin: 0px 15px;*/\n}\n.Input_Box {\n  width: 100%;\n  min-height: 160px;\n  background-color: #fff;\n  overflow: hidden;\n}\n.Input_text {\n  width: 100%;\n  height: 256px;\n  padding: 5px;\n  outline: none;\n  border: 0px solid #fff;\n  resize: none;\n  font: 13px \"微软雅黑\", Arial, Helvetica, sans-serif;\n  border-radius: 5px;\n}\n.Input_Foot {\n  width: 100%;\n  height: 40px;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n  border-radius: 0 0 5px 5px;\n  position: relative;\n  bottom: 0;\n}\n.imgBtn {\n  float: left;\n  text-decoration: none;\n  margin-top: 8px;\n  margin-left: 10px;\n  text-align: center;\n  background-repeat: no-repeat;\n  background-position: 0 -13px;\n  height: 18px;\n  width: 20px;\n  cursor: pointer;\n}\n.imgBtn:active {\n  margin-top: 9px;\n}\n.imgBtn:hover {\n  background-position: 0 -31px;\n}\n.postBtn {\n  float: right;\n  font: 13px \"微软雅黑\", Arial, Helvetica, sans-serif;\n  color: #808080;\n  padding: 9px 20px 7px 20px;\n  border-left: 1px solid #ccc;\n  cursor: pointer;\n  border-radius: 0 0 5px 0;\n}\n.postBtn:hover {\n  color: #333;\n  background-color: #efefef;\n}\n.msg-panel__context .msg-context__item i {\n  color: #00a2ff;\n}\n.msg-panel__context .msg-context__item:hover {\n  border-color: #000;\n}\n#selectModal h4 {\n  text-align: center;\n  color: #58666e;\n  font-size: 14px;\n}\n#selectModal .modal-header, #selectModal .modal-footer {\n  background: #f4f5f9;\n}\n#selectModal .modal-body {\n  overflow-y: auto;\n  height: 450px;\n}\n#selectModal .panel {\n  position: relative;\n  cursor: pointer;\n}\n.mask-bg {\n  position: absolute;\n  z-index: 1111;\n  background: rgba(0, 0, 0, 0.6);\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 0px;\n  bottom: 0px;\n  display: none;\n}\n.mask-bg .mask-icon {\n  height: 100%;\n  position: relative;\n}\n.mask-bg i {\n  color: #fff;\n  font-size: 24px;\n  width: 25px;\n  height: 25px;\n  display: table-cell;\n  position: absolute;\n  margin: auto;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  vertical-align: middle;\n}\n.cm-edit-content-con {\n  background: #fff;\n  min-height: 300px;\n  margin: 0 15px 15px;\n  border: 1px solid #dee5e7;\n}\n.cm-edit-content-con .cm-edit-page {\n  padding: 20px;\n}\n.cm-edit-content-con .cm-edit-page .row {\n  margin-bottom: 10px;\n}\n.cm-edit-content-con .cm-edit-page .row label {\n  font-weight: normal;\n}\n.cm-edit-footer {\n  margin-bottom: 20px;\n  text-align: right;\n  padding-right: 20px;\n}\n.cm-edit-footer button {\n  height: 40px;\n  width: 120px;\n  font-size: 16px;\n}\n.btn-info1 {\n  color: #fff !important;\n  background-color: #138ed4;\n  border-color: #138ed4;\n}\n.form-control {\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  background-color: white;\n}\ntextarea.form-control {\n  height: 12em;\n  resize: none;\n}\n.menu-move {\n  display: flex;\n  padding: 1px;\n}\n.menu-move button {\n  flex: 1;\n  text-align: center;\n  margin: 4px;\n  height: 40px;\n  border-radius: 4px;\n  background: white;\n  font-size: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL3d4LW1lbnUvc3JjL2xpYi93eC1tZW51LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3plbm9jaGFuL1ouUHJvamVjdC9Bbmd1bGFyWC8xOTA2LXd4LW1lbnUtbGliL3Byb2plY3RzL3d4LW1lbnUvc3JjL2xpYi93eC1tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLHNCQUFBO0FERUY7QUNDQTtFQUNFLHFCQUFBO0FERUY7QUNDQTtFQUNFLGdCQUFBO0FERUY7QUNDQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0RBQUE7QURFRjtBQ0NBO0VBQ0UsYUFBQTtFQUNBLG9DQUFBO0FERUY7QUNDQTtFQUNFLGNBQUE7QURFRjtBQ0NBLFFBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtBREVGO0FDQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURFRjtBQ0NBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBREVGO0FDQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0FERUY7QUNFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRENGO0FDRUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QURDRjtBQ0VBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBO0VBQ0Usa0JBQUE7RUFDQSxTQUFB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QSxpQkFBQTtFQUNBLG1CQUFBO0FEUkY7QUNVRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRFJKO0FDWUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QURURjtBQ1lBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0RBQUE7RUFFQSx1QkFBQTtBRFZGO0FDZ0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QURiRjtBQ2dCQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0FEYkY7QUNlRTtFQUNFLE9BQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURiSiIsImZpbGUiOiJwcm9qZWN0cy93eC1tZW51L3NyYy9saWIvd3gtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbioge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCwgYTphY3RpdmUge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsLCBvbCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmlucHV0LCB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBib3JkZXIgbGluZWFyIDAuMnMsIGJveC1zaGFkb3cgbGluZWFyIDAuMnM7XG59XG5cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRkOTBmZSAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1pbmZvIHtcbiAgY29sb3I6ICMyM2I3ZTU7XG59XG5cbi8q6Ieq5a6a5LmJ6I+c5Y2VKi9cbi5jdXN0b20tbWVudS1lZGl0LWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmhib3gge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaW5uZXItbGVmdCB7XG4gIHdpZHRoOiAzODBweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbm9uZTtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZGVlNWU3O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTVlNztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlubmVyLXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBub25lO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlNWU3O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlNWU3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTVlNztcbn1cblxuLmN1c3RvbS1tZW51LXZpZXctY29uIHtcbiAgd2lkdGg6IDMwOXB4O1xuICBoZWlnaHQ6IDUwNnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogNTBweCBhdXRvO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlldyB7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX3RpdGxlIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX2JvZHkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMXB4O1xuICByaWdodDogMXB4O1xuICBib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTVlNztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWU1ZTc7XG59XG5cbi53ZWl4aW4tbXNnLWxpc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ud2VpeGluLW1zZy1saXN0IC5tc2ctY29uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5jdXN0b20tbWVudS12aWV3X19mb290ZXJfX2xlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTVlNztcbiAgYmFja2dyb3VuZDogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQk1BQUFBU0NBSUFBQUEyYm5JK0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBNFJwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMGk3N3UvSWlCcFpEMGlWelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0lqOCtJRHg0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBpWVdSdlltVTZibk02YldWMFlTOGlJSGc2ZUcxd2RHczlJa0ZrYjJKbElGaE5VQ0JEYjNKbElEVXVOUzFqTURJeElEYzVMakUxTkRreE1Td2dNakF4TXk4eE1DOHlPUzB4TVRvME56b3hOaUFnSUNBZ0lDQWdJajRnUEhKa1pqcFNSRVlnZUcxc2JuTTZjbVJtUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMekF5THpJeUxYSmtaaTF6ZVc1MFlYZ3Ribk1qSWo0Z1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUlpSWdlRzFzYm5NNmVHMXdUVTA5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5dGJTOGlJSGh0Ykc1ek9uTjBVbVZtUFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdmMxUjVjR1V2VW1WemIzVnlZMlZTWldZaklpQjRiV3h1Y3pwNGJYQTlJbWgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhpSUhodGNFMU5Pazl5YVdkcGJtRnNSRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRHBsTXpSbE4yUXpaQzA1Wm1WbUxXUmpORE10T1RaaU1TMDROR1E0WVRVMFpqUmhPRGdpSUhodGNFMU5Pa1J2WTNWdFpXNTBTVVE5SW5odGNDNWthV1E2UkRJek5EaENOams1UWtWRk1URkZOa0ZCTWtaQ016SXdNemRDUVRreVFrUWlJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZSREl6TkRoQ05qZzVRa1ZGTVRGRk5rRkJNa1pDTXpJd016ZENRVGt5UWtRaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVORElESXdNVFVnS0ZkcGJtUnZkM01wSWo0Z1BIaHRjRTFOT2tSbGNtbDJaV1JHY205dElITjBVbVZtT21sdWMzUmhibU5sU1VROUluaHRjQzVwYVdRNllUVTFNRGhtWWprdFpHRmlNaTAzTmpRd0xUazVOemt0WkRkbU16ZzROek5sTUdaa0lpQnpkRkpsWmpwa2IyTjFiV1Z1ZEVsRVBTSmhaRzlpWlRwa2IyTnBaRHB3YUc5MGIzTm9iM0E2WVdVeU9XWTJNR1l0TmpBMk9TMHhNV1UyTFdFMVptRXRZamt4WVRneU1tTXdOalpoSWk4K0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBpQThMM0prWmpwU1JFWStJRHd2ZURwNGJYQnRaWFJoUGlBOFAzaHdZV05yWlhRZ1pXNWtQU0p5SWo4K2tPTUlOZ0FBQW1oSlJFRlVlTnFNVWx0ckUwRVkzZG5OYmk2YnRrbmFvb2xWRVZGcmk2RC9RQkFGd1VlZkJIK2JTSkdxZUhtb0NncE4yNFNxMkFzV2JTNU5reENiTkpkS05qWTJsNTNkR2M5a3hWS1RoOHpEOGpGN3Z2T2RPZDhocG1sS2ZjZmxVdFkydnU1a3N2ZnUzaGtaOFRQRytqSHlvRFpYc1ZSZWlhMmljeVgrRVRlRWtINFk2WjhKWEZjY2s4aEU0cEt1KzRidGRKcGxXY2pobkErVUtqQ1UwaDZJbzVhR1ByWnRrMmF6bWMwVkdPZUtMR01BQ0VDRU9VUU1Kb3d6UnlxR3k0VHdYazhvR0RnN0ZTR0paTnF2NjZIeFlLZmRnVGQ0bTJsU3Q2WXl4aTNiY21zYXBSYVh1S2FxWGROVUZFVjFxZW5NN3FXTEZ6Q0hqd1ZHRlVWKzh1eGxzYlFQWng3UHpWdTJuY3NYbmo1L3JldDZiUFhUWWpUdTkvdGZ2RnJZVHFSZ21NZmp0bTNtY3BTZ3FsWnJyVlliQTh1Vm1tVlpyVmFyV2p2QUw4Tm9kTHJDeGRyQnoyYnp0NE1YYndXTllSaVVtcEI5ZUhoSVRmbzlrVVJubzlGSXBUTUE3UlZMaFI5N0tMRGVTclVLQ3dBQW5laXNHNFpsVWZ4THBuYlcxamRSZlA2eXZwdk53YkRvY3J4ZU44QzR1QlRyZHJxc2Q1ek9FeG5hMk54YWpvblFSSmZpVzkrMjIrM09tM2NmU3Z0bHlGNTQrOTVvTkNSSHB4TzFmeFZHblQ4M0ZRaU9vWjZkbVk1RVRzUFBHOWV2QllNQnAzQzczYXkzbTc5SmdOcHcrTlNvaUxYZ096cHFZUmt1UlFFN2hHRU4rSUxVNi9Wb21vWUNtMHVrMG1mQzRlT1pxcXJtODRWSGMvTkUwSjdJRXd5L09uMzU0WVA3Mk8yeFdpRkFsaFZGVUV4TWhHN2Z1dG5MN1g5Wlk1T1Q0N2hXVmNDSXN4VUMweXVWbXMvblJkQmtJbXVhT2pEZWpOa210VUFJR0RXdDJaa3JJdkcvc0ViY0RoZDR6SU1wZVBNZkFRWUFtUTJOenRxWFQ2c0FBQUFBU1VWT1JLNUNZSUk9KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fZm9vdGVyX19yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNDBweDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jdXN0b20tbWVudS12aWV3X19tZW51IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlNWU3O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAzMy4zMzMzJTtcbiAgZmxleDogMTtcbn1cblxuLnRleHQtZWxsaXBzaXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi50ZXh0LWVsbGlwc2lzIGkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTlweCAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX21lbnVfX3N1YiB7XG4gIGxlZnQ6IDRweDtcbiAgcmlnaHQ6IDRweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDYwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5jdXN0b20tbWVudS12aWV3X19tZW51X19zdWIgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fbWVudV9fc3ViOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fbWVudV9fc3ViOmFmdGVyIHtcbiAgYm90dG9tOiAtNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTZweDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgYm9yZGVyLXdpZHRoOiA2cHg7XG4gIGJvcmRlci1zdHlsZTogZGFzaGVkO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZmZmO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlldyAuYnV0dG9uX19hY3RpdmVkLCAuY3VzdG9tLW1lbnUtdmlldyAuc3ViYnV0dG9uX19hY3RpdmVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzIzYjdlNSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fbWVudV9fc3ViIGxpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cblxuLmlubmVyLXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTVlNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlNWU3O1xuICBjb2xvcjogIzU4NjY2ZTtcbn1cblxuLmNtLWVkaXQtYmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cbi5jbS1lZGl0LWJlZm9yZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGhlaWdodDogMTAwJTtcbiAgZm9udC1zaXplOiAwO1xufVxuLmNtLWVkaXQtYmVmb3JlIGg1IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzk4YTZhZDtcbn1cblxuLmNtLWVkaXQtcmlnaHQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTVlNztcbn1cblxuLmNtLWVkaXQtcmlnaHQtaGVhZGVyIGEge1xuICBjb2xvcjogIzMxNzA4Zjtcbn1cblxuLmNtLWVkaXQtcmlnaHQtaGVhZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53cmFwcGVyLW1kIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlbHAtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNhM2EzYTM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ud3JhcHBlci1tZCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5lZGl0VGFiIHtcbiAgLyptYXJnaW46IDBweCAxNXB4OyovXG59XG5cbi5JbnB1dF9Cb3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5JbnB1dF90ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjU2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcbiAgcmVzaXplOiBub25lO1xuICBmb250OiAxM3B4IFwi5b6u6L2v6ZuF6buRXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uSW5wdXRfRm9vdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG59XG5cbi5pbWdCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzcHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ0J0bjphY3RpdmUge1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbi5pbWdCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMXB4O1xufVxuXG4ucG9zdEJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udDogMTNweCBcIuW+rui9r+mbhem7kVwiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzgwODA4MDtcbiAgcGFkZGluZzogOXB4IDIwcHggN3B4IDIwcHg7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbn1cblxuLnBvc3RCdG46aG92ZXIge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbn1cblxuLm1zZy1wYW5lbF9fY29udGV4dCAubXNnLWNvbnRleHRfX2l0ZW0gaSB7XG4gIGNvbG9yOiAjMDBhMmZmO1xufVxuXG4ubXNnLXBhbmVsX19jb250ZXh0IC5tc2ctY29udGV4dF9faXRlbTpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzAwMDtcbn1cblxuI3NlbGVjdE1vZGFsIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU4NjY2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jc2VsZWN0TW9kYWwgLm1vZGFsLWhlYWRlciwgI3NlbGVjdE1vZGFsIC5tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY5O1xufVxuXG4jc2VsZWN0TW9kYWwgLm1vZGFsLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4jc2VsZWN0TW9kYWwgLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXNrLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMTExO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tYXNrLWJnIC5tYXNrLWljb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLm1hc2stYmcgaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDI0cHg7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luOiBhdXRvO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY20tZWRpdC1jb250ZW50LWNvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xuICBtYXJnaW46IDAgMTVweCAxNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlNWU3O1xufVxuXG4uY20tZWRpdC1jb250ZW50LWNvbiAuY20tZWRpdC1wYWdlIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jbS1lZGl0LWNvbnRlbnQtY29uIC5jbS1lZGl0LXBhZ2UgLnJvdyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uY20tZWRpdC1jb250ZW50LWNvbiAuY20tZWRpdC1wYWdlIC5yb3cgbGFiZWwge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uY20tZWRpdC1mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5jbS1lZGl0LWZvb3RlciBidXR0b24ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMjBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uYnRuLWluZm8xIHtcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEzOGVkNDtcbiAgYm9yZGVyLWNvbG9yOiAjMTM4ZWQ0O1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XG4gIGNvbG9yOiAjNTU1O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDc1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMTJlbTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubWVudS1tb3ZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXB4O1xufVxuLm1lbnUtbW92ZSBidXR0b24ge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogNHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn0iLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYTpsaW5rLCBhOnZpc2l0ZWQsIGE6YWN0aXZlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCwgb2wge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbnB1dCwgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYm9yZGVyIGxpbmVhciAuMnMsIGJveC1zaGFkb3cgbGluZWFyIC4ycztcbn1cblxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNGQ5MGZlICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWluZm8ge1xuICBjb2xvcjogIzIzYjdlNTtcbn1cblxuLyroh6rlrprkuYnoj5zljZUqL1xuLmN1c3RvbS1tZW51LWVkaXQtY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4uaGJveCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5pbm5lci1sZWZ0IHtcbiAgd2lkdGg6IDM4MHB4O1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGZsb2F0OiBub25lO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlNWU3O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTVlNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaW5uZXItcmlnaHQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6ICNmM2Y0Zjg7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTVlNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlNWU3O1xufVxuXG5cbi5jdXN0b20tbWVudS12aWV3LWNvbiB7XG4gIHdpZHRoOiAzMDlweDtcbiAgaGVpZ2h0OiA1MDZweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuLmN1c3RvbS1tZW51LXZpZXcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG59XG5cbi5jdXN0b20tbWVudS12aWV3X190aXRsZSB7XG4gIGhlaWdodDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogIzMyMzIzMjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jdXN0b20tbWVudS12aWV3X19ib2R5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQwcHg7XG4gIGxlZnQ6IDFweDtcbiAgcmlnaHQ6IDFweDtcbiAgYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlNWU3O1xufVxuXG4ud2VpeGluLW1zZy1saXN0IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLndlaXhpbi1tc2ctbGlzdCAubXNnLWNvbiB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX2Zvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fZm9vdGVyX19sZWZ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNDBweDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJNQUFBQVNDQUlBQUFBMmJuSStBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQTRScFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TlMxak1ESXhJRGM1TGpFMU5Ea3hNU3dnTWpBeE15OHhNQzh5T1MweE1UbzBOem94TmlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3VFUwOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXRiUzhpSUhodGJHNXpPbk4wVW1WbVBTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZjMVI1Y0dVdlVtVnpiM1Z5WTJWU1pXWWpJaUI0Yld4dWN6cDRiWEE5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4aUlIaHRjRTFOT2s5eWFXZHBibUZzUkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRwbE16UmxOMlF6WkMwNVptVm1MV1JqTkRNdE9UWmlNUzA0TkdRNFlUVTBaalJoT0RnaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNlJESXpORGhDTmprNVFrVkZNVEZGTmtGQk1rWkNNekl3TXpkQ1FUa3lRa1FpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2UkRJek5EaENOamc1UWtWRk1URkZOa0ZCTWtaQ016SXdNemRDUVRreVFrUWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTkRJREl3TVRVZ0tGZHBibVJ2ZDNNcElqNGdQSGh0Y0UxTk9rUmxjbWwyWldSR2NtOXRJSE4wVW1WbU9tbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZZVFUxTURobVlqa3RaR0ZpTWkwM05qUXdMVGs1TnprdFpEZG1Nemc0TnpObE1HWmtJaUJ6ZEZKbFpqcGtiMk4xYldWdWRFbEVQU0poWkc5aVpUcGtiMk5wWkRwd2FHOTBiM05vYjNBNllXVXlPV1kyTUdZdE5qQTJPUzB4TVdVMkxXRTFabUV0WWpreFlUZ3lNbU13TmpaaElpOCtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQaUE4TDNKa1pqcFNSRVkrSUR3dmVEcDRiWEJ0WlhSaFBpQThQM2h3WVdOclpYUWdaVzVrUFNKeUlqOCtrT01JTmdBQUFtaEpSRUZVZU5xTVVsdHJFMEVZM2RuTmJpNmJ0a25hb29sVkVWRnJpNkQvUUJBRndVZWZCSCtiU0pHcWVIbW9DZ3BOMjRTcTJBc1diUzVOa3hDYk5KZEtOalkybDUzZEdjOWt4VktUaDh6RDhqRjd2dk9kT2Q4aHBtbEtmY2ZsVXRZMnZ1NWtzdmZ1M2hrWjhUUEcrakh5b0RaWHNWUmVpYTJpY3lYK0VUZUVrSDRZNlo4SlhGY2NrOGhFNHBLdSs0YnRkSnBsV2NqaG5BK1VLakNVMGg2SW81YUdQclp0azJhem1jMFZHT2VLTEdNQUNFQ0VPVVFNSm93elJ5cUd5NFR3WGs4b0dEZzdGU0dKWk5xdjY2SHhZS2ZkZ1RkNG0ybFN0Nll5eGkzYmNtc2FwUmFYdUthcVhkTlVGRVYxcWVuTTdxV0xGekNIandWR0ZVVis4dXhsc2JRUFp4N1B6VnUybmNzWG5qNS9yZXQ2YlBYVFlqVHU5L3RmdkZyWVRxUmdtTWZqdG0zbWNwU2dxbFpyclZZYkE4dVZtbVZaclZhcldqdkFMOE5vZExyQ3hkckJ6MmJ6dDRNWGJ3V05ZUmlVbXBCOWVIaElUZm85a1VSbm85RklwVE1BN1JWTGhSOTdLTERlU3JVS0N3QUFuZWlzRzRabFVmeExwbmJXMWpkUmZQNnl2cHZOd2JEb2NyeGVOOEM0dUJUcmRycXNkNXpPRXhuYTJOeGFqb25RUkpmaVc5KzIyKzNPbTNjZlN2dGx5RjU0Kzk1b05DUkhweE8xZnhWR25UODNGUWlPb1o2ZG1ZNUVUc1BQRzlldkJZTUJwM0M3M2F5M203OUpnTnB3K05Tb2lMWGdPenBxWVJrdVJRRTdoR0VOK0lMVTYvVm9tb1lDbTB1azBtZkM0ZU9acXFybTg0VkhjL05FMEo3SUV3eS9PbjM1NFlQNzJPMnhXaUZBbGhWRlVFeE1oRzdmdXRuTDdYOVpZNU9UNDdoV1ZjQ0lzeFVDMHl1Vm1zL25SZEJrSW11YU9qRGVqTmttdFVBSUdEV3QyWmtySXZHL3NFYmNEaGQ0eklNcGVQTWZBUVlBbVEyTnp0cVhUNnNBQUFBQVNVVk9SSzVDWUlJPSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX2Zvb3Rlcl9fcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQwcHg7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fbWVudSB7XG4gIGhlaWdodDogNTBweDtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RlZTVlNztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMzMuMzMzMyU7XG4gIGZsZXg6IDE7XG59XG5cbi50ZXh0LWVsbGlwc2lzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4udGV4dC1lbGxpcHNpcyBpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE5cHggMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jdXN0b20tbWVudS12aWV3X19tZW51X19zdWIge1xuICBsZWZ0OiA0cHg7XG4gIHJpZ2h0OiA0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlNWU3O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uY3VzdG9tLW1lbnUtdmlld19fbWVudV9fc3ViIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlNWU3O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX21lbnVfX3N1YjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX21lbnVfX3N1YjphZnRlciB7XG4gIGJvdHRvbTogLTRweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci13aWR0aDogNnB4O1xuICBib3JkZXItc3R5bGU6IGRhc2hlZDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItdG9wOiA1cHggc29saWQgI2ZmZjtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXcgLmJ1dHRvbl9fYWN0aXZlZCwgLmN1c3RvbS1tZW51LXZpZXcgLnN1YmJ1dHRvbl9fYWN0aXZlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyM2I3ZTUgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cblxuLmN1c3RvbS1tZW51LXZpZXdfX21lbnVfX3N1YiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5cblxuLmlubmVyLXJpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjNmNGY4O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2RlZTVlNztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZWU1ZTc7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGVlNWU3O1xuICBjb2xvcjogIzU4NjY2ZTtcbn1cblxuLmNtLWVkaXQtYmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcblxuICAmOmJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMDtcbiAgfVxuXG4gIGg1IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICM5OGE2YWQ7XG4gIH1cbn1cblxuLmNtLWVkaXQtcmlnaHQtaGVhZGVyIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RlZTVlNztcbn1cblxuLmNtLWVkaXQtcmlnaHQtaGVhZGVyIGEge1xuICBjb2xvcjogIzMxNzA4Zjtcbn1cblxuLmNtLWVkaXQtcmlnaHQtaGVhZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi53cmFwcGVyLW1kIHtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmhlbHAtYmxvY2sge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgY29sb3I6ICNhM2EzYTM7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4ud3JhcHBlci1tZCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5lZGl0VGFiIHtcbiAgLyptYXJnaW46IDBweCAxNXB4OyovXG59XG5cbi5JbnB1dF9Cb3gge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5JbnB1dF90ZXh0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjU2cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwcHggc29saWQgI2ZmZjtcbiAgcmVzaXplOiBub25lO1xuICBmb250OiAxM3B4IFwi5b6u6L2v6ZuF6buRXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uSW5wdXRfRm9vdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDA7XG59XG5cbi5pbWdCdG4ge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTEzcHg7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltZ0J0bjphY3RpdmUge1xuICBtYXJnaW4tdG9wOiA5cHg7XG59XG5cbi5pbWdCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC0zMXB4XG59XG5cbi5wb3N0QnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250OiAxM3B4IFwi5b6u6L2v6ZuF6buRXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjODA4MDgwO1xuICBwYWRkaW5nOiA5cHggMjBweCA3cHggMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogMCAwIDVweCAwO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDAgMCA1cHggMDtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCAwO1xufVxuXG4ucG9zdEJ0bjpob3ZlciB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufVxuXG5cbi5tc2ctcGFuZWxfX2NvbnRleHQgLm1zZy1jb250ZXh0X19pdGVtIGkge1xuICBjb2xvcjogIzAwYTJmZjtcbn1cblxuLm1zZy1wYW5lbF9fY29udGV4dCAubXNnLWNvbnRleHRfX2l0ZW06aG92ZXIge1xuICBib3JkZXItY29sb3I6ICMwMDA7XG59XG5cblxuI3NlbGVjdE1vZGFsIGg0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzU4NjY2ZTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jc2VsZWN0TW9kYWwgLm1vZGFsLWhlYWRlciwgI3NlbGVjdE1vZGFsIC5tb2RhbC1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjRmNWY5O1xufVxuXG4jc2VsZWN0TW9kYWwgLm1vZGFsLWJvZHkge1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuXG4jc2VsZWN0TW9kYWwgLnBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tYXNrLWJnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMTExO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC42KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm1hc2stYmcgLm1hc2staWNvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFzay1iZyBpIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRvcDogMHB4O1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5jbS1lZGl0LWNvbnRlbnQtY29uIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWluLWhlaWdodDogMzAwcHg7XG4gIG1hcmdpbjogMCAxNXB4IDE1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWU1ZTc7XG59XG5cbi5jbS1lZGl0LWNvbnRlbnQtY29uIHtcbiAgLmNtLWVkaXQtcGFnZSB7XG4gICAgcGFkZGluZzogMjBweDtcblxuICAgIC5yb3cge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY20tZWRpdC1mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICBidXR0b24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbi5idG4taW5mbzEge1xuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4ZWQ0O1xuICBib3JkZXItY29sb3I6ICMxMzhlZDQ7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBwYWRkaW5nOiA2cHggMTJweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1NzE0MztcbiAgY29sb3I6ICM1NTU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgLjA3NSk7XG4gIC8vdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIGVhc2UtaW4tb3V0IC4xNXMsIGJveC1zaGFkb3cgZWFzZS1pbi1vdXQgLjE1cztcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIC8vcmVzaXplOiB2ZXJ0aWNhbDtcbiAgLy9tYXgtaGVpZ2h0OiAxMmVtO1xuXG59XG5cbnRleHRhcmVhLmZvcm0tY29udHJvbCB7XG4gIGhlaWdodDogMTJlbTtcbiAgcmVzaXplOiBub25lO1xufVxuXG4ubWVudS1tb3ZlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMXB4O1xuXG4gIGJ1dHRvbiB7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cblxufVxuXG4iXX0= */"

/***/ }),

/***/ "./projects/wx-menu/src/lib/wx-menu.component.ts":
/*!*******************************************************!*\
  !*** ./projects/wx-menu/src/lib/wx-menu.component.ts ***!
  \*******************************************************/
/*! exports provided: MenuButton, Menu, WxMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuButton", function() { return MenuButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WxMenuComponent", function() { return WxMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuButton = /** @class */ (function () {
    function MenuButton() {
        this.subButton = [];
    }
    return MenuButton;
}());

var Menu = /** @class */ (function () {
    function Menu() {
        this.button = [];
    }
    return Menu;
}());

var WxMenuComponent = /** @class */ (function () {
    function WxMenuComponent() {
        this._hideSubmit = false;
        this.name = '公众号名称';
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.menuChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(WxMenuComponent.prototype, "hideSubmit", {
        get: function () { return this._hideSubmit; },
        set: function (v) {
            this._hideSubmit = v || v === '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WxMenuComponent.prototype, "menu", {
        get: function () { return this._menu; },
        set: function (val) {
            this._menu = val;
            this.menuChange.emit(this._menu);
        },
        enumerable: true,
        configurable: true
    });
    WxMenuComponent.prototype.ngOnInit = function () {
    };
    WxMenuComponent.prototype.addSubButton = function (button) {
        button.subButton = button.subButton || [];
        if (button.subButton.length != 0 || confirm('添加子菜单后，一级菜单的内容将被清除。确定添加子菜单？')) {
            var sub = {
                name: '新建子菜单',
                type: 'view'
            };
            button.type = null;
            button.subButton.push(sub);
            this.active = sub;
        }
    };
    WxMenuComponent.prototype.deleteMenu = function () {
        var _this = this;
        var index = this.menu.button.indexOf(this.active);
        if (index != -1) {
            this.menu.button.splice(index, 1);
        }
        else {
            this.menu.button.forEach(function (menu) {
                var index = menu.subButton.indexOf(_this.active);
                if (index != -1) {
                    menu.subButton.splice(index, 1);
                    if (menu.subButton.length == 0) {
                        menu.type = 'view';
                    }
                }
            });
        }
        this.active = null;
    };
    WxMenuComponent.prototype.addButton = function () {
        var button = {
            name: '新建菜单',
            type: 'view'
        };
        this.menu.button.push(button);
        this.active = button;
        console.error(button);
    };
    WxMenuComponent.prototype.canMove = function (menuButton, direction) {
        var parent = null;
        var index = this.menu.button.indexOf(menuButton);
        if (index == -1) {
            this.menu.button.forEach(function (button) {
                if (button.subButton.indexOf(menuButton) != -1) {
                    parent = button;
                    index = button.subButton.indexOf(menuButton);
                }
            });
        }
        switch (direction) {
            case 'up':
                return parent && parent.subButton.length > 1 && index != 0;
            case 'down':
                return parent && parent.subButton.length > index + 1;
            case 'left':
                return !parent && index > 0 && this.menu.button.length > 1;
            case 'right':
                return !parent && index + 1 < this.menu.button.length;
            default:
                return false;
        }
    };
    WxMenuComponent.prototype.move = function (menuButton, direction) {
        var _a, _b, _c, _d;
        var parent = null;
        var index = this.menu.button.indexOf(menuButton);
        if (index == -1) {
            this.menu.button.forEach(function (button) {
                if (button.subButton.indexOf(menuButton) != -1) {
                    parent = button;
                    index = button.subButton.indexOf(menuButton);
                }
            });
        }
        var btn;
        switch (direction) {
            case 'up':
                btn = parent.subButton.splice(index, 1);
                (_a = parent.subButton).splice.apply(_a, [index - 1, 0].concat(btn));
                break;
            case 'down':
                btn = parent.subButton.splice(index, 1);
                (_b = parent.subButton).splice.apply(_b, [index + 1, 0].concat(btn));
                break;
            case 'left':
                btn = this.menu.button.splice(index, 1);
                (_c = this.menu.button).splice.apply(_c, [index - 1, 0].concat(btn));
                break;
            case 'right':
                btn = this.menu.button.splice(index, 1);
                (_d = this.menu.button).splice.apply(_d, [index + 1, 0].concat(btn));
                break;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hide-submit'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], WxMenuComponent.prototype, "hideSubmit", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], WxMenuComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WxMenuComponent.prototype, "onSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], WxMenuComponent.prototype, "menuChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Menu),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Menu])
    ], WxMenuComponent.prototype, "menu", null);
    WxMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'z-wx-menu',
            template: __webpack_require__(/*! raw-loader!./wx-menu.component.html */ "./node_modules/raw-loader/index.js!./projects/wx-menu/src/lib/wx-menu.component.html"),
            styles: [__webpack_require__(/*! ./wx-menu.component.scss */ "./projects/wx-menu/src/lib/wx-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WxMenuComponent);
    return WxMenuComponent;
}());



/***/ }),

/***/ "./projects/wx-menu/src/lib/wx-menu.module.ts":
/*!****************************************************!*\
  !*** ./projects/wx-menu/src/lib/wx-menu.module.ts ***!
  \****************************************************/
/*! exports provided: WxMenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WxMenuModule", function() { return WxMenuModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _wx_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wx-menu.component */ "./projects/wx-menu/src/lib/wx-menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var WxMenuModule = /** @class */ (function () {
    function WxMenuModule() {
    }
    WxMenuModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_wx_menu_component__WEBPACK_IMPORTED_MODULE_2__["WxMenuComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]],
            exports: [_wx_menu_component__WEBPACK_IMPORTED_MODULE_2__["WxMenuComponent"]]
        })
    ], WxMenuModule);
    return WxMenuModule;
}());



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



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'wx-menu-lib';
        this.menu = {
            button: [
                {
                    'name': 'MORMA',
                    'subButton': [],
                    'type': 'view',
                    'url': 'http://morma.cn'
                },
                {
                    'name': '授权',
                    'subButton': [],
                    'type': 'view',
                    'url': 'http://wxopen.morma.cn/auth'
                },
                {
                    'name': 'Coding',
                    'subButton': [],
                    'type': 'view',
                    'url': 'http://wxc07fd4f3157d0406.wxopen.morma.cn'
                }
            ]
        };
    }
    AppComponent.prototype.submit = function (menu) {
        console.log(111);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_wx_menu_src_lib_wx_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/wx-menu/src/lib/wx-menu.module */ "./projects/wx-menu/src/lib/wx-menu.module.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _projects_wx_menu_src_lib_wx_menu_module__WEBPACK_IMPORTED_MODULE_5__["WxMenuModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = __webpack_require__(/*! /Users/zenochan/Z.Project/AngularX/1906-wx-menu-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map