import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants"; // adjust the path if needed

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Simulate list endpoint
    res.json(PROPERTYLISTINGSAMPLE);
}