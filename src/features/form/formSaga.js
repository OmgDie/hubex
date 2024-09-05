import { call, put, takeLatest } from 'redux-saga/effects';
import emailjs from '@emailjs/browser';
import { saveFormData } from './formSlice';

function* sendEmail(action) {
  try {
    const result = yield call(
      emailjs.send,
      import.meta.env.VITE_EMAILJS_SERVICE_ID, // ur service_id from EmailJS
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ur Template_id from EmailJS
      {
        ...action.payload,
        send_time: new Date().toLocaleString(),
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY, // ur Public_key from EmailJS
    );
    console.log(result);
  } catch (error) {
    console.error('Error sending email:', error);
  }
}

function* formSaga() {
  yield takeLatest(saveFormData.type, sendEmail);
}

export default formSaga;
