import mongoose from "mongoose";
import "dotenv/config.js";

const DB = process.env.DB;

class MongoDB {
    static init() {
      mongoose.connect(`${DB}`,
      {useNewUrlParser: true,
      useUnifiedTopology: true,})
      .then(() => console.log("Application connected to database"))
      .catch((err) => console.log({ message: err.message }));
    }
  }
  
  export { MongoDB }