const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/your/firebase-service-account-key.json');

const app = express();
const PORT = process.env.PORT || 5000;

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://diyouforklfitapp.firebaseio.com"
});

app.use(bodyParser.json());

let forkliftAvailability = [true, true, true, true, true]; // Initial availability of 5 forklifts

app.post('/call', (req, res) => {
  const { location } = req.body;

  // Find the first available forklift
  const availableForkliftIndex = forkliftAvailability.findIndex(avail => avail);
  if (availableForkliftIndex !== -1) {
    const topic = `forklift-${availableForkliftIndex + 1}`;
    
    const message = {
      notification: {
        title: 'Forklift Call',
        body: `Location ${location} needs a forklift.`
      },
      topic: topic
    };

    admin.messaging().send(message)
      .then(response => {
        forkliftAvailability[availableForkliftIndex] = false; // Set forklift as busy
        res.status(200).send(`Notification sent to ${topic}`);
      })
      .catch(error => {
        console.log('Error sending message:', error);
        res.status(500).send('Error sending notification');
      });
  } else {
    res.status(503).send('No forklifts available');
  }
});

app.post('/update-availability', (req, res) => {
  const { forkliftIndex, available } = req.body;
  forkliftAvailability[forkliftIndex] = available;
  res.status(200).send('Forklift availability updated');
});

app.post('/complete-task', (req, res) => {
  const { forkliftIndex, location } = req.body;
  forkliftAvailability[forkliftIndex] = true; // Mark forklift as available

  // Notify that the task is completed
  const message = {
    notification: {
      title: 'Task Completed',
      body: `Forklift ${forkliftIndex + 1} has completed the task at location ${location}.`
    },
    topic: `location-${location}`
  };

  admin.messaging().send(message)
    .then(response => {
      res.status(200).send('Task completion notification sent');
    })
    .catch(error => {
      console.log('Error sending task completion message:', error);
      res.status(500).send('Error sending task completion notification');
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
