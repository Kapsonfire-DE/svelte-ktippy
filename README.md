# svelte-ktippy

![npm](https://img.shields.io/npm/v/svelte-ktippy)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/svelte-ktippy)
![npm](https://img.shields.io/npm/dw/svelte-ktippy)

![GitHub](https://img.shields.io/github/license/Kapsonfire-DE/svelte-ktippy)

Tippy.js for [Svelte](https://svelte.dev/).

## Install

```shell
$ npm i svelte-ktippy
```

or

```shell
$ yarn add svelte-ktippy
```

## How to use

### Example

```html
<script>
  import tooltip from "svelte-ktippy";
  import MyRenderedTooltip from "MyRenderedTooltip.svelte"
</script>
<div use:tooltip={{component: MyRenderedTooltip}}>
  Hover me
</div>
```

### Example with properties
```html
<script>
  import tooltip from "svelte-ktippy";
  import TooltipItem from "TooltipItem.svelte"
  let myItem = new Item(.....);
</script>
<div use:tooltip={{component: TooltipItem, props: {item: myItem}}>
  Hover me
</div>
```