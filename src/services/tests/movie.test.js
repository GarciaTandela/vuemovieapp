import movieService from '../movie';
import { vi, describe, it, expect, beforeEach, afterEach } from 'vitest';

describe('movieService', () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    global.fetch = mockFetch;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should fetch movie genres successfully', async () => {
    const mockResponse = { genres: [{ id: 1, name: 'Action' }] };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const result = await movieService.getMovieGenres();

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/genre/movie/list?language=en-US',
      expect.any(Object)
    );
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error when fetching movie genres fails', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });

    await expect(movieService.getMovieGenres()).rejects.toThrow('Could not fetch movie details!');
  });

  it('should fetch movie details successfully', async () => {
    const mockResponse = { id: 1, title: 'Movie Title' };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const result = await movieService.getMovieDetails(1);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/movie/1?language=en-US',
      expect.any(Object)
    );
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error when fetching movie details fails', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });

    await expect(movieService.getMovieDetails(1)).rejects.toThrow('Could not fetch movie details!');
  });

  it('should fetch related movies successfully', async () => {
    const mockResponse = { results: [{ id: 1, title: 'Related Movie' }] };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const result = await movieService.getRelatedMovies('28');

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28',
      expect.any(Object)
    );
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error when fetching related movies fails', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });

    await expect(movieService.getRelatedMovies('28')).rejects.toThrow(
      'Could not fetch movies by genre!'
    );
  });

  it('should search movies by filters successfully', async () => {
    const mockResponse = { results: [{ id: 1, title: 'Filtered Movie' }] };
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockResponse
    });

    const filters = { sort_by: 'popularity.desc', year: 2023 };
    const result = await movieService.searchMoviesByFilters(filters);

    expect(mockFetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc&year=2023',
      expect.any(Object)
    );
    expect(result).toEqual(mockResponse);
  });

  it('should throw an error when searching movies by filters fails', async () => {
    mockFetch.mockResolvedValueOnce({ ok: false });

    const filters = { sort_by: 'popularity.desc', year: 2023 };
    await expect(movieService.searchMoviesByFilters(filters)).rejects.toThrow(
      'Could not fetch movies by genre!'
    );
  });
});
