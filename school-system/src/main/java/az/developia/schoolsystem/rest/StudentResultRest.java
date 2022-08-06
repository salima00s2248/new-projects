package az.developia.schoolsystem.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.schoolsystem.model.StudentResult;
import az.developia.schoolsystem.repo.StudentResultrepo;

@RestController
@RequestMapping(path="/results")
@CrossOrigin(origins="*")
public class StudentResultRest {
@Autowired
private StudentResultrepo studentresultrepo;
@PostMapping
public StudentResult saveAll(@RequestBody StudentResult results) {
	return studentresultrepo.save(results);
}
@GetMapping
public List<StudentResult>findAll(){
return studentresultrepo.findAll();
}
}
