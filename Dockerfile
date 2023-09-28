# Gunakan base image dari Node.js versi 18
FROM node:18

# Update paket dan upgrade
RUN apt-get update -y && apt-get upgrade -y

# Instal neofetch, coreutils, dan ffmpeg
RUN apt-get install -y \
  neofetch \
  coreutils \
  ffmpeg

# Menyalin package.json terlebih dahulu (untuk cache jika package.json tidak berubah, Docker akan menggunakan layer cache)
COPY package.json .

# Menyalin seluruh konten proyek
COPY . .

# Instal pm2 secara global
RUN npm i -g pm2

# Instal dependensi proyek
RUN npm install

# Jalankan aplikasi dengan pm2-runtime
CMD pm2-runtime .
