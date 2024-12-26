import * as admin from 'firebase-admin';

const serviceAccount = require('./serviceAccount.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
//   databaseURL: 'https://<your-database-name>.firebaseio.com'
});

export default admin;