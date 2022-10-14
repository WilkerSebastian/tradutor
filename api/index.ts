import { Request, Response } from "express";

export default async (req: Request, res: Response) => {
    res.status(220).json({

        "ip": req.ip,
        "teste": "deu certo!"

    })
};