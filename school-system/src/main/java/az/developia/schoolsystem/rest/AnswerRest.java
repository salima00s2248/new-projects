package az.developia.schoolsystem.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import az.developia.schoolsystem.model.Answer;

import az.developia.schoolsystem.repo.AnswerRepo;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping(path="/answers")
public class AnswerRest {
	@Autowired
	private AnswerRepo answerrepo;
	@PostMapping
	public Answer saveAll(@RequestBody Answer answers) {
		return answerrepo.save(answers);
	}
	@GetMapping
	public List<Answer>findAll(){
	return answerrepo.findAll();
	}
}
