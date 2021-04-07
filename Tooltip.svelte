<svelte:options accessors={true}/>
<script>
    import tippy from "tippy.js/dist/tippy-bundle.umd.js";
    import {onMount as _onMount, onDestroy as _onDestroy} from "svelte";

    export let component;
    export let props = {};
    export let anchorNode;
    export let placement = 'auto'
    export let appendTo = anchorNode;
    export let followCursor = false;
    export let maxWidth = 'calc(100vw - 10px)';
    export let interactive = false;
    export let arrow = false;
    export let getReferenceClientRect = null;
    export let onMount = undefined;
    export let onShow = undefined;
    export let onShown = undefined;
    export let animation = 'fade';
    let tooltipNode;
    let instance = null;

    _onDestroy(() => {
        instance.destroy();
    });
    _onMount(() => {
        instance = tippy(anchorNode, {
            content: tooltipNode,
            appendTo: typeof appendTo === 'string' ? document.querySelector(appendTo) : appendTo,
            placement,
            maxWidth,
            interactive,
            arrow,
            followCursor,
            interactiveBorder: 0,
            getReferenceClientRect,
            animation,
            onMount,
            onShown,
            onShow,
            popperOptions: {
                strategy: 'fixed'
            }
        });
    });


</script>

<div bind:this={tooltipNode}>
    <svelte:component this={component} {...props}/>
</div>


<style>
  :global(.tippy-box) {
    background-color: transparent;
    backdrop-filter: blur(4px);
    color: #fff;
    padding: 0;
    margin: 0;
  }
  :global(.tippy-content) {
      padding: 0;
      margin: 0;
  }
</style>