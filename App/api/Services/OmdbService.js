import { AppConfig } from '../../configs';
import { Helper } from '../../utils';
import { EndPoint } from '../EndPoint';
import { HttpMethod } from '../HttpMethod';
import RestClient from '../RestClient';

const getAllMovies = async (params) => {
  const result = await RestClient.request({
    method: HttpMethod.GET,
    url: `${EndPoint.Omdb.GetAllData}?apikey=${AppConfig?.OMDB_API_KEY}&${Helper.objToQueryString(
      params,
    )}`,
    data: {},
    useToast: false,
    useToken: false,
  });
  return result;
};

const getDetail = async (params) => {
  const result = await RestClient.request({
    method: HttpMethod.GET,
    url: `${EndPoint.Omdb.GetDetail}?apikey=${AppConfig?.OMDB_API_KEY}&${Helper.objToQueryString(
      params,
    )}`,
    data: {},
    useToast: false,
    useToken: false,
  });
  return result;
};

const OmdbService = {
  getAllMovies,
  getDetail,
};

export default OmdbService;
