<svelte:options accessors={true}/>
<script lang="ts">
    import tippy from "tippy.js/dist/tippy-bundle.umd.js";
    import {onMount, onDestroy} from "svelte";

    export let component;
    export let props = {};
    export let anchorNode;
    export let placement: string = 'auto'
    export let appendTo: string | HTMLElement = anchorNode;
    export let followCursor: boolean = false;
    export let maxWidth: string | number = 'calc(100vw - 10px)';
    export let interactive: boolean = false;
    export let arrow: boolean = false;
    let tooltipNode;
    let instance = null;

    onDestroy(() => {
        instance.destroy();
    });
    onMount(() => {
        instance = tippy(anchorNode, {
            content: tooltipNode,
            appendTo: typeof appendTo === 'string' ? document.querySelector(appendTo) : appendTo,
            placement,
            maxWidth,
            interactive,
            arrow,
            followCursor,
            interactiveBorder: 0,
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