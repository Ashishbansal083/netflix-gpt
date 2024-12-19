import OpenAI from "openai";
const OpenAi = new OpenAI({
  apiKey:process.env.Gpt_ApiKey,
  dangerouslyAllowBrowser:true,
});

export default OpenAi;