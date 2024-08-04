import express from 'express';
import { checkSchema } from 'express-validator';
import {
    getDevices,
    getSingleDevice,
    createDevice,
    updateDevice,
    deleteDevice,
} from '../controllers/devicesController.js'
import { deviceSchema } from './schema/devices.js';

const router = express.Router();


router.get('/', getDevices);
router.get('/:id', getSingleDevice);

router.post('/', checkSchema(deviceSchema), createDevice);

router.put('/:id', updateDevice);
router.delete('/:id', deleteDevice);

export {router};