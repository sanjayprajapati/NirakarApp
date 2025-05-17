import axios from 'axios';
import { client } from '../api/apiBase';

export const isZoomMeetingLive = async (): Promise<boolean> => {
  try {
    const res = await client.get('/zoom/zoom-status');
    //console.log('zoom sstatus',res.data.live);
    return res.data?.live === true;
  } catch (err) {
    console.error('Zoom API call failed:', err.message);
    return false;
  }
};