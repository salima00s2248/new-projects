package az.developia.schoolsystem.model;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
@Entity
public class Test {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
private Integer id;
private String name;
private String creatorUsername;
@OneToMany//eger ikiterefli elaqe qurursa JoinColumn Many hissesinde yazilmalidi
@JoinColumn(name="test_Id")
private List<Question>questions;
public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public List<Question> getQuestions() {
	return questions;
}
public void setQuestions(List<Question> questions) {
	this.questions = questions;
}
public String getCreatorUsername() {
	return creatorUsername;
}
public void setCreatorUsername(String creatorUsername) {
	this.creatorUsername = creatorUsername;
}

}
