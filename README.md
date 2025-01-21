# quotes-generator

## A random quotes generator using Quotes API

A simple app that fetches random quotes from the Quotes API and allows users to copy or share them. Built using HTML, CSS, and JavaScript.

### Features:

- Fetches random quotes from a free Quotes API.
- Copy quotes using the Clipboard API.
- Share quotes via WhatsApp using the Navigator API.
- Responsive UI with clean design.

### Installation and Usage:

**Clone the repository:**

```bash
git clone https://github.com/devendran-m/quotes-generator.git
```

**Go to the project folder:**

```bash
cd quotes-generator
```

**Install dependencies:**

```
npm install
```

**Run the proxy server:**

```
cd quote-generator/src/server

node proxy.js
```
**Open the `index.html` file in a browser:**


### Project Structure:

`index.html`: Main UI for the app.
`proxy.js`: Proxy server to handle CORS issues.
`copyQuote.js`: Handles copying quotes to the clipboard.
`shareQuote.js`: Handles sharing quotes via WhatsApp.
`index.js`: Core functionality for fetching and displaying quotes.

### API Credit:

Quotes provided by [Quotes API](https://github.com/theriturajps/Quotes-API).

**License:** MIT License

**Contributing:** Feel free to raise issues or submit pull requests to improve the app.