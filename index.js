import { server, PORT } from "./server.js";

// server.listen(…
server.listen(PORT, () => {
    console.log(`Listing to port ${PORT}`)
})