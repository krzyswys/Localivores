package server.dto;

import jakarta.persistence.Column;
import lombok.Data;
import java.util.List;

@Data
public class UserDto implements Dto {
    private Long id;
    private List<ShopReviewDto> reviews;
    private List<OrderDto> orders;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String apartmentNumber;
    private String address;
    private String city;
    private String postalCode;
}