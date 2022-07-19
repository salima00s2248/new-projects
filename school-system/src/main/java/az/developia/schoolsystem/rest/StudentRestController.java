package az.developia.schoolsystem.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.schoolsystem.model.Student;
import az.developia.schoolsystem.repo.StudentRepository;

@RestController
@RequestMapping(path="/students")
@CrossOrigin(origins="*")

public class StudentRestController {
	@Autowired
	private StudentRepository studentrepo;
	
@PostMapping
public Student saveAll(@RequestBody Student student) {
return studentrepo.save(student);
		
}
@GetMapping
public List<Student>findAll(){
return studentrepo.findAll();
}
@DeleteMapping(path="/{id}")
public void deleteById(@PathVariable Integer id) {
studentrepo.deleteById(id);
}
@GetMapping(path="/{id}")
public Student findById(@PathVariable Integer id) {
return studentrepo.findById(id).get();
}



}
