package org.example.backend.controllers;

import org.example.backend.entities.MovieEntity;
import org.example.backend.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("public/movies")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<MovieEntity> findAll(@PageableDefault(sort = "id",
            direction = Sort.Direction.ASC,
            page = 0,
            size = 10) Pageable page) {
        return movieService.findAll(page);
    }

    @GetMapping("/{id}")
    public MovieEntity findById(@PathVariable Integer id) throws Exception {
        return movieService.findById(id);
    }

    @GetMapping("/year/{year}")
    public List<MovieEntity> findAllByYear(@PathVariable Integer year) {
        return movieService.findAllByYear(year);
    }

}
