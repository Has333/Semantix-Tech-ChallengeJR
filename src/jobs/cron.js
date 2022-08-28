import Automation from "../automation/upsert-users-to-db.js";
import cron from "node-cron";

function UpsertUsersToDatabase() {
    cron.schedule('0 */30 * * * *', async () => {
        console.log("Automation running");
        Automation.run();
        });
}

export { UpsertUsersToDatabase };