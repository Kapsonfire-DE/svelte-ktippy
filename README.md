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
### Prepare rollup environment variables
tippy.js makes use of the NODE_ENV on default. 
To remove it, we use @rollup/plugin-replace

```npm i @rollup/plugin-replace```

Edit your ```rollup.config.js```

Add: ```import replace from '@rollup/plugin-replace';``` to the head

Add to the plugins array:
```javascript
replace({
    'process.env.NODE_ENV': JSON.stringify('production')
})
```


### Example
[![Edit svelte-ktippy](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/svelte-ktippy-i5unt?file=/App.svelte)

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


## FAQ
#
