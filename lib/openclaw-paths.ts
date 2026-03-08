import os from "os";
import path from "path";

export const OPENCLAW_HOME = process.env.OPENCLAW_HOME || path.join(os.homedir(), ".openclaw");
export const OPENCLAW_CONFIG_PATH = path.join(OPENCLAW_HOME, "openclaw.json");
export const OPENCLAW_AGENTS_DIR = path.join(OPENCLAW_HOME, "agents");
export const OPENCLAW_PIXEL_OFFICE_DIR = path.join(OPENCLAW_HOME, "pixel-office");

export function getOpenclawPackageCandidates(version = process.version): string[] {
  const home = os.homedir();
  return [
    path.join(home, ".nvm", "versions", "node", version, "lib", "node_modules", "openclaw"),
    path.join(home, "AppData", "Roaming", "npm", "node_modules", "openclaw"),
    "/usr/local/lib/node_modules/openclaw",
    "/usr/lib/node_modules/openclaw",
  ];
}
