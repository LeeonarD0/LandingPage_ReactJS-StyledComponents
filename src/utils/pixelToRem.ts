export function pixelToRem(...values: number[]) { //Essa funcao converte Pixel em rem
    return values
    .reduce((acc, current) => acc += current / 16 + `rem`, "")
    .trim();
};