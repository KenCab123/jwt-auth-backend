const express = require("express");

const {getAllStatuses, getUserStatuses, createStatus, deleteStatus} = require('../queries/status')

const status = express.Router({mergeParams: true});

status.get("/", async (req,res) => {
    const allStatuses = await getAllStatuses()

    if(allStatuses[0]) {
        res.status(200).json({allStatuses});
    } else {
        res.status(500).json({ error: 'server error'})
    }
})

// status.get("/:id", async (req,res) => {
//     const {id} = req.params;

//     const userStatuses = await getUserStatuses(id)

//     if(userStatuses[0]) {
//         res.status(200).json({userStatuses});
//     } else {
//         res.status(500).json({ error: 'server error'})
//     }
// })

status.post("/:user_id/:quiz_id", async (req,res) => {
    const { user_id, quiz_id } = req.params;
    try {
        const newStatus = await createStatus(user_id, quiz_id);
        res.json(newStatus)
    } catch (error) {
        res.status(400).json({ error })
    }
})

status.delete("/:user_id/:quiz_id", async (req,res) => {
    const { user_id, quiz_id } = req.params;
  const deletedStatus = await deleteStatus(user_id, quiz_id);
  if (deletedStatus.id) {
    res.status(200).json(deletedStatus);
  } else {
    res.status(404).json("Status not found");
  }
})


module.exports = status