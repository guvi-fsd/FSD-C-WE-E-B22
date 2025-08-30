## What're the essentials of a Node.js project?

- Package: shareable unit of code with metadata. It usually lives in registry (eg: npm registry). A package has name, version (Semantic Version) and dependencies.

- package.json (the manifest): source of truth for the project's identity and dependencies.

- [Semantic Version](https://semver.org/)

- node_modules: installed dependencies.

- package-lock.json: the file records the precise versions that were installed for the entire dependency tree

- ES Modules vs CommonJS
export default Home;
import Home from "./Home"
OR
export { Home };
import { Home } from "./Home"


CommonJS:
module.exports = Home;
require("./Home")

