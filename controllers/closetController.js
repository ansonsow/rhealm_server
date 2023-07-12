let Closet = require('../models/closet');

// get all the closet from one user.
const getClosets = async (req, res) => {
    // res.header("Access-Control-Allow-Origin", "*");
    // console.log(req.body.userId);
    Closet.find({ userId: req.params.userId }).then(
        result => {

            res.status(200).json(result)
        }
    ).catch(
        err => {
            res.status(500).json(err)
        }
    )



}

const saveCloset = async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    let newCloset = new Closet(req.body)
    newCloset.save().then(
        result => {
            res.status(200).json(result)
        }
    ).catch(
        err => {
            res.status(500).json(err)
        }
    )
    // res.status(200).json()
}


const removeCloset = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Closet.deleteOne({ _id: req.body.closetId }).then(
        req.status(200).json('deleted')
    ).catch(
        err => {
            req.status(500).json(err)
        }
    )
}

const updateCloset = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    Closet.updateOne({ _id: req.body.closetId },
        { name: req.body.name }).then(
            res => {
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
}

module.exports = { getClosets, saveCloset, removeCloset, updateCloset };
