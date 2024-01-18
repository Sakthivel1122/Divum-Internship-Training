"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PermissionBody = void 0;
var _react = _interopRequireDefault(require("react"));
var _urlVideoPermissionHighlight = _interopRequireDefault(require("../../assets/images/url-video-permission-highlight.png"));
require("./index.scss");
var text = _interopRequireWildcard(require("../../constants/text"));
var _browserUtils = require("../../utils/browserUtils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const PermissionBody = _ref => {
  let {
    showFullscreenText,
    showAudioPermissionText,
    showVideoPermissionText,
    showScreensharePermission
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, text.PERMISSION_GENERIC), showScreensharePermission && /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, !(0, _browserUtils.isChrome)() && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("strong", null, "Please switch to chrome"), /*#__PURE__*/_react.default.createElement("br", null)), /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-2 font-weight-bold"
  }, "Screenshare:"), text.PERMISSION_SCREENSHARE), showAudioPermissionText && showVideoPermissionText ? /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-2 font-weight-bold"
  }, "Camera/Microphone:"), text.PERMISSION_AUDIO_VIDEO) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, showVideoPermissionText && /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-2"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-2 font-weight-bold"
  }, "Camera:"), text.PERMISSION_VIDEO), showAudioPermissionText && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-2 font-weight-bold"
  }, "Microphone:"), text.PERMISSION_AUDIO)), (showAudioPermissionText || showVideoPermissionText) && /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "video-permission-img",
    alt: "url_video_permission_highlight",
    src: _urlVideoPermissionHighlight.default
  })), showFullscreenText && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "pr-2 font-weight-bold"
  }, "Fullscreen:"), text.PERMISSION_FULLSCREEN));
};
exports.PermissionBody = PermissionBody;