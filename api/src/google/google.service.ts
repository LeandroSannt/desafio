import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleService {
  async getResults(search: string) {
    try {
      if (search) {
        console.log(search);
        const response = await axios.post(
          `http://localhost:8080/search?query=${search}`,
        );

        return response.data;
      } else {
        return [];
      }
    } catch (err) {
      return [];
    }
  }
}
