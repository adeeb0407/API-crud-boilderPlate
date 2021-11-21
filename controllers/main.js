import mongoose from 'mongoose';
import RestModel from '../model/mainModel.js'

export const fetch = async (req, res) => {
    try {
        const fetchData = await RestModel.find() //.limit(how many data you want)
        // const print = fetchData.map((dataItem) => dataItem._id);
        // const print = fetchData.filter((dataItem) => dataItem.title === 'Adseeb');
        res.status(200).json(fetchData)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const addData = async (req, res) => {
    
    console.log(req.body)
    const newData = new RestModel({
        title : req.body.title,
        description : req.body.description,
    });
    try {
      const createdData =  await newData.save();
      console.log(`Created Data`)
         res.json(createdData)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const fetchWithId = async (req, res) => {
    try {
        const dataWithId = await RestModel.findById(req.params.mainId)
        res.json(dataWithId)
    } catch (error) {
        res.status(404).json( {message : error.message} )
    }
}

export const deleteData = async (req, res) => {
    try {
        const deleteData =  await RestModel.deleteOne({_id: req.params.mainId})
        console.log(`deleted Data`)
        res.json(deleteData)
    } catch (error) {
        res.status(404).json( {message : error.message} ) 
    }
}

export const updateData = async(req, res) => {
    try{
        const id = req.params.mainId
        const {title, description, updatedAt} = req.body;
        const updatedData = {title, description, updatedAt, _id : id}
        
        await RestModel.findByIdAndUpdate(id, updatedData, {new : true})
        res.json(updatedData)

    }catch(error){
        res.status(404).json( {message : error.message} ) 
    }
}