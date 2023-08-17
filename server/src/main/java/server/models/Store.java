package server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Table(name = "stores")
public @Data class Store {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

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

    public Store(String name, String address, String openingHours, double discounts, double longitude, double latitude, List<Product> productList, List<ShopReview> shopReviews, User user) {
        this.name = name;
        this.address = address;
        this.openingHours = openingHours;
        this.discounts = discounts;
        this.longitude = longitude;
        this.latitude = latitude;
        this.productList = productList;
        this.shopReviews = shopReviews;
        this.user = user;
    }

    public Store() {
    }
}
