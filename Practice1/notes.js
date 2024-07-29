const fs = require("fs");
const addNotes = function (title, body) {
  const notes = loadNotes();

  const checkDuplicateNote= notes.find(note=> note.title === title)
  if(checkDuplicateNote){

  } else {
    
  }
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJson = JSON.stringify(dataBuffer);
    return JSON.parse(dataJson);
  } catch (e) {
    return [];
  }
};
module.exports = {
  addNotes,
};
