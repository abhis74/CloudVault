
export default function validateID(req, res, next, id) {
    console.log("id param called")
    console.log({ id }, "req.params.id")
    if (id.length !== 36) {
        return res.status(400).json({ message: "Invalid ID" })
    }
    next()
}