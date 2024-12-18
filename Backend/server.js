import {app} from './app.js'
import connectDB from './db/db_connect.js'

connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`App is running on PORT ${process.env.PORT}`)
    })
})
.catch((error)=>{
 console.log("Mongo db connection Failed!!",error) 
})