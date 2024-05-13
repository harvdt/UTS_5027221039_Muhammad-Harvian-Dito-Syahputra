import path from "path"
import dotenv from "dotenv"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"

import DBConnection from "./config/database.js"

import { CreateEarthquake, UpdateEarthquake, GetEarthquake, GetAllEarthquake, DeleteEarthquake } from "./controllers/earthquake.controller.js"

dotenv.config()
DBConnection()

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currentFileUrl = import.meta.url;
const currentFilePath = fileURLToPath(currentFileUrl);
const currentDir = dirname(currentFilePath);

const protoPath = path.join(currentDir, '..', 'proto', 'earthquake.proto');

const earthquakeProto = protoLoader.loadSync(protoPath)
const { earthquakePackage } = grpc.loadPackageDefinition(earthquakeProto)

const server = new grpc.Server()
server.addService(earthquakePackage.EarthquakeService.service, {
  CreateEarthquake, 
  UpdateEarthquake, 
  GetEarthquake, 
  GetAllEarthquake, 
  DeleteEarthquake,
})

server.bindAsync("localhost:3001", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err.message)
    process.exit(1)
  } else {
    server
    console.info(`Server running on port ${port}`)
  }
})