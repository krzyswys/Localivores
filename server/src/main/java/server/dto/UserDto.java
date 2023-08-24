package server.dto;

import lombok.Data;
import java.util.List;

@Data
public class UserDto {
    private Long id;
    private List<ShopReviewDto> reviews;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private String address;
    private String role;
}