import { IService } from '../interfaces/service';

export class MovieData implements IService {
  async getData(title: string) {
    const response = await fetch(
      'http://www.omdbapi.com/?apikey=4d83a963&t=' + title
    );
    const data = response.json();
    return data;
  }
}
