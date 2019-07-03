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

/***/ "./node_modules/raw-loader/index.js!./projects/ngx-cropper/src/lib/ngx-cropper.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./projects/ngx-cropper/src/lib/ngx-cropper.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"file\" [hidden]=\"fileOrUrl\">\n  <ngx-file-drop browseBtnLabel=\"上传\" dropZoneLabel=\"拖动图片\"\n                 (onFileDrop)=\"dropFile($event)\"\n  ></ngx-file-drop>\n</label>\n<input type=\"file\" id=\"file\" accept=\"image/*\" hidden (change)=\"onFileChange($event)\" [multiple]=\"false\">\n\n<img #previewImg [src]=\"previewImageURL\" hidden alt=\"\">\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a  class=\"github\" target=\"_blank\" href=\"https://github.com/zenochan/ngx-cropper\">Github</a>\n<zz-ngx-cropper\n  #cropper\n  style=\"width: 600px;height: 600px;float: left\"\n  [aspectRatio]=\"1\"\n  [file]=\"fileOrUrl\"\n  (cropped)=\"cropped($event)\">\n\n</zz-ngx-cropper>\n\n<div *ngIf=\"cropper.croppedImage\">\n  <img class=\"preview\" style=\"width: 200px;height: 200px;display: inline-block\" [src]=\"cropper.croppedImage\">\n  <img class=\"preview\" style=\"width: 160px;height: 160px;display: inline-block\" [src]=\"cropper.croppedImage\">\n  <img class=\"preview\" style=\"width: 120px;height: 120px;display: inline-block\" [src]=\"cropper.croppedImage\">\n  <img class=\"preview\" style=\"width: 80px;height: 80px;display: inline-block\" [src]=\"cropper.croppedImage\">\n</div>\n"

/***/ }),

