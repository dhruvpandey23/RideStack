import {app} from './app.js'

app.listen(process.env.PORT||3000,()=>{
    console.log(`App is running on PORT ${process.env.PORT}`)
})