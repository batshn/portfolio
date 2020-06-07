import express from 'express';
import bodyParser from 'body-parser';
import { MongoClient } from 'mongodb';

const app = express();

app.use(bodyParser.json());

const dbOperation = async (operations, res) => {
    try {

    const client = await MongoClient.connect('mongodb://localhost:27017',{useNewUrlParser: true});
    const db = client.db('Portfolio');

    await operations(db);    

    client.close();

    } catch(error) {
            res.status(500).json({message: ' Error connection to db', error});
    }
}


app.get('/api/menus/:name', async (req, res) =>{
    
    dbOperation( async (db) => {
        const menu = req.params.name;
        const menuInfo = await db.collection('Menus').findOne({name: menu});
        res.status(200).json(menuInfo);
    }, res);

})

app.post('/api/menus/:name/upvote', async (req, res) =>{
    dbOperation( async (db) => {
        const menu = req.params.name;
        const menuInfo = await db.collection('Menus').findOne({name: menu});
        await db.collection('Menus').updateOne({name: menu}, {
            '$set' : {
                default: menuInfo.default + 1,
            },
        });

        const updatedMenuInfo = await db.collection('Menus').findOne({name : menu});
        res.status(200).json(updatedMenuInfo);
    }, res);
})


app.get('/api/menus', async (req, res) => {
    dbOperation( async(db)=>{
        const menuList = await db.collection('Menus').find();
       res.status(200).json(menuList);
        //res.status(200);
    }, res)
})

/*
app.post('/api/articles/:name/add-comment', (req, res) => {
    const {username, text} = req.body;

    const articleName = req.params.name;

    articleInfo[articleName].comments.push({username, text});

    res.status(200).send(articleInfo[articleName]);


})

/*
app.get('/hello', (req, res) => res.send('Helloo Server !'));
app.post('/hello', (req, res) => res.send(`Hello ${req.body.name}!`));
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}!`));
*/

app.listen(8000, () => console.log('Listening on port 8000'));