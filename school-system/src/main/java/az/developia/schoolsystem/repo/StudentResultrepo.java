package az.developia.schoolsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.schoolsystem.model.StudentResult;

public interface StudentResultrepo extends JpaRepository<StudentResult, Integer> {

}
