package com.denkitronik.temasservice.domain.service;

import com.denkitronik.temasservice.domain.entities.Tema;
import com.denkitronik.temasservice.domain.repository.TemaRepository;
import com.denkitronik.temasservice.domain.service.TemaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class TemaServiceImpl implements TemaService {

    private final TemaRepository temaRepository;

    @Override
    public List<Tema> findAll() {
        return temaRepository.findAll();
    }

    @Override
    public Optional<Tema> findById(Long id) {
        return temaRepository.findById(id);
    }

    @Override
    public Tema save(Tema tema) {
        return temaRepository.save(tema);
    }

    @Override
    public Tema update(Long id, Tema tema) {
        Tema temaActual = temaRepository.findById(id).orElseThrow();

        temaActual.setTitulo(tema.getTitulo());
        temaActual.setContenido(tema.getContenido());
        temaActual.setCalculadoraUrl(tema.getCalculadoraUrl());
        temaActual.setVideoUrls(tema.getVideoUrls());
        temaActual.setImagenUrls(tema.getImagenUrls());
        temaActual.setMaterialApoyoUrls(tema.getMaterialApoyoUrls());
        temaActual.setModuloId(tema.getModuloId());

        return temaRepository.save(temaActual);
    }

    @Override
    public void delete(Tema tema) {
        temaRepository.delete(tema);
    }
}