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

export const createDevice = (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res
        .status(400)
        .json({success: false, msg: 'Name value is required.'});
    }
    const allDevices = [...devices].sort((deviceA, deviceB) => (deviceA.id - deviceB.id));
    const lastDevice = allDevices.at(-1);
    const newDevice = {id: lastDevice.id + 1, name: name};
    devices.push(newDevice);
    res
    .status(201)
    .json({success: true, data: [newDevice]});
}