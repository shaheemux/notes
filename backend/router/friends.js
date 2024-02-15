import express from "express";
import { getFriends , getFriend , addFriend, deleteFriend , updateFriend} from '../models/database.js';

const router = express.Router();


router
    .route('/')
        .get(async(req,res)=>{
            res.send(await getFriends())
        })

        .post(async (req, res)=>{
            const [name,age] = req.body
            const post = await addFriends(name, age)
            req.send(await getFriend())

        })


router.get('/:id', async(req,res)=> {
    res.send(await getFriend(+req.params.id))

})

router.delete('/:id', async (req, res)=>{
    await deleteFriend(+req.params.id);
    res.send(await getFriends())
})

router.patch('/:id', async (req, res)=>{
    
})


export default router