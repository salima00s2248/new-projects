package az.developia.schoolsystem.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.schoolsystem.model.Test;
import az.developia.schoolsystem.repo.TestRepo;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="/tests")
public class TestRestController {
@Autowired
private TestRepo testrepo;

@PostMapping
@PreAuthorize(value = "hasAuthority('teacher')")
public Test save( @RequestBody Test test ) {
	test.setCreatorUsername(SecurityContextHolder.getContext().getAuthentication().getName());
	return testrepo.save(test);
}
@GetMapping
@PreAuthorize(value = "hasAuthority('teacher')")
public List<Test>findAll() {
	return testrepo.findAllByCreatorUsername(SecurityContextHolder.getContext().getAuthentication().getName());

}

}
