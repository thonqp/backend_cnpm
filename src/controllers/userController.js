const User = require('../models/user');

const userController = {
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    getUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id)
            res.status(200).json(user);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },

    createUser: async (req, res) => {
        try {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        } catch (err) {
            res.status(500).json(err); //HTTP REQUEST CODE
        }
    },

    updateUser: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            await user.updateOne({$set: req.body});
            const updatedUser = await User.findById(req.params.id);
            res.status(200).json(updatedUser);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted user successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = userController;