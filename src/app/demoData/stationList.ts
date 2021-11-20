import { IStation } from '../types/types';

export const stationList: IStation[] = [
  {
    id: 1,
    stationName: 'Putin FM',
    frequency: '66,6',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/e/ef/All_Over_the_World_ELO_cover.jpg',
  },
  {
    id: 2,
    stationName: 'Dribbble FM',
    frequency: '101,2',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/6/67/ELO_Time_expanded_album_cover.jpg',
  },
  {
    id: 3,
    stationName: 'Doge FM',
    frequency: '99,4',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/3/30/EssentialELOalbumcover.jpg',
  },
  {
    id: 4,
    stationName: 'Ballads FM',
    frequency: '87,1',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/b/b0/The_Essential_Electric_Light_Orchestra_2011_US_album_cover.jpg',
  },
  {
    id: 5,
    stationName: 'Maximum FM',
    frequency: '142,2',
    radioCoverUrl:
      'https://upload.wikimedia.org/wikipedia/en/9/92/ELO_Face_The_Music_album_cover.jpg',
  },
];

export const fetchDemoData = async (): Promise<IStation[]> => {
  const response: IStation[] = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(stationList);
    }, 500);
  });
  return response;
};
