package org.example.backend.repositories;

import org.example.backend.entities.MovieEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity, Integer> {

    @Query("select movie from MovieEntity movie where ?1 is null or movie.year = ?1")
    Page<MovieEntity> findAllByFilters(Pageable page, Integer year);

}