"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOffsetBounds = void 0;
var min = Math.min, max = Math.max;
function getOffsetBounds(_a) {
    var containerDimension = _a.containerDimension, childDimension = _a.childDimension, padding = _a.padding, centerContained = _a.centerContained;
    var diff = childDimension - containerDimension;
    if (diff + 2 * padding <= 0 && centerContained) {
        return [diff / 2, diff / 2];
    }
    else {
        return [min(diff + padding, 0) - padding, max(0, diff + padding)];
    }
}
exports.getOffsetBounds = getOffsetBounds;
