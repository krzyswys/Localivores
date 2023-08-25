package server.dto;

import lombok.Data;
import server.utils.VehicleType;

@Data
public class DriverDto extends UserDto {
    private Long id;
    private VehicleType vehicleType;
    private Boolean availability;
}