package org.example.backend.controllers;

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
@RequestMapping("public/movies")
public class MovieController {

    private final MovieService movieService;

    @Autowired
    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<MovieDto> findAll(@PageableDefault(sort = "id",
            direction = Sort.Direction.ASC,
            page = 0,
            size = 10) Pageable page) {
        return movieService.findAll(page)
                .stream()
                .map(movieService::buildResponse)
                .toList();
    }

    @GetMapping("/{id}")
    public MovieEntity findById(@PathVariable Integer id) throws Exception {
        return movieService.findById(id);
    }

    @GetMapping("/revenue")
    public List<MovieEntity> findAllByYearAndOrderByRevenue(@RequestParam(required=false) Integer year, @PageableDefault(
            page = 0,
            size = 10) Pageable page) {
        return movieService.findAllByYearAndOrderByRevenue(year, page);
    }

}
