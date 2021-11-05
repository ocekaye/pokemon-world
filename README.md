# POKEMON WORD
Collection of pokemon data. includes types, abilities, etc.

## Live Preview
<a href="https://pokemon-world-theta.vercel.app/">See here</a>

## Requirement
- Node `v14.16.0` or higer
- it's better to use VsCode to make development easier
## Get Started
- clone the repo `git clone https://github.com/ocekaye/pokemon-world.git`
- install dependencies `npm install` or `yarn`
## Usage
- run development `npm run dev` or `yarn dev`
- build the project `npm run build` or `yarn build`
- start production `npm run start` or `yarn start`
- run testing `npm run test` or `yarn test`
## Additional VsCode Extensions
- <a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">Tailwind CSS IntelliSense</a>
- <a href="https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components">vscode-styled-components</a>
### VsCode settings
```JSON
...,
"tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw=\"([^\"]*)", // <div tw="..." />
    "tw={\"([^\"}]*)", // <div tw={"..."} />
    "tw\\.\\w+`([^`]*)", // tw.xxx`...`
    "tw\\(.*?\\)`([^`]*)" // tw(Component)`...`
  ],
"tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
```
