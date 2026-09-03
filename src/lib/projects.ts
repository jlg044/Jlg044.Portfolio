export type Collaborator = {
  name: string;
  github?: string;
};

export type ProjectMedia =
  | { kind: "video"; src: string; caption: { es: string; en: string } }
  | {
      kind: "images";
      items: { src: string; alt: { es: string; en: string } }[];
    }
  | {
      kind: "code";
      code: string;
      language?: string;
      caption: { es: string; en: string };
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
  media?: ProjectMedia;
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
    media: {
      kind: "video",
      src: "/projects/tfg/demo.mp4",
      caption: {
        es: "Demo grabada para la defensa del TFG",
        en: "Demo recorded for the thesis defense",
      },
    },
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
    media: {
      kind: "images",
      items: [
        {
          src: "/projects/hands-cnn/training_curves.png",
          alt: {
            es: "Curvas de entrenamiento (accuracy y loss) de la CNN",
            en: "CNN training curves (accuracy and loss)",
          },
        },
        {
          src: "/projects/hands-cnn/confusion_matrix.png",
          alt: {
            es: "Matriz de confusión sobre el conjunto de test",
            en: "Confusion matrix on the test set",
          },
        },
      ],
    },
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
    media: {
      kind: "code",
      language: "bash",
      caption: {
        es: "Ejemplo real: crear un ticket VIP de alta prioridad (del README)",
        en: "Real example: creating a high-priority VIP ticket (from the README)",
      },
      code: `curl -X POST http://localhost:5001/tickets \\
  -H "Content-Type: application/json" \\
  -d '{
    "usuario": "Profesor ITSI",
    "email": "profesor@itsi.com",
    "asunto": "Consulta Crítica",
    "urgencia": "Alta",
    "categoria": "Tecnica"
  }'

# -> Se enruta automáticamente a la cola queue_vip_urgent`,
    },
  },
  {
    slug: "tomato-disease-detection",
    title: {
      es: "Detección de enfermedades en tomate con IA",
      en: "Tomato Disease Detection with AI",
    },
    summary: {
      es: "Clasificador de enfermedades en hojas de tomate con ResNet50 y transfer learning, 96% de accuracy sobre 10 clases.",
      en: "Tomato leaf disease classifier using ResNet50 and transfer learning, 96% accuracy across 10 classes.",
    },
    description: {
      es: "Clasificación automática de enfermedades en hojas de tomate (9 enfermedades + planta sana) mediante transfer learning con ResNet50 preentrenada en ImageNet, sobre un dataset de casi 247.000 imágenes con un desbalance de clases notable (14x entre la más y la menos representada), gestionado con WeightedRandomSampler y pesos de clase en la función de pérdida. Entrenamiento en dos fases (cabeza congelada y fine-tuning completo con learning rates discriminativos) alcanzando ~96% de accuracy y un F1 macro de 0.933 en el conjunto de test.",
      en: "Automatic classification of tomato leaf diseases (9 diseases + healthy) using transfer learning with ImageNet-pretrained ResNet50, on a dataset of nearly 247,000 images with a significant class imbalance (14x between the largest and smallest class), handled with a WeightedRandomSampler and class weights in the loss function. Two-phase training (frozen head, then full fine-tuning with discriminative learning rates) reaching ~96% test accuracy and a macro F1 of 0.933.",
    },
    tech: ["PyTorch", "ResNet50", "Transfer Learning", "Jupyter Notebook"],
    type: "team",
    collaborators: [{ name: "jmu809", github: "https://github.com/jmu809" }],
    repo: "https://github.com/jmu809/DeteccionEnfermedadesTomates-IA",
    media: {
      kind: "images",
      items: [
        {
          src: "/projects/tomato/training_curves.png",
          alt: {
            es: "Curvas de entrenamiento en las dos fases (congelado y fine-tuning)",
            en: "Training curves across both phases (frozen and fine-tuning)",
          },
        },
        {
          src: "/projects/tomato/confusion_matrix.png",
          alt: {
            es: "Matriz de confusión sobre las 10 clases",
            en: "Confusion matrix across the 10 classes",
          },
        },
        {
          src: "/projects/tomato/f1_por_clase.png",
          alt: {
            es: "F1-score por clase en el conjunto de test",
            en: "Per-class F1-score on the test set",
          },
        },
      ],
    },
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
    media: {
      kind: "code",
      language: "python",
      caption: {
        es: "Detección de cambios real: compara el hash de cada archivo antes de marcarlo como actualización",
        en: "Real change detection: hashes each file before flagging it as an update",
      },
      code: `def HashCreator(archivo):
    hash_func = hashlib.sha256()
    with open(archivo, "rb") as f:
        while chunk := f.read(8192):
            hash_func.update(chunk)
    return hash_func.hexdigest()

hashUV = HashCreator(pathUV)  # última versión
hashNV = HashCreator(pathNV)  # versión nueva

if hashUV == hashNV:
    print("Sin cambios")
else:
    cambios.append({"tag": tag, "path": pathCambios, "filename": filename})`,
    },
  },
];
