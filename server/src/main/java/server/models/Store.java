package server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "stores")
public @Data class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long store_id;

    @Column(name = "name")
    private String name;

    @Column(name = "adress")
    private String address;

    @Column(name = "opening_hours")
    private String openingHours;

    @Column(name = "discount")
    private double discounts;

    @Column(name = "longitude")
    private double longitude;

    @Column(name = "latitude")
    private double latitude;

    @OneToMany(mappedBy = "store")
    List<Product> productList;

    @OneToMany(mappedBy = "store")
    List<ShopReview> shopReviews;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;
}
