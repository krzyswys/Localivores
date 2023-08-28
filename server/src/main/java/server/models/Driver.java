package server.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import server.utils.VehicleType;


@Entity
//@Builder
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
