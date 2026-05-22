package com.denkitronik.temasservice.domain.service;

import com.denkitronik.temasservice.domain.entities.Tema;

import java.util.List;
import java.util.Optional;

public interface TemaService {

    List<Tema> findAll();

    Optional<Tema> findById(Long id);

    Tema save(Tema tema);

    Tema update(Long id, Tema tema);

    void delete(Tema tema);
}