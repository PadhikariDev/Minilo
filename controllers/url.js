import { nanoid } from 'nanoid';
import URL from "../models/url.js";


async function handleGetShortId(req,res) {
    const body = req.body;
    if(!body.url) return res.status(400).json({error : "enter the url"});
    const shortId = nanoid(8);
    await URL.create({
        shortId:shortId,
        redirectUrl:body.url,
        visitHistory:[]
    });
    return res.json({id:shortId});
     
}

async function handleRedirectUrl(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOneAndUpdate(
        { shortId },
        {
          $push: {
            visitHistory: {
              timestamp: new Date(), 
            },
          },
          $inc: { clicks: 1 }
        },
        { new: true }
      );
      return res.redirect(result.redirectUrl);
}

async function getAnalytics(req,res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    
    return res.json({
        totalClicks:result.clicks
    })
}



export {
    handleGetShortId,
    handleRedirectUrl,
    getAnalytics
}