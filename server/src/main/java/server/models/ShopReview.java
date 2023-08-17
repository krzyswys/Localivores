package server.models;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "shop_reviews")
public @Data class ShopReview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "rating")
    private int rating;

    @Column(name = "description")
    private String description;

    @Column(name = "date")
    private Date date;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "store_id")
    private Store store;

    public ShopReview(int rating, String description, Date date, User user, Store store) {
        this.rating = rating;
        this.description = description;
        this.date = date;
        this.user = user;
        this.store = store;
    }

    public ShopReview() {

    }
}
