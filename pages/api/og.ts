import chromium from 'chrome-aws-lambda';
import { chromium as playwrightChromium } from 'playwright-core';


import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const executablePath = await chromium.executablePath
  console.log("🚀 ~ file: og.ts ~ line 8 ~ executablePath", executablePath)
  const browser = await playwrightChromium.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  })


  const page = await browser.newPage({
    viewport: {
      width: 1200,
      height: 630,
    },
  });

  const title = req.query["title"];
  const url = `https://workwithutkarsh.com/og?title=${title}`;
  await page.goto(url, {
    timeout: 15 * 1000,
  });
  const data = await page.screenshot({
    type: "png",
  });
  await browser.close();

  res.setHeader("Cache-Control", "s-maxage=31536000, stale-while-revalidate");
  res.setHeader("Content-Type", "image/png");

  res.end(data);
};
