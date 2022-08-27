import cron from "node-cron";

function UpsertUsersToDatabase() {
    cron.schedule('* * * * * *', async () => {
        
        });
}

export { UpsertUsersToDatabase };