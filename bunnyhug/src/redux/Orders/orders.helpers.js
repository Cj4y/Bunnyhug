import { firestore } from './../../firebase/utils';

export const handleSaveOrder = order => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc()
      .set(order)
      .then(() => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

//order the user order history
export const handleGetUserOrderHistory = uid => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection('orders').orderBy('orderCreatedDate');
    ref = ref.where('orderUserID', '==', uid);

    ref
      .get()
      // grab the snapshot
      .then(snap => {
        const data = [
          ...snap.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({ data });
      })
      .catch(err => {
        reject(err);
      });


  });
};

//grab order data based on order id
export const handleGetOrder = orderID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('orders')
      .doc(orderID)
      .get()
      .then(snap => {
        if (snap.exists) {
          resolve({
            ...snap.data(),
            documentID: orderID
          })
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}
