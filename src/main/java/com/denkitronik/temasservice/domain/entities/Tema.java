package com.denkitronik.temasservice.domain.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import java.util.List;

@Entity
@Table(name = "temas")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Tema {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titulo;

    // @Column(length = 10000)
    @Lob //Mas teoría
    @Column(name = "contenido")
    private String contenido;

    private String calculadoraUrl;

    //Se usa para agregar listas como elementos simples
    @ElementCollection
    @CollectionTable(name = "tema_videos", joinColumns = @JoinColumn(name = "tema_id"))
    @Column(name = "video_url")
    private List<String> videoUrls;

    @ElementCollection
    @CollectionTable(name = "tema_imagenes", joinColumns = @JoinColumn(name = "tema_id"))
    @Column(name = "imagen_url")
    private List<String> imagenUrls;

    @ElementCollection
    @CollectionTable(name = "tema_materiales", joinColumns = @JoinColumn(name = "tema_id"))
    @Column(name = "material_url")
    private List<String> materialApoyoUrls;

    private Long moduloId;
}