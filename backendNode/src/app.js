import express from 'express'
import cors from 'cors'
import dbAutenticathe from './utils/dbAuthentication.js'

const app = express()

app.set('PORT', process.env.PORT || 9000)

app.use(cors())
app.use(express.json())

app.get('/', (req,res)=> {
   res.send("hola desde el get de app.js");
})

import blogs from './routes/blogRoute.js'

app.use('/task', blogs)

dbAutenticathe()

app.listen(app.get('PORT'), ()=> {
 console.log("CONECTADO A http://localhost:", app.get('PORT'));
});

export default app;
