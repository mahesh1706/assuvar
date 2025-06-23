// postbuild.js
import { writeFile } from "fs";

writeFile("dist/_redirects", "/* /index.html 200", (err) => {
  if (err) throw err;
  console.log("_redirects file created successfully!");
});
