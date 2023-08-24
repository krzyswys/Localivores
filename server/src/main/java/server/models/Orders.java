package server.models;


import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "orders")
public @Data class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "payment_id")
    private Payments paymentId;

    //********************************
    //userID
    //********************************

    @OneToMany(mappedBy = "order")
    private List<OrderItems> orderItems;

    //********************************
    //driverID
    //********************************

    @Column(name = "order_date")
    private Date orderDate;

    @Column(name = "delivery_date")
    private Date deliveryDate;

    @Column(name = "order_status")
    private String orderStatus;

    @Column(name = "delivery_cost", precision = 10, scale = 2)
    private BigDecimal delivery_cost;

    @ManyToOne
    @JoinColumn(name = "driver_id")
    private Drivers driver;
}
