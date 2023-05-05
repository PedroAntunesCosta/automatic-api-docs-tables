# Automatic API docs tables

When documenting APIs or forms, most of the information in the fields' descriptions can be derived from the field names and types. This enables tech writers to use AI to generate this content and later review the text, filling in the gaps, which makes the whole process faster.

With this automation, you can enter field names and types to the spreadsheet and automatically create API fields tables with AI generated descriptions in Markdown or HTML. This works for multiple tables at a time if you are working with complex data structures.

See below how to [set up](#setting-up) and [use this tool](#using-the-tool).

> You don't need to know how to code, but you must have an Open AI "pay as you go" account. More on pricing below.

## Setting up

There are two steps to get this tool up and running. First you must [Get an Open AI API key](#get-an-open-ai-api-key) and then [set up the Google Apps Script](#set-up-google-apps-script).

### Get an Open AI API key

Open AI's "pay as you go" account model allows you to pay by request, when working with a range of APIs, including Dall-e, ChatGPT and GPT-4 text completion.

This tool works with multiple tables at a time, but calls the ChatGPT API once for each table. I recommend you check [Open AI API pricing](https://openai.com/pricing), which may vary if you tweak the parameters. However, with this tool's native settings, I have generated dozens of tables for under $ 0.50.



### Set up Google Apps Script

To use this tool, first you must:
1. Create a new spreadsheet in google drive.
2. Go to `Extensions` > `Apps Script`.
3. This will open a new app script project in a new tab. Create the files there and copy my code.
4. Run the `trigger.gs` function in order for the daily trigger to be created.

> Learn more about [Google Apps script](https://www.google.com/script/start/)

## Using the tool
