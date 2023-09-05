package server.mapper;

import org.mapstruct.Mapper;
import server.dto.UserDto;
import server.models.User;

@Mapper(componentModel = "spring")
public interface UserMapper extends CommonMapper<UserDto, User> {
}
