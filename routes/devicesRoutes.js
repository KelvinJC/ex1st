import express from 'express';
import {
    getDevices,
    getSingleDevice,
} from '../controllers/devicesController.js'

export const router = express.Router();


router.get('/', getDevices);
router.get('/:id', getSingleDevice);
// router.post('/', createDevice);
// router.put('/:id', updateDevice);
// router.delete('/:id', deleteDevice);
