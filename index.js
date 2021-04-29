var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// @ts-ignore
import Tooltip from "./Tooltip.svelte";
export function popover(anchorNode, props) {
    if (props === null)
        return;
    props = __assign({ appendTo: anchorNode, interactive: true, followCursor: false, arrow: false }, props);
    return tooltip(anchorNode, props);
}
export function tooltip(anchorNode, props) {
    if (props === null)
        return;
    var tooltipComponent = new Tooltip({
        target: document.body,
        props: __assign({ anchorNode: anchorNode }, props)
    });
    var show = function () { return (tooltipComponent.show = true); };
    var hide = function () { return (tooltipComponent.show = false); };
    var showEvents = ["mouseenter", "focus"];
    var hideEvents = ["mouseleave", "blur"];
    showEvents.forEach(function (event) { return anchorNode.addEventListener(event, show); });
    hideEvents.forEach(function (event) { return anchorNode.addEventListener(event, hide); });
    return {
        destroy: function () {
            showEvents.forEach(function (event) {
                return anchorNode.removeEventListener(event, show);
            });
            hideEvents.forEach(function (event) {
                return anchorNode.removeEventListener(event, hide);
            });
        }
    };
}
export default tooltip;
