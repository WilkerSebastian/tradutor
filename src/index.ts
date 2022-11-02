import * as dotenv from 'dotenv'
dotenv.config()
import express from "express";
import puppeteer from "puppeteer"

const view = (process.env.VIEW as string) == "true"

const PORT = Number(process.env.PORT) || 80

const app = express()

app.get("/" , (req , res) => {

    return res.status(200).json({

        author: "Wilker Sebastian Afonso Pereira",
        repository: "https://github.com/WilkerSebastian/tradutor"

    })

})

app.get("/traduzir", async (req, res) => {

    const { text, lang } = req.query

    const browser = await puppeteer.launch({headless: !view});

    const page = await browser.newPage();

    await page.goto(`https://translate.google.com.br/?hl=pt-BR&sl=auto&tl=${lang}&text=${text}&op=translate`);

    await page.waitForSelector(".ryNqvb")

    const traducao = await page.evaluate(() => (document.querySelector(".ryNqvb") as HTMLSpanElement).innerText)

    await browser.close();

    if (traducao) {
        
        return res.status(200).json({

            text:text,
            lang:lang,
            translate:traducao
    
        })

    }

    return res.status(500).json({

        error: "problema na tradução do termo",
        text:text,
        lang:lang

    })

})

app.listen(PORT, () => {

    console.log("servidor rodando na porta: " + PORT);

})