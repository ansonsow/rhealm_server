let Clothing = require('../models/clothing');

const getUserClothing = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    Clothing.find({userId:req.body.userId}).then(
        result=>{
            res.status(200).json(result)
        }
    ).catch(
        err=>{
            res.status(500).json(err)
        }
    )
}

const getClosetClothing = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    Clothing.find({closetId:{$in:req.body.closetId}}).then(
        result=>{
            res.status(200).json(result)
        }
    ).catch(
        err=>{
            res.status(500).json(err)
        }
    )
}

const saveClothing = (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let newClothing = new Clothing(req.body);
    newClothing.save().then(
        result=>{
            res.status(200).json(result);
        }
    ).catch(
        err=>{
            res.status(500).json(err)
        }
    )
}

const addToCloset = (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");

    Clothing.findOne({_id:req.body.clothingId}).then(
        result=>{
            // console.log(req.body.clothingId)
            // console.log(result)
            // res.status(200).json('wat')
            if(result.closetId == undefined){
                let closetArr = []
                closetArr.push(req.body.closetId);
                Clothing.updateOne({_id:req.body.clothingId}, 
                                   {$set: { closetId: req.body.closetId }},
                                   {upsert: true}).then(
                    result=>{
                        res.status(200).json(result)
                    }
                ).catch(
                    err=>{
                        res.status(500).json(err)
                    }
                )
            }else{
                // console.log("wat")
                let closetArr = result.closetId;
                closetArr.push(req.body.closetId)
                Clothing.updateOne({_id:req.body.clothingId},
                                   {closetId: closetArr}).then(
                                       result=>{
                                           res.status(200).json(result);
                                       }
                                   ).catch(
                                       err=>{
                                           res.status(500).json(err)
                                       }
                                   )
            }
        }
    )




    
}


// const addTo

const wat = (req,res) => {
    res.status(200).json('wat')
}

module.exports = { getClosetClothing, getUserClothing ,saveClothing, addToCloset,wat };
