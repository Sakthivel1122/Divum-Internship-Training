"use strict";

require("core-js/modules/es.object.assign.js");
require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ProctorApp = void 0;
require("core-js/modules/es.promise.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _useWakeUpLock = require("../../hooks/useWakeUpLock");
require("./index.scss");
var _utils = require("../../utils");
var _hooks = require("../../hooks");
var _permissions = require("../permissions");
var _breachUtils = require("../../utils/breachUtils");
var _webcamMicrophoneUtils = require("../../utils/webcamMicrophoneUtils");
var _defaults = require("../../constants/defaults");
var _webcamActivityTracker = _interopRequireDefault(require("../webcam-activity-tracker"));
var _browserUtils = require("../../utils/browserUtils");
var _screenshareActivityTracker = require("../screenshare-activity-tracker");
var _dom = require("../../constants/dom");
var _useIsPageFocussed = _interopRequireDefault(require("../../hooks/useIsPageFocussed"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const isWebcamProcessingReliable = (0, _utils.isGPUAvailable)();
const ProctorApp = _ref => {
  let {
    proctoringIdentifier,
    customPermissionView = null,
    permissionPassedProps = {},
    children,
    proctoredContext,
    config,
    getProctorParamValues = () => {},
    getWebcamSnapshot = () => {},
    getScreengrab = () => {},
    logger = () => {}
  } = _ref;
  const context = (0, _react.useContext)(proctoredContext);
  const {
    actions,
    permissions,
    references,
    permissionSetter,
    screenshareStream
  } = context;
  const {
    acquireWakeUpLock,
    releaseWakeUpLock
  } = (0, _useWakeUpLock.useWakeUpLock)();
  (0, _react.useEffect)(() => {
    acquireWakeUpLock();
    return releaseWakeUpLock;
  }, []);
  const CustomPermissionView = customPermissionView;
  const proctorParams = (0, _react.useMemo)(() => _objectSpread(_objectSpread({}, _defaults.defaultConfig), config.proctorParams), [config.proctorParams]);
  const statistics = (0, _react.useRef)((0, _breachUtils.getInitialStats)(proctorParams));
  const {
    recurring = false,
    recurringFetchInterval = 0
  } = config;
  const recurringFetchIntervalRef = (0, _react.useRef)(null);
  const sendScreengrab = (0, _react.useCallback)(async function () {
    let isBreach = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let breachedParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (proctorParams.screenshareSnapshots && permissions.screenshare) {
      const screenshot = await (0, _webcamMicrophoneUtils.captureScreenshot)("#".concat(_dom.SCREENSHARE_REFERENCE_ID));
      getScreengrab(proctoringIdentifier, screenshot, isBreach, breachedParam);
    }
  }, [getScreengrab, proctoringIdentifier, proctorParams.screenshareSnapshots, permissions.screenshare]);
  const sendWebcamSnapshot = (0, _react.useCallback)(async function () {
    let isBreach = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let breachedParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (proctorParams.webcamSnapshots && permissions.video) {
      const webcamSnapshot = await (0, _webcamMicrophoneUtils.captureScreenshot)("#".concat(_dom.WEBCAM_REFERENCE_ID));
      getWebcamSnapshot(proctoringIdentifier, webcamSnapshot, isBreach, breachedParam);
    }
  }, [proctoringIdentifier, getWebcamSnapshot, proctorParams.webcamSnapshots, permissions.video]);
  const sendProctoredParamValues = (0, _react.useCallback)(function () {
    let isBreach = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let breachParam = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    getProctorParamValues(proctoringIdentifier, statistics.current, isBreach, breachParam);
  }, [proctoringIdentifier, getProctorParamValues]);
  const isTabSwitched = !(0, _hooks.usePageVisibility)(proctorParams.tabSwitch);
  const isPageFocussed = (0, _useIsPageFocussed.default)(proctorParams.pageFocus);
  (0, _react.useEffect)(() => {
    let timeoutId = null;
    if (recurring) {
      const randomStartDelay = 1000 * (Math.floor(Math.random() * 10) + 1);
      timeoutId = setTimeout(() => {
        recurringFetchIntervalRef.current = setInterval(() => {
          sendProctoredParamValues();
          sendWebcamSnapshot();
          sendScreengrab();
        }, recurringFetchInterval);
      }, randomStartDelay);
    }
    return () => {
      clearInterval(recurringFetchIntervalRef.current);
      clearTimeout(timeoutId);
    };
  }, [recurring, recurringFetchInterval, sendProctoredParamValues, sendWebcamSnapshot, sendScreengrab]);
  (0, _react.useEffect)(() => {
    const currentStats = {
      isTabSwitched,
      isFullScreen: permissions.fullscreen,
      isWebcamDataNotReliable: !isWebcamProcessingReliable,
      isPageFocussed
    };
    const breachData = (0, _breachUtils.getDataOnBreach)(statistics, currentStats, proctorParams);
    (0, _utils.updateStatistics)(statistics, currentStats, proctorParams);
    if (breachData) {
      sendProctoredParamValues(true, breachData.breachedParam);
      sendWebcamSnapshot(true, breachData.breachedParam);
      sendScreengrab(true, breachData.breachedParam);
    }
  }, [isTabSwitched, isPageFocussed, permissions.fullscreen, sendProctoredParamValues, sendWebcamSnapshot, sendScreengrab, proctorParams]);
  const shouldShowProctoredComponent = (0, _breachUtils.showProctoredComponent)(proctorParams, permissions);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(proctorParams.copyPasteProctoring ? 'disable-copy-paste fullwidth fullheight' : 'fullwidth fullheight')
  }, shouldShowProctoredComponent && children, !shouldShowProctoredComponent && customPermissionView && /*#__PURE__*/_react.default.createElement(CustomPermissionView, _extends({
    permissions: permissions,
    proctorParams: proctorParams,
    references: references,
    actions: actions,
    browserDetails: (0, _browserUtils.getBrowserDetails)()
  }, permissionPassedProps)), !shouldShowProctoredComponent && !customPermissionView && /*#__PURE__*/_react.default.createElement(_permissions.Permission, {
    proctorParams: proctorParams,
    permissions: permissions,
    askPermission: actions.askPermission
  }), /*#__PURE__*/_react.default.createElement(_webcamActivityTracker.default, {
    proctorParams: proctorParams,
    setAudioPermission: permissionSetter.audio,
    setVideoPermission: permissionSetter.video,
    webcamReference: references.webcamReference,
    canvasReference: references.canvasReference,
    logger: logger
  }), proctorParams.screenshareSnapshots && /*#__PURE__*/_react.default.createElement(_screenshareActivityTracker.ScreenshareActivityTracker, {
    screenshareStream: screenshareStream,
    ref: references.screenshareReference
  }));
};
exports.ProctorApp = ProctorApp;
var _default = exports.default = ProctorApp;