package org.example.backend.repositories;

import org.example.backend.entities.MovieEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity, Integer> {

    @Query("SELECT movie FROM MovieEntity movie WHERE (:year IS NULL OR movie.year = :year) AND (:title IS NULL OR LOWER(movie.title) LIKE %:title%)")
    Page<MovieEntity> findAllByFilters(Pageable page, @Param("year") Integer year, @Param("title") String title);


}