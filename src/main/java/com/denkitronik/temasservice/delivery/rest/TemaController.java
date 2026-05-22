package com.denkitronik.temasservice.delivery.rest;

import com.denkitronik.temasservice.domain.entities.Tema;
import com.denkitronik.temasservice.domain.service.TemaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/${api.version}/temas-service")
@CrossOrigin(origins = {"http://localhost:4200"})
@RequiredArgsConstructor
public class TemaController {

    private final TemaService temaService;

    @GetMapping("/temas")
    public ResponseEntity<List<Tema>> listarTemas() {
        List<Tema> temas = temaService.findAll();
        return ResponseEntity.ok(temas);
    }

    @GetMapping("/temas/{id}")
    public ResponseEntity<?> buscarTema(@PathVariable Long id) {
        Optional<Tema> tema = temaService.findById(id);
        if (tema.isPresent()) {
            return ResponseEntity.ok(tema.get());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping("/temas")
    public ResponseEntity<Tema> crearTema(@RequestBody Tema tema) {
        Tema nuevo = temaService.save(tema);
        return ResponseEntity.status(HttpStatus.CREATED).body(nuevo);
    }

    @PutMapping("/temas/{id}")
    public ResponseEntity<Tema> actualizarTema(@PathVariable Long id, @RequestBody Tema tema) {
        if (temaService.findById(id).isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        Tema actualizado = temaService.update(id, tema);
        return ResponseEntity.ok(actualizado);
    }

    @DeleteMapping("/temas")
    public ResponseEntity<Void> eliminarTema(@RequestBody Tema tema) {
        temaService.delete(tema);
        return ResponseEntity.noContent().build();
    }
}