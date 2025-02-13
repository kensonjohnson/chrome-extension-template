import { existsSync, mkdirSync } from "fs";
import { zip } from "zip-a-folder";

try {
  if (!existsSync("release")) {
    mkdirSync("release");
  }
  await zip("dist", "release/extension.zip");
} catch (error) {
  console.error(error);
}
