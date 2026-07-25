const express = require("express");
const bwipjs = require("bwip-js");

const app = express();

app.use(express.static("public"));

app.get("/barcode", async (req, res) => {

    const text = req.query.text || "HELLO";
    const type = req.query.type || "datamatrix";
    const scale = Number(req.query.scale || 5);
    const format = req.query.format || "png";

    try {

        const options = {
            bcid: type,
            text: text,
            scale: scale,
            includetext: false,
            padding: 10
        };

        if (format === "svg") {
            const svg = await bwipjs.toSVG(options);

            res.setHeader(
                "Content-Type",
                "image/svg+xml"
            );

            return res.send(svg);
        }


        const png = await bwipjs.toBuffer(options);

        res.setHeader(
            "Content-Type",
            "image/png"
        );

        res.send(png);

    } catch (err) {

        res.status(400).send(
            "Barcode generation error: " + err.message
        );

    }

});


app.listen(3000, () => {
    console.log(
        "Barcode Generator running on port 3000"
    );
});
