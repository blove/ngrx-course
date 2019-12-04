export interface Resort {
  id: string;
  name: string;
  url: string;
  lat: string;
  lng: string;
  status: string;
}

export const generateResort = () => ({
  id: '123',
  name: 'Big BIG Mountain',
  url: 'https://thebigbigmountain.com',
  lat: '39.1178138',
  lng: '-106.4627402',
  status: 'pending'
});
