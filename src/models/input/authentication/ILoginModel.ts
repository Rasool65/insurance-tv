import { t } from 'i18next';
import * as yup from 'yup';

export interface ILoginModel {
  nationalCode: string;
  mobile: string;
  isLegal?: boolean;
}
export const mobileRegExp = /(^09[0-9]{9}$)|(^\u06F0\u06F9[\u06F0-\u06F9]{9})$/;

export const checkCodeMelli = (meli_code: any) => {
  if (meli_code == undefined) return false;
  if (
    [
      '1111111111',
      '2222222222',
      '3333333333',
      '4444444444',
      '5555555555',
      '6666666666',
      '7777777777',
      '8888888888',
      '9999999999',
    ].includes(meli_code)
  ) {
    return false;
  } else {
    var c = parseInt(meli_code.charAt(9));
    var n =
      parseInt(meli_code.charAt(0)) * 10 +
      parseInt(meli_code.charAt(1)) * 9 +
      parseInt(meli_code.charAt(2)) * 8 +
      parseInt(meli_code.charAt(3)) * 7 +
      parseInt(meli_code.charAt(4)) * 6 +
      parseInt(meli_code.charAt(5)) * 5 +
      parseInt(meli_code.charAt(6)) * 4 +
      parseInt(meli_code.charAt(7)) * 3 +
      parseInt(meli_code.charAt(8)) * 2;
    // @ts-ignore
    var r = n - parseInt(n / 11) * 11;
    if ((r == 0 && r == c) || (r == 1 && c == 1) || (r > 1 && c == 11 - r)) {
      return true;
    } else {
      return false;
    }
  }
};

export const LoginModelSchema: yup.SchemaOf<ILoginModel> = yup.object({
  nationalCode: yup
    .string()
    .required('کد ملی اجباریست')
    .length(10, 'طول کد ملی 10 عدد می باشد')
    .test('codeMelliValidation', 'کد ملی نامعتبر است', checkCodeMelli),
  mobile: yup.string().required('شماره همراه الزامیست').matches(mobileRegExp, 'شماره همراه نادرست است'),
  isLegal: yup.bool(),
});
