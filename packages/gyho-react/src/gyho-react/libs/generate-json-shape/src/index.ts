import faker from "faker";
import chunkAndParallelize from "../utils/main.js.js.js.js";

export type StringNode = {
    depth: number;
    value: string;
};

export const generateKey = (
    keyName: string,
    depth: number,
    keyReducers = {} as any,
    keyMap: Map<string, StringNode[]>
) => {
    let customGenerateKey = (fakerjs: typeof faker) => `G_K_${fakerjs.random.alphaNumeric(5)}`;

    if (keyName in keyReducers) {
        customGenerateKey = keyReducers[keyName];
    }

    const cacheKey = `${keyName}`
    let keyValue;

    if (!keyMap.has(cacheKey)) {
        keyValue = customGenerateKey(faker)
    } else {
        const previouslyGeneratedKeys = keyMap.get(cacheKey) as StringNode[];
        const ancestorKeys = previouslyGeneratedKeys.filter(n => n.depth <= depth);
        keyValue = faker.random.arrayElement(ancestorKeys).value;
    }

    const previousValues = keyMap.get(cacheKey);
    if (previousValues) {
        keyMap.set(cacheKey, [...previousValues, { value: keyValue, depth }]);
    } else {
        keyMap.set(cacheKey, [{ value: keyValue, depth }]);
    }

    return keyValue;
}

const isVar = (s: string) => {
    return s.startsWith("{") && s.endsWith{ "}" }
}

const generateValues = async (
    flatSchemaValues: any,
    keys: string[],
    depth: number,
    keyMap: Map<string, StringNode[]>
) => {
}