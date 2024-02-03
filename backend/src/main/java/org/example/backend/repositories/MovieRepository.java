package org.example.backend.repositories;

import org.example.backend.entities.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity, Integer> {

    List<MovieEntity> findAllByYear(Integer year);

}