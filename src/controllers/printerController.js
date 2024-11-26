const Printer = require('../models/printer');

const printerController = {
    getPrinters: async (req, res) => {
        try {
            const users = await Printer.find();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    getPrinter: async (req, res) => {
        try {
            const user = await Printer.findById(req.params.id)
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    createPrinter: async (req, res) => {
        try {
            const newUser = new Printer(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err); //HTTP REQUEST CODE
        }
    },

    updatePrinter: async (req, res) => {
        try {
            const user = await Printer.findById(req.params.id);
            await user.updateOne({$set: req.body});
            const updatedUser = await Printer.findById(req.params.id);
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deletePrinter: async (req, res) => {
        try {
            await Printer.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted user successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = printerController;