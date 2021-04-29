// @ts-ignore
import Tooltip from "./Tooltip.svelte";


export function popover(anchorNode, props) {
    if(props === null) return;
    props = {
        appendTo: anchorNode,
        interactive: true,
        followCursor: false,
        arrow: false,
        ...props,
    };
    return tooltip(anchorNode,props);
}

export function tooltip(anchorNode, props) {
    if(props === null) return;
    const tooltipComponent = new Tooltip({
        target: document.body,
        props: {anchorNode, ...props}
    });

    const show = () => (tooltipComponent.show = true);
    const hide = () => (tooltipComponent.show = false);
    const showEvents = ["mouseenter", "focus"];
    const hideEvents = ["mouseleave", "blur"];


    showEvents.forEach((event) =>  anchorNode.addEventListener(event, show));
    hideEvents.forEach((event) => anchorNode.addEventListener(event, hide));

    return {
        destroy() {
            showEvents.forEach((event) =>
                anchorNode.removeEventListener(event, show)
            );
            hideEvents.forEach((event) =>
                anchorNode.removeEventListener(event, hide)
            );
        }
    };
}

export default tooltip;