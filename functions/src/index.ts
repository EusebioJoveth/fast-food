import * as functions from "firebase-functions";
import * as admin from 'firebase-admin';
admin.initializeApp();

 export const createConatctPr = functions.https.onRequest(async (req, res) => {
  // Grab the text parameter.
  const original = req.query.text;
  // Push the new message into Firestore using the Firebase Admin SDK.
  const writeResult = await admin.firestore().collection('users').add({original: original});
  // Send back a message that we've successfully written the message
  res.json({result: `User Adicionado com ID: ${writeResult.id} added.`});
});