/***/ "./projects/ngx-cropper/src/lib/ngx-cropper.component.scss":
/*!*****************************************************************!*\
  !*** ./projects/ngx-cropper/src/lib/ngx-cropper.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\n * Cropper.js v1.5.2\n * https://fengyuanchen.github.io/cropperjs\n *\n * Copyright 2015-present Chen Fengyuan\n * Released under the MIT license\n *\n * Date: 2019-06-30T06:01:02.389Z\n */\n\n.cropper-container {\n  direction: ltr;\n  font-size: 0;\n  line-height: 0;\n  position: relative;\n  touch-action: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.cropper-container img {\n  display: block;\n  height: 100%;\n  image-orientation: 0deg;\n  max-height: none !important;\n  max-width: none !important;\n  min-height: 0 !important;\n  min-width: 0 !important;\n  width: 100%;\n}\n\n.cropper-wrap-box,\n.cropper-canvas,\n.cropper-drag-box,\n.cropper-crop-box,\n.cropper-modal {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.cropper-wrap-box,\n.cropper-canvas {\n  overflow: hidden;\n}\n\n.cropper-drag-box {\n  background-color: #fff;\n  opacity: 0;\n}\n\n.cropper-modal {\n  background-color: #000;\n  opacity: 0.5;\n}\n\n.cropper-view-box {\n  display: block;\n  height: 100%;\n  outline: 1px solid #39f;\n  outline-color: rgba(51, 153, 255, 0.75);\n  overflow: hidden;\n  width: 100%;\n}\n\n.cropper-dashed {\n  border: 0 dashed #eee;\n  display: block;\n  opacity: 0.5;\n  position: absolute;\n}\n\n.cropper-dashed.dashed-h {\n  border-bottom-width: 1px;\n  border-top-width: 1px;\n  height: calc(100% / 3);\n  left: 0;\n  top: calc(100% / 3);\n  width: 100%;\n}\n\n.cropper-dashed.dashed-v {\n  border-left-width: 1px;\n  border-right-width: 1px;\n  height: 100%;\n  left: calc(100% / 3);\n  top: 0;\n  width: calc(100% / 3);\n}\n\n.cropper-center {\n  display: block;\n  height: 0;\n  left: 50%;\n  opacity: 0.75;\n  position: absolute;\n  top: 50%;\n  width: 0;\n}\n\n.cropper-center::before,\n.cropper-center::after {\n  background-color: #eee;\n  content: ' ';\n  display: block;\n  position: absolute;\n}\n\n.cropper-center::before {\n  height: 1px;\n  left: -3px;\n  top: 0;\n  width: 7px;\n}\n\n.cropper-center::after {\n  height: 7px;\n  left: 0;\n  top: -3px;\n  width: 1px;\n}\n\n.cropper-face,\n.cropper-line,\n.cropper-point {\n  display: block;\n  height: 100%;\n  opacity: 0.1;\n  position: absolute;\n  width: 100%;\n}\n\n.cropper-face {\n  background-color: #fff;\n  left: 0;\n  top: 0;\n}\n\n.cropper-line {\n  background-color: #39f;\n}\n\n.cropper-line.line-e {\n  cursor: ew-resize;\n  right: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-n {\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n  top: -3px;\n}\n\n.cropper-line.line-w {\n  cursor: ew-resize;\n  left: -3px;\n  top: 0;\n  width: 5px;\n}\n\n.cropper-line.line-s {\n  bottom: -3px;\n  cursor: ns-resize;\n  height: 5px;\n  left: 0;\n}\n\n.cropper-point {\n  background-color: #39f;\n  height: 5px;\n  opacity: 0.75;\n  width: 5px;\n}\n\n.cropper-point.point-e {\n  cursor: ew-resize;\n  margin-top: -3px;\n  right: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-n {\n  cursor: ns-resize;\n  left: 50%;\n  margin-left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-w {\n  cursor: ew-resize;\n  left: -3px;\n  margin-top: -3px;\n  top: 50%;\n}\n\n.cropper-point.point-s {\n  bottom: -3px;\n  cursor: s-resize;\n  left: 50%;\n  margin-left: -3px;\n}\n\n.cropper-point.point-ne {\n  cursor: nesw-resize;\n  right: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-nw {\n  cursor: nwse-resize;\n  left: -3px;\n  top: -3px;\n}\n\n.cropper-point.point-sw {\n  bottom: -3px;\n  cursor: nesw-resize;\n  left: -3px;\n}\n\n.cropper-point.point-se {\n  bottom: -3px;\n  cursor: nwse-resize;\n  height: 20px;\n  opacity: 1;\n  right: -3px;\n  width: 20px;\n}\n\n@media (min-width: 768px) {\n  .cropper-point.point-se {\n    height: 15px;\n    width: 15px;\n  }\n}\n\n@media (min-width: 992px) {\n  .cropper-point.point-se {\n    height: 10px;\n    width: 10px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .cropper-point.point-se {\n    height: 5px;\n    opacity: 0.75;\n    width: 5px;\n  }\n}\n\n.cropper-point.point-se::before {\n  background-color: #39f;\n  bottom: -50%;\n  content: ' ';\n  display: block;\n  height: 200%;\n  opacity: 0;\n  position: absolute;\n  right: -50%;\n  width: 200%;\n}\n\n.cropper-invisible {\n  opacity: 0;\n}\n\n.cropper-bg {\n  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n}\n\n.cropper-hide {\n  display: block;\n  height: 0;\n  position: absolute;\n  width: 0;\n}\n\n.cropper-hidden {\n  display: none !important;\n}\n\n.cropper-move {\n  cursor: move;\n}\n\n.cropper-crop {\n  cursor: crosshair;\n}\n\n.cropper-disabled .cropper-drag-box,\n.cropper-disabled .cropper-face,\n.cropper-disabled .cropper-line,\n.cropper-disabled .cropper-point {\n  cursor: not-allowed;\n}\n\n:host {\n  display: block;\n  width: 300px;\n  height: 300px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9jcm9wcGVyanMvZGlzdC9jcm9wcGVyLmNzcyIsIi9Vc2Vycy96ZW5vY2hhbi9aLlByb2plY3QvQW5ndWxhclgvMTkwNi1uZ3gtY3JvcHBlci1saWIvcHJvamVjdHMvbmd4LWNyb3BwZXIvc3JjL2xpYi9uZ3gtY3JvcHBlci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1jcm9wcGVyL3NyYy9saWIvbmd4LWNyb3BwZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0VBUUU7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFFbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7Ozs7O0VBS0UsU0FBUztFQUNULE9BQU87RUFDUCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07QUFDUjs7QUFFQTs7RUFFRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLHVDQUF1QztFQUN2QyxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsT0FBTztFQUNQLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsTUFBTTtFQUNOLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxTQUFTO0VBQ1QsU0FBUztFQUNULGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLE1BQU07RUFDTixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7OztFQUdFLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsT0FBTztFQUNQLE1BQU07QUFDUjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsT0FBTztFQUNQLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLE9BQU87QUFDVDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osV0FBVztFQUNiO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixXQUFXO0VBQ2I7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsK1FBQStRO0FBQ2pSOztBQUVBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBOzs7O0VBSUUsbUJBQW1CO0FBQ3JCOztBQzdTQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQUYiLCJmaWxlIjoicHJvamVjdHMvbmd4LWNyb3BwZXIvc3JjL2xpYi9uZ3gtY3JvcHBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQ3JvcHBlci5qcyB2MS41LjJcbiAqIGh0dHBzOi8vZmVuZ3l1YW5jaGVuLmdpdGh1Yi5pby9jcm9wcGVyanNcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNS1wcmVzZW50IENoZW4gRmVuZ3l1YW5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTktMDYtMzBUMDY6MDE6MDIuMzg5WlxuICovXG5cbi5jcm9wcGVyLWNvbnRhaW5lciB7XG4gIGRpcmVjdGlvbjogbHRyO1xuICBmb250LXNpemU6IDA7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC1tcy10b3VjaC1hY3Rpb246IG5vbmU7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmNyb3BwZXItY29udGFpbmVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGltYWdlLW9yaWVudGF0aW9uOiAwZGVnO1xuICBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG4gIG1heC13aWR0aDogbm9uZSAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNyb3BwZXItd3JhcC1ib3gsXG4uY3JvcHBlci1jYW52YXMsXG4uY3JvcHBlci1kcmFnLWJveCxcbi5jcm9wcGVyLWNyb3AtYm94LFxuLmNyb3BwZXItbW9kYWwge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmNyb3BwZXItd3JhcC1ib3gsXG4uY3JvcHBlci1jYW52YXMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY3JvcHBlci1kcmFnLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jcm9wcGVyLW1vZGFsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uY3JvcHBlci12aWV3LWJveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG91dGxpbmU6IDFweCBzb2xpZCAjMzlmO1xuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDUxLCAxNTMsIDI1NSwgMC43NSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3JvcHBlci1kYXNoZWQge1xuICBib3JkZXI6IDAgZGFzaGVkICNlZWU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAwLjU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNyb3BwZXItZGFzaGVkLmRhc2hlZC1oIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC8gMyk7XG4gIGxlZnQ6IDA7XG4gIHRvcDogY2FsYygxMDAlIC8gMyk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3JvcHBlci1kYXNoZWQuZGFzaGVkLXYge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiBjYWxjKDEwMCUgLyAzKTtcbiAgdG9wOiAwO1xuICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG59XG5cbi5jcm9wcGVyLWNlbnRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIGxlZnQ6IDUwJTtcbiAgb3BhY2l0eTogMC43NTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgd2lkdGg6IDA7XG59XG5cbi5jcm9wcGVyLWNlbnRlcjo6YmVmb3JlLFxuLmNyb3BwZXItY2VudGVyOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbnRlbnQ6ICcgJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmNyb3BwZXItY2VudGVyOjpiZWZvcmUge1xuICBoZWlnaHQ6IDFweDtcbiAgbGVmdDogLTNweDtcbiAgdG9wOiAwO1xuICB3aWR0aDogN3B4O1xufVxuXG4uY3JvcHBlci1jZW50ZXI6OmFmdGVyIHtcbiAgaGVpZ2h0OiA3cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogLTNweDtcbiAgd2lkdGg6IDFweDtcbn1cblxuLmNyb3BwZXItZmFjZSxcbi5jcm9wcGVyLWxpbmUsXG4uY3JvcHBlci1wb2ludCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9wYWNpdHk6IDAuMTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNyb3BwZXItZmFjZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cblxuLmNyb3BwZXItbGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XG59XG5cbi5jcm9wcGVyLWxpbmUubGluZS1lIHtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIHJpZ2h0OiAtM3B4O1xuICB0b3A6IDA7XG4gIHdpZHRoOiA1cHg7XG59XG5cbi5jcm9wcGVyLWxpbmUubGluZS1uIHtcbiAgY3Vyc29yOiBucy1yZXNpemU7XG4gIGhlaWdodDogNXB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IC0zcHg7XG59XG5cbi5jcm9wcGVyLWxpbmUubGluZS13IHtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIGxlZnQ6IC0zcHg7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDVweDtcbn1cblxuLmNyb3BwZXItbGluZS5saW5lLXMge1xuICBib3R0b206IC0zcHg7XG4gIGN1cnNvcjogbnMtcmVzaXplO1xuICBoZWlnaHQ6IDVweDtcbiAgbGVmdDogMDtcbn1cblxuLmNyb3BwZXItcG9pbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzlmO1xuICBoZWlnaHQ6IDVweDtcbiAgb3BhY2l0eTogMC43NTtcbiAgd2lkdGg6IDVweDtcbn1cblxuLmNyb3BwZXItcG9pbnQucG9pbnQtZSB7XG4gIGN1cnNvcjogZXctcmVzaXplO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICByaWdodDogLTNweDtcbiAgdG9wOiA1MCU7XG59XG5cbi5jcm9wcGVyLXBvaW50LnBvaW50LW4ge1xuICBjdXJzb3I6IG5zLXJlc2l6ZTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTNweDtcbiAgdG9wOiAtM3B4O1xufVxuXG4uY3JvcHBlci1wb2ludC5wb2ludC13IHtcbiAgY3Vyc29yOiBldy1yZXNpemU7XG4gIGxlZnQ6IC0zcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG4gIHRvcDogNTAlO1xufVxuXG4uY3JvcHBlci1wb2ludC5wb2ludC1zIHtcbiAgYm90dG9tOiAtM3B4O1xuICBjdXJzb3I6IHMtcmVzaXplO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xufVxuXG4uY3JvcHBlci1wb2ludC5wb2ludC1uZSB7XG4gIGN1cnNvcjogbmVzdy1yZXNpemU7XG4gIHJpZ2h0OiAtM3B4O1xuICB0b3A6IC0zcHg7XG59XG5cbi5jcm9wcGVyLXBvaW50LnBvaW50LW53IHtcbiAgY3Vyc29yOiBud3NlLXJlc2l6ZTtcbiAgbGVmdDogLTNweDtcbiAgdG9wOiAtM3B4O1xufVxuXG4uY3JvcHBlci1wb2ludC5wb2ludC1zdyB7XG4gIGJvdHRvbTogLTNweDtcbiAgY3Vyc29yOiBuZXN3LXJlc2l6ZTtcbiAgbGVmdDogLTNweDtcbn1cblxuLmNyb3BwZXItcG9pbnQucG9pbnQtc2Uge1xuICBib3R0b206IC0zcHg7XG4gIGN1cnNvcjogbndzZS1yZXNpemU7XG4gIGhlaWdodDogMjBweDtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IC0zcHg7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNyb3BwZXItcG9pbnQucG9pbnQtc2Uge1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmNyb3BwZXItcG9pbnQucG9pbnQtc2Uge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5jcm9wcGVyLXBvaW50LnBvaW50LXNlIHtcbiAgICBoZWlnaHQ6IDVweDtcbiAgICBvcGFjaXR5OiAwLjc1O1xuICAgIHdpZHRoOiA1cHg7XG4gIH1cbn1cblxuLmNyb3BwZXItcG9pbnQucG9pbnQtc2U6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzOWY7XG4gIGJvdHRvbTogLTUwJTtcbiAgY29udGVudDogJyAnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAyMDAlO1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtNTAlO1xuICB3aWR0aDogMjAwJTtcbn1cblxuLmNyb3BwZXItaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNyb3BwZXItYmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2RhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUFRTUFBQUFsUFcwaUFBQUFBM05DU1ZRSUNBamI0VS9nQUFBQUJsQk1WRVhNek16Ly8vL1RqUlYyQUFBQUNYQklXWE1BQUFyckFBQUs2d0dDaXcxYUFBQUFISFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JHYVhKbGQyOXlhM01nUTFNMjZMeXlqQUFBQUJGSlJFRlVDSmxqK00vQWdCVmhGLzBQQUg2L0QvSGtEeE9HQUFBQUFFbEZUa1N1UW1DQycpO1xufVxuXG4uY3JvcHBlci1oaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbn1cblxuLmNyb3BwZXItaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uY3JvcHBlci1tb3ZlIHtcbiAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uY3JvcHBlci1jcm9wIHtcbiAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5cbi5jcm9wcGVyLWRpc2FibGVkIC5jcm9wcGVyLWRyYWctYm94LFxuLmNyb3BwZXItZGlzYWJsZWQgLmNyb3BwZXItZmFjZSxcbi5jcm9wcGVyLWRpc2FibGVkIC5jcm9wcGVyLWxpbmUsXG4uY3JvcHBlci1kaXNhYmxlZCAuY3JvcHBlci1wb2ludCB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nyb3BwZXJqcy9kaXN0L2Nyb3BwZXIuY3NzXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3JvcHBlcmpzL2Rpc3QvY3JvcHBlci5jc3NcIjtcbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./projects/ngx-cropper/src/lib/ngx-cropper.component.ts":
/*!***************************************************************!*\
  !*** ./projects/ngx-cropper/src/lib/ngx-cropper.component.ts ***!
  \***************************************************************/
/*! exports provided: NgxCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCropperComponent", function() { return NgxCropperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cropperjs */ "./node_modules/cropperjs/dist/cropper.js");
/* harmony import */ var cropperjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cropperjs__WEBPACK_IMPORTED_MODULE_2__);



var NgxCropperComponent = /** @class */ (function () {
    function NgxCropperComponent() {
        this.fileName = '';
        this.fileType = 'image/jpeg';
        this.aspectRatio = 1;
        this.cropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgxCropperComponent.prototype, "file", {
        set: function (file) {
            this.fileOrUrl = file;
            this.handleFile();
        },
        enumerable: true,
        configurable: true
    });
    NgxCropperComponent.prototype.ngOnInit = function () {
        this.handleFile();
    };
    NgxCropperComponent.prototype.ngOnDestroy = function () {
        this.cropper.destroy();
    };
    NgxCropperComponent.prototype.ngAfterViewInit = function () {
        if (typeof this.fileOrUrl == 'string') {
            this.initCropper();
        }
    };
    NgxCropperComponent.prototype.handleFile = function () {
        if (!this.fileOrUrl || typeof this.fileOrUrl == 'string') {
            return;
        }
        this.fileName = this.fileOrUrl.name;
        if (typeof this.fileOrUrl == 'string') {
            this.previewImageURL = this.fileOrUrl;
        }
        else if (this.fileOrUrl) {
            this.fileType = this.fileOrUrl.type;
            this.convertFileToBase64(this.fileOrUrl);
        }
    };
    NgxCropperComponent.prototype.convertFileToBase64 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.addEventListener('load', function (e) { return _this.previewImageURL = e.target.result; }, false);
        reader.onloadend = function () { return _this.initCropper(); };
        reader.readAsDataURL(file);
    };
    NgxCropperComponent.prototype.saveImage = function () {
        this.cropped.emit(new File([this.blob], this.fileName, { type: this.fileType }));
    };
    NgxCropperComponent.prototype.initCropper = function () {
        var _this = this;
        this.cropper && this.cropper.destroy();
        var DragMode;
        (function (DragMode) {
            DragMode["Move"] = "move";
        })(DragMode || (DragMode = {}));
        this.cropper = new cropperjs__WEBPACK_IMPORTED_MODULE_2___default.a(this.previewImage.nativeElement, {
            aspectRatio: this.aspectRatio,
            dragMode: DragMode.Move,
            cropend: function () {
                _this.croppedImage = _this.cropper.getCroppedCanvas().toDataURL(_this.fileType);
                _this.cropper.getCroppedCanvas().toBlob(function (blob) { return _this.blob = blob; });
                _this.saveImage();
            }
        });
    };
    NgxCropperComponent.prototype.dropFile = function ($event) {
        var _this = this;
        $event.find(function (item) {
            if (!item.fileEntry.isFile) {
                return false;
            }
            var result = false;
            item.fileEntry.file(function (file) {
                if (file.type.indexOf('image/') != -1) {
                    _this.file = file;
                    result = true;
                }
            });
            return true;
        });
    };
    NgxCropperComponent.prototype.onFileChange = function ($event) {
        this.file = $event.target.files[0];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('previewImg', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxCropperComponent.prototype, "previewImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NgxCropperComponent.prototype, "aspectRatio", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NgxCropperComponent.prototype, "file", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgxCropperComponent.prototype, "cropped", void 0);
    NgxCropperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'zz-ngx-cropper',
            template: __webpack_require__(/*! raw-loader!./ngx-cropper.component.html */ "./node_modules/raw-loader/index.js!./projects/ngx-cropper/src/lib/ngx-cropper.component.html"),
            styles: [__webpack_require__(/*! ./ngx-cropper.component.scss */ "./projects/ngx-cropper/src/lib/ngx-cropper.component.scss")]
        })
    ], NgxCropperComponent);
    return NgxCropperComponent;
}());



