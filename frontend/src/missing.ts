export const range = (n: number): Array<number> => Array.from(Array(n).keys())

export const classNames = (
    ...classes: { [key: string]: boolean }[]
): string => {
    const filtered = Object.entries(classes)
        .filter(([_key, value]) => value)
        .map(([key, _value]) => key)
    return filtered.join(' ')
}
