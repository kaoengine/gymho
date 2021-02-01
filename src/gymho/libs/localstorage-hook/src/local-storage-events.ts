import { storage } from './storage'
interface KVP<K, V> {
    key: K,
    value: V
}


/**
 * Used for creating new events for LocalStorage. This enables us to
 * have the ability of updating the LocalStorage from outside of the component,
 * but still update the component without prop drilling or creating a dependency
 * on a large library such as Redux.
 *
 * @class LocalStorageChanged
 * @extends {CustomEvent<KVP<string, string>>}
 */
export class LocalStorageChanged<TValue> extends CustomEvent<KVP<string, TValue>>{
    static eventName = 'onLocalStorageChange';

    constructor(payload: KVP<string, Tvalue>) {
        super(LocalStorageChanged.eventName, { detail: payload });
    }
}

/**
 * Checks if the event that is passed in is the same type as LocalStorageChanged.
 *
 * @export
 * @template TValue
 * @param {*} evt the object you wish to assert as a LocalStorageChanged event.
 * @returns {evt is LocalStorageChanged<TValue>} if true, evt is asserted to be LocalStorageChanged.
 */
export function isTypeOfLocalStorageChanged<TValue>(evt: any): evt is LocalStorageChanged<TValue> {
    return (!!evt) && (evt instanceof LocalStorageChanged || (evt.detail && evt.type === LocalStorageChanged.eventName));
}


/**
 * Use this instead of directly using localStorage.setItem
 * in order to correctly send events within the same window.
 *
 * @example
 * ```js
 * writeStorage('hello', JSON.stringify({ name: 'world' }));
 * const { name } = JSON.parse(localStorage.getItem('hello'));
 * ```
 *
 * @export
 * @param {string} key The key to write to in the localStorage.
 * @param {string} value The value to write to in the localStorage.
 */