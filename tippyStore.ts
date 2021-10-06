import {Tippy} from "tippy.js";
import {writable, Writable} from "svelte/store";

export interface TippyStore  {
    [key: string]: Tippy;
}

export const tippyStore : Writable<TippyStore> = writable<TippyStore>({});