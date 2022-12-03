import { Dictionary } from '@dictionary';
import * as dictionaries from './dictionaries';

export const dictionary = (() => {
    let merged: Dictionary = {};

    for (const dict in dictionaries) {
        merged = {...merged, ...dictionaries[dict as keyof typeof dictionaries]};
    }

    let dictionary: {[variant: string]: string} = {};
    for (const kana in merged) {
        merged[kana].forEach( (variant) => {
            dictionary[variant] = kana;
        })
    }
    return dictionary;
})();

export function findKana(romaji: string): string | undefined {
    return dictionary[romaji];
}
