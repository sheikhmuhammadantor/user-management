const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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

        app.get('/all-user', async (req, res) => {
            const result = await userDB.find().toArray();
            res.send(result);
        })

        app.get('/update-user/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }

            const result = await userDB.findOne(query);
            res.send(result);
        })

        app.put('/update-user/:id', async (req, res) => {
            const id = req.params.id;
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateUser = req.body;
            const user = {
                $set: {
                    name: updateUser.name,
                    email: updateUser.email
                }
            }
            const result = await userDB.updateOne(filter, user, options)
            res.send(result);
        })

        app.delete('/all-user', async (req, res) => {
            const id = req.body.id;
            const query = { _id: new ObjectId(id) }
            const result = await userDB.deleteOne(query)
            res.send(result)
        })

        app.post('/add-user', async (req, res) => {
            const result = await userDB.insertOne(req.body);
            res.send(result);
        })

        // await client.db("admin").command({ ping: 1 });
        console.log("Pinged Your deployment.");
    } finally {
        console.log('Okay, 200');
    }
}
run().catch(console.dir);;

app.get('/', (req, res) => {
    console.log("Hello Server  !!");
    res.send("Hello My Server  !!");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})
