const questions = [
    {
        category: "Tecnología e Innovación",
        question: "¿Qué representa el caso de un iPhone último modelo?",
        options: [
            "Es un teléfono celular y nada más.",
            "Es expresión y representación de nuestros avances científicos más nuevos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Fundamentos STEM",
        question: "¿Qué es STEM? (por sus siglas en inglés)",
        options: [
            "Es Sociedad, Técnica, Economía y Matemáticas.",
            "Es Ciencia, Tecnología, Ecología y Medición.",
            "Es Ciencia, Tecnología, Ingeniería y Matemáticas."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Fundamentos STEM",
        question: "¿Qué relevancia tiene el modelo educativo STEM en nuestros días?",
        options: [
            "Este enfoque es el único capaz de crear la base de todo avance tecnológico: la innovación.",
            "Este enfoque es el único capaz de crear acabar con la violencia social.",
            "Este enfoque es el único capaz eliminar las fronteras y la discriminación."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Tecnología y Código",
        question: "¿Cómo está ligada la tecnología con el código (lenguajes de programación)?",
        options: [
            "El código es el lenguaje que habla nuestra tecnología.",
            "El código es una clave que se usa para desbloquear nuestra tecnología.",
            "El código es una ley universal que se usa en la tecnología."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia y Sociedad",
        question: "¿Cuáles son los desafíos de nuestra sociedad actual más retadores que la tecnología aplicada en la ciencia pura nos puede ayudar a vencer?",
        options: [
            "Tener procesadores más rápidos y eficientes y acelerar la transición a la electromóvilidad.",
            "La sustentabilidad (ser sustentables) y el combate por el cambio climático.",
            "Lograr computadoras cuánticas y lograr una fusión nuclear estable."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología y Código",
        question: "¿Qué enunciado describe mejor la relación entre estos tres conceptos: Ciencia, Tecnología y Código?",
        options: [
            "El código es el lenguaje de nuestra Ciencia y la Tecnología es el resultado de estas dos.",
            "La tecnología es el lenguaje que habla nuestra ciencia y el código es una disciplina aparte.",
            "La tecnología es el máximo exponente de la ciencia y el código es el medio que los une siendo así el lenguaje que habla la tecnología."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología e Innovación",
        question: "¿Que significa la última versión de un producto reconocido como un iPhone ó un Galaxy en términos de avance tecnológico?",
        options: [
            "Es un dispositivo que lleva los conocimientos científicos y de ingeniería humana al límite.",
            "Es una técnica que se usa para que se hagan los anteriores obsoletos más rápido.",
            "Es la forma que usan las empresas para vender más, solo le cambian el nombre."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Tecnología e Innovación",
        question: "¿Cuál es el principal reto de una nueva e innovadora tecnología en el mundo de la electrónica?",
        options: [
            "Hacer en un diseño atractivo visualmente sin importar el costo solo que sea confiable.",
            "Hacerla comercialmente viable (abaratar su costo), fácil de usar y práctica para que sea adoptada por las masas.",
            "Que sea compatible con las tecnologías actuales."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología e Innovación",
        question: "¿Cuáles son los tres grupos ó clusters de innovación que demandarán fuerza laboral especializada en los próximos años?",
        options: [
            "1, Cryptomonedas. 2.- Blockchain. 3, Programación y el código.",
            "1, Robotíca, IA, Autonomía. 2.- Nanotecnología en fusión con Biotecnología. 3, Programación y el código.",
            "1, Economía digital. 2.- Ciencia de Cohetes. 3, Ciencias médicas y protesis robóticas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Futuro del Trabajo",
        question: "¿Cuáles son algunas de las profesiones del futuro próximo según DaVinci Institute?",
        options: [
            "Optimizador de tráfico de drones, Diseño de Viajes sin conductor, Gastrónomo Molecular.",
            "Creación de arte digital por IA, Gestión de contabilidad autonóma, Gestión de energía de paneles solares.",
            "Ingeniero de electrónica analógica, Diseño de Interiores asistido por IA, Terapeutas de mascotas."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Tecnología y Sociedad",
        question: "¿Qué empresas puedes identificar que hacen que los avances tecnológicos más avanzados estén disponibles prácticamente para todos en el mundo?",
        options: [
            "Coca Cola, Wal Mart, FedEx.",
            "Amazon, AliExpress, Ebay.",
            "Apple, Tesla, Pfizer."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Estándares Tecnológicos",
        question: "¿Para qué se usan los estándares ó protocolos tecnológicos en esta industría?",
        options: [
            "Así todas las empresas tecnológicas se ponen de acuerdo para que los productos se entiendan entre sí.",
            "Son reglas que ponen los gobiernos para que todas las empresas las sigan.",
            "Son clave para que no existan disputas legales entre las empresas."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Estándares Tecnológicos",
        question: "¿Conforme salen y se adoptan nuevas tecnologías sobre la tecnología actual, que pasa con los estándares tecnológicos que están vigentes?",
        options: [
            "Se adoptan, después todo producto nuevo trae los estándares nuevos, así se fabrican las cosas con lo más nuevo.",
            "\"Suben\" ó cambian a una nueva versión ó generación."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Educación STEM",
        question: "¿Qué enunciado es el más correcto para poder crear innovación a nivel país?",
        options: [
            "Integrar desarrollo de habilidades sociales en las escuelas y del medio ambiente.",
            "Integrar Ciencia y Tecnología en la educación media y media superior para elevar el número estudiantes en áreas STEM.",
            "Integrar clases de robótica y matemática pura para elevar el coheficiente IQ de los alumnos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Educación STEM",
        question: "¿Qué ventaja tiene la educación STEM en modo divulgativo versus las clases de ciencias STEM regulares?",
        options: [
            "Sube la complejidad pero al final se lográ un mejor resultado teniendo alumnos más capaces de enfrentar al mundo.",
            "La infomación es más fácil de entender y entretenida, además de ser temas selectos que causan mayor retención de la atención y el conocimiento."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cómo difiere un principio y ley de la ciencia vs una hipótesis y/o teoría científica?",
        options: [
            "Los principios y leyes son las que siempre se respetan en el mundo natural.",
            "Una hipótesis es la que siempre se respetan en el mundo natural.",
            "Una teoría científica es la que siempre se respetan en el mundo natural."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Qué es la teoría del Big Bang?.",
        options: [
            "Es la teoría de la formación del inicio de la vida en la Tierra.",
            "Es la teoría de la formación del inicio de nuestro Sol.",
            "Es la teoría de la formación del inicio de nuestro Universo."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cosmología",
        question: "La lógica nos dice una explosión tiende a desacelerar conforme pase el tiempo, según un descubrimiento hecho en 1929 por Edwin Hubble, el Universo...",
        options: [
            "Esta desacelerando",
            "Esta acelerando",
            "Esta inmóvil"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Física de Partículas",
        question: "¿Qué es la ántimateria?",
        options: [
             "Es matería oscura de la que está compuesta el 70% de la energía del Universo.",
             "Es materia que tiene su carga eléctrica opuesta, como el positrón",
             "Se le llama así a la energía pura antes de convertirse en materia"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Qué es el CBR (Cosmic Background Radiation) ó Radiación de Fondo Cósmico?",
        options: [
            "Es el \"ruido\" remanente del Big Bang, que podemos escuchar en la radio",
            "Es la tela del espacio-tiempo de fondo en las estrellas",
            "Es la luz en su conjunto que irradian todas las estrellas juntas"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astrofísica",
        question: "¿Qué es la fusión termonuclear?",
        options: [
            "Es presionar átomos con presión y calor hasta que se unen y forman uno nuevo",
            "Es dividir átomos con presión y calor hasta que se sepan en dos átomos individuales"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astrofísica",
        question: "¿Qué es la secuencia principal?",
        options: [
            "Es un proceso basado en el método científico que usan las empresas para crear nueva tecnología",
            "Se les llama así aprox. al 80% de las estrellas en el Universo porque son de un tamaño y brillo similar."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Astrofísica",
        question: "¿Qué es un disco de acreción?",
        options: [
            "Se llamaba así a los discos en que se guardaba la información digital en las empresas de desarrollo tecnológico.",
            "Es el aglutinamiento de material alrededor de una estrella derivado de estos discos se forman los planetas en un sistema planetario.",
            "Es una tecnología novedosa de almacenamiento de datos, la siguiente generación después de los discos en estado sólido.."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué es orbitar?",
        options: [
            "Es entrar en una caída infinita como los satélites naturales y artificiales",
            "Es agitar en forma circular un objeto para obtener una mezcla uniforme",
            "Es como se le llama al resultado de unir dos átomos mediante la fusión"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Para qué nos sirve la Datación Radiométrica de Isótopos?",
        options: [
            "Sirve para identificar si hay contaminación por radiación en una muestra",
            "Sirve para saber desde hace cuantos años existe una muestra"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Biología",
        question: "Por su habilidad de formar casi 10 millones de enlaces estables, ¿Cuál es el elemento más importante para la vida?",
        options: [
            "Carbono",
            "Oxígeno",
            "Nitrógeno"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Biología",
        question: "De los millones de compuestos orgánicos que existen ¿Cuáles son los cuatro tipos principales?",
        options: [
            "Carbohidratos, Lípidos (grasas), Proteínas, Acidos Núcleicos (ADN).",
            "Alcoholes, Cetonas, Polímeros, Sintéticos"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Biología",
        question: "¿Qué es el ADN?",
        options: [
            "Significa Acido Desoxirribonucleico y contiene las instrucciones ó código genético de toda la vida orgánica",
            "Significa Acido Dimetil-nitrogenado y contiene el código genetico humano y de los animales solamente.",
            "Significa Adaptative Distance Nivelator, es un dispositivo que nivel la distancia entre dos objetos usando tecnología laser."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia y Medio Ambiente",
        question: "¿Qué es el invierno nuclear?",
        options: [
            "Es el levantamiento de una enorme nube de polvo que no permite la entrada de luz solar provocando la muerte de todas las plantas en la tierra provocada por la explosión de una bomba atomica ó el impacto de un asteoride.",
            "Es un temporal que se da cada mil años al invertirse la polaridad del núcleo de la tierra."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Hace cuanto tiempo se estima que sucedió lo que conocemos como Big Bang?",
        options: [
            "Hace 3 mil millones de años.",
            "Hace casi 14 mil millones de años.",
            "Hace casi 10 mil millones de años."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Hace cuanto tiempo se estima que se formó el Sol y Sistema Solar?",
        options: [
            "Hace 4,600 millones de años.",
            "Hace 6,000 millones de años.",
            "Hace 10,000 millones de años."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Historia Natural",
        question: "¿Hace cuanto tiempo ocurrió la ultima extinción masiva provocada por un meteorito? Compara versus el total del tiempo desde que el Big Bang.",
        options: [
            "Hace sólo un 2% de la historia del Universo.",
            "Hace sólo un 5% de la historia del Universo.",
            "Hace sólo un 0.2% de la historia del Universo."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Biología",
        question: "¿Qué son los Euarchonta?",
        options: [
            "Son réptiles, ancestros de las aves modernas que vivieron hace unos 65 millones de años.",
            "Es una tecnología que regula las redes inalambricas y su interacción con los humanos.",
            "Son mamíferos a los que se les denomina los ancestros verdaderos que vivieron hace unos 65 millones de años."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué es la Teoría General de la Relatividad?",
        options: [
            "Es una teoría que describe como el espacio y el tiempo se curvan en presencia de gravedad.",
            "Es una teoría que describe como la gravedad se curva con la velocidad de un objeto.",
            "Es una teoría que describe como el tiempo es relativo a la conciencia de las personas."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Física",
        question: "En física, ¿Qué significa 1G?",
        options: [
            "Se refiere a la fuerza de atracción gravitatoria en la superficie del Sol.",
            "Se refiere a los servicios de telefonía inalámbrica de primer generación.",
            "Se refiere a la fuerza de atracción gravitatoria en la superficie de la tierra."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física",
        question: "Al caer un rayo en la distancia en una tormenta, ¿Qué sucede con la luz y el sonido?",
        options: [
            "Escuchamos primero el ruido y luego vemos el rayo.",
            "Escuchamos y vemos al mismo tiempo.",
            "Vemos primero la luz y luego escuchamos el rayo."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física",
        question: "¿Se puede escuchar el sonido dentro de la estación espacial internacional?",
        options: [
            "No, porque no hay gravedad y no puede propagarse el sonido.",
            "No, en el espacio no hay sonido.",
            "Sí, porque dentro hay una atmósfera artificial y ahí si hay sonido."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cosmología",
        question: "Según Neil deGrasse Tyson, si el Universo se formo el 1 de enero y hoy es 31 de diciembre, siguiendo esta analogía, ¿Hace cuanto tiempo sucedió toda la historia humana moderna?.",
        options: [
            "Sucedió en el último minuto (60 segundos).",
            "Sucedió en los últimos dos segundos.",
            "Sucedió en los últimos 10 segundos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Exploración Espacial",
        question: "¿Qué es Voyager1?",
        options: [
            "Es un transporte espacial que trae de vuelta a los astronautas del espacio.",
            "Es un satélite que usa la empresa de Elon Musk SpaceX para ofrecer internet en todo el mundo.",
            "Es una nave que se lanzó en la década de 70s hacia los confines del Universo."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Exploración Espacial",
        question: "¿A que se le llamó \"pale blue dot\" ó pálido punto azul\"?",
        options: [
            "A la primer fotografía de Urano por su distintivo color azul.",
            "A la primer fotografía de la luna de Jupiter \"Europa\" por sus océanos bajo su superficie.",
            "Al planeta tierra visto desde Neptuno cuando la nave Voyager volteó hacia atrás y capturó la fotografía."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Cuál es el nombre y distancia de la estrella más cercana al Sol?",
        options: [
            "Sirius, 8 años luz.",
            "Vega, 3 años luz.",
            "Alpha Centuri, 4 años luz."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Cómo se llama la galaxia que se dirige hacia nosotros con curso de colisión y en cuanto tiempo ocurrirá?",
        options: [
            "Andrómeda y colisionará con la vía lactea en 2.5 mil millones de años.",
            "Galaxia Triángulo y colisionará con la vía láctea en 500 millones de años.",
            "Andrómeda y colisionará con la vía lactea en mil millones de años."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Sistema Solar",
        question: "Del total de toda la masa del Sistema Solar ¿Que porcentaje aproximado concentra el Sol?",
        options: [
            "99%",
            "95%",
            "90%"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Cuál es la temperatura promedio del espacio intergaláctico?",
        options: [
            "-270 grados celcius.",
            "24 grados celcius.",
            "0 grados celcius."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astrofísica",
        question: "¿Cuál es uno de los métodos usados por los astrofísicos para medir distancias en el espacio?",
        options: [
            "Se usan pulsaciones de luz láser.",
            "Se usan las \"Velas Estándar\" que son explosiones de Supernova que siempre brillan igual como referencia.",
            "Se usan radiotelescopios que miden el brillo y miden la distancia usando la intensidad del mismo."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Física",
        question: "En 1687, afirmó que cualquier objeto con masa posee gravedad y su relación directa a mayor masa mayor gravedad y la describió como una \"misteriosa acción a distancia\".",
        options: [
            "Issac Newton",
            "Albert Einstein",
            "Max Planck"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Física",
        question: "¿Cuál es el valor más cercano a 1G ó fuerza de gravedad en la tierra?",
        options: [
            "10.12 m/s2",
            "6.7 m/s2",
            "9.8 m/s2"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué pasa con el tiempo según a teoría de la relatividad general de Albert Einstein si se viaja una velocidad cercana a \"c\" (velocidad de la luz)?",
        options: [
            "El tiempo es más lento para el observador y más rápido para el viajero.",
            "Los tiempos son los mismos ya que al desacelerar se revierte la dilatación del tiempo provocada por la aceleración de la velocidad.",
            "El tiempo es más lento para el viajero y más rápido para el observador."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física",
        question: "¿Cómo sería un cuerpo humano si la gravedad en la Tierra fuera el doble ó más?",
        options: [
            "Resultaría en una estatura más baja y cuerpos más robustos.",
            "Resultaría en una estatura más alta y cuerpos menos robustos."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Aeroespacial",
        question: "¿A qué altura sobre el nivel del mar se considera que se está en el espacio?",
        options: [
            "100 kilómetros",
            "80 kilómetros",
            "90 kilómetros"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Aeroespacial",
        question: "¿Que enunciado describe mejor a un objeto que esta \"en orbita\"?",
        options: [
            "Término utilizado para aumentar la velocidad de un objeto mediante la gravedad.",
            "Es cuando a un objeto tiene cierta velocidad que le permite girar indefinidamente en una caída infinita."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Sistema Solar",
        question: "Si los planetas del Sistema Solar no estuvieran girando alrededor del Sol a su velocidad determinada. ¿Caerían directamente hacia el Sol?",
        options: [
            "Sí, serían atraidos directamente.",
            "No, porque cada planeta tiene su masa, su propia gravedad y se mantendrían en equilibrio donde mismo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astronomía",
        question: "¿Qué técnica nos permite ver la composición química de atmósferas en exoplanetas?",
        options: [
            "Con la observación directa gracias al telescopio James Webb.",
            "Usamos el telescopio espacial de rayos X, Chandra.",
            "Usamos la técnica de espectroscopia que descompone la luz."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el elemento mayor constituyente de nuestra atmósfera?",
        options: [
            "Oxígeno",
            "Nitrógeno",
            "Carbono"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Física",
        question: "¿Que pasa con la atmósfera a mayor altitud?",
        options: [
            "Se hace mas densa por esto los aviones vueltan alto.",
            "Se hace menos densa."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Sistema Solar",
        question: "¿Qué planeta tiene 90 veces más la presión atmosférica de la tierra?",
        options: [
            "Júpiter",
            "Venus",
            "Saturno",
            "Marte"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué factores afectan a la presión atmosférica?",
        options: [
            "Temperatura y altitud.",
            "Calor y aceleración.",
            "El agua de los mares y la posición de la luna."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Dónde se formaron los elementos, como el Helio, Oxígeno, Carbono, etc.?",
        options: [
            "En el interior de estrellas como el Sol.",
            "A altas temperaturas en las capas internas de la Tierra.",
            "En el Big Bang y fueron esparcidos por la misma explosión."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Física Nuclear",
        question: "¿Qué es la fusión nuclear?",
        options: [
            "Es el proceso de unión de dos atomos para formar uno nuevo más grande.",
            "Es el proceso de separación de dos atomos para formar uno nuevo más pequeño."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Física Nuclear",
        question: "¿Qué es la fisión nuclear?",
        options: [
            "Es el proceso de unión de dos atomos para formar uno nuevo más grande.",
            "Es el proceso de separación de dos atomos para formar uno nuevo más pequeño."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Energía",
        question: "En la actualidad, ¿Bajo que proceso funcionan todas las plantas nucleares de generación de energía eléctrica?",
        options: [
            "Fusión nuclear.",
            "Fisión nuclear."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Energía",
        question: "¿Qué proceso nuclear produce más energía?",
        options: [
            "Fusión nuclear.",
            "Fisión nuclear."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Química",
        question: "¿Cuál es el elemento más simple y abundante en el Universo?",
        options: [
            "Helio",
            "Carbón",
            "Hidrógeno",
            "Silicio"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Astrofísica",
        question: "¿Qué es la secuencia principal? De la que forman parte el 90% de las estrellas del Universo.",
        options: [
            "Se refiere a estrellas que convierten Higrógeno en Helio.",
            "Se refiere a estrellas que convierten Helio en Oxígeno.",
            "Se refiere a estrellas que convierten Higrógeno en Carbono."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astrofísica",
        question: "¿Qué se necesita para que una estrella pueda formar elementos más pesados como Carbono, Nitrógeno y Oxígeno?",
        options: [
            "Que sea más grande que el Sol y que tenga hierro en su interior.",
            "Que sea más grande que el Sol y con una mayor temperatura."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Astronomía",
        question: "¿Cada cuanto se estima que ocurren Supernovas en nuestra Galaxia?",
        options: [
            "Se estiman dos ó tres cada siglo.",
            "Se estima una cada siglo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astronomía",
        question: "¿Cómo se forma una estrella de neutrones?",
        options: [
            "Es el remanente (núcleo) de una estrella que tenía menos a 10 masas solares.",
            "Es el remanente de cuando en un sistema binario dos estrellas chocan entre sí formando una Supernova."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Astronomía",
        question: "¿Como finalizará su vida nuestro Sol?",
        options: [
            "Como una Supernova.",
            "Como un agujero negro.",
            "Como una gigante roja para después dejar una enana blanca.",
            "Como una estrella de neutrones."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física de Partículas",
        question: "¿Qué es el modelo estándar de física de partículas?",
        options: [
            "Describe el funcionamiento de las fuerzas fundamentales.",
            "Describe el funcionamiento de la gravedad.",
            "Describe el funcionamiento de las partículas al interior de los atomos."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física de Partículas",
        question: "¿Qué es el CERN y FermiLab?",
        options: [
            "Son lugares donde se investigan sobre la fusión nuclear para generar electricidad.",
            "Son lugares donde se colisionan partículas para descubrir los secretos del Universo.",
            "Son lugares donde se colisionan partículas para generar micro agujeros negros e investigarlos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué pretende ser la Theory of Everything (ToE) ó Teoría del Todo?",
        options: [
            "Una teoría que fusione matemáticamente la energía y materia oscuras (incluyendo la gravedad) y puedan tener sentido juntas.",
            "Una teoría que explique de donde venimos y hacia donde vamos en términos de expansionismo del Universo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué pretende ser la Theory of Everything (ToE) ó Teoría del Todo?",
        options: [
            "Una teoría que fusione la relatividad con la energía y materia oscuras y las fuerzas fundamentales (incluyendo la gravedad) y puedan tener sentido juntas.",
            "Una teoría que explique matemáticamente de donde venimos y hacia donde vamos en términos de posicionismo del Universo."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Biología",
        question: "¿Cuál es el elemento más importante para la vida?",
        options: [
            "Litio",
            "Hidrógeno",
            "Carbono"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Cosmología",
        question: "¿Cuál es el único elemento que fue creado por completo 100% durante el Big Bang?",
        options: [
            "Hidrógeno",
            "Carbono",
            "Oxígeno"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Biología",
        question: "Además del elemento más importante para la vida ¿Qué elemento también sería apto para formar vida?",
        options: [
            "Agua",
            "Silicio",
            "Oxígeno"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Biología",
        question: "¿Qué son las hormonas?",
        options: [
            "Son mensajeras, después de ser secretadas viajan por todo el torrente sanguíneo llevando instrucciones de activación/desactivación de funciones muy variadas.",
            "Son excretadas al exterior para atraer al sexo opuesto.",
            "Son medicamentos utilizados para regular los niveles de ciertos componentes sanguíneos."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Biología",
        question: "¿Cuál es el elemento más abundante en el cuerpo humano? Presente en todos los líquidos, tejidos, huesos y proteínas.",
        options: [
            "Oxígeno",
            "Carbono",
            "Agua"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Química",
        question: "A nivel de estructura atómica, ¿Cuál es la principal diferencia entre un elemento y otro?.",
        options: [
            "La temperatura donde fue creado.",
            "Carbono",
            "El número ó cantidad de protones, neutrones y electrones."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Física",
        question: "¿Qué parte del atomo concentra más del 99% de su masa?",
        options: [
            "En los electrones que orbitan por su energía cinética.",
            "El núcleo del mismo donde están los protones y neutrones."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué significa la 'G' en la tecnología 5G?",
        options: [
            "Gigabytes",
            "Generación",
            "Global"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Para qué sirve un código QR?",
        options: [
            "Para pagar impuestos automáticamente.",
            "Es un código de respuesta rápida para acceder a información.",
            "Es un tipo de batería nueva."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué tecnología permite que tu teléfono sepa exactamente dónde estás en un mapa?",
        options: [
            "GPS",
            "Bluetooth",
            "Wi-Fi"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ingeniería de Hardware",
        question: "¿Cuál de estos componentes es considerado el 'cerebro' de una computadora?",
        options: [
            "El Monitor",
            "El Teclado",
            "El Procesador (CPU)"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué significa que un dispositivo tenga Wi-Fi?",
        options: [
            "Que puede conectarse a internet sin cables.",
            "Que tiene mucha batería.",
            "Que puede tomar fotos bajo el agua."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Código para Principiantes",
        question: "En programación, ¿qué es un 'Bucle' (Loop)?",
        options: [
            "Un error que borra todo.",
            "Una instrucción que se repite varias veces.",
            "Un cable que conecta el mouse."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Código para Principiantes",
        question: "¿Qué es una 'Variable' en un programa?",
        options: [
            "Un nombre que guarda un valor (como un número o texto).",
            "Un tipo de pantalla flexible.",
            "El botón de encendido."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué tecnología usas para conectar audífonos inalámbricos a corta distancia?",
        options: [
            "Bluetooth",
            "Radio FM",
            "Infrarrojo"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ingeniería de Hardware",
        question: "¿Cómo se llama la interfaz que te permite usar una computadora tocando la pantalla directamente?",
        options: [
            "Pantalla Táctil",
            "Scanner",
            "Impresora"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Código para Principiantes",
        question: "¿Qué lenguaje de programación es famoso por tener una serpiente en su logo?",
        options: [
            "Java",
            "Python",
            "C++"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "Cuando un programa tiene un error, ¿cómo le dicen comúnmente en el mundo tecnológico?",
        options: [
            "Glue",
            "Bug",
            "Stone"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ingeniería de Hardware",
        question: "¿Qué aparato envía la señal de internet a toda tu casa?",
        options: [
            "Router",
            "Monitor",
            "Caja de luz"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Código para Principiantes",
        question: "¿Qué es 'Scratch'?",
        options: [
            "Una marca de computadoras.",
            "Un lenguaje de programación por bloques para aprender jugando.",
            "Un programa para limpiar el teclado."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿A qué se refieren cuando dicen que tus fotos están en 'La Nube'?",
        options: [
            "A que están guardadas en servidores en internet.",
            "A que se suben al cielo físicamente.",
            "A que están impresas en papel especial."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Futuro del Trabajo",
        question: "¿Qué hace principalmente un Científico de Datos?",
        options: [
            "Arregla cables de internet.",
            "Analiza mucha información para encontrar patrones y soluciones.",
            "Dibuja los logos de las empresas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué es una 'App'?",
        options: [
            "Es una abreviatura de Aplicación (un programa para celular o PC).",
            "Un tipo de comida para astronautas.",
            "Un botón secreto del teclado."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué significa USB?",
        options: [
            "United States Battery",
            "Universal Serial Bus (un estándar para conectar dispositivos).",
            "Ultra Speed Box"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Cómo se llama la tecnología que te pone unos lentes y te hace ver un mundo digital?",
        options: [
            "Realidad Virtual (VR)",
            "Cine 4D",
            "Televisión LED"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Pensamiento Computacional",
        question: "¿Qué es un 'Algoritmo'?",
        options: [
            "Una medicina para la vista.",
            "Una serie de pasos para completar una tarea o resolver un problema.",
            "Un tipo de música electrónica."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué significa estar 'Online'?",
        options: [
            "Estar fuera de línea.",
            "Estar conectado a la red.",
            "Estar en una fila esperando."
        ],
        answer: 1,
        points: 1
    }
];

export default questions;
