//server and database connection

require("dotenv").config();
import connectDB from "./src/config/db";
import app from "./app";

class Server {
    private app;
    private readonly port: number | string;
    private readonly url: string;

    constructor() {
        this.app = app;
        this.port = process.env.PORT || 3001;
        this.url = process.env.DATABASE_URL ?? "";
    }

    public async start() {
        try {
            await connectDB.connect(this.url);
            console.log("Database Connected");
            this.app.listen(this.port, () => {
                console.log(`Server listening on ${this.port}...`);
            });
        } catch {
            console.log("Error connecting to DB");
            process.exit(1);
        }
    }
}

const server = new Server();
void server.start();
