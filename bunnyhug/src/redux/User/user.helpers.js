//import firebase helpers file
import { auth } from './../../firebase/utils';

//for the RecoverEmail component and RecoverAccount page
export const handleResetPasswordAPI = (email) => {
  const config = {
    url: 'http://localhost:3000/login'
  };

  //allow to resolve or reject with error whether email is found
  return new Promise((resolve, reject) => {
    auth.sendPasswordResetEmail(email, config)
      .then(() => {
        resolve();
      })
      .catch(() => {
        const err = ['Email not found. Please try again.'];
        reject(err);
      });
  });
};