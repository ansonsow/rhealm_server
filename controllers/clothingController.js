let Clothing = require('../models/clothing');
let jwt = require('jsonwebtoken')


const getUserClothing = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.params.userId)
    Clothing.find({userId:req.params.userId}).then(
        result=>{
            console.log(result)
            const data={
                "data":result
            }
            res.status(200).json(data)
        }
    ).catch(
        err=>{
            res.status(500).json(err)
        }
    )
}

const getClosetClothing = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    Clothing.find({closetId:{$in:req.params.closetId}}).then(
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

const removeFromCloset = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    let newClosets;

    Clothing.findOne({_id:req.body.clothingId}).then(
        result=>{
            newClosets = result.closetId;
            for (let index = 0; index < newClosets.length; index++) {
                const element = newClosets[index];
                if(element == req.body.closetId){
                    newClosets.splice(index,1)
                }
            }

            Clothing.updateOne({_id:req.body.clothingId},
                               {closetId: newClosets}).then(
                                   result=>{
                                   }
                               ).catch(
                                   err=>{
                                       res.status(500).json(err)
                                   }
                               )

            res.status(200).json(result);
            
        }
    ).catch(
        err=>{
            res.status(500).json(err)
        }
    )

    

    // Clothing.updateOne({_id:req.body.clothingId},
    //                    {$pull})
    
}

const removeClothing = (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    Clothing.removeOne({_id:req.body.clothingId}).then(
        result=>{
            res.status(200).json('deleted')
        }
    ).catch(
        err=>{
            res.status(500).json(err)
        }
    )
}


// const addTo
const editClothing = (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Clothing.updateOne({_id:req.body.clothingId},
                       {photo:req.body.photo,
                        type:req.body.type,
                        name: req.body.name,
                        colour: req.body.colour,
                        texture: req.body.texture
                    }).then(
                            response=>{
                                res.status(200).json('updated')
                            }
                        ).catch(
                            err=>{
                                res.status(500).json('failed')
                            }
                        )
}

module.exports = { getClosetClothing, getUserClothing ,saveClothing, addToCloset, removeFromCloset, removeClothing, editClothing  };
