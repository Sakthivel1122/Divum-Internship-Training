"use strict";

require("core-js/modules/es.weak-map.js");
require("core-js/modules/web.dom-collections.iterator.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Permission = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactBootstrap = require("react-bootstrap");
require("./index.scss");
var text = _interopRequireWildcard(require("../../constants/text"));
var _permissionBody = require("./permission-body");
var _breachUtils = require("../../utils/breachUtils");
var _permission = require("../../utils/permission");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Permission = _ref => {
  let {
    proctorParams,
    permissions,
    askPermission
  } = _ref;
  const showPermissionModal = !(0, _permission.hasAllPermissions)((0, _breachUtils.getRequiredPermissionsFromProctorParams)(proctorParams), permissions);
  return /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal, {
    show: showPermissionModal,
    size: "lg",
    backdrop: "static",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true
  }, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Header, null, /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Title, null, text.PERMISSION_TITLE)), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Body, {
    className: "font-medium"
  }, /*#__PURE__*/_react.default.createElement(_permissionBody.PermissionBody, {
    showFullscreenText: !permissions.fullscreen,
    showAudioPermissionText: !permissions.audio && (0, _breachUtils.isAudioRequired)(proctorParams),
    showVideoPermissionText: !permissions.video && (0, _breachUtils.isWebcamRequired)(proctorParams),
    showScreensharePermission: !permissions.screenshare && proctorParams.screenshareSnapshots
  })), /*#__PURE__*/_react.default.createElement(_reactBootstrap.Modal.Footer, null, !permissions.screenshare && proctorParams.screenshareSnapshots && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    onClick: () => {
      askPermission(['screenshare']);
    }
  }, text.ALLOW_SCREENSHARE), !permissions.fullscreen && proctorParams.fullscreenExit && /*#__PURE__*/_react.default.createElement(_reactBootstrap.Button, {
    variant: "primary",
    onClick: () => {
      askPermission(['fullscreen']);
    }
  }, text.ALLOW_FULLSCREEN)));
};
exports.Permission = Permission;