function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _service_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service-data */
    "./src/app/service-data.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _service_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./service-data.service */
    "./src/app/service-data.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function AppComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, "\n");
      }
    }

    function AppComponent_tr_57_td_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.upTime);
      }
    }

    function AppComponent_tr_57_td_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_tr_57_td_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.downTime);
      }
    }

    function AppComponent_tr_57_td_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "status-up": a0,
        "status-down": a1
      };
    };

    function AppComponent_tr_57_Template(rf, ctx) {
      if (rf & 1) {
        var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AppComponent_tr_57_td_13_Template, 2, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_tr_57_td_14_Template, 2, 0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_tr_57_td_15_Template, 2, 1, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AppComponent_tr_57_td_16_Template, 2, 0, "td", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_57_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var service_r3 = ctx.$implicit;

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r10.startService(service_r3.startUrl);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_57_Template_button_click_20_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var service_r3 = ctx.$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.stopService(service_r3.stopUrl);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stop");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_tr_57_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

          var service_r3 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.removeService(service_r3.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remove");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var service_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c0, service_r3.status == "UP", service_r3.status == "DOWN"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 12, service_r3.startTime, "medium"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](service_r3.stopTime ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 15, service_r3.stopTime, "medium") : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", service_r3.upTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !service_r3.upTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", service_r3.downTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !service_r3.downTime);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", service_r3.status === "UP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", service_r3.status === "DOWN");
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(http, serviceDataService) {
        _classCallCheck(this, AppComponent);

        this.http = http;
        this.serviceDataService = serviceDataService;
        this.title = 'angular-control-app';
        this.services = [];
        this.dateFormat = 'dd/MM/yyyy HH:mm:ss';
        this.errorMessage = null;
        this.loadServiceData();
        this.subscribeToServiceEvents();
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// ...
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.eventSubscription) {
            this.eventSubscription.unsubscribe();
          }
        }
      }, {
        key: "subscribeToServiceEvents",
        value: function subscribeToServiceEvents() {
          var _this = this;

          this.eventSubscription = this.serviceDataService.serviceData$.subscribe(function (serviceDataList) {
            _this.services = serviceDataList;
          });
        }
      }, {
        key: "loadServiceData",
        value: function loadServiceData() {
          var _this2 = this;

          console.log("service monitor started "); // interval(15000).subscribe(() => {

          this.serviceDataService.errorMessage$.subscribe(function (message) {
            _this2.errorMessage = message; // Set error message from the service
          });
          this.serviceDataService.serviceData$.subscribe(function (serviceDataList) {
            // console.log(serviceDataList);      
            if (serviceDataList.length == 0) _this2.services = [];
            serviceDataList.forEach(function (serviceData) {
              //console.log("servicedata: ", serviceData);
              _this2.monitorService(serviceData);
            });
          }); //  });
        }
      }, {
        key: "monitorService",
        value: function monitorService(serviceData) {
          var id = serviceData.id;
          var url = serviceData.url;
          var startUrl = serviceData.startUrl;
          var stopUrl = serviceData.stopUrl;
          var name = serviceData.name;
          var startTime = serviceData.startTime;
          var stopTime = serviceData.stopTime;
          var upTime = serviceData.upTime;
          var downTime = serviceData.downTime; // const subscription = interval(15000).subscribe(() => {
          // this.http.get<any>(`${url}`).subscribe(data => {
          // this.serviceDataService.getServiceDetails(serviceData).subscribe(data =>{

          var status = serviceData.status;
          var dateTime = new Date();
          var service = this.services.find(function (s) {
            return s.url === url;
          }); // if(startTime===null)
          //         startTime=dateTime;
          // console.log("service: ",service);

          if (!service) {
            var serve = {
              id: id,
              name: name,
              url: url,
              startUrl: startUrl,
              stopUrl: stopUrl,
              status: status,
              startTime: startTime,
              stopTime: stopTime,
              upTime: upTime,
              downTime: downTime
            };
            this.services.push(serve); //this.updateServiceData(serve);
          } else {
            if (service.status !== status) {
              if (status === 'UP') {
                if (service.stopTime) {
                  service.upTime = this.getTimeDiff(new Date(service.startTime), dateTime);
                  service.startTime = dateTime;
                  service.stopTime = null;
                } else {
                  service.upTime = this.getTimeDiff(new Date(service.startTime), dateTime);
                }
              } else {
                if (service.stopTime) {
                  service.downTime = this.getTimeDiff(new Date(service.startTime), dateTime);
                } else {
                  service.downTime = this.getTimeDiff(new Date(service.startTime), dateTime);
                  service.stopTime = dateTime.toISOString();
                }

                this.serviceDataService.sendEmail(this.services);
              }

              this.updateServiceData(service);
            } else {
              if (status === 'UP') {
                service.upTime = this.getTimeDiff(new Date(service.startTime), dateTime);
              } else {
                service.downTime = this.getTimeDiff(new Date(service.startTime), dateTime);
              }
            }

            service.status = status; //this.updateServiceData(service);
          } // },
          // error => {
          //   console.log(`Error monitoring ${name}: ${error.message}`);
          //   const status = "DOWN";
          //   const dateTime = new Date();
          //   const service = this.services.find(s => s.url === url);
          //   // if(startTime===null)
          //   //     startTime=dateTime;
          //   if (!service) {
          //     const serve =   {
          //       id,
          //       name,
          //       url,
          //       startUrl,
          //       stopUrl,
          //       status,
          //       startTime,
          //       stopTime,
          //       upTime,
          //       downTime,
          //       subscription
          //     };
          //     this.services.push(serve);
          //     this.updateServiceData(serve);
          //   } else {
          //     if (service.status === status) {
          //       if (service.stopTime) {
          //         const lastStopTime = service.downTime;
          //         service.downTime = this.getTimeDiff(new Date(service.startTime), dateTime);
          //         if(lastStopTime!== service.downTime)
          //         this.updateServiceData(service);
          //       } else {
          //         service.downTime = this.getTimeDiff(new Date(service.startTime), dateTime);
          //         service.stopTime = dateTime.toISOString();
          //         this.updateServiceData(service);
          //       }
          //       this.serviceDataService.sendEmail(this.services);
          //    }
          //     service.status = status;
          //     //this.updateServiceData(service);
          //   }
          // });
          // const index = this.services.findIndex(s => s.url === url);
          // if (index === -1 && !service) {
          //   subscription.unsubscribe();
          // }
          // });

        }
      }, {
        key: "getTimeDiff",
        value: function getTimeDiff(start, end) {
          //console.log("start:"+ start);
          //console.log("end:"+ end);
          var diffInMs = Math.abs(end.getTime() - start.getTime());
          var diffInHours = Math.ceil(diffInMs / (1000 * 60 * 60));
          return "".concat(diffInHours, " hour(s)");
        }
      }, {
        key: "startService",
        value: function startService(startUrl) {
          this.http.post("".concat(startUrl), {}).subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "stopService",
        value: function stopService(stopUrl) {
          this.http.post("".concat(stopUrl), {}).subscribe(function (data) {
            console.log(data);
          });
        }
      }, {
        key: "removeService",
        value: function removeService(serviceId) {
          var data = new _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceData"]();
          data.id = serviceId;
          var index = this.services.findIndex(function (s) {
            return s.id === serviceId;
          });
          var service = this.services.find(function (s) {
            return s.id === serviceId;
          }); // Remove the 'service' object from the array

          if (index !== -1) {
            // Unsubscribe from the interval when the service is removed
            console.log("service removed: ", service); //service.subscription.unsubscribe();

            this.services.splice(index, 1);
          }

          this.serviceDataService.removeServiceData(data); // this.loadServiceData();
        }
      }, {
        key: "addServiceData",
        value: function addServiceData() {
          var _this3 = this;

          if (this.serviceUrl === null || this.appName === null) {
            alert("Service Name and URL is required");
            return;
          }

          var service = this.services.find(function (s) {
            return s.url === _this3.serviceUrl;
          });

          if (!service) {
            var data = new _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceData"]();
            data.url = this.serviceUrl;
            data.startUrl = this.startUrl;
            data.stopUrl = this.stopUrl;
            data.name = this.appName;
            data.startTime = new Date().toISOString();
            this.serviceDataService.addServiceData(data); // this.loadServiceData();
          } else {
            alert("Service url " + this.serviceUrl + " already exists");
          }
        }
      }, {
        key: "updateServiceData",
        value: function updateServiceData(service) {
          var data = new _service_data__WEBPACK_IMPORTED_MODULE_1__["ServiceData"]();
          data.url = service.url;
          data.startUrl = service.startUrl;
          data.stopUrl = service.stopUrl;
          data.name = service.name;
          data.startTime = service.startTime;
          data.stopTime = service.stopTime;
          data.downTime = service.downTime;
          data.status = service.status;
          data.upTime = service.upTime;
          data.id = service.id;
          this.serviceDataService.updateServiceData(data);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_data_service__WEBPACK_IMPORTED_MODULE_3__["ServiceDataService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 58,
      vars: 6,
      consts: [[1, "image-container"], ["src", "assets/monitor.gif", "alt", "Service Monitor", "width", "200", "height", "150"], [1, "center-text"], ["class", "error-message", 4, "ngIf"], ["serviceDataForm", "ngForm"], [2, "background-color", "#f2f2f2"], ["type", "text", "name", "appName", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "serviceUrl", "required", "", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "serviceDomain", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", 3, "click"], [1, "table"], [4, "ngFor", "ngForOf"], [1, "error-message"], [3, "ngClass"], [4, "ngIf"], [3, "disabled", "click"], [3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Service Monitoring Dashboard\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Monitor Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", null, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Application Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.appName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Service URL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_20_listener($event) {
            return ctx.serviceUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Start URL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_26_listener($event) {
            return ctx.startUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Stop URL: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_31_listener($event) {
            return ctx.stopUrl = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_33_listener() {
            return ctx.addServiceData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add Service Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "URL");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Last Up Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Last Down Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Up Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Down Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Actions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, AppComponent_tr_57_Template, 24, 21, "tr", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.appName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.serviceUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.startUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.stopUrl);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.services);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
      styles: ["table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 8px;\n}\n\nth[_ngcontent-%COMP%] {\n  background-color: #f2f2f2;\n}\n\ntr[_ngcontent-%COMP%]:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n.status-up[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.status-down[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.center-text[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: red;\n  color: white;\n  padding: 10px;\n  border: 1px solid darkred;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXHJlcG9zaXRvcnlcXHNlcnZpY2UtbW9uaXRvci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQ0o7O0FERUU7RUFDRSxVQUFBO0FDQ0o7O0FERUU7RUFDRSxrQkFBQTtBQ0NKOztBREVFO0VBQ0Usa0JBQUE7QUNDSjs7QURFRTtFQUNFLHFCQUFBO0FDQ0o7O0FEQ0U7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgfVxyXG4gIFxyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIH1cclxuICBcclxuICAuc3RhdHVzLXVwIHtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXR1cy1kb3duIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jZW50ZXItdGV4dHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcbiAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XHJcbiAgfSIsInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoLCB0ZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4uc3RhdHVzLXVwIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uc3RhdHVzLWRvd24ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uY2VudGVyLXRleHQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrcmVkO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _service_data_service__WEBPACK_IMPORTED_MODULE_3__["ServiceDataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js"); // Import FormsModule


    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-data.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service-data.service.ts ***!
    \*****************************************/

  /*! exports provided: ServiceDataService */

  /***/
  function srcAppServiceDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceDataService", function () {
      return ServiceDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ServiceDataService = /*#__PURE__*/function () {
      function ServiceDataService(zone, http) {
        _classCallCheck(this, ServiceDataService);

        this.zone = zone;
        this.http = http;
        this.serviceDataUrl = '/servicedata'; // URL to Spring Boot backend

        this.serviceDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.serviceData$ = this.serviceDataSubject.asObservable();
        this.errorMessageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.errorMessage$ = this.errorMessageSubject.asObservable();
        this.loadServiceData();
        this.subscribeToServiceEvents();
      } // private subscribeToServiceEvents() {
      //   console.log("subcribing service-event:");
      //   this.http.get<ServiceEvent[]>(`${this.serviceDataUrl}/service-events`).subscribe(
      //     (responses: ServiceEvent[]) => {
      //       console.log("responses:", responses);
      //       const updatedServices = responses.map(response => {
      //         console.log("response:", response);
      //         const existingService = this.serviceDataSubject.value.find(service => service.id === response.serviceId);
      //         if (existingService) {
      //           existingService.status = response.serviceResponse.status;
      //           // Update other properties as needed (uptime, downtime, etc.)
      //         }
      //         return existingService;
      //       });
      //       this.serviceDataSubject.next(updatedServices);
      //     },
      //     error => {
      //       console.error('Error getting service events:', error);
      //     }
      //   );
      // }


      _createClass(ServiceDataService, [{
        key: "subscribeToServiceEvents",
        value: function subscribeToServiceEvents() {
          var _this4 = this;

          console.log("subcribing service-event:");
          this.getMessages().subscribe({
            next: function next(data) {
              console.log("response:", data);

              _this4.errorMessageSubject.next(null); // Clear any previous error message 


              var response = JSON.parse(data); // Assuming data is a JSON string

              var existingService = _this4.serviceDataSubject.value.find(function (service) {
                return service.id === response.id;
              });

              if (existingService) {
                existingService.status = response.response.status; // Update other properties as needed (uptime, downtime, etc.)
              }

              _this4.serviceDataSubject.next(_toConsumableArray(_this4.serviceDataSubject.value)); // Update the subject with the modified data

            },
            error: function error(_error) {
              _this4.errorMessageSubject.next('Error fetching service events. Please refresh page.'); // Emit error message


              console.error('Error getting service events:', _error);
            }
          });
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          var _this5 = this;

          return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            var source = new EventSource("".concat(_this5.serviceDataUrl, "/service-events"));

            source.onmessage = function (event) {
              _this5.zone.run(function () {
                console.log("event:", event);

                _this5.errorMessageSubject.next(null); // Clear any previous error message 


                observer.next(event.data);
              });
            };

            source.onerror = function (event) {
              _this5.zone.run(function () {
                // console.log("event error:",event);
                _this5.errorMessageSubject.next('Error fetching service events. Please refresh page'); // Emit error message


                observer.error(event);
              });
            };
          });
        }
      }, {
        key: "loadServiceData",
        value: function loadServiceData() {
          var _this6 = this;

          this.http.get(this.serviceDataUrl + '/load').subscribe(function (data) {
            // (responses: ServiceEvent[]) => {
            console.log("data:", data);
            var updatedServices = data.map(function (service) {
              console.log("service:", service);

              var existingService = _this6.serviceDataSubject.value.find(function (service) {
                return service.id === service.id;
              });

              if (existingService) {
                existingService = service; // Update other properties as needed (uptime, downtime, etc.)

                return existingService;
              } else return service;
            });

            _this6.serviceDataSubject.next(updatedServices);
          }, function (error) {
            _this6.serviceDataSubject.next(null);

            console.log("Error loading service data: " + error.message);
          });
        }
      }, {
        key: "addServiceData",
        value: function addServiceData(serviceData) {
          var _this7 = this;

          this.http.post(this.serviceDataUrl + '/add', serviceData).subscribe(function () {
            _this7.loadServiceData();
          }, function (error) {
            console.log("Error adding service data: " + error.message);
          });
        }
      }, {
        key: "updateServiceData",
        value: function updateServiceData(serviceData) {
          var _this8 = this;

          this.http.post(this.serviceDataUrl + '/update', serviceData).subscribe(function () {
            _this8.loadServiceData();
          }, function (error) {
            console.log("Error updating service data: " + error.message);
          });
        }
      }, {
        key: "getServiceDetails",
        value: function getServiceDetails(serviceData) {
          return this.http.post(this.serviceDataUrl + '/getdetails', serviceData); // .subscribe(data => {
          //   console.log(data);
          //   return data;
          // });
        }
      }, {
        key: "removeServiceData",
        value: function removeServiceData(serviceData) {
          var _this9 = this;

          this.http.post(this.serviceDataUrl + '/remove', serviceData).subscribe(function () {
            console.log("removed:" + serviceData.id);

            _this9.loadServiceData();
          }, function (error) {
            console.log("Error removing service: " + error.message);
          });
        }
      }, {
        key: "sendEmail",
        value: function sendEmail(serviceList) {
          var downServices = serviceList.filter(function (service) {
            return service.status === 'DOWN';
          });

          if (downServices.length > 0) {
            var serviceDataList = downServices.map(function (service) {
              var serviceData = {
                id: service.id,
                name: service.name,
                status: service.status,
                url: service.url,
                startUrl: service.startUrl,
                stopUrl: service.stopUrl,
                startTime: service.startTime,
                stopTime: service.stopTime,
                upTime: service.upTime,
                downTime: service.downTime
              };
              return serviceData;
            });
            this.http.post("".concat(this.serviceDataUrl, "/sendEmail"), serviceDataList).subscribe(function () {
              console.log('Email sent successfully.');
            }, function (error) {
              console.log('Error sending email:', error);
            });
          }
        }
      }]);

      return ServiceDataService;
    }();

    ServiceDataService.ɵfac = function ServiceDataService_Factory(t) {
      return new (t || ServiceDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ServiceDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceDataService,
      factory: ServiceDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/service-data.ts":
  /*!*********************************!*\
    !*** ./src/app/service-data.ts ***!
    \*********************************/

  /*! exports provided: ServiceData */

  /***/
  function srcAppServiceDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceData", function () {
      return ServiceData;
    });

    var ServiceData = /*#__PURE__*/_createClass(function ServiceData() {
      _classCallCheck(this, ServiceData);
    });
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\repository\service-monitor\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map