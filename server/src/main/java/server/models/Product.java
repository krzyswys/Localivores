package server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "products")
public @Data class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long product_id;

    //relacja jeden sklep do wielu produktów
    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private Double price;

    @Column(name = "weight")
    private Double weight;

    @Column(name = "discount")
    private Double discount;

    @Column(name = "origin")
    private String origin;

    @Column(name = "expiration_date")
    private Date expirationDate;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "extras_id")
    private Extras extras;

}
