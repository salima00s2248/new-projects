package az.developia.schoolsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.schoolsystem.model.Student;

public interface StudentRepository extends JpaRepository<Student, Integer> {

}
