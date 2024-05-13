import * as grpc from "@grpc/grpc-js"
import EarthquakeModel from "../models/earthquake.model.js"

export const CreateEarthquake = async (call, callback) => {
  try {
    const earthquake = call.request

    const createdResult = await EarthquakeModel.create(earthquake)
    if (!createdResult) return callback({ code: grpc.status.INTERNAL, message: "FAILED_CREATE_DATA" })

    callback(null, { status: "DATA_CREATED_SUCCESS" })
  } catch (err) {
    callback(err, null)
  }
}

export const UpdateEarthquake = async (call, callback) => {
  try {
    const earthquake = call.request

    const updatedResult = await EarthquakeModel.findByIdAndUpdate({ _id: earthquake._id }, { $set: earthquake })

    if (!updatedResult) 
      return callback({ code: grpc.status.INTERNAL, message: "FAILED_UPDATE_DATA" });

    callback(null, { status: "DATA_UPDATED_SUCCESS" })
  } catch (err) {
    callback(err, null)
  }
}

export const GetEarthquake = async (call, callback) => {
  try {
    const id = call.request.id
    const earthquake = await EarthquakeModel.findById(id)
    if (!earthquake) return callback({ code: grpc.status.NOT_FOUND, message: "DATA_NOT_FOUND" })

    callback(null, earthquake)
  } catch (err) {
    callback(err, null)
  }
}

export const GetAllEarthquake = async (call, callback) => {
  try {
    const earthquakes = await EarthquakeModel.find()
    if (!earthquakes) return callback({ code: grpc.status.INTERNAL, message: "FAILED_GET_DATA" })
    
    callback(null, { earthquakes })
  } catch (err) {
    callback(err, null)
  }
}

export const DeleteEarthquake = async (call, callback) => {
	try {
		const id = call.request.id;

		const deletedResult = await EarthquakeModel.findByIdAndDelete({ _id: id });

		if (!deletedResult?.$isDeleted) return callback({ code: grpc.status.INTERNAL, message: "FAILED_DELETE_DATA" });

		callback(null, { message: "SUCCESS_DELETE_DATA" });
	} catch (error) {
		callback(error, null);
	}
};