const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4232;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nw7sq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

app.use(cors());
app.use(express.json());

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

async function run() {
    try {
        await client.connect();
        const userDB = client.db('usersData').collection('users');

        app.post('/add-user', async (req, res) => {
            const result = await userDB.insertOne(req.body);
            res.send(result);
        })

        

        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged Your deployment.");
    } catch (error) {
        console.dir(error);
    }
}
run();

app.get('/', (req, res) => {
    console.log("Hello Server  !!");
    res.send("Hello My Server  !!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
