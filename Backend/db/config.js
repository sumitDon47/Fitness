const mongoose = require('mongoose')
mongoose.connect("mongodb://127.0.0.1:27017/FitGenius").then(() => {
    console.log("Database successfully connected ")
})
// mongoose.connect("mongodb://localhost:27017/FitGenius")