const router = require("express").Router()


const bookD = require("../entities/books")

router.get("/", (req, res) => {
    bookD.bookDb.find({})
        .then((a) => {
            res.json(a)
        })
        .catch((error)=> {
            console.log("error", error)
        })
})

router.get("/:id", (req, res) => {
    const bookId = req.params.id;

    bookD.bookDb.findById(bookId)
        .then((book) => {
            if (!book) {
                return res.status(404).json({ error: "Book not found" });
            }
            res.json(book);
        })
        .catch((error) => {
            console.log("Error:", error);
            res.status(500).json({ error: "Internal server error" });
        });
});




router.delete("/:id", (req, res) => {

    const id = req.params.id
    bookD.bookDb.deleteOne({ _id: id })
        .then(() => res.json("Book deleted successfully"))
        .catch((err) => res.status(400).json("Error: " + err));


})




router.route('/:id').post(async (req, res) => {
    console.log(req.params.id);
  await  bookD.bookDb.findById(req.params.id)
      .then((a) => {
        a.author = req.body.author;
        a.title = req.body.title;
        a.description = req.body.description;


        console.log(a)
  
        a
          .save()
          .then(() => res.json('Activity updated!'))
          .catch((err) => res.status(400).json('Error: ' + err));
      })
      .catch((err) => res.status(400).json('Error: ' + err));
  });


router.post("/", (req, res) => {
    const author = req.body.author;
    const title = req.body.title;
    const description = req.body.description

    const detail = new bookD.bookDb({
        author,
        title,
        description
    })

    detail.save()
        .then((result) => {
            console.log(result);
            // res.send("Data inserted successfully");
            res.json(detail)
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Error inserting data");
        });



})

module.exports = router;