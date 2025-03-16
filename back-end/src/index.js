import express from 'express';
import dotenv from 'dotenv'
import connect from './Config/DbConfig.js';
import apirouter from './Routers/ApiRouter.js';
import cors from 'cors'
dotenv.config();
const app = express();
let originUrl
const environment=process.env.NODE_ENV 
console.log(environment)

if(environment==="development"){
originUrl="http://localhost:5173"
} else
{
originUrl="https://keith-neon.vercel.app"
}
    
console.log('o',originUrl)

app.use(cors({
    origin: originUrl,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

app.use(express.json({ limit:'500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));



app.use('/api',apirouter);

app.get('/', (req, res) => {
    return res.status(201).json({ message: 'hello' });
});


const port = process.env.PORT || 3000; // Use PORT from .env or default to 5000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  connect();
});
