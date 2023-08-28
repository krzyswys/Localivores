package server.mapper;

import server.dto.Dto;
import server.models.Model;

public interface CommonMapper<DtoImplementation extends Dto, ModelImplementation extends Model> {
    DtoImplementation mapToDto(ModelImplementation entity);
    ModelImplementation mapToEntity(DtoImplementation dto);
}