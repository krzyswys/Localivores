package server.dto;

import jakarta.persistence.Column;
import lombok.Data;
import server.models.OpeningHours;

import java.util.List;

@Data
public class StoreDto implements Dto {
    private Long id;
    private String name;
    private String apartmentNumber;
    private String address;
    private String city;
    private String postalCode;
    private Double discounts;
    private Double longitude;
    private Double latitude;
    private List<ProductDto> productList;
    private List<ShopReviewDto> shopReviews;
    private List<OpeningHoursDto> openingHours;
    private UserDto user;
}