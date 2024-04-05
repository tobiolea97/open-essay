import express from "express";
import ViteExpress from "vite-express";
import OpenAI from "openai";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";
import { routes } from "./routes/index.js";
import { createRequire } from 'module';
import { initializeDbConnection } from './db.js';

const require = createRequire(import.meta.url);
require('dotenv').config();

const app = express();

routes.forEach(route => {
  app[route.method](route.path, route.handler);
});

// get api key
const data = fs.readFileSync('../openai-key.json', 'utf8');
const config = JSON.parse(data);
const model = "gpt-3.5-turbo";

// initializing openai 
const openai = new OpenAI({
    apiKey: config.apiKey,
    organization: config.organization,
});

const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// console.log("GOOGLE_CLIENT_ID", process.env.GOOGLE_CLIENT_ID);
// console.log("GOOGLE_CLIENT_SECRET", process.env.GOOGLE_CLIENT_SECRET);

app.post("/review", async (req, res) => {
    //simulate delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const { message } = req.body;
    const file = fs.readFileSync('./open-ai-responses/output-1712327366690.txt', 'utf8');
    // write the content of output into a file. the name of the file must include the date and time of the request
    const output = parseResponse(file, message);
    res.json(output);
});

function parseResponse(file, message) {
  let misspellings = parseMisspellings(file);
  let rephrases = parseRephrases(file);
  let comments = parseComments(file);
  let rewrite = parseRewrite(file);
  let original = message.split(/\n\n/g);

  return {
    misspellings: misspellings,
    rephrases: rephrases,
    comments: comments,
    rewrite: rewrite,
    original: original
  }
}

function parseMisspellings(file) {
  var misspellingsArray = [];
  var misspellings = file.split("###rephrases###")[0];
  misspellings = misspellings.replace("\"###misspellings###\\n", "");
  misspellings = misspellings.split("\\n");
  misspellings.forEach(element => {
    if(element.split("|")[0] && element.split("|")[1] && element.split("|")[2]) {
      let misspellingsElement = {
        wrong: element.split("|")[0],
        correct: element.split("|")[1],
        sentence: element.split("|")[2],
      };
      misspellingsArray.push(misspellingsElement);
    }
  });
  return misspellingsArray;
}

function parseRephrases(file) {
  var rephrasesArray = [];
  var rephrases = file.split("###rephrases###")[1].split("###comments###")[0];
  rephrases = rephrases.split("\\n");
  rephrases.forEach(element => {
    if(element.split("|")[0] && element.split("|")[1]) {
      let rephrasesElement = {
        unclear: element.split("|")[0],
        rephrased: element.split("|")[1],
      };
      rephrasesArray.push(rephrasesElement);
    }
  });
  return rephrasesArray;
}

function parseComments(file) {
  var commentsArray = [];
  var comments = file.split("###comments###")[1];
  comments = comments.split("###rewrite###")[0];
  comments = comments.replace("\\n", "");
  comments = comments.split(/\|/g);
  comments.forEach(element => {
    element = element.replace("\\n", "");
    commentsArray.push(element);
  });
  return commentsArray;
}

function parseRewrite(file) {
  var rewrite = file.split("###rewrite###\\n")[1];
  if(rewrite === undefined) {
    rewrite = file.split("###rewrite###\\n")[1];
  }
  let paragraphs = rewrite.split("\\n\\n");
  return paragraphs;
}

app.post("/review/this/is/the/paid/version/bro", async (req, res) => {
  const { message } = req.body;
  try {
      const response = await openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            {
              "role": "system",
              "content": "You have to provide feedback on a essay written for a FCE Cambridge Exam. Include:\n1) a list of mistakes.\n2) a list of phrases that must be rephrased\n3) comments on the overall structure, content, transitions and tips to improve it..\n4) improved version of the essay. keep the core ideas and well-written parts of the original essay.\nthe output format is below (use \"|\" as char separator, and avoid adding special characters such as \", ', - and others):\n###misspellings###\nwrong-word-or-expression-1|correct-word-or-expression-1|original-sentence-where-the-error-was-found\n###rephrases###\nunclear-phrase|rephrase\n###comments###\nComment|Another comment|third comment\n###rewrite###\nwrite an improved version. use between 240 and 280 words.\n\nadditional instructions:\nif wrong-word-or-expression-1 is for instance \"there is amazing amount\" (error: lack of an before amazing), correct-word-or-expression-1 should be \"an amazing\"\n\n"
            },
            {
              "role": "user",
              "content": `${message}`
            }
          ],
          temperature: 1,
          max_tokens: 1500,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
        });
        let fileName = `./open-ai-responses/output-${Date.now()}.txt`;
        const lastMessageContent = response.choices[0].message.content;
        fs.writeFileSync(fileName, JSON.stringify(lastMessageContent));
        const file = fs.readFileSync(fileName, 'utf8');
        const output = parseResponse(file, message);
        res.json(output);

  } catch (error) {
      console.error("Error calling the OpenAI API:", error);
      res.status(500).json({ error: "Internal Server Error" });
  }
});

initializeDbConnection();

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
