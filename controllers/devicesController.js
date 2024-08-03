import {devices, users } from '../db/data.js'


export const getDevices = (req, res) => {
    const allDevices = devices.map((device) => {
        const {id, name, image} = device;
        return {id, name, image};
    })
    res
    .status(200)
    .json({success: true, data: allDevices})
}

export const getSingleDevice = (req, res) => {
    const {id} = req.params;
    const device = devices.find((device) => device.id === Number(id))
    if (!device) {
        return res
        .status(404)
        .json({success: false, msg: `Device with id ${id} not found`})
    } else {
        return res
        .status(200)
        .json({success: true, data: [device]})
    }
}