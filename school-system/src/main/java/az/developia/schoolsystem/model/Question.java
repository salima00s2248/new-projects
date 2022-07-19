package az.developia.schoolsystem.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

@Entity
public class Question {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
private String questions;
@OneToMany
@JoinColumn(name="question_id")
private List<Answer>answers;//bu cavabin hansi suala aid oldugun bilmeliyik
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getQuestions() {
	return questions;
}
public void setQuestions(String questions) {
	this.questions = questions;
}
public List<Answer> getAnswers() {
	return answers;
}
public void setAnswers(List<Answer> answers) {
	this.answers = answers;
}


}
