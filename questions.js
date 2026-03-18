const questions = [
    // ============================================================
    // INTRODUCCIÓN / STEM  (Q1–Q12)  ~12 %
    // ============================================================
    {
        category: "Introducción / STEM",
        question: "¿Qué representa el caso de un iPhone último modelo?",
        options: [
            "Es un teléfono celular y nada más.",
            "Es expresión y representación de nuestros avances científicos más nuevos.",
            "Es un producto de lujo sin relación con la ciencia.",
            "Es una herramienta exclusiva para programadores."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué es STEM? (por sus siglas en inglés)",
        options: [
            "Sociedad, Técnica, Economía y Matemáticas.",
            "Ciencia, Tecnología, Ecología y Medición.",
            "Ciencia, Tecnología, Ingeniería y Matemáticas.",
            "Sistemas, Telecomunicaciones, Electrónica y Mecánica."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué relevancia tiene el modelo educativo STEM en nuestros días?",
        options: [
            "Es el enfoque capaz de crear la base de todo avance tecnológico: la innovación.",
            "Solo es útil para quienes quieren ser científicos profesionales.",
            "Es un modelo obsoleto reemplazado por la inteligencia artificial.",
            "Únicamente sirve para estudiantes de universidades de primer mundo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Cómo está ligada la tecnología con el código (lenguajes de programación)?",
        options: [
            "El código es el lenguaje que habla nuestra tecnología.",
            "El código es una clave que se usa para desbloquear nuestra tecnología.",
            "El código es una ley universal que rige a toda la tecnología.",
            "El código es un idioma que solo hablan los robots."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Por qué es importante que los jóvenes se involucren en STEM?",
        options: [
            "Porque STEM garantiza obtener un salario alto inmediatamente.",
            "Porque la innovación derivada de STEM impulsa el desarrollo económico y social.",
            "Porque sin STEM no se puede acceder a redes sociales.",
            "Porque STEM es obligatorio para graduarse de la preparatoria."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué organismo internacional evalúa la competencia científica de estudiantes de 15 años mediante pruebas estandarizadas?",
        options: [
            "La UNESCO mediante el programa PIRLS.",
            "La OCDE mediante el programa PISA.",
            "La ONU mediante el programa STEM Global.",
            "La OMS mediante el programa Health Literacy."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "Según el libro, ¿cuál es la base de los avances tecnológicos más importantes de hoy?",
        options: [
            "La creatividad artística y el diseño gráfico.",
            "Las leyes y principios que ofrece la ciencia.",
            "La producción industrial en masa.",
            "La inversión de las grandes empresas tecnológicas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Cuáles son los rubros principales que deben enfocarse para crear innovación según el enfoque STEM?",
        options: [
            "Ciencia, Tecnología, Ingeniería y Matemáticas.",
            "Arte, Filosofía, Historia y Literatura.",
            "Comercio, Finanzas, Economía y Política.",
            "Deportes, Salud, Nutrición y Bienestar."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué porcentaje del ADN comparten los seres humanos con los chimpancés?",
        options: [
            "Aproximadamente el 75%.",
            "Aproximadamente el 85%.",
            "Casi el 99%.",
            "Exactamente el 100%."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué se necesita para que un planeta alienígena tenga posibilidad de albergar vida?",
        options: [
            "Tener anillos como Saturno y una luna grande.",
            "Elementos primarios (H, O, C, N) y estar en la zona habitable de su estrella.",
            "Tener agua en estado sólido y una atmósfera de nitrógeno puro.",
            "Estar lo más cerca posible de un agujero negro."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué es un estándar tecnológico?",
        options: [
            "Un producto de marca registrada.",
            "Una versión de software o hardware que regula la evolución de la tecnología.",
            "Un precio fijo para los dispositivos electrónicos.",
            "Una ley gubernamental que prohíbe ciertos dispositivos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Introducción / STEM",
        question: "¿Qué es IoT (Internet of Things)?",
        options: [
            "Un nuevo tipo de procesador para computadoras.",
            "La integración de cosas cotidianas al internet para información y productividad.",
            "Un lenguaje de programación para robots.",
            "Un sistema de seguridad exclusivo para empresas."
        ],
        answer: 1,
        points: 1
    },

    // ============================================================
    // CAPÍTULO 1 — CIENCIA  (Q13–Q45)  ~33 %
    // ============================================================
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué sucedió en el Big Bang según la cosmología moderna?",
        options: [
            "Un meteorito gigante chocó con la Tierra.",
            "Todo el espacio, tiempo, materia y energía surgieron de un solo evento.",
            "Dos galaxias colisionaron y formaron el universo.",
            "El Sol explotó y creó todos los planetas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Hace aproximadamente cuántos años ocurrió el Big Bang?",
        options: [
            "4,500 millones de años.",
            "10,000 millones de años.",
            "13,800 millones de años.",
            "20,000 millones de años."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es el espacio-tiempo según la teoría de Einstein?",
        options: [
            "Es un modelo que une las tres dimensiones del espacio con el tiempo como una cuarta dimensión.",
            "Es la distancia entre la Tierra y el Sol medida en horas luz.",
            "Es un tipo de materia oscura que llena el universo.",
            "Es la velocidad a la que se desplaza la luz en el vacío."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué efecto tiene la gravedad sobre el espacio-tiempo?",
        options: [
            "Lo destruye por completo.",
            "No tiene ningún efecto, la gravedad es solo una fuerza.",
            "Lo curva; a mayor masa, mayor curvatura.",
            "Lo expande uniformemente en todas direcciones."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué establece la Ley de Gravitación Universal de Newton?",
        options: [
            "Que la gravedad solo existe dentro de la atmósfera terrestre.",
            "Que a mayor masa hay más gravedad y a menor distancia hay mayor atracción.",
            "Que la gravedad es una consecuencia de la carga eléctrica de los cuerpos.",
            "Que los objetos más pequeños siempre orbitan a los más grandes."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué son los átomos?",
        options: [
            "Son las unidades más pequeñas de información digital.",
            "Son los bloques de construcción fundamentales de toda la materia.",
            "Son partículas que solo existen en el Sol.",
            "Son moléculas que forman el ADN exclusivamente."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cuáles son las tres partículas subatómicas principales de un átomo?",
        options: [
            "Fotones, quarks y neutrinos.",
            "Protones, neutrones y electrones.",
            "Iones, isótopos y moléculas.",
            "Bosones, fermiones y leptones."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué determina la identidad de un elemento químico?",
        options: [
            "El número de electrones en su capa exterior.",
            "El número de protones en su núcleo (número atómico).",
            "La cantidad de neutrones en su núcleo.",
            "Su peso molecular y estado de la materia."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cuáles son los cuatro elementos más abundantes en el universo?",
        options: [
            "Oro, Plata, Platino y Diamante.",
            "Hidrógeno, Helio, Oxígeno y Carbono.",
            "Hierro, Niquel, Cobre y Zinc.",
            "Nitrógeno, Fósforo, Azufre y Cloro."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué son los isótopos?",
        options: [
            "Elementos que cambian de estado sólido a líquido.",
            "Versiones de elementos con diferente número de neutrones, algunos son inestables y radiactivos.",
            "Átomos que han perdido todos sus electrones.",
            "Moléculas formadas por dos elementos diferentes."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cómo se forma una estrella?",
        options: [
            "Por la colisión de dos planetas gigantes.",
            "Por la acumulación gravitacional de gas (principalmente hidrógeno) en nebulosas.",
            "Por erupciones volcánicas en el espacio.",
            "Por la explosión de agujeros negros."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué proceso genera la energía en el interior de las estrellas?",
        options: [
            "La combustión de oxígeno e hidrógeno.",
            "La fusión nuclear, donde átomos de hidrógeno se fusionan para formar helio.",
            "La fisión nuclear de elementos pesados como el uranio.",
            "Las reacciones químicas entre gases de la nebulosa."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué sucede cuando una estrella masiva agota su combustible nuclear?",
        options: [
            "Se apaga lentamente sin ningún efecto notable.",
            "Puede explotar como supernova, dejando una estrella de neutrones o un agujero negro.",
            "Se convierte directamente en un planeta.",
            "Se congela y se vuelve un cometa."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es el espectro electromagnético?",
        options: [
            "Un dispositivo para medir la temperatura de las estrellas.",
            "El rango completo de todas las frecuencias de radiación electromagnética.",
            "Solo la luz visible que nuestros ojos perciben.",
            "Un tipo de energía exclusiva de los rayos X."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cuál de las siguientes es radiación electromagnética NO ionizante (no dañina)?",
        options: [
            "Rayos Gamma.",
            "Rayos X.",
            "Ondas de radio.",
            "Rayos ultravioleta."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿La relación entre frecuencia y energía en una onda electromagnética es…?",
        options: [
            "Inversa: a mayor frecuencia, menor energía.",
            "Directa: a mayor frecuencia, mayor energía.",
            "No existe relación entre frecuencia y energía.",
            "Solo aplica para la luz visible, no para otras ondas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cuáles son los tres estados clásicos de la materia?",
        options: [
            "Sólido, líquido y gaseoso.",
            "Sólido, plasma y vacío.",
            "Líquido, gaseoso y magnético.",
            "Plasma, Bose-Einstein y superfluido."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cuál es la velocidad de la luz en el vacío?",
        options: [
            "150,000 km/s.",
            "300,000 km/s (aproximadamente).",
            "500,000 km/s.",
            "1,000,000 km/s."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué establece la famosa ecuación E = mc²?",
        options: [
            "Que la energía de un objeto depende de su velocidad al cuadrado.",
            "Que la masa y la energía son equivalentes y pueden convertirse una en otra.",
            "Que la luz viaja más rápido en el agua que en el vacío.",
            "Que la energía se destruye cuando un objeto alcanza la velocidad de la luz."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es la energía oscura?",
        options: [
            "La energía que producen los agujeros negros al destruir materia.",
            "Una fuerza misteriosa que provoca la expansión acelerada del universo (~70% del universo).",
            "La energía producida por estrellas apagadas o muertas.",
            "Un tipo de radiación gamma que no es visible."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué fue confirmado por Perlmutter, Schmidt y Riess (Premio Nobel 2011)?",
        options: [
            "La existencia del bosón de Higgs.",
            "La existencia de los efectos de la energía oscura al observar supernovas distantes.",
            "La composición exacta de la materia oscura.",
            "La velocidad de la luz como límite universal."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es la materia oscura?",
        options: [
            "Materia que es oscura porque no refleja luz, como el carbón.",
            "Materia que ejerce gravedad sobre la materia visible pero no puede ser detectada de otra manera.",
            "Materia que existe solo dentro de los agujeros negros.",
            "Un tipo de gas oscuro que llena el espacio entre galaxias."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es el bosón de Higgs, confirmado en 2012 por el CERN?",
        options: [
            "Una partícula que viaja más rápido que la luz.",
            "La partícula que otorga masa a las demás partículas por medio del campo de Higgs.",
            "Un tipo de átomo que forma la materia oscura.",
            "El componente principal de los rayos gamma."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Cuáles son los cinco pasos básicos del método científico?",
        options: [
            "Imaginar, suponer, adivinar, leer y creer.",
            "Observación, medición, experimentación, formulación de hipótesis, y análisis.",
            "Copiar, pegar, buscar en internet, resumir y publicar.",
            "Planificar, diseñar, construir, financiar y vender."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es una muestra de control en un experimento?",
        options: [
            "El grupo que recibe el tratamiento experimental principal.",
            "Un grupo que se utiliza como referencia comparativa, sin aplicar la variable de prueba.",
            "La cantidad mínima de participantes para que un experimento sea válido.",
            "El instrumento de medición utilizado en el laboratorio."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "Según la Relatividad General, ¿qué es la gravedad?",
        options: [
            "Una fuerza magnética entre objetos cargados eléctricamente.",
            "Una consecuencia de la curvatura del espacio-tiempo por la masa.",
            "Una fuerza que solo actúa dentro de la atmósfera terrestre.",
            "La repulsión entre partículas subatómicas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué problemas teóricos existen con la gravedad según el libro?",
        options: [
            "Sabemos exactamente cómo se produce la gravedad.",
            "Sabemos cómo funciona pero no sabemos qué la origina.",
            "La gravedad no existe, es solo una ilusión óptica.",
            "La gravedad solo funciona a distancias menores a 100 metros."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "La Ley de Conservación de la Masa y la Energía establece que:",
        options: [
            "La masa y la energía se crean y destruyen constantemente.",
            "La masa y la energía no se crean ni se destruyen, solo se transforman.",
            "Solo la masa se conserva; la energía siempre se pierde.",
            "La conservación solo aplica en el vacío del espacio."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué son las WIMPs mencionadas como posible composición de la materia oscura?",
        options: [
            "Partículas de luz visible de alta energía.",
            "Partículas Masivas que Interactúan Débilmente (Weakly Interacting Massive Particles).",
            "Ondas electromagnéticas de baja frecuencia.",
            "Estrellas enanas blancas muy pequeñas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué observatorio espacial de la NASA identificó miles de millones de exoplanetas del tamaño de la Tierra?",
        options: [
            "El telescopio Hubble.",
            "El satélite Kepler.",
            "La Estación Espacial Internacional (ISS).",
            "El radiotelescopio ALMA."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué son las constantes universales en física?",
        options: [
            "Valores numéricos que se inventan para cada experimento.",
            "Valores fijos que no cambian y gobiernan las leyes de la física en todo el universo.",
            "Temperaturas que mantienen estable la materia.",
            "Ecuaciones que solo funcionan en la Tierra."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué es la dilatación del tiempo según la relatividad?",
        options: [
            "El tiempo corre igual en todos los marcos de referencia.",
            "El tiempo puede transcurrir más lento o más rápido dependiendo de la velocidad o la gravedad.",
            "El tiempo solo se detiene dentro de los agujeros negros.",
            "Es un concepto artístico sin base científica."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.1 — Ciencia",
        question: "¿Qué dijo Einstein cuando publicaron 'Cien autores en contra de Einstein'?",
        options: [
            "\"¡Tengo más enemigos que amigos!\"",
            "\"¿Por qué cien? Si estuviera equivocado, bastaría con solo uno.\"",
            "\"Cien no son suficientes, necesitarían millones.\"",
            "\"No me importa la opinión de nadie.\""
        ],
        answer: 1,
        points: 1
    },

    // ============================================================
    // CAPÍTULO 2 — TECNOLOGÍA  (Q46–Q85)  ~40 %
    // ============================================================

    // --- 2.1 Tecnologías Inalámbricas ---
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Cuáles son las tres principales tecnologías de comunicación inalámbrica de corto alcance?",
        options: [
            "Satélite, radio FM y cable coaxial.",
            "Red Celular, WiFi y Bluetooth.",
            "Fibra óptica, Ethernet y USB.",
            "NFC, infrarrojo y HDMI."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Cuál fue la primera generación de red celular (1G) y qué operador la desplegó en 1979?",
        options: [
            "AT&T en Nueva York, red digital GSM.",
            "NTT en Tokio, red analógica AMPS.",
            "Verizon en Los Angeles, red CDMA.",
            "Telcel en Ciudad de México, red LTE."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Qué avance de seguridad trajo la segunda generación (2G/GSM)?",
        options: [
            "Permitió videollamadas encriptadas por primera vez.",
            "Pasó de señales analógicas a digitales, permitiendo encriptar voz y datos.",
            "Eliminó la necesidad de antenas físicas.",
            "Introdujo la tecnología de fibra óptica en los celulares."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Qué velocidad teórica promete la tecnología 5G comparada con 4G LTE?",
        options: [
            "El doble de velocidad que 4G LTE.",
            "5 veces más rápido que 4G LTE.",
            "Hasta 50 veces las capacidades de 4G LTE.",
            "La misma velocidad pero con menor latencia."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Cuáles son los dos tipos de 5G?",
        options: [
            "5G Basic y 5G Premium.",
            "5G mmWave (ultra-rápido) y 5G sub-6GHz.",
            "5G Indoor y 5G Outdoor.",
            "5G Voice y 5G Data."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Qué organismo creó el estándar WiFi?",
        options: [
            "La FCC (Federal Communications Commission).",
            "El Wi-Fi Alliance, formado por 3Com, Nokia y otras empresas.",
            "El IEEE exclusivamente sin ayuda de la industria.",
            "Apple y Google de forma conjunta."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Qué es la paradoja de frecuencia-energía en las comunicaciones inalámbricas?",
        options: [
            "Las frecuencias más altas viajan más lejos porque tienen más energía.",
            "Las frecuencias más altas tienen más energía pero en la atmósfera llegan menos lejos.",
            "Todas las frecuencias llegan igual de lejos sin importar su energía.",
            "Las frecuencias bajas son más rápidas que las altas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Tecnologías Inalámbricas",
        question: "¿Qué característica principal tiene el Bluetooth frente a WiFi y Red Celular?",
        options: [
            "Mayor velocidad de transferencia de datos.",
            "Mayor alcance de señal.",
            "Menor consumo de energía, ideal para conexiones continuas.",
            "Mayor capacidad de encriptación de datos."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.2 — Seguridad de Redes",
        question: "¿Qué tipo de cifrado WiFi es considerado obsoleto y fácilmente hackeable?",
        options: [
            "WPA3.",
            "WPA2 con AES.",
            "WEP (Wired Equivalent Privacy).",
            "SSL/TLS."
        ],
        answer: 2,
        points: 1
    },

    // --- 2.2 Pantallas ---
    {
        category: "Cap.2 — Pantallas",
        question: "¿Cuál es la principal diferencia entre una pantalla OLED y una LCD?",
        options: [
            "OLED es más pesada que LCD.",
            "OLED no requiere luz de fondo; cada píxel emite luz propia, logrando negros profundos.",
            "LCD produce mejor contraste que OLED en todos los casos.",
            "OLED solo muestra imágenes en blanco y negro."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Pantallas",
        question: "¿Qué tecnología de pantalla es considerada obsoleta y usaba un haz de rayos catódicos?",
        options: [
            "LCD.",
            "OLED.",
            "CRT (Cathode Ray Tube).",
            "MicroLED."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.2 — Pantallas",
        question: "¿Qué significan las siglas RGB en tecnología de pantallas?",
        options: [
            "Rapid Graphics Bandwidth.",
            "Red, Green, Blue (Rojo, Verde, Azul).",
            "Resolution, Gamma, Brightness.",
            "Real Graphics Boost."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Pantallas",
        question: "¿Qué resolución tiene una pantalla FullHD?",
        options: [
            "720 × 480 píxeles.",
            "1280 × 720 píxeles.",
            "1920 × 1080 píxeles (más de 2 millones de píxeles).",
            "3840 × 2160 píxeles."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cap.2 — Pantallas",
        question: "¿Qué son los Quantum Dots (qDOT) en tecnología de pantallas?",
        options: [
            "Diminutos LEDs que se colocan detrás de un panel OLED.",
            "Partículas fotosensibles que mejoran los colores y el contraste en pantallas LCD.",
            "Cristales que al romperse generan una imagen holográfica.",
            "Circuitos especiales que aumentan la velocidad del procesador."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Pantallas",
        question: "¿Qué es la tasa de refresco de una pantalla y cuál es la recomendada?",
        options: [
            "La velocidad a la que se enciende la pantalla; 30Hz es suficiente.",
            "Las veces por segundo que se refresca la imagen; 120Hz es lo mínimo recomendado.",
            "El brillo máximo de la pantalla; 500 nits es lo recomendado.",
            "La cantidad de colores que puede reproducir; 1 millón es lo estándar."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.3 Óptica y Sensores de Imagen ---
    {
        category: "Cap.2 — Óptica",
        question: "¿Qué tipo de sensor de imagen se usa más en teléfonos inteligentes actuales?",
        options: [
            "CCD (Charge-Coupled Device).",
            "CMOS (Complementary Metal-Oxide Semiconductor).",
            "Sensores de rayos X.",
            "Sensores infrarrojos térmicos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Óptica",
        question: "¿Qué es OIS en una cámara de teléfono?",
        options: [
            "Online Image Storage, almacenamiento de imágenes en la nube.",
            "Optical Image Stabilization, estructuras mecánicas para compensar movimientos.",
            "Optimized Image Software, un programa de edición automática.",
            "Original Image Sensor, el sensor principal de la cámara."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Óptica",
        question: "¿Qué es un láser según su acrónimo?",
        options: [
            "Large Amplified Signal for Electronic Radiation.",
            "Light Amplified by Stimulated Emission of Radiation.",
            "Linear Accelerated System for Energy Release.",
            "Luminous Array of Synchronized Electromagnetic Rays."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Óptica",
        question: "¿Qué es el sistema LIDAR y para qué se usa?",
        options: [
            "Un sistema de comunicación por láser para satélites.",
            "Un radar láser que mide distancias; se usa en autos autónomos.",
            "Un tipo de pantalla holográfica.",
            "Un método de cifrado de datos por medio de luz."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Óptica",
        question: "¿Qué tipos de células fotorreceptoras existen en la retina del ojo humano?",
        options: [
            "Cilios y flagelos.",
            "Bastones (detectan luz/figuras) y conos (detectan colores RGB).",
            "Neuronas y glóbulos rojos.",
            "Cristalinos y córneas."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.4 Procesadores ---
    {
        category: "Cap.2 — Procesadores",
        question: "¿Qué es un SoC (System on a Chip)?",
        options: [
            "Un dispositivo de almacenamiento externo.",
            "Un circuito integrado que contiene CPU, GPU, ISP y otros componentes en un solo chip.",
            "Un tipo de cable que conecta periféricos al computador.",
            "Un formato de compresión de software."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Procesadores",
        question: "¿Qué predice la Ley de Moore?",
        options: [
            "Que el precio de los procesadores se duplica cada año.",
            "Que cada dos años se dobla el número de transistores en los procesadores.",
            "Que las pantallas serán holográficas para 2030.",
            "Que la velocidad de internet se triplica cada cinco años."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Procesadores",
        question: "¿Qué sucede cuando un procesador se sobrecalienta?",
        options: [
            "Se apaga permanentemente y no se puede recuperar.",
            "Presenta 'retrasos en transmisión' y su rendimiento se ve afectado.",
            "Aumenta su velocidad para compensar la temperatura.",
            "Cambia automáticamente a un procesador de reserva."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Procesadores",
        question: "¿Qué es la litografía en la fabricación de procesadores?",
        options: [
            "Un arte de impresión manual usado en la industria gráfica.",
            "Una técnica que graba los cables y transistores del chip usando luz UV en silicio.",
            "Un proceso químico para limpiar los chips defectuosos.",
            "Un método de empaquetado de los procesadores en cajas."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.5 Memoria y Almacenamiento ---
    {
        category: "Cap.2 — Memoria",
        question: "¿Cuál es la diferencia principal entre memoria RAM y almacenamiento (SSD/HDD)?",
        options: [
            "La RAM es más lenta pero almacena más datos.",
            "La RAM es volátil (pierde datos al apagarse), el almacenamiento es permanente.",
            "No hay diferencia; RAM y SSD son exactamente lo mismo.",
            "El almacenamiento está dentro del procesador; la RAM está fuera."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Memoria",
        question: "¿Qué ventaja tiene un SSD sobre un HDD (disco duro)?",
        options: [
            "El SSD es más barato que un HDD en todas las capacidades.",
            "El SSD es más rápido, silencioso, resistente a golpes y consume menos energía.",
            "El SSD tiene partes mecánicas que lo hacen más duradero.",
            "El HDD es más rápido porque usa tecnología magnética."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Memoria",
        question: "¿Qué significa DDR en 'DDR4 SDRAM'?",
        options: [
            "Digital Data Recovery.",
            "Double Data Rate (tasa de datos doble).",
            "Dynamic Drive Replication.",
            "Direct Display Rendering."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.6 Sensores ---
    {
        category: "Cap.2 — Sensores",
        question: "¿Qué es un MEMS?",
        options: [
            "Un tipo de pantalla para dispositivos médicos.",
            "Un Sistema Microelectromecánico usado en giroscopios y acelerómetros miniaturizados.",
            "Un protocolo de comunicación para sensores industriales.",
            "Un lenguaje de programación para robots."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Sensores",
        question: "¿Cómo funciona el sistema FaceID de Apple?",
        options: [
            "Toma una fotografía 2D y la compara con una imagen guardada.",
            "Proyecta 30,000 puntos de luz infrarroja para crear un mapa 3D del rostro.",
            "Usa la huella dactilar para verificar la identidad del usuario.",
            "Escanea el iris del ojo con un láser rojo visible."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Sensores",
        question: "¿Qué mide el sensor de presión barométrica en un teléfono inteligente?",
        options: [
            "La presión del dedo sobre la pantalla táctil.",
            "La presión atmosférica para apoyar funciones como GPS y detección de pisos.",
            "La presión del agua cuando el teléfono se sumerge.",
            "La presión interna de la batería para evitar explosiones."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.7 Baterías ---
    {
        category: "Cap.2 — Baterías",
        question: "¿Qué tecnología de batería se usa en los smartphones actuales?",
        options: [
            "Pilas alcalinas recargables.",
            "Baterías de iones de litio (Li-ion).",
            "Células de combustible de hidrógeno.",
            "Baterías de plomo-ácido miniaturizadas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Baterías",
        question: "¿Qué daño puede causar descargar totalmente un dispositivo con batería Li-ion y dejarlo así?",
        options: [
            "Ninguno; es recomendable descargar al 0% regularmente.",
            "Produce daños permanentes en la capacidad de la batería.",
            "Solo afecta si la temperatura es mayor a 50°C.",
            "Reinicia la configuración de fábrica del dispositivo."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Baterías",
        question: "¿Cuál es la ventaja principal de las celdas de combustible (Fuel Cells) sobre los motores de combustión?",
        options: [
            "Son más baratas de producir actualmente.",
            "Mayor eficiencia energética (40-85% vs 20-30%) y solo emiten vapor de agua.",
            "Funcionan con gasolina convencional.",
            "No necesitan ningún mantenimiento."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Baterías",
        question: "¿Dónde se encuentra una de las reservas más grandes de litio del mundo?",
        options: [
            "En Alaska, Estados Unidos.",
            "En el estado de Sonora, México y el 'Triángulo del Litio' (Perú, Argentina, Chile).",
            "Exclusivamente en minas de Australia.",
            "En la Antártida bajo el hielo."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.8 Materiales y Nanotecnología ---
    {
        category: "Cap.2 — Materiales",
        question: "¿Qué es la nanotecnología?",
        options: [
            "Una tecnología que solo funciona en el espacio exterior.",
            "La manipulación de átomos o moléculas con fines industriales, médicos y tecnológicos.",
            "Un tipo de software para diseño gráfico a escala microscópica.",
            "Una técnica de producción de alimentos genéticamente modificados."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Materiales",
        question: "¿Qué propiedades tienen los nanotubos de carbono (CNTs)?",
        options: [
            "Son frágiles y pesados, pero buenos conductores.",
            "Son 100 veces más resistentes que el acero y 6 veces más livianos.",
            "Son transparentes y rígidos como el diamante.",
            "Son flexibles pero no conducen electricidad."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Materiales",
        question: "¿Qué es el grafeno?",
        options: [
            "Un tipo de plástico biodegradable.",
            "Una lámina de un átomo de carbono de espesor, 200 veces más resistente que el acero, flexible y conductora.",
            "Un metal líquido usado en pantallas flexibles.",
            "Un material exclusivo para la industria aeroespacial."
        ],
        answer: 1,
        points: 1
    },

    // --- 2.9 Nano-Bio y Genética ---
    {
        category: "Cap.2 — Nano-Bio",
        question: "¿Qué es CRISPR-Cas9?",
        options: [
            "Un tipo de procesador cuántico para inteligencia artificial.",
            "Un método para editar los genomas de organismos vivos, cortando el ADN en ubicaciones específicas.",
            "Un protocolo de comunicación entre dispositivos IoT.",
            "Una técnica de impresión 3D a nivel molecular."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Nano-Bio",
        question: "¿Qué logró el Proyecto Genoma Humano completado en 2005?",
        options: [
            "Crear un ser humano artificial en el laboratorio.",
            "Secuenciar aproximadamente 28,000 genes contenidos en nuestros 23 pares de cromosomas.",
            "Reprogramar el ADN humano para eliminar todas las enfermedades.",
            "Descubrir que los humanos tienen 46 pares de cromosomas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.2 — Nano-Bio",
        question: "¿Qué porcentaje de nuestro ADN no tiene función conocida según los científicos?",
        options: [
            "Aproximadamente el 25%.",
            "Casi el 90% es considerado 'ADN basura' sin función clara.",
            "Menos del 5%.",
            "El 100% tiene función conocida."
        ],
        answer: 1,
        points: 1
    },

    // ============================================================
    // CAPÍTULO 3 — PROGRAMACIÓN  (Q86–Q100)  ~15 %
    // ============================================================
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es un algoritmo en programación?",
        options: [
            "Un tipo de virus informático que se propaga por redes.",
            "Un conjunto de pasos o procesos a seguir para dar solución a un problema.",
            "El nombre de un lenguaje de programación avanzado.",
            "Una fórmula matemática exclusiva para inteligencia artificial."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Cuáles son los tres lenguajes mínimos necesarios para crear un sitio web?",
        options: [
            "Python, Java y C++.",
            "HTML (estructura), CSS (diseño) y JavaScript (interactividad).",
            "Swift, Kotlin y Ruby.",
            "SQL, PHP y Angular."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es el front-end y el back-end en el desarrollo web?",
        options: [
            "Front-end es la parte visual en el navegador; back-end es el código que corre en el servidor.",
            "Front-end es el hardware; back-end es el software.",
            "Front-end es el diseño de la base de datos; back-end es la interfaz.",
            "No hay diferencia; ambos se refieren a lo mismo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es un API (Application Programming Interface)?",
        options: [
            "Un tipo de hardware para conectar periféricos al computador.",
            "Un conjunto de funciones predefinidas que permite integrar servicios externos como Google Maps o PayPal.",
            "Un lenguaje de programación exclusivo para aplicaciones móviles.",
            "Un antivirus que protege las aplicaciones web."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es el DOM (Document Object Model)?",
        options: [
            "Un tipo de archivo de imagen usado en diseño web.",
            "El modelo que representa una página web como un árbol de objetos manipulables.",
            "Un protocolo de seguridad para transmisión de datos.",
            "Un lenguaje de programación alternativo a JavaScript."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Por qué JavaScript es el lenguaje de programación más popular del mundo?",
        options: [
            "Porque es el más difícil de aprender y solo lo usan expertos.",
            "Porque se ejecuta dentro de un navegador web, funciona en cualquier dispositivo y es muy versátil.",
            "Porque fue el primer lenguaje de programación inventado.",
            "Porque es propiedad exclusiva de Google."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué diferencia hay entre un lenguaje compilado y uno interpretado?",
        options: [
            "Los compilados son más lentos y los interpretados son más rápidos.",
            "Los compilados generan código máquina directamente; los interpretados necesitan un traductor como un navegador.",
            "No hay diferencia; todos los lenguajes son iguales.",
            "Los interpretados solo funcionan en computadoras Mac."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué protocolo permite la comunicación entre cliente y servidor en internet?",
        options: [
            "FTP (File Transfer Protocol).",
            "HTTP (HyperText Transfer Protocol).",
            "DNS (Domain Name System).",
            "SMTP (Simple Mail Transfer Protocol)."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es el patrón de arquitectura MVC (Modelo-Vista-Controlador)?",
        options: [
            "Un tipo de cable para conectar monitores.",
            "Un patrón que separa la aplicación en Modelo (datos), Vista (interfaz) y Controlador (intermediario).",
            "Un formato de compresión de video.",
            "Un sistema de archivos para bases de datos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es React.js?",
        options: [
            "Un lenguaje de programación independiente creado por Google.",
            "Una librería de JavaScript creada por Facebook para desarrollar interfaces de usuario.",
            "Un sistema operativo para servidores web.",
            "Un protocolo de seguridad para transacciones bancarias."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es Machine Learning?",
        options: [
            "Un programa que permite a las máquinas repararse físicamente solas.",
            "Un subcampo de la IA donde las computadoras mejoran automáticamente a través de la experiencia con datos.",
            "El manual de usuario que viene con cada computadora nueva.",
            "Un tipo de hardware especializado para videojuegos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es Git en el mundo de la programación?",
        options: [
            "Un lenguaje de programación para bases de datos.",
            "Un software de control de versiones que permite rastrear cambios y colaborar en código.",
            "Un tipo de servidor web de alta velocidad.",
            "Un editor de texto para diseño gráfico."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué son las variables en programación?",
        options: [
            "Funciones que eliminan datos de la memoria.",
            "Espacios que reservan un lugar en la memoria de la computadora para guardar datos.",
            "Instrucciones que apagan el procesador temporalmente.",
            "Programas que se ejecutan solo una vez y luego se borran."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué tipos de aplicaciones móviles existen?",
        options: [
            "Solo aplicaciones nativas, no hay otro tipo.",
            "Apps web, apps nativas y apps híbridas.",
            "Apps de escritorio y apps de servidores.",
            "Solo Progressive Web Apps (PWA)."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cap.3 — Programación",
        question: "¿Qué es una SPA (Single Page Application)?",
        options: [
            "Un tipo de servidor que solo aloja una página web.",
            "Una aplicación que no recarga toda la página al interactuar, ofreciendo una experiencia más fluida.",
            "Una computadora diseñada para ejecutar solo un programa.",
            "Un lenguaje de programación para páginas estáticas."
        ],
        answer: 1,
        points: 1
    }
];
