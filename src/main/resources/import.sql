/*INSERT INTO tema (
    titulo,
    contenido,
    calculadora_url,
    modulo_id
) VALUES
      (
          'Lógica Proposicional',
          'Introducción a las proposiciones lógicas, conectores, tablas de verdad e inferencia lógica.',
          '/calculadoras/logica',
          1
      ),
      (
          'Técnicas de Demostración',
          'Estudio de métodos de demostración matemática como demostración directa, contradicción e inducción.',
          NULL,
          1
      ),
      (
          'Teoría de Conjuntos',
          'Conceptos fundamentales de conjuntos, operaciones y diagramas de Venn.',
          '/calculadoras/conjuntos',
          1
      ),
      (
          'Álgebra Booleana',
          'Operaciones booleanas, simplificación de expresiones y aplicaciones lógicas.',
          '/calculadoras/booleana',
          1
      ),
      (
          'Principios de Conteo',
          'Reglas de la suma, producto e inclusión-exclusión aplicadas al conteo.',
          '/calculadoras/conteo',
          2
      ),
      (
          'Combinatoria',
          'Permutaciones, combinaciones y aplicaciones de análisis combinatorio.',
          '/calculadoras/combinatoria',
          2
      ),
      (
          'Sucesiones',
          'Definición y análisis de sucesiones matemáticas y recurrencias.',
          '/calculadoras/sucesiones',
          2
      ),
      (
          'Principio del Palomar',
          'Aplicación del principio del Palomar en demostraciones y problemas discretos.',
          NULL,
          2
      ),
      (
          'Aritmética Modular',
          'Operaciones con congruencias y aplicaciones de la aritmética modular.',
          '/calculadoras/modular',
          3
      ),
      (
          'Teorema del Residuo Chino',
          'Resolución de sistemas de congruencias mediante el Teorema del Residuo Chino.',
          '/calculadoras/residuo-chino',
          3
      ),
      (
          'Cifrado César',
          'Funcionamiento del algoritmo de cifrado César y desplazamiento de caracteres.',
          '/calculadoras/cifrado-cesar',
          3
      );
 */

INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (1, 'Lógica Proposicional', 'Introducción a las proposiciones lógicas: conectores, tablas de verdad e inferencia lógica. Conceptos clave: proposición, conectivo, tautología, contradicción.', '/calculadoras/logica', 1);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (2, 'Técnicas de Demostración', 'Estudio de métodos de demostración matemática como demostración directa, contradicción e inducción.', NULL, 1);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (3, 'Teoría de Conjuntos', 'Conceptos fundamentales de conjuntos, operaciones y diagramas de Venn.', '/calculadoras/conjuntos', 1);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (4, 'Álgebra Booleana', 'Operaciones booleanas, simplificación de expresiones y aplicaciones lógicas.', '/calculadoras/booleana', 1);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (5, 'Principios de Conteo', 'Reglas de la suma, producto e inclusión-exclusión aplicadas al conteo.', '/calculadoras/conteo', 2);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (6, 'Combinatoria', 'Permutaciones, combinaciones y aplicaciones de análisis combinatorio.', '/calculadoras/combinatoria', 2);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (7, 'Sucesiones', 'Definición y análisis de sucesiones matemáticas y recurrencias.', '/calculadoras/sucesiones', 2);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (8, 'Principio del Palomar', 'Aplicación del principio del Palomar en demostraciones y problemas discretos.', NULL, 2);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (9, 'Aritmética Modular', 'Operaciones con congruencias y aplicaciones de la aritmética modular.', '/calculadoras/modular', 3);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (10, 'Teorema del Residuo Chino', 'Resolución de sistemas de congruencias mediante el Teorema del Residuo Chino.', '/calculadoras/residuo-chino', 3);
INSERT INTO temas (id, titulo, contenido, calculadora_url, modulo_id) VALUES (11, 'Cifrado César', 'Funcionamiento del algoritmo de cifrado César y desplazamiento de caracteres.', '/calculadoras/cifrado-cesar', 3);

-- videos (ejemplos)
INSERT INTO tema_videos (tema_id, video_url) VALUES (1, '/videos/logica-introduccion.mp4');
INSERT INTO tema_videos (tema_id, video_url) VALUES (1, '/videos/logica-tablas-verdad.mp4');
INSERT INTO tema_videos (tema_id, video_url) VALUES (3, '/videos/conjuntos-basicos.mp4');
INSERT INTO tema_videos (tema_id, video_url) VALUES (9, '/videos/ar_modular_ejemplos.mp4');
-- imagenes (ejemplos)
INSERT INTO tema_imagenes (tema_id, imagen_url) VALUES (1, '/imagenes/logica/diagram1.png');
INSERT INTO tema_imagenes (tema_id, imagen_url) VALUES (3, '/imagenes/conjuntos/venn.png');
INSERT INTO tema_imagenes (tema_id, imagen_url) VALUES (11, '/imagenes/cifrado/cesar.png');
-- materiales de apoyo (ejemplos)
INSERT INTO tema_materiales (tema_id, material_url) VALUES (2, '/guias/demostracion-guia.pdf');
INSERT INTO tema_materiales (tema_id, material_url) VALUES (5, '/guias/conteo-ejercicios.pdf');
INSERT INTO tema_materiales (tema_id, material_url) VALUES (10, '/guias/residuo-chino-notes.pdf');