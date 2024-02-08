package org.example.backend.services;

import org.example.backend.dtos.MovieDto;
import org.example.backend.entities.MovieEntity;
import org.example.backend.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Objects;

@Service
public class MovieService {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    public List<MovieDto> findAll(Pageable page, Integer year, Integer top, String title) {

        if(top != null) {
            page = PageRequest.of(0, top, page.getSort());
        }

        return movieRepository.findAllByFilters(page, year, title)
                .getContent()
                .stream()
                .map(this::buildResponse)
                .toList();
    }

    public MovieEntity findById(Integer id) throws Exception {
        return movieRepository.findById(id).orElseThrow(() -> new Exception("Movie with id " + id + " not found"));
    }

    public MovieDto buildResponse(MovieEntity movieEntity) {
        return MovieDto
                .builder()
                .id(movieEntity.getId())
                .title(movieEntity.getTitle())
                .description(movieEntity.getDescription())
                .year(movieEntity.getYear())
                .imageUrl(movieEntity.getImageUrl())
                .build();
    }

}
