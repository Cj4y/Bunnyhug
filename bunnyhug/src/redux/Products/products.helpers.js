import { firestore } from './../../firebase/utils';

//create new product in product collection of database
export const handleAddProduct = product => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      //create the document and set the data
      .doc()
      .set(product)
      .then(() => {
        resolve();
      })
      //reject promise with error if erronous
      .catch(err => {
        reject(err);
      })
  });
}

//handle, query products and fetch data
//startAterDoc means we have called LoadMore
export const handleFetchProducts = ({ filterType, startAfterDoc, persistProducts=[] }) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;

    //order products by created date (default for firebase is ascending) and limit to pageSize
    let ref = firestore.collection('products').orderBy('createdDate').limit(pageSize);

    if (filterType) ref = ref.where('productCategory', '==', filterType);

    //send last document to LoadMore to grab the next page of products
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then(snapshot => {
        const totalCount = snapshot.size;

        const data = [
          //keep the products from previous query
          ...persistProducts,
          //reveal more
          ...snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              documentID: doc.id
            }
          })
        ];

        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          //if on last page, hide Load More button in ProductResults
          isLastPage: totalCount < 1
        });
      })
      .catch(err => {
        reject(err);
      })
  })
}

export const handleDeleteProduct = documentID => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(documentID)
      .delete()
      .then(() => {
        console.log(documentID, 2)
        resolve();
      })
      .catch(err => {
        reject(err);
      })
  });
}

export const handleFetchProduct = (productID) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection('products')
      .doc(productID)
      .get()
      .then(snapshot => {

        if (snapshot.exists) {
          resolve({
            ...snapshot.data(),
            documentID: productID
          });
        }
      })
      .catch(err => {
        reject(err);
      })
  })
}