import  express from "express";
import { Person } from "./Person.js";

const app = express()
const router = express.Router()
const port = +process.env.port || 5000

app.use(
    express.json(),
    router
)
router.get('^/$/class', (req,res)=>{
    res.json({
        status: res.statusCode,
        msg: "You're home"
    })
})
router.get('/person1', (req, res)=>{
    let person1 = new Person()
    person1.FirstName = 'Ghamzah'
    person1.lastName = 'Samuels'
    person1.age = 25
    person1.display()

    res.end('Please check the console')
})
router.get('/person2', (req,res)=>{
    let person2 = new Person()
    person2.firstName = 'life'
    person2.lastName = 'choices'
    person2.age = 33
    person2.display()
    res.end("check your console bro")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})