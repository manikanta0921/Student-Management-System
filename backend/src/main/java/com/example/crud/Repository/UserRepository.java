package com.example.crud.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.crud.Entity.User;

public interface UserRepository extends JpaRepository<User,String>{
	Optional<User> findbyuser(String user);
	boolean exsistByUsername(String user);

}