import * as functions from "firebase-functions";

export const createUpdateUser = functions.firestore
    .document("users/{id}").onWrite((change, context) => {
      console.log("change", change, "==", "context", context);
    });


