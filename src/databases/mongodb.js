import mongoose from "mongoose";
import "dotenv/config.js";

const DBPASSWORD = process.env.DBPASSWORD;
const DB = process.env.DB;

class MongoDB {
    static init() {
      mongoose.connect(`mongodb+srv://mongodbw:${DBPASSWORD}@cluster0.xybv5.mongodb.net/${DB}?retryWrites=true&w=majority`,
      {useNewUrlParser: true,
      useUnifiedTopology: true,})
      .then(() => console.log(`Application connected to ${DB} database`))
      .catch((err) => console.log(err));
    }
  }
  
  export { MongoDB }