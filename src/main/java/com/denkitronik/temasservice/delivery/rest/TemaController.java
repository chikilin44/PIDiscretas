package com.denkitronik.temasservice.delivery.rest;

import com.denkitronik.temasservice.domain.entities.Tema;
import com.denkitronik.temasservice.domain.service.TemaService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

/**
 * Controlador REST simplificado: delega la lógica al servicio de dominio.
 * Las excepciones de dominio (p. ej. TemaNotFoundException) se lanzan desde el servicio.
 */
@RestController
@RequestMapping("/api/${api.version}/temas-service")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class TemaController {

    private final TemaService temaService;

    // GET paginado: devuelve Page<Tema>
    @GetMapping("/temas")
    public ResponseEntity<Page<Tema>> listarTemas(Pageable pageable) {
        Page<Tema> page = temaService.findAll(pageable);
        return ResponseEntity.ok(page);
    }

    // GET todos (sin paginar)
    @GetMapping("/temas/todos")
    public ResponseEntity<List<Tema>> listarTodos() {
        return ResponseEntity.ok(temaService.findAll());
    }

    // GET por id: si no existe, el servicio lanza TemaNotFoundException
    @GetMapping("/temas/{id}")
    public ResponseEntity<Tema> obtenerTema(@PathVariable Long id) {
        Tema tema = temaService.findById(id);
        return ResponseEntity.ok(tema);
    }

    // POST crea un tema; validación aplicada con @Valid
    @PostMapping("/temas")
    public ResponseEntity<Tema> crearTema(@Valid @RequestBody Tema tema) {
        Tema creado = temaService.save(tema);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(creado.getId())
                .toUri();
        return ResponseEntity.created(location).body(creado);
    }

    // PUT actualiza un tema; la verificación de existencia y errores están en el servicio
    @PutMapping("/temas/{id}")
    public ResponseEntity<Tema> actualizarTema(@PathVariable Long id, @Valid @RequestBody Tema tema) {
        Tema actualizado = temaService.update(id, tema);
        return ResponseEntity.ok(actualizado);
    }

    // DELETE elimina un tema; el servicio lanza TemaNotFoundException si no existe
    @DeleteMapping("/temas/{id}")
    public ResponseEntity<Void> eliminarTema(@PathVariable Long id) {
        temaService.delete(id);
        return ResponseEntity.noContent().build();
    }
}