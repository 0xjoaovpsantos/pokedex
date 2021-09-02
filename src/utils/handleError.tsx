import { message } from 'antd';

export const handleError = (error: any) => {
  message.error('Pokemon não encontrado');
};
