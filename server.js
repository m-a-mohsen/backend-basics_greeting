import { createServer } from "node:http";

// export const server = …

export const PORT = 8000;

export const server = createServer((req,res) => {
    res.statusCode = 200;
    res.end('Hello, Mahmoud Basha')
})

// server.listen(PORT, () => {
//     console.log(`Listing to port ${PORT}`)
// })