<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- Start Section Navbar -->
    <header
      class="header-area header-sticky wow slideInDown"
      data-wow-duration="0.75s"
      data-wow-delay="0s"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <!-- ***** Logo Start ***** -->
              <a href="index.html" class="logo">
                <img
                  src="/assets/images/Logo/Logo-removebg.png"
                  style="height: 50px"
                  alt="Chain App Dev"
                />
              </a>
              <!-- ***** Logo End ***** -->
              <!-- ***** Menu Start ***** -->
              <ul class="nav">
                <li class="scroll-to-section"><a href="#top" class="active">Beranda</a></li>
                <li class="scroll-to-section"><a href="#services">Tentang Kami</a></li>
                <li class="scroll-to-section"><a href="#about">Layanan Kami</a></li>
                <li class="scroll-to-section"><a href="#pricing">Portofolio</a></li>
                <li>
                  <div class="gradient-button">
                    <a id="modal_trigger" href="#modal"
                      ><i class="fa fa-whatsapp"></i> Hubungi Kami</a
                    >
                  </div>
                </li>
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
              <!-- ***** Menu End ***** -->
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- End Section -->
    <!-- Start Section Header -->
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6 align-self-center">
                <div
                  class="left-content show-up header-text wow fadeInLeft"
                  data-wow-duration="1s"
                  data-wow-delay="1s"
                >
                  <div class="row">
                    <div class="col-lg-12">
                      <h2 style="color: #036ece">Transformasikan Bisnis Anda Bersama DiveraTech</h2>
                      <p>
                        Kami siap membantu mempercepat transformasi digital Anda melalui solusi
                        website yang cerdas, efisien, dan dirancang khusus untuk kebutuhan bisnis
                        modern.
                      </p>
                    </div>
                    <div class="col-lg-12">
                      <div class="gradient-button first-button scroll-to-section">
                        <a href="#contact"
                          ><i class="fab fa-whatsapp"></i> Jadwalkan Konsultasi Gratis
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="right-image wow fadeInRight"
                  data-wow-duration="1s"
                  data-wow-delay="0.5s"
                >
                  <img src="/assets/images/right-header.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- EndSection -->

    <!-- Start Section Data Trend -->
    <div id="data" class="services section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2">
            <div
              class="section-heading wow fadeInDown"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <h4 class="text-black">Tren Digital yang Tak Bisa Diabaikan</h4>
              <img src="/assets/images/heading-line-dec.png" alt="" />
              <p class="text-black">
                Data terbaru menunjukkan bahwa bisnis dengan solusi digital sendiri lebih unggul
                dalam loyalitas pelanggan, efisiensi, dan pengalaman pengguna. Saatnya
                bertransformasi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Bisnis dengan Aplikasi Sendiri = +35% Loyalitas</h4>
              <p class="text-black">
                Dibandingkan dengan bisnis yang hanya mengandalkan media sosial atau marketplace,
                bisnis dengan aplikasi sendiri memiliki retensi pelanggan 35% lebih tinggi.
                <br /><em>– Adobe Digital Economy Index, 2022</em>
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Efisiensi Operasional Jadi Prioritas</h4>
              <p class="text-black">
                68% UKM memilih aplikasi web internal untuk mempercepat proses kerja dan menghemat
                biaya operasional.
                <br /><em>— Clutch Survey, 2023</em>
              </p>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="service-item">
              <h4 class="text-blue">Web Kustom Dambaan Konsumen</h4>
              <p class="text-black">
                76% konsumen lebih memilih brand yang menyediakan pengalaman digital yang konsisten
                di semua platform.
                <br /><em>— Forbes, 2024</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Why Choose Us? -->
    <section id="why-us" class="why-us section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 text-center">
            <div class="section-heading">
              <h4>Kenapa Harus Pilih <b class="text-blue"> DiveraTech?</b></h4>
              <p class="text-black">
                Lebih dari sekadar penyedia jasa IT, kami adalah partner yang memahami kebutuhan
                bisnis Anda dan memberikan solusi nyata yang berdampak.
              </p>
            </div>
          </div>
        </div>

        <div class="row gy-4 mt-4">
          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🔧</div>
            <div>
              <h5 class="text-blue text-bold">Solusi Web yang Disesuaikan</h5>
              <p class="text-black">
                Kami merancang aplikasi yang benar-benar sesuai dengan karakter dan kebutuhan bisnis
                Anda.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">💡</div>
            <div>
              <h5 class="text-blue text-bold">Tim Profesional & Berkomitmen</h5>
              <p class="text-black">
                Fokus pada kualitas, hasil rapi, responsif, dan tepat waktu adalah komitmen kami di
                setiap proyek.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🔁</div>
            <div>
              <h5 class="text-blue text-bold">Garansi Revisi</h5>
              <p class="text-black">
                Kami memberikan garansi revisi sesuai kesepakatan—karena kepuasan Anda adalah
                prioritas utama kami.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🛠️</div>
            <div>
              <h5 class="text-blue text-bold">Free Maintenance</h5>
              <p class="text-black">
                Kami tetap mendampingi setelah aplikasi selesai dengan layanan perawatan gratis di
                awal masa pakai.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">🤝</div>
            <div>
              <h5 class="text-blue text-bold">Komunikasi Terbuka</h5>
              <p class="text-black">
                Anda terlibat dalam proses sejak awal—kami percaya kolaborasi menghasilkan solusi
                yang lebih baik.
              </p>
            </div>
          </div>

          <div class="col-md-6 d-flex">
            <div class="me-3 fs-3">📊</div>
            <div>
              <h5 class="text-blue text-bold">Hasil Terukur</h5>
              <p class="text-black">
                Fokus kami bukan hanya menyelesaikan proyek, tapi menciptakan dampak nyata dan
                terukur untuk bisnis Anda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EndSection -->

    <!-- Start Section Layanan -->
    <div id="about" class="about-us section">
      <div class="container">
        <div class="row">
          <!-- Kiri: Deskripsi dan Layanan -->
          <div class="col-lg-6 align-self-center">
            <div class="section-heading">
              <h4>Layanan <b class="text-blue">DiveraTech</b></h4>
              <img src="/assets/images/heading-line-dec.png" alt="" />
              <p class="text-black">
                Kami menyediakan solusi web yang dirancang khusus untuk menunjang kebutuhan digital
                bisnis Anda, dari awal hingga tahap dukungan berkelanjutan.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Landing Page</a></h4>
                  <!-- <p class="text-black">
                    Desain halaman promosi yang menarik dan cepat diakses, cocok untuk kampanye
                    produk atau layanan spesifik.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Company Profile</a></h4>
                  <!-- <p class="text-black">
                    Website profesional yang menampilkan profil, visi, layanan, dan portofolio
                    bisnis Anda secara menyeluruh.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">e-Commerce</a></h4>
                  <!-- <p class="text-black">
                    Sistem toko online lengkap untuk memperluas jangkauan penjualan Anda, aman dan
                    responsif di berbagai perangkat.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Custom Web App</a></h4>
                  <!-- <p class="text-black">
                    Aplikasi web yang dirancang sesuai alur kerja internal bisnis Anda, dari
                    dashboard hingga sistem manajemen data.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Re-desain Website</a></h4>
                  <!-- <p class="text-black">
                    Pembaruan tampilan dan fungsionalitas website lama agar lebih modern, cepat, dan
                    ramah pengguna.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-6">
                <div class="box-item">
                  <h4><a href="#">Maintenance & Support</a></h4>
                  <!-- <p class="text-black">
                    Dukungan teknis dan pemeliharaan sistem agar website Anda tetap optimal, aman,
                    dan bebas dari kendala.
                  </p> -->
                </div>
              </div>
              <div class="col-lg-12">
                <!-- <p class="text-black">
                  Kami hadir bukan hanya untuk membuat website, tapi menjadi mitra yang membantu
                  Anda tumbuh lewat solusi digital yang tepat sasaran.
                </p> -->
                <div class="gradient-button">
                  <a href="#">Jadwalkan Konsultasi</a>
                </div>
                <span class="text-black">*Konsultasi gratis untuk semua calon klien</span>
              </div>
            </div>
          </div>

          <!-- Kanan: Gambar -->
          <div class="col-lg-6">
            <div class="right-image">
              <img src="/assets/images/about-right-dec.png" alt="Ilustrasi layanan DiveraTech" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- EndSection -->

    <!-- Start Section Portfolio -->
    <!-- Endsection -->

    <!-- Start Section Kalimat Iklan -->
    <!-- EndSection -->

    <!-- Start Section Contact Us -->
    <!-- EndSection -->

    <!-- Start Section Footer -->
    <!-- EndSection   -->
  </main>
</template>
