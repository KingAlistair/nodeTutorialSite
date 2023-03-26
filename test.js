import express from "express";
const app = express();


const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("Server is running on port: " + PORT);
});

app.use(express.json()); //Allows saving in json format.

//Get all songs
app.get("/songs", (req, res) => {
    res.send({"Songs:": songs});
});

//Get song by id
app.get("/songs/:id", (req, res) => {
    const songChosen = songs.find(song => song.id === Number(req.params.id));

    res.send({"Chosen song": songChosen});
});

//Save a new song
let currentId = 3;
app.post("/songs", (req, res) => {
    const newSong = req.body;
    currentId++;
    newSong.id = currentId;
    songs.push(newSong);
    res.send({"New song": newSong});
  });
  

//update song by id
app.put("/songs/:id", (req, res) => {
    const foundIndex = songs.findIndex(song => song.id === Number(req.params.id));
    if (foundIndex !== -1) {
      const foundSong = songs[foundIndex];
      songs[foundIndex] = {...foundSong, ...req.body, id: foundSong.id};
      res.send({"Song updated": songs[foundIndex]});
    } else {
      res.status(404).send({ "Error": "Song was not found with id " + req.params.id });
    }
  });

  
//delete
app.delete("/songs/:id", (req, res) => {
    const index = songs.findIndex(song => song.id === Number(req.params.id));
    if (index !== -1) {
      songs.splice(index, 1);
      res.json({ message: "Song was deleted" });
    } else {
      res.send({ "Error": "Song was not found with id " + req.params.id });
    }
  });


//Database
const songs = [{
    "id": 1,
    "Band": "Beatles",
    "Album": "Abbey Road",
    "Song": "Come Together"
  }, {
    "id": 2,
    "Band": "A-ha",
    "Album": "Hunting High and Low",
    "Song": "Take On Me"
  }, {
    "id": 3,
    "Band": "Tenacious D",
    "Album": "The Pick of Destiny",
    "Song": "Kickapoo"
  }];