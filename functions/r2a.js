import  romanToArabic  from "../romanos.js";
const r2a = (req, res) => {
    // Habilitar CORS
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    const { roman } = req.query;

    // Validación básica
    if (!roman || typeof roman !== "string") {
        return res.status(400).json({ error: "Número romano inválido" });
    }

    try {
        const arabic = romanToArabic(roman);
        res.status(200).json({arabic});
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
};

export default r2a;