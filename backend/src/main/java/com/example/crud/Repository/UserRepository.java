package com.example.crud.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.crud.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    Optional<User> findByName(String name);

    boolean existsByName(String name);
}