package org.example.backend.repositories;

import org.example.backend.entities.MovieEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.domain.Pageable;
import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity, Integer> {

    List<MovieEntity> findTop10ByYearOrderByRevenueDesc(Integer year, Pageable page);

    List<MovieEntity> findTop10ByOrderByRevenueDesc(Pageable page);

}