package az.developia.schoolsystem.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import az.developia.schoolsystem.model.UserModel;

public interface UserRepo extends JpaRepository<UserModel, String> {

}
