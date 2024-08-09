import { call, put, takeLatest } from 'redux-saga/effects';
import emailjs from '@emailjs/browser';
import { saveFormData } from './formSlice';

function* sendEmail(action) {
  try {
    const result = yield call(
      emailjs.send,
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        ...action.payload,
        send_time: new Date().toLocaleString(),
      },
      'YOUR_USER_ID',
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
