package server.controllers;

import org.springframework.web.bind.annotation.*;
import server.dto.UserDto;
import server.models.User;
import server.services.CommonService;

@RestController
@RequestMapping("/api/users")
public class UserController extends CommonController<UserDto, User> {

    public UserController(CommonService<UserDto, User> commonService) {
        super(commonService);
    }
}
