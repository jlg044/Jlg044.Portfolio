export type Collaborator = {
  name: string;
  github?: string;
};

export type Project = {
  slug: string;
  title: { es: string; en: string };
  summary: { es: string; en: string };
  description: { es: string; en: string };
  tech: string[];
  type: "solo" | "team";
  collaborators?: Collaborator[];
  repo?: string;
  repoPrivate?: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "tfg-indoor-localization",
    title: {
      es: "Localización en interiores con BLE y Machine Learning",
      en: "Indoor Localization with BLE and Machine Learning",
    },
    summary: {
      es: "Trabajo de Fin de Grado: estimación de posición en tiempo real dentro de un SmartHome combinando nodos ESP32, señales BLE y modelos de ML.",
      en: "Final degree thesis: real-time indoor position estimation in a SmartHome using ESP32 BLE nodes and ML models.",
    },
    description: {
      es: "Sistema de localización en interiores mediante señales Bluetooth Low Energy captadas por nodos ESP32, procesadas con técnicas de aprendizaje automático para estimar la posición de un dispositivo dentro de un entorno SmartHome. Los datos MQTT se almacenan en MongoDB, se generan datasets sincronizados con posiciones reales (UWB) y se evalúan varios modelos de regresión, siendo Random Forest el de mejor rendimiento. Incluye visualización en tiempo real (ubicación en plano, mapa de calor, vista por zonas) en una app Ionic + Angular conectada por WebSocket.",
      en: "Indoor localization system using Bluetooth Low Energy signals captured by ESP32 nodes, processed with machine learning to estimate a device's position inside a SmartHome environment. MQTT data is stored in MongoDB, datasets are synchronized against real UWB positions, and several regression models are evaluated, with Random Forest performing best. Includes real-time visualization (precise location, heatmap, zone view) in an Ionic + Angular app connected over WebSocket.",
    },
    tech: [
      "ESP32 / BLE",
      "Python",
      "scikit-learn",
      "MQTT",
      "MongoDB",
      "Node.js",
      "Ionic + Angular",
    ],
    type: "solo",
    repo: "https://github.com/jlg044/JoseLuisTFG2025",
    featured: true,
  },
  {
    slug: "hand-cnn-classifier",
    title: {
      es: "Clasificador de dedos con CNN en tiempo real",
      en: "Real-time Finger Classifier with a CNN",
    },
    summary: {
      es: "CNN entrenada desde cero para contar dedos frente a la cámara en tiempo real, con preprocesado distribuido en PySpark y servidor de inferencia con Docker.",
      en: "A CNN trained from scratch to count fingers shown to the camera in real time, with distributed preprocessing in PySpark and a Dockerized inference server.",
    },
    description: {
      es: "Proyecto final de la asignatura Computación sobre Datos Masivos. Una red convolucional (arquitectura VGG-style, GlobalAveragePooling, label smoothing) se entrena desde cero sobre esqueletos de mano generados con MediaPipe, con el split y preprocesado del dataset distribuido en un cluster Spark. El modelo se sirve mediante una API FastAPI dentro de Docker, y un cliente local con OpenCV + MediaPipe envía cada frame de la cámara al servidor y muestra la predicción en pantalla en tiempo real.",
      en: "Final project for the Massive Data Computing course. A convolutional network (VGG-style, GlobalAveragePooling, label smoothing) is trained from scratch on hand skeletons generated with MediaPipe, with dataset splitting and preprocessing distributed across a Spark cluster. The model is served through a FastAPI endpoint inside Docker, while a local OpenCV + MediaPipe client streams camera frames to the server and displays the live prediction.",
    },
    tech: [
      "TensorFlow / Keras",
      "PySpark",
      "OpenCV",
      "MediaPipe",
      "FastAPI",
      "Docker Compose",
    ],
    type: "team",
    collaborators: [
      { name: "jmu809", github: "https://github.com/jmu809" },
      { name: "eim344", github: "https://github.com/eim344" },
    ],
    repo: "https://github.com/jlg044/CSDM-ABP/tree/main/Proyecto%20Final/Proyecto_hands_docker",
    featured: true,
  },
  {
    slug: "itsi-support-orchestration",
    title: {
      es: "Sistema de orquestación de soporte técnico",
      en: "Technical Support Orchestration System",
    },
    summary: {
      es: "Plataforma de microservicios para recibir, clasificar y enrutar tickets de soporte según prioridad, con notificaciones automáticas.",
      en: "A microservices platform to receive, classify, and route support tickets by priority, with automated notifications.",
    },
    description: {
      es: "Sistema automatizado de recepción, clasificación y enrutamiento de tickets de soporte con arquitectura de microservicios containerizada: una API Flask valida y persiste los tickets en PostgreSQL, RabbitMQ gestiona colas asíncronas con 4 niveles de prioridad (clientes VIP incluidos), un worker procesa los tickets encolados y n8n automatiza notificaciones por Gmail y el registro de errores en Google Sheets.",
      en: "Automated support ticket reception, classification, and routing system with a containerized microservices architecture: a Flask API validates and persists tickets in PostgreSQL, RabbitMQ manages asynchronous queues across 4 priority levels (including VIP customers), a worker processes queued tickets, and n8n automates Gmail notifications and error logging to Google Sheets.",
    },
    tech: ["Flask", "PostgreSQL", "RabbitMQ", "n8n", "Docker Compose"],
    type: "team",
    collaborators: [
      { name: "Juan Carlos Díaz González" },
      { name: "Isabel Pelaya Galindo Ibáñez" },
      { name: "Esther Ibáñez Mingorance" },
    ],
    repo: "https://github.com/jlg044/Proyecto_ITSI",
    featured: true,
  },
  {
    slug: "tomato-disease-detection",
    title: {
      es: "Detección de enfermedades en tomate con IA",
      en: "Tomato Disease Detection with AI",
    },
    summary: {
      es: "Modelo de visión por computador para identificar enfermedades en plantas de tomate a partir de imágenes de hojas.",
      en: "A computer vision model to identify diseases in tomato plants from leaf images.",
    },
    description: {
      es: "Colaboración centrada en entrenar y evaluar un modelo de deep learning capaz de clasificar enfermedades comunes en plantas de tomate a partir de fotografías de hojas, como apoyo a la detección temprana en cultivos.",
      en: "A collaboration focused on training and evaluating a deep learning model that classifies common tomato plant diseases from leaf photographs, supporting early detection in crops.",
    },
    tech: ["Python", "Jupyter Notebook", "Deep Learning"],
    type: "team",
    collaborators: [{ name: "jmu809", github: "https://github.com/jmu809" }],
    repo: "https://github.com/jmu809/DeteccionEnfermedadesTomates-IA",
  },
  {
    slug: "serveract-ota",
    title: {
      es: "Sistema de actualizaciones OTA para un robot",
      en: "OTA Update System for a Robot",
    },
    summary: {
      es: "Arquitectura cliente-servidor para distribuir y aplicar actualizaciones remotas a un robot, detectando cambios por hash.",
      en: "A client-server architecture to distribute and apply remote updates to a robot, detecting changes via file hashing.",
    },
    description: {
      es: "Sistema de actualizaciones OTA (Over-The-Air) compuesto por tres roles independientes: un usuario que empaqueta y sube nuevas versiones, un servidor FastAPI que calcula el hash de cada archivo para detectar exactamente qué cambió y lo registra en MariaDB, y un cliente embebido en el robot que consulta si existe una versión más reciente y descarga solo los archivos modificados.",
      en: "An OTA (Over-The-Air) update system made of three independent roles: a user role that packages and uploads new versions, a FastAPI server that hashes each file to detect exactly what changed and logs it in MariaDB, and a client embedded in the robot that checks for newer versions and downloads only the modified files.",
    },
    tech: ["Python", "FastAPI", "MariaDB", "SHA-256"],
    type: "solo",
    repo: "https://github.com/jlg044/ServerAct",
  },
];
