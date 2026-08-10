---
title: REST API dan OAuth
sidebar_position: 4
---

# REST API dan OAuth

Buka **REST API** untuk memilih instance dan melihat endpoint, sampel **Try it**, **Sample 200**, **Errors** dan **cURL**.

Token akses pasukan dipaparkan secara disembunyikan. Salin hanya ke pengurus rahsia atau konfigurasi pelayan yang dibenarkan. Jangan letakkan token dalam tangkapan skrin, repositori atau mesej pelanggan.

Untuk OAuth atau MCP, buka **Settings → OAuth & MCP**:

1. Buka **Create Client**.
2. Pilih preset paling minimum.
3. Pilih scopes dan audiences yang diperlukan.

Scope API atau MCP admin memerlukan audience `wabot:admin` dan hanya tersedia untuk pengguna admin.
Scope API pengguna atau WhatsApp memerlukan sama ada audience `wabot:api` atau `wabot:mcp`.
4. Isi nama klien, redirect URI dan jenis confidential.
5. Cipta klien dan simpan secret sekali sahaja.

Gunakan **Clients** untuk menyemak klien, **Grants** untuk membatalkan persetujuan yang tidak lagi diperlukan, dan **Setup Guide** untuk langkah integrasi.
