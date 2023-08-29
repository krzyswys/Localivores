package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@jakarta.persistence.Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "stores")
public class Store implements Model {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "apartment_number")
    private String apartmentNumber;

    @Column(name = "address")
    private String address;

    @Column(name = "city")
    private String city;

    @Column(name = "postal_code")
    private String postalCode;


    @Column(name = "discount")
    private Double discounts;

    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "latitude")
    private Double latitude;

    @OneToMany(mappedBy = "store")
    List<Product> productList;

    @OneToMany(mappedBy = "store")
    List<ShopReview> shopReviews;

    @OneToMany(mappedBy = "store")
    private List<OpeningHours> openingHour;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;


}
