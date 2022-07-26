package az.developia.schoolsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.schoolsystem.model.Student;

public interface StudentRepo extends JpaRepository<Student, Integer> {

}
