## Sistem Manajemen Informasi Gempa Bumi

Nama: Muhammad Harvian Dito Syahputra
NRP: 5027221039
Kelas: Integrasi Sistem A

### Pre-requisites
- Node.js
- All dependencies in package.json
- MongoDB

### How to run?
- Client
1. cd 'backend'
2. npm run start-client

- Server
1. cd 'backend'
2. npm run start-server

- Frontend
1. Go to frontend folder
2. Open the index.html with Live Server via vscode or open it directly

### Backend
Sistem API grpc ini menggunakan grpc/node-js. Sistem berkomunikasi melalui client dan server. Client berjalan di localhost:3000 dan Server berjalan di localhost:3001. Database yang digunakan adalah MongoDB. Proses connecting antara API grpc dan database MongoDB dilakukan di dalam file 'database.js'.

1. Fungsi GetAllEarthquake
  Fungsi GetAllEarthquake adalah fungsi untuk mengambil seluruh data yang berada di dalam database. Fungsi GetAllEarthquake dapat diakses menggunakan method 'get' dengan route endpoint 'localhost:3000/earthquakes'.
- Testing
![Screenshot 2024-05-14 010417](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/f7fe77a1-f5f4-4517-8326-1864028d22e2)

2. Fungsi GetEarthquake
   Fungsi GetEarthquake adalah fungsi untuk mengambil sebuah data yang berada di dalam database. Fungsi GetEarthquake dapat diakses menggunakan method 'get' dengan route endpoint 'localhost:3000/earthquakes/:id'.
- Testing
![Screenshot 2024-05-14 010508](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/8197be62-37a4-4ded-96c8-269c40bceea5)

3. Fungsi CreateEarthquake
   Fungsi CreateEarthquake adalah fungsi untuk membuat data baru dan memasukkannya ke dalam database. Fungsi CreateEarthquake dapat diakses menggunakan method 'post' dengan route endpoint 'localhost:3000/earthquakes'.
- Testing
![Screenshot 2024-05-14 010547](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/61ef751c-0f7a-41a1-ab51-006dee9bf96e)
![Screenshot 2024-05-14 010602](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/14728b7d-34f8-4e1d-98b4-9ad46ea0f8bf)

4. Fungsi UpdateEarthquake
   Fungsi UpdateEarthquake adalah fungsi untuk melakukan update atau edit data yang sudah ada di database. Fungsi UpdateEarthquake dapat diakses menggunakan method 'patch' dengan route endpoint 'localhost:3000/earthquakes/:id'.
- Testing
![Screenshot 2024-05-14 010814](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/7845c19f-1aac-4967-96f9-30fde8ff01d2)
![Screenshot 2024-05-14 010830](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/1050c664-3f1a-4430-85b4-f38b4bf4e977)

5. Fungsi DeleteEarthquake
   Fungsi DeleteEarthquake adalah fungsi untuk menghapus data yang sudah ada di database. Fungsi DeleteEarthquake dapat diakses menggunakan method 'delete' dengan route endpoint 'localhost:3000/earthquakes/:id'.
![Screenshot 2024-05-14 010855](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/0cf8e203-6baf-4ad0-a13b-20316a8603b9)
![Screenshot 2024-05-14 010910](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/fc43a7db-658a-4dd3-b4b0-fda5859e5077)

### Frontend
Frontend untuk pengambilan API di sini menggunakan html dan js murni tanpa framework. Sedangkan untuk styling css-nya menggunakan framework Bootstrap untuk mempermudah dan mempercantik styling. Proses pengambilan API menggunakan axios.
![Screenshot 2024-05-14 010310](https://github.com/harvdt/UTS_5027221039_Muhammad-Harvian-Dito-Syahputra/assets/115382618/5db3229b-70a7-4a3d-88d8-11c319c91628)
