const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "notes"), (err) => {
//   if (err) throw err;

//   console.log("Папка создана");
// });

// fs.writeFile(
//   path.join(__dirname, "notes", "mynote.txt"),
//   "Hello world!",
//   (err) => {
//     if (err) throw err;

//     console.log("Файл создан");

//     fs.appendFile(
//       path.join(__dirname, "notes", "mynote.txt"),
//       `\n  Привет!!`,
//       (err) => {
//         if (err) throw err;

//         console.log("Файл изменен");

//         fs.readFile(
//           path.join(__dirname, "notes", "mynote.txt"),
//           "utf-8",
//           (err, data) => {
//             if (err) throw err;

//             // console.log(`Файл содержит:\n`, Buffer.from(data).toString());
//             console.log(`Файл содержит:\n`, data);
//           }
//         );
//       }
//     );
//   }
// );

fs.rename(
  path.join(__dirname, "notes", "mynote.txt"),
  path.join(__dirname, "notes", "note.txt"),
  (err) => {
    console.log("Файл переименован");
  }
);
