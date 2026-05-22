package com.denkitronik.temasservice.domain.repository;

import com.denkitronik.temasservice.domain.entities.Tema;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface TemaRepository extends JpaRepository<Tema, Long> {

    /**
     * Devuelve todos los temas asociados a un módulo.
     */
    List<Tema> findByModuloId(Long moduloId);

    /**
     * Devuelve una página de temas asociados a un módulo (útil para listados paginados).
     */
    Page<Tema> findByModuloId(Long moduloId, Pageable pageable);

    /**
     * Búsqueda por parte del título (case-insensitive).
     */
    List<Tema> findByTituloContainingIgnoreCase(String tituloFragment);

    /**
     * Comprueba si ya existe un tema con el mismo título dentro de un módulo,
     * útil para validar duplicados antes de crear.
     */
    boolean existsByTituloAndModuloId(String titulo, Long moduloId);

    /**
     * Opcional: obtener el tema por id (heredado de JpaRepository, aquí sólo para referencia).
     */
    @Override
    Optional<Tema> findById(Long id);
}