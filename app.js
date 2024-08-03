import express from 'express';
import { router as deviceRouter } from './routes/devicesRoutes.js' 

const app = express();


app.use('/api/devices', deviceRouter)


app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})