package server.dto;

import jakarta.persistence.*;
import lombok.Data;
import server.models.Store;


import java.time.LocalTime;

@Data
public class OpeningHoursDto implements Dto {
    private Long id;
    private Store store;
    private int dayOfWeek;
    private LocalTime timeOpen;
    private LocalTime timeClosed;
}
