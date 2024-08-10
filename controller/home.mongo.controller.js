const User = require('../models/user.model');
const ApiResponse = require('../utils/ApiResponse');


exports.addUser = (req, res) => {
    try {
        const newUser = new User(req.body);
        newUser.save()
        .then((savedUser)=>{
            console.log('saved user',savedUser);
            res.status(201).json(new ApiResponse(201, savedUser, "New User Added Successfully"));
        })
        .catch((err)=>{
            console.log('User creation error: ',err);
            res.status(500).json({messege: "Failed to create new user"})
        })
    } catch (error) {
        console.log("ERROR in add user",error);
        res.send(500).json({messege: "Internal server error"})
    }
}

exports.getUser = (req, res) => {
    try {
        User.find()
        .then((users)=>{
            res.status(200).json(new ApiResponse(200, users))
        })
        .catch((err)=>{
            console.log('Unable to fetch data', err);
            res.status(400).json({messege: 'Unable to fetch data'})
        })
    } catch (error) {
        console.log('Failed to get users',error);
        res.status(500).json({messege: 'Internal Server Error'})
    }
}

//User _id of Mongo
exports.getUserById = (req, res) => {
    try {
        const id = req.params.id;
        User.findById(id)
        .then((user)=>{
            if(!user){
                res.status(400).json({messege: 'user not found'})
                return;
            }
            res.status(200).json(new ApiResponse(200, user, "User Found Successfully"))
        })
        .catch((err)=>{
            console.log('Unable to fetch data', err);
            res.status(400).json({messege: 'Unable to fetch data'})
        })
    } catch (error) {
        console.log('Failed to get users',error);
        res.status(500).json({messege: 'Internal Server Error'})
    }
}

exports.deleteUser = (req, res) => {
    try {
        const id = req.params.id;

        User.findByIdAndDelete(id)
        .then((user)=>{
            if(!user){
                res.status(400).json({messege: 'user not found'})
                return;
            }
            res.status(200).json(new ApiResponse(200,user, "User Removed Successfully"))
        })
        .catch((err)=>{
            console.log(err);
            res.status(400).json({messege: 'unable to delete'})
        })
    } catch (error) {
        console.log('delete error ',error);
        res.status(500).json({messege: 'Internal Server Error'})
    }
}

exports.updateUser = (req, res) => {
    try {
        const id = req.params.id
        const reqBody = req.body
        User.findByIdAndUpdate(id, reqBody)
        .then((user)=>{
            console.log('user updated ', user);
            res.status(200).json(new ApiResponse(200,user, "User Updated Successfully"));
        })
        .catch((err)=>{
            console.log('update failed', err);
            res.status(400).json({messege: 'Failed to update user'})
        })
    } catch (error) {
        console.log('update error', error);
        res.status(500).json({messege: 'Internal Server Error'})
    }


}