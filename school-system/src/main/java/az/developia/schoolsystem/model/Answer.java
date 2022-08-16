package az.developia.schoolsystem.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Answer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
private String answer;
private Boolean correct;
private String context;

public String getContext() {
	return context;
}
public void setContext(String context) {
	this.context = context;
}
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getAnswer() {
	return answer;
}
public void setAnswer(String answer) {
	this.answer = answer;
}
public Boolean getCorrect() {
	return correct;
}
public void setCorrect(Boolean correct) {
	this.correct = correct;
}

}
