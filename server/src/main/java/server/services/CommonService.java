package server.services;

import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import server.dto.Dto;
import server.exceptions.LocalivoresException;
import server.mapper.CommonMapper;
import server.models.Model;
import server.repositories.CommonRepository;

import java.util.List;
import java.util.stream.Collectors;

@AllArgsConstructor
@NoArgsConstructor
public abstract class CommonService<DtoImplementation extends Dto, ModelImplementation extends Model> {
    protected CommonMapper<DtoImplementation, ModelImplementation> commonMapper;

    protected CommonRepository<ModelImplementation, Long> commonRepository;


    @Transactional
    public List<DtoImplementation> getAll() {
        return commonRepository.findAll().stream().map(commonMapper::mapToDto).collect(Collectors.toList());
    }

    @Transactional
    public DtoImplementation save(DtoImplementation dto) {
        ModelImplementation entity = commonRepository.save(commonMapper.mapToEntity(dto));
        dto.setId(entity.getId());
        return dto;
    }

    @Transactional
    public DtoImplementation get(Long id) {
        ModelImplementation entity = commonRepository.findById(id)
                .orElseThrow(() -> new LocalivoresException("No found with id + " + id));
        return commonMapper.mapToDto(entity);
    }
}
