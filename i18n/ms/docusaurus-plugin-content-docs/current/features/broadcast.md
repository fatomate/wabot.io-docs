---
title: WhatsApp Blast
sidebar_position: 3
---

# WhatsApp Blast

Gunakan **Broadcast** untuk menghantar kempen kepada kumpulan kenalan atau pelanggan bersegmen.

## Sebelum menghantar

1. Sambungkan akaun WhatsApp penghantar.
2. Sediakan **Broadcast List** atau segmen pelanggan.
3. Sediakan media dalam File Manager.
4. Untuk API Rasmi, segerakkan templat Meta yang telah diluluskan.
5. Uji dengan nombor terkawal dan hantar hanya kepada penerima yang telah memberi persetujuan.

## Cipta siaran

Klik **Create** dan lengkapkan tiga langkah:

1. **Account & Audience**: masukkan nama, pilih **Unofficial API** atau **Official API**, pilih akaun, kemudian pilih **Contact Groups** atau **Segmented Subscriber**. Gunakan **Include Groups** dan **Exclude Groups** atau syarat segmen. Semak anggaran penerima.
2. **Create Message**: pilih mesej biasa atau templat, tulis mesej, tambah media/placeholder, dan semak pratonton. Poll tidak tersedia untuk siaran API Rasmi.
3. **Schedule & Send**: pilih **Send Now** atau jadualkan tarikh dan masa, kemudian semak semula penerima, pengecualian, mesej dan akaun.

## Laporan dan pemulihan

Klik **Report** untuk melihat tab **Overview** dan **Engagement**, status penerima, ralat, balasan dan **Refresh Replies**.

- **Resume** meneruskan penerima layak untuk siaran dijeda, gagal atau dibatalkan.
- **Restart** memulakan semula siaran gagal/dibatalkan.
- **Force Restart** boleh menyebabkan pendua.
- **Reprocess Failed** hanya memproses penerima gagal.
- **Retry Unknown** ialah laluan API Tidak Rasmi yang berisiko menghasilkan mesej pendua.
- **Clone** mencipta kempen salinan dan mengekalkan laporan asal.

## Retarget

Tanpa akses audience, nombor penerima dan kandungan balasan boleh disembunyikan, manakala eksport dan Retarget yang bergantung pada audience tidak tersedia.

Untuk susulan berdasarkan hasil kempen asal:

1. Buka **Broadcast → Report → Retarget**.
2. Masukkan nama siaran baharu.
3. Pilih **All Recipients**, **Pending**, **Sent**, **Not Delivered**, **Delivered**, **Not Read**, **Read**, **Not Reply**, **Replied**, atau **Failed**.
4. Semak **Estimated Recipients**.
5. Klik **Create Draft**, semak draf dan kemudian hantar atau jadualkan.

Wabot mencipta draf berasingan dengan kumpulan retarget sementara yang dikunci. Pilih **Read** untuk susulan kepada penerima yang telah membuka/membaca mesej. Elakkan **Read**, **Delivered** atau **All Recipients** melainkan kandungan susulan dan masa penghantaran disengajakan.
