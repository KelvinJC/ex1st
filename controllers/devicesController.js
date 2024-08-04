import {devices, users } from '../db/data.js'

let allDevices = devices;

export const getDevices = (req, res) => {
    const devices_ = allDevices.map((device) => {
        const {id, name, image} = device;
        return {id, name, image};
    })
    res
    .status(200)
    .json({success: true, data: devices_})
}

export const getSingleDevice = (req, res) => {
    const {id} = req.params;
    const device = allDevices.find((device) => device.id === Number(id))
    if (!device) {
        return res
        .status(404)
        .json({success: false, msg: `Device not found.`})
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
    allDevices = [...allDevices].sort((deviceA, deviceB) => (deviceA.id - deviceB.id));
    const lastDevice = allDevices.at(-1);
    const newDevice = {id: lastDevice.id + 1, name: name};
    allDevices.push(newDevice);
    res
    .status(201)
    .json({success: true, data: [newDevice]});
}

export const updateDevice = (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const device = allDevices.find((device) => device.id === Number(id))
    if (!device) {
        return res
        .status(404)
        .json({success: false, msg: 'Device not found.'})
    } else {
        device.name = name;
        res
        .status(200)
        .json({success: true, data: [device]})
    }
}

export const deleteDevice = (req, res) => {
    const { id } = req.params;
    const device = allDevices.find((device) => device.id === Number(id))
    if (!device) {
        return res
        .status(404)
        .json({success: false, msg: 'Device not found.'})
    } else {
        allDevices = allDevices.filter((device) => device.id !== Number(id))
        res
        .status(204) // with status(204) server returns no response, alternative is to use status(200)
        .json({success: true, data: []})
    }
}