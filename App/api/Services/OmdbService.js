import { AppConfig } from '../../configs';
import { EndPoint } from '../EndPoint';
import { HttpMethod } from '../HttpMethod';
import RestClient from '../RestClient';

const getAllMovies = async params => {
  const result = await RestClient.request({
    method: HttpMethod.GET,
    url: `${EndPoint.Omdb.GetAllData}?lat=${params?.lat}&lng=${params?.lng}`,
    data: {},
    useToast: false,
    useToken: false,
  });
  return result;
};

const OmdbService = {
  getAllMovies,
};

export default OmdbService;
