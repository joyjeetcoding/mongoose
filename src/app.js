const mongoose = require('mongoose');

// Connection creation and creating a new db
mongoose.connect("mongodb://localhost:27017/ttyl").then( () => console.log('Connection is Successful'))
.catch((err) => console.log(err));


const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ctype: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now(),
    }
})


// collection creation
// here "Playlist" is a class
const Playlist = new mongoose.model("Playlist", playlistSchema);

// create document or insert

const createDocument = async () => {
    try{
        const javaPlaylist = new Playlist({
            name: "Javascript",
            ctype: "frontend",
            videos: 80,
            author: "James Gunn",
            active: true,
        })

        const reactPlaylist = new Playlist({
            name: "Node JS",
            ctype: "Backend",
            videos: 80,
            author: "James Gunn",
            active: true,
        })
        
        const mongoosePlaylist = new Playlist({
            name: "Node JS",
            ctype: "Database",
            videos: 80,
            author: "James Gunn",
            active: true,
        })
        
        const result = await Playlist.insertMany([javaPlaylist, mongoosePlaylist, reactPlaylist]);
        
        console.log(result);
    }catch(err) {
        console.log(err);
    }
    
}

createDocument();