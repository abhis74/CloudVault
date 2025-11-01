import User from "./models/userModel.js"

export default async function checkAuth(req, res, next) {
    console.log(req.signedCookies)
    const { token } = req.signedCookies
    if (!token) {
        return res.status(401).json({ message: "User Not Login" })
    }
    const JSONpayload = Buffer.from(token,"base64url").toString()
    console.log(JSONpayload,"JSONpayload")
    //Our OWN JWT VERIFICATION CODE created
    const expriedtime = JSON.parse(JSONpayload).expriationTime
    const tokenValue = JSON.parse(JSONpayload).id
    const currentTime = Math.round(Date.now()/1000)

    if(currentTime >= expriedtime){
        res.clearCookie("token")
        return res.status(401).json({ message: "User Session Expired" })
    }
    const usersdata = await User.findOne({_id: tokenValue}).lean()
    if (!usersdata) {
        return res.status(401).json({ message: "User Not Login" })
    }
    req.user = usersdata

    next()
}