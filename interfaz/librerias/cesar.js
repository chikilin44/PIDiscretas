const Cesar = {

  cifrar(texto, desplazamiento) {

    return texto.split('').map(c => {

      const code = c.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(
          ((code - 65 + desplazamiento + 26) % 26) + 65
        );
      }

      if (code >= 97 && code <= 122) {
        return String.fromCharCode(
          ((code - 97 + desplazamiento + 26) % 26) + 97
        );
      }

      return c;

    }).join('');
  },

  descifrar(texto, desplazamiento) {
    return this.cifrar(texto, -desplazamiento);
  }

};
