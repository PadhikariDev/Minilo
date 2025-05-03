
import {handleGetShortId,handleRedirectUrl,getAnalytics} from "../controllers/url.js"
import express from "express";

const router = express.Router();

router.post("/url",handleGetShortId);
router.get("/:shortId",handleRedirectUrl);
router.get("/analytics/:shortId",getAnalytics);


export default router