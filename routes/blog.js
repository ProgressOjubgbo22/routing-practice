const express = require("express")
const router = express.Router();


let posts = [
    {id: 1, title: "maths", content: "equations"},
    {id: 2, title: "phy", content: "motion"},
    {id: 3, title: "chem", content: "matter"}
]

// getting all post
router.get("/", (req, res) => {
    res.json(posts)
})

// getting single post
router.get("/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    res.json(post)
})

//posting post
router.post("/", (req, res) => {
    const newpost = {
        id: posts.length + 1,
        title: req.body.title,
        content: req.body.content
    }

    posts.push(newpost)
    res.json(newpost)
})

// updating post
router.put("/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id)
    post.title = req.body.title
    post.content = req.body.content

    res.json(post)
})

//delete post
router.delete("/:id", (req, res) => {
    posts = posts.filter(p => p.id != req.params.id)
    res.json("deleleted")
})
module.exports = router;
