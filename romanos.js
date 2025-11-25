import arabicToRoman from "./arabigos.js";


// romanos.js
function romanToArabic(roman) {
    if (typeof roman !== "string" || roman.trim() === "") {
        throw new Error("Romano inválido: cadena no vacía");
    }
    const s = roman.toUpperCase().trim();
    if (!/^[MDCLXVI]+$/.test(s)) {
        throw new Error("Romano inválido: caracteres no permitidos");
    }
    const val = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let total = 0;
    let prev = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const curr = val[s[i]];
        if (curr < prev) total -= curr;
        else {
            total += curr;
            prev = curr;
        }
    }
    if (total <= 0 || total > 3999) {
        throw new Error("Romano fuera de rango (1-3999)");
    }
    const canonical = arabicToRoman(total);
    if (canonical !== s) {
        throw new Error("Romano no canónico (forma incorrecta)");
    }
    return total;
}

export default romanToArabic