# Análisis Exhaustivo del Proyecto FractalGrid

## 📋 Índice
1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Contexto del Negocio](#contexto-del-negocio)
3. [Rubro e Industria](#rubro-e-industria)
4. [Servicios y Funcionalidades](#servicios-y-funcionalidades)
5. [Fortalezas Técnicas](#fortalezas-técnicas)
6. [Stack Tecnológico](#stack-tecnológico)
7. [Análisis Detallado de Rutas y Pantallas](#análisis-detallado-de-rutas-y-pantallas)
8. [Arquitectura y APIs](#arquitectura-y-apis)
9. [Integraciones Externas](#integraciones-externas)

---

## 🎯 Resumen Ejecutivo

**FractalGrid** es una plataforma SaaS empresarial de automatización inteligente e inteligencia de negocio, diseñada para ayudar a las organizaciones a identificar, analizar y automatizar procesos de soporte técnico y atención al cliente mediante inteligencia artificial.

### Propósito Principal
La plataforma permite a las empresas:
- **Identificar oportunidades de automatización** mediante análisis de tickets de soporte
- **Priorizar iniciativas** usando metodología RICE (Reach, Impact, Confidence, Effort)
- **Automatizar flujos de trabajo** mediante workflows visuales
- **Conectar sistemas** mediante integraciones (Airbyte, MCP servers)
- **Analizar datos** mediante dashboards interactivos y visualizaciones
- **Gestionar inventario** (módulo completo de gestión de inventario)

### Valor Proporcionado
- **Reducción de costos operativos** mediante automatización
- **Mejora en tiempos de respuesta** al cliente
- **Análisis predictivo** de oportunidades de mejora
- **ROI medible** con estimaciones de ahorro anual
- **Centralización de datos** de múltiples fuentes

---

## 🏢 Contexto del Negocio

### Modelo de Negocio
Plataforma **B2B SaaS** orientada a empresas que manejan:
- Altos volúmenes de tickets de soporte
- Necesidad de automatización de procesos
- Múltiples sistemas y fuentes de datos
- Requisitos de análisis y reporting

### Casos de Uso Principales
1. **Centros de Soporte Técnico**: Automatización de clasificación y resolución de tickets
2. **Departamentos de IT**: Gestión de inventario y activos
3. **Equipos de Operaciones**: Análisis de eficiencia y optimización de procesos
4. **Gerencia de Servicios**: Dashboards ejecutivos y métricas de negocio

### Segmento de Mercado
- Empresas medianas y grandes
- Organizaciones con alto volumen de tickets (50+ diarios)
- Empresas con múltiples sistemas integrados
- Equipos que requieren análisis de datos avanzado

---

## 🏭 Rubro e Industria

### Industria Principal
**Tecnología de la Información (IT) / Software como Servicio (SaaS)**

### Sub-industrias Servidas
1. **Customer Support & Service Management**
   - Help Desk
   - Service Desk
   - Ticket Management Systems

2. **IT Operations & Infrastructure**
   - Asset Management
   - Inventory Management
   - System Integration

3. **Business Intelligence & Analytics**
   - Data Visualization
   - Predictive Analytics
   - Performance Monitoring

4. **Workflow Automation**
   - Process Automation
   - Integration Platforms
   - API Management

### Competidores Indirectos
- ServiceNow
- Zendesk
- Jira Service Management
- Freshdesk
- HubSpot Service Hub

### Diferenciadores
- **Enfoque en IA**: Uso de modelos de lenguaje para análisis y generación de estrategias
- **Metodología RICE**: Priorización científica de oportunidades
- **Integración MCP**: Soporte para Model Context Protocol (estándar emergente)
- **Visualización Avanzada**: Graphic Walker para análisis exploratorio de datos

---

## 🚀 Servicios y Funcionalidades

### 1. Dashboard Principal (`/`)
**Propósito**: Vista ejecutiva de métricas de automatización y rendimiento

**Funcionalidades**:
- **Overall Company Summary**: Métricas agregadas (tickets totales, % automatizados, tasas de éxito/fallo)
- **Overall Company Trend Chart**: Gráfico de tendencias temporales
- **Level2 vs Parent Chart**: Comparación de categorías
- **Tickets by Category Table**: Tabla paginada con filtros avanzados
  - Filtros por categoría, volumen, período
  - Vista por Level 2 o Parent Category
  - Métricas: volumen, confianza, tasa de automatización, éxito/fallo
  - Navegación a detalles por categoría

**Características Técnicas**:
- Filtros persistentes en localStorage
- Presets de fecha (Today, This Week, This Month, This Year, Personalized)
- Selector de período (Daily, Weekly, Monthly)
- Paginación con tamaños configurables (5, 10, 20, 50)
- Búsqueda y filtrado en tiempo real

---

### 2. Automation (`/automation`)

#### 2.1. Automation Gallery (`/automation`)
**Propósito**: Catálogo de automatizaciones pre-construidas

**Funcionalidades**:
- Grid de automatizaciones con cards informativas
- Filtros por industria, dificultad, búsqueda de texto
- Información por automatización:
  - Título y descripción
  - Industria y audiencia objetivo
  - Dificultad (Beginner, Intermediate, Advanced)
  - Tiempo estimado
  - Tags y categorías
  - Badge de "Popular"
- Botones de acción: "View Details" y "Use Automation"

**Ejemplos de Automatizaciones**:
- Server Reload & Restart
- Reset Server Password
- Bandwidth Billing Analysis
- Database Backup & Recovery
- SSL Certificate Renewal
- Server Performance Monitoring
- Load Balancer Configuration
- Log Management & Analysis

#### 2.2. My Automations (`/automation/my-automations`)
**Propósito**: Gestión de automatizaciones creadas por el usuario

**Funcionalidades**:
- Lista de automatizaciones propias
- Tabla con columnas: nombre, estado, última ejecución, rendimiento
- Filtros y búsqueda
- Acciones: editar, ejecutar, eliminar, duplicar

#### 2.3. Create Automation (`/automation/create`)
**Propósito**: Constructor visual de workflows de automatización

**Funcionalidades**:
- **Editor de Nodos Visuales**: Drag-and-drop interface
- **Tipos de Nodos**:
  - Triggers (Manual, Schedule, Event)
  - Actions (API calls, Data transformations)
  - Conditions (Branching logic)
  - Integrations (Connections to external systems)
- **Configuración de Triggers**:
  - Manual/API: Invocación on-demand
  - Schedule: Hourly, Daily, Weekly con horarios configurables
  - Event: Basado en eventos de sistemas conectados
- **Zoom y Navegación**: Control de vista del canvas
- **Validación**: Verificación de conexiones y configuración
- **Guardado**: Estados Draft, Published, Archived

**Características Avanzadas**:
- Zoom in/out del canvas
- Pan y navegación
- Resolución de iconos por tipo de nodo
- Gestión de conexiones entre nodos
- Validación de workflow antes de publicar

---

### 3. Dashboard Analytics (`/dashboard`)

#### 3.1. Dashboard List (`/dashboard`)
**Propósito**: Lista de dashboards creados

**Funcionalidades**:
- Tabla de dashboards con estado (Active, Archived, etc.)
- Botón "New dashboard" para crear nuevos
- Filtros por estado
- Acciones: ver, editar, duplicar, eliminar

#### 3.2. Create Dashboard (`/dashboard/create`)
**Propósito**: Constructor de dashboards personalizados

**Funcionalidades**:
- **Graphic Walker Integration**: Análisis exploratorio de datos
- **Vista de Código**: Editor para configuración avanzada
- **Vista de Artefacto**: Preview del dashboard
- **Format Detector**: Detección automática de formatos de datos
- **Side View**: Panel lateral con opciones de configuración

#### 3.3. Dashboard View (`/dashboard/[id]`)
**Propósito**: Visualización de dashboard específico

**Funcionalidades**:
- Renderizado de dashboard con Graphic Walker
- Compartir dashboard (dialog de share)
- Exportar datos
- Filtros interactivos
- Actualización en tiempo real

#### 3.4. Dashboard Graphics (`/dashboard/graphics`)
**Propósito**: Visualizaciones especializadas

**Funcionalidades**:
- **Sentiment Graphic**: Análisis de sentimiento
- **Sentiment Graphic Pie**: Distribución de sentimientos
- **Topic Graphic**: Análisis de temas/tópicos

#### 3.5. Dashboard Search (`/dashboard/search`)
**Propósito**: Búsqueda de dashboards y datos

**Funcionalidades**:
- Búsqueda full-text
- Filtros avanzados
- Resultados paginados

#### 3.6. Dashboard Token View (`/dashboard/token/[id]`)
**Propósito**: Vista pública de dashboard mediante token

**Funcionalidades**:
- Acceso sin autenticación mediante token
- Vista de solo lectura
- Compartir con stakeholders externos

---

### 4. Home / Category Details (`/home/[id]`)
**Propósito**: Análisis detallado de una categoría de tickets

**Componentes Principales**:

#### 4.1. Header
- Nombre de la categoría
- Información de parent category
- Breadcrumbs de navegación

#### 4.2. Metrics Cards
- **Total Tickets**: Cantidad total de tickets
- **Automated Tickets**: Tickets automatizados y porcentaje
- **Total Automations**: Número de automatizaciones activas
- **Success Rate**: Tasa de éxito de automatizaciones
- **Failure Rate**: Tasa de fallo

#### 4.3. Control Bar
- **Status Filter**: All, Automated, Manual, Success, Failed
- **Date Range Selector**: Con presets y selección personalizada
- **Clear Button**: Resetear a valores por defecto

#### 4.4. Ticket List Table
- Tabla paginada de tickets
- Columnas:
  - Subject
  - Created Date
  - Status (Automated/Manual/Success/Failed)
  - Automation Details
- Búsqueda en tiempo real
- Paginación configurable
- Click en fila para ver detalles

#### 4.5. Opportunity Analysis
- **RICE Score Breakdown**:
  - Reach (Alcance)
  - Impact (Impacto)
  - Confidence (Confianza)
  - Effort (Esfuerzo)
- **Financial Impact Table**:
  - Parámetros financieros
  - Ahorro anual estimado
  - Fuentes de datos

#### 4.6. Solution Implementation
- **AI-Generated Strategy**: Estrategia de automatización generada por IA
- **KPIs**: Indicadores clave de rendimiento
- Benchmarks actuales vs objetivos post-lanzamiento

#### 4.7. Data Exploration
- **Ticket Explorer**: Explorador de tickets con análisis de sentimiento
- **Root Cause Analysis**: Análisis de causa raíz con insights de IA
- **Volume by Category**: Distribución de volumen por categoría
- **High Impact Issues**: Problemas de alto impacto identificados
- **Sentiment Distribution**: Distribución de sentimientos (positivo/negativo/neutral)

#### 4.8. Financial Impact Table
- Desglose financiero detallado
- Estimaciones de ahorro
- ROI proyectado

**Características Técnicas**:
- Filtros persistentes en localStorage
- Sincronización con URL params
- Carga progresiva de datos (main data + AI strategy)
- Cache de 24 horas para contenido generado por IA

---

### 5. Ticket Queue (`/ticket-queue`)
**Propósito**: Cola de verificación y revisión de tickets

**Componentes**:

#### 5.1. Stats Bar
- Contador de tickets que necesitan revisión
- Métricas rápidas

#### 5.2. Ticket List
- Lista con infinite scroll
- Filtros y búsqueda
- Selección de ticket
- Estados de carga

#### 5.3. Ticket Details
Vista detallada con tabs:

**Verification Tab**:
- Clasificación taxonómica
- Feedback y correcciones
- Confianza de clasificación
- Opciones de re-clasificación

**Events Tab**:
- Timeline de eventos del ticket
- Comentarios y actualizaciones
- Historial de cambios

**Metrics Tab**:
- RICE scoring
- Análisis de sentimiento
- SLA tracking
- Métricas de rendimiento

**Audit Tab**:
- Tabla de auditoría
- Historial completo de acciones
- Trazabilidad

**Características Técnicas**:
- Infinite scroll con Intersection Observer
- Context API para gestión de estado
- Custom hooks para lógica de negocio
- Error boundaries para manejo de errores
- Componentes modulares y reutilizables

---

### 6. Connections (`/connections`)

#### 6.1. Connections List (`/connections`)
**Propósito**: Gestión de conexiones a sistemas externos

**Funcionalidades**:
- Lista de conexiones (principalmente Airbyte)
- Estados: Active, Inactive, Error, Syncing
- Filtros por estado
- Acciones: ver detalles, editar, eliminar, sincronizar

#### 6.2. Connection Details (`/connections/[id]`)
**Propósito**: Detalles y configuración de una conexión

**Componentes**:
- **Airbyte Status Card**: Estado de sincronización
- **Schema Stream**: Visualización de streams de datos
- **Timeline**: Historial de sincronizaciones
- **Connection Status Badge**: Indicador visual de estado
- **Data Table**: Datos sincronizados
- **Configuration**: Edición de configuración

**Características**:
- Integración con Airbyte para ETL
- Sincronización programada
- Monitoreo de estado
- Visualización de esquemas

---

### 7. Sources (`/sources`)

#### 7.1. Sources List (`/sources`)
**Propósito**: Gestión de fuentes de datos

**Funcionalidades**:
- Lista de fuentes configuradas
- Estados: Active, Inactive, Error
- Filtros por estado
- Botón "New source" para crear
- Acciones: ver, editar, eliminar, probar conexión

#### 7.2. Create Source (`/sources/create`)
**Propósito**: Configuración de nueva fuente de datos

**Funcionalidades**:
- Selección de tipo de fuente
- Configuración de credenciales
- Prueba de conexión
- Mapeo de esquemas
- Configuración de triggers (si aplica)

---

### 8. Resources (`/resources`)

#### 8.1. Resources Main (`/resources`)
**Propósito**: Hub central de recursos del sistema

**Funcionalidades**:
- Grid de "Recently viewed object types"
- Búsqueda de recursos
- Cards con información:
  - Nombre del recurso
  - Cantidad de objetos
  - Dependencias
  - Operaciones disponibles
  - Descripción

**Recursos Disponibles**:
- Campaign
- Ticket
- Workstation
- Employee
- Office
- Report
- Meeting
- Email
- Chat

#### 8.2. Properties (`/resources/properties`)
**Propósito**: Gestión de propiedades de objetos

**Funcionalidades**:
- Lista de propiedades definidas
- Crear/editar/eliminar propiedades
- Tipos de datos soportados
- Validaciones y constraints
- Asociación a object types

#### 8.3. Shared Properties (`/resources/shared-properties`)
**Propósito**: Propiedades compartidas entre múltiples recursos

**Funcionalidades**:
- Gestión de propiedades globales
- Data table con CRUD completo
- Filtros y búsqueda
- Reutilización entre recursos

#### 8.4. Link Types (`/resources/link-types`)
**Propósito**: Definición de tipos de relaciones entre objetos

**Funcionalidades**:
- Crear tipos de enlaces
- Configurar cardinalidad
- Definir direccionalidad
- Validaciones de relaciones

#### 8.5. Functions (`/resources/functions`)

##### 8.5.1. Functions List (`/resources/functions`)
**Propósito**: Lista de funciones personalizadas

**Funcionalidades**:
- Tabla de funciones
- Filtros por estado, visibilidad
- Acciones: ejecutar, editar, eliminar

##### 8.5.2. Create Function (`/resources/functions/create`)
**Propósito**: Constructor de funciones con IA

**Modo Wizard (AI Builder)**:
- **Step 1: Context Selection**
  - Selección de fuentes de datos
  - Múltiple selección soportada
  - Preview de datos

- **Step 2: Data Preview**
  - Visualización de datos seleccionados
  - Tabla interactiva
  - Filtros básicos

- **Step 3: Function Description**
  - Input de descripción en lenguaje natural
  - Ejemplos y sugerencias
  - Validación de entrada

- **Step 4: Trigger Configuration**
  - Tipo de trigger (Manual, Schedule, Event)
  - Configuración de schedule (hourly, daily, weekly)
  - Selección de eventos de fuentes conectadas
  - Condiciones y filtros

- **Step 5: Result & Code Generation**
  - Código generado por IA
  - Análisis del agente
  - Preview de resultados
  - Edición de nombre y descripción
  - Guardado y publicación

**Modo Classic Editor**:
- Editor Monaco (VS Code-like)
- Sintaxis highlighting
- Autocompletado
- Configuración manual de función
- Campos: nombre, fuente, visibilidad, código

**Características Técnicas**:
- Generación de código con IA (OpenAI)
- Validación de código
- Preview de resultados
- Integración con sistema de triggers
- Gestión de dependencias

#### 8.6. MCP Servers (`/resources/mcp`)
**Propósito**: Gestión de Model Context Protocol servers

**Funcionalidades**:
- Lista de servidores MCP disponibles
- Catálogo de servidores pre-configurados:
  - Vectara MCP Server
  - HubSpot MCP Server
  - PayPal MCP server
  - Merge MCP
  - AgentQL
  - Y muchos más...
- Configuración de conexiones
- Extracción de endpoints desde Swagger/OpenAPI
- Integración con sistemas externos

**Características**:
- Soporte para MCP (Model Context Protocol)
- Integración con APIs externas
- Parsing de especificaciones Swagger
- Proxy para evitar CORS

---

### 9. Inference (`/inference`)
**Propósito**: Sistema de chat e inferencia con IA

#### 9.1. Inference Main (`/inference`)
**Funcionalidades**:
- **Threads List**: Lista de conversaciones
  - Infinite scroll
  - Búsqueda por título
  - Crear nuevo thread
  - Navegación a conversaciones

- **Collections Sidebar**: Organización de threads
  - Crear colecciones
  - Agrupar threads
  - Colaboración
  - Compartir colecciones

**Características**:
- Integración con modelos de IA
- Historial de conversaciones
- Organización en colecciones
- Búsqueda full-text
- Responsive design (tabs en mobile)

#### 9.2. Chat Session (`/inference/chat/[id]`)
**Propósito**: Interfaz de chat individual

**Funcionalidades**:
- Interfaz de chat tipo ChatGPT
- Streaming de respuestas
- Historial de mensajes
- Input de usuario
- Regeneración de respuestas
- Edición de mensajes
- Compartir conversación

#### 9.3. Collection Management (`/inference/collection/[id]`)
**Propósito**: Gestión de colección de threads

**Funcionalidades**:
- Lista de threads en colección
- Invitaciones a colaboradores
- Edición de colección
- Configuración de permisos
- Eliminación de threads

---

### 10. Inventory (`/inventory`)
**Propósito**: Sistema completo de gestión de inventario

> **Nota**: Este módulo está actualmente oculto en la navegación pero completamente implementado.

#### 10.1. Parts (`/inventory/parts`)
**Funcionalidades**:
- CRUD completo de partes
- Data table con filtros
- Detalles de parte:
  - Información general
  - Parámetros
  - Stock items
  - Allocations
  - Used In (dónde se usa)
  - Part Pricing
  - Suppliers
  - Purchase Orders
  - Stock History
  - Scheduling
  - Related Parts
  - Attachments
  - Notes

#### 10.2. Subcategories (`/inventory/subcategories`)
**Funcionalidades**:
- Gestión de subcategorías
- Jerarquía de categorías
- Asociación con partes
- Stock items por subcategoría

#### 10.3. Stock Items (`/inventory/stock-items`)
**Funcionalidades**:
- Gestión de items en stock
- Tracking de inventario
- Allocations
- Historial de movimientos
- Attachments y notas

#### 10.4. Stock Locations (`/inventory/stock-locations`)
**Funcionalidades**:
- Gestión de ubicaciones de almacén
- Jerarquía de ubicaciones
- Stock items por ubicación
- Default parts por ubicación
- Transferencia de stock
- Conteo de stock

#### 10.5. Suppliers (`/inventory/suppliers`)
**Funcionalidades**:
- CRUD de proveedores
- Contactos y direcciones
- Supplied parts
- Purchase orders asociados
- Stock items suministrados
- Attachments y notas

#### 10.6. Manufacturers (`/inventory/manufacturers`)
**Funcionalidades**:
- Gestión de fabricantes
- Manufactured parts
- Supplied parts
- Purchase orders
- Stock items
- Sales orders
- Return orders
- Assigned stock
- Contactos y direcciones

#### 10.7. Purchase Orders (`/inventory/purchase-orders`)
**Funcionalidades**:
- Creación y gestión de órdenes de compra
- Line items
- Received stock tracking
- Estados de orden
- Attachments y notas

#### 10.8. Build Orders (`/inventory/build-orders`)
**Funcionalidades**:
- Órdenes de construcción/ensamblaje
- Line items
- Incomplete/Completed outputs
- Allocated stock
- Consumed stock
- Child build orders
- Test results
- Attachments y notas

#### 10.9. Parameters (`/inventory/parameters`)
**Funcionalidades**:
- Gestión de parámetros de partes
- Configuración de especificaciones
- Validaciones
- Asociación con partes

---

### 11. Settings (`/settings`)
**Propósito**: Configuración de cuenta y organización

#### 11.1. Account Settings (`/settings`)
**Funcionalidades**:
- **Profile Tab**: Información personal del usuario
- **Account Tab**: Configuración de cuenta
- **Organization Tab**: Gestión de organización
  - Crear organización
  - Invitar miembros
  - Gestión de roles
- **API Tab**: Gestión de API keys
- **Widget Tab**: Configuración de widgets (Chatwoot)
- **Invite Form**: Formulario de invitación

---

### 12. Search (`/search`)
**Propósito**: Búsqueda global en la plataforma

**Funcionalidades**:
- Búsqueda unificada
- Resultados de múltiples módulos
- Filtros por tipo
- Navegación rápida

---

### 13. Discover (`/discover`)
**Propósito**: Descubrimiento de funcionalidades y recursos

**Funcionalidades**:
- Exploración de capacidades
- Tutoriales y guías
- Recursos destacados
- Onboarding

---

## 💪 Fortalezas Técnicas

### 1. Arquitectura Moderna
- **Next.js 14** con App Router
- **React 18** con Server Components
- **TypeScript** para type safety
- **React Query** para gestión de estado del servidor
- **Zustand/Context API** para estado local

### 2. UI/UX Avanzada
- **shadcn/ui**: Componentes accesibles y personalizables
- **Radix UI**: Primitivos headless
- **Tailwind CSS**: Estilos utility-first
- **Responsive Design**: Mobile-first approach
- **Dark Mode**: Soporte completo
- **Animaciones**: Transiciones suaves

### 3. Integración con IA
- **OpenAI Integration**: Para generación de código y análisis
- **Gemini 2.0 Flash**: Para estrategias de automatización
- **AI-Powered Insights**: Análisis automático de datos
- **Natural Language Processing**: Para descripciones de funciones

### 4. Visualización de Datos
- **Graphic Walker**: Análisis exploratorio avanzado
- **Chart.js / Recharts**: Gráficos interactivos
- **Nivo Charts**: Visualizaciones especializadas
- **Custom Charts**: Gráficos personalizados para métricas específicas

### 5. Gestión de Estado
- **React Query**: Caching inteligente y sincronización
- **Infinite Queries**: Para scroll infinito
- **Optimistic Updates**: Mejora de UX
- **Local Storage**: Persistencia de preferencias

### 6. Performance
- **Code Splitting**: Carga lazy de componentes
- **Image Optimization**: Next.js Image component
- **Memoization**: React.memo y useMemo estratégicos
- **Debouncing**: Para búsquedas y filtros

### 7. Developer Experience
- **TypeScript**: Type safety completo
- **ESLint**: Linting configurado
- **Husky**: Git hooks
- **Monaco Editor**: Editor de código avanzado
- **Hot Reload**: Desarrollo rápido

### 8. Integraciones
- **Airbyte**: ETL y sincronización de datos
- **MCP Protocol**: Model Context Protocol
- **Swagger/OpenAPI**: Parsing automático de APIs
- **Chatwoot**: Widget de soporte
- **Multiple Data Sources**: Conectores flexibles

### 9. Seguridad
- **Authentication**: Sistema de autenticación
- **Token Management**: Gestión segura de tokens
- **API Security**: Validación de endpoints
- **CORS Handling**: Proxy para evitar problemas de CORS

### 10. Escalabilidad
- **Modular Architecture**: Componentes reutilizables
- **API Abstraction**: Capa de abstracción para APIs
- **Error Boundaries**: Manejo robusto de errores
- **Loading States**: Estados de carga consistentes

---

## 🛠 Stack Tecnológico

### Frontend
- **Framework**: Next.js 14.2.8
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.1
- **Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Validation**: @hookform/resolvers

### State Management
- **Server State**: React Query 3.39.3
- **Client State**: React Context API
- **Local Storage**: Custom hooks

### Data Visualization
- **Graphic Walker**: @kanaries/graphic-walker 0.4.74
- **Charts**: Chart.js 4.4.8, Recharts 2.15.1
- **Specialized**: @nivo/bar, @nivo/pie

### AI & ML
- **AI SDK**: Vercel AI SDK 3.0.14
- **OpenAI**: @ai-sdk/openai
- **Code Highlighting**: Shiki 1.20.0

### Code Editing
- **Monaco Editor**: @monaco-editor/react 4.7.0
- **Syntax Highlighting**: react-syntax-highlighter

### Data Processing
- **Date Handling**: date-fns 2.30.0
- **YAML**: js-yaml 4.1.0
- **Utilities**: lodash 4.17.21

### Tables & Grids
- **React Table**: @tanstack/react-table 8.17.3
- **React Grid**: @silevis/reactgrid 4.1.15

### Calendar & Date Picker
- **React Day Picker**: react-day-picker 8.10.1

### Markdown & Content
- **Markdown**: react-markdown 9.0.1
- **GFM**: remark-gfm 4.0.0
- **HTML Parsing**: html-react-parser, dompurify

### HTTP Client
- **Axios**: 1.7.7
- **Swagger Client**: swagger-client 3.35.5

### Development Tools
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky 9.0.11
- **Build**: Next.js standalone output

### Observability
- **OpenTelemetry**: @opentelemetry/api, @opentelemetry/sdk-node
- **Tracing**: @opentelemetry/exporter-trace-otlp-http

---

## 🏗 Arquitectura y APIs

### Estructura de Carpetas
```
app/
├── api/              # API routes (Next.js API routes)
├── automation/       # Módulo de automatización
├── dashboard/        # Dashboards y visualizaciones
├── home/             # Detalles de categorías
├── ticket-queue/     # Cola de verificación
├── connections/      # Gestión de conexiones
├── sources/          # Fuentes de datos
├── resources/        # Recursos del sistema
├── inventory/        # Gestión de inventario
├── inference/        # Chat e IA
├── settings/         # Configuración
└── ...

components/
├── ui/               # Componentes UI base
├── navigation/       # Componentes de navegación
└── ...

lib/
├── hooks/            # Custom React hooks
├── utils/            # Utilidades
└── ...
```

### API Endpoints

#### Dashboard APIs
- `GET /v1/classifier/dashboard/stats/` - Estadísticas generales
- `GET /v1/classifier/dashboard/level2-breakdown/` - Desglose por categoría
- `GET /v1/classifier/dashboard/chart-data/` - Datos para gráficos
- `GET /v1/classifier/dashboard/category-details/` - Detalles de categoría
- `GET /v1/classifier/automation-opportunities/` - Oportunidades de automatización
- `GET /v1/classifier/automation-opportunities/{id}/` - Detalle de oportunidad
- `GET /v1/classifier/automation-opportunities/{id}/strategy/` - Estrategia IA

#### Tickets APIs
- `GET /v1/classifier/tickets/` - Lista de tickets
- `GET /v1/classifier/tickets/{id}/` - Detalle de ticket
- `POST /v1/classifier/feedback/` - Crear feedback
- `GET /v1/classifier/feedback/list/` - Lista de feedback
- `GET /v1/classifier/taxonomies/` - Taxonomías

#### Inference APIs
- `GET /v1/inference/chat-sessions/` - Sesiones de chat
- `POST /v1/inference/chat-sessions/` - Crear sesión
- `GET /v1/collection/` - Colecciones

#### Account APIs
- `GET /v1/account/` - Información de cuenta
- `POST /v1/account/create/` - Crear cuenta
- `POST /v1/account/login/` - Login
- `POST /v1/account/logout/` - Logout
- `PUT /v1/account/edit/` - Editar cuenta
- `GET /v1/account/organization/` - Organización

#### Inventory APIs (implícitos)
- Endpoints para gestión de inventario (parts, stock, suppliers, etc.)

### Patrones de Diseño

#### 1. Custom Hooks Pattern
- Lógica de negocio encapsulada en hooks
- Reutilización de código
- Separación de concerns

#### 2. Component Composition
- Componentes pequeños y enfocados
- Composición sobre herencia
- Props drilling minimizado con Context

#### 3. Container/Presentational
- Containers para lógica
- Presentational components para UI
- Separación clara de responsabilidades

#### 4. Provider Pattern
- Context providers para estado global
- Theme provider
- Query client provider

#### 5. Factory Pattern
- Generación de componentes dinámicos
- Resolución de iconos
- Creación de funciones

---

## 🔌 Integraciones Externas

### 1. Airbyte
- **Propósito**: ETL y sincronización de datos
- **Funcionalidad**: Conectar múltiples fuentes de datos
- **Uso**: Connections module

### 2. OpenAI
- **Propósito**: Generación de código y análisis
- **Funcionalidad**: 
  - Generación de funciones desde descripciones
  - Análisis de datos
  - Estrategias de automatización

### 3. Gemini 2.0 Flash
- **Propósito**: Estrategias de automatización
- **Funcionalidad**: Generación de estrategias basadas en métricas RICE

### 4. Model Context Protocol (MCP)
- **Propósito**: Integración con sistemas externos
- **Funcionalidad**: 
  - Servidores MCP pre-configurados
  - Extracción de endpoints desde Swagger
  - Integración con APIs externas

### 5. Chatwoot
- **Propósito**: Widget de soporte al cliente
- **Funcionalidad**: Chat en vivo integrado

### 6. Tavily AI (mencionado en README)
- **Propósito**: Búsqueda y análisis web
- **Estado**: Configurado pero uso no evidente en código actual

### 7. Swagger/OpenAPI
- **Propósito**: Parsing de especificaciones de API
- **Funcionalidad**: Extracción automática de endpoints

---

## 📊 Métricas y KPIs del Sistema

### Métricas Principales
1. **Automation Rate**: % de tickets automatizados
2. **Success Rate**: % de automatizaciones exitosas
3. **Failure Rate**: % de automatizaciones fallidas
4. **RICE Score**: Puntuación de priorización
5. **Ticket Volume**: Volumen de tickets por período
6. **Confidence Score**: Confianza en clasificación
7. **Estimated Annual Savings**: Ahorro anual estimado
8. **Automation Runs**: Número de ejecuciones

### Períodos Soportados
- Daily
- Weekly
- Monthly
- Yearly
- Year-to-Date (YTD)
- Custom Date Range

---

## 🎨 Características de UX Destacadas

### 1. Filtros Persistentes
- Guardado en localStorage
- Sincronización con URL params
- Restauración automática

### 2. Infinite Scroll
- Implementado en múltiples listas
- Intersection Observer API
- Loading states optimizados

### 3. Date Range Selector
- Presets rápidos (Today, Week, Month, Year)
- Selección personalizada
- Calendario dual para rangos largos
- Selección directa de año/mes

### 4. Responsive Design
- Mobile-first approach
- Tabs en mobile para secciones complejas
- Bottom menu en mobile
- Sidebar colapsable

### 5. Loading States
- Spinners consistentes
- Skeleton screens donde aplica
- Optimistic updates

### 6. Error Handling
- Error boundaries
- Toast notifications
- Retry mechanisms
- Fallbacks elegantes

### 7. Accessibility
- Radix UI components (ARIA compliant)
- Keyboard navigation
- Screen reader support
- Focus management

---

## 🔒 Seguridad y Autenticación

### Autenticación
- Sistema de login/logout
- Token-based authentication
- Gestión de sesiones
- Protección de rutas

### Autorización
- Roles y permisos (implícito)
- Organizaciones y miembros
- Invitaciones

### Seguridad de Datos
- Validación de inputs
- Sanitización de datos
- CORS handling
- API security

---

## 📈 Roadmap y Funcionalidades Futuras

### Módulos Ocultos (Comentados)
1. **Inventory Module**: Completamente implementado pero oculto
2. **Home Submenu**: Algunas opciones ocultas
3. **Resources Submenus**: Varios submenús deshabilitados

### Mejoras Potenciales
1. **Real-time Updates**: WebSockets para actualizaciones en tiempo real
2. **Advanced Analytics**: Más tipos de análisis
3. **Mobile App**: Aplicación nativa
4. **API Publica**: Documentación y acceso público
5. **Marketplace**: Intercambio de automatizaciones
6. **Collaboration**: Mejoras en colaboración
7. **Reporting**: Sistema de reportes avanzado

---

## 🎯 Conclusión

**FractalGrid** es una plataforma empresarial robusta y completa que combina:
- **Inteligencia Artificial** para análisis y automatización
- **Visualización de Datos** avanzada para insights
- **Workflow Automation** para eficiencia operativa
- **Integración de Sistemas** para conectividad
- **Gestión de Inventario** completa (módulo oculto)

La plataforma está diseñada para escalar y adaptarse a las necesidades de empresas medianas y grandes que buscan automatizar procesos y obtener insights accionables de sus datos de soporte técnico y operaciones.

### Puntos Fuertes
✅ Arquitectura moderna y escalable
✅ Integración profunda con IA
✅ UI/UX pulida y responsive
✅ Módulos completos y funcionales
✅ Extensibilidad mediante MCP y APIs
✅ Performance optimizado

### Áreas de Oportunidad
🔸 Documentación de APIs
🔸 Tests automatizados
🔸 Internacionalización (i18n)
🔸 Onboarding mejorado
🔸 Marketplace de automatizaciones

---

**Última actualización**: Análisis basado en código actual del proyecto
**Versión analizada**: Basada en package.json v0.1.0
**Estado del proyecto**: Activo en desarrollo
