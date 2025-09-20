Objectif : fournir une API Python unifiée qui fait le pont entre tes applications et plusieurs provider d’LLM (modèles locaux via Ollama et cloud comme Google Gemini), avec support streaming et découverte dynamique des modèles.

API légère et performante construite avec Litestar (Python).

Support multi-provider (Ollama + Google Gemini) + streaming pour réponses en temps réel et endpoints utiles (GET /v1/models, POST /v1/chat/completions).

Conçu pour être containerisé (Docker / Docker Compose) afin de faciliter le déploiement local ou en prod.
