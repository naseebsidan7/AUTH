
import express from 'express';
import dotenv from 'dotenv'
dotenv.config()
import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js'
const port = process.env.PORT || 5000;
import userRoutes from './routes/userRoutes.js'
import path from 'path';

connectDB()


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cookieParser())
app.use('/api/users',userRoutes)

if(process.env.NODE_ENV === 'production'){
     const __dirname = path.resolve()
     console.log(__dirname+"dirname")
     app.use(express.static(path.join(__dirname,'frontend/dist')));

     app.get('*',(req, res)=> res.sendFile(path.resolve(__dirname,'frontend','dist','index.html')) );
}else{
     app.get('/',( req, res )=>res.send('Server is ready'))
}


app.use(notFound)
app.use(errorHandler)


app.listen(port,()=>{
     console.log(`Server started on port ${port}`)
})




// - **POST  /api/users** - Register a user
// - **POST  /api/users/auth** - auth a user and get token 
// - **POST  /api/users/logout** - Logout user and clear cookie
// - **GET  /api/users/profile** - Get user profile
// - **PUT  /api/users/profile** - update profile 