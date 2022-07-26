package az.developia.schoolsystem.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.schoolsystem.model.AuthorityModel;
import az.developia.schoolsystem.model.UserModel;
import az.developia.schoolsystem.repo.AuthorityRepo;
import az.developia.schoolsystem.repo.UserRepo;
@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/users")
public class UserRest {
	@Autowired
	private UserRepo userrepo;
	@Autowired
	private AuthorityRepo authorrepo;

	
@PostMapping
	public UserModel  saveAll(@RequestBody UserModel user) {
	Optional<UserModel> useroption = userrepo.findById(user.getUsername());
	if (useroption.isPresent()) {
		UserModel userm = new UserModel();
		userm.setUsername("");
		return userm;
	} else {
		user.setPassword("{noop}" + user.getPassword());
		user.setEnabled(true);
		UserModel savedUser = userrepo.save(user);
		AuthorityModel authoritymodel = new AuthorityModel();
		authoritymodel.setUsername(user.getUsername());
		authoritymodel.setAuthority("teacher");

		authorrepo.save(authoritymodel);
		return savedUser;

	}
}

@GetMapping(path = "/login")

public List<UserModel> findAll() {
return userrepo.findAll();
}
}
