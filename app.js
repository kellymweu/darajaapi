const express = require("express")
const app = express()
const http = require("http")
const bodyParser = require("body-parser")
const moment = require("moment")

const port = 3000
const hostname = "localhost"
app.use(bodyParser.json())
const server = http.createServer(app)

app.get("/", (req, res) => {
    res.send("Mpesa api is working");
    var timeStamp = moment().format("YYYYMMDDHHmm");
    console.log(timeStamp)
})

app.get("/access_token", (req, res) => {
    getAcessToken()
        .then((accessToken) => {
            res.send("Your access token is " + accessToken)
        })
        .catch(console.log)
})

app.get("/stkpush", (req, res) => {
    getAccessToken()
        .then((accessToken) => {
            const url = "",
          auth = "Bearer" + accessToken;
        var timeStamp = moment().format("YYYYMMDDHHmmss")
        const password = new Buffer.from(
            "174379" +
             "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" +
             timeStamp
        ).toString("base64")

        request(
            {
                url: url,
                method: "POST",
                headers: {
                    Authorization: auth,
                },
                json: {
                    BusinessShortCode: "",
                    
                }
            }
        )
        })
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})