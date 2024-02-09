package org.example.backend.dtos;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MovieDto {
    private Long id;
    private String title;
    private String description;
    private Integer year;
    private Double revenue;
    private String imageUrl;
}
