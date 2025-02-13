# Chrome Extension Template

A modern Chrome browser extension template built using Vite, React, TypeScript, and Tailwind CSS.

## Features

- **Vite** – Lightning-fast build tool for modern web projects.
- **React** – A declarative JavaScript library for building user interfaces.
- **TypeScript** – Statically typed JavaScript for improved developer experience.
- **Tailwind CSS** – Utility-first CSS framework for rapid UI development.
- **Manifest v3** – The latest version of Chrome Extensions API.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)

### Installation

Clone this repository and install dependencies:

```sh
git@github.com:kensonjohnson/chrome-extension-template.git
cd chrome-extension-template
npm install
```

### Development

To start development mode with HMR (Hot Module Replacement):

```sh
npm run dev 
```

Use this to quickly iterate over the UI of your extension.
Running the dev server doesn't run the background or content scripts, just React.

### Build for Production

To build and bundle extension testing:

```sh
npm run build
```

The output will be in the `dist/` directory.
See below for instructions on how to use this output to test your extension.

### Load the Extension in Chrome

You can test your extension by loading it into any Chrome based browser:

1. Open your browser and navigate to `chrome://extensions/`.
2. Enable "Developer mode" (toggle in the top right corner).
3. Click "Load unpacked" and select the `dist/` folder.

After these steps, your extension should show up in the list of extensions up top and in the extensions tab.
You can click on your extension in the extension list (top right, looks like a puzzle piece).

### Building for Production

To deploy your extension to the store, you will need to [zip your extension before uploading it](https://developer.chrome.com/docs/webstore/prepare).
To make this easy, a very simple [utility script](./zip.js) is included to zip up your extension.
Feel free to adjust this script to fit your needs, such as changing the name of the created zip file.
This script is wired up to the `release` npm script.

***To build for production and deployment simply run: `npm run release`***

## Project Structure

```
chrome-extension-template/
│── public/            # Static assets
│   ├── manifest.ts    # Chrome extension manifest
│   ├── icon16.png     # Icon asset
│   ├── icon48.png     # Icon asset
│   ├── icon128.png    # Icon asset
│── src/               # Source code
│   ├── App.tsx        # UI entry point
│   ├── components/    # React components
│   ├── index.css      # Tailwind declaration
│   ├── main.tsx       # React entry point
│── ...                # Config files
```

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).

---

Happy coding! 🚀


