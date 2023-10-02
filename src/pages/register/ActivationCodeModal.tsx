import { FunctionComponent } from 'react';
import PinField from 'react-pin-field';

interface ActivationCodeModalProps {
  hidden: boolean;
  handleChangeModal: any;
  firstName?: string;
  lastName?: string;
  mobileNo?: string;
}

const ActivationCodeModal: FunctionComponent<ActivationCodeModalProps> = ({
  hidden,
  handleChangeModal,
  firstName,
  lastName,
  mobileNo,
}) => {
  return (
    <>
      <div className={`fixed z-10 inset-0 overflow-y-auto ${hidden && 'hidden'}`}>
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          </div>

          <div
            className="modal-content inline-block align-bottom bg-white p-2 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="username-content text-right">
                <span className="user-name">{firstName}</span>
                <span className="user-family">{lastName}</span>
              </div>
              <div className="usernumber-content text-right mt-5">{mobileNo}</div>
              <div className="modal-info text-center mt-5">برای ثبت، کد تایید پیامک شده را وارد کنید</div>
              <div className="confirm-code flex justify-center space-x-2 mt-3 flex-row-reverse">
                <PinField
                  className="w-1/4 p-2 m-2 border border-gray-300 rounded"
                  length={4}
                  type="number"
                  validate={/^[0-9]$/}
                  onComplete={(e) => {
                    const number = [...e].reverse().join('');
                    console.log(number);
                  }}
                />
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button className="closemodal-btn" onClick={handleChangeModal}>
                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z"
                    fill="#000000"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="rounded-full red-btn mt-0"
                // onclick="window.location.href='select-forms.html';"
              >
                تایید
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivationCodeModal;
