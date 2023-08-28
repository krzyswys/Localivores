package server.dto;

import lombok.Data;

@Data
public class ExtrasDto implements Dto {
    private Long id;
    private Boolean gmo;
}