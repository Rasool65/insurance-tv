export interface IOutputResult<T extends object> {
  data: T;
  // isSuccess: boolean;
  responseCode: string;
  msg: string;
}
