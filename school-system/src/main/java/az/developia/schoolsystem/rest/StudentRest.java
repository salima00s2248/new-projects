package az.developia.schoolsystem.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.schoolsystem.model.Student;
import az.developia.schoolsystem.repo.StudentRepo;

@RestController
@CrossOrigin(origins="*")
@RequestMapping(path="students")
public class StudentRest {
@Autowired
private StudentRepo studentrepo;
@PostMapping
public Student save(@RequestBody Student students) {
return studentrepo.save(students);
}
@GetMapping
public List<Student>findAll(){
return studentrepo.findAll();
}
}
