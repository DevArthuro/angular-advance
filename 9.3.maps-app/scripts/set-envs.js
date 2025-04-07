const { writeFileSync, mkdirSync, existsSync } = require("fs");
const { execSync } = require("child_process");
require("dotenv").config();

const mapBoxKey = process.env["MAPBOX_KEY"];

const targetPath = "./src/environments/environment.ts";
const targetPathDev = "./src/environments/environment.development.ts";

if (!mapBoxKey) {
  throw new Error("MAPBOX_KEY is not set");
}

const envFileContent = `
export const environment = {
  MAPBOX_KEY: "${mapBoxKey}"
};
`;

const environmentsPath = "./src/environments";

if (!existsSync(environmentsPath)) {
  execSync("ng g environments");
}

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);

console.log("Archivos de entorno generados correctamente.");
