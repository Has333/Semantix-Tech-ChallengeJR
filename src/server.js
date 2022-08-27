import { UpsertUsersToDatabase } from "./jobs/cron.js";
import { MongoDB } from "./databases/mongodb.js";
import App from "./app.js";
import "dotenv/config.js";

const PORT = process.env.PORT || 3000;

MongoDB.init();

App.listen(PORT, () => {
    console.log(
        `Server listening on port: ${PORT}`
    );
});