package org.example.backend.controllers;

import jakarta.annotation.Nullable;
import org.example.backend.dtos.MovieDto;
import org.example.backend.entities.MovieEntity;
import org.example.backend.services.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("public/movies")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<MovieDto> findAll(@PageableDefault(
            sort = "id",
            direction = Sort.Direction.ASC,
            page = 0,
            size = 10) Pageable page,
                                  @RequestParam(required = false) Integer year,
                                  @RequestParam(required = false) Integer top,
                                  @RequestParam(required = false) String title) {
        return movieService.findAll(page, year, top, title);
    }

    @GetMapping("/{id}")
    public MovieEntity findById(@PathVariable Integer id) throws Exception {
        return movieService.findById(id);
    }

}
