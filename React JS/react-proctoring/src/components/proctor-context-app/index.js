"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
require("core-js/modules/es.symbol.description.js");
var _react = _interopRequireWildcard(require("react"));
var _hooks = require("../../hooks");
var _webcamMicrophoneUtils = require("../../utils/webcamMicrophoneUtils");
var _defaults = require("../../constants/defaults");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
const ProctoredContextApp = _ref => {
  let {
    contextProvider,
    config = {
      proctorParams: _defaults.defaultConfig
    },
    children,
    customContext = {}
  } = _ref;
  const proctorParams = (0, _react.useMemo)(() => _objectSpread(_objectSpread({}, _defaults.defaultConfig), config.proctorParams), [config.proctorParams]);
  const {
    isFullscreen,
    setFullscreen
  } = (0, _hooks.useFullscreenData)(proctorParams.fullscreenExit);
  const [audioPermisison, setAudioPermission] = (0, _react.useState)();
  const [videoPermission, setVideoPermission] = (0, _react.useState)();
  const [screensharePermission, setScreensharePermission] = (0, _react.useState)();
  const webcamReference = (0, _react.useRef)(null);
  const canvasReference = (0, _react.useRef)(null);
  const screenshareReference = (0, _react.useRef)(null);
  const [screenshareStream, setScreenshareStream] = (0, _react.useState)(null);
  const Context = contextProvider;
  const permissions = (0, _react.useMemo)(() => ({
    video: videoPermission,
    audio: audioPermisison,
    fullscreen: isFullscreen,
    screenshare: screensharePermission
  }), [videoPermission, audioPermisison, isFullscreen, screensharePermission]);
  const askPermissionAction = (0, _react.useMemo)(() => ({
    screenshare: () => {
      (0, _webcamMicrophoneUtils.setupScreensharePermission)(setScreensharePermission, screenshareReference, setScreenshareStream);
    },
    fullscreen: () => {
      setFullscreen();
    },
    video: () => {
      window.location.reload();
    }
  }), [screenshareReference, setFullscreen]);
  const askPermission = (0, _react.useCallback)(requiredPermissions => {
    requiredPermissions.forEach(element => {
      if (!permissions[element] && askPermissionAction[element]) {
        askPermissionAction[element]();
      }
    });
  }, [permissions, askPermissionAction]);
  return /*#__PURE__*/_react.default.createElement(Context.Provider, {
    value: _objectSpread(_objectSpread({}, customContext), {}, {
      permissions,
      permissionSetter: {
        audio: setAudioPermission,
        video: setVideoPermission,
        screenshare: setScreensharePermission
      },
      proctorParams,
      actions: {
        askPermission
      },
      references: {
        webcamReference,
        canvasReference,
        screenshareReference
      },
      screenshareStream
    })
  }, children);
};
var _default = exports.default = ProctoredContextApp;