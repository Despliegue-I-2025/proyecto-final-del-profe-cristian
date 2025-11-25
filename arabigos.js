 function arabicToRoman(num) {
    if (!Number.isInteger(num) || num <= 0 || num > 3999) {
        throw new Error("Número inválido: usa enteros entre 1 y 3999");
    }
    const map = [
        { v: 1000, r: "M" },
        { v: 900, r: "CM" },
        { v: 500, r: "D" },
        { v: 400, r: "CD" },
        { v: 100, r: "C" },
        { v: 90, r: "XC" },
        { v: 50, r: "L" },
        { v: 40, r: "XL" },
        { v: 10, r: "X" },
        { v: 9, r: "IX" },
        { v: 5, r: "V" },
        { v: 4, r: "IV" },
        { v: 1, r: "I" }
    ];
    let res = "";
    let n = num;
    for (const { v, r } of map) {
        while (n >= v) {
            res += r;
            n -= v;
        }
    }
    return res;
}


export default arabicToRoman