/***/ }),

/***/ "./projects/ngx-cropper/src/lib/ngx-cropper.module.ts":
/*!************************************************************!*\
  !*** ./projects/ngx-cropper/src/lib/ngx-cropper.module.ts ***!
  \************************************************************/
/*! exports provided: NgxCropperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxCropperModule", function() { return NgxCropperModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_cropper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ngx-cropper.component */ "./projects/ngx-cropper/src/lib/ngx-cropper.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");









var NgxCropperModule = /** @class */ (function () {
    function NgxCropperModule() {
    }
    NgxCropperModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ngx_cropper_component__WEBPACK_IMPORTED_MODULE_2__["NgxCropperComponent"]],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__["NgxFileDropModule"]
            ],
            exports: [_ngx_cropper_component__WEBPACK_IMPORTED_MODULE_2__["NgxCropperComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], NgxCropperModule);
    return NgxCropperModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".github {\n  background: orange;\n  color: white;\n  text-align: center;\n  line-height: 2em;\n  width: 200px;\n  position: fixed;\n  right: -50px;\n  top: 30px;\n  font-size: 24px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.preview {\n  margin-left: 18px;\n  border-radius: 8px;\n  border: 2px solid lightgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ZW5vY2hhbi9aLlByb2plY3QvQW5ndWxhclgvMTkwNi1uZ3gtY3JvcHBlci1saWIvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdpdGh1YiB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTUwcHg7XG4gIHRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xufVxuIiwiLmdpdGh1YiB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogLTUwcHg7XG4gIHRvcDogMzBweDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi5wcmV2aWV3IHtcbiAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAycHggc29saWQgbGlnaHRncmF5O1xufSJdfQ== */"

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
        this.title = 'ngx-cropper-lib';
        this.fileOrUrl = '';
    }
    AppComponent.prototype.cropped = function (file) {
        console.error('cropped', file);
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _projects_ngx_cropper_src_lib_ngx_cropper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../projects/ngx-cropper/src/lib/ngx-cropper.module */ "./projects/ngx-cropper/src/lib/ngx-cropper.module.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _projects_ngx_cropper_src_lib_ngx_cropper_module__WEBPACK_IMPORTED_MODULE_4__["NgxCropperModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_5__["NgxFileDropModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
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
// This cropped can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of cropped replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following cropped
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

module.exports = __webpack_require__(/*! /Users/zenochan/Z.Project/AngularX/1906-ngx-cropper-lib/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map