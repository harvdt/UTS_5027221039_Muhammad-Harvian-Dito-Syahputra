function getEarthquakeData() {
  axios.get('http://localhost:3000/earthquakes')
    .then(function (response) {
      const data = response.data; 
      if (Array.isArray(data.earthquakes)) {
        const earthquakes = data.earthquakes;
        const cardBody = document.querySelector('#earthquakeCard');

        earthquakes.forEach(function (earthquake) {
          const formattedLatitude = earthquake.latitude.toFixed(2);
          const formattedLongitude = earthquake.longitude.toFixed(2);
          const formattedMagnitude = earthquake.magnitude.toFixed(1);

          const card = document.createElement('div');
          card.classList.add('card', 'mb-2');
          card.innerHTML = `
            <div class="card-body">
              <div class="d-flex flex-column">
                <div class="d-flex flex-column">
                  <p class=""><span class="fw-bold">_id:</span> ${earthquake._id}</p>
                  <p class=""><span class="fw-bold">Tanggal:</span> ${earthquake.date}</p>
                  <p class=""><span class="fw-bold">Waktu:</span> ${earthquake.time}</p>
                </div>
                <hr>
                <div class="d-flex justify-content-around text-center">
                  <div class="d-flex flex-column">
                    <p class="fw-bold">Lokasi:</p>
                    <p class="">${earthquake.location}</p>
                  </div>
                  <div class="d-flex flex-column">
                    <p class="fw-bold">Lintang:</p>
                    <p class="">${formattedLatitude}</p>
                  </div>
                  <div class="d-flex flex-column">
                    <p class="fw-bold">Bujur:</p>
                    <p class="">${formattedLongitude}</p>
                  </div>
                  <div class="d-flex flex-column">
                    <p class="fw-bold">Magnitudo:</p>
                    <p class="">${formattedMagnitude}</p>
                  </div>
                  <div class="d-flex flex-column">
                    <p class="fw-bold">Kedalaman:</p>
                    <p class="">${earthquake.depth} Km</p>
                  </div>
                </div>
                <hr>
                <div class="d-flex justify-content-end">
                  <button type="button" class="btn btn-primary mx-2" data-bs-toggle="modal" data-bs-target="#updateModal">Update</button>
                  <button type="button" class="btn btn-danger mx-2" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button>
                </div>
              </div>
            </div>
          `;
          cardBody.appendChild(card);
        });
      } else {
        console.error('Unexpected response format:', data);
      }
    })
    .catch(function (error) {
      console.error('Error fetching earthquake data:', error);
    });
}

function createEarthquakeData() {
  const formData = {
    location: document.getElementById('locationCreateInput').value,
    date: document.getElementById('dateCreateInput').value,
    time: document.getElementById('timeCreateInput').value,
    latitude: document.getElementById('latitudeCreateInput').value,
    longitude: document.getElementById('longitudeCreateInput').value,
    magnitude: document.getElementById('magnitudeCreateInput').value,
    depth: document.getElementById('depthCreateInput').value,
  };

  console.log(formData)

  axios.post('http://localhost:3000/earthquakes', formData)
    .then(function (response) {
      console.log('New earthquake data created:', response.data);
    })
    .catch(function (error) {
      console.error('Error creating new earthquake data:', error);
    });
}

function updateEarthquakeData() {
  const formData = {
    _id: document.getElementById('idUpdateInput').value,
    location: document.getElementById('locationUpdateInput').value,
    date: document.getElementById('dateUpdateInput').value,
    time: document.getElementById('timeUpdateInput').value,
    latitude: document.getElementById('latitudeUpdateInput').value,
    longitude: document.getElementById('longitudeUpdateInput').value,
    magnitude: document.getElementById('magnitudeUpdateInput').value,
    depth: document.getElementById('depthUpdateInput').value,
  };

  console.log(formData)
  console.log(formData._id)

  axios.patch(`http://localhost:3000/earthquakes/${formData._id}`, formData)
    .then(function (response) {
      console.log('Earthquake data has been updated:', response.data);
    })
    .catch(function (error) {
      console.error('Error updating earthquake data:', error);
    });
}

function deleteEarthquakeData() {
  const _id = document.getElementById('idDeleteInput').value;
  console.log(_id);

  axios.delete(`http://localhost:3000/earthquakes/${_id}`)
    .then(function (response) {
      console.log('Earthquake data has been deleted:', response.data);
    })
    .catch(function (error) {
      console.error('Error deleting earthquake data:', error);
    });
}

document.addEventListener('DOMContentLoaded', function () {
  getEarthquakeData();

  const createForm = document.getElementById('createEarthquakeForm');
  createForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    createEarthquakeData();
  });

  const updateForm = document.getElementById('updateEarthquakeForm');
  updateForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    updateEarthquakeData();
  });

  const deleteForm = document.getElementById('deleteEarthquakeForm');
  deleteForm.addEventListener('submit', function (event) {
    event.preventDefault(); 
    deleteEarthquakeData();
  });
});
