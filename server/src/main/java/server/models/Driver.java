package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;
import server.utils.VehicleType;


@Entity
@SuperBuilder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "drivers")
public class Driver extends User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "vehicle_type")
    private VehicleType vehicleType;

    @Column(name = "availability")
    private Boolean availability;
}
