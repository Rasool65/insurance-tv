import { FunctionComponent, useState } from 'react';
import { IPageProps } from '../../configs/routerConfig/IPageProps';
import ActivationCodeModal from './ActivationCodeModal';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Register: FunctionComponent<IPageProps> = () => {
  const [hideModal, setHideModal] = useState<boolean>(false);

  // const {
  //   control,
  //   setError,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<ILoginModel>({ mode: 'onChange', resolver: yupResolver(LoginModelSchema) });

  // const onSubmit = (data: ILoginModel) => {
  //   setLoading(true);
  //   const body = {
  //     ClientId: manifestJson.clientId,
  //     ClientSecret: manifestJson.clientSecret,
  //     UserName: UtilsHelper.fixFarsiForSearch(data.username),
  //     Password: data.password,
  //   };
  //   if (data && !loading) {
  //     httpRequest
  //       .postRequest<IOutputResult<ILoginResultModel>>(APIURL_LOGIN, body)
  //       .then((result) => {
  //         setLoading(false);
  //         dispatch(handleLogin(result)),
  //           toast.showSuccess(result.data.message),
  //           result.data.data.user.profile.residenceCityId ? navigate(URL_MAIN) : navigate(URL_PROVINCE);
  //         location.reload();
  //       })
  //       .catch(() => {
  //         setLoading(false);
  //       });
  //   }
  // };
  const handleChangeModal = () => {
    setHideModal(!hideModal);
  };

  return (
    <>
      <div className="white-header">
        <img src={require('@src/scss/images/logo.png')} className="header-logo" alt="" />
      </div>

      <div className="body-r-box"></div>
      <div className="body-l-box"></div>

      <div className="container mx-auto">
        <form
        // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="input-animation input-has-icon">
            <input type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>نام</label>
            <div className="input-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="#fff" />
                <path
                  d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div className="input-animation input-has-icon">
            <input type="text" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>نام خانوادگی</label>
            <div className="input-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="8" r="4" fill="#fff" />
                <path
                  d="M5.33788 17.3206C5.99897 14.5269 8.77173 13 11.6426 13H12.3574C15.2283 13 18.001 14.5269 18.6621 17.3206C18.79 17.8611 18.8917 18.4268 18.9489 19.0016C19.0036 19.5512 18.5523 20 18 20H6C5.44772 20 4.99642 19.5512 5.0511 19.0016C5.1083 18.4268 5.20997 17.8611 5.33788 17.3206Z"
                  fill="#fff"
                />
              </svg>
            </div>
          </div>
          <div className="input-animation input-has-icon">
            <input type="number" required />
            <span className="highlight"></span>
            <span className="bar"></span>
            <label>شماره موبایل</label>
            <div className="input-icon">
              <svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.384,17.752a2.108,2.108,0,0,1-.522,3.359,7.543,7.543,0,0,1-5.476.642C10.5,20.523,3.477,13.5,2.247,8.614a7.543,7.543,0,0,1,.642-5.476,2.108,2.108,0,0,1,3.359-.522L8.333,4.7a2.094,2.094,0,0,1,.445,2.328A3.877,3.877,0,0,1,8,8.2c-2.384,2.384,5.417,10.185,7.8,7.8a3.877,3.877,0,0,1,1.173-.781,2.092,2.092,0,0,1,2.328.445Z" />
              </svg>
            </div>
          </div>
          <button type="submit" className="rounded-full">
            ثبت بیمه نامه
          </button>
        </form>
        <ActivationCodeModal hidden={hideModal} handleChangeModal={handleChangeModal} />
      </div>
    </>
  );
};

export default Register;
