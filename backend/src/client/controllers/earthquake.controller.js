import path from "path"
import express from "express"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

import { fileURLToPath } from 'url'
import { dirname } from 'path'

const currentFileUrl = import.meta.url
const currentFilePath = fileURLToPath(currentFileUrl)
const currentDir = dirname(currentFilePath)

const protoPath = path.join(currentDir, '..', '..', 'proto', 'earthquake.proto')

const earthquakeProto = protoLoader.loadSync(protoPath)
const { earthquakePackage } = grpc.loadPackageDefinition(earthquakeProto)

const earthquakeClient = new earthquakePackage.EarthquakeService(
  process.env.EARTHQUAKE_SERVICE_URL,
  grpc.credentials.createInsecure()
)

export const CreateEarthquake = async (req, res, next) => {
  try {
    if (!req.body.tags) req.body.tags = []

    await earthquakeClient.CreateEarthquake(req.body, (err) => {
      if (err) return next(err)
    })

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "DATA_CREATED_SUCCESS",
    })
  } catch (err) {
    next(err)
  }
}

export const UpdateEarthquake = async (req, res, next) => {
  try {
    if (!req.body?.tags) req.body.tags = []

    const dataParams = req.params;
		const dataBody = req.body;

		const earthquake = {
			_id: dataParams.id,
			...dataBody,
		};

    await earthquakeClient.UpdateEarthquake(earthquake, (err, data) => {
      if (err) return next(err)

      res.status(200).json({
        success: true,
        statusCode: 200,
        message: "DATA_UPDATED_SUCCESS",
      })
    })
  } catch (err) {
    next(err)
  }
}

export const GetEarthquake = async (req, res, next) => {
  await earthquakeClient.GetEarthquake({ id: req.params.id }, (err, data) => {
    if (err) return next(err)

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "DATA_FOUND_SUCCESS",
      earthquake: data,
    })
  })
}

export const GetAllEarthquake = async (req, res, next) => {
  await earthquakeClient.GetAllEarthquake({}, (err, data) => {
    if (err) return next(err)

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "DATA_GET_SUCCESS",
      earthquakes: data.earthquakes,
    })
  })
}

export const DeleteEarthquake = async (req, res, next) => {
	try {
		await earthquakeClient.DeleteEarthquake({ id: req.params.id }, (err, data) => {
			if (err) return next(err);

			res.status(200).json({
				success: true,
				statusCode: 200,
				message: "DATA_DELETED_SUCCESS",
			});
		});
	} catch (err) {
		next(err);
	}
}