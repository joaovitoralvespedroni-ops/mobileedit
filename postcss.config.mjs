/**
 * Tailwind 3, e não 4, de propósito.
 *
 * Esta máquina tem uma política de controle de aplicativos que bloqueia
 * módulo nativo (.node). O Tailwind 4 depende do `@tailwindcss/oxide`, que é
 * um binário Rust sem alternativa em WebAssembly — o servidor subia e toda
 * página respondia 500. O Tailwind 3 é JavaScript puro e roda.
 *
 * É o mesmo motivo pelo qual o MonteFy usa a versão 3.
 */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
