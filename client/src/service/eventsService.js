import axios from 'axios';

class eventClient {
  async getEvents () {
    return await axios (`/events`);
  }
}

export default new eventClient ();
