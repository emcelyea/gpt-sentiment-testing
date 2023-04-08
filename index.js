import { Configuration, OpenAIApi } from "openai";
import data from "./data.js";
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
    organization: process.env.OPENAI_ORG_KEY,
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

//Treat caring or liking something as positive sentiment and their inverse as negative.

const gpt35Prompt =  `
You are a researcher looking for messages that have strong opinions about the product Doritos. 
For every message you are given find strong opinions about doritos. Return all the strong opinions as an array of strings.`
//`
// For every message, describe how strong of an opinion the message has about doritos.
// Rate the messages from 0-9 where 0 is no opinion and 9 is a strong opinion.
// Reply with a comma seperated list of numbers in order of the messages passed in.
// Treat violent words and drug use as hyperbole for emphasis.
//`;
//`
//   For every message, rate the sentiment towards doritos from 0-9.
//   Treat violent words and drug use as hyperbole for emphasis.
//   Reply with a comma seperated list of numbers in order of the messages passed in.
// `;
// `You will receive a word and an array of sentences. 
// For each sentence determine what the sentiment towards the word is from 0-9 and what part of the sentence the word is the subject or object.
//  Reply with an array of js objects in the form: [{sentiment:2, subject:false, object:true}]`
const gpt35Messages = [
  {role:'system', content: gpt35Prompt},
  ...data.map(d => ({role:'user', content:d.message}))
];
const GPT_3_5_TURBO_PARAMS = {
  model:'gpt-3.5-turbo',
  temperature: 0,
  "max_tokens": 142,
  messages: gpt35Messages,
}

let response = await openai.createChatCompletion(GPT_3_5_TURBO_PARAMS)
console.log('resdata,',response.data.choices[0].message);
const resdata = response.data.choices[0].message.content;

// const sents = resdata.split(',');
// for (var i = 0; i < data.length; i++) {
//   console.log(data[i].message.slice(0,50), 'my prediction:', data[i].sentiment, 'gpts estimate:', sents[i])
// }

// const ADA_PARAMS = {
//   model: 'text-ada-001',
//   prompt: 'Rate the following message from 0-9: "I like doritos".',
//   "max_tokens": 142,
//   temperature: 0,
// }
// let response = await openai.createCompletion(ADA_PARAMS);
// console.log(response.data.choices[0]);
