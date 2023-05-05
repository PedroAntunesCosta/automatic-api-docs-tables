# Automatic API docs tables

When documenting APIs or forms, most of the information in the fields' descriptions can be derived from the field names and types. This enables tech writers to use AI to generate this content and later review the text, filling in the gaps, which makes the whole process faster.

With this automation, you can enter field names and types to the spreadsheet and automatically create API fields tables with AI generated descriptions in Markdown or HTML. This works for multiple tables at a time if you are working with complex data structures.

See below how to [set up](#setting-up) and [use this tool](#using-the-tool).

> You don't need to know how to code, but you must have an Open AI "pay as you go" account. More details below.

## Setting up

There are two steps to get this tool up and running. First you must [Get an Open AI API key](#get-an-open-ai-api-key) and then [set up the Google Apps Script](#set-up-google-apps-script).

### Get an Open AI API key

You must pay to use Open AI's APIs, including ChatGPT, which is a depenency for this tool. Open AI's "pay as you go" account model allows you to pay by request, while working with a range of APIs, including Dall-e, ChatGPT and GPT-4 text completion.

This tool works with multiple tables at a time, but calls the ChatGPT API once for each table. I recommend you check [Open AI API pricing](https://openai.com/pricing), which may vary if you tweak the parameters. However, with this tool's native settings, I have generated dozens of tables for under $ 0.50. You can also set a monthly spending limit.

See this article on [how to create an Open AI account and get your API key](https://promptmuse.com/how-to-create-and-openai-account-and-get-an-api/).

### Set up Google Apps Script

Once you have your [Open AI API key](#get-an-open-ai-api-key), follow these steps to set up the script:

1. Create a new doc in Google Drive. This doc will receive the generated tables from the script.
2. Create a new spreadsheet in Google Drive.
3. In your newly created spreadsheet, go to `Extensions` > `Apps Script`.
4. This will open a new Apps Script project in a new tab. Create the necessary files and copy the code according to this repository's [Google Apps Script folder](https://github.com/PedroAntunesCosta/automatic-api-docs-tables/tree/main/Google%20Apps%20Scripts).
5. Go to the `Configs.gs` file of your Apps Script project. And fill in the variables (see this [example](#configs-example)):
    - `OPEN_AI_KEY`: your [Open AI API key](#get-an-open-ai-api-key).
    - `FIELDS_SHEET_ID`: ID of your newly created spreadsheet. You can get this ID from the spreadsheet's URL, which is in this format: `https://docs.google.com/spreadsheets/d/`+`{spreadsheet-id}`+`/edit#gid=0`.
    - `OUTPUT_DOC_ID`: ID of your newly created doc. You can get this ID from the doc's URL, which is in this format: `https://docs.google.com/document/d/`+`{doc-id}`+`/edit`.
6. Save your Apps Script project.
7. Go to your spreadsheet and fill in the first four cells of the first row with the following values:

|  | A | B | C | D |
| ----- | ----- | ----- | ----- | ----- |
| 1 | Table name | Field names | Type | Doc format |

With these steps you should be ready to go.

> Learn more about [Google Apps Script](https://www.google.com/script/start/)

#### Configs example

Consider these URLs:
- Spreadsheet: `https://docs.google.com/spreadsheets/d/1hPdQBb-7yDCvsd8XAqPg2345uigLKQi0Cvj1VwGoZs/edit#gid=0`
- Doc: `https://docs.google.com/document/d/1W7erIcdFKqVc33mRluih11l16CS_ZQfhC-lElfv4KGiM/edit`

And this Open AI API key:
- `sk-6H234wdfUwiTfdbCT3Blf45ZHzsj4wrev`

Your `Confgs.gs` file should look like this:

```js
OPEN_AI_KEY = "sk-6H234wdfUwiTfdbCT3Blf45ZHzsj4wrev"
FIELDS_SHEET_ID = "1hPdQBb-7yDC9nzb4e8XAqPgvSThSLKQi0Cvj1VwGoZs"
OUTPUT_DOC_ID = "1W7erIcdFKqVc33mRgQAwl16CS_ZQfhC-lElXRlWKGiM"
```

## Using the tool
