const mongoose = require("mongoose");

const dbconfig = () => {
    const uri = "mongodb+srv://anonymous:saimbastard@cluster0.xlel1gr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

  mongoose
    .connect(process.env.MONGODB)
    .then((conn) =>
      console.log(
        `Database Connected Successfully with ${conn.connection.host}`
      )
    )
    .catch((err) => console.error(`Database Connection failed ... ${err.message}`));
    console.log(process.env.MONGODB)
};

module.exports = dbconfig;
