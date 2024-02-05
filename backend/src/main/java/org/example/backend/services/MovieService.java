package org.example.backend.services;

import org.example.backend.entities.MovieEntity;
import org.example.backend.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<MovieEntity> findAll(Pageable page) {
        return movieRepository.findAll(page).getContent();
    }

    public MovieEntity findById(Integer id) throws Exception {
        return movieRepository.findById(id).orElseThrow(() -> new Exception("Movie with id " + id + " not found"));
    }

    public List<MovieEntity> findAllByYearAndOrderByRevenue(Integer year, Pageable page) {
        return year != null ? movieRepository.findTop10ByYearOrderByRevenueDesc(year, page) : movieRepository.findTop10ByOrderByRevenueDesc(page);
    }

}
