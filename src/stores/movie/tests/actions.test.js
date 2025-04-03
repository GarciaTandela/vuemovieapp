import { describe, it, expect, beforeEach } from 'vitest';
import actions from '../actions';

describe('Movie Store Actions', () => {
  let store;

  beforeEach(() => {
    store = {
      movie: null,
      relatedMovies: [],
      movies: [],
      favoritesMovies: [],
      totalPages: 0,
      totalResults: 0,
      ...actions
    };
  });

  describe('setMovieDetail', () => {
    it('should set movie details correctly', () => {
      const data = {
        title: 'Inception',
        overview: 'A mind-bending thriller',
        release_date: '2010-07-16',
        genres: [
          { id: 1, name: 'Action' },
          { id: 2, name: 'Sci-Fi' }
        ],
        backdrop_path: '/image.jpg'
      };

      store.setMovieDetail(data);

      expect(store.movie).toEqual({
        title: 'Inception',
        description: 'A mind-bending thriller',
        releaseDate: '2010-07-16',
        genres: ['Action', 'Sci-Fi'],
        genreIds: [1, 2],
        image: 'https://image.tmdb.org/t/p/w500/image.jpg'
      });
    });
  });

  describe('setRelatedMovies', () => {
    it('should set related movies correctly', () => {
      const data = {
        results: [
          {
            id: 1,
            title: 'Movie 1',
            overview: 'Description 1',
            genre_ids: [1, 2],
            poster_path: '/poster1.jpg'
          },
          {
            id: 2,
            title: 'Movie 2',
            overview: 'Description 2',
            genre_ids: [3, 4],
            poster_path: '/poster2.jpg'
          }
        ]
      };

      store.setRelatedMovies(data);

      expect(store.relatedMovies).toEqual([
        {
          id: 1,
          title: 'Movie 1',
          description: 'Description 1',
          genreIds: [1, 2],
          image: 'https://image.tmdb.org/t/p/w500/poster1.jpg',
          isFavorite: false,
          visible: true
        },
        {
          id: 2,
          title: 'Movie 2',
          description: 'Description 2',
          genreIds: [3, 4],
          image: 'https://image.tmdb.org/t/p/w500/poster2.jpg',
          isFavorite: false,
          visible: true
        }
      ]);
    });
  });

  describe('setMovies', () => {
    it('should set movies correctly and mark favorites', () => {
      store.favoritesMovies = [{ id: 1 }];

      const data = {
        results: [
          {
            id: 1,
            title: 'Movie 1',
            overview: 'Description 1',
            genre_ids: [1, 2],
            poster_path: '/poster1.jpg'
          },
          {
            id: 2,
            title: 'Movie 2',
            overview: 'Description 2',
            genre_ids: [3, 4],
            poster_path: '/poster2.jpg'
          }
        ],
        total_pages: 10,
        total_results: 100
      };

      store.setMovies(data);

      expect(store.movies).toEqual([
        {
          id: 1,
          title: 'Movie 1',
          description: 'Description 1',
          genreIds: [1, 2],
          image: 'https://image.tmdb.org/t/p/w500/poster1.jpg',
          isFavorite: true,
          visible: true
        },
        {
          id: 2,
          title: 'Movie 2',
          description: 'Description 2',
          genreIds: [3, 4],
          image: 'https://image.tmdb.org/t/p/w500/poster2.jpg',
          isFavorite: false,
          visible: true
        }
      ]);

      expect(store.totalPages).toBe(10);
      expect(store.totalResults).toBe(100);
    });
  });
});
