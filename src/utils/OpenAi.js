import OpenAI from "openai";
const OpenAi = new OpenAI({
  apiKey:process.env.REACT_APP_Gpt_ApiKey,
  dangerouslyAllowBrowser:true,
});

export default OpenAi;
