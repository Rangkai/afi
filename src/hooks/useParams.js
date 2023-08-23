import { useLocation } from '@reach/router';

export default () => {
  const location = useLocation();
  const getParams = () => {
    const search = location.search?.substring(1);
    if (!search) {
      return null;
    }
    const params = JSON.parse(`{"${decodeURI(search)
      ?.replace(/"/g, '\\"')
      ?.replace(/&/g, '","')
      ?.replace(/=/g, '":"')
      ?.replace(/\+/g, ' ')}"}`);
    return params;
  };

  return {
    getParams,
  };
};
