Docker Advance - Automation Test with Selenium

Deskripsi:
Project ini dibuat untuk memenuhi tugas sesi 5 Docker Advance.
Tujuan: menjalankan automation test menggunakan Node.js + Mocha + Selenium di dalam container.

Struktur Project:
docker-mount-demo/
  .dockerignore
  .gitignore
  docker-compose.yaml
  Dockerfile
  package.json
  package-lock.json
  server.js
  test/
    test.js

Cara Menjalankan:
1. Build image
   docker compose build

2. Jalankan test
   docker compose up --build

3. Cek image
   docker images

Hasil Laporan:
- Link GitHub project
- Screenshot docker images
- Screenshot docker compose up --build
