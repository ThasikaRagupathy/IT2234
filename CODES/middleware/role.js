const jwt = require("jsonwebtoken")

function roleCheck(roles) {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization
            if (!token) {
                return res.status(403).send("Security Token Not Available!")
            }
            jwt.verify(token.split(" ")[1], process.env.SECRET_KEY, async (err, decoded) => {
                //console.log(decoded)
                if (!decoded) {
                    return res.status(401).send("Invaild Token !")
                }
                //verify the user role
                const userRole = decoded.ROLE
                if (!userRole || !roles.includes(userRole) || err) {
                    return res.status(403).send("Access denied !")
                }
                next()
            })

        } catch (error) {
            console.error(error);
            res.status(500).send("Server Error !")
        }
    }
}

module.exports = roleCheck