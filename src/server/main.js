import express from "express";
import ViteExpress from "vite-express";
import OpenAI from "openai";
import fs from "fs";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();



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

app.post("/review", async (req, res) => {
    const file = fs.readFileSync('./sample-response-2.json', 'utf8');
    const response = JSON.parse(file);
    res.json(response);
});

app.post("/review/this/is/the/paid/version/bro", async (req, res) => {
    const { message } = req.body;
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
              {
                "role": "system",
                "content": "You have to provide feedback on a essay written for a FCE Cambridge Exam. The feedback must include:\n1) a list of the misspelled words. if the misspelling is a preposition\n2) feedback on each paragraph regarding the structure, content and clarity of ideas and phrases that could be improved.\n3) improved version of the essay applying notes of point 1 and 2. keep the core ideas and well-written parts of the original essay.\nthe output format must be:\n{\n  \"misspellings\": [{\"wrong\": \"cofe\", \"correct\": \"coffe\", \"textPiece\": \"some people think that drinking cofe may cause...\"}],\n\"paragraphs\": [{\"paragraph\": 1, \"feedback\": \"paragraph feedback..\",\"suggested_changes\":[\"on the second sentence..\", \"on the third sentences..\"]}],\n\"rewritten_version\": \"rewritten version\"\n}"
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

        const lastMessageContent = response.choices[0].message.content;
        const parsedContent = JSON.parse(lastMessageContent);
        res.json(parsedContent);

    } catch (error) {
        console.error("Error calling the OpenAI API:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
